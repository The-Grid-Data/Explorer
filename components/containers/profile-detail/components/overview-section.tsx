'use client';

import { Card, CardContent } from '@/components/ui/card';
import { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { paths } from '@/lib/routes/paths';
import { GetProfileQuery } from '@/lib/graphql/generated-graphql';
import { TagIcon } from 'lucide-react';

export type Profile = NonNullable<GetProfileQuery['profileInfos']>[number];

export type OverviewSectionProps = {
  profile: Profile;
};

export const OverviewSection = ({ profile }: OverviewSectionProps) => {
  const overviewItems: {
    label: string;
    value?: string | boolean | ReactNode;
    children?: ReactNode;
  }[] = [
    {
      label: 'Sector',
      value: profile?.profileSector?.name
    },
    {
      label: 'Profile type',
      value: profile.profileType?.name
    },
    {
      label: 'Main Product Type',
      value: profile.mainProduct?.products?.at(0)?.productType?.name
    },
    {
      label: 'Status',
      value: profile.profileStatus?.name
    },
    {
      label: 'Issued Assets',
      value:
        Boolean(profile.root?.assets?.length) &&
        profile.root?.assets?.map(asset => asset.ticker).join(', ')
    },
    {
      label: 'Tags',
      value: Boolean(profile.root?.profileTags?.length) ? (
        <div className="flex flex-wrap gap-1">
          {profile.root?.profileTags?.map(tag => (
            <Link
              key={tag.tag?.id}
              href={`${paths.base}?tags=${tag.tag?.id}`}
              className="text-sm font-semibold text-primary hover:text-primary/60"
            >
              <Badge
                variant="secondary"
                className="flex w-fit items-center gap-2"
              >
                <TagIcon size={16} /> {tag.tag?.name}
              </Badge>
            </Link>
          ))}
        </div>
      ) : (
        '-'
      )
    }
  ];

  return (
    <section>
      <Card className="shadow-sm">
        <CardContent className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4">
          {overviewItems.map(({ label, value, children }) => (
            <div key={label}>
              {label ? (
                <p className="mb-1 text-xs text-muted-foreground">{label}</p>
              ) : (
                children
              )}
              <h3 className="font-semibold">{value}</h3>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};
