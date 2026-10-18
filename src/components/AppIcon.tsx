import type { ReactNode } from 'react';

/*
 * The launcher glyph for each mini app. Path data is copied from the app's
 * icon set (packages/sdk/src/icons): 24 grid, 1.75 stroke, round caps.
 */
const glyphs: Record<string, ReactNode> = {
  accounts: (
    <>
      <path d="M3.5 9h17L12 3.5zM5 19.5h14M4 22h16" />
      <path d="M6.5 9v10.5M10.25 9v10.5M13.75 9v10.5M17.5 9v10.5" />
    </>
  ),
  wallet: (
    <>
      <path d="M3.5 7.5a2 2 0 0 1 2-2h11l3 0a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z" />
      <path d="M3.5 7.5V6a1.5 1.5 0 0 1 1.5-1.5h10" />
      <path d="M15.5 12.5h5v4h-5a2 2 0 1 1 0-4z" />
    </>
  ),
  bills: (
    <>
      <path d="M6 3.5h12v17l-2.4-1.6-2.4 1.6-2.4-1.6-2.4 1.6-2.4-1.6z" />
      <path d="M9 8h6M9 11.5h6M9 15h3.5" />
    </>
  ),
  budget: (
    <>
      <rect x="3.5" y="4" width="17" height="16" rx="2" />
      <path d="M7.5 16v-4M12 16V8M16.5 16v-6" />
      <path d="M7 7.5h1M16 7.5h1" />
    </>
  ),
  insights: (
    <>
      <path d="M4 20V4M4 20h16" />
      <path d="M7.5 15.5 11 11l3 2.5 5-6.5" />
    </>
  ),
  subscriptions: (
    <>
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </>
  ),
  credit: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3 9.5h18M7 15h4" />
    </>
  ),
  learn: (
    <>
      <path d="M12 6.5C9 4.8 5.7 4.3 3 5v14c2.7-.7 6-.2 9 1.5 3-1.7 6.3-2.2 9-1.5V5c-2.7-.7-6-.2-9 1.5Z" />
      <path d="M12 6.5v14M6.5 8.5l2 .5M15.5 9l2-.5M6.5 12l2 .5M15.5 12.5l2-.5" />
    </>
  ),
  security: (
    <>
      <path d="M12 3 5 5.75v5.5c0 4.4 3 8 7 9.25 4-1.25 7-4.85 7-9.25v-5.5z" />
      <path d="M9 11.75 11.25 14 15.5 9.5" />
    </>
  ),
  settings: (
    <>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  goals: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.75" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  debts: (
    <>
      <path d="M12 4v16M8 20h8" />
      <path d="M5 7h14" />
      <path d="M5 7l-2.5 5.5a3 3 0 0 0 5 0zM19 7l-2.5 5.5a3 3 0 0 0 5 0z" />
    </>
  ),
  circles: (
    <>
      <circle cx="12" cy="6.5" r="2.5" />
      <circle cx="5.5" cy="15.5" r="2.5" />
      <circle cx="18.5" cy="15.5" r="2.5" />
      <path d="M9.9 8.2 7 13.3M14.1 8.2 17 13.3M8 15.5h8" />
    </>
  ),
  remit: (
    <>
      <path d="M20.5 3.5 3.5 10l6.5 2.5L12.5 19z" />
      <path d="M20.5 3.5 10 12.5" />
    </>
  ),
  shared: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <path d="M16 3.128a4 4 0 0 1 0 7.744" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <circle cx="9" cy="7" r="4" />
    </>
  ),
  // Used by the SDK page for the "hello" example.
  grid: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" />
    </>
  ),
  offline: (
    <>
      <path d="M5 12.5a8.5 8.5 0 0 1 14 0" opacity={0.4} />
      <path d="M8 15.5a4.5 4.5 0 0 1 8 0" />
      <circle cx="12" cy="19" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="10" rx="2" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    </>
  ),
  download: (
    <>
      <path d="M12 4v12M7.5 11.5 12 16l4.5-4.5" />
      <path d="M4 14v5.5h16V14" />
    </>
  ),
  transfer: <path d="M4 8h14l-3.5-3.5M20 16H6l3.5 3.5" />,
  eye: (
    <>
      <path d="M2.75 12s3.35-6 9.25-6 9.25 6 9.25 6-3.35 6-9.25 6-9.25-6-9.25-6z" />
      <circle cx="12" cy="12" r="2.75" />
    </>
  ),
  check: <path d="M4.5 12.5 10 18 19.5 6.5" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  chevronLeft: <path d="M14.5 5.5 8 12l6.5 6.5" />,
  chevronRight: <path d="M9.5 5.5 16 12l-6.5 6.5" />,
  home: (
    <>
      <path d="m3.5 10 8.5-7 8.5 7" />
      <path d="M5.5 8.5v11h13v-11M9.5 19.5v-6h5v6" />
    </>
  ),
};

export type GlyphName = keyof typeof glyphs;

export function AppIcon({
  name,
  size = 24,
  className,
}: {
  name: GlyphName | string;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {glyphs[name] ?? glyphs.grid}
    </svg>
  );
}
