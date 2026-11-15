/* =====================================================================
   Données de départ embarquées (images d'exemple)
   ===================================================================== */
const BUILTIN={"pua":"img/pua.jpg","wallace":"img/wallace.jpg","fusee":"img/fusee.jpg","pistolet":"img/pistolet.jpg","flipper":"img/flipper.jpg","trex":"img/trex.jpg","requin":"img/requin.jpg","drums":"img/drums.jpg"};
const BUILTIN_POLY={"pua": [[200, 330], [205, 265], [250, 262], [300, 270], [335, 190], [345, 100], [380, 95], [470, 135], [500, 105], [560, 110], [570, 175], [630, 180], [625, 270], [560, 300], [540, 320], [580, 385], [590, 465], [170, 478], [155, 410], [160, 380]], "wallace": [[175, 370], [255, 270], [295, 250], [380, 215], [395, 85], [430, 60], [470, 70], [480, 130], [470, 170], [500, 195], [515, 240], [560, 290], [590, 330], [615, 330], [640, 420], [640, 470], [560, 505], [520, 530], [460, 530], [300, 500], [250, 530], [195, 525], [170, 470]], "fusee": [[398, 45], [410, 60], [430, 120], [432, 300], [470, 345], [492, 420], [485, 460], [430, 470], [425, 490], [375, 490], [370, 470], [345, 460], [345, 500], [190, 500], [190, 440], [300, 440], [300, 395], [330, 345], [365, 300], [368, 120], [385, 60]], "pistolet": [[70, 190], [130, 120], [230, 95], [420, 105], [430, 120], [550, 125], [545, 160], [590, 170], [650, 170], [710, 200], [728, 260], [690, 320], [600, 330], [590, 420], [590, 520], [560, 560], [440, 560], [430, 390], [410, 390], [395, 345], [330, 320], [180, 300], [90, 270], [65, 230]], "flipper": [[265, 62], [540, 62], [560, 140], [600, 460], [635, 462], [632, 472], [600, 475], [605, 515], [598, 540], [570, 560], [550, 530], [210, 530], [205, 470], [175, 468], [178, 455], [212, 455], [240, 85]], "trex": [[185, 215], [220, 110], [290, 75], [400, 70], [460, 50], [530, 45], [610, 75], [650, 150], [630, 185], [640, 300], [640, 400], [700, 380], [745, 395], [770, 505], [740, 540], [600, 545], [520, 560], [340, 560], [320, 520], [300, 490], [270, 470], [225, 400], [195, 330]], "requin": [[172, 225], [230, 180], [330, 165], [450, 175], [520, 215], [560, 195], [640, 205], [700, 225], [790, 205], [790, 420], [700, 425], [660, 450], [620, 440], [560, 400], [460, 440], [400, 445], [290, 440], [270, 390], [210, 290], [200, 255]], "drums": [[180, 95], [230, 45], [320, 40], [360, 75], [400, 70], [530, 90], [620, 140], [700, 150], [785, 190], [790, 250], [720, 290], [690, 300], [660, 420], [600, 470], [470, 470], [420, 445], [320, 420], [220, 410], [80, 460], [40, 455], [15, 300], [100, 250], [120, 200], [185, 140]]};
const FONTS=[['Caveat','Caveat',1.15],['Fraunces','Fraunces',1],['Instrument Serif','Instrument Serif',1.1],['DM Serif Display','DM Serif Display',1],
  ['Permanent Marker','Permanent Marker',.9],['Gloria Hallelujah','Gloria Hallelujah',.85],['Space Grotesk','Space Grotesk',.95],['Bricolage Grotesque','Bricolage Grotesque',.95]];
const PAPERS=[['uni','Papier uni'],['quad','Quadrillé'],['seyes','Grands carreaux (Seyès)'],['lines','Lignes et marge'],['dots','Pointillés'],['kraft','Kraft']];
const DEFAULT_CUT={"margin":18,"lmin":90,"lmax":240,"jitter":14,"notch":0,"notchSize":2,"bow":0,"shadow":3};
const PARAMS=[['margin','Marge autour de l’objet',4,60,1,18],['lmin','Longueur min d’un trait',20,400,5,90],['lmax','Longueur max d’un trait',40,600,5,240],
  ['jitter','Écart des sommets',0,60,1,14],['notch','Accrocs de ciseaux (%)',0,100,1,18],['notchSize','Taille des accrocs',2,40,1,10],
  ['bow','Courbure des traits',0,20,1,3],['shadow','Ombre portée',0,20,1,6]];
const DEMO={sheet:{order:1,title:'La liste de Jojo',font:'Caveat',paper:'uni'},items:[
  ['pua','Lego Pua (43292)','Lego Disney · 69,99 €','Le cochon de Vaiana. 9+ : papa se dévoue encore.',[['Lego.com','https://www.lego.com/fr-fr/product/pua-43292']],28,24,56,-5],
  ['fusee','La fusée de Tintin','Lego Ideas 21367','Objectif Lune en briques. 18+ aussi, papa se sacrifiera.',[['Lego.com','https://www.lego.com/fr-fr/product/tintin-moon-rocket-21367']],76,25,56,6],
  ['pistolet','Pistolet spatial','Zara Home · 22,99 €','Pour l’appétence cosmonaute.',[['Zara Home','https://www.zarahome.com/fr/jouet-enfant-pistolet-spatial-l47610052']],28,46,52,9],
  ['wallace','Lego Wallace & Gromit','Lego Ideas 21371','La moto et le side-car de Rasé de près.',[['Lego.com','https://www.lego.com/fr-fr/product/wallace-gromit-21371']],70,48,56,-3],
  ['trex','Circuit T-Rex Blaze','Hot Wheels City','Un T-Rex qui gobe les voitures et les ressort par derrière.',[['Amazon','https://www.amazon.fr/dp/B0D7PVKGG7']],30,68,54,3],
  ['drums','Kidi DJ Drums','VTech','Il y a une prise casque. Les parents vous remercient.',[['Amazon','https://www.amazon.fr/dp/B0CWLTMYHK']],72,67,52,-7],
  ['requin','Camion requin transporteur','Hot Wheels','',[['Amazon','https://www.amazon.fr/dp/B08J4H1VYP']],28,88,56,-4],
  ['flipper','Flipper en bois','Zara Home','',[['Zara Home','https://www.zarahome.com/fr/jouet-flipper-en-bois-pour-enfant-l47632052']],72,88,52,4]]};

/* =====================================================================
   Stockage : Supabase si configuré (config.js), sinon navigateur local
   ===================================================================== */
const S={boards:new Map(),sheets:new Map(),items:new Map(),cfg:{},res:new Map()};
let activeBoard=null,UI='edit',VIEW='stack',EDIT=true;
Object.assign(S.cfg,DEFAULT_CUT);
const CFG=window.COLLAGE_CONFIG||{};
const SB=(CFG.supabaseUrl&&CFG.supabaseAnonKey&&window.supabase)?window.supabase.createClient(CFG.supabaseUrl,CFG.supabaseAnonKey,{auth:{flowType:'pkce',detectSessionInUrl:true,persistSession:true}}):null;
let CAN_WRITE=true,MODE='local',USER=null,CHANNEL=null,FAM=null; // FAM : famille chargée {id,owner,reserve_mode}
const MYFAMS=new Map();
const LKEY='collage-saas-local-v1',RKEY='collage-mes-reservations';
const uid=()=>Math.random().toString(36).slice(2,10)+Date.now().toString(36).slice(-4);
const slugify=s=>(s||'famille').normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,30)||'famille';
const stripLocal=v=>{const o={...v};delete o._;return o};

/* ---------- écritures cloud : regroupées par document, envoyées dans l'ordre ---------- */
const pend=new Map(),recent=new Map();let flushing=false,ftimer=null;
function cloudWrite(key,op){pend.delete(key);pend.set(key,op);recent.set(key,Date.now());clearTimeout(ftimer);ftimer=setTimeout(flush,260)}
async function flush(){if(flushing)return;flushing=true;setStatus('Enregistrement…',true);
  while(pend.size){const [k,op]=pend.entries().next().value;pend.delete(k);
    try{const r=await op();if(r&&r.error)throw r.error}catch(e){console.warn(k,e);toast('Modification non enregistrée'+(e&&e.message?' : '+e.message:''))}}
  flushing=false;setStatus('Enregistré',true)}
const fresh=key=>Date.now()-(recent.get(key)||0)<2500; // ignore l'écho de ses propres écritures
function saveLocal(){if(MODE!=='local')return;try{localStorage.setItem(LKEY,JSON.stringify({boards:[...S.boards],sheets:[...S.sheets],items:[...S.items],res:[...S.res]}))}catch(e){toast('Stockage local plein')}}
const famOf=sheetId=>S.sheets.get(sheetId)?.board||activeBoard;
const store={
  setBoard(id,d){S.boards.set(id,{...S.boards.get(id),...d});renderAll();
    if(MODE==='cloud'){const b=S.boards.get(id);const row={id,data:{name:b.name||'',subtitle:b.subtitle??''}};if(b.reserve_mode)row.reserve_mode=b.reserve_mode;
      delete row.id;cloudWrite('f/'+id,()=>SB.from('families').update(row).eq('id',id));if(MYFAMS.has(id))MYFAMS.set(id,{...MYFAMS.get(id),...b})}else saveLocal()},
  setSheet(id,d){S.sheets.set(id,{...S.sheets.get(id),...d});renderAll();
    if(MODE==='cloud'){const v=S.sheets.get(id);cloudWrite('s/'+id,()=>SB.from('sheets').upsert({id,family_id:v.board||activeBoard,data:v,updated_at:new Date().toISOString()}))}else saveLocal()},
  delSheet(id){const fam=famOf(id);S.sheets.delete(id);[...S.items].filter(([,v])=>v.sheet===id).forEach(([k])=>store.delItem(k,true));renderAll();
    if(MODE==='cloud')cloudWrite('s/'+id,()=>SB.from('sheets').delete().eq('id',id));else saveLocal()},
  setItem(id,d,silent){const v={...S.items.get(id),...d};S.items.set(id,v);if(!silent)renderAll();
    if(MODE==='cloud'){const fam=famOf(v.sheet);cloudWrite('i/'+id,()=>SB.from('items').upsert({id,family_id:fam,data:stripLocal(v),updated_at:new Date().toISOString()}))}else saveLocal()},
  delItem(id,silent){S.items.delete(id);S.res.delete(id);if(!silent)renderAll();
    if(MODE==='cloud')cloudWrite('i/'+id,()=>SB.from('items').delete().eq('id',id));else saveLocal()},
  setCfg(){saveLocal()}
};

function seedDemoLocal(){
  const bid='demo';S.boards.set(bid,{name:'Famille Exemple',subtitle:'Listes de Noël',order:1});
  const sid='s'+uid();S.sheets.set(sid,{...DEMO.sheet,board:bid});
  DEMO.items.forEach(([k,name,price,note,links,x,y,w,a],i)=>S.items.set('i'+uid(),{sheet:sid,n:i+1,name,price,note,links:links.map(([label,url])=>({label,url})),q:name,
    src:'builtin:'+k,x,y,w,a,z:i+1,seed:1000+i*97}));
}
const hashFam=()=>decodeURIComponent((location.hash||'').slice(1)).split('?')[0];

async function boot(){
  try{const u=localStorage.getItem('collage-ui');if(u==='view')UI='view'}catch(e){}
  if(!SB){ // ---- mode local (aucune base configurée) : démo dans le navigateur
    let local=null;try{local=JSON.parse(localStorage.getItem(LKEY))}catch(e){}
    if(local&&local.sheets){(local.boards||[]).forEach(([k,v])=>S.boards.set(k,v));local.sheets.forEach(([k,v])=>S.sheets.set(k,v));local.items.forEach(([k,v])=>S.items.set(k,v));(local.res||[]).forEach(([k,v])=>S.res.set(k,v));
      if(!S.boards.size){const bid='demo';S.boards.set(bid,{name:'Ma famille',order:1});S.sheets.forEach(v=>v.board=bid)}}
    else seedDemoLocal();
    pickBoard();recomputeEdit();renderAll();setStatus('Mode local (non partagé)',false);renderAccount();return}
  MODE='cloud';CAN_WRITE=false;UI='view';setStatus('Chargement…',false);
  const {data:{session}}=await SB.auth.getSession();USER=session?.user||null;
  {const q=new URLSearchParams(location.search);if(q.has('code')){q.delete('code');history.replaceState(null,'',location.pathname+(q.toString()?'?'+q:'')+location.hash)}}
  SB.auth.onAuthStateChange((ev,s)=>{const was=USER?.id;USER=s?.user||null;if((USER?.id||null)!==(was||null))afterAuth()});
  await afterAuth(true);
}
async function afterAuth(first){
  // familles dont je suis membre
  MYFAMS.clear();
  if(USER){const {data}=await SB.from('members').select('family_id, families(id,data,reserve_mode,owner,created_at)').eq('user_id',USER.id);
    (data||[]).forEach(r=>{const f=r.families;if(f)MYFAMS.set(f.id,{...f.data,reserve_mode:f.reserve_mode,order:+new Date(f.created_at)})});
    const join=new URLSearchParams(location.search).get('join'),fid=hashFam();
    if(join&&fid&&!MYFAMS.has(fid)){const {data:ok}=await SB.rpc('join_family',{fid,code:join});
      if(ok){toast('Tu peux maintenant modifier cette liste');history.replaceState(null,'',location.pathname+location.hash);return afterAuth()}else toast('Ce lien d’invitation n’est plus valide')}}
  renderAccount();
  let fid=hashFam();
  if(!fid&&MYFAMS.size)fid=[...MYFAMS].sort((a,b)=>a[1].order-b[1].order)[0][0];
  if(!fid){showWelcome();return}
  await loadFamily(fid,first);
}
async function loadFamily(fid,first){
  hideWelcome();setStatus('Chargement…',false);
  const [f,sh,it]=await Promise.all([
    SB.from('families').select('id,owner,data,reserve_mode').eq('id',fid).maybeSingle(),
    SB.from('sheets').select('id,data').eq('family_id',fid),
    SB.from('items').select('id,data').eq('family_id',fid)]);
  if(f.error||!f.data){showWelcome('Cette liste n’existe pas (ou plus).');return}
  FAM=f.data;activeBoard=fid;activeSheet=null;
  if(location.hash.slice(1)!==fid)history.replaceState(null,'',location.pathname+location.search+'#'+fid);
  S.boards=new Map(MYFAMS);S.boards.set(fid,{...(MYFAMS.get(fid)||{}),...FAM.data,reserve_mode:FAM.reserve_mode});
  S.sheets=new Map((sh.data||[]).map(r=>[r.id,{...r.data,board:fid}]));
  S.items=new Map((it.data||[]).map(r=>[r.id,r.data]));
  CAN_WRITE=!!USER&&MYFAMS.has(fid);
  try{UI=CAN_WRITE?(localStorage.getItem('collage-ui')||'edit'):'view'}catch(e){UI=CAN_WRITE?'edit':'view'}
  VIEW=UI==='view'?'stack':'open';
  await loadRes();
  subscribe(fid);
  if(CAN_WRITE&&!sortedSheets().length)addSheet();
  recomputeEdit();renderAll(true);renderAccount();
  setStatus(CAN_WRITE?'Enregistré':'Lecture seule',true);
}
function subscribe(fid){
  if(CHANNEL)SB.removeChannel(CHANNEL);
  const apply=(tab,p)=>{const m=tab==='sheets'?S.sheets:S.items,k=(tab==='sheets'?'s/':'i/');
    if(p.eventType==='DELETE'){const id=p.old?.id;if(id&&m.has(id)&&!fresh(k+id)){m.delete(id);renderAll()}return}
    const r=p.new;if(!r||r.family_id!==fid||fresh(k+r.id))return;
    if(tab==='items'&&dragging.has(r.id))return;
    m.set(r.id,tab==='sheets'?{...r.data,board:fid}:r.data);renderAll()};
  CHANNEL=SB.channel('fam-'+fid)
    .on('postgres_changes',{event:'*',schema:'public',table:'sheets',filter:'family_id=eq.'+fid},p=>apply('sheets',p))
    .on('postgres_changes',{event:'*',schema:'public',table:'items',filter:'family_id=eq.'+fid},p=>apply('items',p))
    .on('postgres_changes',{event:'DELETE',schema:'public',table:'sheets'},p=>apply('sheets',p))
    .on('postgres_changes',{event:'DELETE',schema:'public',table:'items'},p=>apply('items',p))
    .subscribe();
}
async function createFamily(name){
  if(!USER){showWelcome();return}
  const id=slugify(name)+'-'+Math.random().toString(36).slice(2,6);
  const {error}=await SB.from('families').insert({id,data:{name,subtitle:'Listes de Noël'}});
  if(error){toast('Création impossible : '+error.message);return}
  MYFAMS.set(id,{name,subtitle:'Listes de Noël',reserve_mode:'hidden',order:Date.now()});
  try{localStorage.setItem('collage-ui','edit')}catch(e){}
  location.hash=id;await loadFamily(id);
  setTimeout(()=>{famEl.focus();document.getSelection().selectAllChildren(famEl)},80);
}

/* ---------- réservations ---------- */
const myRes=()=>{try{return JSON.parse(localStorage.getItem(RKEY))||{}}catch(e){return{}}};
const saveMyRes=o=>{try{localStorage.setItem(RKEY,JSON.stringify(o))}catch(e){}};
async function loadRes(){
  if(MODE!=='cloud'||!activeBoard)return;
  const {data}=await SB.from('reservations').select('id,item_id,name').eq('family_id',activeBoard);
  S.res=new Map((data||[]).map(r=>[r.item_id,{id:r.id,name:r.name}]));
}
async function reserve(itemId,name){
  if(MODE==='local'){const id=uid(),o=myRes();o[itemId]={id,secret:'local'};saveMyRes(o);S.res.set(itemId,{id,name});saveLocal();renderAll();return true}
  const {data,error}=await SB.rpc('reserve_item',{iid:itemId,who:name});
  if(error){await loadRes();renderAll();toast(/duplicate|unique/i.test(error.message)?'Quelqu’un vient de le réserver':'Réservation impossible');return false}
  const r=Array.isArray(data)?data[0]:data;const o=myRes();o[itemId]={id:r.id,secret:r.secret};saveMyRes(o);
  S.res.set(itemId,{id:r.id,name});renderAll();toast('C’est réservé, merci !');return true}
async function unreserve(itemId){
  const o=myRes(),m=o[itemId];if(!m)return;
  if(MODE==='cloud'){const {data}=await SB.rpc('cancel_reservation',{rid:m.id,sec:m.secret});if(!data)toast('Annulation impossible')}
  delete o[itemId];saveMyRes(o);S.res.delete(itemId);saveLocal();await loadRes();renderAll()}
setInterval(()=>{if(MODE==='cloud'&&document.visibilityState==='visible'&&!EDIT)loadRes().then(()=>syncReserved())},25000);
function syncReserved(){const show=S.res;pieces.forEach((el,k)=>el.classList.toggle('reserved',show.has(k)))}

/* ---------- modes et familles ---------- */
function recomputeEdit(){EDIT=CAN_WRITE&&UI==='edit';const b=document.body;b.classList.toggle('ro',!EDIT);b.classList.toggle('viewer',UI==='view');b.classList.toggle('stack',UI==='view'&&VIEW==='stack');
  b.classList.toggle('member',CAN_WRITE);
  const m=document.getElementById('modes');m.classList.toggle('show',CAN_WRITE);m.querySelectorAll('button').forEach(x=>x.classList.toggle('cur',x.dataset.m===UI));
  if(!EDIT){setSel([]);dev.classList.remove('on')}syncBrand()}
function setUI(u){UI=u;VIEW=u==='view'?'stack':'open';try{localStorage.setItem('collage-ui',u)}catch(e){}recomputeEdit();renderAll()}
const firstBoard=()=>[...S.boards].sort((a,b)=>(a[1].order||0)-(b[1].order||0))[0]?.[0]||null;
function pickBoard(){const h=hashFam();const want=S.boards.has(h)?h:(S.boards.has(activeBoard)?activeBoard:firstBoard());
  if(want!==activeBoard){activeBoard=want;activeSheet=null}syncBrand()}
addEventListener('hashchange',()=>{if(MODE==='cloud'){const h=hashFam();if(h&&h!==activeBoard)loadFamily(h);return}pickBoard();renderAll()});
function syncBrand(){const f=document.querySelector('#brand .fam'),s=document.querySelector('#brand .fsub');if(!f)return;const b=S.boards.get(activeBoard);
  if(document.activeElement!==f)f.textContent=b?.name||'';f.contentEditable=EDIT?'true':'false';
  if(s){if(document.activeElement!==s)s.textContent=b?.subtitle??'Listes de Noël';s.contentEditable=EDIT?'true':'false'}
  document.title=(b?.name?b.name+' · ':'')+'Listes de Noël'}
function setStatus(t,live){const s=document.getElementById('status');s.querySelector('span').textContent=t;s.classList.toggle('live',live)}
function toast(t){const e=document.getElementById('toast');e.textContent=t;e.classList.add('on');clearTimeout(e._t);e._t=setTimeout(()=>e.classList.remove('on'),2600)}

/* =====================================================================
   Découpe aux ciseaux
   ===================================================================== */
function rng(seed){let a=seed>>>0;return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const area=p=>p.reduce((s,a,i)=>{const b=p[(i+1)%p.length];return s+a[0]*b[1]-b[0]*a[1]},0)/2;
function offset(p,m){const q=area(p)>0?p:[...p].reverse(),n=q.length,out=[];
  for(let i=0;i<n;i++){const a=q[(i-1+n)%n],b=q[i],c=q[(i+1)%n];
    const nr=(u,v)=>{const dx=v[0]-u[0],dy=v[1]-u[1],L=Math.hypot(dx,dy)||1;return[dy/L,-dx/L]};
    const n1=nr(a,b),n2=nr(b,c);const nx=n1[0]+n2[0],ny=n1[1]+n2[1],L=Math.hypot(nx,ny)||1,k=Math.sqrt(Math.max(.35,(n1[0]*n2[0]+n1[1]*n2[1]+1)/2));
    out.push([b[0]+nx/L*m/k,b[1]+ny/L*m/k])}
  if(Math.abs(area(out))<Math.abs(area(q)))return offset([...q].reverse(),m);return out}
function densify(p,step){const o=[];for(let i=0;i<p.length;i++){const a=p[i],b=p[(i+1)%p.length],L=Math.hypot(b[0]-a[0],b[1]-a[1]),n=Math.max(1,Math.ceil(L/step));for(let j=0;j<n;j++)o.push([a[0]+(b[0]-a[0])*j/n,a[1]+(b[1]-a[1])*j/n])}return o}
function hull(pts){pts=pts.slice().sort((a,b)=>a[0]-b[0]||a[1]-b[1]);const cr=(o,a,b)=>(a[0]-o[0])*(b[1]-o[1])-(a[1]-o[1])*(b[0]-o[0]);
  const lo=[],up=[];for(const p of pts){while(lo.length>=2&&cr(lo[lo.length-2],lo[lo.length-1],p)<=0)lo.pop();lo.push(p)}
  for(const p of pts.slice().reverse()){while(up.length>=2&&cr(up[up.length-2],up[up.length-1],p)<=0)up.pop();up.push(p)}
  return lo.slice(0,-1).concat(up.slice(0,-1))}
const maskCache=new Map();
function getMask(key,im,poly,alpha,margin){
  const id=key+'|'+margin;if(maskCache.has(id))return maskCache.get(id);
  const W=im.naturalWidth,H=im.naturalHeight,c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d');
  if(alpha){for(let a=0;a<16;a++){const t=a/16*Math.PI*2;x.drawImage(im,Math.cos(t)*margin,Math.sin(t)*margin)}x.drawImage(im,0,0)}
  else{x.beginPath();poly.forEach((p,i)=>i?x.lineTo(p[0],p[1]):x.moveTo(p[0],p[1]));x.closePath();x.fillStyle='#000';x.fill();x.lineJoin='round';x.lineWidth=margin*2;x.stroke()}
  const d=x.getImageData(0,0,W,H).data,m=new Uint8Array(W*H);for(let i=0;i<W*H;i++)m[i]=d[i*4+3]>24?1:0;
  const M={m,W,H};maskCache.set(id,M);return M}
const hit=(M,x,y)=>{x=Math.round(x);y=Math.round(y);if(x<0||y<0||x>=M.W||y>=M.H)return false;return M.m[y*M.W+x]===1};
function chordOK(M,a,b){const L=Math.hypot(b[0]-a[0],b[1]-a[1]),n=Math.max(2,Math.ceil(L/3));for(let i=0;i<=n;i++)if(hit(M,a[0]+(b[0]-a[0])*i/n,a[1]+(b[1]-a[1])*i/n))return false;return true}
function cutPath(P,M,W,H,seed){
  const cfg=S.cfg,R=rng(seed);const cx=P.reduce((s,p)=>s+p[0],0)/P.length,cy=P.reduce((s,p)=>s+p[1],0)/P.length;
  const O=densify(offset(P,cfg.margin+3),4).map(p=>{let [x,y]=p;const dx=x-cx,dy=y-cy,L=Math.hypot(dx,dy)||1;let g=0;while(hit(M,x,y)&&g++<120){x+=dx/L*2;y+=dy/L*2}return[x,y]});
  const n=O.length;const arc=[0];for(let i=1;i<=n;i++)arc.push(arc[i-1]+Math.hypot(O[i%n][0]-O[i-1][0],O[i%n][1]-O[i-1][1]));const total=arc[n];
  let i=Math.floor(R()*n),walked=0;const V=[];const out=(p,amt)=>{const dx=p[0]-cx,dy=p[1]-cy,L=Math.hypot(dx,dy)||1;return[p[0]+dx/L*amt,p[1]+dy/L*amt]};
  V.push(out(O[i],R()*cfg.jitter));const lmin=Math.min(cfg.lmin,cfg.lmax),lmax=Math.max(cfg.lmin,cfg.lmax);let guard=0;
  while(walked<total-1&&guard++<600){
    const target=lmin+R()*(lmax-lmin);let best=null,bestJ=null,acc=0,j=i;
    while(acc<target&&walked+acc<total){const jn=(j+1)%n;acc+=Math.hypot(O[jn][0]-O[j][0],O[jn][1]-O[j][1]);j=jn;
      if(chordOK(M,V[V.length-1],O[j])){best=O[j];bestJ=j}else if(best&&acc>lmin*.5)break}
    if(!best){bestJ=(i+1)%n;best=O[bestJ]}
    walked+=((arc[bestJ]-arc[i])%total+total)%total||1;i=bestJ;const last=V[V.length-1];
    if(R()*100<cfg.notch){const t=.2+R()*.6,mx=last[0]+(best[0]-last[0])*t,my=last[1]+(best[1]-last[1])*t,L=Math.hypot(best[0]-last[0],best[1]-last[1])||1;
      const nx=(best[1]-last[1])/L,ny=-(best[0]-last[0])/L,s=cfg.notchSize*(.5+R());let tip=[mx+nx*s,my+ny*s];if(hit(M,tip[0],tip[1]))tip=[mx-nx*s,my-ny*s];
      if(!hit(M,tip[0],tip[1])){V.push([mx-(best[0]-last[0])/L*s*.25,my-(best[1]-last[1])/L*s*.25]);V.push(tip);V.push([mx+(best[0]-last[0])/L*s*.25,my+(best[1]-last[1])/L*s*.25])}}
    if(walked>=total-1)break;V.push(out(best,R()*cfg.jitter))}
  return V.map(p=>[Math.min(W,Math.max(0,p[0])),Math.min(H,Math.max(0,p[1]))])}

const imgCache=new Map();
function srcURL(src){if(src.startsWith('builtin:'))return BUILTIN[src.slice(8)];return src}
function loadImg(src){if(!imgCache.has(src))imgCache.set(src,new Promise((res,rej)=>{const i=new Image();if(/^https?:/.test(srcURL(src)))i.crossOrigin='anonymous';i.onload=()=>res(i);i.onerror=rej;i.src=srcURL(src)}));return imgCache.get(src)}
function itemPoly(it,im){
  if(it.src.startsWith('builtin:'))return BUILTIN_POLY[it.src.slice(8)];
  if(it.poly)return it.poly;const W=im.naturalWidth,H=im.naturalHeight,m=Math.min(W,H)*.07;return[[m,m],[W-m,m],[W-m,H-m],[m,H-m]]}
let DEBUG=false;
async function drawPiece(id,el,force){
  const it=S.items.get(id);if(!it)return;
  const key=[it.src,it.seed,JSON.stringify(S.cfg),DEBUG].join('|');if(!force&&el._key===key)return;el._key=key;
  let im;try{im=await loadImg(it.src)}catch(e){return}
  const W=im.naturalWidth,H=im.naturalHeight,P=itemPoly(it,im);
  const M=getMask(it.src,im,P,!!it.alpha,S.cfg.margin);
  const V=cutPath(P,M,W,H,it.seed||1);
  let x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;V.forEach(p=>{x0=Math.min(x0,p[0]);y0=Math.min(y0,p[1]);x1=Math.max(x1,p[0]);y1=Math.max(y1,p[1])});
  const pad=Math.ceil(S.cfg.shadow*2.5+4);x0=Math.floor(x0);y0=Math.floor(y0);x1=Math.ceil(x1);y1=Math.ceil(y1);
  const cw=x1-x0+pad*2,ch=y1-y0+pad*2,c=el.querySelector('canvas');c.width=cw;c.height=ch;const g=c.getContext('2d'),R=rng((it.seed||1)+7);
  const path=()=>{g.beginPath();V.forEach((p,i)=>{const X=p[0]-x0+pad,Y=p[1]-y0+pad;if(!i){g.moveTo(X,Y);return}
    const q=V[i-1],QX=q[0]-x0+pad,QY=q[1]-y0+pad,L=Math.hypot(X-QX,Y-QY)||1,b=(R()-.5)*2*S.cfg.bow;g.quadraticCurveTo((X+QX)/2+(Y-QY)/L*b,(Y+QY)/2-(X-QX)/L*b,X,Y)});g.closePath()};
  if(S.cfg.shadow>0){g.save();g.shadowColor='rgba(40,25,10,.36)';g.shadowBlur=S.cfg.shadow;g.shadowOffsetX=S.cfg.shadow*.25;g.shadowOffsetY=S.cfg.shadow*.45;path();g.fillStyle='#fff';g.fill();g.restore()}
  g.save();path();g.clip();g.drawImage(im,pad-x0,pad-y0);g.restore();
  if(DEBUG){g.save();g.setLineDash([6,4]);g.strokeStyle='#e5533d';g.lineWidth=2;g.beginPath();P.forEach((p,i)=>i?g.lineTo(p[0]-x0+pad,p[1]-y0+pad):g.moveTo(p[0]-x0+pad,p[1]-y0+pad));g.closePath();g.stroke();g.restore()}
  // pastille numérotée : en haut à gauche de la découpe
  let tl=V.reduce((b,p)=>(p[0]+p[1]<b[0]+b[1]?p:b),V[0]);
  el._num={x:(tl[0]-x0+pad)/cw*100,y:(tl[1]-y0+pad)/ch*100};
  el._scale=cw/W;placePiece(el,it);
}
function placePiece(el,it){const w=it.w*(el._scale||1);el.style.left=(it.x-w/2)+'%';el.style.top=it.y+'%';el.style.width=w+'%';
  el.style.transform=`translateY(-50%) rotate(${it.a}deg)`;el.style.zIndex=it.z||1;
  const nb=el.querySelector('.num');if(el._num){nb.style.left=`calc(${el._num.x}% - 6px)`;nb.style.top=`calc(${el._num.y}% - 6px)`}nb.style.transform=`rotate(${-it.a}deg)`}

/* =====================================================================
   Rendu
   ===================================================================== */
const stage=document.getElementById('stage');
const spreads=new Map(),pieces=new Map(),entries=new Map();
let activeSheet=null;
const svg={
  paper:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
  font:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19 9.5 5h1L16 19M6.3 14h7.4M17 10.5c.7-.6 1.6-1 2.5-1 1.5 0 2.5.9 2.5 2.5V19M22 15.5c-.8-.6-1.7-.8-2.7-.8-1.5 0-2.8.8-2.8 2.2s1.1 2.1 2.5 2.1c1.3 0 2.4-.8 3-2"/></svg>',
  trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/></svg>',
  rot:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12a8 8 0 1 1-2.3-5.7L20 8.5"/><path d="M20 3.5v5h-5"/></svg>',
  edit:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4L19 9l-4-4L4 16z"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>'
};
function sortedSheets(){const fb=firstBoard();return [...S.sheets].filter(([,v])=>(v.board||fb)===activeBoard).sort((a,b)=>(a[1].order||0)-(b[1].order||0))}
function renderAll(redraw){
  const ss=sortedSheets();
  if(!activeSheet||!S.sheets.has(activeSheet))activeSheet=ss[0]&&ss[0][0];
  // feuilles
  const show=new Set(ss.map(s=>s[0]));
  for(const [id,el] of spreads)if(!show.has(id)){el.remove();spreads.delete(id)}
  let prev=null;
  ss.forEach(([id,sh])=>{let el=spreads.get(id);if(!el){el=makeSpread(id);spreads.set(id,el)}updateSpread(el,id,sh);
    const want=prev?prev.nextSibling:stage.firstChild;if(want!==el)stage.insertBefore(el,want);prev=el});
  let ghost=stage.querySelector('.ghost');if(!ghost){ghost=document.createElement('div');ghost.className='ghost';ghost.title='Ajouter une feuille';ghost.innerHTML=`<div class="gs"><span>${svg.plus}</span></div>`;ghost.onclick=addSheet;stage.appendChild(ghost)}
  ghost.style.display=EDIT?'':'none';
  // pièces
  for(const [id,el] of pieces)if(!S.items.has(id)||!spreads.has(S.items.get(id).sheet)){el.remove();pieces.delete(id);sel.delete(id)}
  for(const [id,it] of S.items){const sp=spreads.get(it.sheet);if(!sp)continue;let el=pieces.get(id);
    if(!el){el=makePiece(id);pieces.set(id,el)}const layer=sp.querySelector('.layer');if(el.parentNode!==layer)layer.appendChild(el);
    el.querySelector('.num').textContent=it.n||'';el.classList.toggle('sel',sel.has(id));placePiece(el,it);drawPiece(id,el,redraw)}
  // listes
  ss.forEach(([sid])=>renderList(sid));
  syncReserved();layoutSpreads();renderPager();
  badge();
}
function makeSpread(id){
  const el=document.createElement('section');el.className='spread';el.dataset.id=id;
  el.innerHTML=`<aside class="list"><h2>La liste</h2><div class="entries"></div></aside>
    <div class="sheet"><div class="paper"></div><div class="ruling"></div><div class="head"><h1 class="title" spellcheck="false"></h1><p class="subtitle" spellcheck="false"></p></div><div class="layer"></div><div class="drop-hint">Dépose l’image pour l’ajouter</div></div>
    <div class="spacer"></div>`;
  const sheet=el.querySelector('.sheet'),title=el.querySelector('.title'),sub=el.querySelector('.subtitle');
  el.addEventListener('pointerdown',e=>{
    if(el.classList.contains('stacked')){e.stopPropagation();e.preventDefault();VIEW='open';activeSheet=id;recomputeEdit();renderAll();return}
    if(el.classList.contains('near')){e.stopPropagation();e.preventDefault();setActive(id)}},true);
  [[title,'title'],[sub,'subtitle']].forEach(([n,key])=>{
    n.addEventListener('focus',()=>{if(!EDIT)n.blur()});
    n.addEventListener('keydown',e=>{e.stopPropagation();if(e.key==='Enter'){e.preventDefault();n.blur()}});
    n.addEventListener('blur',()=>{const v=n.textContent.trim();if(!v)n.textContent='';if(v!==(S.sheets.get(id)?.[key]||''))store.setSheet(id,{[key]:v})})});
  sheet.style.setProperty('--sr',rotOf(id,1.1)+'deg');
  // glisser-déposer d'image
  const canDrop=e=>EDIT&&el.classList.contains('active')&&[...(e.dataTransfer.types||[])].some(x=>x==='Files'||x==='text/uri-list'||x==='text/html');
  el.addEventListener('dragover',e=>{if(!canDrop(e))return;e.preventDefault();sheet.classList.add('dragover')});
  el.addEventListener('dragleave',e=>{if(!el.contains(e.relatedTarget))sheet.classList.remove('dragover')});
  el.addEventListener('drop',e=>{sheet.classList.remove('dragover');if(!canDrop(e))return;e.preventDefault();
    const f=[...(e.dataTransfer.files||[])].find(f=>f.type.startsWith('image/'));
    const r=sheet.getBoundingClientRect(),inSheet=e.clientX>=r.left&&e.clientX<=r.right;
    const pos={sheet:id,x:inSheet?(e.clientX-r.left)/r.width*100:undefined,y:inSheet?(e.clientY-r.top)/r.height*100:undefined};
    if(!f){const u=(e.dataTransfer.getData('text/uri-list')||'').split('\n').find(l=>/^https?:/.test(l.trim()))||(e.dataTransfer.getData('text/html').match(/<img[^>]+src=["']([^"']+)/i)||[])[1];
      if(u){openForm(null,{...pos,url:u.trim()});return}
      toast('Rien à ajouter ici : glisse une image ou un lien');return}
    openForm(null,{...pos,file:f})});
  return el;
}
const hasFile=e=>[...(e.dataTransfer.types||[])].includes('Files');
function closeMenus(){document.querySelectorAll('.menu.open').forEach(m=>m.classList.remove('open'))}
document.addEventListener('pointerdown',e=>{if(!e.target.closest('.wrap-rel'))closeMenus()});
function updateSpread(el,id,sh){
  const pp=PAPERS.some(p=>p[0]===sh.paper)?sh.paper:'uni';el.querySelector('.paper').className='paper p-'+pp;const ru=el.querySelector('.ruling');ru.className='ruling r-'+pp;ru.style.setProperty('--deco',(sh.deco??45)/100);
  const t=el.querySelector('.title');if(document.activeElement!==t)t.textContent=sh.title||'';
  const st=el.querySelector('.subtitle');if(document.activeElement!==st)st.textContent=sh.subtitle||'';
  const f=FONTS.find(x=>x[0]===sh.font)||FONTS[0];t.style.fontFamily=`'${f[1]}'`;t.style.fontSize=(7.4*f[2])+'cqw';
  t.contentEditable=EDIT?'true':'false';st.contentEditable=EDIT?'true':'false';
}
function setT(el,dx,dy,r,s){el.style.transform=`translate(calc(-50% + ${dx}px),calc(-50% + ${dy}px)) rotate(${r}deg) scale(${s})`}
function rotOf(id,amp){let h=0;for(const c of String(id))h=(h*31+c.charCodeAt(0))|0;return ((Math.abs(h)%1000)/1000-.5)*2*amp}
function layoutSpreads(){
  const ss=sortedSheets().map(s=>s[0]),a=ss.indexOf(activeSheet);
  const sh=document.querySelector('.spread .sheet, .ghost .gs');const W=sh?sh.offsetWidth:560;
  const g=stage.querySelector('.ghost');
  const stacking=UI==='view'&&VIEW==='stack';
  if(stacking){
    // pile en cascade : chaque feuille descend un peu et passe devant la précédente,
    // le haut (titre) de chaque liste reste visible ; même vide au-dessus et en dessous.
    const n=ss.length,H=sh?sh.offsetHeight:W*1.414,st=stage.getBoundingClientRect();
    const br=document.getElementById('brand'),hint=document.getElementById('stackhint');
    const top=innerHeight*.05+br.offsetHeight,bot=innerHeight-96-hint.offsetHeight;
    const gap=Math.max(18,Math.min(44,(bot-top)*.05));
    const hx=.5,vy=.17; // décalage entre feuilles, en fraction de la feuille
    // contour réel des feuilles tournées (à l'échelle 1), pour centrer exactement
    const P=ss.map((id,i)=>{const d=i-(n-1)/2,r=d*2+rotOf(id,1.4),rr=(r+rotOf(id,1.1))*Math.PI/180;
      const hh=W/2*Math.abs(Math.sin(rr))+H/2*Math.abs(Math.cos(rr)),hw=W/2*Math.abs(Math.cos(rr))+H/2*Math.abs(Math.sin(rr));
      return {id,x:d*W*hx,y:d*H*vy,r,hh,hw}});
    const t0=Math.min(...P.map(q=>q.y-q.hh)),b0=Math.max(...P.map(q=>q.y+q.hh)),l0=Math.min(...P.map(q=>q.x-q.hw)),r0=Math.max(...P.map(q=>q.x+q.hw));
    let s=Math.min(.86,(bot-top-2*gap)/(b0-t0),(st.width-80)/(r0-l0));
    const oy=spreads.get(ss[0])?.offsetTop??st.height/2;
    const cy=(top+bot)/2-(st.top+oy)-s*(t0+b0)/2,cx=-s*(l0+r0)/2;
    P.forEach(({id,x,y,r},i)=>{const el=spreads.get(id);
      setT(el,cx+x*s,cy+y*s,r,s);
      el.style.zIndex=10+i;el.classList.add("stacked");el.classList.remove('active','near','far')});
    if(g){g.classList.remove('near');g.classList.add('far')}
    return;
  }
  const off=W+366; // distance entre centres de feuilles : la voisine reste devinable sur le côté
  const place=(el,d)=>{setT(el,d*off,0,0,1);el.style.zIndex=d===0?20:10;
    el.classList.remove('stacked');el.classList.toggle('active',d===0);el.classList.toggle('near',Math.abs(d)===1);el.classList.toggle('far',Math.abs(d)>1)};
  ss.forEach((id,i)=>place(spreads.get(id),i-a));
  if(g)place(g,ss.length-a);
}
addEventListener('resize',()=>layoutSpreads());
document.getElementById('brand').addEventListener('transitionend',e=>{if(e.target.id==='brand'&&document.body.classList.contains('stack'))layoutSpreads()});
let wAcc=0,wLock=0;
addEventListener('wheel',e=>{if(Math.abs(e.deltaX)<=Math.abs(e.deltaY)||modal.classList.contains('on'))return;e.preventDefault();
  if(Date.now()<wLock)return;wAcc+=e.deltaX;if(Math.abs(wAcc)>70){const d=wAcc>0?1:-1;wAcc=0;wLock=Date.now()+550;
    const ss=sortedSheets().map(s=>s[0]),i=ss.indexOf(activeSheet);if(d>0&&i===ss.length-1)return;goSheet(d)}},{passive:false});
function setActive(id){if(activeSheet===id)return;activeSheet=id;layoutSpreads();
  [...sel].forEach(k=>{if(S.items.get(k)?.sheet!==id)sel.delete(k)});syncSel();renderPager()}
function goSheet(d){const ss=sortedSheets().map(s=>s[0]);const i=ss.indexOf(activeSheet)+d;if(i>=0&&i<ss.length)setActive(ss[i])}
function renderPager(){const p=document.getElementById('pager'),ss=sortedSheets();p.classList.toggle('show',ss.length>1);if(ss.length<2)return;
  const i=ss.findIndex(s=>s[0]===activeSheet);p.innerHTML='';
  const arr=(t,d,dis)=>{const b=document.createElement('button');b.className='arr';b.textContent=t;b.disabled=dis;b.onclick=()=>goSheet(d);p.appendChild(b)};
  arr('‹',-1,i<=0);ss.forEach(([id,sh],k)=>{const b=document.createElement('button');b.textContent=sh.title||('Feuille '+(k+1));b.className=id===activeSheet?'cur':'';b.onclick=()=>setActive(id);p.appendChild(b)});arr('›',1,i>=ss.length-1)}
let openEntry=null;
function renderList(sid){
  const box=spreads.get(sid).querySelector('.entries');const its=[...S.items].filter(([,v])=>v.sheet===sid).sort((a,b)=>(a[1].n||0)-(b[1].n||0));
  if(!its.length){box.innerHTML=`<div class="empty">${EDIT?'Glisse ou colle (⌘V) une image, ou utilise le bouton « Objet » en bas.':'Rien pour l’instant.'}</div>`;return}
  const enc=encodeURIComponent;box.innerHTML='';
  its.forEach(([id,it])=>{const d=document.createElement('div');d.className='entry'+(isAct(id)?' act':'')+(openEntry===id?' open':'');d.dataset.id=id;
    const q=it.q||it.name||'';
    d.innerHTML=`<div class="r1"><span class="n"></span><span class="nm"></span></div><div class="det"><div>${it.price?'<div class="pr"></div>':''}${it.note?'<div class="nt"></div>':''}<div class="lk"></div><div class="rsv"></div>${EDIT?`<button class="ed">${svg.edit} Modifier</button>`:''}</div></div>`;
    d.querySelector('.n').textContent=it.n||'';d.querySelector('.nm').textContent=it.name||'Sans nom';
    if(S.res.has(id)){const t=document.createElement('span');t.className='rtag';t.textContent='Réservé';d.querySelector('.nm').appendChild(t)}
    rsvUI(id,d.querySelector('.rsv'));
    if(it.price)d.querySelector('.pr').textContent=it.price;if(it.note)d.querySelector('.nt').textContent=it.note;
    const lk=d.querySelector('.lk');
    (it.links||[]).forEach(l=>{if(!/^https?:\/\//i.test(l.url||''))return;const a=document.createElement('a');a.href=l.url;a.target='_blank';a.rel='noopener';a.textContent=(l.label||hostOf(l.url))+' ↗';lk.appendChild(a)});
    if(q){[['Google Shopping','https://www.google.com/search?tbm=shop&q='],['Leboncoin','https://www.leboncoin.fr/recherche?text=']].forEach(([l,u])=>{const a=document.createElement('a');a.className='s';a.href=u+enc(q);a.target='_blank';a.rel='noopener';a.textContent=l;lk.appendChild(a)})}
    d.addEventListener('mouseenter',()=>hover(id,true));d.addEventListener('mouseleave',()=>hover(id,false));
    d.addEventListener('click',e=>{if(e.target.closest('a,.ed,.rsv'))return;setOpen(openEntry===id?null:id)});
    const ed=d.querySelector('.ed');if(ed)ed.onclick=()=>openForm(id);
    box.appendChild(d);entries.set(id,d)});
}
function setOpen(id){const prev=openEntry;openEntry=id;if(prev)refreshAct(prev);if(id)refreshAct(id);entries.forEach((e,k)=>{if(e.isConnected)e.classList.toggle('open',k===id)});const e=id&&entries.get(id);if(e)setTimeout(()=>e.scrollIntoView({block:'nearest',behavior:'smooth'}),60)}
const hostOf=u=>{try{return new URL(u).hostname.replace(/^www\./,'')}catch(e){return 'Lien'}};

/* ---------- activation (survol / sélection) ---------- */
const hovered=new Set();const isAct=id=>hovered.has(id)||sel.has(id)||openEntry===id;
function hover(id,on){on?hovered.add(id):hovered.delete(id);refreshAct(id)}
function refreshAct(id){const a=isAct(id);pieces.get(id)?.classList.toggle('act',a);const e=entries.get(id);if(e&&e.isConnected)e.classList.toggle('act',a)}

/* =====================================================================
   Sélection et manipulation
   ===================================================================== */
const sel=new Set(),dragging=new Set();let zTop=1;
function badge(){const b=document.getElementById('count');b.textContent=sel.size;b.classList.toggle('show',sel.size>0)}
function syncSel(){pieces.forEach((el,k)=>{el.classList.toggle('sel',sel.has(k));refreshAct(k)});badge()}
function setSel(keys){sel.clear();keys.forEach(k=>sel.add(k));syncSel();if(sel.size===1)setOpen([...sel][0])}
const sheetItems=sid=>[...S.items].filter(([,v])=>v.sheet===sid).map(([k])=>k);
function selectAll(){if(activeSheet)setSel(sheetItems(activeSheet))}
function makePiece(id){
  const el=document.createElement('div');el.className='piece';el.dataset.id=id;
  el.innerHTML=`<canvas></canvas><span class="num"></span><div class="h" title="Tourner / agrandir">${svg.rot}</div>`;
  let mode=null,p0,start,c,ang0,d0,R,moved,grp;
  el.addEventListener('mouseenter',()=>hover(id,true));el.addEventListener('mouseleave',()=>hover(id,false));
  el.addEventListener('pointerdown',e=>{
    e.preventDefault();e.stopPropagation();setActive(S.items.get(id).sheet);
    if(!EDIT){setSel([id]);return}
    el.setPointerCapture(e.pointerId);
    if(e.shiftKey||e.metaKey||e.ctrlKey){sel.has(id)?sel.delete(id):sel.add(id);syncSel();if(!sel.has(id))return}
    else if(!sel.has(id))setSel([id]);
    grp=[...sel];zTop=Math.max(zTop,...[...S.items.values()].map(v=>v.z||1));
    grp.forEach(g=>{const it=S.items.get(g);it.z=++zTop;placePiece(pieces.get(g),it)});
    R=el.parentNode.getBoundingClientRect();start={};grp.forEach(g=>{start[g]={...S.items.get(g)};dragging.add(g)});p0=[e.clientX,e.clientY];moved=false;
    if(e.target.closest('.h')){mode='rs';
      if(grp.length===1){const b=el.getBoundingClientRect();c=[b.left+b.width/2,b.top+b.height/2]}
      else{let x=0,y=0;grp.forEach(g=>{x+=start[g].x;y+=start[g].y});c=[R.left+x/grp.length/100*R.width,R.top+y/grp.length/100*R.height]}
      ang0=Math.atan2(e.clientY-c[1],e.clientX-c[0]);d0=Math.hypot(e.clientX-c[0],e.clientY-c[1])||1}
    else{mode='mv';grp.forEach(g=>pieces.get(g).classList.add('drag'))}
  });
  el.addEventListener('pointermove',e=>{if(!mode)return;moved=true;
    if(mode==='mv'){const dx=(e.clientX-p0[0])/R.width*100,dy=(e.clientY-p0[1])/R.height*100;grp.forEach(g=>{const it=S.items.get(g);it.x=start[g].x+dx;it.y=start[g].y+dy;placePiece(pieces.get(g),it)})}
    else{const a=Math.atan2(e.clientY-c[1],e.clientX-c[0]),d=Math.hypot(e.clientX-c[0],e.clientY-c[1]);transformGroup(grp,start,(a-ang0)*180/Math.PI,d/d0,R)}});
  const end=()=>{if(!mode)return;mode=null;grp.forEach(g=>{pieces.get(g)?.classList.remove('drag');dragging.delete(g);store.setItem(g,pick(S.items.get(g)),true)})};
  el.addEventListener('pointerup',end);el.addEventListener('pointercancel',end);
  el.addEventListener('dblclick',()=>{if(!EDIT)return;store.setItem(id,{seed:Math.floor(Math.random()*1e9)})});
  el.addEventListener('wheel',e=>{if(!EDIT||Math.abs(e.deltaX)>Math.abs(e.deltaY))return;e.preventDefault();e.stopPropagation();if(!sel.has(id))setSel([id]);const g=[...sel],R=el.parentNode.getBoundingClientRect(),st={};g.forEach(k=>st[k]={...S.items.get(k)});
    if(e.shiftKey)transformGroup(g,st,Math.sign(e.deltaY)*3,1,R);else transformGroup(g,st,0,e.deltaY<0?1.04:.96,R);
    clearTimeout(el._wt);el._wt=setTimeout(()=>g.forEach(k=>store.setItem(k,pick(S.items.get(k)),true)),400)},{passive:false});
  return el;
}
const pick=it=>({x:it.x,y:it.y,w:it.w,a:it.a,z:it.z});
function transformGroup(keys,start,dA,f,R){
  const rad=dA*Math.PI/180,cs=Math.cos(rad),sn=Math.sin(rad);let cx=0,cy=0;
  keys.forEach(k=>{cx+=start[k].x/100*R.width;cy+=start[k].y/100*R.height});cx/=keys.length;cy/=keys.length;
  keys.forEach(k=>{const s0=start[k],px=s0.x/100*R.width-cx,py=s0.y/100*R.height-cy,it=S.items.get(k);
    it.x=(cx+(px*cs-py*sn)*f)/R.width*100;it.y=(cy+(px*sn+py*cs)*f)/R.height*100;it.a=Math.round(s0.a+dA);it.w=Math.min(160,Math.max(12,s0.w*f));placePiece(pieces.get(k),it)})}

/* lasso */
const lasso=document.getElementById('lasso');let L0=null,Lsel0=[],Lsheet=null;
stage.addEventListener('pointerdown',e=>{
  if(e.target.closest('.piece,.head,.list,.ghost,.spread.near,.spread.stacked'))return;
  const sp=e.target.closest('.spread');Lsheet=sp?sp.dataset.id:activeSheet;if(!Lsheet)return;setActive(Lsheet);
  L0=[e.clientX,e.clientY];Lsel0=(e.shiftKey||e.metaKey||e.ctrlKey)?[...sel]:[];setSel(Lsel0);if(!Lsel0.length)setOpen(null);
  Object.assign(lasso.style,{display:'block',left:L0[0]+'px',top:L0[1]+'px',width:0,height:0})});
addEventListener('pointermove',e=>{if(!L0)return;const x0=Math.min(L0[0],e.clientX),y0=Math.min(L0[1],e.clientY),x1=Math.max(L0[0],e.clientX),y1=Math.max(L0[1],e.clientY);
  Object.assign(lasso.style,{left:x0+'px',top:y0+'px',width:(x1-x0)+'px',height:(y1-y0)+'px'});
  const h=sheetItems(Lsheet).filter(k=>{const b=pieces.get(k)?.getBoundingClientRect();if(!b)return false;const cx=b.left+b.width/2,cy=b.top+b.height/2;return cx>x0&&cx<x1&&cy>y0&&cy<y1});
  setSel([...new Set([...Lsel0,...h])])});
addEventListener('pointerup',()=>{L0=null;lasso.style.display='none'});
addEventListener('keydown',e=>{
  if(e.target.closest&&e.target.closest('input,textarea,[contenteditable="true"]'))return;
  if((e.metaKey||e.ctrlKey)&&(e.key==='a'||e.key==='A')){e.preventDefault();selectAll()}
  if(e.key==='Escape'){setSel([]);setOpen(null);closeMenus()}
  if((e.key==='d'||e.key==='D')&&!e.metaKey&&!e.ctrlKey&&EDIT)toggleDev();
  const ar={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[e.key];
  if(ar&&!sel.size&&(e.key==='ArrowLeft'||e.key==='ArrowRight')){e.preventDefault();goSheet(e.key==='ArrowLeft'?-1:1)}
  if(ar&&sel.size&&EDIT){e.preventDefault();const s=e.shiftKey?2:.3;sel.forEach(k=>{const it=S.items.get(k);it.x+=ar[0]*s;it.y+=ar[1]*s*210/297;placePiece(pieces.get(k),it)});
    clearTimeout(window._at);window._at=setTimeout(()=>sel.forEach(k=>store.setItem(k,pick(S.items.get(k)),true)),400)}
  if((e.key==='Backspace'||e.key==='Delete')&&sel.size===1&&EDIT){openForm([...sel][0])}
});

/* =====================================================================
   Feuilles
   ===================================================================== */
function addSheet(){const max=Math.max(0,...[...S.sheets.values()].map(s=>s.order||0));const id='s'+uid();
  store.setSheet(id,{order:max+1,title:'Nouvelle liste',subtitle:'',font:'Caveat',paper:'uni',board:activeBoard});activeSheet=id;renderAll();
  renderPager()}

/* =====================================================================
   Pop-in objet
   ===================================================================== */
const modal=document.getElementById('modal'),form=document.getElementById('form'),dz=document.getElementById('dz'),fileIn=document.getElementById('file');
let F=null; // {id, sheet, x, y, file, preview}
function linkRow(l={}){const r=document.createElement('div');r.className='l';r.innerHTML='<input placeholder="Magasin"><input placeholder="https://…"><button type="button" class="x" title="Retirer">×</button>';
  r.children[0].value=l.label||'';r.children[1].value=l.url||'';r.children[2].onclick=()=>r.remove();document.getElementById('f_links').appendChild(r)}
function setPreview(file){F.file=file;const u=URL.createObjectURL(file);dz.innerHTML='';const i=new Image();i.src=u;dz.appendChild(i)}
function openForm(id,opt={}){
  if(!EDIT)return;
  const it=id?S.items.get(id):null;F={id,sheet:it?it.sheet:(opt.sheet||activeSheet),x:opt.x,y:opt.y,file:null};
  document.getElementById('ftitle').textContent=it?'Modifier l’objet':'Ajouter un objet';
  document.getElementById('fsave').textContent=it?'Enregistrer':'Ajouter';
  document.getElementById('fdel').style.display=it?'':'none';document.getElementById('ferr').textContent='';
  ['name','price','note','q'].forEach(k=>document.getElementById('f_'+k).value=it?(it[k]||''):'');
  document.getElementById('f_links').innerHTML='';(it?.links?.length?it.links:[{}]).forEach(linkRow);
  dz.innerHTML='<div>Glisse ou colle une image ici<br>ou clique pour choisir<br><br><small>Un PNG détouré donne la plus jolie découpe</small></div>';
  if(it)loadImg(it.src).then(im=>{if(F&&F.id===id&&!F.file){dz.innerHTML='';const i=new Image();i.src=im.src;dz.appendChild(i)}}).catch(()=>{});
  document.getElementById('f_url').value=it?.links?.[0]?.url||'';const us=document.getElementById('f_urlst');us.className='';us.textContent=it?'':'Colle un lien : je remplis le nom, le prix et l’image.';
  if(opt.file)setPreview(opt.file);
  modal.classList.add('on');setTimeout(()=>document.getElementById(it||opt.url?'f_name':'f_url').focus(),50);
  if(opt.url)fillFromUrl(opt.url,!opt.file);
}
function closeForm(){modal.classList.remove('on');F=null}
document.getElementById('fcancel').onclick=closeForm;
modal.addEventListener('pointerdown',e=>{if(e.target===modal)closeForm()});
document.getElementById('addlink').onclick=()=>linkRow();
dz.onclick=()=>fileIn.click();fileIn.onchange=()=>{if(fileIn.files[0])setPreview(fileIn.files[0]);fileIn.value=''};
dz.addEventListener('dragover',e=>{e.preventDefault();dz.classList.add('over')});dz.addEventListener('dragleave',()=>dz.classList.remove('over'));
dz.addEventListener('drop',e=>{e.preventDefault();dz.classList.remove('over');const f=[...e.dataTransfer.files].find(f=>f.type.startsWith('image/'));if(f)setPreview(f)});
addEventListener('paste',e=>{
  if(!EDIT)return;const f=[...(e.clipboardData?.files||[])].find(f=>f.type.startsWith('image/'));
  if(modal.classList.contains('on')){if(f){e.preventDefault();setPreview(f)}return}
  if(e.target.closest&&e.target.closest('input,textarea,[contenteditable="true"]'))return;
  if(f){e.preventDefault();openForm(null,{sheet:activeSheet,file:f});return}
  const txt=(e.clipboardData?.getData('text/plain')||'').trim();
  if(/^https?:\/\/\S+$/.test(txt)){e.preventDefault();openForm(null,{sheet:activeSheet,url:txt});return}
  const html=e.clipboardData?.getData('text/html')||'';const m=html.match(/<img[^>]+src=["']([^"']+)/i);
  if(m&&/^https?:/.test(m[1])){e.preventDefault();openForm(null,{sheet:activeSheet,url:m[1]})}});
document.getElementById('fdel').onclick=()=>{if(F?.id){store.delItem(F.id);sel.delete(F.id);closeForm()}};
// éviter que les touches du formulaire déclenchent les raccourcis
form.addEventListener('keydown',e=>{if(e.key==='Escape')closeForm();e.stopPropagation()});

async function prepImage(file){
  const bmp=await createImageBitmap(file);const max=1100,s=Math.min(1,max/Math.max(bmp.width,bmp.height));
  const W=Math.round(bmp.width*s),H=Math.round(bmp.height*s),c=document.createElement('canvas');c.width=W;c.height=H;const g=c.getContext('2d');g.drawImage(bmp,0,0,W,H);
  const d=g.getImageData(0,0,W,H).data;let transp=0,pts=[];const step=Math.max(2,Math.round(Math.max(W,H)/220));
  for(let y=0;y<H;y+=step)for(let x=0;x<W;x+=step){const a=d[(y*W+x)*4+3];if(a<20)transp++;else pts.push([x,y])}
  const total=Math.ceil(H/step)*Math.ceil(W/step);const alpha=transp/total>.04&&pts.length>10;
  const type=alpha?'image/webp':'image/jpeg';
  let blob=await new Promise(r=>c.toBlob(r,type,.86));if(!blob)blob=await new Promise(r=>c.toBlob(r,'image/png'));
  return {blob,W,H,alpha,poly:alpha?hull(pts):null,dataURL:MODE==='cloud'?null:c.toDataURL(type,.8)};
}
form.addEventListener('submit',async e=>{
  e.preventDefault();if(!F)return;const err=document.getElementById('ferr');err.textContent='';
  const name=document.getElementById('f_name').value.trim();if(!name){err.textContent='Il faut un nom.';return}
  const data={name,price:document.getElementById('f_price').value.trim(),note:document.getElementById('f_note').value.trim(),
    q:document.getElementById('f_q').value.trim(),links:[...document.querySelectorAll('#f_links .l')].map(r=>({label:r.children[0].value.trim(),url:r.children[1].value.trim()})).filter(l=>l.url)};
  data.links.forEach(l=>{if(l.url&&!/^https?:\/\//i.test(l.url))l.url='https://'+l.url});
  if(!F.id&&!F.file){err.textContent='Ajoute une image.';return}
  const btn=document.getElementById('fsave');btn.disabled=true;btn.textContent='…';
  try{
    if(F.file){
      const p=await prepImage(F.file);
      if(MODE==='cloud'){const path=famOf(F.sheet)+'/'+uid()+(p.blob.type==='image/webp'?'.webp':'.jpg');const up=await SB.storage.from('images').upload(path,p.blob,{contentType:p.blob.type,cacheControl:'31536000'});if(up.error)throw new Error('Envoi de l’image impossible : '+up.error.message);data.src=SB.storage.from('images').getPublicUrl(path).data.publicUrl}
      else data.src=p.dataURL;
      data.alpha=p.alpha;data.poly=p.poly;
      maskCache.forEach((v,k)=>{if(k.startsWith(data.src))maskCache.delete(k)});
    }
    if(F.id){store.setItem(F.id,data)}
    else{const its=sheetItems(F.sheet).map(k=>S.items.get(k));const n=Math.max(0,...its.map(v=>v.n||0))+1;const z=Math.max(1,...its.map(v=>v.z||1))+1;
      const id='i'+uid();store.setItem(id,{sheet:F.sheet,n,...data,x:F.x??(30+Math.random()*40),y:F.y??(30+Math.random()*40),w:55,a:Math.round(Math.random()*14-7),z,seed:Math.floor(Math.random()*1e9)});
      setSel([id])}
    closeForm();
  }catch(ex){console.warn(ex);err.textContent=ex.message||'Échec de l’envoi.'}
  btn.disabled=false;btn.textContent=F&&F.id?'Enregistrer':'Ajouter';
});

/* =====================================================================
   Dock & réglages
   ===================================================================== */
document.getElementById('additem').onclick=()=>openForm(null,{sheet:activeSheet});
document.getElementById('selall').onclick=selectAll;
/* Mélanger : chevauchement ≤ ~15 px, tout dans la feuille, tailles proches (±6 % en largeur ≈ ±12 % en surface) */
function smartShuffle(sid){
  const sp=spreads.get(sid);if(!sp)return;const sheet=sp.querySelector('.sheet'),SR=sheet.getBoundingClientRect(),SW=SR.width,SH=SR.height;
  const tb=sp.querySelector('.head').getBoundingClientRect();const top=Math.max(SH*.04,(tb.bottom-SR.top)+6),edge=SW*.025,OV=15;
  const pad=Math.ceil(S.cfg.shadow*2.5+4);
  const its=sheetItems(sid).map(k=>{const el=pieces.get(k),c=el?.querySelector('canvas');if(!c||!c.width||!el._scale)return null;
    return{k,el,cw:c.width,ch:c.height,ratio:(c.width-2*pad)/(c.height-2*pad)}}).filter(Boolean);
  if(!its.length)return;
  const free=(SW-2*edge)*(SH-top-edge);
  function attempt(A){ // A = surface visée par objet (px²)
    const placed=[],res=[];
    const order=its.slice().sort(()=>Math.random()-.5);
    for(const o of order){
      const f=.94+Math.random()*.12,dw=Math.sqrt(A*o.ratio)*f,dh=dw/o.ratio;let ok=null;
      let cands=0;
      for(let t=0;t<900&&cands<40;t++){
        const a=(Math.random()*16-8),r=a*Math.PI/180,bw=Math.abs(dw*Math.cos(r))+Math.abs(dh*Math.sin(r)),bh=Math.abs(dw*Math.sin(r))+Math.abs(dh*Math.cos(r));
        const minx=edge+bw/2,maxx=SW-edge-bw/2,miny=top+bh/2,maxy=SH-edge-bh/2;if(minx>maxx||miny>maxy)return null;
        const cx=minx+Math.random()*(maxx-minx),cy=miny+Math.random()*(maxy-miny);
        const R={x0:cx-bw/2+OV/2,x1:cx+bw/2-OV/2,y0:cy-bh/2+OV/2,y1:cy+bh/2-OV/2};
        if(placed.every(p=>R.x1<=p.x0||R.x0>=p.x1||R.y1<=p.y0||R.y0>=p.y1)){cands++;const sc=(cy-bh/2)+Math.random()*SH*.04;if(!ok||sc<ok.sc)ok={R,cx,cy,a,dw,sc,bh}}}
      if(!ok)return null;placed.push(ok.R);res.push({o,...ok})}
    return res}
  let lo=free/its.length*.05,hi=free/its.length*.95,best=null;
  for(let i=0;i<16;i++){const mid=(lo+hi)/2;let r=null;for(let k=0;k<6&&!r;k++)r=attempt(mid);if(r){best=r;lo=mid}else hi=mid}
  if(!best){toast('Pas assez de place sur la feuille');return}
  // recentrer verticalement le bloc dans l’espace libre
  const minY=Math.min(...best.map(b=>b.cy-b.bh/2)),maxY=Math.max(...best.map(b=>b.cy+b.bh/2)),dy=((top+SH-edge)-(minY+maxY))/2;best.forEach(b=>b.cy+=dy);
  best.forEach(({o,cx,cy,a,dw})=>{
    // dw = taille de l’objet découpé ; la toile ajoute la marge d’ombre
    const scaleCanvas=o.cw/(o.cw-2*pad),wPct=dw*scaleCanvas/SW*100;
    store.setItem(o.k,{x:cx/SW*100,y:cy/SH*100,a:Math.round(a),w:wPct/o.el._scale,z:++zTop},true)});
  renderAll();
}
document.getElementById('shuffle').onclick=()=>{if(activeSheet)smartShuffle(activeSheet)};
const dev=document.getElementById('dev');
function toggleDev(){dev.classList.toggle('on')}

const sliders=[];
PARAMS.forEach(([key,label,min,max,step])=>{const l=document.createElement('label');
  l.innerHTML=`<span>${label}</span><output></output><input type="range" min="${min}" max="${max}" step="${step}">`;
  const r=l.querySelector('input'),o=l.querySelector('output');const fill=()=>r.style.setProperty('--p',((r.value-min)/(max-min)*100)+'%');
  sliders.push(()=>{r.value=S.cfg[key];o.textContent=S.cfg[key];fill()});let t,t2;
  r.addEventListener('input',()=>{fill();S.cfg[key]=+r.value;o.textContent=r.value;clearTimeout(t);t=setTimeout(()=>renderAll(true),40);clearTimeout(t2);t2=setTimeout(()=>store.setCfg(),600)});
  document.getElementById('sliders').appendChild(l)});
function syncSliders(){sliders.forEach(f=>f())}syncSliders();
document.getElementById('dbg').onchange=e=>{DEBUG=e.target.checked;renderAll(true)};
document.getElementById('reseed').onclick=()=>{if(activeSheet)sheetItems(activeSheet).forEach(k=>store.setItem(k,{seed:Math.floor(Math.random()*1e9)},true));renderAll(true)};
document.getElementById('copy').onclick=async()=>{const txt=JSON.stringify(S.cfg);const ta=document.getElementById('out');ta.value=txt;ta.style.display='block';ta.select();
  try{await navigator.clipboard.writeText(txt);document.getElementById('copy').textContent='Copié ✓'}catch(e){document.getElementById('copy').textContent='Sélectionné : ⌘C'}};


/* ---------- papier / police / suppression depuis le dock ---------- */
const PM=document.getElementById('papermenu'),FM=document.getElementById('fontmenu'),DM=document.getElementById('delmenu');
const PAPERHTML=PAPERS.map(([k,l])=>`<button data-p="${k}"><span class="sw"><span class="paper p-${k}" style="position:absolute;inset:0;filter:none"></span><span class="ruling r-${k}" style="inset:0"></span></span>${l}</button>`).join('');
PM.innerHTML=PAPERHTML+`<div class="deco"><label><span>Intensité du motif</span><output id="decoout"></output><input type="range" id="decor" min="0" max="100" step="1"></label></div>`;
const decor=document.getElementById('decor'),decoout=document.getElementById('decoout');let decoT;
function syncDeco(){const v=(S.sheets.get(activeSheet)||{}).deco??45;decor.value=v;decoout.textContent=v+' %';decor.style.setProperty('--p',v+'%')}
decor.addEventListener('input',()=>{const v=+decor.value;decoout.textContent=v+' %';decor.style.setProperty('--p',v+'%');
  const el=spreads.get(activeSheet);el&&el.querySelector('.ruling').style.setProperty('--deco',v/100);
  clearTimeout(decoT);decoT=setTimeout(()=>{if(activeSheet)store.setSheet(activeSheet,{deco:v})},350)});
decor.addEventListener('pointerdown',e=>e.stopPropagation());
FM.innerHTML=FONTS.map(([f])=>`<button data-f="${f}" style="font-family:'${f}'">${f}</button>`).join('');
function openMenu(m){const o=m.classList.contains('open');closeMenus();if(o)return;const sh=S.sheets.get(activeSheet)||{};
  PM.querySelectorAll('[data-p]').forEach(b=>b.classList.toggle('cur',b.dataset.p===(sh.paper||'uni')));
  FM.querySelectorAll('[data-f]').forEach(b=>b.classList.toggle('cur',b.dataset.f===(sh.font||'Caveat')));syncDeco();m.classList.add('open')}
document.getElementById('paperbtn').onclick=e=>{e.stopPropagation();openMenu(PM)};
document.getElementById('fontbtn').onclick=e=>{e.stopPropagation();openMenu(FM)};
document.getElementById('delbtn').onclick=e=>{e.stopPropagation();openMenu(DM)};
PM.onclick=e=>{const b=e.target.closest('[data-p]');if(b&&activeSheet){store.setSheet(activeSheet,{paper:b.dataset.p});openMenu(PM);openMenu(PM)}};
FM.onclick=e=>{const b=e.target.closest('[data-f]');if(b&&activeSheet){store.setSheet(activeSheet,{font:b.dataset.f});openMenu(FM);openMenu(FM)}};
DM.querySelector('[data-no]').onclick=closeMenus;DM.querySelector('[data-yes]').onclick=()=>{closeMenus();if(!activeSheet)return;const ss=sortedSheets().map(s=>s[0]),i=ss.indexOf(activeSheet),next=ss[i+1]||ss[i-1]||null;store.delSheet(activeSheet);if(next)setActive(next)};

/* ---------- partager ---------- */
const PAGE_URL=location.origin+location.pathname;
const SM=document.getElementById('sharemenu');
document.getElementById('sharebtn').onclick=e=>{e.stopPropagation();openMenu(SM)};
document.getElementById('sh_link').onclick=async()=>{closeMenus();const url=PAGE_URL+(activeBoard?'#'+activeBoard:'');try{await navigator.clipboard.writeText(url);toast('Lien copié')}catch(e){prompt2(PAGE_URL)}};
function prompt2(txt){toast('Lien : '+txt)}
async function sheetPNG(){
  const id=activeSheet,sh=S.sheets.get(id);if(!sh)throw new Error('Pas de feuille');
  const W=1654,H=2339,c=document.createElement('canvas');c.width=W;c.height=H;const g=c.getContext('2d');
  const pp=sh.paper||'uni',deco=(sh.deco??45)/100;
  g.fillStyle='#f7f3ea';g.fillRect(0,0,W,H);
  if(pp==='kraft'){g.save();g.globalAlpha=deco;g.fillStyle='#c9a77b';g.fillRect(0,0,W,H);g.restore()}
  const gr=g.createLinearGradient(0,0,W,H);gr.addColorStop(0,'rgba(255,255,255,.18)');gr.addColorStop(.35,'rgba(255,255,255,0)');gr.addColorStop(1,'rgba(120,90,50,.06)');g.fillStyle=gr;g.fillRect(0,0,W,H);
  const cq=W/100,inv=false;
  const line=(col,x0,y0,x1,y1,w)=>{g.strokeStyle=col;g.lineWidth=w;g.beginPath();g.moveTo(x0,y0);g.lineTo(x1,y1);g.stroke()};
  g.save();g.globalAlpha=deco;
  const blue=inv?'rgba(190,210,255,.30)':'rgba(60,110,185,.30)',red='rgba(215,65,65,.6)';
  if(pp==='quad'){const s=2.381*cq;for(let y=0;y<H;y+=s)line(blue,0,y,W,y,2);for(let x=0;x<W;x+=s)line(blue,x,0,x,H,2)}
  if(pp==='dots'){const s=2.381*cq;g.fillStyle=inv?'rgba(255,255,255,.4)':'rgba(60,60,70,.42)';for(let y=s/2;y<H;y+=s)for(let x=s/2;x<W;x+=s){g.beginPath();g.arc(x,y,2.4,0,7);g.fill()}}
  if(pp==='lines'){const s=3.8*cq;for(let y=s;y<H;y+=s)line(inv?'rgba(190,210,255,.38)':'rgba(60,110,185,.38)',0,y,W,y,2.2);line(red,11.4*cq,0,11.4*cq,H,3)}
  if(pp==='seyes'){const S2=.952*cq,B=3.81*cq;for(let y=S2;y<H;y+=S2)line('rgba(110,165,215,.35)',0,y,W,y,1.6);for(let y=B;y<H;y+=B)line('rgba(110,95,185,.55)',0,y,W,y,2.6);
    for(let x=11.4*cq;x<W;x+=B)line('rgba(110,165,215,.32)',x,0,x,H,1.6);line(red,11.4*cq,0,11.4*cq,H,3)}
  g.restore();
  // titre
  const f=FONTS.find(x=>x[0]===sh.font)||FONTS[0],fs=7.4*f[2]*cq;
  try{await document.fonts.load(`${fs}px "${f[1]}"`)}catch(e){}
  g.fillStyle=inv?'#f5efe4':'#2a2622';g.textAlign='center';g.textBaseline='top';g.font=`${f[0]==='Caveat'?600:400} ${fs}px "${f[1]}", serif`;
  const tEl=spreads.get(id).querySelector('.title'),SR=spreads.get(id).querySelector('.sheet').getBoundingClientRect(),TR=tEl.getBoundingClientRect();
  g.fillText(sh.title||'',W/2,(TR.top-SR.top)/SR.height*H+fs*.12,W*.86);
  if(sh.subtitle){const sEl=spreads.get(id).querySelector('.subtitle'),SBR=sEl.getBoundingClientRect(),ss=2.2*cq;
    try{await document.fonts.load(`500 ${ss}px Inter`)}catch(e){}g.fillStyle='#7b766e';g.font=`500 ${ss}px Inter, system-ui, sans-serif`;
    g.fillText(sh.subtitle,W/2,(SBR.top-SR.top)/SR.height*H+ss*.3,W*.86)}
  // objets
  const its=sheetItems(id).map(k=>[k,S.items.get(k)]).sort((a,b)=>(a[1].z||0)-(b[1].z||0));
  for(const [k,it] of its){const el=pieces.get(k),cv=el?.querySelector('canvas');if(!cv||!cv.width||!el._scale)continue;
    const pw=W*it.w*el._scale/100,ph=pw*cv.height/cv.width;g.save();g.translate(it.x/100*W,it.y/100*H);g.rotate(it.a*Math.PI/180);g.drawImage(cv,-pw/2,-ph/2,pw,ph);g.restore()}
  return await new Promise((res,rej)=>c.toBlob(b=>b?res(b):rej(new Error('Export impossible')),'image/png'));
}
const slug=s=>(s||'liste').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/gi,'-').replace(/^-|-$/g,'').toLowerCase()||'liste';
document.getElementById('sh_png').onclick=async()=>{closeMenus();
  const dl=null;
  try{const blob=await sheetPNG();const name=slug(S.sheets.get(activeSheet)?.title)+'.png';
    if(dl){await dl.save({filename:name,data:blob});toast('Image enregistrée')}
    else{const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;a.click()}}
  catch(e){if(e&&e.code==='declined')return;console.warn(e);toast('Téléchargement indisponible ici : essaie « Copier l’image »')}};
document.getElementById('sh_copyimg').onclick=async()=>{closeMenus();
  try{const blob=await sheetPNG();await navigator.clipboard.write([new ClipboardItem({'image/png':blob})]);toast('Image copiée')}
  catch(e){console.warn(e);toast('Copie d’image refusée par le navigateur : utilise « Télécharger l’image »')}};

/* ---------- modes, familles, sauvegarde ---------- */
document.querySelectorAll('#modes button').forEach(b=>b.onclick=()=>setUI(b.dataset.m));
document.getElementById('backstack').onclick=()=>{VIEW='stack';recomputeEdit();renderAll()};
const famEl=document.querySelector('#brand .fam');
famEl.addEventListener('keydown',e=>{e.stopPropagation();if(e.key==='Enter'){e.preventDefault();famEl.blur()}});
famEl.addEventListener('focus',()=>{if(!EDIT)famEl.blur()});
famEl.addEventListener('blur',()=>{const v=famEl.textContent.trim();if(activeBoard&&v!==(S.boards.get(activeBoard)?.name||''))store.setBoard(activeBoard,{name:v})});
const fsubEl=document.querySelector('#brand .fsub');
fsubEl.addEventListener('keydown',e=>{e.stopPropagation();if(e.key==='Enter'){e.preventDefault();fsubEl.blur()}});
fsubEl.addEventListener('focus',()=>{if(!EDIT)fsubEl.blur()});
fsubEl.addEventListener('blur',()=>{const v=fsubEl.textContent.trim();if(!v)fsubEl.textContent='';if(activeBoard&&v!==(S.boards.get(activeBoard)?.subtitle??'Listes de Noël'))store.setBoard(activeBoard,{subtitle:v})});
const BM=document.getElementById('boardsmenu');
function famMenu(){BM.innerHTML='';
  const head=t=>{const h=document.createElement('div');h.className='mh';h.textContent=t;BM.appendChild(h)};
  const item=(html,fn,cls)=>{const x=document.createElement('button');x.innerHTML=html;if(cls)x.className=cls;x.onclick=fn;BM.appendChild(x);return x};
  const fams=[...S.boards].filter(([id])=>MODE==='local'||MYFAMS.has(id)).sort((a,b)=>(a[1].order||0)-(b[1].order||0));
  if(fams.length>1||MODE==='cloud'){head('Mes familles');fams.forEach(([id,b])=>item(esc(b.name||'Sans nom'),()=>{closeMenus();if(MODE==='cloud')location.hash=id;else{location.hash=id;pickBoard();renderAll()}},id===activeBoard?'cur':''))}
  item('<b style="color:var(--accent)">+ Nouvelle famille</b>',()=>{closeMenus();MODE==='cloud'?createFamily('Nouvelle famille'):newBoard('Nouvelle famille')});
  const b=S.boards.get(activeBoard)||{};
  if(MODE==='cloud'&&CAN_WRITE){head('Cette famille');
    item('Inviter quelqu’un à modifier',async()=>{closeMenus();const {data:code}=await SB.rpc('invite_code',{fid:activeBoard});if(!code){toast('Lien indisponible');return}
      const url=PAGE_URL+'?join='+code+'#'+activeBoard;try{await navigator.clipboard.writeText(url);toast('Lien d’invitation copié : à envoyer à qui doit pouvoir modifier')}catch(e){toast(url)}});
    const vis=(b.reserve_mode||'hidden')==='visible';
    item(`<span class="tg ${vis?'on':''}"></span>La famille voit les réservations`,()=>{store.setBoard(activeBoard,{reserve_mode:vis?'hidden':'visible'});closeMenus();
      toast(vis?'Réservations cachées à la famille : surprise garantie':'Réservations visibles par la famille');setTimeout(()=>loadRes().then(()=>renderAll()),900)})}
  if(MODE==='local'){head('Mode local');const n=document.createElement('div');n.className='mnote';n.textContent='Rien n’est partagé : configure Supabase (README) pour publier tes listes.';BM.appendChild(n)}
}
document.getElementById('boardsbtn').onclick=e=>{e.stopPropagation();const o=BM.classList.contains('open');closeMenus();if(o)return;famMenu();BM.classList.add('open')};
const esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function newBoard(name){const id='b'+uid(),max=Math.max(0,...[...S.boards.values()].map(b=>b.order||0));store.setBoard(id,{name,subtitle:'Listes de Noël',order:max+1});
  location.hash=id;activeBoard=id;activeSheet=null;addSheet();syncBrand();setTimeout(()=>{famEl.focus();document.getSelection().selectAllChildren(famEl)},50)}
// sauvegarde : tout le contenu de la famille affichée
document.getElementById('sh_backup').onclick=async()=>{closeMenus();
  const b=S.boards.get(activeBoard)||{},sh=[...S.sheets].filter(([,v])=>(v.board||firstBoard())===activeBoard),ids=new Set(sh.map(s=>s[0]));
  const data={app:'collage-noel',version:1,exportedAt:new Date().toISOString(),board:b,sheets:sh,items:[...S.items].filter(([,v])=>ids.has(v.sheet)),cfg:S.cfg};
  const json=JSON.stringify(data,null,1),name='sauvegarde-'+slug(b.name||'famille')+'-'+new Date().toISOString().slice(0,10)+'.json';
  const dl=null;
  try{if(dl){await dl.save({filename:name,data:json});toast('Sauvegarde enregistrée')}else{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([json],{type:'application/json'}));a.download=name;a.click()}}
  catch(e){if(e&&e.code==='declined')return;console.warn(e);toast('Sauvegarde impossible ici')}};
const rf=document.getElementById('restorefile');
document.getElementById('sh_restore').onclick=()=>{closeMenus();rf.click()};
rf.onchange=async()=>{const f=rf.files[0];rf.value='';if(!f)return;
  let d;try{d=JSON.parse(await f.text());if(d.app!=='collage-noel'||!Array.isArray(d.sheets))throw new Error('format')}catch(e){toast('Ce fichier n’est pas une sauvegarde valide');return}
  const name=d.board?.name||'Famille',subtitle=d.board?.subtitle??'Listes de Noël';let bid;
  if(MODE==='cloud'){if(!USER){showWelcome();return}
    bid=slugify(name)+'-'+Math.random().toString(36).slice(2,6);
    const {error}=await SB.from('families').insert({id:bid,data:{name,subtitle}});if(error){toast('Restauration impossible : '+error.message);return}
    MYFAMS.set(bid,{name,subtitle,order:Date.now()});S.boards.set(bid,{name,subtitle});activeBoard=bid}
  else{bid='b'+uid();store.setBoard(bid,{name:name+' (restaurée)',subtitle,order:Date.now()})}
  const map={};d.sheets.forEach(([sid,v])=>{const n='s'+uid();map[sid]=n;store.setSheet(n,{...v,board:bid})});
  d.items.forEach(([iid,v])=>{if(map[v.sheet])store.setItem('i'+uid(),{...v,sheet:map[v.sheet]},true)});
  if(MODE==='cloud'){setStatus('Restauration…',false);clearTimeout(ftimer);await flush();location.hash=bid}
  else{location.hash=bid;pickBoard();renderAll(true)}
  toast('Sauvegarde restaurée dans une nouvelle famille')};

/* =====================================================================
   Réservation (mode Aperçu)
   ===================================================================== */
function rsvUI(id,box){box.innerHTML='';box.onclick=e=>e.stopPropagation();const r=S.res.get(id),mine=myRes()[id];
  if(r){const st=document.createElement('div');st.className='rs';
    st.textContent=mine?'Tu as réservé ce cadeau':(r.name?'Réservé par '+r.name:'Déjà réservé');
    if(mine&&!EDIT){const b=document.createElement('button');b.textContent='Annuler';b.onclick=()=>unreserve(id);st.appendChild(b)}
    box.appendChild(st);return}
  if(EDIT||CAN_WRITE)return; // la famille ne réserve pas ses propres cadeaux
  const b=document.createElement('button');b.className='rb';b.textContent='🎁 Je réserve ce cadeau';box.appendChild(b);
  b.onclick=()=>{box.innerHTML='<div class="rf"><input placeholder="Ton prénom (facultatif)" maxlength="40"><button class="rb">Réserver</button><button class="x" title="Annuler">×</button></div>';
    const inp=box.querySelector('input');let last='';try{last=localStorage.getItem('collage-prenom')||''}catch(e){}inp.value=last;setTimeout(()=>inp.focus(),30);
    const go=async()=>{const n=inp.value.trim();try{localStorage.setItem('collage-prenom',n)}catch(e){}box.querySelector('.rb').disabled=true;await reserve(id,n)};
    box.querySelector('.rb').onclick=go;box.querySelector('.x').onclick=()=>rsvUI(id,box);
    inp.addEventListener('keydown',e=>{e.stopPropagation();if(e.key==='Enter')go();if(e.key==='Escape')rsvUI(id,box)})}}

/* =====================================================================
   Compte et accueil
   ===================================================================== */
const W_=document.getElementById('welcome');
function showWelcome(msg){W_.classList.toggle('logged',!!USER);W_.classList.toggle('closable',!!activeBoard);document.getElementById('wmsg').textContent=msg||'';W_.classList.add('on');
  setTimeout(()=>(USER?document.getElementById('cname'):document.getElementById('lemail')).focus(),60)}
function hideWelcome(){W_.classList.remove('on')}
document.getElementById('wclose').onclick=hideWelcome;
document.getElementById('loginform').onsubmit=async e=>{e.preventDefault();const email=document.getElementById('lemail').value.trim(),ls=document.getElementById('lsent');
  ls.textContent='Envoi…';const {error}=await SB.auth.signInWithOtp({email,options:{emailRedirectTo:PAGE_URL+location.search+location.hash}});
  ls.textContent=error?'Erreur : '+error.message:'C’est parti ! Ouvre le lien reçu à '+email+' (pense aux spams).'};
document.getElementById('createform').onsubmit=e=>{e.preventDefault();const n=document.getElementById('cname').value.trim();if(n)createFamily(n)};
const AM=document.getElementById('acctmenu'),AB=document.getElementById('acctbtn');
function renderAccount(){document.body.classList.toggle('hasfams',MODE==='local'||MYFAMS.size>0||CAN_WRITE);
  document.getElementById('account').style.display=MODE==='cloud'?'':'none';
  AB.textContent=USER?(USER.email||'Mon compte'):'Se connecter'}
AB.onclick=e=>{e.stopPropagation();if(!USER){showWelcome();return}const o=AM.classList.contains('open');closeMenus();if(o)return;
  AM.innerHTML='';const add=(h,fn)=>{const b=document.createElement('button');b.innerHTML=h;b.onclick=()=>{closeMenus();fn()};AM.appendChild(b)};
  const hd=document.createElement('div');hd.className='mh';hd.textContent=USER.email;AM.appendChild(hd);
  [...MYFAMS].sort((a,b)=>a[1].order-b[1].order).forEach(([id,f])=>add(esc(f.name||id)+(id===activeBoard?' ·':''),()=>{location.hash=id}));
  add('<b style="color:var(--accent)">+ Nouvelle famille</b>',()=>showWelcome());
  add('Se déconnecter',async()=>{await SB.auth.signOut();location.reload()});AM.classList.add('open')};

/* =====================================================================
   Aperçu de lien : titre, image, prix depuis une page produit
   ===================================================================== */
const enc_=encodeURIComponent;
async function unfurl(u){
  if(SB){try{const r=await fetch(CFG.supabaseUrl+'/functions/v1/unfurl?url='+enc_(u),{headers:{apikey:CFG.supabaseAnonKey,Authorization:'Bearer '+CFG.supabaseAnonKey}});
    if(r.ok){const j=await r.json();if(j.title||j.image)return j}}catch(e){console.warn('unfurl',e)}}
  try{const r=await fetch('https://api.microlink.io/?url='+enc_(u));const j=await r.json();
    if(j.status==='success'){const d=j.data;return{url:d.url||u,title:d.title||'',image:d.image?.url||d.logo?.url||'',site:d.publisher||hostOf(u),price:''}}}catch(e){console.warn('microlink',e)}
  return null}
async function fetchImage(u){
  const tries=[];if(SB)tries.push(CFG.supabaseUrl+'/functions/v1/unfurl?img='+enc_(u));tries.push('https://images.weserv.nl/?url='+enc_(u.replace(/^https?:\/\//,''))+'&w=1400');tries.push(u);
  for(const t of tries){try{const r=await fetch(t,t.includes('/functions/')?{headers:{apikey:CFG.supabaseAnonKey,Authorization:'Bearer '+CFG.supabaseAnonKey}}:{});
    if(!r.ok)continue;const b=await r.blob();if(!b.type.startsWith('image/')||b.size<500)continue;return new File([b],'image',{type:b.type})}catch(e){}}
  return null}
const isImgUrl=u=>/\.(png|jpe?g|webp|gif|avif)(\?|$)/i.test(u)||/images\/I\/|\/image\//i.test(u);
async function fillFromUrl(u,forceImg){
  u=(u||'').trim();if(!/^https?:\/\//i.test(u))u=u?'https://'+u:'';if(!u)return;
  const st=document.getElementById('f_urlst'),fu=document.getElementById('f_url');fu.value=u;st.className='busy';st.textContent='Je lis la page…';
  const my=F;
  if(isImgUrl(u)){const f=await fetchImage(u);if(F!==my)return;st.className='';if(f){setPreview(f);st.textContent='Image récupérée'}else st.textContent='Image inaccessible : copie-la puis colle-la ici';return}
  const d=await unfurl(u);if(F!==my)return;
  if(!d){st.className='';st.textContent='Ce site ne se laisse pas lire. Remplis à la main, ou colle une copie de l’image.';ensureLink(u,hostOf(u));return}
  const set=(id,v)=>{const el=document.getElementById(id);if(v&&!el.value.trim())el.value=v};
  const title=(d.title||'').replace(/\s+/g,' ').slice(0,90);set('f_name',title);
  const site=(d.site||hostOf(d.url||u)).replace(/^www\./,'');set('f_price',[site,d.price].filter(Boolean).join(' · '));
  ensureLink(d.url||u,site);
  if(d.image&&(forceImg||!F.file)){st.textContent='Je récupère l’image…';const f=await fetchImage(d.image);if(F!==my)return;if(f)setPreview(f)}
  st.className='';st.textContent=F.file?'C’est rempli. Vérifie et ajuste si besoin.':'Rempli, mais pas d’image : ajoute-la à la main.'}
function ensureLink(url,label){const rows=[...document.querySelectorAll('#f_links .l')];if(rows.some(r=>r.children[1].value.trim()===url))return;
  let r=rows.find(r=>!r.children[1].value.trim());if(!r){linkRow();r=[...document.querySelectorAll('#f_links .l')].pop()}
  r.children[0].value=r.children[0].value||label||'';r.children[1].value=url}
document.getElementById('f_fetch').onclick=()=>fillFromUrl(document.getElementById('f_url').value,true);
document.getElementById('f_url').addEventListener('paste',e=>{const t=e.clipboardData?.getData('text/plain')||'';if(/^\s*https?:\/\/\S+\s*$/.test(t)){e.preventDefault();e.stopPropagation();fillFromUrl(t,true)}});
document.getElementById('f_url').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();fillFromUrl(e.target.value,true)}});
boot();