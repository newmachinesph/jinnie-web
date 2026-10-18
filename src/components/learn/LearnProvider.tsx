'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState, useSyncExternalStore, type ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { get, hydrateStore, subscribe } from '@learn/src/store.js';
import { learnBasePath } from '@learn/src/urls.js';
import { stop } from '@learn/src/speech.js';
import { retryNativeSave } from '@learn/src/embed.js';
import type { LearnState } from './types';

type LearnContextValue = {
  state: LearnState; ready: boolean; embedded: boolean; online: boolean;
  hydrationError: boolean; retryHydration: () => void;
  saveError: boolean; retrySave: () => Promise<boolean>;
  href: (route: string) => string; navigate: (route: string, replace?: boolean) => void;
};
const Context = createContext<LearnContextValue | null>(null);

export function LearnProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const state = useSyncExternalStore(subscribe, get, get) as LearnState;
  const [ready, setReady] = useState(false);
  const [hydrationError, setHydrationError] = useState(false);
  const [saveError, setSaveError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const retryHydration = useCallback(() => { setHydrationError(false); setAttempt(value => value + 1); }, []);
  const [embedded, setEmbedded] = useState(false);
  const [online, setOnline] = useState(true);
  const [base, setBase] = useState('/learn');
  const href = useCallback((route: string) => {
    const path = route.replace(/^\/+|\/+$/g, '');
    return `${base}${path ? '/' + path : base ? '' : '/'}${embedded ? '?embed=native' : ''}`;
  }, [base, embedded]);
  const navigate = useCallback((route: string, replace = false) => {
    stop();
    document.querySelectorAll('audio,video').forEach(media => (media as HTMLMediaElement).pause());
    if (!navigator.onLine) { if (replace) location.replace(href(route)); else location.assign(href(route)); }
    else if (replace) router.replace(href(route), { scroll: false });
    else router.push(href(route), { scroll: false });
  }, [href, router]);

  useEffect(() => {
    let active = true;
    const updateOnline = () => setOnline(navigator.onLine);
    window.addEventListener('online', updateOnline);
    window.addEventListener('offline', updateOnline);
    void hydrateStore().then(() => {
      if (!active) return;
      setBase(learnBasePath());
      setEmbedded(new URLSearchParams(location.search).get('embed') === 'native');
      updateOnline();
      setReady(true);
    }).catch(() => { if (active) setHydrationError(true); });
    const pause = () => { stop(); document.querySelectorAll('audio,video').forEach(media => (media as HTMLMediaElement).pause()); };
    const visibility = (event: Event) => { if ((event as CustomEvent).detail?.hidden) pause(); };
    const background = () => { if (document.hidden) pause(); };
    window.addEventListener('jinnie-learn-visibility', visibility);
    document.addEventListener('visibilitychange', background);
    const saveStatus = (event: Event) => setSaveError((event as CustomEvent).detail?.saved === false);
    window.addEventListener('jinnie-learn-save-status', saveStatus);
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      void navigator.serviceWorker.register('/learn-sw.js', { scope: learnBasePath() || '/' }).catch(() => {});
    }
    // Offline links use document navigation so the worker can serve the cached
    // Next shell. An RSC request must never receive an HTML fallback.
    const offlineLink = (event: MouseEvent) => {
      if (navigator.onLine || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element).closest<HTMLAnchorElement>('a[href]');
      if (!anchor || anchor.download || (anchor.target && anchor.target !== '_self')) return;
      const url = new URL(anchor.href);
      const courseBase = learnBasePath();
      if (url.origin !== location.origin || url.hash || (courseBase && url.pathname !== courseBase && !url.pathname.startsWith(courseBase + '/'))) return;
      event.preventDefault();
      location.assign(url.href);
    };
    document.addEventListener('click', offlineLink, true);
    return () => {
      active = false; pause();
      window.removeEventListener('online', updateOnline); window.removeEventListener('offline', updateOnline);
      window.removeEventListener('jinnie-learn-visibility', visibility); document.removeEventListener('visibilitychange', background);
      document.removeEventListener('click', offlineLink, true);
      window.removeEventListener('jinnie-learn-save-status', saveStatus);
    };
  }, [attempt]);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = state.lang === 'tl' ? 'fil' : 'en';
    document.documentElement.style.fontSize = state.textSize === 'large' ? '112%' : '';
  }, [ready, state.lang, state.textSize]);
  useEffect(() => () => { document.documentElement.style.fontSize = ''; document.documentElement.lang = 'en'; }, []);
  useEffect(() => {
    const view = document.getElementById('learn-main');
    if (view) { view.scrollTop = 0; view.querySelector<HTMLElement>('h1')?.focus({ preventScroll: true }); }
    return () => { stop(); document.querySelectorAll('audio,video').forEach(media => (media as HTMLMediaElement).pause()); };
  }, [pathname]);
  useEffect(() => {
    if (!ready) return;
    const legacy = location.hash.match(/^#\/(.*)$/)?.[1];
    if (legacy !== undefined) router.replace(href(legacy), { scroll: false });
  }, [ready, href, router]);

  const value = useMemo(() => ({ state, ready, embedded, online, href, navigate, hydrationError, retryHydration, saveError, retrySave: retryNativeSave }), [state, ready, embedded, online, href, navigate, hydrationError, retryHydration, saveError]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
export function useLearn() {
  const context = useContext(Context);
  if (!context) throw new Error('LearnProvider is required');
  return context;
}
