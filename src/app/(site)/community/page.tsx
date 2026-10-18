import type { Metadata } from 'next';
import Link from 'next/link';
import { AppTile } from '@/components/AppTile';
import { Container, PageHeader, Prose } from '@/components/Page';
import { communityApps } from '@/lib/apps';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Community apps',
  description:
    'Explore Jinnie community tools, their local records, reviewed Wallet integrations, and how to propose an app.',
  alternates: { canonical: '/community' },
};

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        title="Tools for the money you manage together."
        lede="Save toward a goal, manage a paluwagan, log remittances, and split a shared expense. Each community app keeps its own records; reviewed Wallet integrations help you avoid entering the same payment twice."
      />

      <Container className="pb-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {communityApps.map(app => <AppTile key={app.id} app={app} />)}
        </div>

        <Prose className="mt-16">
          <h2>How access works</h2>
          <ul>
            <li>
              <strong>No full finance context through the bridge.</strong> <code>host.finance</code> is <code>undefined</code>
              for community apps. They do not receive balance totals or transaction history through that API.
            </li>
            <li>
              <strong>Own storage.</strong> Reads and writes go through <code>host.storage</code>, namespaced to the
              app id, so records stay organized separately.
            </li>
            <li>
              <strong>Same backup.</strong> Community records are included in the export and the restore, under
              their own keys, with the same validation.
            </li>
            <li>
              <strong>Same error boundary.</strong> A community app that fails to load or throws degrades to one
              broken tile with a retry. The shell is unaffected.
            </li>
            <li>
              <strong>Public catalogs only.</strong> The provider list and the category list are product metadata,
              not user data, and community apps may use them.
            </li>
          </ul>

          <h2>What a community app may do</h2>
          <p>
            The five included tools cover savings goals, personal lending, rotating savings groups, remittances,
            and shared expenses. Debts and Remit have a reviewed wallet-post grant: they can offer to record
            a transaction and read account names and currencies, without receiving balances or history.
          </p>
          <p>These boundaries describe the supported SDK, not a security sandbox. Mini apps execute in the host runtime; only reviewed, trusted bundles should be distributed.</p>

          <h2>Proposing one</h2>
          <ol>
            <li>Read <Link href="/developers">the SDK guide</Link> to explore the integration model. Public source access and templates are coming soon.</li>
            <li>Keep to the rules: SDK imports only, no native modules, no colour literals, no emoji.</li>
            <li>Add validation cases to the SDK test suite for anything the app persists.</li>
            <li>
              Write to{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a> with a short description and a screenshot.
            </li>
          </ol>
          <p>
            New access needs review, appropriate validation tests, and an explicit manifest change. A wallet-post
            grant supports recording a payment without giving the app the full finance context.
          </p>
        </Prose>
      </Container>
    </>
  );
}
