import { watch } from 'node:fs';
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';

const require = createRequire(import.meta.url);
const root = fileURLToPath(new URL('../', import.meta.url));
const course = fileURLToPath(new URL('../learn/', import.meta.url));
let building = false;
let pending = false;
let closing = false;
let timer;
let next;
let buildChild;
const watchers = [];
const childOptions = {
  cwd: root, stdio: 'inherit', windowsHide: true,
  // A separate process group lets shutdown include npm/Next descendants.
  detached: process.platform !== 'win32',
};

function buildCourse() {
  return new Promise((resolve, reject) => {
    // Fixed command; no user arguments or file names enter the shell.
    const options = { ...childOptions, stdio: ['ignore', 'inherit', 'inherit'] };
    const child = process.platform === 'win32'
      ? spawn(process.env.ComSpec || 'cmd.exe', ['/d', '/s', '/c', 'npm run build:learn'], options)
      : spawn('npm', ['run', 'build:learn'], options);
    buildChild = child;
    child.once('error', reject);
    child.once('close', (code, signal) => {
      if (buildChild === child) buildChild = undefined;
      if (code === 0) resolve();
      else reject(new Error(`Course build exited with ${signal ?? code}`));
    });
  });
}

async function rebuild() {
  if (closing) return false;
  if (building) { pending = true; return; }
  building = true;
  let success = false;
  try {
    do {
      pending = false;
      try {
        await buildCourse();
        success = true;
        if (!closing) console.log('Learn media published. Next.js refreshes application and lesson source changes.');
      } catch (error) {
        success = false;
        if (!closing) console.error(error);
      }
      // Edits during a failed build still need their own attempt.
    } while (pending && !closing);
  } finally {
    building = false;
  }
  return success;
}

function scheduleBuild() {
  if (closing) return;
  pending = true;
  clearTimeout(timer);
  if (building) return;
  timer = setTimeout(rebuild, 300);
}

async function stopChild(child) {
  if (!child?.pid || child.exitCode !== null || child.signalCode !== null) return;
  if (process.platform === 'win32') {
    // Kill only a process tree launched by this script. Killing cmd.exe alone
    // leaves npm, Tailwind, or Next running after Ctrl+C.
    await new Promise(resolve => {
      const killer = spawn('taskkill.exe', ['/PID', String(child.pid), '/T', '/F'], {
        stdio: 'ignore', windowsHide: true,
      });
      killer.once('error', () => { child.kill(); resolve(); });
      killer.once('close', resolve);
    });
  } else {
    try { process.kill(-child.pid, 'SIGTERM'); } catch (error) {
      if (error.code !== 'ESRCH') console.error(error);
    }
    await delay(500);
    try { process.kill(-child.pid, 'SIGKILL'); } catch (error) {
      if (error.code !== 'ESRCH') console.error(error);
    }
  }
}

async function cleanup(code = 0) {
  if (closing) return;
  closing = true;
  process.exitCode = code;
  clearTimeout(timer);
  for (const watcher of watchers) watcher.close();
  await Promise.all([stopChild(next), stopChild(buildChild)]);
}
process.once('SIGINT', () => void cleanup(130));
process.once('SIGTERM', () => void cleanup(143));

try {
  // Do not recursively watch learn/node_modules or generated .tmp output.
  for (const directory of ['assets']) {
    watchers.push(watch(join(course, directory), { recursive: true }, scheduleBuild));
  }
  for (const watcher of watchers) watcher.on('error', error => {
    console.error(error);
    void cleanup(1);
  });

  if (await rebuild()) {
    if (!closing) {
      next = spawn(process.execPath, [require.resolve('next/dist/bin/next'), 'dev', ...process.argv.slice(2)], childOptions);
      next.once('error', error => { console.error(error); void cleanup(1); });
      next.once('close', code => { if (!closing) void cleanup(code ?? 1); });
    }
  } else if (!closing) await cleanup(1);
} catch (error) {
  if (!closing) { console.error(error); await cleanup(1); }
}
