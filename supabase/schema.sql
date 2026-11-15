-- Collage de Noël : schéma Supabase
-- À coller une fois dans Supabase › SQL Editor › New query › Run.

create extension if not exists pgcrypto;

-- ---------------------------------------------------------------- tables
create table if not exists public.families (
  id           text primary key,
  owner        uuid not null default auth.uid() references auth.users on delete cascade,
  data         jsonb not null default '{}'::jsonb,          -- name, subtitle
  reserve_mode text  not null default 'hidden' check (reserve_mode in ('hidden','visible')),
  invite_code  text  not null default encode(gen_random_bytes(6),'hex'),
  created_at   timestamptz not null default now()
);

create table if not exists public.members (
  family_id text references public.families on delete cascade,
  user_id   uuid references auth.users on delete cascade,
  role      text not null default 'editor',
  primary key (family_id, user_id)
);

create table if not exists public.sheets (
  id         text primary key,
  family_id  text not null references public.families on delete cascade,
  data       jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.items (
  id         text primary key,
  family_id  text not null references public.families on delete cascade,
  data       jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.reservations (
  id         uuid primary key default gen_random_uuid(),
  family_id  text not null references public.families on delete cascade,
  item_id    text not null references public.items on delete cascade,
  name       text not null default '',
  secret     uuid not null default gen_random_uuid(),
  created_at timestamptz not null default now(),
  unique (item_id)
);

create index if not exists sheets_family on public.sheets(family_id);
create index if not exists items_family  on public.items(family_id);
create index if not exists res_family    on public.reservations(family_id);

-- ---------------------------------------------------------------- helpers
create or replace function public.is_member(fid text) returns boolean
language sql stable security definer set search_path = public as $$
  select exists(select 1 from families f where f.id = fid and f.owner = auth.uid())
      or exists(select 1 from members m where m.family_id = fid and m.user_id = auth.uid());
$$;

-- le créateur devient membre
create or replace function public.add_owner_member() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into members(family_id,user_id,role) values (new.id,new.owner,'owner') on conflict do nothing;
  return new;
end $$;
drop trigger if exists families_owner on public.families;
create trigger families_owner after insert on public.families
  for each row execute function public.add_owner_member();

-- rejoindre une famille avec son code d'invitation
create or replace function public.join_family(fid text, code text) returns boolean
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then return false; end if;
  if not exists(select 1 from families where id = fid and invite_code = code) then return false; end if;
  insert into members(family_id,user_id) values (fid, auth.uid()) on conflict do nothing;
  return true;
end $$;

-- réserver (n'importe quel visiteur) : renvoie l'id et le secret pour annuler
create or replace function public.reserve_item(iid text, who text)
returns table(id uuid, secret uuid)
language plpgsql security definer set search_path = public as $$
declare fid text;
begin
  select family_id into fid from items where items.id = iid;
  if fid is null then raise exception 'objet introuvable'; end if;
  return query insert into reservations(family_id,item_id,name)
    values (fid, iid, left(coalesce(who,''),60))
    returning reservations.id, reservations.secret;
end $$;

create or replace function public.cancel_reservation(rid uuid, sec uuid) returns boolean
language plpgsql security definer set search_path = public as $$
begin
  delete from reservations where id = rid and secret = sec;
  return found;
end $$;

-- ---------------------------------------------------------------- sécurité
alter table public.families     enable row level security;
alter table public.members      enable row level security;
alter table public.sheets       enable row level security;
alter table public.items        enable row level security;
alter table public.reservations enable row level security;

-- le code d'invitation et le secret de réservation ne sont jamais lisibles directement
revoke select on public.families from anon, authenticated;
grant  select (id, owner, data, reserve_mode, created_at) on public.families to anon, authenticated;
revoke update on public.families from anon, authenticated;
grant  update (data, reserve_mode) on public.families to authenticated;
revoke select on public.reservations from anon, authenticated;
grant  select (id, family_id, item_id, name, created_at) on public.reservations to anon, authenticated;
revoke insert, update, delete on public.reservations from anon, authenticated;

drop policy if exists fam_read on public.families;
create policy fam_read on public.families for select using (true);
drop policy if exists fam_insert on public.families;
create policy fam_insert on public.families for insert to authenticated with check (owner = auth.uid());
drop policy if exists fam_update on public.families;
create policy fam_update on public.families for update using (public.is_member(id));
drop policy if exists fam_delete on public.families;
create policy fam_delete on public.families for delete using (owner = auth.uid());

drop policy if exists mem_read on public.members;
create policy mem_read on public.members for select using (user_id = auth.uid() or public.is_member(family_id));
drop policy if exists mem_delete on public.members;
create policy mem_delete on public.members for delete using (user_id = auth.uid()
  or exists(select 1 from public.families f where f.id = family_id and f.owner = auth.uid()));

drop policy if exists sh_read on public.sheets;
create policy sh_read on public.sheets for select using (true);
drop policy if exists sh_write on public.sheets;
create policy sh_write on public.sheets for all using (public.is_member(family_id)) with check (public.is_member(family_id));

drop policy if exists it_read on public.items;
create policy it_read on public.items for select using (true);
drop policy if exists it_write on public.items;
create policy it_write on public.items for all using (public.is_member(family_id)) with check (public.is_member(family_id));

-- réservations : visibles par les invités ; par la famille seulement sur les listes où le « mode surprise » est désactivé
drop policy if exists res_read on public.reservations;
create policy res_read on public.reservations for select using (
  not public.is_member(family_id)
  or exists (select 1 from public.items i join public.sheets s on s.id = i.data->>'sheet'
             where i.id = item_id and coalesce((s.data->>'surprise')::boolean, true) = false));

-- code d'invitation lisible par les membres uniquement
create or replace function public.invite_code(fid text) returns text
language sql stable security definer set search_path = public as $$
  select invite_code from families where id = fid and public.is_member(fid);
$$;

-- ---------------------------------------------------------------- temps réel
do $$ begin
  begin alter publication supabase_realtime add table public.sheets;       exception when others then null; end;
  begin alter publication supabase_realtime add table public.items;        exception when others then null; end;
end $$;
alter table public.sheets replica identity full;
alter table public.items  replica identity full;

-- ---------------------------------------------------------------- images
insert into storage.buckets (id, name, public) values ('images','images',true)
  on conflict (id) do nothing;
drop policy if exists img_read on storage.objects;
create policy img_read on storage.objects for select using (bucket_id = 'images');
drop policy if exists img_write on storage.objects;
create policy img_write on storage.objects for insert to authenticated
  with check (bucket_id = 'images' and public.is_member((storage.foldername(name))[1]));
drop policy if exists img_delete on storage.objects;
create policy img_delete on storage.objects for delete to authenticated
  using (bucket_id = 'images' and public.is_member((storage.foldername(name))[1]));
