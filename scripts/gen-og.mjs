// Rasterize scripts/og-source.svg to public/og.png (1200x630).
// Run: node scripts/gen-og.mjs   (requires sharp, which Astro already pulls in)
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = new URL('..', import.meta.url);
const src = fileURLToPath(new URL('scripts/og-source.svg', root));
const out = fileURLToPath(new URL('public/og.png', root));

const svg = await readFile(src);
await sharp(svg, { density: 144 }).resize(1200, 630).png().toFile(out);
console.log('Wrote', out);
