import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import { InfoIcon } from 'lucide-react';

export type InfoIconProps = {
  text: string;
  className?: string;
};

export function InfoIconTooltip({ text, className }: InfoIconProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <InfoIcon
            className={cn(
              'h-4 w-4 cursor-help text-muted-foreground/70',
              className
            )}
          />
        </TooltipTrigger>
        <TooltipContent className="max-w-64 text-base">
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
