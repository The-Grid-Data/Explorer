export type TextSegment = { type: 'text'; value: string };
export type UrlSegment = { type: 'url'; value: string; href: string };
export type ParsedSegment = TextSegment | UrlSegment;

/**
 * Regex matches two alternatives:
 * 1. URLs with protocol: https?:// followed by domain and optional path
 * 2. Bare domains: word.word where the last segment is 2+ alpha chars
 *    (filters out version numbers like v1.0 but catches example.com)
 *
 * (?<!\w) lookbehind prevents matching mid-word
 */
const URL_REGEX =
  /(?<!\w)(?:https?:\/\/[^\s<>\"']+|[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}(?:\/[^\s<>\"']*)?)/g;

export function parseTextWithUrls(text: string): ParsedSegment[] {
  const segments: ParsedSegment[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(URL_REGEX)) {
    const matchStart = match.index;
    const matchValue = match[0];

    if (matchStart > lastIndex) {
      segments.push({ type: 'text', value: text.slice(lastIndex, matchStart) });
    }

    const hasProtocol = /^https?:\/\//i.test(matchValue);
    segments.push({
      type: 'url',
      value: matchValue,
      href: hasProtocol ? matchValue : `https://${matchValue}`
    });

    lastIndex = matchStart + matchValue.length;
  }

  if (lastIndex < text.length) {
    segments.push({ type: 'text', value: text.slice(lastIndex) });
  }

  return segments;
}
