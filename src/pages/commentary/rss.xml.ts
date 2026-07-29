/**
 * RSS feed for the commentary.
 *
 * This is the load-bearing piece of plumbing: Buttondown reads it to send
 * new pieces by email, aggregators read it, and future-you can read it into
 * anything else without rebuilding the site. Keep it working.
 */
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '../../config/site';
import { PUBLISHED } from '../../data/commentary';

export function GET(context: APIContext) {
  return rss({
    title: `${SITE.name} — Commentary`,
    description:
      'Long-form commentary on science, education policy and public systems in India.',
    site: context.site ?? SITE.url,
    trailingSlash: false,
    items: PUBLISHED.map((piece) => ({
      title: piece.title,
      description: piece.standfirst,
      pubDate: new Date(`${piece.date}T09:00:00Z`),
      link: `/commentary/${piece.slug}`,
      author: SITE.email,
      categories: [piece.kicker],
    })),
    customData: `<language>en</language><copyright>© ${new Date().getFullYear()} ${SITE.name}</copyright>`,
  });
}
