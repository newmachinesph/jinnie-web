// The build inserts the release fingerprint and Next static chunk inventory.
const RELEASE = '__LEARN_RELEASE__';
const STATIC = /* __NEXT_STATIC__ */ [];
const BASE = new URL(self.registration.scope).pathname.replace(/\/$/, '');
const ENTRY = BASE || '/';
const PREFIX = `jinnie-next-shell-${ENTRY}-`;
const SHELL = PREFIX + RELEASE;
const MEDIA = `jinnie-next-media-${ENTRY}-taglish-numbers-v2`;
const LEGACY_SCOPES = [...new Set([ENTRY, BASE + '/', '/learn-content/'])];
const isLegacyCache = key => LEGACY_SCOPES.some(scope => key.startsWith(`jinnie-shell-${scope}-`) || key === `jinnie-media-${scope}` || key.startsWith(`jinnie-media-${scope}:`));
const ESSENTIAL = [
  ENTRY, '/learn-assets/icon.svg', '/learn-assets/icon-192.png', '/learn-assets/icon-512.png',
  '/learn-assets/characters/jinnie.png', '/learn-assets/audio/manifest.json', '/learn-assets/video/manifest.json',
  ...['kids', 'teens', 'first', 'building', 'securing', 'retired'].flatMap(id => ['en', 'tl'].map(lang => `/learn-assets/video/${id}.${lang}.poster.jpg`)),
];
const isCourse = path => BASE ? path === BASE || path.startsWith(BASE + '/') : /^\/(?:$|onboard$|placement(?:\/age)?$|paths$|path\/[^/]+$|lesson\/[^/]+$|bite\/[^/]+$|practice$|me$)/.test(path);

self.addEventListener('install', event => {
  event.waitUntil(caches.open(SHELL).then(cache => cache.addAll([...ESSENTIAL, ...STATIC].map(url => new Request(url, { cache: 'reload' })))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key =>
    (key.startsWith(PREFIX) && key !== SHELL) || isLegacyCache(key)
  ).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});

async function ranged(response, header) {
  const bytes = await response.arrayBuffer();
  const match = /^bytes=(\d*)-(\d*)$/.exec(header);
  if (!match || (!match[1] && !match[2])) return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${bytes.byteLength}` } });
  const start = match[1] ? Number(match[1]) : Math.max(0, bytes.byteLength - Number(match[2]));
  const end = match[1] && match[2] ? Math.min(Number(match[2]), bytes.byteLength - 1) : bytes.byteLength - 1;
  if (start > end || start >= bytes.byteLength) return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${bytes.byteLength}` } });
  const headers = new Headers(response.headers);
  headers.set('Content-Range', `bytes ${start}-${end}/${bytes.byteLength}`);
  headers.set('Content-Length', String(end - start + 1));
  headers.set('Accept-Ranges', 'bytes');
  return new Response(bytes.slice(start, end + 1), { status: 206, headers });
}

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;
  const navigation = request.mode === 'navigate' && isCourse(url.pathname);
  const asset = url.pathname.startsWith('/learn-assets/') || url.pathname.startsWith('/_next/static/');
  // Next's Flight responses vary by router state. Leave them on the network;
  // offline navigation deliberately requests the full document instead.
  if (!navigation && !asset) return;
  event.respondWith((async () => {
    const isMedia = /\.(mp3|mp4|vtt)$/.test(url.pathname);
    const cache = await caches.open(isMedia ? MEDIA : SHELL);
    if (navigation) {
      try {
        const response = await fetch(request);
        if (response.ok && response.headers.get('content-type')?.includes('text/html')) event.waitUntil(cache.put(request, response.clone()).catch(() => {}));
        return response;
      } catch {
        return await cache.match(request) || await cache.match(ENTRY) || new Response('Offline', { status: 503 });
      }
    }
    const cached = await cache.match(request);
    if (cached) return request.headers.has('range') ? ranged(cached, request.headers.get('range')) : cached;
    try {
      const response = await fetch(request);
      if (response.ok && response.status === 200) event.waitUntil(cache.put(request, response.clone()).catch(() => {}));
      return response;
    } catch { return new Response('Offline', { status: 503 }); }
  })());
});
