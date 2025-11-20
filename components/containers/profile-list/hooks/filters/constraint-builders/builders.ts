import { 
  ProfileInfosBoolExp,
  ProfileTagsBoolExp,
  ProductsBoolExp,
  TagsBoolExp,
  ProductTypesBoolExp,
  ProfileSectorsBoolExp
} from '@/lib/graphql/generated/graphql';
import { FiltersStore } from '../../use-profile-filters';
import { siteConfig } from '@/lib/site-config';
import { mergeConditions } from '../utils';
import {
  buildProductIdsConstraints,
  buildProductTypesConstraints,
  buildTagsConstraints,
  buildProfileSectorsConstraints,
  buildProductAssetRelationshipsConstraints
} from './core';

/**
 * High-level builders for common filter patterns
 * These replace the duplicate buildAggregateInput and buildWhere functions
 */

/**
 * Build ProfileInfosBoolExp constraints for profile-based filters
 */
export function buildProfileInfosConstraints(filterStore: FiltersStore): ProfileInfosBoolExp {
  const conditions: ProfileInfosBoolExp[] = [];

  // Tags constraints
  conditions.push(
    ...buildTagsConstraints<ProfileInfosBoolExp>(
      (constraint) => ({ root: constraint }),
      filterStore.tagsFilter,
      siteConfig.overrideFilterValues.tags
    )
  );

  // Product types constraints
  conditions.push(
    ...buildProductTypesConstraints<ProfileInfosBoolExp>(
      (constraint) => ({ root: constraint }),
      filterStore.productTypesFilter,
      siteConfig.overrideFilterValues.productTypes
    )
  );

  // Profile sectors constraints
  conditions.push(
    ...buildProfileSectorsConstraints<ProfileInfosBoolExp>(
      (constraint) => constraint,
      filterStore.profileSectorsFilter
    )
  );

  // Product asset relationships constraints
  conditions.push(
    ...buildProductAssetRelationshipsConstraints<ProfileInfosBoolExp>(
      (constraint) => ({ root: constraint }),
      filterStore.productAssetRelationshipsFilter,
      siteConfig.overrideFilterValues.productAssetRelationships
    )
  );

  // Product IDs constraints (the missing piece in many filters!)
  conditions.push(
    ...buildProductIdsConstraints<ProfileInfosBoolExp>(
      (constraint) => ({ root: constraint }),
      siteConfig.overrideFilterValues.productIds
    )
  );

  return mergeConditions(conditions);
}

/**
 * Build ProfileTagsBoolExp constraints for tag aggregate queries
 */
export function buildProfileTagsConstraints(filterStore: FiltersStore): ProfileTagsBoolExp {
  const conditions: ProfileTagsBoolExp[] = [];

  // Profile sectors constraints
  conditions.push(
    ...buildProfileSectorsConstraints<ProfileTagsBoolExp>(
      (constraint) => ({ 
        root: { 
          products: { 
            root: { profileInfos: constraint.profileInfos } 
          } 
        }
      }),
      filterStore.profileSectorsFilter
    )
  );

  // Product types constraints  
  conditions.push(
    ...buildProductTypesConstraints<ProfileTagsBoolExp>(
      (constraint) => ({ root: constraint }),
      filterStore.productTypesFilter,
      siteConfig.overrideFilterValues.productTypes
    )
  );

  // Product asset relationships constraints
  conditions.push(
    ...buildProductAssetRelationshipsConstraints<ProfileTagsBoolExp>(
      (constraint) => ({ root: constraint }),
      filterStore.productAssetRelationshipsFilter,
      siteConfig.overrideFilterValues.productAssetRelationships
    )
  );

  // Product IDs constraints
  conditions.push(
    ...buildProductIdsConstraints<ProfileTagsBoolExp>(
      (constraint) => ({ root: constraint }),
      siteConfig.overrideFilterValues.productIds
    )
  );

  return mergeConditions(conditions);
}

/**
 * Build TagsBoolExp constraints for tag where queries
 */
export function buildTagsWhereConstraints(filterStore: FiltersStore): TagsBoolExp {
  const conditions: TagsBoolExp[] = [];

  // Profile sectors constraints
  conditions.push(
    ...buildProfileSectorsConstraints<TagsBoolExp>(
      (constraint) => ({
        profileTags: {
          root: {
            products: {
              root: { profileInfos: constraint.profileInfos }
            }
          }
        }
      }),
      filterStore.profileSectorsFilter
    )
  );

  // Product types constraints
  conditions.push(
    ...buildProductTypesConstraints<TagsBoolExp>(
      (constraint) => ({
        profileTags: { root: constraint }
      }),
      filterStore.productTypesFilter,
      siteConfig.overrideFilterValues.productTypes
    )
  );

  // Product asset relationships constraints
  conditions.push(
    ...buildProductAssetRelationshipsConstraints<TagsBoolExp>(
      (constraint) => ({
        profileTags: { root: constraint }
      }),
      filterStore.productAssetRelationshipsFilter,
      siteConfig.overrideFilterValues.productAssetRelationships
    )
  );

  // Product IDs constraints
  conditions.push(
    ...buildProductIdsConstraints<TagsBoolExp>(
      (constraint) => ({
        profileTags: { root: constraint }
      }),
      siteConfig.overrideFilterValues.productIds
    )
  );

  // Tags constraints (for override values)
  conditions.push(
    ...buildTagsConstraints<TagsBoolExp>(
      (constraint) => constraint,
      [],
      siteConfig.overrideFilterValues.tags
    )
  );

  return mergeConditions(conditions);
}

/**
 * Build ProductsBoolExp constraints for product aggregate queries
 */
export function buildProductsConstraints(filterStore: FiltersStore): ProductsBoolExp {
  const conditions: ProductsBoolExp[] = [];

  // Tags constraints
  conditions.push(
    ...buildTagsConstraints<ProductsBoolExp>(
      (constraint) => ({ root: constraint }),
      filterStore.tagsFilter,
      siteConfig.overrideFilterValues.tags
    )
  );

  // Profile sectors constraints
  conditions.push(
    ...buildProfileSectorsConstraints<ProductsBoolExp>(
      (constraint) => ({
        root: {
          products: {
            root: { profileInfos: constraint.profileInfos }
          }
        }
      }),
      filterStore.profileSectorsFilter
    )
  );

  // Product types constraints (only override values to avoid self-reference)
  if (siteConfig.overrideFilterValues.productTypes.length > 0) {
    conditions.push({
      root: {
        products: {
          productTypeId: { _in: siteConfig.overrideFilterValues.productTypes }
        }
      }
    });
  }

  // Product asset relationships constraints
  conditions.push(
    ...buildProductAssetRelationshipsConstraints<ProductsBoolExp>(
      (constraint) => ({ root: constraint }),
      filterStore.productAssetRelationshipsFilter,
      siteConfig.overrideFilterValues.productAssetRelationships
    )
  );

  // Product IDs constraints
  conditions.push(
    ...buildProductIdsConstraints<ProductsBoolExp>(
      (constraint) => ({ root: constraint }),
      siteConfig.overrideFilterValues.productIds
    )
  );

  return mergeConditions(conditions);
}

/**
 * Build ProductTypesBoolExp constraints for product type where queries
 */
export function buildProductTypesWhereConstraints(filterStore: FiltersStore): ProductTypesBoolExp {
  const conditions: ProductTypesBoolExp[] = [];

  // Base config restriction for product types
  if (siteConfig.overrideFilterValues.productTypes.length > 0) {
    conditions.push({
      products: {
        root: {
          profileInfos: {
            root: {
              products: {
                productTypeId: { _in: siteConfig.overrideFilterValues.productTypes }
              }
            }
          }
        }
      }
    });
  }

  // Tags constraints
  conditions.push(
    ...buildTagsConstraints<ProductTypesBoolExp>(
      (constraint) => ({
        products: {
          root: {
            profileInfos: {
              root: constraint
            }
          }
        }
      }),
      filterStore.tagsFilter,
      siteConfig.overrideFilterValues.tags
    )
  );

  // Profile sectors constraints
  conditions.push(
    ...buildProfileSectorsConstraints<ProductTypesBoolExp>(
      (constraint) => ({
        products: {
          root: { profileInfos: constraint.profileInfos }
        }
      }),
      filterStore.profileSectorsFilter
    )
  );

  // Product asset relationships constraints
  conditions.push(
    ...buildProductAssetRelationshipsConstraints<ProductTypesBoolExp>(
      (constraint) => ({
        products: {
          root: {
            profileInfos: {
              root: constraint
            }
          }
        }
      }),
      filterStore.productAssetRelationshipsFilter,
      siteConfig.overrideFilterValues.productAssetRelationships
    )
  );

  // Product IDs constraints
  conditions.push(
    ...buildProductIdsConstraints<ProductTypesBoolExp>(
      (constraint) => ({
        products: {
          root: {
            profileInfos: {
              root: constraint
            }
          }
        }
      }),
      siteConfig.overrideFilterValues.productIds
    )
  );

  return mergeConditions(conditions);
}

/**
 * Build ProfileSectorsBoolExp constraints for profile sector where queries
 */
export function buildProfileSectorsWhereConstraints(filterStore: FiltersStore): ProfileSectorsBoolExp {
  const conditions: ProfileSectorsBoolExp[] = [];

  // Tags constraints
  conditions.push(
    ...buildTagsConstraints<ProfileSectorsBoolExp>(
      (constraint) => ({
        profileInfos: { root: constraint }
      }),
      filterStore.tagsFilter,
      siteConfig.overrideFilterValues.tags
    )
  );

  // Product types constraints
  conditions.push(
    ...buildProductTypesConstraints<ProfileSectorsBoolExp>(
      (constraint) => ({
        profileInfos: { root: constraint }
      }),
      filterStore.productTypesFilter,
      siteConfig.overrideFilterValues.productTypes
    )
  );

  // Product asset relationships constraints
  conditions.push(
    ...buildProductAssetRelationshipsConstraints<ProfileSectorsBoolExp>(
      (constraint) => ({
        profileInfos: { root: constraint }
      }),
      filterStore.productAssetRelationshipsFilter,
      siteConfig.overrideFilterValues.productAssetRelationships
    )
  );

  // Product IDs constraints
  conditions.push(
    ...buildProductIdsConstraints<ProfileSectorsBoolExp>(
      (constraint) => ({
        profileInfos: { root: constraint }
      }),
      siteConfig.overrideFilterValues.productIds
    )
  );

  return mergeConditions(conditions);
}