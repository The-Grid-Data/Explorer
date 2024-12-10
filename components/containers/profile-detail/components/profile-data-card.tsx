'use client';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@/components/ui/card';
import { ReactNode } from 'react';
import { InlineDataPoint } from './inline-data-point';
import { cn } from '@/lib/utils';

export type DataPoint = {
  label: string;
  value?: string | boolean | ReactNode;
  children?: ReactNode;
  fullWidth?: boolean;
  separator?: boolean;
};

export type ProfileDataCardProps = {
  title: string | ReactNode;
  description?: string;
  dataPoints: DataPoint[];
  variant?: 'default' | 'fluid';
};

export const ProfileDataCard = ({
  title,
  description,
  dataPoints,
  variant = 'default'
}: ProfileDataCardProps) => {
  return (
    <div
      className={cn(
        variant === 'default' &&
          'rounded-xl border bg-card text-card-foreground shadow'
      )}
    >
      <CardHeader>
        {typeof title === 'string' ? <CardTitle>{title}</CardTitle> : title}
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {dataPoints.map(dataPoint => (
            <InlineDataPoint key={dataPoint.label} {...dataPoint} />
          ))}
        </div>
      </CardContent>
    </div>
  );
};
