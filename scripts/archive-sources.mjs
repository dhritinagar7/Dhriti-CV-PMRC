/**
 * Archive every URL a piece cites, so the citations survive the sources.
 *   npm run commentary:archive one-scarcity-three-markets
 *   npm run commentary:archive --all
 *
 * Government PDFs move, press releases get pulled, judgments disappear behind
 * paywalls. Submitting each cited URL to the Internet Archive on the day you
 * publish is the difference between a citation and a dead link.
 *
 * Polite by design: one request at a time, with a pause between.
 */
import { readFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = new URL('..', import.meta.url);
const dir = fileURLToPath(new URL('src/content/commentary/', root));

const arg = process.argv[2];
if (!arg) {
  console.error('Usage: npm run commentary:archive <slug>   (or --all)');
  process.exit(1);
}

const files =
  arg === '--all'
    ? (await readdir(dir)).filter((f) => f.endsWith('.html'))
    : [`${arg.replace(/\.html$/, '')}.html`];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let ok = 0;
let failed = 0;

for (const file of files) {
  let html;
  try {
    html = await readFile(`${dir}${file}`, 'utf8');
  } catch {
    console.error(`Cannot read ${file}`);
    process.exit(1);
  }

  const urls = [
    ...new Set(
      [...html.matchAll(/href="(https?:\/\/[^"]+)"/g)]
        .map((m) => m[1])
        .filter((u) => !u.includes('web.archive.org')),
    ),
  ];

  console.log(`\n${file} — ${urls.length} external source${urls.length === 1 ? '' : 's'}\n`);

  for (const url of urls) {
    try {
      const res = await fetch(`https://web.archive.org/save/${url}`, {
        method: 'GET',
        redirect: 'follow',
        headers: { 'User-Agent': 'commentary-archiver (+personal site)' },
      });
      if (res.ok) {
        console.log(`  archived  ${url}`);
        ok++;
      } else {
        console.log(`  HTTP ${res.status}  ${url}`);
        failed++;
      }
    } catch (err) {
      console.log(`  failed    ${url}  (${err.message})`);
      failed++;
    }
    await sleep(6000); // the Wayback save endpoint rate-limits hard
  }
}

console.log(`\nDone. ${ok} archived, ${failed} failed.`);
if (failed) {
  console.log('Retry the failures later, or save them by hand at web.archive.org/save');
}
