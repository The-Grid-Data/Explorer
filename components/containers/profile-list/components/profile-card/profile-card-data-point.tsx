import { cn } from '@/lib/utils';

export type ProfileCardDataPointProps = {
  label: string;
  value?: string | false;
  active?: boolean;
};

export const ProfileCardDataPoint = ({
  label,
  value,
  active
}: ProfileCardDataPointProps) => (
  <div className="flex flex-col items-baseline md:flex-row">
    <div
      className={cn(
        'text w-full shrink-0 rounded border border-primary bg-primary p-1 px-2 text-xs text-muted dark:border-secondary dark:bg-secondary dark:bg-secondary dark:text-primary md:w-fit',
        active && 'bg-orange-400 font-medium text-primary dark:bg-orange-400'
      )}
    >
      {label}:
    </div>
    <span className="text ml-1 w-full text-sm">{value || '-'}</span>
  </div>
);
