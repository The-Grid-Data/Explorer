import { PropsWithChildren } from 'react';

export type FilterGroupProps = PropsWithChildren<{
  title: string;
}>;

export const FilterGroup = ({ title, children }: FilterGroupProps) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <h3 className="text-xs font-medium text-muted-foreground">{title}</h3>
      {children}
    </div>
  );
};
