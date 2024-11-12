import { PropsWithChildren, ReactNode } from 'react';
import Link from 'next/link';
import { DeepLink } from '@/components/ui/deep-link';

export type ProfileFeatureProps = {
  label: string;
  value?: string | false | ReactNode | null;
};

export const ProfileFeature = ({ label, value }: ProfileFeatureProps) => {
  return (
    <div className="flex flex-col items-start overflow-hidden">
      <span className="w-full rounded-t-sm bg-primary px-2 py-1 text-xs text-muted">
        {label}
      </span>
      <span className="w-full rounded-b-sm border border-t-0 border-black px-2 py-1 text-sm">
        {value || '-'}
      </span>
    </div>
  );
};

export const ProfileFeatureContainer = ({ children }: PropsWithChildren) => {
  return <div className="flex shrink-0 flex-wrap gap-2">{children}</div>;
};
