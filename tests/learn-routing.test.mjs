import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import test from 'node:test';
import ts from 'typescript';
import nextServer from 'next/server.js';
import nextTesting from 'next/experimental/testing/server.js';

// Exercise the actual TypeScript proxy without starting a server. Next's build
// and the HTTP smoke check additionally exercise its compiled host matcher.
const require = createRequire(import.meta.url);
function loadTypeScript(relativePath, dependencies = {}) {
  const source = readFileSync(new URL(relativePath, import.meta.url), 'utf8');
  const code = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  const mod = { exports: {} };
  new Function('require', 'module', 'exports', code)(name => dependencies[name] ?? require(name), mod, mod.exports);
  return mod.exports;
}
const siteModule = loadTypeScript('../src/lib/site.ts');
const { proxy, config } = loadTypeScript('../src/proxy.ts', { './lib/site': siteModule });
const { default: nextConfig } = loadTypeScript('../next.config.ts', { './src/lib/site': siteModule });
// This installed Next release still exports the matcher helper's old name.
const { unstable_doesMiddlewareMatch: doesProxyMatch, unstable_getResponseFromNextConfig } = nextTesting;
const { NextRequest } = nextServer;
const request = (path, host = 'learn.jinnie.ph') => new NextRequest(`https://${host}${path}`, { headers: { host } });

test('native embedding stays in the top document with its query intact', () => {
  const response = proxy(request('/?embed=native&lang=tl'));
  const destination = new URL(response.headers.get('x-middleware-rewrite'));
  assert.equal(destination.pathname, '/learn');
  assert.equal(destination.searchParams.get('embed'), 'native');
  assert.equal(destination.searchParams.get('lang'), 'tl');
  assert.equal(response.headers.get('location'), null);
});

test('real screens rewrite to Next and framework/media resources pass through', () => {
  for (const host of ['learn.jinnie.ph', 'learn.localhost:3010', 'LEARN.JINNIE.PH']) {
    for (const path of ['/paths', '/path/first', '/lesson/first.sweldo', '/bite/first.sweldo.1', '/practice', '/me', '/onboard', '/placement', '/placement/age', '/manifest.webmanifest']) {
      const destination = new URL(proxy(request(path, host)).headers.get('x-middleware-rewrite'));
      assert.equal(destination.pathname, `/learn${path}`);
    }
    for (const path of ['/_next/static/chunks/app.js', '/_next/image?url=test', '/learn-sw.js', '/learn-assets/video/first.en.mp4']) {
      const response = proxy(request(path, host));
      assert.equal(response.headers.get('x-middleware-next'), '1');
      assert.equal(response.headers.get('x-middleware-rewrite'), null);
    }
  }
});

test('marketing and lookalike hosts are not rewritten', () => {
  for (const host of ['jinnie.ph', 'www.jinnie.ph', 'localhost:3010', 'learn.jinnie.ph.example.com']) {
    const response = proxy(request('/', host));
    assert.equal(response.headers.get('x-middleware-rewrite'), null);
    assert.equal(response.headers.get('x-middleware-next'), '1');
  }
});

test('Learn metadata stays on the Learn origin and unknown paths are not marketing pages', async () => {
  const sitemap = await proxy(request('/sitemap.xml')).text();
  assert.match(sitemap, /<loc>https:\/\/learn\.jinnie\.ph\/<\/loc>/);
  assert.match(sitemap, /<loc>https:\/\/learn\.jinnie\.ph\/paths<\/loc>/);
  assert.doesNotMatch(sitemap, /\/apps|\/privacy|\/me|\/onboard|\/placement/);
  assert.match(await proxy(request('/robots.txt')).text(), /Sitemap: https:\/\/learn\.jinnie\.ph\/sitemap.xml/);
  for (const path of ['/apps', '/styles.css', '/sw.js', '/src/app.js', '/assets/video/first.en.mp4', '/path/first/extra']) {
    assert.equal(proxy(request(path)).status, 404, path);
  }
});

test('the old Learn path on the course host redirects to root without losing embed', () => {
  const response = proxy(request('/learn?embed=native'));
  assert.equal(response.status, 307);
  assert.equal(response.headers.get('location'), 'https://learn.jinnie.ph/?embed=native');
  assert.equal(proxy(request('/learn/path/first?embed=native')).headers.get('location'), 'https://learn.jinnie.ph/path/first?embed=native');
  assert.equal(proxy(request('/learn/manifest.webmanifest')).headers.get('location'), 'https://learn.jinnie.ph/manifest.webmanifest');
});

test('legacy entry points redirect but retired standalone files cannot be served on any host', () => {
  for (const host of ['learn.jinnie.ph', 'jinnie.ph', 'localhost:3010']) {
    for (const path of ['/learn-content', '/learn-content/index.html']) {
      const response = proxy(request(`${path}?embed=native`, host));
      assert.equal(response.status, 307);
      const destination = new URL(response.headers.get('location'));
      assert.equal(destination.pathname, host.startsWith('learn.') ? '/' : '/learn');
      assert.equal(destination.searchParams.get('embed'), 'native');
    }
    assert.equal(proxy(request('/learn-content/src/app.js', host)).status, 404);
    assert.equal(doesProxyMatch({ config, nextConfig, url: `https://${host}/learn-content/src/app.js`, headers: { host } }), true);
  }
  assert.equal(doesProxyMatch({ config, nextConfig, url: 'https://learn.jinnie.ph/path/first', headers: { host: 'learn.jinnie.ph' } }), true);
  assert.equal(doesProxyMatch({ config, nextConfig, url: 'http://localhost:3010/learn', headers: { host: 'localhost:3010' } }), false);
});

test('/learn renders the real route on every host, marketing hosts included', async () => {
  for (const host of ['jinnie.ph', 'www.jinnie.ph', 'localhost:3010', '127.0.0.1:3010', 'learn.localhost:3010', 'learn.jinnie.ph', 'jinnie.ph.example.com']) {
    for (const path of ['/learn', '/learn/path/first']) {
      const response = await unstable_getResponseFromNextConfig({ url: `https://${host}${path}?embed=native`, headers: { host }, nextConfig });
      assert.equal(response.headers.get('location'), null, `${host}${path}`);
    }
  }
});
