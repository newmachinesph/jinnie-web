export type Localized = { en: string; tl: string };
export type Band = 'kids' | 'teens' | 'first' | 'building' | 'securing' | 'retired';
export type Wish = { key: string; kind: 'have' | 'rid' | 'safe'; title: Localized; amount: number; saved: number; grantedAt?: number | null };
export type CommitmentProgress = { startedAt: number; days: number; marks: string[]; done: boolean };
export type PathCheckResult = { correct: number; of: number; passed: boolean; at: number };
export type LearnState = {
  lang: 'en' | 'tl'; voice: boolean; textSize: 'base' | 'large'; family: boolean;
  band: Band | null; onboarded: boolean;
  placed: { path?: string; startAt?: number; correct?: number; of?: number; at: number; skipped?: boolean } | null;
  wishes: Wish[]; bites: Record<string, { done: boolean; score: number; at: number }>;
  review: Record<string, { due: number; interval: number }>;
  commitments: Record<string, CommitmentProgress>;
  drills: { id: string; at: number; hit: number; of: number }[];
  seen: Record<string, boolean>; checks: Record<string, PathCheckResult>;
  events: { name: string; at: number; score?: number; type?: string }[];
  drillEnrolled?: boolean;
};
