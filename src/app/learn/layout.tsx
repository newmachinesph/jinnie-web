import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './learn.css';
import { LearnRoot } from '@/components/learn/LearnApp';

export const metadata: Metadata = {
  title: { default: 'Jinnie Learn', template: '%s' },
  description: 'Build everyday money skills with Jinnie. Six learning paths, short interactive lessons, English and Filipino narration, and practice at your own pace.',
  applicationName: 'Jinnie Learn',
  manifest: '/learn/manifest.webmanifest',
  icons: { icon: '/learn-assets/icon.svg', apple: '/learn-assets/icon-192.png' },
  openGraph: { title: 'Jinnie Learn', description: 'Everyday money skills, one small lesson at a time.', url: 'https://learn.jinnie.ph/' },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover', themeColor: '#4338CA' };
export default function LearnLayout({ children }: { children: ReactNode }) { return <LearnRoot>{children}</LearnRoot>; }
