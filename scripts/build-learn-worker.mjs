import { readdir, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
async function walk(directory, prefix = '') {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const relative = `${prefix}${entry.name}`;
    if (entry.isDirectory()) result.push(...await walk(join(directory, entry.name), relative + '/'));
    else if (/\.(js|css|woff2?)$/.test(entry.name)) result.push(relative);
  }
  return result.sort();
}
const files = await walk(join(root, '.next/static'));
const source = await readFile(join(root, 'learn/sw-next.js'), 'utf8');
const media = await readFile(join(root, 'public/learn-assets/build-info.json'), 'utf8');
const digest = createHash('sha256').update(source).update(media);
for (const file of files) digest.update(file).update(await readFile(join(root, '.next/static', file)));
const release = digest.digest('hex').slice(0, 16);
await writeFile(join(root, 'public/learn-sw.js'), source.replace('__LEARN_RELEASE__', release).replace('/* __NEXT_STATIC__ */ []', JSON.stringify(files.map(file => '/_next/static/' + file))));
console.log(`Next Learn offline worker ${release}: ${files.length} compiled resources + essential artwork and media indexes.`);
