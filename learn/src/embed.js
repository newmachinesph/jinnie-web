// Narrow adapter for the first-party Jinnie WebView. Website embeds stay local.
export function createNativeBridge(win) {
  if (!win || new URLSearchParams(win.location?.search || '').get('embed') !== 'native' || typeof win.ReactNativeWebView?.postMessage !== 'function') return null;
  let sequence = 0;
  const pending = new Map();
  const receive = event => {
    const message = event.detail;
    if (!message || typeof message.id !== 'string' || typeof message.ok !== 'boolean') return;
    const entry = pending.get(message.id);
    if (!entry) return;
    pending.delete(message.id); win.clearTimeout(entry.timer);
    if (message.ok) entry.resolve(message.value);
    else entry.reject(new Error(typeof message.error === 'string' ? message.error : 'Jinnie request failed'));
  };
  win.addEventListener('jinnie-learn-response', receive);
  return {
    request(type, payload = {}) {
      return new Promise((resolve, reject) => {
        const id = `learn-${Date.now().toString(36)}-${++sequence}`;
        const timer = win.setTimeout(() => { pending.delete(id); reject(new Error('Jinnie request timed out')); }, type === 'saveFile' ? 120000 : 10000);
        pending.set(id, { resolve, reject, timer });
        try { win.ReactNativeWebView.postMessage(JSON.stringify({ source: 'jinnie-learn', id, type, payload })); }
        catch (error) { pending.delete(id); win.clearTimeout(timer); reject(error); }
      });
    },
    dispose() {
      win.removeEventListener('jinnie-learn-response', receive);
      for (const entry of pending.values()) { win.clearTimeout(entry.timer); entry.reject(new Error('Jinnie view closed')); }
      pending.clear();
    },
  };
}

export const embedMode = typeof window === 'undefined' ? null : new URLSearchParams(window.location.search).get('embed');
const bridge = createNativeBridge(typeof window === 'undefined' ? null : window);
let hydrated = false, queued = null, saving = null;

export async function initialNativeState() {
  if (!bridge) return undefined;
  // A native view must load the authoritative progress before allowing saves.
  // Let the provider offer a retry instead of silently opening an unsynced copy.
  hydrated = false;
  const value = await bridge.request('ready');
  if (value !== null && typeof value !== 'string') throw new Error('Invalid stored progress');
  if (value !== null) {
    const parsed = JSON.parse(value);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error('Invalid stored progress');
  }
  hydrated = true;
  return value;
}

export function persistNativeState(state) {
  if (!bridge || !hydrated) return;
  queued = JSON.stringify(state);
  if (!saving) startDrain();
}
function startDrain() {
  saving = drain().then(saved => {
    saving = null;
    window.dispatchEvent(new window.CustomEvent('jinnie-learn-save-status', { detail: { saved } }));
    // Do not loop on failure. A later mutation or explicit retry can try again.
    if (saved && queued !== null && !saving) startDrain();
    return saved;
  });
}
async function drain() {
  while (queued !== null) {
    const state = queued; queued = null;
    try { await bridge.request('saveState', { state }); }
    catch {
      // A mutation made while this save was pending is the latest full snapshot.
      if (queued === null) queued = state;
      return false;
    }
  }
  return true;
}
export async function flushNativeState() {
  let ok = true;
  while (saving) ok = (await saving) && ok;
  return ok && queued === null;
}
export async function retryNativeSave() {
  if (!bridge) return true;
  if (!hydrated) return false;
  if (!saving && queued !== null) startDrain();
  return flushNativeState();
}

if (bridge) {
  window.JinnieLearnHost = {
    async openApp(app) {
      if (!await flushNativeState()) throw new Error('Learning progress could not be saved. Please retry.');
      return bridge.request('openApp', { app });
    },
  };
}

export async function saveNativeFile(blob, name) {
  if (!bridge) return false;
  try {
    if (blob.size > 4_000_000) throw new Error('File too large');
    const bytes = new Uint8Array(await blob.arrayBuffer());
    let binary = '';
    for (let offset = 0; offset < bytes.length; offset += 16384) binary += String.fromCharCode(...bytes.subarray(offset, offset + 16384));
    await bridge.request('saveFile', { name, mime: blob.type.split(';')[0], base64: btoa(binary) });
  } catch {
    window.alert(document.documentElement.lang === 'fil' ? 'Hindi na-save ang file. Subukan muli.' : 'Could not save the file. Please try again.');
  }
  return true;
}
