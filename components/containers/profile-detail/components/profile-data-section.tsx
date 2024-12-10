'use client';

import { PropsWithChildren, ReactNode } from 'react';

export type ProfileDataSectionProps = PropsWithChildren<{
  id?: string;
  title: string;
  icon: ReactNode;
}>;

export const ProfileDataSection = ({
  icon,
  title,
  children,
  id
}: ProfileDataSectionProps) => {
  return (
    <section id={id} className="mb-8 rounded-lg bg-primary/5 p-6">
      <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold">
        {icon}
        {title}
      </h2>
      {children}
    </section>
  );
};
