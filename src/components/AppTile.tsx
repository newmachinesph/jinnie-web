import Link from 'next/link';
import Image from 'next/image';
import type { MiniApp } from '@/lib/apps';
import { AppIcon } from './AppIcon';

/**
 * The launcher tile, as the app draws it: glyph on a tone, name, one line.
 * On phones it collapses to a row so the catalog doesn't run three screens
 * long; from `sm` up it is the card the launcher shows.
 */
export function AppTile({ app, screenshot = false }: { app: MiniApp; screenshot?: boolean }) {
  if (screenshot) {
    return (
      <Link href={`/apps/${app.id}`} className={`app-tile tone-${app.tone} group grid grid-cols-[minmax(0,1fr)_88px] items-center gap-4 overflow-hidden rounded-card border border-line bg-card p-5 transition-colors hover:border-primary/40 focus-visible:border-primary sm:grid-cols-[minmax(0,1fr)_100px]`}>
        <span className="min-w-0">
          <span className="app-tile-icon mb-4 grid size-11 place-items-center rounded-card bg-tone-bg text-tone-fg">
            <AppIcon name={app.id} size={24} />
          </span>
          <span className="block break-words text-lg font-semibold text-ink">{app.name}</span>
          <span className="mt-2 block text-sm leading-relaxed text-muted">{app.description}</span>
          <span className="app-tile-open mt-4 flex items-center gap-2 text-sm font-medium text-primary">
            Explore <AppIcon name="arrowRight" size={15} />
          </span>
        </span>
        <Image
          src={`/screens/${app.id}.png`}
          alt={`${app.name} running in Jinnie on Android`}
          width={488}
          height={1088}
          sizes="(min-width: 640px) 100px, 88px"
          className="h-auto w-full rounded-xl border-[3px] border-[#222238] shadow-lg"
        />
      </Link>
    );
  }
  return (
    <Link
      href={app.webHref ?? `/apps/${app.id}`}
      className={`app-tile tone-${app.tone} group flex items-center gap-4 rounded-card border border-line bg-card p-4 transition-colors hover:border-primary/40 focus-visible:border-primary sm:flex-col sm:items-start sm:p-5`}
    >
      <span className="app-tile-icon grid size-11 shrink-0 place-items-center rounded-card bg-tone-bg text-tone-fg sm:size-12">
        <AppIcon name={app.id} size={24} />
      </span>
      <span className="min-w-0 flex-1 sm:mt-5">
        <span className="block text-[16px] font-semibold text-ink sm:text-[17px]">{app.name}</span>
        <span className="mt-0.5 block text-[14px] leading-snug text-muted sm:mt-1.5 sm:text-[15px]">{app.description}</span>
      </span>
      <AppIcon name="chevronRight" size={18} className="shrink-0 text-muted sm:hidden" />
      <span className="app-tile-open hidden text-sm font-medium text-primary sm:mt-4 sm:flex sm:items-center sm:gap-2">
        Open <AppIcon name="arrowRight" size={15} />
      </span>
    </Link>
  );
}
