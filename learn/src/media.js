import { h } from './ui.js';
import { get } from './store.js';
import { t } from './i18n.js';
import { manage } from './lifecycle.js';
import { narrationManifest, stop } from './speech.js';
import { illo } from '../assets/illustrations.js';
import { assetPath, mediaCache } from './urls.js';

export const mediaCacheName = mediaCache;

export function introVideo(path) {
  const lang = get().lang;
  let active = true;
  const title = t(path.title);
  const root = h('details', { class: 'intro-film mt-4' });
  const summary = h('summary', { class: 'intro-teaser', 'aria-label': t({ en: `Play introduction: ${title}`, tl: `I-play ang panimula: ${title}` }) },
    h('span', { class: 'intro-teaser-art', 'aria-hidden': 'true', html: illo(`path-${path.id}`) }),
    h('span', { class: 'intro-teaser-play', 'aria-hidden': 'true', html: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M8 5.5v13L19 12Z"/></svg>' }),
    h('span', { class: 'intro-teaser-copy' },
      h('span', { class: 'intro-teaser-title' }, title),
      h('span', { class: 'intro-teaser-duration tnum' }, '0:45')));
  const video = h('video', {
    controls: true, playsinline: true, preload: 'none',
    poster: `/learn-assets/video/${path.id}.${lang}.poster.jpg`,
    'aria-label': t(path.title), class: 'w-full',
  }, h('source', { src: `/learn-assets/video/${path.id}.${lang}.mp4`, type: 'video/mp4' }),
  h('track', { kind: 'captions', src: `/learn-assets/video/${path.id}.${lang}.vtt`, srclang: lang === 'tl' ? 'fil' : 'en', label: lang === 'tl' ? 'Taglish' : 'English', default: true }));
  const content = h('div', { class: 'intro-film-content' });
  const status = h('p', { class: 'small mt-2', role: 'status' });
  const download = h('button', { class: 'btn-ghost mt-2 w-full', onclick: async () => {
    if (!active || download.disabled) return;
    if (navigator.connection?.saveData || navigator.connection?.type === 'cellular') {
      status.textContent = t({ en: 'Connect to Wi-Fi to save this video.', tl: 'Kumonekta sa Wi-Fi para i-save ang video.' });
      return;
    }
    download.disabled = true;
    try {
      const cache = await caches.open(mediaCacheName());
      await cache.addAll([`/learn-assets/video/${path.id}.${lang}.mp4`, `/learn-assets/video/${path.id}.${lang}.vtt`, `/learn-assets/video/${path.id}.${lang}.poster.jpg`]);
      if (active) status.textContent = t({ en: 'Video saved for offline viewing.', tl: 'Na-save ang video para mapanood offline.' });
    } catch { if (active) status.textContent = t({ en: 'Could not save the video. Check your connection and storage, then try again.', tl: 'Hindi na-save ang video. Tingnan ang koneksyon at storage, tapos subukan muli.' }); }
    if (active) download.disabled = false;
  } }, t({ en: 'Save video offline', tl: 'I-save ang video offline' }));
  video.addEventListener('play', stop);
  video.addEventListener('loadedmetadata', () => {
    if (!active || !Number.isFinite(video.duration)) return;
    const seconds = Math.round(video.duration);
    summary.querySelector('.intro-teaser-duration').textContent = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
  });
  root.addEventListener('toggle', () => {
    if (!active) return;
    if (root.open) {
      // A browser may require a second press on its native play control. Keep
      // that control available if the disclosure's user gesture has expired.
      video.play()?.catch(() => {});
    } else video.pause();
  });
  const unavailable = () => { if (active) status.textContent = t({ en: 'Video unavailable. You can continue with the lessons below.', tl: 'Hindi available ang video. Maaari mong ituloy ang mga aralin sa ibaba.' }); };
  video.addEventListener('error', unavailable);
  video.querySelector('source').addEventListener('error', unavailable);
  content.append(video, download, status);
  root.append(summary, content);
  manage(root, () => { active = false; video.pause(); video.removeAttribute('src'); video.querySelector('source')?.removeAttribute('src'); video.load(); });
  return root;
}

export function narrationDownloads(paths) {
  const root = h('div', { class: 'card mt-3 px-4 py-3' });
  const status = h('p', { class: 'small mt-2', role: 'status' });
  const select = h('select', { class: 'w-full rounded-brand border border-line bg-card px-3 py-2 text-ink', 'aria-label': t({ en: 'Narration path', tl: 'Path ng salaysay' }) },
    paths.map(p => h('option', { value: p.id, selected: p.id === get().band }, t(p.title))));
  const button = h('button', { class: 'btn-ghost mt-2 w-full', onclick: async () => {
    button.disabled = true;
    const lang = get().lang, selected = select.value;
    try {
      const clips = Object.values(await narrationManifest()).filter(v => (v.paths || [v.path]).includes(selected) && v.lang === lang);
      if (!clips.length) throw new Error('No narration');
      const cache = await caches.open(mediaCacheName());
      let complete = 0;
      for (const clip of clips) {
        const request = new Request(new URL(assetPath(clip.src), location.origin));
        if (!await cache.match(request)) await cache.add(request);
        status.textContent = `${++complete} / ${clips.length}`;
      }
      status.textContent = t({ en: 'Narration saved for offline listening.', tl: 'Na-save ang salaysay para mapakinggan offline.' });
    } catch { status.textContent = t({ en: 'Download paused. Check your connection and storage, then try again to resume.', tl: 'Na-pause ang download. Tingnan ang koneksyon at storage, tapos subukan muli para ituloy.' }); }
    button.disabled = false;
  } }, t({ en: 'Save narration offline', tl: 'I-save ang salaysay offline' }));
  root.append(select, button, status);
  return root;
}
