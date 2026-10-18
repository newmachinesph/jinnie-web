'use client';

import Link from 'next/link';
import { paths, findPath, findLesson, nextBite, pathProgress, lessonProgress } from '@learn/content/index.js';
import { set } from '@learn/src/store.js';
import { t, u } from '@learn/src/i18n.js';
import { introVideo } from '@learn/src/media.js';
import { useLearn } from './LearnProvider';
import { Back, Icon, Illustration, Progress, Widget } from './LearnUI';
import { PathCheck } from './PracticeScreen';

export function PathsScreen() {
  const { state, href } = useLearn();
  const preferred = state.placed?.path || state.band;
  const ordered = [...paths].sort((a, b) => Number(b.id === preferred) - Number(a.id === preferred));
  return <div><div className="learn-page-heading"><span className="learn-kicker"><Icon name="route" />Jinnie · Wishes</span><h1 tabIndex={-1}>{u('paths')}</h1><p className="learn-lede">{t({ en: 'Six paths, one per life stage. Start where you are; every path stays open.', tl: 'Anim na path, isa kada yugto ng buhay. Magsimula kung nasaan ka; bukas ang lahat.' })}</p></div>
    <div className="learn-path-grid">{ordered.map(path => <Link key={path.id} href={href('path/' + path.id)} className={`learn-path-card ${path.id === preferred ? 'is-selected' : ''}`}>
      <div className="learn-path-visual"><Illustration id={'path-' + path.id} /><span className="chip">{path.band}</span></div>
      <div className="learn-path-copy"><div className="learn-path-badges">{path.gate === 'family' && <span className="small"><Icon name="shield" />{t({ en: 'With a parent', tl: 'Kasama ang magulang' })}</span>}{state.placed?.path === path.id && <span className="learn-gold-label">{u('suggested')}</span>}</div><h2>{t(path.title)}</h2><p>{t(path.tagline)}</p><div className="learn-row"><span className="small tnum">{path.lessons.filter(lesson => lesson.status === 'authored').length} / {path.lessons.length} {t({ en: 'lessons ready', tl: 'aralin na handa' })}</span><Icon name="arrow" /></div><Progress value={pathProgress(path, state)} label={t(path.title)} /></div>
    </Link>)}</div>
  </div>;
}

export function PathScreen({ id }: { id: string }) {
  const { state, href } = useLearn();
  const path = findPath(id);
  if (!path) return <MissingScreen />;
  if (path.gate === 'family' && !state.family) return <><Back /><div className="card learn-family-gate"><Illustration id="family" /><h1 tabIndex={-1} className="learn-lede">{u('familyGate')}</h1><button className="btn-primary" onClick={() => set({ family: true })}>{u('iAmParent')}</button></div></>;
  const progress = pathProgress(path, state);
  const nextLesson = nextBite({ ...state, band: path.id, placed: state.placed?.path === path.id ? state.placed : null })?.lesson;
  return <div><Back /><section className="learn-path-hero"><div><span className="chip">{path.band}</span><h1 tabIndex={-1}>{t(path.title)}</h1><p className="learn-lede">{t(path.intro.text)}</p><div className="learn-session-progress"><Progress value={progress} /><span className="small tnum">{Math.round(progress * 100)}%</span></div></div><Illustration id={'path-' + path.id} /></section>
    {path.intro.video && <Widget create={() => introVideo(path)} revision={`${path.id}-${state.lang}`} className="learn-video-widget" />}
    <ol className="learn-roadmap">{path.lessons.map((lesson, index) => {
      const value = lessonProgress(lesson, state);
      const ready = lesson.status === 'authored';
      return <li key={lesson.id} className={`${value >= 1 ? 'is-complete' : ''} ${nextLesson?.id === lesson.id ? 'is-next' : ''}`}>
        <span className="learn-roadmap-node" aria-hidden="true">{value >= 1 ? <Icon name="check" /> : String(index + 1).padStart(2, '0')}</span>
        <Link href={href('lesson/' + lesson.id)} className="learn-roadmap-card" aria-disabled={!ready} onClick={event => { if (!ready) event.preventDefault(); }}><div><span className="eyebrow">{u('lesson')} {index + 1}</span><h2>{t(lesson.title)}</h2><p className="small">{t(lesson.summary)}</p><div className="learn-row"><span className="small tnum">{lesson.bites.filter(bite => state.bites[bite.id]?.done).length} / {lesson.bites.length} {u('bites')}</span><Progress value={value} /></div></div><Icon name="arrow" /></Link>
      </li>;
    })}</ol>
    {progress >= 1 && <PathCheck path={path} />}
  </div>;
}

export function LessonScreen({ id }: { id: string }) {
  const { state, href } = useLearn();
  const found = findLesson(id);
  if (!found) return <MissingScreen />;
  const { path, lesson } = found;
  const wish = state.wishes.find(item => item.kind === lesson.wish);
  return <div><Back route={'path/' + path.id} /><div className="learn-lesson-heading"><div><span className="learn-kicker">{t(path.title)}</span><h1 tabIndex={-1}>{t(lesson.title)}</h1><p className="learn-lede">{t(lesson.summary)}</p><div className="learn-competency"><span className="eyebrow">{u('youCanNow')}</span><p>{t(lesson.competency)}</p></div><Progress value={lessonProgress(lesson, state)} /></div><Illustration id={lesson.bites[0]?.hook.illo || 'lamp'} /></div>
    <div className="learn-lesson-grid"><ol className="learn-bite-list">{lesson.bites.map((bite, index) => <li key={bite.id}><Link href={href('bite/' + bite.id)} className={`learn-bite-link ${state.bites[bite.id]?.done ? 'is-complete' : ''}`}><span className="learn-bite-number">{state.bites[bite.id]?.done ? <Icon name="check" /> : String(index + 1).padStart(2, '0')}</span><div><h2>{t(bite.title)}</h2><span className="small learn-duration"><Icon name="clock" />{bite.minutes} {u('minutes')}</span></div><Icon name="arrow" /></Link></li>)}</ol>
      <aside className="learn-lesson-wish"><Illustration id={{ have: 'alkansya', rid: 'card', safe: 'shield' }[lesson.wish as 'have' | 'rid' | 'safe'] || 'lamp'} /><span className="eyebrow">{u('advances')}</span><h2>{wish ? t(wish.title) : u(lesson.wish)}</h2>{wish ? <Progress value={wish.saved / wish.amount} /> : <Link href={href('onboard')} className="learn-text-button">{t({ en: 'Name it', tl: 'Pangalanan' })}</Link>}</aside>
    </div>
  </div>;
}

export function MissingScreen() {
  const { href } = useLearn();
  return <div className="learn-empty"><Illustration id="lamp" /><h1 tabIndex={-1}>Jinnie Learn</h1><Link href={href('paths')} className="btn-primary">{u('paths')}<Icon name="arrow" /></Link></div>;
}
