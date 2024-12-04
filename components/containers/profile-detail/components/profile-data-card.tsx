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
};

export const ProfileDataCard = ({
  title,
  description,
  dataPoints
}: ProfileDataCardProps) => {
  return (
    <Card>
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
    </Card>
  );
};
