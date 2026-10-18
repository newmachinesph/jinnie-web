import type { Metadata } from 'next';
import Link from 'next/link';
import { Code, Container, PageHeader, Prose } from '@/components/Page';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Developers',
  description:
    'Build a mini app for Jinnie: one package, one manifest entry, one exposed screen. The bridge, the catalogs, the UI kit, and the rules.',
  alternates: { canonical: '/developers' },
};

const toc = [
  ['#package', '1. Create the package'],
  ['#screen', '2. Write the screen'],
  ['#register', '3. Register it'],
  ['#bridge', 'The bridge'],
  ['#catalogs', 'Public catalogs'],
  ['#ui', 'UI kit'],
  ['#rules', 'Rules'],
  ['#testing', 'Testing'],
  ['#deploy', 'Deploying'],
] as const;

export default function DevelopersPage() {
  return (
    <>
      <PageHeader
        title="Build an app for Jinnie."
        lede="One package, one manifest entry, one exposed screen. The host renders your default export inside its own scroll container, app bar, safe area and error boundary, so what you write is content rather than a screen."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            disabled
            className="inline-flex min-h-11 cursor-not-allowed flex-wrap items-center justify-center gap-2 rounded-control border border-line bg-card px-5 py-2 font-semibold text-muted"
          >
            Source repository
            <span className="rounded-full bg-surface px-2 py-0.5 text-xs font-medium">Coming soon</span>
          </button>
          <Link href="/community" className="inline-flex h-11 items-center whitespace-nowrap rounded-control border border-line bg-card px-5 font-semibold text-ink">
            Publishing a community app
          </Link>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          Public source access and starter packages are coming soon. This guide previews the SDK architecture.
        </p>
      </PageHeader>

      <Container className="grid gap-12 pb-20 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
        <nav aria-label="On this page" className="hidden lg:sticky lg:top-24 lg:block">
          <ul className="flex flex-col gap-2 border-l border-line text-[14px]">
            {toc.map(([href, label]) => (
              <li key={href}>
                <a href={href} className="-ml-px block border-l border-transparent pl-4 text-muted hover:border-primary hover:text-ink">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Prose>
          <h2 id="package">1. Create the package</h2>
          <p>
            Copy an existing community app. <code>packages/remit</code> is the smallest useful template. A mini app is:
          </p>
          <Code>{`packages/hello/
  package.json         name: @jinnie/hello
  rspack.config.mjs    container name 'hello', exposes './App', devServer port
  babel.config.js      react-native preset
  react-native.config.js
  index.js             standalone entry (dev only)
  app.json
  src/App.tsx          the default export the host renders`}</Code>
          <p>
            The container name in <code>rspack.config.mjs</code> and the id in the host registry must match. That
            pairing is what resolves <code>hello/App</code> at runtime.
          </p>

          <h2 id="screen">2. Write the screen</h2>
          <Code lang="tsx">{`import React from 'react';
import {Card, Body, useHost} from '@jinnie/sdk';

export default function HelloApp() {
  const host = useHost();
  return (
    <Card>
      <Body>
        Hello from {host.app.name}. {host.online ? 'Online.' : 'Offline.'}
      </Body>
    </Card>
  );
}`}</Code>

          <h2 id="register">3. Register it with the host</h2>
          <p>Two edits in the host package: a port for the dev server, and one manifest entry.</p>
          <Code lang="js">{`// rspack.config.mjs — MINI_APPS
hello: 9015,`}</Code>
          <Code lang="ts">{`// src/registry.ts
{
  id: 'hello',
  name: 'Hello',
  description: 'My first mini app.',
  icon: IconGrid,
  tone: 'violet',
  kind: 'community',
  author: 'Your Name',
  version: '1.0.0',
}`}</Code>
          <p>
            The host loads <code>hello/App</code> through the federation runtime by name, so there is nothing else to
            declare. Add it to the dev dashboard and start everything.
          </p>

          <h2 id="bridge">The bridge: <code>useHost()</code></h2>
          <p>The only way a mini app may talk to the host.</p>
          <table>
            <thead><tr><th>Member</th><th>Type</th><th>Notes</th></tr></thead>
            <tbody>
              <tr><td><code>app</code></td><td><code>{'{id, name, version}'}</code></td><td>Your manifest identity</td></tr>
              <tr><td><code>user</code></td><td><code>{'{id, name} | null'}</code></td><td><code>null</code> until host sign-in ships</td></tr>
              <tr><td><code>online</code></td><td><code>boolean</code></td><td>Live connectivity</td></tr>
              <tr><td><code>currency</code></td><td><code>string</code></td><td><code>&apos;PHP&apos;</code></td></tr>
              <tr><td><code>storage</code></td><td><code>get / set / remove</code></td><td>Async. Namespaced to your app id</td></tr>
              <tr><td><code>finance</code></td><td><code>HostFinance?</code></td><td>Core apps only. <code>undefined</code> for community apps</td></tr>
              <tr><td><code>wallet</code></td><td><code>HostWallet?</code></td><td>Core apps and reviewed community apps with <code>wallet:post</code>. Account ids, names, currencies, and transaction posting; no balance or history reads.</td></tr>
              <tr><td><code>close()</code></td><td><code>() =&gt; void</code></td><td>Return to the launcher</td></tr>
            </tbody>
          </table>
          <p>
            <code>HostFinance</code> exposes the balance, the base currency, active accounts, normalised asset,
            liability, and net-worth totals, the read-only Wallet transactions, and four mutations:
          </p>
          <Code lang="ts">{`addTransaction({type, amount, description, category, accountId?, billId?, billPeriod?})
transferBetweenAccounts({amount, description, fromAccountId, toAccountId})
updateTransaction(id, changes)
deleteTransaction(id)`}</Code>
          <p>
            Transfers are neutral to cash flow and move both linked balances. Linked account balances and
            bill-payment status are reconciled when an entry is edited or deleted. Mutations reject non-finite or
            non-positive amounts, blank descriptions, unknown or archived account ids, and same-account transfers.
            The bridge and the regression suite call the same implementation, so a test that passes is a statement
            about the app, not about a copy of it.
          </p>

          <p>These are SDK API boundaries, not an operating-system sandbox. Bundles execute in the host runtime and must be reviewed and trusted. The current release origin is <a href="https://sdk.jinnie.ph">sdk.jinnie.ph</a>.</p>
          <h2 id="catalogs">Public catalogs</h2>
          <p>Read-only platform metadata, safe for any app. Never a user’s balances.</p>
          <Code lang="ts">{`import {
  catalogs, financialProviders, transactionCategories, billers, currencies,
  ProviderPicker, CategorySelect, BillerPicker, CurrencyPicker, AccountPicker,
} from '@jinnie/sdk';`}</Code>
          <p>
            Persist the id, not the display label, so copy and localisation can change safely. Every catalog picker
            ends with <em>Add new</em>; a name the user types there is saved once and offered in every picker of
            that kind from then on. Every category has a glyph, and institutions and billers draw a bundled logo
            when one exists and a monogram otherwise. Community apps may use the provider picker; the finance
            context stays withheld regardless.
          </p>

          <h2 id="ui">UI kit</h2>
          <p>
            Everything in the SDK’s UI folder is exported from <code>@jinnie/sdk</code>: plain StyleSheet on top of
            the theme tokens, no UI framework, nothing a mini app needs to restyle.
          </p>
          <table>
            <thead><tr><th>Group</th><th>Components</th></tr></thead>
            <tbody>
              <tr><td>Layout</td><td><code>Stack</code>, <code>Row</code>, <code>Card</code>, <code>CardTitle</code>, <code>SectionHeader</code>, <code>AppBar</code></td></tr>
              <tr><td>Content</td><td><code>Body</code>, <code>Muted</code>, <code>Stat</code>, <code>Badge</code>, <code>Progress</code>, <code>InlineAlert</code>, <code>EmptyState</code>, <code>Skeleton</code></td></tr>
              <tr><td>Controls</td><td><code>Button</code>, <code>IconButton</code>, <code>PressableCard</code>, <code>Input</code>, <code>Textarea</code>, <code>Label</code>, <code>Switch</code>, <code>Segmented</code>, <code>SearchInput</code>, <code>Select</code></td></tr>
              <tr><td>Tokens</td><td><code>useTheme</code>, <code>useIsDark</code>, <code>space</code>, <code>radius</code>, <code>tnum</code>, <code>toneColors</code>, <code>withAlpha</code></td></tr>
            </tbody>
          </table>

          <h2 id="rules">Rules</h2>
          <ol>
            <li>
              <strong>Import only from <code>@jinnie/sdk</code>, <code>react</code>, and <code>react-native</code>.</strong>{' '}
              Never reach into another app’s package or into the host.
            </li>
            <li>
              <strong>No native dependencies.</strong> The host owns them. If you truly need one, it has to be added
              to the host as a shared singleton, which means a host release. That is the cost the architecture is
              designed to make visible.
            </li>
            <li>
              <strong>Offline-first.</strong> Anything you persist goes through <code>host.storage</code> or a store in
              the SDK. Any network call must degrade gracefully and disclose what it sends.
            </li>
            <li><strong>No colour literals.</strong> <code>useTheme()</code> or a named tone. Both schemes must look deliberate.</li>
            <li>
              <strong>Every tap target is at least 44pt, and every icon-only control has a label.</strong> The SDK
              components enforce this; do not hand-roll around them.
            </li>
            <li>
              <strong>One sheet at a time.</strong> A select inside a sheet opens as a page of that sheet. Never
              render a sheet while another is open.
            </li>
            <li><strong>English copy, professional tone, no emoji.</strong> Use the icon set.</li>
          </ol>

          <h2 id="testing">Testing</h2>
          <p>
            Finance logic lives in the SDK and runs under plain Node with in-memory storage shims. Add cases there
            for anything that touches money. Screens are not unit-tested; verify those on a device.
          </p>
          <Code>{`pnpm test        # finance calculations and data-integrity regressions
pnpm typecheck   # every package`}</Code>

          <h2 id="deploy">Deploying a mini app</h2>
          <p>Build the container and serve its manifest and bundle from any static origin.</p>
          <Code>{`pnpm --filter @jinnie/hello bundle:android`}</Code>
          <p>
            Point the remote host at that origin. Because the host resolves remotes at runtime, publishing a new
            bundle updates the app for existing installs without an app-store release.
          </p>
          <p>
            Questions about the SDK go to <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </Prose>
      </Container>
    </>
  );
}
