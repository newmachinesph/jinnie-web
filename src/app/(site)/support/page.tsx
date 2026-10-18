import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, PageHeader } from '@/components/Page';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Answers to common questions about Jinnie, and how to reach us.',
  alternates: { canonical: '/support' },
};

const faq: { q: string; a: React.ReactNode }[] = [
  {
    q: 'Can I use Learn without installing Jinnie?',
    a: <><Link href={site.learnUrl} className="font-medium text-primary">Open Learn in your browser</Link> for the complete course in English and Filipino. The Jinnie app launcher opens the same course in an embedded browser. Progress is saved locally in each experience; use the learning backup in Me to move it between devices.</>,
  },
  {
    q: 'How do Learn downloads work?',
    a: 'Visit the course while online first. Lessons are cached for later use; save a video from its path or download a narration pack from Me for offline playback. Downloads use device storage. Clearing site data removes both browser progress and saved media, so export your learning backup first.',
  },
  {
    q: 'Does Jinnie connect to my bank?',
    a: 'No. You record transactions yourself, or they post from Bills, Subscriptions, and Credit. There is no account linking, no credentials to hand over, and nothing that runs on a server.',
  },
  {
    q: 'What happens if I lose my phone?',
    a: (
      <>
        Your records are only on the device, so a backup is the only copy. Export one from Security
        whenever your data has changed enough to matter, and keep it somewhere you control. Restore it on the new
        phone from the same screen.
      </>
    ),
  },
  {
    q: 'Which currencies are supported?',
    a: 'Choose from the currency catalog when adding an account. Foreign-currency accounts use the peso exchange rate you enter, so conversions still work offline. Rates do not update automatically.',
  },
  {
    q: 'Why did a mini app fail to load?',
    a: 'Mini apps are downloaded the first time they are opened. If the network was off at that moment, the tile shows a retry. Once a bundle has been fetched it runs offline.',
  },
  {
    q: 'Can I see the sample data without touching my own?',
    a: 'Yes. The sample profile is loaded, reset, or removed from one row in Settings. New profiles start clean.',
  },
  {
    q: 'Can I trust community apps?',
    a: (
      <>
        Community apps receive their own storage instead of the full finance context. Reviewed apps such as
        Debts and Remit can have a wallet-post grant for recording transactions. All mini-app code must be
        trusted; this is not an operating-system sandbox. See <Link href="/community" className="font-medium text-primary">how community apps work</Link>.
      </>
    ),
  },
  {
    q: 'Is Jinnie financial advice?',
    a: 'No. Insights reports what your records say. It does not recommend products, predict markets, or tell you what to do with your money.',
  },
  {
    q: 'How do I delete everything?',
    a: 'Security has a local-data row that removes every record from the device. Uninstalling the app does the same. There is nothing to delete anywhere else, because nothing was sent anywhere else.',
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHeader title="Support." lede="Short answers first. If yours is not here, write to us." />

      <Container className="grid gap-12 pb-20 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <div className="divide-y divide-line rounded-card border border-line bg-card">
          {faq.map(item => (
            <details key={item.q} className="group px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {item.q}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-muted transition-transform group-open:rotate-180" aria-hidden="true">
                  <path d="m5.5 9 6.5 6.5L18.5 9" />
                </svg>
              </summary>
              <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>

        <aside className="rounded-card border border-line bg-card p-6 lg:sticky lg:top-24">
          <h2 className="text-lg font-bold text-ink">Contact</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">
            Bugs, questions, and requests for a build. Include the app version from Settings if it is about the app.
          </p>
          <a href={`mailto:${site.email}`} className="mt-4 inline-block break-all font-semibold text-primary">
            {site.email}
          </a>
          <h2 className="mt-8 text-lg font-bold text-ink">Security issues</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">
            Use the same address with the subject “Security”. See <Link href="/security#reporting-a-vulnerability" className="font-medium text-primary">the disclosure note</Link>.
          </p>
          <h2 className="mt-8 text-lg font-bold text-ink">Source</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">
            Source repository access is coming soon. Send bug reports and feature requests to the contact address above.
          </p>
        </aside>
      </Container>
    </>
  );
}
