export type ProfileCardFeatureProps = {
  label: string;
  value?: string | false;
};

export const ProfileCardFeature = ({
  label,
  value
}: ProfileCardFeatureProps) => {
  return (
    <div className="flex flex-col overflow-hidden">
      <span className="text w-full rounded-t-sm bg-primary px-2 py-1 text-xs text-muted">
        {label}
      </span>
      <span className="text w-full rounded-b-sm border border-t-0 border-black px-2 py-1 text-sm">
        {value || '-'}
      </span>
    </div>
  );
};
