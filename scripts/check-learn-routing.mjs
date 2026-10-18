import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import http from 'node:http';
import https from 'node:https';
import { paths } from '../learn/content/index.js';

const args = process.argv.slice(2).filter(arg => arg !== '--');
const base = new URL(args[0] ?? 'http://127.0.0.1:3010');
const assetsRoot = new URL('../public/learn-assets/', import.meta.url);
const audio = Object.values(JSON.parse(await readFile(new URL('audio/manifest.json', assetsRoot), 'utf8')));
const videos = Object.values(JSON.parse(await readFile(new URL('video/manifest.json', assetsRoot), 'utf8')));
const learnUrl = new URL(process.env.NEXT_PUBLIC_LEARN_URL ?? 'https://learn.jinnie.ph/', 'https://jinnie.ph').href;
const path = paths.find(path => path.id === 'first') ?? paths[0];
const lesson = path.lessons[0];
const routes = ['/', '/paths', `/path/${path.id}`, `/lesson/${lesson.id}`, `/bite/${lesson.bites[0].id}`, '/practice', '/me', '/onboard', '/placement', '/placement/age'];

async function get(path, host, options = {}) {
  // Node's fetch may replace Host with the URL's hostname. Send the requested
  // virtual host explicitly so this verifies the deployed Next host matcher.
  return new Promise((resolve, reject) => {
    const url = new URL(path, base);
    const request = (url.protocol === 'https:' ? https : http).request(url, {
      ...options, headers: { Host: host, ...options.headers },
    }, response => {
      const chunks = [];
      response.on('data', chunk => chunks.push(chunk));
      response.once('error', reject);
      response.once('end', () => resolve(new Response(Buffer.concat(chunks), {
        status: response.statusCode, headers: response.headers,
      })));
    });
    request.once('error', reject);
    request.setTimeout(30_000, () => request.destroy(new Error(`Timed out: ${host}${path}`)));
    request.end();
  });
}
async function body(path, host) {
  const response = await get(path, host);
  assert.equal(response.status, 200, `${host}${path}: HTTP ${response.status}`);
  return response.text();
}

function assertNextCourse(html, label, canonical) {
  assert.ok(/<script[^>]+src="\/_next\/static\//.test(html), `${label}: Next framework scripts missing`);
  assert.ok(/class="learn-loading"/.test(html), `${label}: Learn React shell missing`);
  assert.ok(!/<iframe|<script[^>]+src="[^\"]*(?:learn-content|\/src\/app\.js)/.test(html), `${label}: retired standalone runtime or iframe found`);
  assert.ok(!/class="[^\"]*(?:marketing-site|site-header)/.test(html), `${label}: marketing layout found inside Learn`);
  const actualCanonical = html.match(/<link\b(?=[^>]*\brel="canonical")(?=[^>]*\bhref="([^\"]+)")[^>]*>/)?.[1];
  assert.ok(actualCanonical, `${label}: canonical metadata missing`);
  assert.equal(new URL(actualCanonical).href, new URL(canonical).href, `${label}: incorrect canonical URL`);
}

for (const host of ['learn.jinnie.ph', `learn.localhost:${base.port || 80}`]) {
  const html = await body('/?embed=native', host);
  assertNextCourse(html, host, 'https://learn.jinnie.ph/');
  for (const route of routes.slice(1)) assertNextCourse(await body(`${route}?embed=native`, host), `${host}${route}`, `https://learn.jinnie.ph${route}`);
  const frameworkFiles = new Set([...html.matchAll(/(?:src|href)="(\/_next\/[^\"]+)"/g)].map(match => match[1].replaceAll('&amp;', '&')));
  assert.ok(frameworkFiles.size > 0);
  for (const file of frameworkFiles) {
    const response = await get(file, host);
    assert.equal(response.status, 200, `Next resource ${host}${file}: HTTP ${response.status}`);
    await response.arrayBuffer();
  }
  const sw = await get('/learn-sw.js', host);
  assert.equal(sw.status, 200);
  assert.match(sw.headers.get('content-type'), /javascript/);
  const manifest = JSON.parse(await body('/manifest.webmanifest', host));
  assert.equal(manifest.scope, '/');
  assert.equal(manifest.start_url, '/');
  for (const icon of manifest.icons) assert.equal((await get(icon.src, host)).status, 200, icon.src);
  assert.equal((await get('/learn-assets/characters/jinnie.png', host)).status, 200);
  for (const retired of ['/apps', '/src/app.js', '/styles.css', '/learn-content/src/app.js']) assert.equal((await get(retired, host)).status, 404, retired);
  const legacy = await get('/learn-content/index.html?embed=native', host);
  assert.equal(legacy.status, 307);
  assert.equal(new URL(legacy.headers.get('location'), base).pathname, '/');
  assert.equal(new URL(legacy.headers.get('location'), base).searchParams.get('embed'), 'native');
  const sitemap = await body('/sitemap.xml', host);
  assert.ok(sitemap.includes(`<loc>${learnUrl}</loc>`), `Learn sitemap root ${learnUrl} on ${host}`);
  assert.doesNotMatch(sitemap, /\/apps/);
  assert.ok((await body('/robots.txt', host)).includes(`Sitemap: ${learnUrl}sitemap.xml`), `Learn robots sitemap on ${host}`);
  for (const media of [audio[0], videos[0]]) {
    const response = await get('/learn-assets/' + media.src.replace(/^(?:\.\/)?assets\//, ''), host, { headers: { Range: 'bytes=0-1023' } });
    assert.equal(response.status, 206, `Seeking ${media.src} on ${host}`);
    assert.equal((await response.arrayBuffer()).byteLength, 1024);
  }
}

// The course is served in the site itself; the marketing host no longer redirects it away.
const localHost = `localhost:${base.port || 80}`;
for (const host of ['jinnie.ph', localHost]) {
  assertNextCourse(await body('/learn?embed=native', host), `${host} /learn`, 'https://learn.jinnie.ph/');
  assertNextCourse(await body('/learn/paths?embed=native', host), `${host} /learn/paths`, 'https://learn.jinnie.ph/paths');
}
const localManifest = JSON.parse(await body('/learn/manifest.webmanifest', localHost));
assert.equal(localManifest.scope, '/learn');
assert.equal(localManifest.start_url, '/learn');
const localLegacy = await get('/learn-content/index.html?embed=native', localHost);
assert.equal(localLegacy.status, 307);
assert.equal(new URL(localLegacy.headers.get('location'), base).pathname, '/learn');
assert.equal((await get('/learn-content/src/app.js', localHost)).status, 404);
assert.equal((await get('/learn-content/src/app.js', 'jinnie.ph')).status, 404);
for (const path of ['/', '/apps', '/apps/learn']) {
  assert.match(await body(path, 'jinnie.ph'), /href="(?:https:\/\/learn\.jinnie\.ph\/|\/learn\/?)"/, `Learn link missing at ${path}`);
}
const marketingSitemap = await body('/sitemap.xml', 'jinnie.ph');
assert.doesNotMatch(marketingSitemap, /<loc>https:\/\/jinnie\.ph\/learn<\/loc>/);
assert.match(marketingSitemap, /\/apps\/learn<\/loc>/);
console.log(`Learn Next routing verified at ${base.origin}: ${routes.length} React routes on both Learn hosts, local /learn, framework resources, media ranges, host-scoped manifests, canonical metadata, and retired static UI blocked.`);
