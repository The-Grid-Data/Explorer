import { PropsWithChildren } from 'react';

export type ProfileDataPointProps = {
  label: string;
  value?: string | false;
};

export const ProfileDataPoint = ({ label, value }: ProfileDataPointProps) => (
  <div className="flex flex-col items-start md:flex-row">
    <div className="text flex w-fit shrink-0 items-center rounded bg-primary p-1 px-2 text-xs text-muted md:w-fit">
      {label}:
    </div>
    <span className="text ml-1 w-full text-sm">{value || '-'}</span>
  </div>
);

export const ProfileDataPointContainer = ({ children }: PropsWithChildren) => {
  return <div className="flex w-full flex-col gap-6">{children}</div>;
};
