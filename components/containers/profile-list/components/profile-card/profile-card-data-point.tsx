import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export type ProfileCardDataPointProps = {
  label: string;
  value?: string | false;
  active?: boolean;
  children?: ReactNode;
  className?: string;
};

export const ProfileCardDataPoint = ({
  label,
  value,
  active,
  children,
  className
}: ProfileCardDataPointProps) => (
  <div className={cn('flex flex-col items-baseline gap-1 md:flex-row md:gap-2', className)}>
    <span
      className={cn(
        'shrink-0 text-xs font-medium text-muted-foreground',
        active && 'text-primary'
      )}
    >
      {label}:
    </span>
    <div className="flex flex-col items-start">
      {children || <span className="text-sm">{value || '-'}</span>}
    </div>
  </div>
);
