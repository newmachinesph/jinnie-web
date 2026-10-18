import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, PageHeader, Prose } from '@/components/Page';
import { ArchitectureDiagram } from '@/components/ArchitectureDiagram';
import { apps } from '@/lib/apps';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'How it works',
  description:
    'Jinnie is a super app: a native host shell that loads independently built mini apps at runtime, with one shared SDK holding the ledger.',
  alternates: { canonical: '/how-it-works' },
};

export default function HowItWorksPage() {
  const launcherCount = apps.filter((app) => app.kind !== 'system').length;
  return (
    <>
      <PageHeader
        title="Your money tools, working together."
        lede={`Jinnie brings ${launcherCount} mini apps into one native app. Pay a bill and the payment appears in Wallet. Review the same records in your finance tools, or open Learn to build your financial knowledge. Here is how the pieces connect.`}
      />

      <Container className="pb-20">
        <ArchitectureDiagram />

        <Prose className="mt-16">
          <h2>The three layers</h2>
          <table>
            <thead>
              <tr><th>Layer</th><th>Owns</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Host shell</strong></td>
                <td>The binary, every native dependency, navigation, Home, the launcher, the tab bar, and the remote wiring.</td>
              </tr>
              <tr>
                <td><strong>SDK and bridge</strong></td>
                <td>The bridge contract, the platform stores, the public catalogs, the UI kit, and the icon set.</td>
              </tr>
              <tr>
                <td><strong>Mini apps</strong></td>
                <td>Independently built screens with no native modules of their own. {launcherCount} apps in the launcher, including Learn and Security. Settings opens separately from the gear.</td>
              </tr>
            </tbody>
          </table>

          <h2>Why the SDK is one object</h2>
          <p>
            Every mini app declares React, React Native, and the SDK as shared singletons. For React that is the
            usual reason: two copies crash. For the SDK the reason is the product. The Wallet ledger is a store
            inside the SDK. A second copy of the SDK would mean a second ledger, and Bills would post payments that
            Wallet never sees. The host loads the shared modules eagerly; mini apps do not, so they resolve the
            host’s copies instead of bundling their own.
          </p>

          <h2>Learn, in the app and on the web</h2>
          <p>
            Learn is served from <Link href={site.learnUrl}>learn.jinnie.ph</Link>. The native app opens that same
            course in an embedded WebView, so course updates come from one website source.
            The course keeps learning progress apart from financial records. In the native app, lesson actions can
            open the relevant Jinnie tool; on the website, financial actions explain that the Jinnie app is needed.
            Browser and app progress stay local to each experience and can be moved using a learning backup.
          </p>

          <h2>Core and community</h2>
          <p>
            Core finance tools receive the shared finance context: active accounts, the ledger, and the
            operations that change them. Community apps receive storage namespaced to their own app id,
            without the full finance context. An explicit <code>wallet:post</code> grant can provide a limited
            API for listing account choices and posting Wallet entries. Learn keeps its course progress
            separately from financial records.
          </p>
          <p>
            The bridge controls which APIs are handed to each app. This is an application-level contract,
            not an operating-system sandbox: mini-app code runs inside the host and must be trusted.
          </p>

          <h2>Data</h2>
          <ul>
            <li>
              <strong>Offline-first.</strong> Every store persists on the device under its own key. The shell holds
              the splash until every store has been read, so no screen renders a zero balance that then jumps.
            </li>
            <li>
              <strong>One money context.</strong> Transfers carry source and destination without changing cash-flow
              totals. Bill payments carry bill and period ids so Wallet edits and deletions reconcile Bills.
              Reversal is exact: overdrafts and liability credits are negative balances, never silently clamped.
            </li>
            <li>
              <strong>Account lifecycle.</strong> Only active accounts cross the bridge. Archived accounts stay in
              local history and can be restored.
            </li>
            <li>
              <strong>Portable backup.</strong> Security exports your records as a JSON file, optionally sealed with a passphrase, and restores from
              one, validating product, schema version, namespace, size, dates, and value types before writing, and
              snapshotting current data first so a failed restore rolls back.
            </li>
          </ul>

          <h2>Failure is a normal state</h2>
          <p>
            Because a mini app is fetched over the network, &ldquo;didn&apos;t load&rdquo; is an ordinary outcome
            rather than an exception, and each app renders inside its own error boundary with a retry button. An
            unreachable origin or a bad bundle costs you one broken tab, never the shell. The federation runtime is
            reset for that one remote before the retry, so the second attempt is a real fetch and not a replay of
            the first failure.
          </p>

          <h2>Releases</h2>
          <p>
            Compatible mini-app bundles can be published without an app-store release and fetched by existing installs.
            Changes to native dependencies, the host registry, or the shared SDK may require a new host release. That is the cost the
            architecture is designed to make visible.
          </p>

          <p>
            Building one? <Link href="/developers">The SDK guide</Link> covers the package, the bridge, the
            catalogs, and the rules.
          </p>
        </Prose>
      </Container>
    </>
  );
}
