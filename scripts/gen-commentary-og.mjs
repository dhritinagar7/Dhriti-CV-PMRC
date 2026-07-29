/**
 * Generate a 1200x630 share card per commentary piece.
 *
 * This is the difference between a LinkedIn post that renders as a bare URL
 * and one that renders as a titled card. Run after adding or retitling a
 * piece:  npm run commentary:og
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { PUBLISHED } from '../src/data/commentary.ts';
import { SITE } from '../src/config/site.ts';

const root = new URL('..', import.meta.url);
const outDir = fileURLToPath(new URL('public/og/commentary/', root));
await mkdir(outDir, { recursive: true });

const PAPER = '#fbfbf9';
const INK = '#14140f';
const SOFT = '#4c4c44';
const FIELD = '#ffd100';
const ON_FIELD = '#14140f';
const OCHRE = '#6e5400';

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Greedy wrap at an approximate character width for the given font size. */
function wrap(text, maxChars, maxLines) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let line = '';
  for (const w of words) {
    const next = line ? `${line} ${w}` : w;
    if (next.length > maxChars && line) {
      lines.push(line);
      line = w;
      if (lines.length === maxLines) break;
    } else {
      line = next;
    }
  }
  if (lines.length < maxLines && line) lines.push(line);
  if (lines.length === maxLines && words.join(' ').length > lines.join(' ').length) {
    lines[maxLines - 1] = lines[maxLines - 1].replace(/[.,;:]?$/, '…');
  }
  return lines;
}

function card(piece) {
  const titleLines = wrap(piece.title, 26, 3);
  const standLines = wrap(piece.standfirst, 62, 4);
  const titleSize = titleLines.length > 2 ? 74 : 88;

  const title = titleLines
    .map((l, i) => `<tspan x="80" dy="${i === 0 ? 0 : titleSize * 0.98}">${esc(l)}</tspan>`)
    .join('');
  const stand = standLines
    .map((l, i) => `<tspan x="80" dy="${i === 0 ? 0 : 34}">${esc(l)}</tspan>`)
    .join('');

  const titleTop = 210;
  const standTop = titleTop + titleLines.length * titleSize * 0.98 + 40;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${PAPER}"/>
  <rect x="80" y="72" width="1040" height="5" fill="${INK}"/>
  <rect x="80" y="96" width="${16 + esc(piece.kicker).length * 12.4}" height="30" fill="${FIELD}"/>
  <text x="${89}" y="117" font-family="Inter, Helvetica, Arial, sans-serif" font-size="16"
        font-weight="700" letter-spacing="2.1" fill="#ffffff">${esc(piece.kicker.toUpperCase())}</text>
  <rect x="80" y="140" width="1040" height="1" fill="${INK}" opacity="0.25"/>

  <text y="${titleTop}" font-family="Inter, Helvetica, Arial, sans-serif" font-size="${titleSize}"
        font-weight="700" letter-spacing="-3" fill="${INK}">${title}</text>

  <text y="${standTop}" font-family="Inter, Helvetica, Arial, sans-serif" font-size="26"
        font-weight="400" fill="${SOFT}">${stand}</text>

  <rect x="80" y="516" width="1040" height="1" fill="${INK}" opacity="0.25"/>
  <text x="80" y="556" font-family="Inter, Helvetica, Arial, sans-serif" font-size="24"
        font-weight="700" fill="${INK}">${esc(SITE.name)}</text>
  <text x="80" y="586" font-family="Inter, Helvetica, Arial, sans-serif" font-size="19"
        fill="${SOFT}">${esc(SITE.domain)}</text>
  <text x="1120" y="556" text-anchor="end" font-family="Inter, Helvetica, Arial, sans-serif"
        font-size="19" font-weight="700" letter-spacing="1.6" fill="${OCHRE}">${esc(piece.readingTime.toUpperCase())}</text>
  <text x="1120" y="586" text-anchor="end" font-family="Inter, Helvetica, Arial, sans-serif"
        font-size="19" fill="${SOFT}">${esc(piece.date)}</text>
</svg>`;
}

let n = 0;
for (const piece of PUBLISHED) {
  const svg = Buffer.from(card(piece));
  const out = `${outDir}${piece.slug}.png`;
  await sharp(svg, { density: 144 }).resize(1200, 630).png().toFile(out);
  console.log('Wrote', out);
  n++;
}
console.log(`\n${n} share card${n === 1 ? '' : 's'} generated.`);
