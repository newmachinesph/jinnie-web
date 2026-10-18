import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, PageHeader, Prose } from '@/components/Page';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'How Jinnie, the app and this website, handles personal data.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy policy." lede={`Last updated ${site.privacyUpdated}. This policy covers the Jinnie mobile application, the business website, and Jinnie Learn.`} />

      <Container className="pb-20">
        <Prose>
          <h2>1. The short version</h2>
          <p>
            The Jinnie app stores your financial records on your device and nowhere else. {site.legalEntity} does
            not operate an account system and does not receive your balances or transactions. The business
            website and Jinnie Learn use Google Analytics to understand visits and usage, as described below.
          </p>

          <h2>2. Who we are</h2>
          <p>
            {site.legalEntity} publishes Jinnie. You can reach us at <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2>3. Data the app stores on your device</h2>
          <p>Everything you enter or that the app derives from what you enter, including:</p>
          <ul>
            <li>the name you give on first run and your preferences;</li>
            <li>accounts, balances, currencies, and the institutions you pick for them;</li>
            <li>the Wallet ledger of income, expenses, and transfers, with categories and descriptions;</li>
            <li>bills, budgets, subscriptions, credit cards, and their payment history;</li>
            <li>community-app records such as goals, debts, savings-group rounds, remittances, and shared expenses;</li>
            <li>catalog entries you add, such as a custom category or biller.</li>
            <li>Learn preferences, lesson progress, practice answers, savings wishes, and commitments.</li>
          </ul>
          <p>
            This data is held in the application’s private storage on the device. It is protected by the device’s
            own security, and optionally by the app lock in Security. Uninstalling the app removes
            it. The local-data row in Settings removes it without uninstalling.
          </p>

          <h2>4. Data the app sends</h2>
          <p>The app uses the network for these features:</p>
          <ul>
            <li>
              <strong>Fetching mini-app code.</strong> Each mini app is downloaded from its release origin the first
              time it is opened and when a new version is published. The request carries the app name and the
              platform. It does not carry your records, your name, or a device identifier we assign.
            </li>
            <li>
              <strong>Loading Learn.</strong> The course loads lessons, illustrations, recorded narration, and
              captioned videos from its hosting origin. Media downloads contain the requested course files;
              learning progress and practice answers are kept locally.
            </li>
            <li>
              <strong>Reading connectivity.</strong> The app asks the operating system whether the device is online.
              Nothing is transmitted.
            </li>
          </ul>
          <p>
            The native finance tools do not include analytics, advertising, or crash-reporting services.
            Learn loads the hosted website inside the app, where the website analytics described in section 8
            also apply. Financial records are not sent to Google Analytics.
          </p>
          <p>
            The servers that host mini-app code may keep standard access logs, which can include the requesting IP
            address, the time, and the file requested. Such logs are retained only as long as the hosting provider
            keeps them and are not combined with any other information.
          </p>

          <h2>5. Permissions</h2>
          <table>
            <thead><tr><th>Permission</th><th>Used for</th></tr></thead>
            <tbody>
              <tr><td>Biometrics or device credential</td><td>Optional app lock. The app receives only a yes or no from the operating system.</td></tr>
              <tr><td>Files and sharing</td><td>Exporting a backup through the share sheet and picking a backup file to restore. Only the file you choose is read.</td></tr>
              <tr><td>Network</td><td>Downloading mini-app code and Learn course media, and reading connectivity, as described above.</td></tr>
            </tbody>
          </table>

          <h2>6. Backups</h2>
          <p>
            A backup is a file you create and you control. Once it leaves the app through the share sheet, it is
            subject to the privacy practices of wherever you send it. You can export a readable JSON backup
            or seal the backup with a passphrase. The sealed file requires that passphrase to restore.
          </p>

          <h2>7. Community apps</h2>
          <p>
            Community apps receive storage namespaced to their own id instead of the full finance context.
            Apps with a wallet-post grant can create transactions and see account names and currencies.
            Community apps that ship with Jinnie follow the same rule as core apps: no
            network call without graceful degradation and disclosure. See{' '}
            <Link href="/community">community apps</Link>.
          </p>

          <h2>8. The business website and Jinnie Learn</h2>
          <p>
            jinnie.ph and learn.jinnie.ph use Google Analytics 4 to measure page visits, referrals, and website
            interactions. Google Analytics uses cookies and receives browser and device information and page
            URLs. These requests are sent to Google. The integration does not upload your financial records,
            stored learning progress, practice answers, or backups.
          </p>
          <p>
            See <a href="https://policies.google.com/technologies/partner-sites" rel="noopener">how Google uses information from sites and apps that use its services</a>.
            You can manage cookies in your browser or use Google&apos;s{' '}
            <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener">Analytics opt-out browser add-on</a> where supported.
          </p>
          <p>
            The hosting provider may keep standard access logs, including IP address, user agent, and pages
            requested, for security and operations. If you email us, we keep the correspondence for as long as
            needed to answer you.
          </p>
          <p>
            <Link href={site.learnUrl}>Learn</Link> saves course progress and preferences in your browser&apos;s local
            storage, and uses a service worker to cache the course for offline use. Audio and video are downloaded
            when you play or choose to save them. Browser progress is separate from native-app progress. Learn&apos;s
            Me screen lets you export or import a learning backup and reset your progress; clearing this site&apos;s
            browser data also removes its stored progress and downloaded media.
          </p>

          <h2>9. Children</h2>
          <p>
            Learn includes activities for children and families to use together. It does not require a child&apos;s
            name, an account, or contact details. Learning records stay on the device or browser where they were
            entered, unless someone chooses to export a backup. Parents and guardians can use Learn&apos;s local
            reset and backup controls to manage those records.
          </p>

          <h2>10. Your rights</h2>
          <p>
            Your financial records are stored on your device, so you can access, correct, export, or delete those
            records in the app: Security exports everything as JSON and the
            local-data row removes it. Where the Data Privacy Act of 2012 of {site.jurisdiction} or another law
            grants you rights regarding data we do hold, such as website analytics or an email you sent us, contact us and we will act
            on them.
          </p>

          <h2>11. Changes</h2>
          <p>
            We will post any change to this policy on this page and update the date at the top. A change that
            affects what the app sends will also be disclosed in the app before it takes effect.
          </p>

          <h2>12. Contact</h2>
          <p>
            <a href={`mailto:${site.email}?subject=Privacy`}>{site.email}</a>
          </p>
        </Prose>
      </Container>
    </>
  );
}
