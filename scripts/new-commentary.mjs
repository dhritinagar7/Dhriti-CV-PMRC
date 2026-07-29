/**
 * Scaffold a new commentary piece.
 *   npm run commentary:new "One scarcity, three markets"
 *
 * Creates the empty body fragment and prints the entry to paste into
 * src/data/commentary.ts. It never edits that file for you, because the
 * metadata is a decision, not boilerplate.
 */
import { writeFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const title = process.argv.slice(2).join(' ').trim();
if (!title) {
  console.error('Usage: npm run commentary:new "Your title here"');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .replace(/['’"]/g, '')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');

const root = new URL('..', import.meta.url);
const path = fileURLToPath(new URL(`src/content/commentary/${slug}.html`, root));

try {
  await access(path);
  console.error(`\n${slug}.html already exists. Pick another title or edit that file.`);
  process.exit(1);
} catch {}

const today = new Date().toISOString().slice(0, 10);

await writeFile(
  path,
  `<!--
  ${title}

  Paste the commentary body fragment here: everything from <div class="intro">
  to the closing <footer>. Do NOT include a <head>, a <header class="mast">,
  or any <style> — the page supplies all of that from src/data/commentary.ts
  and src/styles/commentary.css.
-->

<div class="intro">
  <p class="lede"></p>
</div>
`,
  'utf8',
);

console.log(`\nCreated  src/content/commentary/${slug}.html`);
console.log('\nNow add this to the COMMENTARY array in src/data/commentary.ts:\n');
console.log(`  {
    slug: '${slug}',
    title: '${title.replace(/'/g, "\\'")}',
    standfirst: '',
    date: '${today}',
    rail: ['Commentary', '', ''],
    kicker: '',
    readingTime: '',
    unresolved: [],
    corrections: [],
    draft: true,
  },`);
console.log(`
Then:
  npm run dev                        preview at /commentary/${slug}
  npm run commentary:og              regenerate share cards
  npm run commentary:archive ${slug}
`);
