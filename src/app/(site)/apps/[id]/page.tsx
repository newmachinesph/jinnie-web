import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AppIcon } from '@/components/AppIcon';
import { Container } from '@/components/Page';
import { PhoneFrame } from '@/components/PhoneFrame';
import { apps, getApp } from '@/lib/apps';

type Params = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return apps.map(a => ({ id: a.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const app = getApp(id);
  if (!app) return {};
  return {
    title: app.name,
    description: app.description,
    alternates: { canonical: `/apps/${app.id}` },
    openGraph: { title: `${app.name} · Jinnie`, description: app.description },
  };
}

export default async function AppPage({ params }: Params) {
  const { id } = await params;
  const app = getApp(id);
  if (!app) notFound();

  const index = apps.indexOf(app);
  const prev = apps[(index - 1 + apps.length) % apps.length];
  const next = apps[(index + 1) % apps.length];
  const related = (app.worksWith ?? []).map(getApp).filter(Boolean);

  return (
    <>
      <Container className="pt-10 sm:pt-14">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <ol className="flex items-center gap-2">
            <li><Link href="/apps" className="hover:text-ink">Apps</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-ink">{app.name}</li>
          </ol>
        </nav>
      </Container>

      <Container className="grid gap-12 py-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start lg:py-14">
        <div className={`tone-${app.tone}`}>
          <div className="flex items-start gap-5">
            <span className="grid size-16 shrink-0 place-items-center rounded-card bg-tone-bg text-tone-fg">
              <AppIcon name={app.id} size={32} />
            </span>
            <div>
              <h1 className="text-4xl font-bold leading-[1.05] text-ink sm:text-5xl">{app.name}</h1>
              <p className="mt-2 text-sm text-muted">
                {app.author} · v{app.version} · <span className="capitalize">{app.kind}</span>
              </p>
            </div>
          </div>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink">{app.description}</p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{app.summary}</p>
          {app.webHref ? (
            <Link href={app.webHref} className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-control bg-primary px-6 py-3 font-semibold text-white hover:opacity-90">
              Start learning <AppIcon name="arrowRight" size={18} />
            </Link>
          ) : null}

        </div>

        <aside className="lg:sticky lg:top-24 lg:col-start-2 lg:row-start-1 lg:row-span-2">
          <PhoneFrame
            screen={app.id}
            width={280}
            priority
            caption={app.id === 'learn'
              ? 'Learn on Android. Choose your age range to tailor the lessons.'
              : `${app.name} on Android, captured with the Reyes sample household.`}
          />
        </aside>

        <div className={`tone-${app.tone} lg:col-start-1 lg:row-start-2`}>
          <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">What it does</h2>
          <ul className="mt-4 grid max-w-2xl gap-3">
            {app.features.map(f => (
              <li key={f} className="flex gap-3 text-[16px] leading-relaxed text-ink">
                <AppIcon name="check" size={20} className="mt-1 shrink-0 text-tone-fg" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 rounded-card border border-line bg-card p-6">
            {app.id === 'learn' ? (
              <>
                <h2 className="font-semibold text-ink">In the app and on the web</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  Learn opens from the Jinnie launcher and here in your browser. Course progress is kept locally
                  in each experience. The website does not read your accounts or post transactions. Export and
                  import a learning backup to move your progress between devices.
                </p>
              </>
            ) : app.kind === 'core' ? (
              <>
                <h2 className="font-semibold text-ink">A core app</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  First-party, and granted the shared finance context: it reads the accounts and the Wallet ledger
                  and posts changes through the SDK bridge. Every mutation runs through one reviewed implementation,
                  the same one the regression suite calls.
                </p>
              </>
            ) : (
              <>
                <h2 className="font-semibold text-ink">A community app</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  This app uses its own SDK storage, included in your financial backup. The shared finance
                  context is withheld. Apps with a Wallet permission can request access to basic account
                  choices and post entries after you approve. These are API boundaries; use trusted apps.{' '}
                  <Link href="/community" className="font-medium text-primary">About community apps</Link>
                </p>
              </>
            )}
            {related.length > 0 ? (
              <div className="mt-5 border-t border-line pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">Works with</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {related.map(r => (
                    <li key={r!.id}>
                      <Link
                        href={`/apps/${r!.id}`}
                        className={`tone-${r!.tone} inline-flex items-center gap-2 rounded-control border border-line bg-surface px-3 py-1.5 text-sm font-medium text-ink hover:border-primary/50`}
                      >
                        <AppIcon name={r!.id} size={16} className="text-tone-fg" />
                        {r!.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>

      </Container>

      <Container className="pb-20">
        <nav aria-label="Other apps" className="flex justify-between gap-4 border-t border-line pt-6 text-[15px]">
          <Link href={`/apps/${prev.id}`} className="text-muted hover:text-ink">← {prev.name}</Link>
          <Link href={`/apps/${next.id}`} className="text-muted hover:text-ink">{next.name} →</Link>
        </nav>
      </Container>
    </>
  );
}
