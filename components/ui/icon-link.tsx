import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

export const IconLink = ({
  children,
  url,
  tooltipLabel,
  noTooltip = false
}: PropsWithChildren<{
  url: string;
  tooltipLabel?: string;
  noTooltip?: boolean;
}>) => {
  if (noTooltip) {
    return (
      <Link href={url} target="_blank" rel="noopener noreferrer">
        {children}
      </Link>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger>
          <Link href={url} target="_blank" rel="noopener noreferrer">
            {children}
          </Link>
        </TooltipTrigger>
        <TooltipContent>{tooltipLabel}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
