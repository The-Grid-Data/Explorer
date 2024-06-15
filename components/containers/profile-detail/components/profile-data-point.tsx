import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export type ProfileDataPointProps = {
  label: string;
  value?: string | false;
  fullWidth?: boolean;
};

export const ProfileDataPoint = ({
  label,
  value,
  fullWidth
}: ProfileDataPointProps) => (
  <div className={cn('flex flex-col items-start', !fullWidth && 'md:flex-row')}>
    <div
      className={cn(
        'text flex items-center rounded bg-primary p-1 px-2 text-xs text-muted',
        fullWidth ? 'w-full' : 'w-fit shrink-0 md:w-fit'
      )}
    >
      {label}:
    </div>
    <span className="text ml-1 w-full text-sm">{value || '-'}</span>
  </div>
);

export const ProfileDataPointContainer = ({ children }: PropsWithChildren) => {
  return <div className="flex w-full flex-col gap-6">{children}</div>;
};
