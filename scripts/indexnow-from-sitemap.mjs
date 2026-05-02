#!/usr/bin/env node
// Read the sitemap index, extract every page URL, and submit them all to
// IndexNow in a single bulk request. Run manually, not on every deploy.
// Usage: node scripts/indexnow-from-sitemap.mjs

const KEY = process.env.INDEXNOW_KEY || 'c8d4e7b2f9a536184c90e2d7b5a8f3c1';
const HOST = 'www.andreatosato.com';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const SITEMAP_INDEX = `https://${HOST}/sitemap-index.xml`;

function extractLocs(xml) {
  const out = [];
  const re = /<loc>\s*([^<\s]+)\s*<\/loc>/gi;
  let m;
  while ((m = re.exec(xml)) !== null) out.push(m[1]);
  return out;
}

async function fetchText(url) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`Failed to fetch ${url}: HTTP ${r.status} ${r.statusText}`);
  return r.text();
}

const indexXml = await fetchText(SITEMAP_INDEX);
const sitemaps = extractLocs(indexXml);
console.log(`Sitemap index lists ${sitemaps.length} sitemap(s)`);

const collected = [];
for (const sm of sitemaps) {
  const xml = await fetchText(sm);
  const urls = extractLocs(xml);
  console.log(`  ${sm} -> ${urls.length} URL(s)`);
  collected.push(...urls);
}

const filtered = collected.filter((u) => {
  try { return new URL(u).host === HOST; } catch { return false; }
});
const urlList = [...new Set(filtered)];

if (urlList.length === 0) {
  console.error('No URLs found in sitemap.');
  process.exit(1);
}

if (urlList.length > 10000) {
  console.error(`IndexNow accepts at most 10,000 URLs per request (got ${urlList.length}).`);
  process.exit(1);
}

console.log(`Submitting ${urlList.length} URL(s) to IndexNow`);

const res = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
});

console.log(`HTTP ${res.status} ${res.statusText}`);
const text = await res.text();
if (text) console.log(text);
process.exit(res.ok ? 0 : 1);
