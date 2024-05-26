export type CardFeatureProps = {
  label: string;
  value?: string | false;
};

export const CardFeature = ({ label, value }: CardFeatureProps) => {
  return (
    <div className="flex flex-col overflow-hidden ">
      <span className="text w-full bg-black p-1 text-xs text-muted">
        {label}
      </span>
      <span className="text w-full rounded-b-sm border border-t-0 border-black p-1 text-sm">
        {value || '-'}
      </span>
    </div>
  );
};
