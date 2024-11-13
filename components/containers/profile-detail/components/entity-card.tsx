'use client';

import { GetProfileQuery } from '@/lib/graphql/generated-graphql';
import { ProfileDataCard } from './profile-data-card';
import { Globe } from 'lucide-react';
import { IconLink } from '@/components/ui/icon-link';
import { Separator } from '@radix-ui/react-separator';
import { CardTitle } from '@/components/ui/card';

export type Profile = GetProfileQuery['profiles'][0];
export type Entity = Profile['entities'][0];
export type EntityCardProps = {
  entity: Entity;
};

export const EntityCard = ({ entity }: EntityCardProps) => {
  return (
    <ProfileDataCard
      title={
        <div className="flex items-center gap-2">
          <CardTitle>{entity.name}</CardTitle>

          {entity.urlToEntity && (
            <>
              <Separator
                className="mx-2 h-[10px] rounded-lg border-[1px]"
                orientation="vertical"
              />
              <IconLink url={entity.urlToEntity} tooltipLabel="Website">
                <Globe
                  className="text-primary hover:text-primary/60"
                  size={20}
                />
              </IconLink>
            </>
          )}
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
          value: entity?.country?.name || '-'
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
        },
        {
          label: 'Parent Entity',
          fullWidth: true,
          children: entity.address ? (
            <span className="w-full break-all text-sm">
              {entity.parentEntityId}
            </span>
          ) : (
            '-'
          )
        }
      ]}
    />
  );
};
