import Link from 'next/link';
import { Mark } from './Mark';
import { DesktopNav, MobileNav } from './SiteNav';

export function SiteHeader() {
  return (
    <header className="site-header sticky top-0 z-40 border-b border-line bg-surface/90 backdrop-blur supports-[backdrop-filter]:bg-surface/75">
      <div className="site-header-inner relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" className="site-wordmark flex items-center gap-2.5 font-semibold text-ink" aria-label="Jinnie home">
          <span className="site-mark grid size-9 place-items-center rounded-brand bg-primary text-white">
            <Mark size={24} />
          </span>
          <span className="text-[17px] tracking-tight">Jinnie</span>
        </Link>

        <DesktopNav />

        <div className="flex items-center gap-3">
          <Link
            href="/download"
            className="site-download hidden h-10 items-center whitespace-nowrap rounded-control bg-primary px-4 text-[15px] font-semibold text-white transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Get the app
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
