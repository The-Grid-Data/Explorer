'use client';

import { GetProfileQuery } from '@/lib/graphql/generated-graphql';
import { ProfileDataCard } from './profile-data-card';
import { CardTitle } from '@/components/ui/card';
import {
  extractUrls,
  UrlTypeIconLinks
} from '@/components/containers/url-type-icon/url-type-icon-list';

export type Profile = NonNullable<GetProfileQuery['profileInfos']>[number];
export type Entity = NonNullable<
  NonNullable<Profile['root']>['entities']
>[number];

export type EntityCardProps = {
  entity: Entity;
};

export const EntityCard = ({ entity }: EntityCardProps) => {
  return (
    <ProfileDataCard
      title={
        <div className="flex items-center gap-2">
          <CardTitle>{entity.name}</CardTitle>

          <UrlTypeIconLinks urls={extractUrls(entity.urls)} />
        </div>
      }
      dataPoints={[
        {
          label: 'Entity Type',
          value: entity.entityType?.name || '-'
        },
        {
          label: 'Trade Name',
          value: entity.tradeName || '-'
        },
        {
          label: 'Reg Number',
          value: entity.localRegistrationNumber || '-'
        },
        {
          label: 'Tax Number',
          value: entity.taxIdentificationNumber || '-'
        },
        {
          label: 'LEI Code',
          value: entity.leiNumber || '-'
        },
        {
          label: 'Country',
          value: entity.country?.name || '-'
        },
        {
          label: 'Incorporation Date',
          value: entity.dateOfIncorporation || '-'
        },
        {
          label: 'Address',
          fullWidth: true,
          children: entity.address ? (
            <span className="w-full break-all text-sm">{entity.address}</span>
          ) : (
            '-'
          )
        }
      ]}
    />
  );
};
