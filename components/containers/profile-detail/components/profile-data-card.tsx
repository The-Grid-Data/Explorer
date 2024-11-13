'use client';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@/components/ui/card';
import { ReactNode } from 'react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export type DataPoint = {
  label: string;
  value?: string | boolean | ReactNode;
  children?: ReactNode;
  fullWidth?: boolean;
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
          {dataPoints.map(({ label, value, children, fullWidth }) => (
            <div key={label} className="flex flex-col gap-2">
              <div
                className={cn(
                  'flex items-center justify-between',
                  fullWidth && 'flex-col items-start gap-2'
                )}
              >
                <p className="text-xs text-muted-foreground">{label}</p>
                {value ? <h3 className="font-semibold">{value}</h3> : children}
              </div>
              {!fullWidth && <Separator />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
