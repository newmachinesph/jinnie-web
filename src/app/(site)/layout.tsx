import type { ReactNode } from 'react';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import '../site-polish.css';
import '../product.css';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return <div className="marketing-site flex min-h-dvh flex-col">
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-control focus:bg-primary focus:px-3 focus:py-2 focus:text-white">Skip to content</a>
    <SiteHeader />
    <main id="main" className="flex-1">{children}</main>
    <SiteFooter />
  </div>;
}
