'use client';

import Link from 'next/link';
import { paths, allBites, nextBite, lessonProgress } from '@learn/content/index.js';
import { commitments } from '@learn/content/commitments.js';
import { fundWish, markCommitment, localDay } from '@learn/src/store.js';
import { track } from '@learn/src/events.js';
import { t, u, peso } from '@learn/src/i18n.js';
import { useLearn } from './LearnProvider';
import { Illustration, Icon, Progress, Section } from './LearnUI';
import type { CommitmentProgress, Wish } from './types';
import { AmountInput } from './AmountInput';
import { parseNumericText } from '@learn/src/numeric-input.js';

export function CommitmentRow({ id, value }: { id: string; value: CommitmentProgress }) {
  const def = commitments[id as keyof typeof commitments];
  if (!def) return null;
  const marked = value.marks.includes(localDay());
  return <article className="card learn-commitment">
    <div className="learn-row"><h3>{t(def.title)}</h3>{value.done && <Icon name="check" />}</div>
    <p className="small">{t(def.hint)}</p>
    <div className="learn-row mt-3"><Progress value={value.marks.length / value.days} /><span className="small tnum">{value.marks.length} / {value.days} {u('days')}</span></div>
    {!value.done && <button className="btn-ghost mt-3 w-full" disabled={marked} onClick={() => { markCommitment(id); track('commitment_marked', { id }); }}>{marked ? u('marked') : u('markToday')}</button>}
  </article>;
}

function WishCard({ kind, wish }: { kind: Wish['kind']; wish?: Wish }) {
  const { href } = useLearn();
  const art = { have: 'alkansya', rid: 'card', safe: 'shield' }[kind];
  return <article className={`card learn-wish wish-${kind} ${wish?.grantedAt ? 'is-granted' : ''}`}>
    <div className="learn-wish-heading"><Illustration id={art} /><span className="eyebrow">{u(kind)}</span>{wish?.grantedAt && <span className="learn-gold-label">{u('granted')}</span>}</div>
    {wish ? <>
      <h3>{t(wish.title)}</h3>
      <div className="learn-wish-amounts"><strong className="money">{peso(wish.saved)}</strong><span className="small">{peso(wish.amount)}</span></div>
      <Progress value={wish.saved / wish.amount} label={t(wish.title)} />
      {!wish.grantedAt && <>
        <form className="learn-wish-form" onSubmit={event => {
          event.preventDefault();
          const form = event.currentTarget;
          const amount = parseNumericText(new FormData(form).get('amount'));
          if (form.reportValidity() && Number.isFinite(amount) && amount > 0) { fundWish(wish.key, amount); form.reset(); }
        }}>
          <AmountInput name="amount" required placeholder="₱500" aria-label={`${u('record')} · ${t(wish.title)} · ₱`} />
          <button className="btn-ghost" type="submit">{u('record')}</button>
        </form>
        <p className="small learn-wish-note">{u('sample')}</p>
      </>}
    </> : <Link href={href('onboard')} className="learn-wish-empty">{t({ en: 'Name it', tl: 'Pangalanan' })}<Icon name="plus" /></Link>}
  </article>;
}

export default function Dashboard() {
  const { state, href } = useLearn();
  const next = nextBite(state);
  const all = allBites();
  const done = all.filter(({ bite }) => state.bites[bite.id]?.done).length;
  const active = Object.entries(state.commitments).filter(([, value]) => !value.done);
  const preferred = paths.find(path => path.id === (state.placed?.path || state.band));
  return <div className="learn-dashboard">
    <section className="learn-welcome">
      <div className="learn-welcome-copy">
        <span className="learn-kicker"><Icon name="lamp" />{u('wishes')}</span>
        <h1 tabIndex={-1}>{t({ en: 'Jinnie does not grant wishes.', tl: 'Hindi tumutupad ng wish si Jinnie.' })}</h1>
        <p>{t({ en: 'She shows you how.', tl: 'Ipinapakita niya kung paano.' })}</p>
        <div className="learn-welcome-progress"><Progress value={done / all.length} /><span className="small tnum">{done} / {all.length} {u('bites')}</span></div>
      </div>
      <Illustration id="jinnie" className="learn-welcome-jinnie" />
    </section>
    <div className="learn-dashboard-columns">
      <Section title={t({ en: 'Continue', tl: 'Ituloy' })}>
        {next ? <Link href={href('bite/' + next.bite.id)} className="learn-continue">
          <Illustration id={'path-' + next.path.id} />
          <div className="learn-continue-copy"><span className="small">{t(next.path.title)} · {t(next.lesson.title)}</span><h2>{t(next.bite.title)}</h2><span className="learn-duration"><Icon name="clock" />{next.bite.minutes} {u('minutes')}</span><Progress value={lessonProgress(next.lesson, state)} /></div>
          <span className="learn-continue-arrow"><Icon name="arrow" /></span>
        </Link> : <div className="card learn-finished"><Illustration id="lamp" progress={1} /><p>{u('pathDone')}</p></div>}
      </Section>
      {preferred && <Link href={href('path/' + preferred.id)} className="learn-current-path"><span className="eyebrow">{u('paths')}</span><h2>{t(preferred.title)}</h2><p className="small">{t(preferred.tagline)}</p><span className="learn-row"><span className="small">{preferred.band}</span><Icon name="arrow" /></span></Link>}
    </div>
    <Section title={u('wishes')}><div className="learn-wishes-grid">{(['have', 'rid', 'safe'] as const).map(kind => <WishCard key={kind} kind={kind} wish={state.wishes.find(wish => wish.kind === kind)} />)}</div></Section>
    {active.length > 0 && <Section title="Commitments"><div className="learn-commitments-grid">{active.map(([id, value]) => <CommitmentRow key={id} id={id} value={value} />)}</div></Section>}
  </div>;
}
