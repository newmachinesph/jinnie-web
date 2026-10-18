import type { Metadata } from 'next';
import Link from 'next/link';
import { AppTile } from '@/components/AppTile';
import { Container, PageHeader } from '@/components/Page';
import { PhoneFrame } from '@/components/PhoneFrame';
import { communityApps, coreApps } from '@/lib/apps';

export const metadata: Metadata = {
  title: 'Apps',
  description:
    `Explore ${coreApps.length + communityApps.length} Jinnie mini apps: ${coreApps.length} first-party apps, including Learn, and ${communityApps.length} community apps, plus Settings.`,
  alternates: { canonical: '/apps' },
};

export default function AppsPage() {
  return (
    <>
      <PageHeader
        title={`${coreApps.length + communityApps.length} apps, one launcher.`}
        lede="Choose the tools that fit your life: everyday accounts and bills, financial lessons, savings goals, and shared plans. Settings keeps your preferences, sample data, and catalogs close at hand."
      />

      <Container className="site-app-catalog grid gap-12 pb-20 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
        <div>
          <section aria-labelledby="core">
            <h2 id="core" className="text-2xl font-bold text-ink">Core</h2>
            <p className="mt-2 max-w-2xl text-muted">
              First-party apps for managing your money and building your skills. The finance apps share the
              Wallet ledger; Learn keeps your course progress separately and is also available in your browser.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {coreApps.map(app => <AppTile key={app.id} app={app} screenshot />)}
            </div>
          </section>

          <section aria-labelledby="community" className="mt-16">
            <h2 id="community" className="text-2xl font-bold text-ink">Community</h2>
            <p className="mt-2 max-w-2xl text-muted">
              Each app keeps its own records through the SDK. Selected apps can request permission
              to post entries to Wallet. Only use reviewed apps from publishers you trust.{' '}
              <Link href="/community" className="font-medium text-primary">How community apps work</Link>
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {communityApps.map(app => <AppTile key={app.id} app={app} screenshot />)}
            </div>
          </section>
        </div>

        <aside className="lg:sticky lg:top-24">
          <PhoneFrame
            screen="launcher"
            width={260}
            caption="The launcher opens from the lamp in the tab bar. Wallet, Accounts and Bills also keep permanent tabs."
          />
        </aside>
      </Container>
    </>
  );
}
