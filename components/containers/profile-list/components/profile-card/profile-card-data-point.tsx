export type ProfileCardDataPointProps = {
  label: string;
  value?: string | false;
};

export const ProfileCardDataPoint = ({
  label,
  value
}: ProfileCardDataPointProps) => (
  <div className="flex flex-col items-center md:flex-row">
    <div className="text w-full shrink-0 rounded bg-primary p-1 px-2 text-xs text-muted md:w-fit">
      {label}:
    </div>
    <span className="text ml-1 w-full text-sm">{value || '-'}</span>
  </div>
);
