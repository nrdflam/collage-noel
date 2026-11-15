(()=>{const q=s=>document.querySelector(s),m=n=>(q('meta[property="'+n+'"]')||q('meta[name="'+n+'"]'))?.content||'';let ld={};
document.querySelectorAll('script[type="application/ld+json"]').forEach(s=>{try{const w=o=>{if(!o||typeof o!=='object')return;if(Array.isArray(o))return o.forEach(w);const t=o['@type'];if((t==='Product'||(Array.isArray(t)&&t.includes('Product')))&&!ld.name)ld=o;w(o['@graph'])};w(JSON.parse(s.textContent))}catch(e){}});
const of=(Array.isArray(ld.offers)?ld.offers[0]:ld.offers)||{};
let img=q('#landingImage')?.getAttribute('data-old-hires')||m('og:image')||(Array.isArray(ld.image)?ld.image[0]:(ld.image?.url||ld.image))||'';
if(typeof img!=='string')img=img?.url||'';
if(!img){let b='',a=0;document.querySelectorAll('img').forEach(i=>{const s=i.naturalWidth*i.naturalHeight,r=i.getBoundingClientRect();if(s>a&&i.currentSrc&&r.top<innerHeight*1.5&&r.width>120){a=s;b=i.currentSrc}});img=b}
let p=String(of.price||of.lowPrice||m('product:price:amount')||m('og:price:amount')||q('[itemprop=price]')?.getAttribute('content')||'');
if(/^\d+([.,]\d+)?$/.test(p))p=p.replace('.',',')+' €';
if(!p){const e=q('#corePrice_feature_div .a-offscreen')||q('.a-price .a-offscreen')||q('[itemprop=price]')||q('[class*="price" i]');const t=(e?.textContent||'').match(/\d[\d\s .,]*\s?€|€\s?\d[\d\s .,]*/);p=t?t[0].replace(/\s+/g,' ').trim():''}
const d={u:q('link[rel=canonical]')?.href||location.href,t:String(ld.name||m('og:title')||document.title).trim().slice(0,140),i:img?new URL(img,location.href).href:'',p,s:m('og:site_name')||ld.brand?.name||location.hostname.replace(/^www\./,'')};
open('__BASE__?add='+encodeURIComponent(JSON.stringify(d)),'_blank')})()
