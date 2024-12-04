import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export type ProfileDataPointProps = {
  label: string;
  value?: string | false;
  opts?: {
    breakAll?: boolean;
  };
};

export const ProfileDataPoint = ({
  label,
  value,
  opts = { breakAll: false }
}: ProfileDataPointProps) => (
  <div className={cn('flex flex-col items-start gap-1')}>
    <p className="text-sm text-muted-foreground">{label}:</p>
    <p className={cn('w-full text-sm ', opts?.breakAll && 'break-all')}>
      {value || '-'}
    </p>
  </div>
);

export const ProfileDataPointContainer = ({ children }: PropsWithChildren) => {
  return <div className="flex w-full flex-col gap-6">{children}</div>;
};
