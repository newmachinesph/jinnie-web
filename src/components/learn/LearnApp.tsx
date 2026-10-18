'use client';

import Link from 'next/link';
import { Component, useEffect, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { set } from '@learn/src/store.js';
import { learnBasePath } from '@learn/src/urls.js';
import { t, u } from '@learn/src/i18n.js';
import { LearnProvider, useLearn } from './LearnProvider';
import { Icon, Illustration } from './LearnUI';
import Dashboard from './Dashboard';
import Onboarding, { Placement } from './Onboarding';
import { PathsScreen, PathScreen, LessonScreen, MissingScreen } from './PathScreens';
import ProfileScreen from './ProfileScreen';
import LessonReader from './LessonReader';
import PracticeScreen from './PracticeScreen';

class LearnBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (this.state.failed) return <div className="learn-loading"><Illustration id="lamp" /><h1>Jinnie Learn</h1><p>Learn is temporarily unavailable. Please try again.</p><button className="btn-primary" onClick={() => location.reload()}>Try again</button></div>;
    return this.props.children;
  }
}

function Shell({ segments }: { segments: string[] }) {
  const { state, ready, href, navigate, embedded, online, hydrationError, retryHydration, saveError, retrySave } = useLearn();
  const pathname = usePathname();
  // Next's pathname changes before history commits. Reading location here can
  // render the previous lesson under the new URL during a client transition.
  // It also supplies the requested path when an offline shell boots elsewhere.
  const current = ready ? pathname.slice(learnBasePath().length).split('/').filter(Boolean).map(decodeURIComponent) : segments;
  const route = current[0] || '';
  const id = current[1] || '';
  const focus = route === 'bite';
  const onboarding = route === 'onboard';
  const needsOnboarding = !state.onboarded && !['onboard', 'placement'].includes(route);
  useEffect(() => { if (ready && needsOnboarding) navigate('onboard', true); }, [ready, needsOnboarding, navigate]);
  if (hydrationError) return <div className="learn-loading" role="alert"><Illustration id="lamp" /><h1>Jinnie Learn</h1><p>Your saved progress could not load. Try again to continue.</p><button className="btn-primary" onClick={retryHydration}>Try again</button></div>;
  // Hydration can finish before the onboarding route commits. Keep the same
  // loading view until then, rather than briefly painting an empty sidebar shell.
  if (!ready || needsOnboarding) return <div className="learn-loading" role="status" aria-live="polite"><Illustration id="lamp" /><strong>Jinnie Learn</strong><span className="learn-loading-line" aria-hidden="true" /><p>Loading Learn...</p></div>;
  const active = ['path', 'lesson', 'bite'].includes(route) ? 'paths' : route;
  let screen;
  switch (route) {
    case '': screen = <Dashboard />; break;
    case 'onboard': screen = <Onboarding />; break;
    case 'placement': screen = <Placement key={pathname} changeAge={id === 'age'} />; break;
    case 'paths': screen = <PathsScreen />; break;
    case 'path': screen = <PathScreen id={id} />; break;
    case 'lesson': screen = <LessonScreen id={id} />; break;
    case 'bite': screen = <LessonReader key={`${id}-${state.lang}`} id={id} />; break;
    case 'practice': screen = <PracticeScreen />; break;
    case 'me': screen = <ProfileScreen />; break;
    default: screen = <MissingScreen />;
  }
  const items = [['', 'wishes', 'lamp'], ['paths', 'paths', 'route'], ['practice', 'practice', 'target'], ['me', 'me', 'person']];
  return <div className={`learn-app ${focus ? 'learn-focus' : ''} ${onboarding ? 'learn-onboarding' : ''} ${embedded ? 'is-embedded' : ''}`}>
    <a href="#learn-main" className="learn-skip">Skip to content</a>
    <header className="learn-header"><Link href={href('')} className="learn-brand" aria-label="Jinnie Learn"><Icon name="lamp" /><span>Jinnie <small>· Wishes</small></span></Link><div className="learn-header-controls"><button aria-label={u('language')} aria-pressed={state.lang === 'tl'} onClick={() => set({ lang: state.lang === 'en' ? 'tl' : 'en' })}>{state.lang.toUpperCase()}</button><button aria-label={u('readAloud')} aria-pressed={state.voice} onClick={() => set({ voice: !state.voice })}><Icon name="speaker" /></button></div></header>
    {!focus && !onboarding && <nav className="learn-navigation" aria-label="Sections">{items.map(([target, label, icon]) => <Link key={target} href={href(target)} aria-current={active === target ? 'page' : undefined}><Icon name={icon} /><span>{u(label)}</span>{active === target && <i aria-hidden="true" />}</Link>)}<div className="learn-nav-decoration" aria-hidden="true"><Illustration id="lamp" /><span>Jinnie</span></div></nav>}
    <main id="learn-main" className="learn-main" tabIndex={-1}>{saveError && <div role="alert" className="learn-save-error"><p>Your latest progress has not saved to Jinnie yet. Keep Learn open and try again.</p><button className="btn-ghost" onClick={() => { void retrySave(); }}>Retry save</button></div>}{!online && <div role="status" className="learn-offline-status"><Icon name="shield" />{t({ en: 'Offline · Your progress stays on this device.', tl: 'Offline · Nananatili sa device na ito ang progreso mo.' })}</div>}{screen}</main>
  </div>;
}

export function LearnRoot({ children }: { children: ReactNode }) {
  return <LearnBoundary><LearnProvider>{children}</LearnProvider></LearnBoundary>;
}
export default function LearnApp({ segments }: { segments: string[] }) { return <Shell segments={segments} />; }
