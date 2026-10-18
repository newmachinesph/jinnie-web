import { h, icons } from './ui.js';
import { t, u } from './i18n.js';
import { embedMode } from './embed.js';

const apps = new Set(['wallet', 'budget', 'accounts', 'credit', 'debts', 'circles', 'remit', 'goals', 'bills']);

// Optional, explicit host contract. A standalone tab never pretends to post data.
export async function openInHost(app, label) {
  if (!apps.has(app)) return false;
  if (typeof window.JinnieLearnHost?.openApp === 'function') {
    try { return await window.JinnieLearnHost.openApp(app) !== false ? 'open' : false; }
    catch { /* Show the standalone explanation below. */ }
  }
  const dialog = h('dialog', { class: 'host-dialog' });
  const close = () => { dialog.close(); dialog.remove(); };
  dialog.append(h('div', { class: 'flex items-center justify-between gap-3' },
    h('h2', { class: 'h2' }, t(label)),
    h('button', { class: 'btn-ghost px-2 py-2', 'aria-label': u('close'), onclick: close, html: icons.close })),
    h('p', { class: 'body mt-3' }, t({ en: 'This action needs the Jinnie app. Your learning progress stays saved here. You can continue the lesson.', tl: 'Kailangan ng aksyong ito ang Jinnie app. Naka-save dito ang progreso mo. Maaari mong ituloy ang aralin.' })),
    h('button', { class: 'btn-primary mt-4 w-full', onclick: close }, u('continue')));
  dialog.addEventListener('cancel', () => dialog.remove());
  document.body.append(dialog); dialog.showModal();
  return false;
}

let installPrompt;
if (typeof window !== 'undefined') window.addEventListener('beforeinstallprompt', event => { event.preventDefault(); installPrompt = event; });
export function installControl() {
  if (embedMode === 'web' || embedMode === 'native') return null;
  if (window.matchMedia('(display-mode: standalone)').matches) return null;
  const status = h('p', { class: 'small mt-2', role: 'status' });
  return h('div', { class: 'mt-3' }, h('button', { class: 'btn-ghost w-full', onclick: async () => {
    if (installPrompt) { await installPrompt.prompt(); await installPrompt.userChoice; installPrompt = null; }
    else status.textContent = t({ en: 'Open your browser menu and choose Install app or Add to Home Screen.', tl: 'Buksan ang menu ng browser at piliin ang Install app o Add to Home Screen.' });
  } }, t({ en: 'Install Jinnie Learn', tl: 'I-install ang Jinnie Learn' })), status);
}
