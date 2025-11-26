'use client';

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
import { ParentRelationshipsSection } from './components/parent-relationships-section';
import { graphql } from '@/lib/graphql/generated';
import { execute } from '@/lib/graphql/execute';
import { useQuery } from '@tanstack/react-query';

export const ProfileDetailQuery = graphql(`
  query getProfileData($where: ProfileInfosBoolExp) {
    profileInfos(limit: 1, offset: 0, where: $where) {
      tagLine
      descriptionShort
      descriptionLong
      ...ProfileFragment
      ...ProfileHeadingFragment
      media {
        id
        url
        mediaType {
          id
          name
        }
      }
      root {
        firstPublicValidation
        lastPublicValidation
        parentRootRelationships {
          childRootId
          parentRootId
          id
          rootRelationshipType {
            name
          }
        }
        childRootRelationships {
          parentRootId
          childRootId
          rootRelationshipType {
            name
          }
        }
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

export type ProfileDetailProps = {
  profileId: string;
};

export const ProfileDetail = ({ profileId }: ProfileDetailProps) => {
  const query = {
    where: { root: { slug: { _eq: profileId } } }
  };

  const { data, isLoading } = useQuery({
    queryKey: ['profile', profileId],
    queryFn: () => execute(ProfileDetailQuery, query)
  });

  console.log({ data });
  const profile = data?.profileInfos?.[0];

  if (isLoading) {
    return <ProfileLoading />;
  }

  if (!profile) {
    return <ProfileNotFound />;
  }

  return (
    <div className="container w-full space-y-10 pb-12">
      <div className="flex flex-col gap-8 lg:gap-1 xl:flex-row">
        <div className="flex flex-col gap-1">
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
        </div>

        <ParentRelationshipsSection
          isParentOf={profile.root?.parentRootRelationships?.map(
            relationship => ({
              rootId: relationship.childRootId,
              relationshipType:
                relationship?.rootRelationshipType?.name ?? 'CHILD'
            })
          )}
          isChildOf={profile.root?.childRootRelationships?.map(
            relationship => ({
              rootId: relationship.parentRootId,
              relationshipType:
                relationship.rootRelationshipType?.name ?? 'PARENT'
            })
          )}
        />
      </div>

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

