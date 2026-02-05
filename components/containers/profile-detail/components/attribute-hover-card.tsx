import { ReactNode } from 'react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card';
import { LinkifyText } from '@/components/ui/linkify-text';

type AttributeHoverCardProps = {
  name: string;
  definition?: string | null;
  children: ReactNode;
};

export const AttributeHoverCard = ({
  name,
  definition,
  children
}: AttributeHoverCardProps) => {
  if (!definition) {
    return <>{children}</>;
  }

  return (
    <HoverCard openDelay={300} closeDelay={200}>
      <HoverCardTrigger asChild>
        <span className="cursor-help border-b border-dashed border-muted-foreground/50">
          {children}
        </span>
      </HoverCardTrigger>
      <HoverCardContent side="top" align="start">
        <div className="space-y-1">
          <p className="text-sm font-semibold">{name}</p>
          <LinkifyText text={definition} className="text-xs text-muted-foreground" />
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
