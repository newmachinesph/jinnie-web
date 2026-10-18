import { NextResponse, type NextRequest } from 'next/server';
import { site } from './lib/site';

// learnUrl may be a site-relative path; sitemaps and robots need it absolute.
const learnUrl = new URL(site.learnUrl, site.url).href;
const screens = new Set(['/', '/paths', '/practice', '/me', '/onboard', '/placement', '/placement/age']);
const resource = /^\/(?:_next|learn-assets)(?:\/|$)/;

/** The Learn host serves the course as the top document, including in Expo. */
export function proxy(request: NextRequest) {
  const host = (request.headers.get('host') ?? '').toLowerCase().replace(/:\d+$/, '');
  const learnHost = host === 'learn.jinnie.ph' || host === 'learn.localhost';
  const path = request.nextUrl.pathname;
  if (path === '/learn-content' || path === '/learn-content/index.html') {
    const url = request.nextUrl.clone();
    url.pathname = learnHost ? '/' : '/learn';
    return NextResponse.redirect(url);
  }
  // Old generated files may still be present in a developer's working tree.
  // They must never serve the retired standalone course.
  if (path.startsWith('/learn-content/')) return missing();
  if (!learnHost) return NextResponse.next();

  if (resource.test(path) || path === '/learn-sw.js') return NextResponse.next();
  if (path === '/robots.txt') {
    return new NextResponse(`User-agent: *\nAllow: /\nDisallow: /learn-content/\nDisallow: /me\nDisallow: /onboard\nDisallow: /placement\nSitemap: ${learnUrl}sitemap.xml\n`, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }
  if (path === '/sitemap.xml') {
    const urls = ['', 'paths', 'practice'].map(route => `<url><loc>${learnUrl}${route}</loc><changefreq>monthly</changefreq></url>`).join('');
    return new NextResponse(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
      headers: { 'Content-Type': 'application/xml; charset=utf-8' },
    });
  }
  if (path === '/learn' || path.startsWith('/learn/') || path === '/index.html') {
    const url = request.nextUrl.clone();
    url.pathname = path === '/index.html' ? '/' : path.slice('/learn'.length) || '/';
    return NextResponse.redirect(url);
  }

  // Content IDs are validated by the actual Next page, which returns notFound.
  const destination = screens.has(path) || /^\/(path|lesson|bite)\/[^/]+$/.test(path) || path === '/manifest.webmanifest'
    ? `/learn${path === '/' ? '' : path}` : null;
  if (destination) {
    // Clone the URL so embed=native and other course parameters survive.
    const url = request.nextUrl.clone();
    url.pathname = destination;
    return NextResponse.rewrite(url);
  }
  return missing();
}

function missing() { return new NextResponse('Not found', { status: 404, headers: { 'Content-Type': 'text/plain; charset=utf-8' } }); }

export const config = {
  matcher: [
    '/learn-content/:path*',
    { source: '/:path*', has: [{ type: 'host', value: '(learn\\.jinnie\\.ph|learn\\.localhost)' }] },
  ],
};
