'use client';

import { Card, CardContent } from '@/components/ui/card';
import { ReactNode } from 'react';
import { FragmentType, graphql, useFragment } from '@/lib/graphql/generated';
import { ProfileTags } from './profile-tags';
import { siteConfig } from '@/lib/site-config';

export const ProfileFragment = graphql(`
  fragment ProfileFragment on ProfileInfos {
    profileSector {
      name
    }
    profileType {
      name
    }
    root {
      firstPublicValidation
      lastPublicValidation
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
    ...(!siteConfig.featureFlags.hideTagsOnProfileCards ? [{
      label: 'Tags',
      value: <ProfileTags profileTags={profileData?.root?.profileTags} />
    }] : []),
    ...(profileData?.root?.firstPublicValidation ? [{
      label: 'First added to The Grid',
      value: new Date(profileData?.root?.firstPublicValidation)?.toDateString()
    }] : []),
    ...(profileData?.root?.lastPublicValidation ? [{
      label: 'Last Updated on the Grid',
      value: new Date(profileData?.root?.lastPublicValidation)?.toDateString()
    }] : [])
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
