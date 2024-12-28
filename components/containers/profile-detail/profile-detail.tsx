'use client';

// import { useGetProfileQuery } from '@/lib/graphql/generated-graphql';
import ProfileNotFound from './components/profile-not-found';
import { ProfileHeading } from './components/profile-heading';
import { ProfileDataSection } from './components/profile-data-section';
import { ProfileDataPoint } from './components/profile-data-point';
import ProfileLoading from './components/profile-loading';
import { ProductCard } from './components/product-card';
import { AssetCard } from './components/asset-card';
import { EntityCard } from './components/entity-card';
import { Banknote, Building2, Package } from 'lucide-react';
import { OverviewSection } from './components/overview-section';
import { graphql, FragmentType, useFragment } from '@/lib/graphql/generated';
import { execute } from '@/lib/graphql/execute';
import { useQuery } from '@tanstack/react-query';
// import { ProfileDetailQuery } from '@/lib/graphql/queries/profile-detail.graphql';
import { ProductFieldsFragment } from '@/lib/graphql/queries/fragments/product.graphql';
import { AssetFieldsFragment } from '@/lib/graphql/queries/fragments/asset.graphql';
import { EntityFieldsFragment } from '@/lib/graphql/queries/fragments/entity.graphql';

export const ProfileDetailQuery = graphql(`
  query getProfileData($where: CProfileInfosBoolExp) {
    profileInfos(limit: 1, offset: 0, where: $where) {
      tagLine
      descriptionShort
      descriptionLong
      ...ProfileFragment
      ...ProfileHeadingFragment
    }
  }
`);

export type ProfileDetailProps = {
  profileId: string;
};

export const ProfileDetail = ({ profileId }: ProfileDetailProps) => {
  const query = {
    where: { root: { slug: { _eq: profileId } } }
  };

  const { data, isFetching } = useQuery({
    queryKey: ['films'],
    queryFn: () => execute(ProfileDetailQuery, query)
  });

  // const { data, isFetching } = useGetProfileQuery(query);
  const profile = data?.profileInfos?.[0];

  if (isFetching) {
    return <ProfileLoading />;
  }

  if (!profile) {
    return <ProfileNotFound />;
  }

  // const { products } = useFragment(ProductFieldsFragment, profile.root) ?? {};
  // const { assets } = useFragment(AssetFieldsFragment, profile.root) ?? {};
  // const { entities } = useFragment(EntityFieldsFragment, profile.root) ?? {};

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

      {/* <ProfileDataSection
        title="Products"
        id="products"
        icon={<Package className="h-6 w-6" />}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {!Boolean(products?.length) && <p>No products found</p>}
          {Boolean(products?.length) &&
            products?.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </ProfileDataSection>

      <ProfileDataSection
        icon={<Banknote className="h-6 w-6" />}
        title="Assets"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {!Boolean(assets?.length) && <p>No assets found</p>}
          {Boolean(assets?.length) &&
            assets?.map(asset => <AssetCard key={asset.id} asset={asset} />)}
        </div>
      </ProfileDataSection>

      <ProfileDataSection
        icon={<Building2 className="h-6 w-6" />}
        title="Entities"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {!Boolean(entities?.length) && <p>No entities found</p>}
          {Boolean(entities?.length) &&
            entities?.map(asset => (
              <EntityCard key={asset.id} entity={asset} />
            ))}
        </div>
      </ProfileDataSection> */}
    </div>
  );
};
