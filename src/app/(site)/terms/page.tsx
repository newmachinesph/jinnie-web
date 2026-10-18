import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, PageHeader, Prose } from '@/components/Page';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of use',
  description: 'The terms under which Jinnie, the app and this website, is provided.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader title="Terms of use." lede={`Last updated ${site.legalUpdated}. By installing or using Jinnie, or by using this website, you agree to these terms.`} />

      <Container className="pb-20">
        <Prose>
          <h2>1. Who provides Jinnie</h2>
          <p>
            Jinnie is published by {site.legalEntity} (“we”). Questions about these terms go to{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2>2. What Jinnie is</h2>
          <p>
            Jinnie is a personal finance application for recording and organising your own financial information
            on your own device. It does not connect to financial institutions, does not move money, and does not
            hold your records on our systems.
          </p>

          <h2>3. Not financial advice</h2>
          <p>
            Jinnie reports what you have recorded. Totals, charts, utilisation figures, and signals are arithmetic
            on your entries; they are not advice, recommendations, or predictions. Currency conversions use rates
            stored with the app and may differ from the rate you actually receive. Decisions you make based on the
            app are yours.
          </p>

          <h2>4. Your records</h2>
          <p>
            You own the data you enter. You are responsible for its accuracy and for keeping backups. Because the
            records exist only on your device unless you export them, we cannot recover them for you if the device
            is lost, reset, or the app is uninstalled.
          </p>

          <h2>5. Licence</h2>
          <p>
            We grant you a personal, non-exclusive, non-transferable licence to install and use the app on devices
            you own or control. Where the source code is published under an open-source licence, that licence
            governs the code; these terms govern your use of the app as distributed and of this website.
          </p>

          <h2>6. Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>use the app or the website in a way that violates applicable law;</li>
            <li>interfere with the servers that distribute mini-app code, or attempt to serve altered code to other users;</li>
            <li>misrepresent a mini app you publish as first-party, or bypass the SDK permissions that apply to community apps;</li>
            <li>remove or alter notices of ownership in the app or the website.</li>
          </ul>

          <h2>7. Mini apps and updates</h2>
          <p>
            Jinnie downloads mini apps at runtime and may update them without a new app-store release. Community
            apps that ship with Jinnie are reviewed before release, run without access to your financial records,
            and are provided under the same terms as the rest of the app. We may add, change, or withdraw a mini
            app at any time.
          </p>

          <h2>8. Pre-release software</h2>
          <p>
            While Jinnie is in pre-release, builds may change substantially between versions, may contain defects,
            and may not be supported after a newer build is available. Export a backup before updating.
          </p>

          <h2>9. Warranty</h2>
          <p>
            The app and the website are provided “as is” and “as available”, without warranties of any kind,
            express or implied, including fitness for a particular purpose, accuracy, or uninterrupted availability,
            to the fullest extent permitted by law.
          </p>

          <h2>10. Liability</h2>
          <p>
            To the fullest extent permitted by law, we are not liable for indirect, incidental, special, or
            consequential loss, or for loss of data, arising from your use of the app or the website. Nothing in
            these terms limits liability that cannot be limited under applicable law, including liability for
            fraud or for death or personal injury caused by negligence.
          </p>

          <h2>11. Privacy</h2>
          <p>
            How we handle personal data is described in the <Link href="/privacy">privacy policy</Link>, which
            forms part of these terms.
          </p>

          <h2>12. Trademarks</h2>
          <p>
            The Jinnie name and the lamp mark identify our product. Institution and biller logos shown in the app
            belong to their respective owners and are used to identify those institutions, not to suggest
            affiliation or endorsement.
          </p>

          <h2>13. Changes to these terms</h2>
          <p>
            We may revise these terms. The current version is always at this address with the date at the top.
            Continued use after a change means you accept the revised terms.
          </p>

          <h2>14. Governing law</h2>
          <p>
            These terms are governed by the laws of {site.jurisdiction}, without regard to conflict-of-law rules.
            Where local consumer law gives you rights that cannot be waived, those rights are unaffected.
          </p>

          <h2>15. Contact</h2>
          <p>
            <a href={`mailto:${site.email}?subject=Terms`}>{site.email}</a>
          </p>
        </Prose>
      </Container>
    </>
  );
}
