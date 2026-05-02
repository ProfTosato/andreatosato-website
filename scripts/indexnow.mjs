#!/usr/bin/env node
// Submit one or more URLs to IndexNow.
// Usage: node scripts/indexnow.mjs <url> [<url> ...]
// All URLs must belong to the host below.

const KEY = process.env.INDEXNOW_KEY || 'c8d4e7b2f9a536184c90e2d7b5a8f3c1';
const HOST = 'www.andreatosato.com';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const urls = process.argv.slice(2);
if (urls.length === 0) {
  console.error('Usage: node scripts/indexnow.mjs <url> [<url> ...]');
  process.exit(1);
}

for (const u of urls) {
  let parsed;
  try {
    parsed = new URL(u);
  } catch {
    console.error(`Invalid URL: ${u}`);
    process.exit(1);
  }
  if (parsed.host !== HOST) {
    console.error(`URL host mismatch: ${u} (expected ${HOST})`);
    process.exit(1);
  }
}

const body = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urls,
};

const res = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(body),
});

console.log(`Submitted ${urls.length} URL(s) to IndexNow`);
console.log(`HTTP ${res.status} ${res.statusText}`);
const text = await res.text();
if (text) console.log(text);
process.exit(res.ok ? 0 : 1);
