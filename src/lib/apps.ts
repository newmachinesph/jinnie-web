import { site } from './site';

/**
 * The app registry as the host ships it (packages/host/src/registry.ts in the
 * app repo), plus the copy this site adds. `id` doubles as the route segment
 * and the screenshot filename under /public/screens.
 */
export type Tone =
  | 'indigo' | 'gold' | 'emerald' | 'blue' | 'sky'
  | 'violet' | 'amber' | 'rose' | 'slate';

/** 'system' apps belong to the shell (Settings opens from the gear) and are not listed in the launcher. */
export type AppKind = 'core' | 'community' | 'system';

export interface MiniApp {
  id: string;
  name: string;
  /** The one-line description shown on the launcher tile. */
  description: string;
  tone: Tone;
  kind: AppKind;
  author: string;
  version: string;
  port: number;
  /** Longer copy for the app page. Plain, and nothing the app does not do. */
  summary: string;
  /** What the screen does, in the product's own words. */
  features: string[];
  /** Other apps it exchanges data with through the shared ledger. */
  worksWith?: string[];
  /** Optional browser experience for apps available on this website. */
  webHref?: string;
}

export const apps: MiniApp[] = [
  {
    id: 'accounts',
    name: 'Accounts',
    description: 'Banks, e-wallets, cards, cash, and currencies in one view.',
    tone: 'blue',
    kind: 'core',
    author: 'Jinnie',
    version: '1.0.0',
    port: 9001,
    summary:
      'Every place your money sits, in one list. Bank accounts, e-wallets, credit cards, and cash, each in its own currency and each normalised to pesos for the total at the top of Home.',
    features: [
      'Assets and liabilities kept apart, so overdrafts and card balances read as what they are.',
      'Multi-currency balances converted to pesos using the exchange rates you enter.',
      'A bundled logo for the institutions the catalog knows, and a monogram for the rest.',
      'Archive an account without losing its history. Restore it later.',
      'Update balances and exchange rates as your records change.',
    ],
    worksWith: ['wallet', 'bills', 'credit'],
  },
  {
    id: 'wallet',
    name: 'Wallet',
    description: 'Record income and expenses. Works entirely offline.',
    tone: 'indigo',
    kind: 'core',
    author: 'Jinnie',
    version: '1.0.0',
    port: 9002,
    summary:
      'The ledger. Every peso in or out is a Wallet record, whether you typed it here or a payment posted from Bills. It never needs a signal.',
    features: [
      'Amount-first quick add that remembers your last account and category.',
      'Transfers between accounts move both balances and leave cash flow untouched.',
      'Edit or delete any record and the linked account and bill reconcile exactly.',
      'Categories carry their own glyph and ledger side. Add your own once and reuse it everywhere.',
      'The privacy switch hides every figure on the screen with one tap.',
    ],
    worksWith: ['accounts', 'bills', 'budget', 'insights'],
  },
  {
    id: 'bills',
    name: 'Bills',
    description: 'Recurring dues with due dates. Payments post to your Wallet.',
    tone: 'sky',
    kind: 'core',
    author: 'Jinnie',
    version: '1.0.0',
    port: 9003,
    summary:
      'Rent, utilities, tuition, insurance. Each bill knows its biller, its amount, and when it is due. Paying one writes the payment straight into Wallet.',
    features: [
      'Recurring cycles with the next due date always visible.',
      'Pay from any account. The payment appears in Wallet with the bill and period attached.',
      'Reopen a paid period if the payment was recorded by mistake.',
      'A biller catalog with logos for common utilities, telcos, and lenders.',
    ],
    worksWith: ['wallet', 'accounts'],
  },
  {
    id: 'budget',
    name: 'Budget',
    description: 'Set monthly category limits and see what is left to spend.',
    tone: 'gold',
    kind: 'core',
    author: 'Jinnie',
    version: '1.0.0',
    port: 9004,
    summary:
      'A plan for the month, category by category. Budget reads spending from the Wallet ledger, so there is nothing to re-enter and nothing to reconcile.',
    features: [
      'A limit per category, and the remaining amount computed from real spending.',
      'The plan surface uses the same night indigo as the net-worth card. One glance tells you where you stand.',
      'Categories you add in Wallet appear here automatically.',
    ],
    worksWith: ['wallet'],
  },
  {
    id: 'insights',
    name: 'Insights',
    description: 'Understand cash flow, category spending, and savings signals.',
    tone: 'violet',
    kind: 'core',
    author: 'Jinnie',
    version: '1.0.0',
    port: 9005,
    summary:
      'What came in, what went out, and where. Insights reports; it does not judge. Every chart is computed on the device from your own ledger.',
    features: [
      'Cash flow by month, income against expenses.',
      'Spending by category with the share each one takes.',
      'Savings signals drawn from the gap between income and spending.',
    ],
    worksWith: ['wallet'],
  },
  {
    id: 'subscriptions',
    name: 'Subscriptions',
    description: 'Every recurring service, its renewal date, and the true monthly cost.',
    tone: 'rose',
    kind: 'core',
    author: 'Jinnie',
    version: '1.0.0',
    port: 9011,
    summary:
      'Streaming, cloud storage, memberships. Subscriptions lists each service with its next renewal and adds them up as one monthly figure, whatever cycle each one bills on.',
    features: [
      'Monthly and annual services normalised to a monthly cost.',
      'The next renewal date for each service, and the days until it.',
      'Renewals can be recorded as Wallet expenses against the account that pays them.',
    ],
    worksWith: ['wallet'],
  },
  {
    id: 'credit',
    name: 'Credit',
    description: 'Card utilisation, statement and due days, and payments in one place.',
    tone: 'indigo',
    kind: 'core',
    author: 'Jinnie',
    version: '1.0.0',
    port: 9012,
    summary:
      'Each card with its limit, its balance, its statement day, and its due day. Utilisation across all cards is one number at the top.',
    features: [
      'Combined utilisation, with a plain note when it sits under 30 percent.',
      'Statement and due days per card, and the days until the next payment.',
      'Card payments are transfers from a deposit account, so both balances move at once.',
    ],
    worksWith: ['accounts', 'wallet'],
  },
  {
    id: 'learn',
    name: 'Learn',
    description: 'Everyday money skills, one small lesson at a time.',
    tone: 'indigo',
    kind: 'core',
    author: 'Jinnie',
    version: '1.0.0',
    port: 9014,
    webHref: site.learnUrl,
    summary:
      'Learn with Jinnie through six life-stage paths, from first money decisions to retirement. Short illustrated lessons, hands-on practice, and scam drills help you build confidence at your own pace. Open Learn in the Jinnie launcher or start here in your browser.',
    features: [
      '48 lessons with 255 interactive activities across six learning paths.',
      'English and Filipino lessons, recorded narration, and captioned introduction videos.',
      'Scam practice, a money glossary, savings wishes, and daily commitments.',
      'Progress saved locally, with downloadable backups and completion certificates.',
      'Download audio and video packs for offline learning after your first visit.',
    ],
  },
  {
    id: 'security',
    name: 'Security',
    description: 'PIN lock, privacy, backups, and local data.',
    tone: 'slate',
    kind: 'core',
    author: 'Jinnie',
    version: '1.0.0',
    port: 9015,
    summary:
      'The controls over your records. Hide figures, lock the app behind a PIN with your fingerprint or face as a shortcut, export a backup you own, restore one, or delete every record from the device.',
    features: [
      'A privacy switch that masks every amount across every app.',
      'Device protection with a PIN, and the phone’s fingerprint or face as a shortcut.',
      'Export every record as a single JSON file through the system share sheet, sealed with a passphrase if you choose.',
      'Restore validates the file, then snapshots current data first so a failed restore rolls back.',
      'One row deletes every local record.',
    ],
  },
  {
    id: 'goals',
    name: 'Goals',
    description: 'Savings goals with targets, deadlines, and challenge presets.',
    tone: 'amber',
    kind: 'community',
    author: 'Jinnie Community',
    version: '1.0.0',
    port: 9007,
    summary:
      'A target, a deadline, and progress towards it. Goals keeps its own records in namespaced storage and does not use your ledger.',
    features: [
      'Named goals with a target amount and an optional deadline.',
      'Challenge presets for common savings patterns.',
      'Progress recorded by you, at your pace.',
    ],
  },
  {
    id: 'debts',
    name: 'Debts',
    description: 'Money you are owed and money you owe, settled cleanly.',
    tone: 'rose',
    kind: 'community',
    author: 'Jinnie Community',
    version: '1.0.0',
    port: 9008,
    summary:
      'Personal lending, both directions. Who, how much, since when, and whether it is settled.',
    features: [
      'Receivables and payables listed apart, with running totals for each.',
      'Mark a debt settled, reopen it, or edit its details. Optionally record settlement in Wallet.',
      'Every entry validated before it is saved: no blank names, no zero amounts.',
    ],
  },
  {
    id: 'circles',
    name: 'Circles',
    description: 'Manage a rotating savings group: members, rounds, payouts.',
    tone: 'emerald',
    kind: 'community',
    author: 'Jinnie Community',
    version: '1.0.0',
    port: 9009,
    summary:
      'For a paluwagan or any rotating savings group. Members, the contribution each round, and who receives the payout next.',
    features: [
      'Members and their order in the rotation.',
      'Advance or rewind the payout round and see the next recipient.',
      'Weekly or monthly schedules and a calculated pot for each round.',
    ],
  },
  {
    id: 'remit',
    name: 'Remit',
    description: 'A clean log of remittances sent and received, fees included.',
    tone: 'sky',
    kind: 'community',
    author: 'Jinnie Community',
    version: '1.0.0',
    port: 9010,
    summary:
      'Log money sent or received, who it was for, the channel, and the fee. Optionally add a corresponding income or expense record to Wallet.',
    features: [
      'Sent and received remittances with the person, provider, amount, and fee.',
      'Totals by direction.',
    ],
  },
  {
    id: 'shared',
    name: 'Shared',
    description: 'Split trips, rent, and group costs; see who owes whom and settle up.',
    tone: 'emerald',
    kind: 'community',
    author: 'Jinnie Community',
    version: '1.0.0',
    port: 9013,
    summary:
      'Group expenses with the balance worked out for you. Add the people, add the costs, and Shared tells you who owes whom.',
    features: [
      'Groups for a trip, a flat, or a recurring dinner.',
      'Split an expense equally among the members you select and record who paid.',
      'Suggested settlement transfers, with payments recorded against member balances.',
    ],
  },
];

/** Settings lives in the shell's gear, not the launcher, so it stays out of the catalog counts. */
export const shellApps: MiniApp[] = [
  {
    id: 'settings',
    name: 'Settings',
    description: 'Sample data, catalogs, and help for this build.',
    tone: 'slate',
    kind: 'system',
    author: 'Jinnie',
    version: '1.0.0',
    port: 9006,
    summary:
      'General settings for the shell: load or remove the sample profile, browse the catalogs of categories, institutions and billers, replay the walkthrough, and see which build is installed.',
    features: [
      'Sample data can be loaded, reset, or removed from one row.',
      'The catalog of categories, institutions, and billers, including the names you added.',
      'Replay the first-run walkthrough.',
      'App version, build number, and the version of each mini app.',
    ],
  },
];

export const coreApps = apps.filter(a => a.kind === 'core');
export const communityApps = apps.filter(a => a.kind === 'community');
export const getApp = (id: string) => [...apps, ...shellApps].find(a => a.id === id);
