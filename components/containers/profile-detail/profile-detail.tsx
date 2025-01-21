'use client';

import { execute } from '@/lib/graphql/execute';
import { graphql } from '@/lib/graphql/generated';
import { useQuery } from '@tanstack/react-query';
import { Banknote, Building2, Package } from 'lucide-react';
import { AssetCard } from './components/asset-card';
import { EntityCard } from './components/entity-card';
import { OverviewSection } from './components/overview-section';
import { ProductCard } from './components/product-card';
import { ProfileDataPoint } from './components/profile-data-point';
import { ProfileDataSection } from './components/profile-data-section';
import { ProfileHeading } from './components/profile-heading';
import ProfileLoading from './components/profile-loading';
import ProfileNotFound from './components/profile-not-found';

export const ProfileDetailQuery = graphql(`
  query getProfileData($where: CProfileInfosBoolExp) {
    profileInfos(limit: 1, offset: 0, where: $where) {
      tagLine
      descriptionShort
      descriptionLong
      ...ProfileFragment
      ...ProfileHeadingFragment
      root {
        products {
          id
          ...ProductFieldsFragment
        }
        assets {
          id
          ...AssetFieldsFragment
        }
        entities {
          id
          ...EntityFieldsFragment
        }
      }
    }
  }
`);

export type ProfileMetadata = {
  id: string;
  slug: string;
  name: string;
};

export type ProfileDetailProps = {
  profileId: string;
  metadata?: ProfileMetadata;
};

export const ProfileDetail = ({ profileId, metadata }: ProfileDetailProps) => {
  const query = {
    where: { root: { slug: { _eq: profileId } } }
  };

  const { data, isFetching } = useQuery({
    queryKey: ['profile', profileId],
    queryFn: () => execute(ProfileDetailQuery, query)
  });

  const profile = data?.profileInfos?.[0];

  if (isFetching) {
    return <ProfileLoading />;
  }

  if (!profile) {
    return <ProfileNotFound />;
  }

  return (
    <div className="container w-full space-y-10 pb-12">
      <ProfileHeading
        query={ProfileDetailQuery.toString()}
        queryVariables={query}
        profile={profile}
      />

      <section className="space-y-3">
        <ProfileDataPoint label="Tagline" value={profile.tagLine} />
        <ProfileDataPoint
          label="Short Description"
          value={profile.descriptionShort}
        />
        <ProfileDataPoint
          label="Long Description"
          value={profile.descriptionLong}
        />
      </section>

      <OverviewSection profile={profile} />

      <ProfileDataSection
        title="Products"
        id="products"
        icon={<Package className="h-6 w-6" />}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {!Boolean(profile.root?.products?.length) && <p>No products found</p>}
          {Boolean(profile.root?.products?.length) &&
            profile.root?.products?.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </ProfileDataSection>

      <ProfileDataSection
        icon={<Banknote className="h-6 w-6" />}
        title="Assets"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {!Boolean(profile.root?.assets?.length) && <p>No assets found</p>}
          {Boolean(profile.root?.assets?.length) &&
            profile.root?.assets?.map(asset => (
              <AssetCard key={asset.id} asset={asset} />
            ))}
        </div>
      </ProfileDataSection>

      <ProfileDataSection
        icon={<Building2 className="h-6 w-6" />}
        title="Entities"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {!Boolean(profile.root?.entities?.length) && <p>No entities found</p>}
          {Boolean(profile.root?.entities?.length) &&
            profile.root?.entities?.map(asset => (
              <EntityCard key={asset.id} entity={asset} />
            ))}
        </div>
      </ProfileDataSection>
    </div>
  );
};
