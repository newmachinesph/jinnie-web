'use client';

import { useState } from 'react';
import { bands, modeOf, questionsFor, suggest } from '@learn/content/placement.js';
import { findPath } from '@learn/content/index.js';
import { addWish, set } from '@learn/src/store.js';
import { track } from '@learn/src/events.js';
import { t, u } from '@learn/src/i18n.js';
import { useLearn } from './LearnProvider';
import { Illustration, Icon, Progress } from './LearnUI';
import Interaction from './Interaction';
import { AmountInput } from './AmountInput';
import { parseNumericText } from '@learn/src/numeric-input.js';

function AgeQuestion({ onDone }: { onDone: () => void }) {
  const { state } = useLearn();
  return <div className="learn-onboard"><div className="learn-onboard-hero"><div><span className="learn-kicker"><Icon name="jinnie" />Jinnie · Wishes</span><h1 tabIndex={-1}>{u('askAge')}</h1><p className="learn-lede">{u('askAgeWhy')}</p></div><Illustration id="jinnie" /></div><div className="learn-age-grid">{bands.map(band => <button key={band.id} className="learn-age-option" onClick={() => { set({ band: band.id, family: state.family || band.mode !== 'adult' }); onDone(); }}><span>{t(band.label)}</span><Icon name="arrow" /></button>)}</div></div>;
}

export default function Onboarding() {
  const { state, navigate } = useLearn();
  if (!state.band) return <AgeQuestion onDone={() => {}} />;
  return <div className="learn-onboard"><div className="learn-onboard-hero"><div><span className="learn-kicker"><Icon name="lamp" />Jinnie · Wishes</span><h1 tabIndex={-1}>{u('onboardTitle')}</h1><p className="learn-lede">{u('onboardLede')}</p></div><Illustration id="jinnie" /></div>
    {modeOf(state.band) !== 'adult' && <p className="small learn-family-note"><Icon name="shield" />{u('withParent')}</p>}
    <form onSubmit={event => {
      event.preventDefault();
      const form = event.currentTarget;
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const fallback = { kids: 300, teens: 3000, adult: 10000 }[modeOf(state.band) as 'kids' | 'teens' | 'adult'];
      for (const kind of ['have', 'rid', 'safe']) {
        const title = String(data.get(kind + '-title') || '').trim();
        const raw = data.get(kind + '-amount');
        const amount = raw ? parseNumericText(raw) : fallback;
        if (title && Number.isFinite(amount) && amount > 0) addWish({ key: kind, kind, title: { en: title, tl: title }, amount });
      }
      set({ onboarded: true }); navigate('placement');
    }}>
      <div className="learn-onboard-wishes">{(['have', 'rid', 'safe'] as const).map(kind => <div className={`card learn-onboard-wish wish-${kind}`} key={kind}>
        <div className="learn-wish-heading"><Illustration id={{ have: 'alkansya', rid: 'card', safe: 'shield' }[kind]} /><label htmlFor={kind + '-title'}>{u(kind)}</label></div>
        <input id={kind + '-title'} name={kind + '-title'} placeholder={u(kind + 'Hint')} autoComplete="off" maxLength={120} />
        <AmountInput name={kind + '-amount'} placeholder="₱" aria-label={`${u(kind)} · ₱`} />
      </div>)}</div>
      <div className="learn-onboard-actions"><button type="submit" className="btn-primary">{u('continue')}<Icon name="arrow" /></button><button type="button" className="btn-ghost" onClick={() => { set({ onboarded: true }); navigate(''); }}>{u('skip')}</button></div>
    </form><button className="learn-text-button" onClick={() => set({ band: null })}>{u('changeAge')}</button>
  </div>;
}

export function Placement({ changeAge = false }: { changeAge?: boolean }) {
  const { state, navigate } = useLearn();
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [finished, setFinished] = useState(false);
  if (!state.band || changeAge) return <AgeQuestion onDone={() => navigate('placement')} />;
  const questions = questionsFor(state.band);
  const recommendation = suggest(state.band, correct, questions.length);
  const path = findPath(recommendation.path);
  return <div className="learn-placement"><div className="learn-page-heading"><span className="learn-kicker"><Icon name="route" />{u('placement')}</span><h1 tabIndex={-1}>{u('placement')}</h1><p className="learn-lede">{u('placementIntro')}</p></div>
    {modeOf(state.band) !== 'adult' && <p className="small learn-family-note">{u('withParent')}</p>}
    {finished ? <div className="card learn-placement-result"><Illustration id={'path-' + recommendation.path} /><span className="eyebrow">{u('suggested')}</span><h2>{path ? t(path.title) : recommendation.path}</h2><p>{t({ en: `${correct} of ${questions.length}. Start at lesson ${recommendation.startAt}. Earlier lessons stay open.`, tl: `${correct} sa ${questions.length}. Magsimula sa aralin ${recommendation.startAt}. Bukas pa rin ang mga naunang aralin.` })}</p><button className="btn-primary" onClick={() => navigate('path/' + recommendation.path)}>{u('start')}<Icon name="arrow" /></button></div> : <>
      <div className="learn-session-progress"><Progress value={index / questions.length} /><span className="small tnum">{index + 1} / {questions.length}</span></div>
      <Interaction key={`${state.band}-${index}-${state.lang}`} exercise={questions[index]} onComplete={result => {
        const nextCorrect = correct + (result.score >= 1 ? 1 : 0);
        setCorrect(nextCorrect);
        if (index + 1 < questions.length) setIndex(index + 1);
        else { set({ placed: { ...suggest(state.band, nextCorrect, questions.length), at: Date.now() } }); track('placement_done', { band: state.band, correct: nextCorrect, of: questions.length }); setFinished(true); }
      }} />
      <button className="btn-ghost mt-4 w-full" onClick={() => { set({ placed: { skipped: true, at: Date.now() } }); navigate('paths'); }}>{u('skip')}</button>
    </>}
  </div>;
}
