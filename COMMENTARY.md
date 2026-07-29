# Publishing commentary

A regularly published, long-form commentary section that lives on your own
domain, keeps its canonical URL, and syndicates outward. Everything here is
part of the existing Astro site; there is no second platform to maintain.

---

## The shape of it

| Thing | Where |
|---|---|
| Metadata for every piece | `src/data/commentary.ts` |
| The prose of a piece | `src/commentary/<slug>.html` |
| Layout, masthead, colophon | `src/pages/commentary/[slug].astro` |
| The index | `src/pages/commentary/index.astro` |
| RSS feed | `src/pages/commentary/rss.xml.ts` → `/commentary/rss.xml` |
| Styling | `src/styles/commentary.css` |
| Signup form | `src/components/Subscribe.astro` |
| Share cards | `public/og/commentary/<slug>.png` |

A piece file is a **body fragment only** — no `<head>`, no `<style>`, no
masthead. That is deliberate: the prose is content, the chrome is the site's
job, and keeping them apart is what lets you restyle everything at once later.

The commentary layout is built entirely from the design tokens in
`global.css`. It inherits the cobalt accent and dark mode for free. If you
change `--accent` in one place, the commentary changes with it.

---

## Publishing a piece

```bash
npm run commentary:new "One scarcity, three markets"
```

This creates `src/commentary/one-scarcity-three-markets.html` and prints the
metadata block to paste into `src/data/commentary.ts`.

Then:

1. **Paste the body** into the `.html` file — everything from the opening
   `<div class="intro">` to the closing `<footer>`.
2. **Fill in the metadata** in `src/data/commentary.ts`: standfirst, kicker,
   reading time, and anything still unresolved. Set `draft: false`.
3. **Generate the share card** — `npm run commentary:og`
4. **Archive the sources** — `npm run commentary:archive one-scarcity-three-markets`
5. **Preview** — `npm run dev`, then open `/commentary/<slug>`
6. **Push.** Vercel deploys.

### Before you push, check

- [ ] The piece has been fact-checked against primary sources
- [ ] The equity review has been run
- [ ] Every source in the list resolves, and has been archived
- [ ] The share card reads well — open the PNG and look at it
- [ ] It renders at 390px as well as on a laptop

---

## Corrections

Corrections are logged on the piece, not edited in silently. Add to the
`corrections` array in `src/data/commentary.ts`:

```ts
corrections: [
  {
    date: '2026-08-02',
    note: 'The ED attached ₹5.34 crore, not ₹9.71 crore. The larger figure is the cumulative value of assets seized, frozen and attached across the investigation. Corrected in entry 02.',
  },
],
```

The corrections block renders automatically. When there are none, the piece
says so and invites them. For a substantive revision, also set `updated`.

**Never change a `slug` once published.** It is a permanent address, and
other people's citations depend on it.

---

## The email list

[Buttondown](https://buttondown.com) — free to 100 subscribers, exportable
at any time, no lock-in.

1. Create the account and pick a username.
2. Put that username in `newsletter.handle` in `src/config/site.ts`. The form
   appears on the index and under every piece; leave it `''` and it vanishes.
3. To send new pieces automatically, point Buttondown's RSS-to-email at
   `https://<your-domain>/commentary/rss.xml`. That is a paid add-on; until
   then, paste.

The list is the only part of this that no platform can take away. Everything
else — search ranking, LinkedIn reach — is rented.

---

## Syndication

**Publish on your domain first.** Let it sit a day before posting elsewhere.
Whatever URL is indexed first tends to be treated as the source.

**On LinkedIn, post natively — do not republish as an Article.** LinkedIn
will not let you set a canonical tag pointing back here, so a full-text
Article competes with your own piece for the same readers. Post 150–250
words carrying the actual argument (not a teaser) plus the link. The share
card does the rest.

A LinkedIn Newsletter is worth running as a *version*, never as the home.

**Archive what you cite.** `npm run commentary:archive <slug>` submits every
external URL in a piece to the Internet Archive. Government PDFs move, press
releases get pulled, judgments vanish behind paywalls. Run it on publication
day, every time.

---

## Costs

| | |
|---|---|
| Domain | ~$12/year |
| Vercel | free at this scale |
| Buttondown | free to 100 subscribers |
| **Total, year one** | **about $12** |
