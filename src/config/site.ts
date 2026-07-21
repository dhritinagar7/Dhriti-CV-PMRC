/**
 * SITE CONFIG: edit everything here in one place.
 *
 * This file holds every placeholder for the site: identity, links, images,
 * SEO, the accent colour, and the toggle for optional analytics.
 *
 * Anything still marked TODO is listed in the README under
 * "Before you publish". Search this file for "TODO" to find them all.
 */

export const SITE = {
  /* ---- Identity ------------------------------------------------------- */
  name: 'Dhriti Nagar',
  // Shown after the name in some contexts, e.g. "Dhriti Nagar, PhD".
  credential: 'PhD',
  // One-line identity. Appears in meta tags and the About/CV. No em dashes.
  tagline: 'Developmental neuroscientist and stem cell biologist',
  // The big hero headline. The part in {curly braces} is set in the cobalt
  // accent. Keep it short and confident. No em dashes.
  heroStatement: 'Human models of the {developing brain}, built to understand disease and heal it.',
  // One-sentence vision. Appears under the tagline in the hero.
  visionLine:
    'Building human models of the developing brain to understand disease and bring better therapies to the children who need them.',

  /* ---- Canonical URL & domain ---------------------------------------- */
  // The live URL of the site, no trailing slash. Used for SEO and sitemap.
  // TODO: set this to the real custom domain once it is live.
  url: 'https://dhritinagar.com',
  // Human-readable domain shown in places like the footer.
  domain: 'dhritinagar.com',

  /* ---- Contact & social links ---------------------------------------- */
  // Leave a link as an empty string ('') to hide it everywhere.
  email: 'dhritinagar7@gmail.com',
  emailAcademic: 'dhriti@stanford.edu',
  // TODO: confirm the public LinkedIn handle.
  linkedin: 'https://www.linkedin.com/in/dhritinagar',
  // TODO: add the Google Scholar profile URL.
  scholar: '',
  // TODO: add the ORCID iD URL, e.g. https://orcid.org/0000-0000-0000-0000
  orcid: '',
  // Optional. Leave '' to hide.
  github: '',
  twitter: '',
  // bioRxiv / preprint or lab page, optional.
  lab: 'https://braintherapeuticslab.org',

  /* ---- Ventures (light touch only) ----------------------------------- */
  // Her commercial work lives on a separate site she will build later.
  // Leave '' until that site exists; when set, one quiet link appears in
  // the Vision section. No company or product names anywhere on this site.
  venturesUrl: '',

  /* ---- Images --------------------------------------------------------- */
  // Files live in /public. Replace the placeholders with real assets.
  // The hero shows the sunrise mark by default. To overlay a circular
  // portrait, drop a square photo in /public (at least 600x600, WebP or
  // JPG) and set `headshot` to its path, e.g. '/headshot.jpg'.
  // TODO: add a real headshot and set the path here (optional).
  headshot: '',
  headshotAlt: 'Portrait of Dhriti Nagar',
  // TODO: add a real 1200x630 social share image (PNG or JPG) if you want
  // a photo-based card. A generated card ships at /og.svg by default.
  ogImage: '/og.png',

  /* ---- Downloads ------------------------------------------------------ */
  cvPdf: '/Dhriti_Nagar_CV.pdf',
  microProposalPdf: '/Dhriti_Nagar_MicroProposal.pdf',

  /* ---- Analytics (off by default, privacy-respecting only) ----------- */
  // Set `enabled: true` and a Plausible-style domain to switch on a
  // cookieless, no-tracking analytics script. Off until you opt in.
  analytics: {
    enabled: false,
    provider: 'plausible' as const,
    domain: 'dhritinagar.com',
    src: 'https://plausible.io/js/script.js',
  },

  /* ---- Location (for the JSON-LD Person record) ---------------------- */
  affiliation: 'Stanford University',
  jobTitle: 'Postdoctoral Research Scholar',
} as const;

/**
 * The audience router shown in the hero. Quiet text links that scroll to
 * the section each visitor came for. Edit labels or targets here.
 */
export const AUDIENCES = [
  { label: 'For researchers', href: '#research' },
  { label: 'For investors', href: '#research' },
  { label: 'For policy and government', href: '#vision' },
  { label: 'Just curious', href: '#about' },
] as const;

/**
 * Primary navigation. Order is left to right.
 */
export const NAV = [
  { label: 'About', href: '/#about' },
  { label: 'Research', href: '/#research' },
  { label: 'Vision', href: '/#vision' },
  { label: 'Selected work', href: '/#work' },
  { label: 'CV', href: '/cv' },
  { label: 'Contact', href: '/#contact' },
] as const;
