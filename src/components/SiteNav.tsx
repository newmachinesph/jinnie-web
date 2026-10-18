'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { site } from '@/lib/site';

export const navLinks = [
  { href: '/apps', label: 'Apps' },
  { href: site.learnUrl, label: 'Learn' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/developers', label: 'Developers' },
  { href: '/security', label: 'Security' },
  { href: '/support', label: 'Support' },
] as const;

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(href + '/');
}

export function DesktopNav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Primary" className="site-desktop-nav hidden lg:block">
      <ul className="flex items-center gap-1 text-[15px]">
        {navLinks.map(l => {
          const active = isActive(pathname, l.href);
          return (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={active ? 'page' : undefined}
                className={`inline-flex h-9 items-center whitespace-nowrap rounded-control px-3 transition-colors ${
                  active ? 'bg-card text-ink shadow-[inset_0_0_0_1px_var(--line)]' : 'text-muted hover:text-ink'
                }`}
              >
                {l.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); toggle.current?.focus(); }
    };
    const onOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !root.current?.contains(event.target)) setOpen(false);
    };
    const onFocus = (event: FocusEvent) => {
      if (event.target instanceof Node && !root.current?.contains(event.target)) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onOutside);
    document.addEventListener('focusin', onFocus);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onOutside);
      document.removeEventListener('focusin', onFocus);
    };
  }, [open]);

  return (
    <div ref={root} className="site-mobile-nav lg:hidden">
      <button
        type="button"
        ref={toggle}
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="site-menu-toggle grid size-10 place-items-center rounded-control border border-line bg-card text-ink"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
      <nav
        id="mobile-menu"
        aria-label="Primary"
        hidden={!open}
        className="site-mobile-menu absolute inset-x-0 top-16 border-b border-line bg-card px-5 py-3 shadow-[0_12px_30px_-20px_rgba(17,24,39,0.4)]"
      >
        <ul className="flex flex-col">
          {navLinks.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={close}
                aria-current={isActive(pathname, l.href) ? 'page' : undefined}
                className="block rounded-control px-3 py-3 text-[16px] text-ink aria-[current=page]:font-semibold aria-[current=page]:text-primary hover:bg-surface"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="mt-2 border-t border-line pt-3">
            <Link href="/download" onClick={close} className="block rounded-control bg-primary px-3 py-3 text-center text-[16px] font-semibold text-white">
              Get the app
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
