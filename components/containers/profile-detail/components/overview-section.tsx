'use client';

import { Card, CardContent } from '@/components/ui/card';
import { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { paths } from '@/lib/routes/paths';
import { TagIcon } from 'lucide-react';
import { FragmentType, graphql, useFragment } from '@/lib/graphql/generated';

export const ProfileFragment = graphql(`
  fragment ProfileFragment on CProfileInfos {
    profileSector {
      name
    }
    profileType {
      name
    }
    root {
      assets {
        ticker
      }
    }
    profileStatus {
      name
      id
    }
    root {
      profileTags {
        tag {
          name
          id
        }
      }
    }
    mainProduct: root {
      products(where: { isMainProduct: { _eq: "1" } }, limit: 1) {
        productType {
          name
        }
      }
    }
  }
`);

export type OverviewSectionProps = {
  profile: FragmentType<typeof ProfileFragment>;
};

export const OverviewSection = ({ profile }: OverviewSectionProps) => {
  const profileData = useFragment(ProfileFragment, profile);

  const overviewItems: {
    label: string;
    value?: string | boolean | ReactNode;
    children?: ReactNode;
  }[] = [
    {
      label: 'Sector',
      value: profileData?.profileSector?.name
    },
    {
      label: 'Profile type',
      value: profileData?.profileType?.name
    },
    {
      label: 'Main Product Type',
      value: profileData?.mainProduct?.products?.at(0)?.productType?.name
    },
    {
      label: 'Status',
      value: profileData?.profileStatus?.name
    },
    {
      label: 'Issued Assets',
      value:
        Boolean(profileData?.root?.assets?.length) &&
        profileData?.root?.assets?.map(asset => asset.ticker).join(', ')
    },
    {
      label: 'Tags',
      value: Boolean(profileData?.root?.profileTags?.length) ? (
        <div className="flex flex-wrap gap-1">
          {profileData?.root?.profileTags?.map(tag => (
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
