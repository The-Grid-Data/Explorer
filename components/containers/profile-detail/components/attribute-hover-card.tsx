import { ReactNode } from 'react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card';

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
          <p className="text-xs text-muted-foreground">{definition}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
