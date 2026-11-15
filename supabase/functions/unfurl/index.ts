// Aperçu de lien : lit une page produit et renvoie titre, image, prix, magasin.
//   GET /functions/v1/unfurl?url=https://…   → JSON
//   GET /functions/v1/unfurl?img=https://…   → l'image elle-même (avec CORS), pour la découpe
// Déploiement : Supabase › Edge Functions › Deploy a new function › « unfurl », coller ce fichier,
// puis désactiver « Verify JWT » (la fonction est publique, comme la page).

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info",
};
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";

const json = (o: unknown, status = 200) =>
  new Response(JSON.stringify(o), { status, headers: { ...CORS, "content-type": "application/json" } });

function okUrl(u: string | null): URL | null {
  try {
    const x = new URL(u ?? "");
    if (x.protocol !== "https:" && x.protocol !== "http:") return null;
    if (/^(localhost|127\.|10\.|192\.168\.|169\.254\.|\[)/.test(x.hostname)) return null;
    return x;
  } catch { return null; }
}

const dec = (s = "") =>
  s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, "<")
   .replace(/&gt;/g, ">").replace(/&nbsp;/g, " ").replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)))
   .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n)).trim();

function meta(html: string, keys: string[]): string {
  for (const k of keys) {
    const re1 = new RegExp(`<meta[^>]+(?:property|name|itemprop)=["']${k}["'][^>]*content=["']([^"']*)["']`, "i");
    const re2 = new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]*(?:property|name|itemprop)=["']${k}["']`, "i");
    const m = html.match(re1) || html.match(re2);
    if (m && m[1].trim()) return dec(m[1]);
  }
  return "";
}

function jsonLdProduct(html: string): Record<string, any> | null {
  const blocks = [...html.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)];
  for (const b of blocks) {
    try {
      const walk = (o: any): any => {
        if (!o || typeof o !== "object") return null;
        if (Array.isArray(o)) { for (const x of o) { const r = walk(x); if (r) return r; } return null; }
        const t = o["@type"];
        if (t === "Product" || (Array.isArray(t) && t.includes("Product"))) return o;
        return walk(o["@graph"]) || null;
      };
      const p = walk(JSON.parse(b[1].trim()));
      if (p) return p;
    } catch { /* bloc illisible */ }
  }
  return null;
}

function fmtPrice(v: unknown, cur = "EUR"): string {
  const n = typeof v === "number" ? v : parseFloat(String(v ?? "").replace(",", "."));
  if (!isFinite(n) || n <= 0) return "";
  const sym = cur === "EUR" || !cur ? "€" : cur;
  return n.toFixed(2).replace(".", ",").replace(",00", "") + " " + sym;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  const q = new URL(req.url).searchParams;

  // ---- proxy d'image
  const img = okUrl(q.get("img"));
  if (img) {
    const r = await fetch(img, { headers: { "user-agent": UA, accept: "image/*" } }).catch(() => null);
    const type = r?.headers.get("content-type") ?? "";
    if (!r || !r.ok || !type.startsWith("image/")) return json({ error: "image indisponible" }, 502);
    const buf = await r.arrayBuffer();
    if (buf.byteLength > 12e6) return json({ error: "image trop lourde" }, 413);
    return new Response(buf, { headers: { ...CORS, "content-type": type, "cache-control": "public, max-age=86400" } });
  }

  // ---- lecture de page
  const url = okUrl(q.get("url"));
  if (!url) return json({ error: "lien invalide" }, 400);
  const r = await fetch(url, {
    redirect: "follow",
    headers: { "user-agent": UA, accept: "text/html,application/xhtml+xml", "accept-language": "fr-FR,fr;q=0.9,en;q=0.6" },
  }).catch(() => null);
  if (!r || !r.ok) return json({ error: "page inaccessible", status: r?.status ?? 0 }, 502);
  const html = (await r.text()).slice(0, 2_000_000);
  const base = r.url || url.href;

  const p = jsonLdProduct(html);
  const offer = p ? (Array.isArray(p.offers) ? p.offers[0] : p.offers) : null;
  const pImg = p ? (Array.isArray(p.image) ? p.image[0] : p.image) : null;

  let title = (p?.name as string) || meta(html, ["og:title", "twitter:title"]) ||
    dec(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "");
  title = title.replace(/\s*[|\-–:]\s*(Amazon\.fr|Amazon|Fnac|Cdiscount|Decathlon|Zara Home|LEGO®? Shop).*$/i, "").trim();

  let image = (typeof pImg === "string" ? pImg : pImg?.url) ||
    meta(html, ["og:image:secure_url", "og:image", "twitter:image", "twitter:image:src"]);
  // Amazon : pas d'og:image, l'image est dans le code de la page
  if (!image) image = html.match(/data-old-hires=["'](https:[^"']+)["']/i)?.[1] ??
    html.match(/"hiRes":"(https:[^"]+)"/)?.[1] ?? html.match(/"large":"(https:\/\/m\.media-amazon\.com[^"]+)"/)?.[1] ??
    html.match(/data-a-dynamic-image=["']\{&quot;(https:[^&]+)&quot;/i)?.[1] ?? "";
  if (image) { try { image = new URL(image, base).href; } catch { image = ""; } }

  const amz = html.match(/class=["']a-offscreen["']>\s*([\d\s\u202f.,]+)\s*€/i)?.[1]?.replace(/[\s\u202f.]/g, "").replace(",", ".");
  const price = fmtPrice(offer?.price ?? offer?.lowPrice, offer?.priceCurrency) || fmtPrice(amz) ||
    fmtPrice(meta(html, ["product:price:amount", "og:price:amount", "price"]), meta(html, ["product:price:currency", "og:price:currency"]) || "EUR");

  const site = meta(html, ["og:site_name"]) || (p?.brand?.name ?? "") || new URL(base).hostname.replace(/^www\./, "");
  const description = meta(html, ["og:description", "description"]).slice(0, 220);

  return json({ url: base, title, image, price, site, description });
});
