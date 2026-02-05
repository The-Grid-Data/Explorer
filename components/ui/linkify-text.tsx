'use client';

import { useMemo } from 'react';
import { parseTextWithUrls, UrlSegment } from '@/lib/utils/url';
import { useValidateUrl } from '@/hooks/use-validate-url';
import { cn } from '@/lib/utils';

type LinkifyTextProps = {
  text: string;
  className?: string;
  linkClassName?: string;
};

function ValidatedLink({
  segment,
  className
}: {
  segment: UrlSegment;
  className?: string;
}) {
  const domain = new URL(segment.href).hostname;
  const { isValid } = useValidateUrl(domain);

  if (!isValid) {
    return <>{segment.value}</>;
  }

  return (
    <a
      href={segment.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn('underline text-blue-500 hover:text-blue-700', className)}
      onClick={(e) => e.stopPropagation()}
    >
      {segment.value}
    </a>
  );
}

export function LinkifyText({ text, className, linkClassName }: LinkifyTextProps) {
  const segments = useMemo(() => parseTextWithUrls(text), [text]);

  const hasUrls = segments.some((s) => s.type === 'url');
  if (!hasUrls) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {segments.map((segment, i) =>
        segment.type === 'text' ? (
          <span key={i}>{segment.value}</span>
        ) : (
          <ValidatedLink key={i} segment={segment} className={linkClassName} />
        )
      )}
    </span>
  );
}
