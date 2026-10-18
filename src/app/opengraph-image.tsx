import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: '#1E1B4B',
          color: '#FFFFFF',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <svg width="80" height="80" viewBox="0 0 120 120" fill="none" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
            <g fill="#FFFFFF" opacity={0.12} stroke="none">
              <path d="M27 67h59c5 0 10-5 18-16l-4 21-14 7c-4 12-15 19-30 19-17 0-28-11-29-31Z" />
              <path d="M34 66c3-20 38-20 45 0Z" />
            </g>
            <path d="M27 67h59c5 0 10-5 18-16l-4 21-14 7c-4 12-15 19-30 19-17 0-28-11-29-31Z" />
            <path d="M28 72C7 73 9 51 22 54c6 1 7 6 6 10M34 66c3-10 11-15 22-15s19 5 23 15M52 51v-5a4 4 0 0 1 8 0v5M45 99l-3 6h29l-4-6" />
            <path d="M54 33c-8-9 10-10 3-20M72 37c-4-6 7-8 5-14" />
            <path d="m47 78 10-7 10 7M51 79h12M49 84h16M57 79v14M50 87l2 3m12-3-2 3M47 94h20" stroke="#F2C86B" strokeWidth={2.2} />
          </svg>
          <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>Jinnie</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>{site.tagline}</div>
          <div style={{ fontSize: 32, color: '#B7B5D8', maxWidth: 900, lineHeight: 1.3 }}>
            Offline-first personal finance. Money tools and learning, one shell, every record on your device.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
