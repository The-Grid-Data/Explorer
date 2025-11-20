import {
  ProfileInfosBoolExp,
  ProfileTagsBoolExp,
  ProductsBoolExp,
  TagsBoolExp,
  ProductTypesBoolExp,
  ProfileSectorsBoolExp
} from '@/lib/graphql/generated/graphql';

// Note: This interface matches the actual FiltersStore structure
export interface FilterStore {
  tagsFilter: string[];
  productTypesFilter: string[];
  profileSectorsFilter: string[];
  productAssetRelationshipsFilter: string[];
}

export interface OverrideFilterValues {
  productTypes: string[];
  productIds: string[];
  tags: string[];
  productAssetRelationships: string[];
}

export interface ConstraintBuilderOptions {
  filterStore: FilterStore;
  overrideValues: OverrideFilterValues;
}

// Base constraint builder type
export type ConstraintBuilder<T> = (options: ConstraintBuilderOptions) => T[];

// Specific constraint builders for different GraphQL types
export type ProfileInfosConstraintBuilder = ConstraintBuilder<ProfileInfosBoolExp>;
export type ProfileTagsConstraintBuilder = ConstraintBuilder<ProfileTagsBoolExp>;
export type ProductsConstraintBuilder = ConstraintBuilder<ProductsBoolExp>;
export type TagsConstraintBuilder = ConstraintBuilder<TagsBoolExp>;
export type ProductTypesConstraintBuilder = ConstraintBuilder<ProductTypesBoolExp>;
export type ProfileSectorsConstraintBuilder = ConstraintBuilder<ProfileSectorsBoolExp>;