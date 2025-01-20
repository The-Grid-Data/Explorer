import { PropsWithChildren } from 'react';
import { Separator } from '@/components/ui/separator';

export type FilterGroupProps = PropsWithChildren<{
  title: string;
}>;

export const FilterGroup = ({ title, children }: FilterGroupProps) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <div>
        <h3 className="font-bold">{title}</h3>
      </div>
      {children}
    </div>
  );
};
