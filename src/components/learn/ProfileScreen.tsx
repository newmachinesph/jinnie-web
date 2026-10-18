'use client';

import Link from 'next/link';
import { paths, allBites, lessonProgress, pathProgress, findPath } from '@learn/content/index.js';
import { bands } from '@learn/content/placement.js';
import { set, reset } from '@learn/src/store.js';
import { summary } from '@learn/src/events.js';
import { t, u } from '@learn/src/i18n.js';
import { narrationDownloads } from '@learn/src/media.js';
import { backupControls } from '@learn/src/backup.js';
import { certificateButton } from '@learn/src/certificate.js';
import { installControl } from '@learn/src/host.js';
import { useLearn } from './LearnProvider';
import { Illustration, Icon, Progress, Section, Widget } from './LearnUI';

export default function ProfileScreen() {
  const { state, href, navigate } = useLearn();
  const all = allBites();
  const done = all.filter(({ bite }) => state.bites[bite.id]?.done).length;
  const competencies = paths.flatMap(path => path.lessons.filter(lesson => lesson.status === 'authored' && lessonProgress(lesson, state) >= 1).map(lesson => ({ path, lesson })));
  const passed = paths.filter(path => state.checks[path.id]?.passed);
  const activity = summary();
  const toggle = (label: string, on: boolean, onClick: () => void) => <button className="learn-setting" aria-pressed={on} onClick={onClick}><span>{label}</span><span className={`learn-toggle ${on ? 'is-on' : ''}`} aria-hidden="true"><span /></span></button>;
  return <div><section className="learn-profile-hero"><div><span className="learn-kicker">{u('me')}</span><h1 tabIndex={-1} className="tnum">{done}<span> / {all.length}</span></h1><p>{u('bites')}</p><Progress value={done / all.length} /></div><Illustration id="lamp" progress={done / all.length} /></section>
    <div className="learn-profile-grid"><div>
      <Section title={u('paths')}><div className="learn-profile-paths">{paths.map(path => <Link key={path.id} href={href('path/' + path.id)}><Illustration id={'path-' + path.id} /><div><h3>{t(path.title)}</h3><Progress value={pathProgress(path, state)} /></div><span className="small tnum">{Math.round(pathProgress(path, state) * 100)}%</span></Link>)}</div></Section>
      <Section title={u('competencies')}>{competencies.length ? <ul className="learn-competencies">{competencies.map(({ path, lesson }) => <li key={lesson.id}><Icon name="check" /><div><p>{t(lesson.competency)}</p><span className="small">{t(path.title)}</span></div></li>)}</ul> : <div className="learn-soft-empty"><Illustration id="certificate" /><p className="small">{u('nothingYet')}</p></div>}</Section>
      {passed.length > 0 && <Section title={u('certificates')}>{passed.map(path => <article className="card learn-certificate" key={path.id}><Illustration id="certificate" /><h3>{t(path.title)}</h3><p className="small tnum">{u('pathCheck')} {state.checks[path.id].correct} / {state.checks[path.id].of} · {new Date(state.checks[path.id].at).toLocaleDateString('en-PH')}</p><p className="small">{u('certificateNote')}</p><Widget create={() => certificateButton(path, state.checks[path.id], state.lang)} revision={`${path.id}-${state.lang}-${state.checks[path.id].at}`} /></article>)}</Section>}
    </div><div>
      <Section title={t({ en: 'Settings', tl: 'Settings' })}><div className="card learn-settings">
        <div className="learn-setting"><span>{u('language')}</span><div className="learn-language-options">{(['en', 'tl'] as const).map(lang => <button key={lang} aria-pressed={state.lang === lang} onClick={() => set({ lang })}>{lang.toUpperCase()}</button>)}</div></div>
        {toggle(u('readAloud'), state.voice, () => set({ voice: !state.voice }))}
        {toggle(u('textSize'), state.textSize === 'large', () => set({ textSize: state.textSize === 'large' ? 'base' : 'large' }))}
        {toggle(t({ en: 'Family mode (kids and teens paths)', tl: 'Family mode (kids at teens paths)' }), state.family, () => set({ family: !state.family }))}
        <div className="learn-setting"><div><span className="small">{u('age')}</span><p>{t(bands.find(band => band.id === state.band)?.label) || '—'}</p></div><Link href={href('placement/age')} className="learn-text-button">{u('changeAge')}</Link></div>
      </div></Section>
      <Section title={u('placement')}><div className="card learn-placement-summary">{state.placed && !state.placed.skipped ? <><span className="small tnum">{state.placed.correct} / {state.placed.of}</span><p>{u('suggested')}: {t(findPath(state.placed.path)?.title)}</p><Link href={href('placement')} className="learn-text-button">{t({ en: 'Retake', tl: 'Ulitin' })}</Link></> : <Link href={href('placement')} className="btn-ghost w-full">{u('start')}</Link>}</div></Section>
      <Widget create={() => narrationDownloads(paths)} revision={state.lang} />
      <Widget create={() => backupControls(() => navigate('me'))} revision={state.lang} />
      <Widget create={() => installControl()} revision={state.lang} />
      <button className="learn-reset" onClick={() => { if (confirm('Reset all progress?')) { reset(); navigate('onboard'); } }}>{u('resetAll')}</button>
    </div></div>
    <details className="learn-activity"><summary>{u('activity')}</summary><p className="small">{activity.total} {u('events')} · {Object.entries(activity.byName).map(([name, value]) => `${name} ${value}`).join(' · ') || u('nothingYet')}</p>{Object.keys(activity.avgScoreByType).length > 0 && <p className="small">{Object.entries(activity.avgScoreByType).map(([name, value]) => `${name} ${Math.round(Number(value) * 100)}%`).join(' · ')}</p>}</details>
    <footer className="learn-disclaimer"><p>{u('disclaimer')}</p><p>{u('onDevice')}</p></footer>
  </div>;
}
