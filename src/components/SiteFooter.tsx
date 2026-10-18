import Link from 'next/link';
import { Mark } from './Mark';
import { site } from '@/lib/site';
import { communityApps, coreApps } from '@/lib/apps';

const company = [
  { href: '/about', label: 'About' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/security', label: 'Security' },
  { href: '/support', label: 'Support' },
  { href: '/download', label: 'Download' },
];

const developers = [
  { href: '/developers', label: 'Mini-app SDK' },
  { href: '/developers#bridge', label: 'The bridge' },
  { href: '/developers#rules', label: 'Rules' },
  { href: '/community', label: 'Community apps' },
];

const legal = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
];

export function SiteFooter() {
  return (
    <footer className="site-footer border-t border-line bg-card">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="site-footer-grid grid gap-10 md:grid-cols-[1.4fr_repeat(4,minmax(0,1fr))]">
          <div className="site-footer-brand max-w-xs">
            <div className="flex items-center gap-2.5 font-semibold">
              <span className="grid size-9 place-items-center rounded-brand bg-night text-on-night">
                <Mark size={24} />
              </span>
              <span className="text-[17px] tracking-tight">Jinnie</span>
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              {site.tagline} Personal finance that works with the network off, keeps every record on your phone, and
              puts the one number worth checking at the top.
            </p>
          </div>

          <FooterColumn title="Core apps" links={coreApps.map(a => ({ href: a.webHref ?? `/apps/${a.id}`, label: a.name }))} />
          <FooterColumn title="Community" links={communityApps.map(a => ({ href: `/apps/${a.id}`, label: a.name }))} />
          <FooterColumn title="Developers" links={developers} />
          <FooterColumn title="Company" links={[...company, ...legal]} />
        </div>

        <div className="site-footer-colophon mt-12 flex flex-col gap-3 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.legalEntity}. All rights reserved.</p>
          <p>
            金 is jīn: gold, wealth. The lamp is the promise; the character is what it holds.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div className="site-footer-column">
      <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">{title}</h2>
      <ul className="mt-4 flex flex-col gap-2.5 text-[15px]">
        {links.map(l => (
          <li key={l.href}>
            <Link href={l.href} className="whitespace-nowrap text-ink transition-colors hover:text-primary">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
