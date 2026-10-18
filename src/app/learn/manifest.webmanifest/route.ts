import { type NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest) {
  const host = (request.headers.get('host') || '').toLowerCase().replace(/:\d+$/, '');
  const base = host === 'learn.jinnie.ph' || host === 'learn.localhost' ? '/' : '/learn';
  return NextResponse.json({
    id: base, name: 'Jinnie Learn: Wishes', short_name: 'Jinnie Learn',
    description: 'Financial literacy for the Philippines.',
    start_url: base, scope: base, display: 'standalone',
    background_color: '#f5f7ff', theme_color: '#4338ca', lang: 'en-PH',
    icons: [192, 512].map(size => ({ src: `/learn-assets/icon-${size}.png`, sizes: `${size}x${size}`, type: 'image/png', purpose: 'any' })),
  }, { headers: { 'Content-Type': 'application/manifest+json; charset=utf-8' } });
}
