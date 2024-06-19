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
import { ProductCard } from './components/product-card';
import { AssetCard } from './components/asset-card';
import { EntityCard } from './components/entity-card';

export type ProfileDetailProps = {
  profileId: string;
};

export const ProfileDetail = ({ profileId }: ProfileDetailProps) => {
  const query = {
    where: { slug: { _eq: profileId } }
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
        <div className="h-1" />
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

      <ProfileDataSection title="Products">
        <div className="flex flex-wrap gap-4">
          {!Boolean(profile.products.length) && <p>No products found</p>}
          {Boolean(profile.products.length) &&
            profile.products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </ProfileDataSection>
      <ProfileDataSection title="Assets">
        <div className="flex flex-wrap gap-4">
          {!Boolean(profile.assets.length) && <p>No assets found</p>}
          {Boolean(profile.assets.length) &&
            profile.assets.map(asset => (
              <AssetCard key={asset.id} asset={asset} />
            ))}
        </div>
      </ProfileDataSection>
      <ProfileDataSection title="Entities">
        <div className="flex flex-wrap gap-4">
          {!Boolean(profile.entities.length) && <p>No entities found</p>}
          {Boolean(profile.entities.length) &&
            profile.entities.map(asset => (
              <EntityCard key={asset.id} entity={asset} />
            ))}
        </div>
      </ProfileDataSection>
    </div>
  );
};
