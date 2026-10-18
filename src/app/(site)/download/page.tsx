import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, PageHeader } from '@/components/Page';
import { PhoneFrame } from '@/components/PhoneFrame';
import androidRelease from '@/lib/android-release.json';

export const metadata: Metadata = {
  title: 'Download',
  description: 'Download the Jinnie Android APK directly. Personal finance tools and financial learning in one app.',
  alternates: { canonical: '/download' },
};

export default function DownloadPage() {
  return (
    <>
      <PageHeader
        title="Get Jinnie for Android."
        lede="Download the Android pre-release directly and start putting your money in order. No account or build request needed."
      />

      <Container className="grid gap-12 pb-20 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
        <div className="max-w-2xl">
          <div className="rounded-card border border-line bg-card p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Android pre-release</p>
            <h2 className="mt-3 text-2xl font-bold text-ink">Your money tools, ready to install.</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              A direct APK download from jinnie.ph. Android {androidRelease.minAndroidVersion} or later.
              Connect to the internet to load mini apps and learning content.
            </p>
            <a
              href={androidRelease.url}
              download
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-control bg-primary px-6 py-3 font-semibold text-white"
            >
              Download Android APK
            </a>
            <p className="mt-4 text-sm font-medium text-ink">Coming soon to Google Play.</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Version {androidRelease.version} · {(androidRelease.bytes / 1_000_000).toFixed(1)} MB · Built {androidRelease.buildDate}
            </p>
            <details className="mt-4 text-xs text-muted">
              <summary className="cursor-pointer py-2">Verify the download (SHA-256)</summary>
              <code className="mt-2 block break-all leading-relaxed">{androidRelease.sha256}</code>
            </details>
          </div>

          <h2 className="mt-12 text-2xl font-bold text-ink">Install in three steps</h2>
          <ol className="mt-5 list-decimal space-y-3 pl-5 text-[16px] leading-relaxed text-ink">
            <li>Download the APK, then open it from your browser or Downloads folder.</li>
            <li>If Android asks, allow this browser or file manager to install this app.</li>
            <li>Tap Install, then open Jinnie. You can turn that installation permission off afterward.</li>
          </ol>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Already using Jinnie? Back up your records in Security before updating, then install over the existing app to keep your data.
          </p>

          <h2 className="mt-14 text-2xl font-bold text-ink">What happens on first run</h2>
          <ol className="mt-5 grid gap-4 text-[16px] leading-relaxed text-ink">
            <li className="flex gap-4">
              <span className="tnum grid size-8 shrink-0 place-items-center rounded-full bg-night text-sm font-semibold text-on-night">1</span>
              <span>A short walkthrough you can skip, then a name step you can&apos;t, because Home greets you by it.</span>
            </li>
            <li className="flex gap-4">
              <span className="tnum grid size-8 shrink-0 place-items-center rounded-full bg-night text-sm font-semibold text-on-night">2</span>
              <span>A clean profile. Add your first account from Home, or load the sample household from Settings if you&apos;d rather look around first.</span>
            </li>
            <li className="flex gap-4">
              <span className="tnum grid size-8 shrink-0 place-items-center rounded-full bg-night text-sm font-semibold text-on-night">3</span>
              <span>Open a tool from the launcher. Finance records stay on your device; loading mini apps and new lessons needs an internet connection.</span>
            </li>
          </ol>

          <p className="mt-10 text-[15px] leading-relaxed text-muted">
            Source repository access is coming soon.{' '}
            Before installing anything, read <Link href="/security" className="font-medium text-primary">how Jinnie handles your data</Link>.
          </p>
        </div>

        <PhoneFrame screen="home" width={260} caption="Home on Android, captured with the Reyes sample household." />
      </Container>
    </>
  );
}
