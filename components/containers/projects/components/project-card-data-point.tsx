export type ProjectCardDataPointProps = {
  label: string;
  value?: string | false;
};

export const ProjectCardDataPoint = ({
  label,
  value
}: ProjectCardDataPointProps) => {
  return (
    <div className="flex items-center">
      <div className="text rounded-bl rounded-tl-md bg-black p-1 px-2 text-xs text-muted">
        {label}:
      </div>
      <div className="border-b-2">
        <span className="text ml-1 text-sm">{value || '-'}</span>
      </div>
    </div>
  );
};
