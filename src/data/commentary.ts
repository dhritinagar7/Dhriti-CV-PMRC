/**
 * COMMENTARY INDEX — edit everything about a piece here.
 *
 * One entry per published piece. The prose itself lives as an HTML fragment
 * at `src/commentary/<slug>.html`, which is exactly what the
 * commentary-swiss workflow produces. The page chrome (masthead, byline,
 * canonical URL, Open Graph card, RSS entry) is generated from this file,
 * so a piece never carries its own <head>.
 *
 * To publish:
 *   1. npm run commentary:new "Your title"      -> scaffolds both files
 *   2. paste the body fragment into the .html file
 *   3. fill in the entry below, set `draft: false`
 *   4. npm run commentary:og                    -> regenerates share cards
 *   5. npm run commentary:archive <slug>        -> archives every cited URL
 *   6. git push                                 -> Vercel deploys
 */

export interface Correction {
  /** ISO date the correction was made. */
  date: string;
  /** What was wrong and what it now says. Written for a reader, not a log. */
  note: string;
}

export interface Commentary {
  /** URL segment. Never change this once published — it is a permanent address. */
  slug: string;
  title: string;
  /** The standfirst. One or two sentences. Also used as the meta description. */
  standfirst: string;
  /** ISO date of first publication. */
  date: string;
  /** ISO date of the last substantive revision, if any. */
  updated?: string;
  /** Kicker rail, left to right. First item is set in the accent colour. */
  rail: readonly string[];
  /** Short label for the index and the share card. */
  kicker: string;
  /** Roughly how long it takes to read. Shown in the index. */
  readingTime: string;
  /**
   * Anything still unsettled at the time of writing. Rendered in the colophon.
   * Being explicit here is part of the method, not a disclaimer.
   */
  unresolved?: readonly string[];
  /** Visible corrections log. Newest first. Never delete an entry. */
  corrections?: readonly Correction[];
  /** Set true to keep a piece out of the index, the RSS feed and the sitemap. */
  draft: boolean;
}

export const COMMENTARY: readonly Commentary[] = [
  {
    slug: 'one-scarcity-three-markets',
    title: 'One scarcity, three markets',
    standfirst:
      "India has spent two years securing the question paper. The money was never in the question paper. A verified account of where it actually is, and why every reform since 2024 has pulled the one lever the evidence says does not work.",
    date: '2026-07-27',
    rail: ['Commentary', 'Medical admissions', 'India'],
    kicker: 'Medical admissions',
    readingTime: '18 min',
    unresolved: [
      'No arrest or prosecution complaint has been made in the Telangana seat-blocking case, so that account rests on an attachment order rather than an adjudicated finding.',
      "The CBI's June 2025 case naming around 34 accused had not reached chargesheet at the time of writing.",
      'Several High Court judgments widely cited in public commentary on this subject could not be retrieved in full text. They are marked as reported, and no argument rests on them.',
    ],
    corrections: [],
    draft: false,
  },
] as const;

/** Published pieces, newest first. */
export const PUBLISHED = COMMENTARY.filter((c) => !c.draft).sort((a, b) =>
  b.date.localeCompare(a.date),
);

export function findCommentary(slug: string): Commentary | undefined {
  return COMMENTARY.find((c) => c.slug === slug);
}

/** Long-form date, e.g. "27 July 2026". */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  return `${d} ${months[m - 1]} ${y}`;
}

/** Compact numeric date for the masthead rail, e.g. "27.07.2026". */
export function formatStamp(iso: string): string {
  const [y, m, d] = iso.split('-');
  return `${d}.${m}.${y}`;
}
