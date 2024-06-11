'use client';

import { Separator } from '@/components/ui/separator';

import { PropsWithChildren } from 'react';

export type ProfileDataSectionProps = PropsWithChildren<{
  title: string;
}>;

export const ProfileDataSection = ({
  title,
  children
}: ProfileDataSectionProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className=" text-2xl font-bold">{title}</h3>
      <Separator />
      {children}
    </div>
  );
};
