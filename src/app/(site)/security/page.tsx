import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, PageHeader, Prose } from '@/components/Page';
import { PhoneFrame } from '@/components/PhoneFrame';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Security and privacy',
  description:
    'Where Jinnie keeps your records, what the app sends over the network, how device protection and backups work, and how to report a vulnerability.',
  alternates: { canonical: '/security' },
};

export default function SecurityPage() {
  return (
    <>
      <PageHeader
        title="Your records stay on your device."
        lede="There's no Jinnie account and no Jinnie server holding your finances. The app keeps records on your device and uses the network to fetch mini-app code and Learn course media."
      />

      <Container className="grid gap-12 pb-20 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
        <Prose>
          <h2>Where the data lives</h2>
          <p>
            Every store persists in the phone&apos;s application storage under a namespaced key: balances, the
            ledger, bills, budgets, subscriptions, cards, community records, your name, and your preferences.
            Currency conversion, charts and totals are computed on the device from those records; nothing is
            computed for you somewhere else and sent back.
          </p>

          <h2>What the app sends</h2>
          <table>
            <thead><tr><th>Request</th><th>Carries</th><th>Why</th></tr></thead>
            <tbody>
              <tr>
                <td>Mini-app bundles</td>
                <td>The app name and platform in the URL. No personal data.</td>
                <td>Each mini app is downloaded from its release origin the first time you open it and again when it updates.</td>
              </tr>
              <tr>
                <td>Learn lessons and media</td>
                <td>The course file requested. No learning progress or financial records.</td>
                <td>The course loads its lessons and illustrations, and downloads narration or video when you play or save it.</td>
              </tr>
              <tr>
                <td>Connectivity check</td>
                <td>Nothing. It reads the device&apos;s network state.</td>
                <td>So the bridge can tell a mini app whether it&apos;s online.</td>
              </tr>
            </tbody>
          </table>
          <p>
            The native finance tools have no analytics beacon, crash uploader, or cloud sync. The business
            website and hosted Learn experience use Google Analytics for website usage, including when Learn
            opens inside the app. Financial records stay on your device. See the{' '}
            <Link href="/privacy">privacy policy</Link> for website analytics details.
          </p>

          <h2>Device protection</h2>
          <p>
            Security can lock Jinnie with a PIN. A salted PIN hash is held in the device keystore and is not
            included in backups. Where supported, fingerprint or face authentication provides a shortcut;
            the PIN remains the fallback. Jinnie never receives your biometric data.
          </p>

          <h2>The privacy switch</h2>
          <p>
            One toggle masks financial amounts across the money apps. It&apos;s for looking at the app in public, and that is
            all it is: it hides figures on screen until you turn it off, and it encrypts nothing.
          </p>

          <h2>Learning progress</h2>
          <p>
            Learn keeps its progress apart from financial records. The website uses browser storage and caches
            course files for offline use. Export a learning backup from Me before clearing site data or moving to
            another device. App and browser progress do not sync through a server.
          </p>

          <h2>Backups</h2>
          <p>
            Export writes your records to a JSON file and opens the system share sheet. Choose a plain backup
            or seal it with a passphrase. A plain backup is readable; a sealed backup requires its passphrase
            to restore. Keep that passphrase safe because Jinnie cannot recover it for you.
          </p>
          <p>
            Restore reads a file you pick and checks it before touching anything: product, schema version, key
            namespace, file size, dates and value types. Current data is snapshotted first so a failed write can be
            rolled back.
          </p>

          <h2>Mini-app isolation</h2>
          <p>
            Core apps receive the shared finance context through the bridge. Community apps have their own
            storage and do not receive that full context. A reviewed wallet-post grant lets Debts and Remit
            record transactions and see account names and currencies. These API boundaries are not an
            operating-system sandbox; mini-app code must still be trusted. See{' '}
            <Link href="/community">community apps</Link>.
          </p>

          <h2>Code integrity</h2>
          <p>
            Mini-app bundles are served over HTTPS from the release origin. A bundle that fails to download or
            doesn&apos;t export a screen is rejected and the tile shows a retry; the shell never runs a partial
            bundle. Signed bundles with verification in the host are on the roadmap and will be documented here when
            they land.
          </p>

          <h2 id="reporting-a-vulnerability">Reporting a vulnerability</h2>
          <p>
            Write to <a href={`mailto:${site.email}?subject=Security`}>{site.email}</a> with the subject
            &ldquo;Security&rdquo;, steps to reproduce, and the app version from Settings. Give us a reasonable window
            to fix it before disclosing publicly; we&apos;ll acknowledge receipt and tell you what we found.
          </p>
        </Prose>

        <aside className="lg:sticky lg:top-24">
          <PhoneFrame
            screen="security"
            width={260}
            caption="Security on Android: privacy, PIN protection, backups, and local data."
          />
        </aside>
      </Container>
    </>
  );
}
