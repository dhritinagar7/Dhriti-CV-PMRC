# Dhriti Nagar — personal website and extended CV

A fast, restrained personal website built as an extended CV: who she is, the
research, the vision, a curated selection of work, a full web CV, and contact.
Built with [Astro](https://astro.build) (near-zero JavaScript), hand-written
CSS with design tokens, self-hosted fonts, and a privacy-first posture (no
tracking by default).

- **Home** (`/`): hero, about, research, vision and values, selected work, contact.
- **CV** (`/cv`): the full web CV, prints cleanly, with a PDF download.

---

## Quick start (local development)

Requires Node 18+ (built and tested on Node 22).

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # preview the production build locally
```

---

## Where to edit content

Almost everything lives in two plain files. You do not need to touch any layout.

### 1. `src/config/site.ts` — identity, links, images, SEO, accent, analytics

One file holds every placeholder: name, tagline, vision line, email, social
links, images, the optional ventures link, the canonical domain, and the
analytics toggle. Search it for `TODO` to find anything that still needs a real
value (also listed under "Before you publish" below).

The hero copy, about/research/vision prose live in their components in
`src/components/` (`About.astro`, `Research.astro`, `Vision.astro`). They are
written as plain readable text; edit between the tags.

### 2. `src/data/cv.ts` — the structured CV

Education, positions, publications, patents, talks, honors, teaching, and
service are plain lists of objects. To add a publication, copy an existing
block and edit the fields. Set `selected: true` to surface an item in the
curated "Selected work" section on the home page.

- Author names matching `ME` (`Nagar D`) are bolded automatically.
- House style: no em dashes anywhere. Use commas, colons, periods, or
  parentheses. Year ranges read "2015 to 2021".

---

## Patents

Per the brief ("do not name proprietary platforms anywhere"), the patent titles
in `src/data/cv.ts` have platform acronyms removed and filing numbers omitted.
These are public filings, so if you would rather show the full public titles and
application numbers, edit the strings in the `PATENTS` array. That is the only
change needed.

---

## Swapping the accent colour

Two palettes ship, both swappable by editing a few lines in
`src/styles/global.css`. The default is **dawn** (a warm saffron, a quiet nod to
a sunrise and to India). The alternate is **depth** (a deep teal).

In `:root` (light mode), find:

```css
--accent: #b35a10;        /* deep saffron, passes AA on paper */
--accent-bright: #e08a1e; /* decorative only */
--accent-contrast: #ffffff;
```

To switch to **depth**, replace those with:

```css
--accent: #0e6b64;
--accent-bright: #2f9d93;
--accent-contrast: #ffffff;
```

and in the `:root[data-theme='dark']` block (and the `prefers-color-scheme:
dark` block) set `--accent: #4fbdb4; --accent-bright: #6fd0c6;`. The sunrise
mark, links, and the OG image all follow the variables. If you change the accent,
regenerate the social card (see below) so it matches.

## Swapping fonts

Headings use **Fraunces** (serif), body uses **Inter**, both self-hosted via
`@fontsource-variable/*` and imported in `src/layouts/Base.astro`. To change a
font, install another `@fontsource-variable/<name>` package, swap the import,
and update `--font-serif` or `--font-sans` in `src/styles/global.css`. System
fallbacks are already in the stacks, so the site stays fast before fonts load.

## Dark mode

Respects the operating system preference by default, with a manual toggle in the
nav. The choice is remembered in `localStorage` and applied before paint, so
there is no flash.

---

## Images and the social share card

- **Headshot** (optional): the hero shows the sunrise mark by default. To add a
  circular portrait, drop a square photo in `public/` (at least 600x600, WebP or
  JPG) and set `headshot` in `src/config/site.ts` to its path.
- **Social share card** (`public/og.png`, 1200x630): generated from
  `scripts/og-source.svg`. To regenerate after editing the SVG or the accent:

  ```bash
  node scripts/gen-og.mjs
  ```

---

## Deploying to Vercel

This is a static Astro site. Vercel auto-detects the framework.

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com) → **Add New** → **Project** → import the repo.
3. Framework preset: **Astro** (auto-detected). Build command `astro build`,
   output directory `dist`. No environment variables needed.
4. Deploy. Every push redeploys automatically.

One-command local production build: `npm run build` (output in `dist/`). The
site also deploys cleanly to Netlify or Cloudflare Pages with the same build
command and output directory.

### Custom domain and DNS

1. In Vercel → Project → **Settings** → **Domains**, add your domain
   (default assumed: `dhritinagar.com`).
2. At your registrar, point the domain at Vercel:
   - Apex (`dhritinagar.com`): an `A` record to `76.76.21.21`, or follow
     Vercel's current instructions shown in the dashboard.
   - `www`: a `CNAME` to `cname.vercel-dns.com`.
3. Update `url` and `domain` in `src/config/site.ts` to the final domain so the
   canonical tags, sitemap, and Open Graph URLs are correct, then redeploy.

---

## Analytics (off by default)

No tracking ships. To enable privacy-respecting, cookieless analytics, set
`analytics.enabled: true` and the `domain` in `src/config/site.ts` (defaults to
a Plausible script; swap `src`/`provider` for another cookieless provider).

---

## Accessibility and performance

- Semantic HTML, correct heading order, visible focus states, keyboard
  navigable, skip link, alt text, and reduced-motion support are built in.
- Near-zero JavaScript (a tiny theme toggle and a scroll-reveal observer, both
  progressive enhancements; the site reads fully with JS or CSS disabled).
- SEO: per-page title and description, Open Graph and Twitter cards, generated
  social image, `sitemap-index.xml`, `robots.txt`, and JSON-LD `Person` data.

---

## Before you publish

Set each of these (all live in `src/config/site.ts` unless noted). Search the
config for `TODO`.

- [ ] **Domain**: set `url` and `domain` to the final custom domain. Update the
      `Sitemap:` line in `public/robots.txt` to match.
- [ ] **LinkedIn**: confirm the handle in `linkedin` (and the display text in
      `src/components/Contact.astro` if it differs).
- [ ] **Google Scholar**: add `scholar` (the profile URL). Empty hides it.
- [ ] **ORCID**: add `orcid` (full `https://orcid.org/...` URL). Empty hides it.
- [ ] **GitHub / X**: optional, add `github` / `twitter` or leave empty to hide.
- [ ] **Headshot**: optional. Add a photo to `public/` and set `headshot`.
- [ ] **Ventures link**: when the separate ventures site exists, set
      `venturesUrl` to reveal the one-line acknowledgement in the Vision section.
- [ ] **Social card**: confirm `public/og.png` reads well; regenerate with
      `node scripts/gen-og.mjs` after any accent or copy change.
- [ ] **CV PDF**: `public/Dhriti_Nagar_CV.pdf` ships; replace with the latest
      version when it changes.
- [ ] **Patents**: decide whether to keep generic titles or restore full public
      titles in `src/data/cv.ts` (see "Patents" above).
- [ ] **Analytics**: leave off, or opt in via `analytics.enabled`.

---

## Project structure

```
public/                 static assets (PDFs, favicon, og.png, robots.txt)
scripts/                og-source.svg + gen-og.mjs (social card generator)
src/
  config/site.ts        all placeholders, links, accent, analytics, nav
  data/cv.ts            structured CV content
  styles/global.css     design tokens (colour, type, spacing) + base styles
  layouts/Base.astro    <head>, SEO, JSON-LD, theme bootstrap, font imports
  components/            Nav, Hero, About, Research, Vision, SelectedWork, Contact, Footer
  pages/
    index.astro         home (single-page sections)
    cv.astro            web CV with print stylesheet
  utils/authors.ts      bolds the author's name in citation lists
astro.config.mjs        site URL + sitemap integration
vercel.json             clean URLs
```
