'use client';

import { useGetProfileQuery } from '@/lib/graphql/generated-graphql';
import ProfileNotFound from './components/profile-not-found';
import { ProfileHeading } from './components/profile-heading';
import { ProfileDataSection } from './components/profile-data-section';
import {
  ProfileFeature,
  ProfileFeatureContainer
} from './components/profile-feature';
import {
  ProfileDataPoint,
  ProfileDataPointContainer
} from './components/profile-data-point';
import ProfileLoading from './components/profile-loading';

export type ProfileDetailProps = {
  profileId: string;
};

export const ProfileDetail = ({ profileId }: ProfileDetailProps) => {
  const query = {
    where: { id: { _eq: +profileId } }
  };
  const { data, isFetching } = useGetProfileQuery(query);
  const profile = data?.profiles[0];

  if (isFetching) {
    return <ProfileLoading />;
  }

  if (!profile) {
    return <ProfileNotFound />;
  }

  return (
    <div className="container w-full space-y-10 pb-12">
      <ProfileHeading queryVariables={query} profile={profile} />

      <ProfileDataSection title="Overview">
        <ProfileFeatureContainer>
          <ProfileDataPointContainer>
            <ProfileDataPoint label="Tagline" value={profile.tagLine} />
            <ProfileDataPoint
              label="Short Description"
              value={profile.descriptionShort}
            />
            <ProfileDataPoint
              label="Long Description"
              value={profile.descriptionLong}
            />
          </ProfileDataPointContainer>
        </ProfileFeatureContainer>
      </ProfileDataSection>

      <ProfileDataSection title="Key Facts">
        <ProfileFeatureContainer>
          <ProfileFeature label="Sector" value={profile.profileSector?.name} />
          <ProfileFeature
            label="Profile type"
            value={profile.profileType?.name}
          />
          <ProfileFeature
            label="Main Product Type"
            value={profile.mainProduct.at(0)?.productType?.name}
          />
          <ProfileFeature label="Status" value={profile.profileStatus?.name} />
          <ProfileFeature
            label="Issued Assets"
            value={
              Boolean(profile.assets.length) &&
              profile.assets.map(asset => asset.ticker).join(', ')
            }
          />
        </ProfileFeatureContainer>
      </ProfileDataSection>
      <ProfileDataSection title="Products">
        <pre className="text overflow-x-auto text-xs">
          {JSON.stringify(profile.products, null, 2)}
        </pre>
      </ProfileDataSection>
      <ProfileDataSection title="Assets">
        <pre className="text overflow-x-auto text-xs">
          {JSON.stringify(profile.assets, null, 2)}
        </pre>
      </ProfileDataSection>
      <ProfileDataSection title="Entities">
        <pre className="text overflow-x-auto text-xs">
          {JSON.stringify(profile.entities, null, 2)}
        </pre>
      </ProfileDataSection>
    </div>
  );
};
