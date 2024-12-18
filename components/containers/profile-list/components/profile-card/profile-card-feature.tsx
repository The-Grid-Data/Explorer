import { cn } from '@/lib/utils';
import { isEmpty } from '@/lib/utils/is-empty';

export type ProfileCardFeatureProps = {
  label: string;
  value?: string | false;
  active?: boolean;
};

export const ProfileCardFeature = ({
  label,
  value,
  active
}: ProfileCardFeatureProps) => {
  return (
    <div className="flex flex-col overflow-hidden">
      <span
        className={cn(
          'text w-full rounded-t-sm border border-primary bg-primary px-2 py-1 text-xs text-secondary dark:border-secondary dark:bg-primary-foreground dark:text-primary',
          active &&
            'bg-orange-400 font-medium text-primary dark:bg-orange-400 dark:text-primary'
        )}
      >
        {label}
      </span>
      <span className="text w-full rounded-b-sm border border-t-0 border-primary px-2 py-1 text-sm dark:border-secondary">
        {isEmpty(value) ? '-' : value}
      </span>
    </div>
  );
};
