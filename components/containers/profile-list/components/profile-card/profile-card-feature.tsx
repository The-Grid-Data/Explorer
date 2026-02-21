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
    <div
      className={cn(
        'flex flex-col gap-0.5 rounded-md border px-2.5 py-1.5',
        active
          ? 'border-primary/30 bg-primary/5'
          : 'border-border bg-muted/30'
      )}
    >
      <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <span className="text-sm font-medium">
        {isEmpty(value) ? '-' : value}
      </span>
    </div>
  );
};
