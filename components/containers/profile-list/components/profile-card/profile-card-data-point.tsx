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
  <div className={cn('flex flex-col items-baseline md:flex-row', className)}>
    <div
      className={cn(
        'text w-full shrink-0 rounded border border-primary bg-primary p-1 px-2 text-xs text-muted dark:border-secondary dark:bg-primary-foreground dark:text-primary dark:text-primary md:w-fit',
        active && 'bg-orange-400 font-medium text-primary dark:bg-orange-400'
      )}
    >
      {label}:
    </div>
    <div className="ml-1 flex flex-col items-start pt-2 lg:pt-0">
      {children || <span className="text w-full text-sm">{value || '-'}</span>}
    </div>
  </div>
);
