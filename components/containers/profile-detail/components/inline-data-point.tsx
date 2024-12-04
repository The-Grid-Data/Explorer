import { ReactNode } from 'react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

type InlineDataPointProps = {
  label: string;
  value?: string | boolean | ReactNode;
  children?: ReactNode;
  fullWidth?: boolean;
  separator?: boolean;
};

export const InlineDataPoint = ({
  label,
  value,
  children,
  fullWidth,
  separator = true
}: InlineDataPointProps) => {
  return (
    <div key={label} className="flex flex-col gap-2">
      <div
        className={cn(
          'flex items-center justify-between',
          fullWidth && 'flex-col items-start gap-2'
        )}
      >
        <p className="text-xs text-muted-foreground">{label}</p>
        {value ? <h3 className="font-semibold">{value}</h3> : children}
      </div>
      {separator && <Separator />}
    </div>
  );
};
