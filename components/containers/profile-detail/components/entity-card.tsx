'use client';

import { GetProfileQuery } from '@/lib/graphql/generated-graphql';
import { ProfileFeature, ProfileFeatureContainer } from './profile-feature';
import {
  ProfileDataPoint,
  ProfileDataPointContainer
} from './profile-data-point';
import { Globe } from 'lucide-react';
import { IconLink } from '@/components/ui/icon-link';

export type Profile = GetProfileQuery['profiles'][0];
export type Entity = Profile['entities'][0];
export type EntityCardProps = {
  entity: Entity;
};

export const EntityCard = ({ entity }: EntityCardProps) => {
  return (
    <div className="relative w-full rounded-xl border-2 border-primary bg-secondary/40 shadow-md lg:w-[480px]">
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-2">
          <h3 className="text-l rounded-br-lg  rounded-tl-lg bg-primary px-4 py-2  text-secondary">
            {entity.name}
          </h3>
          {entity.urlToEntity && (
            <IconLink url={entity.urlToEntity} tooltipLabel="Website">
              <Globe className="text-primary hover:text-primary/60" size={20} />
            </IconLink>
          )}
        </div>
        <div className="space-y-2 p-4">
          <ProfileFeatureContainer>
            <ProfileFeature
              label="Entity type"
              value={entity.entityType?.name}
            />
            <ProfileFeature label="Trade name" value={entity.tradeName} />
            <ProfileFeature
              label="Reg number"
              value={entity.localRegistrationNumber}
            />
            <ProfileFeature
              label="Tax number"
              value={entity.taxIdentificationNumber}
            />
            <ProfileFeature label="Lei Code" value={entity.leiNumber} />
            <ProfileFeature label="Country" value={entity.country.name} />
          </ProfileFeatureContainer>
          <div className="space-y-2">
            <ProfileDataPointContainer>
              <ProfileDataPoint
                fullWidth
                label="Incorporation Date"
                value={entity.dateOfIncorporation}
              />
              <ProfileDataPoint
                fullWidth
                label="Address"
                value={entity.address}
                opts={{ breakAll: true }}
              />
              <ProfileDataPoint
                fullWidth
                label="Parent entity"
                value={entity.parentEntityId?.toString()}
              />
            </ProfileDataPointContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
