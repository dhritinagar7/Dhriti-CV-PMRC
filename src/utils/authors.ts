/**
 * Split an author string into segments, marking which one is "me" so the
 * template can bold it. Matching is on the exact token from cv.ts (ME).
 */
export function markAuthors(authors: string, me: string) {
  return authors.split(', ').map((name) => ({
    name,
    isMe: name === me,
  }));
}
