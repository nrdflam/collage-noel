# PaperWish

Les listes de Noël de la famille, en collage : des images découpées aux ciseaux sur une feuille de papier, à partager avec les proches qui peuvent réserver les cadeaux.

- **Éditer** : ajoute des objets (image glissée, collée, ou un simple lien produit), bouge-les, tourne-les, choisis le papier et la police.
- **Aperçu** : ce que voient les proches. Les listes en pile, un clic pour en ouvrir une, et « Je réserve ce cadeau ».
- **Réservations** : « mode surprise » par liste (Paramètres) : activé par défaut, la famille ne voit pas ce que ses proches ont réservé sur cette liste.
- **Familles** : chacune a son lien (`…/#famille-dupont-x7k2`). On se connecte par un lien reçu par mail, sans mot de passe. Pour faire modifier quelqu'un d'autre : « Famille ▾ › Inviter quelqu'un à modifier ».

Sans configuration, la page tourne en **mode local** : démo dans le navigateur, rien n'est partagé.

## Mise en ligne (une fois, ~15 min)

### 1. Supabase (base de données, comptes, images)
1. Crée un projet gratuit sur [supabase.com](https://supabase.com) (région Europe).
2. **SQL Editor › New query** : colle le contenu de [`supabase/schema.sql`](supabase/schema.sql), puis **Run**.
3. **Authentication › URL Configuration** :
   - Site URL : `https://nrdflam.github.io/collage-noel/`
   - Redirect URLs : ajoute `https://nrdflam.github.io/collage-noel/**`
4. **Edge Functions › Deploy a new function › Via Editor** : nomme-la `unfurl`, colle [`supabase/functions/unfurl/index.ts`](supabase/functions/unfurl/index.ts), déploie. Dans ses réglages, **désactive « Verify JWT »**.
   C'est elle qui lit les pages produit (titre, image, prix) quand on colle un lien. Sans elle, la page se rabat sur Microlink (gratuit, limité à ~50 liens par jour et moins bon sur Amazon).
5. **Project Settings › API** : copie l'URL du projet et la clé `anon` / `publishable`, et mets-les dans [`config.js`](config.js).
   Cette clé est faite pour être publique : la sécurité vient des règles du fichier `schema.sql`.

### 2. GitHub Pages (hébergement)
**Settings › Pages** du dépôt : Source « Deploy from a branch », branche `main`, dossier `/ (root)`.
La page est alors en ligne sur `https://nrdflam.github.io/collage-noel/`.

### 3. Reprendre une liste existante
Connecte-toi, crée ta famille, puis **Partager › Importer une sauvegarde** avec un fichier `.json` exporté depuis l'ancienne version.

## Fichiers
| | |
|---|---|
| `index.html`, `css/app.css`, `js/app.js` | la page |
| `config.js` | connexion à Supabase |
| `img/` | images d'exemple (démo et anciennes listes) |
| `supabase/schema.sql` | tables, règles d'accès, réservations, stockage des images |
| `supabase/functions/unfurl/` | lecture des liens produit |

## Ce qu'il faut savoir
- Les listes sont **lisibles par toute personne qui a le lien** (pas d'annuaire, mais l'adresse n'est pas secrète).
- « Cachées à la famille » : un membre connecté ne voit pas les réservations. S'il se déconnecte, il les voit comme un invité : c'est une protection anti-spoiler, pas un coffre-fort.
- Certains sites (Amazon surtout) bloquent parfois la lecture automatique. Dans ce cas, copie l'image (clic droit › Copier l'image) et colle-la dans le formulaire.
