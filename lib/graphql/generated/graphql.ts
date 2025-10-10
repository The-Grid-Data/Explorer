/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: string; output: string; }
  Enum: { input: string; output: string; }
  Float64: { input: number; output: number; }
  Int8: { input: number; output: number; }
  Int32: { input: number; output: number; }
  Int64: { input: number; output: number; }
  Json: { input: any; output: any; }
};

export type AllowedUrlTypes = {
  __typename?: 'AllowedUrlTypes';
  coreTableName?: Maybe<CoreTableNames>;
  id: Scalars['String']['output'];
  tableId: Scalars['String']['output'];
  urlType?: Maybe<UrlTypes>;
  urlTypeId: Scalars['String']['output'];
};

export type AllowedUrlTypesAggExp = {
  __typename?: 'AllowedUrlTypesAggExp';
  _count: Scalars['Int']['output'];
  id: StringAggExp;
  tableId: StringAggExp;
  urlTypeId: StringAggExp;
};

export type AllowedUrlTypesBoolExp = {
  _and?: InputMaybe<Array<AllowedUrlTypesBoolExp>>;
  _not?: InputMaybe<AllowedUrlTypesBoolExp>;
  _or?: InputMaybe<Array<AllowedUrlTypesBoolExp>>;
  coreTableName?: InputMaybe<CoreTableNamesBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  tableId?: InputMaybe<StringBoolExp>;
  urlType?: InputMaybe<UrlTypesBoolExp>;
  urlTypeId?: InputMaybe<StringBoolExp>;
};

export type AllowedUrlTypesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AllowedUrlTypesOrderByExp>>;
  where?: InputMaybe<AllowedUrlTypesBoolExp>;
};

export type AllowedUrlTypesOrderByExp = {
  coreTableName?: InputMaybe<CoreTableNamesOrderByExp>;
  id?: InputMaybe<OrderBy>;
  tableId?: InputMaybe<OrderBy>;
  urlType?: InputMaybe<UrlTypesOrderByExp>;
  urlTypeId?: InputMaybe<OrderBy>;
};

export type AssetDeployments = {
  __typename?: 'AssetDeployments';
  asset?: Maybe<Assets>;
  assetId: Scalars['String']['output'];
  deploymentId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  smartContractDeployment?: Maybe<SmartContractDeployments>;
};

export type AssetDeploymentsAggExp = {
  __typename?: 'AssetDeploymentsAggExp';
  _count: Scalars['Int']['output'];
  assetId: StringAggExp;
  deploymentId: StringAggExp;
  id: StringAggExp;
};

export type AssetDeploymentsBoolExp = {
  _and?: InputMaybe<Array<AssetDeploymentsBoolExp>>;
  _not?: InputMaybe<AssetDeploymentsBoolExp>;
  _or?: InputMaybe<Array<AssetDeploymentsBoolExp>>;
  asset?: InputMaybe<AssetsBoolExp>;
  assetId?: InputMaybe<StringBoolExp>;
  deploymentId?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  smartContractDeployment?: InputMaybe<SmartContractDeploymentsBoolExp>;
};

export type AssetDeploymentsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetDeploymentsOrderByExp>>;
  where?: InputMaybe<AssetDeploymentsBoolExp>;
};

export type AssetDeploymentsOrderByExp = {
  asset?: InputMaybe<AssetsOrderByExp>;
  assetId?: InputMaybe<OrderBy>;
  deploymentId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  smartContractDeployment?: InputMaybe<SmartContractDeploymentsOrderByExp>;
};

export type AssetSocials = {
  __typename?: 'AssetSocials';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  rootId: Scalars['String']['output'];
  rowId: Scalars['String']['output'];
  socialStatus?: Maybe<SocialStatuses>;
  socialStatusId: Scalars['String']['output'];
  socialType?: Maybe<SocialTypes>;
  socialTypeId: Scalars['String']['output'];
  tableId: Scalars['String']['output'];
  urls?: Maybe<Array<SocialUrls>>;
};


export type AssetSocialsUrlsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SocialUrlsOrderBy>>;
  where?: InputMaybe<SocialUrlsBoolExp>;
};

export type AssetSocialsBoolExp = {
  _and?: InputMaybe<Array<AssetSocialsBoolExp>>;
  _not?: InputMaybe<AssetSocialsBoolExp>;
  _or?: InputMaybe<Array<AssetSocialsBoolExp>>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  rootId?: InputMaybe<StringBoolExp>;
  rowId?: InputMaybe<StringBoolExp>;
  socialStatus?: InputMaybe<SocialStatusesBoolExp>;
  socialStatusId?: InputMaybe<StringBoolExp>;
  socialType?: InputMaybe<SocialTypesBoolExp>;
  socialTypeId?: InputMaybe<StringBoolExp>;
  tableId?: InputMaybe<StringBoolExp>;
};

export type AssetSocialsOrderBy = {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  rootId?: InputMaybe<OrderBy>;
  rowId?: InputMaybe<OrderBy>;
  socialStatus?: InputMaybe<SocialStatusesOrderByExp>;
  socialStatusId?: InputMaybe<OrderBy>;
  socialType?: InputMaybe<SocialTypesOrderByExp>;
  socialTypeId?: InputMaybe<OrderBy>;
  tableId?: InputMaybe<OrderBy>;
};

export type AssetStandards = {
  __typename?: 'AssetStandards';
  definition: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  smartContractDeployments?: Maybe<Array<SmartContractDeployments>>;
  smartContractDeploymentsAggregate: SmartContractDeploymentsAggExp;
};


export type AssetStandardsSmartContractDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SmartContractDeploymentsOrderByExp>>;
  where?: InputMaybe<SmartContractDeploymentsBoolExp>;
};


export type AssetStandardsSmartContractDeploymentsAggregateArgs = {
  filter_input?: InputMaybe<SmartContractDeploymentsFilterInput>;
};

export type AssetStandardsAggExp = {
  __typename?: 'AssetStandardsAggExp';
  _count: Scalars['Int']['output'];
  definition: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
  slug: StringAggExp;
};

export type AssetStandardsBoolExp = {
  _and?: InputMaybe<Array<AssetStandardsBoolExp>>;
  _not?: InputMaybe<AssetStandardsBoolExp>;
  _or?: InputMaybe<Array<AssetStandardsBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  slug?: InputMaybe<StringBoolExp>;
  smartContractDeployments?: InputMaybe<SmartContractDeploymentsBoolExp>;
};

export type AssetStandardsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetStandardsOrderByExp>>;
  where?: InputMaybe<AssetStandardsBoolExp>;
};

export type AssetStandardsOrderByExp = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
};

export type AssetStatuses = {
  __typename?: 'AssetStatuses';
  assets?: Maybe<Array<Assets>>;
  assetsAggregate: AssetsAggExp;
  definition: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
};


export type AssetStatusesAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetsOrderByExp>>;
  where?: InputMaybe<AssetsBoolExp>;
};


export type AssetStatusesAssetsAggregateArgs = {
  filter_input?: InputMaybe<AssetsFilterInput>;
};

export type AssetStatusesAggExp = {
  __typename?: 'AssetStatusesAggExp';
  _count: Scalars['Int']['output'];
  definition: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
  slug: StringAggExp;
};

export type AssetStatusesBoolExp = {
  _and?: InputMaybe<Array<AssetStatusesBoolExp>>;
  _not?: InputMaybe<AssetStatusesBoolExp>;
  _or?: InputMaybe<Array<AssetStatusesBoolExp>>;
  assets?: InputMaybe<AssetsBoolExp>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  slug?: InputMaybe<StringBoolExp>;
};

export type AssetStatusesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetStatusesOrderByExp>>;
  where?: InputMaybe<AssetStatusesBoolExp>;
};

export type AssetStatusesOrderByExp = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
};

export type AssetSupportTypes = {
  __typename?: 'AssetSupportTypes';
  definition: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  productAssetRelationships?: Maybe<Array<ProductAssetRelationships>>;
  productAssetRelationshipsAggregate: ProductAssetRelationshipsAggExp;
  slug?: Maybe<Scalars['String']['output']>;
};


export type AssetSupportTypesProductAssetRelationshipsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductAssetRelationshipsOrderByExp>>;
  where?: InputMaybe<ProductAssetRelationshipsBoolExp>;
};


export type AssetSupportTypesProductAssetRelationshipsAggregateArgs = {
  filter_input?: InputMaybe<ProductAssetRelationshipsFilterInput>;
};

export type AssetSupportTypesAggExp = {
  __typename?: 'AssetSupportTypesAggExp';
  _count: Scalars['Int']['output'];
  definition: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
  slug: StringAggExp;
};

export type AssetSupportTypesBoolExp = {
  _and?: InputMaybe<Array<AssetSupportTypesBoolExp>>;
  _not?: InputMaybe<AssetSupportTypesBoolExp>;
  _or?: InputMaybe<Array<AssetSupportTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  productAssetRelationships?: InputMaybe<ProductAssetRelationshipsBoolExp>;
  slug?: InputMaybe<StringBoolExp>;
};

export type AssetSupportTypesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetSupportTypesOrderByExp>>;
  where?: InputMaybe<AssetSupportTypesBoolExp>;
};

export type AssetSupportTypesOrderByExp = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
};

export type AssetTypes = {
  __typename?: 'AssetTypes';
  assets?: Maybe<Array<Assets>>;
  assetsAggregate: AssetsAggExp;
  definition: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
};


export type AssetTypesAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetsOrderByExp>>;
  where?: InputMaybe<AssetsBoolExp>;
};


export type AssetTypesAssetsAggregateArgs = {
  filter_input?: InputMaybe<AssetsFilterInput>;
};

export type AssetTypesAggExp = {
  __typename?: 'AssetTypesAggExp';
  _count: Scalars['Int']['output'];
  definition: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
  slug: StringAggExp;
};

export type AssetTypesBoolExp = {
  _and?: InputMaybe<Array<AssetTypesBoolExp>>;
  _not?: InputMaybe<AssetTypesBoolExp>;
  _or?: InputMaybe<Array<AssetTypesBoolExp>>;
  assets?: InputMaybe<AssetsBoolExp>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  slug?: InputMaybe<StringBoolExp>;
};

export type AssetTypesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetTypesOrderByExp>>;
  where?: InputMaybe<AssetTypesBoolExp>;
};

export type AssetTypesOrderByExp = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
};

export type AssetUrls = {
  __typename?: 'AssetUrls';
  id: Scalars['String']['output'];
  rowId: Scalars['String']['output'];
  tableId: Scalars['String']['output'];
  url: Scalars['String']['output'];
  urlType?: Maybe<UrlTypes>;
  urlTypeId: Scalars['String']['output'];
};

export type AssetUrlsBoolExp = {
  _and?: InputMaybe<Array<AssetUrlsBoolExp>>;
  _not?: InputMaybe<AssetUrlsBoolExp>;
  _or?: InputMaybe<Array<AssetUrlsBoolExp>>;
  id?: InputMaybe<StringBoolExp>;
  rowId?: InputMaybe<StringBoolExp>;
  tableId?: InputMaybe<StringBoolExp>;
  url?: InputMaybe<StringBoolExp>;
  urlType?: InputMaybe<UrlTypesBoolExp>;
  urlTypeId?: InputMaybe<StringBoolExp>;
};

export type AssetUrlsOrderBy = {
  id?: InputMaybe<OrderBy>;
  rowId?: InputMaybe<OrderBy>;
  tableId?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
  urlType?: InputMaybe<UrlTypesOrderByExp>;
  urlTypeId?: InputMaybe<OrderBy>;
};

export type Assets = {
  __typename?: 'Assets';
  assetDeployments?: Maybe<Array<AssetDeployments>>;
  assetDeploymentsAggregate: AssetDeploymentsAggExp;
  assetStatus?: Maybe<AssetStatuses>;
  assetStatusId?: Maybe<Scalars['String']['output']>;
  assetType?: Maybe<AssetTypes>;
  assetTypeId?: Maybe<Scalars['String']['output']>;
  derivativeAssets?: Maybe<Array<DerivativeAssets>>;
  derivativeAssetsAggregate: DerivativeAssetsAggExp;
  derivativeAssetsByBaseAssetId?: Maybe<Array<DerivativeAssets>>;
  derivativeAssetsByBaseAssetIdAggregate: DerivativeAssetsAggExp;
  description: Scalars['String']['output'];
  icon: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  productAssetRelationships?: Maybe<Array<ProductAssetRelationships>>;
  productAssetRelationshipsAggregate: ProductAssetRelationshipsAggExp;
  root?: Maybe<Roots>;
  rootId: Scalars['String']['output'];
  socials?: Maybe<Array<AssetSocials>>;
  ticker: Scalars['String']['output'];
  urls?: Maybe<Array<AssetUrls>>;
};


export type AssetsAssetDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetDeploymentsOrderByExp>>;
  where?: InputMaybe<AssetDeploymentsBoolExp>;
};


export type AssetsAssetDeploymentsAggregateArgs = {
  filter_input?: InputMaybe<AssetDeploymentsFilterInput>;
};


export type AssetsDerivativeAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DerivativeAssetsOrderByExp>>;
  where?: InputMaybe<DerivativeAssetsBoolExp>;
};


export type AssetsDerivativeAssetsAggregateArgs = {
  filter_input?: InputMaybe<DerivativeAssetsFilterInput>;
};


export type AssetsDerivativeAssetsByBaseAssetIdArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DerivativeAssetsOrderByExp>>;
  where?: InputMaybe<DerivativeAssetsBoolExp>;
};


export type AssetsDerivativeAssetsByBaseAssetIdAggregateArgs = {
  filter_input?: InputMaybe<DerivativeAssetsFilterInput>;
};


export type AssetsProductAssetRelationshipsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductAssetRelationshipsOrderByExp>>;
  where?: InputMaybe<ProductAssetRelationshipsBoolExp>;
};


export type AssetsProductAssetRelationshipsAggregateArgs = {
  filter_input?: InputMaybe<ProductAssetRelationshipsFilterInput>;
};


export type AssetsSocialsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetSocialsOrderBy>>;
  where?: InputMaybe<AssetSocialsBoolExp>;
};


export type AssetsUrlsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetUrlsOrderBy>>;
  where?: InputMaybe<AssetUrlsBoolExp>;
};

export type AssetsAggExp = {
  __typename?: 'AssetsAggExp';
  _count: Scalars['Int']['output'];
  assetStatusId: StringAggExp;
  assetTypeId: StringAggExp;
  description: StringAggExp;
  icon: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
  rootId: StringAggExp;
  ticker: StringAggExp;
};

export type AssetsBoolExp = {
  _and?: InputMaybe<Array<AssetsBoolExp>>;
  _not?: InputMaybe<AssetsBoolExp>;
  _or?: InputMaybe<Array<AssetsBoolExp>>;
  assetDeployments?: InputMaybe<AssetDeploymentsBoolExp>;
  assetStatus?: InputMaybe<AssetStatusesBoolExp>;
  assetStatusId?: InputMaybe<StringBoolExp>;
  assetType?: InputMaybe<AssetTypesBoolExp>;
  assetTypeId?: InputMaybe<StringBoolExp>;
  derivativeAssets?: InputMaybe<DerivativeAssetsBoolExp>;
  derivativeAssetsByBaseAssetId?: InputMaybe<DerivativeAssetsBoolExp>;
  description?: InputMaybe<StringBoolExp>;
  icon?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  productAssetRelationships?: InputMaybe<ProductAssetRelationshipsBoolExp>;
  root?: InputMaybe<RootsBoolExp>;
  rootId?: InputMaybe<StringBoolExp>;
  socials?: InputMaybe<AssetSocialsBoolExp>;
  ticker?: InputMaybe<StringBoolExp>;
  urls?: InputMaybe<AssetUrlsBoolExp>;
};

export type AssetsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetsOrderByExp>>;
  where?: InputMaybe<AssetsBoolExp>;
};

export type AssetsOrderByExp = {
  assetStatus?: InputMaybe<AssetStatusesOrderByExp>;
  assetStatusId?: InputMaybe<OrderBy>;
  assetType?: InputMaybe<AssetTypesOrderByExp>;
  assetTypeId?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  icon?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  root?: InputMaybe<RootsOrderByExp>;
  rootId?: InputMaybe<OrderBy>;
  ticker?: InputMaybe<OrderBy>;
};

export type CoreTableNames = {
  __typename?: 'CoreTableNames';
  allowedUrlTypes?: Maybe<Array<AllowedUrlTypes>>;
  allowedUrlTypesAggregate: AllowedUrlTypesAggExp;
  id: Scalars['String']['output'];
  socials?: Maybe<Array<Socials>>;
  socialsAggregate: SocialsAggExp;
  tableName: Scalars['String']['output'];
  urls?: Maybe<Array<Urls>>;
  urlsAggregate: UrlsAggExp;
};


export type CoreTableNamesAllowedUrlTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AllowedUrlTypesOrderByExp>>;
  where?: InputMaybe<AllowedUrlTypesBoolExp>;
};


export type CoreTableNamesAllowedUrlTypesAggregateArgs = {
  filter_input?: InputMaybe<AllowedUrlTypesFilterInput>;
};


export type CoreTableNamesSocialsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SocialsOrderByExp>>;
  where?: InputMaybe<SocialsBoolExp>;
};


export type CoreTableNamesSocialsAggregateArgs = {
  filter_input?: InputMaybe<SocialsFilterInput>;
};


export type CoreTableNamesUrlsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UrlsOrderByExp>>;
  where?: InputMaybe<UrlsBoolExp>;
};


export type CoreTableNamesUrlsAggregateArgs = {
  filter_input?: InputMaybe<UrlsFilterInput>;
};

export type CoreTableNamesAggExp = {
  __typename?: 'CoreTableNamesAggExp';
  _count: Scalars['Int']['output'];
  id: StringAggExp;
  tableName: StringAggExp;
};

export type CoreTableNamesBoolExp = {
  _and?: InputMaybe<Array<CoreTableNamesBoolExp>>;
  _not?: InputMaybe<CoreTableNamesBoolExp>;
  _or?: InputMaybe<Array<CoreTableNamesBoolExp>>;
  allowedUrlTypes?: InputMaybe<AllowedUrlTypesBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  socials?: InputMaybe<SocialsBoolExp>;
  tableName?: InputMaybe<StringBoolExp>;
  urls?: InputMaybe<UrlsBoolExp>;
};

export type CoreTableNamesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CoreTableNamesOrderByExp>>;
  where?: InputMaybe<CoreTableNamesBoolExp>;
};

export type CoreTableNamesOrderByExp = {
  id?: InputMaybe<OrderBy>;
  tableName?: InputMaybe<OrderBy>;
};

export type Countries = {
  __typename?: 'Countries';
  code: Scalars['String']['output'];
  entities?: Maybe<Array<Entities>>;
  entitiesAggregate: EntitiesAggExp;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};


export type CountriesEntitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<EntitiesOrderByExp>>;
  where?: InputMaybe<EntitiesBoolExp>;
};


export type CountriesEntitiesAggregateArgs = {
  filter_input?: InputMaybe<EntitiesFilterInput>;
};

export type CountriesAggExp = {
  __typename?: 'CountriesAggExp';
  _count: Scalars['Int']['output'];
  code: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
};

export type CountriesBoolExp = {
  _and?: InputMaybe<Array<CountriesBoolExp>>;
  _not?: InputMaybe<CountriesBoolExp>;
  _or?: InputMaybe<Array<CountriesBoolExp>>;
  code?: InputMaybe<StringBoolExp>;
  entities?: InputMaybe<EntitiesBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
};

export type CountriesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CountriesOrderByExp>>;
  where?: InputMaybe<CountriesBoolExp>;
};

export type CountriesOrderByExp = {
  code?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

export type DateAggExp = {
  __typename?: 'DateAggExp';
  _count: Scalars['Int']['output'];
  _count_distinct: Scalars['Int']['output'];
};

export type DateBoolExp = {
  _and?: InputMaybe<Array<DateBoolExp>>;
  _eq?: InputMaybe<Scalars['Date']['input']>;
  _gt?: InputMaybe<Scalars['Date']['input']>;
  _gte?: InputMaybe<Scalars['Date']['input']>;
  _in?: InputMaybe<Array<Scalars['Date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Date']['input']>;
  _lte?: InputMaybe<Scalars['Date']['input']>;
  _not?: InputMaybe<DateBoolExp>;
  _or?: InputMaybe<Array<DateBoolExp>>;
};

export type DeploymentTypes = {
  __typename?: 'DeploymentTypes';
  definition: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  smartContractDeployments?: Maybe<Array<SmartContractDeployments>>;
  smartContractDeploymentsAggregate: SmartContractDeploymentsAggExp;
};


export type DeploymentTypesSmartContractDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SmartContractDeploymentsOrderByExp>>;
  where?: InputMaybe<SmartContractDeploymentsBoolExp>;
};


export type DeploymentTypesSmartContractDeploymentsAggregateArgs = {
  filter_input?: InputMaybe<SmartContractDeploymentsFilterInput>;
};

export type DeploymentTypesAggExp = {
  __typename?: 'DeploymentTypesAggExp';
  _count: Scalars['Int']['output'];
  definition: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
  slug: StringAggExp;
};

export type DeploymentTypesBoolExp = {
  _and?: InputMaybe<Array<DeploymentTypesBoolExp>>;
  _not?: InputMaybe<DeploymentTypesBoolExp>;
  _or?: InputMaybe<Array<DeploymentTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  slug?: InputMaybe<StringBoolExp>;
  smartContractDeployments?: InputMaybe<SmartContractDeploymentsBoolExp>;
};

export type DeploymentTypesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeploymentTypesOrderByExp>>;
  where?: InputMaybe<DeploymentTypesBoolExp>;
};

export type DeploymentTypesOrderByExp = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
};

export type DerivativeAssets = {
  __typename?: 'DerivativeAssets';
  asset?: Maybe<Assets>;
  assetByDerivativeAssetId?: Maybe<Assets>;
  baseAssetId: Scalars['String']['output'];
  derivativeAssetId: Scalars['String']['output'];
  id: Scalars['String']['output'];
};

export type DerivativeAssetsAggExp = {
  __typename?: 'DerivativeAssetsAggExp';
  _count: Scalars['Int']['output'];
  baseAssetId: StringAggExp;
  derivativeAssetId: StringAggExp;
  id: StringAggExp;
};

export type DerivativeAssetsBoolExp = {
  _and?: InputMaybe<Array<DerivativeAssetsBoolExp>>;
  _not?: InputMaybe<DerivativeAssetsBoolExp>;
  _or?: InputMaybe<Array<DerivativeAssetsBoolExp>>;
  asset?: InputMaybe<AssetsBoolExp>;
  assetByDerivativeAssetId?: InputMaybe<AssetsBoolExp>;
  baseAssetId?: InputMaybe<StringBoolExp>;
  derivativeAssetId?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
};

export type DerivativeAssetsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DerivativeAssetsOrderByExp>>;
  where?: InputMaybe<DerivativeAssetsBoolExp>;
};

export type DerivativeAssetsOrderByExp = {
  asset?: InputMaybe<AssetsOrderByExp>;
  assetByDerivativeAssetId?: InputMaybe<AssetsOrderByExp>;
  baseAssetId?: InputMaybe<OrderBy>;
  derivativeAssetId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

export type Entities = {
  __typename?: 'Entities';
  address: Scalars['String']['output'];
  country?: Maybe<Countries>;
  countryId?: Maybe<Scalars['String']['output']>;
  dateOfIncorporation?: Maybe<Scalars['Date']['output']>;
  entityType?: Maybe<EntityTypes>;
  entityTypeId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  leiNumber: Scalars['String']['output'];
  localRegistrationNumber: Scalars['String']['output'];
  name: Scalars['String']['output'];
  root?: Maybe<Roots>;
  rootId: Scalars['String']['output'];
  socials?: Maybe<Array<EntitySocials>>;
  taxIdentificationNumber: Scalars['String']['output'];
  tradeName: Scalars['String']['output'];
  urls?: Maybe<Array<EntityUrls>>;
};


export type EntitiesSocialsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<EntitySocialsOrderBy>>;
  where?: InputMaybe<EntitySocialsBoolExp>;
};


export type EntitiesUrlsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<EntityUrlsOrderBy>>;
  where?: InputMaybe<EntityUrlsBoolExp>;
};

export type EntitiesAggExp = {
  __typename?: 'EntitiesAggExp';
  _count: Scalars['Int']['output'];
  address: StringAggExp;
  countryId: StringAggExp;
  dateOfIncorporation: DateAggExp;
  entityTypeId: StringAggExp;
  id: StringAggExp;
  leiNumber: StringAggExp;
  localRegistrationNumber: StringAggExp;
  name: StringAggExp;
  rootId: StringAggExp;
  taxIdentificationNumber: StringAggExp;
  tradeName: StringAggExp;
};

export type EntitiesBoolExp = {
  _and?: InputMaybe<Array<EntitiesBoolExp>>;
  _not?: InputMaybe<EntitiesBoolExp>;
  _or?: InputMaybe<Array<EntitiesBoolExp>>;
  address?: InputMaybe<StringBoolExp>;
  country?: InputMaybe<CountriesBoolExp>;
  countryId?: InputMaybe<StringBoolExp>;
  dateOfIncorporation?: InputMaybe<DateBoolExp>;
  entityType?: InputMaybe<EntityTypesBoolExp>;
  entityTypeId?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  leiNumber?: InputMaybe<StringBoolExp>;
  localRegistrationNumber?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  root?: InputMaybe<RootsBoolExp>;
  rootId?: InputMaybe<StringBoolExp>;
  socials?: InputMaybe<EntitySocialsBoolExp>;
  taxIdentificationNumber?: InputMaybe<StringBoolExp>;
  tradeName?: InputMaybe<StringBoolExp>;
  urls?: InputMaybe<EntityUrlsBoolExp>;
};

export type EntitiesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<EntitiesOrderByExp>>;
  where?: InputMaybe<EntitiesBoolExp>;
};

export type EntitiesOrderByExp = {
  address?: InputMaybe<OrderBy>;
  country?: InputMaybe<CountriesOrderByExp>;
  countryId?: InputMaybe<OrderBy>;
  dateOfIncorporation?: InputMaybe<OrderBy>;
  entityType?: InputMaybe<EntityTypesOrderByExp>;
  entityTypeId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  leiNumber?: InputMaybe<OrderBy>;
  localRegistrationNumber?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  root?: InputMaybe<RootsOrderByExp>;
  rootId?: InputMaybe<OrderBy>;
  taxIdentificationNumber?: InputMaybe<OrderBy>;
  tradeName?: InputMaybe<OrderBy>;
};

export type EntitySocials = {
  __typename?: 'EntitySocials';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  rootId: Scalars['String']['output'];
  rowId: Scalars['String']['output'];
  socialStatus?: Maybe<SocialStatuses>;
  socialStatusId: Scalars['String']['output'];
  socialType?: Maybe<SocialTypes>;
  socialTypeId: Scalars['String']['output'];
  tableId: Scalars['String']['output'];
  urls?: Maybe<Array<SocialUrls>>;
};


export type EntitySocialsUrlsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SocialUrlsOrderBy>>;
  where?: InputMaybe<SocialUrlsBoolExp>;
};

export type EntitySocialsBoolExp = {
  _and?: InputMaybe<Array<EntitySocialsBoolExp>>;
  _not?: InputMaybe<EntitySocialsBoolExp>;
  _or?: InputMaybe<Array<EntitySocialsBoolExp>>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  rootId?: InputMaybe<StringBoolExp>;
  rowId?: InputMaybe<StringBoolExp>;
  socialStatus?: InputMaybe<SocialStatusesBoolExp>;
  socialStatusId?: InputMaybe<StringBoolExp>;
  socialType?: InputMaybe<SocialTypesBoolExp>;
  socialTypeId?: InputMaybe<StringBoolExp>;
  tableId?: InputMaybe<StringBoolExp>;
};

export type EntitySocialsOrderBy = {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  rootId?: InputMaybe<OrderBy>;
  rowId?: InputMaybe<OrderBy>;
  socialStatus?: InputMaybe<SocialStatusesOrderByExp>;
  socialStatusId?: InputMaybe<OrderBy>;
  socialType?: InputMaybe<SocialTypesOrderByExp>;
  socialTypeId?: InputMaybe<OrderBy>;
  tableId?: InputMaybe<OrderBy>;
};

export type EntityTypes = {
  __typename?: 'EntityTypes';
  definition: Scalars['String']['output'];
  entities?: Maybe<Array<Entities>>;
  entitiesAggregate: EntitiesAggExp;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
};


export type EntityTypesEntitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<EntitiesOrderByExp>>;
  where?: InputMaybe<EntitiesBoolExp>;
};


export type EntityTypesEntitiesAggregateArgs = {
  filter_input?: InputMaybe<EntitiesFilterInput>;
};

export type EntityTypesAggExp = {
  __typename?: 'EntityTypesAggExp';
  _count: Scalars['Int']['output'];
  definition: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
  slug: StringAggExp;
};

export type EntityTypesBoolExp = {
  _and?: InputMaybe<Array<EntityTypesBoolExp>>;
  _not?: InputMaybe<EntityTypesBoolExp>;
  _or?: InputMaybe<Array<EntityTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  entities?: InputMaybe<EntitiesBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  slug?: InputMaybe<StringBoolExp>;
};

export type EntityTypesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<EntityTypesOrderByExp>>;
  where?: InputMaybe<EntityTypesBoolExp>;
};

export type EntityTypesOrderByExp = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
};

export type EntityUrls = {
  __typename?: 'EntityUrls';
  id: Scalars['String']['output'];
  rowId: Scalars['String']['output'];
  tableId: Scalars['String']['output'];
  url: Scalars['String']['output'];
  urlType?: Maybe<UrlTypes>;
  urlTypeId: Scalars['String']['output'];
};

export type EntityUrlsBoolExp = {
  _and?: InputMaybe<Array<EntityUrlsBoolExp>>;
  _not?: InputMaybe<EntityUrlsBoolExp>;
  _or?: InputMaybe<Array<EntityUrlsBoolExp>>;
  id?: InputMaybe<StringBoolExp>;
  rowId?: InputMaybe<StringBoolExp>;
  tableId?: InputMaybe<StringBoolExp>;
  url?: InputMaybe<StringBoolExp>;
  urlType?: InputMaybe<UrlTypesBoolExp>;
  urlTypeId?: InputMaybe<StringBoolExp>;
};

export type EntityUrlsOrderBy = {
  id?: InputMaybe<OrderBy>;
  rowId?: InputMaybe<OrderBy>;
  tableId?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
  urlType?: InputMaybe<UrlTypesOrderByExp>;
  urlTypeId?: InputMaybe<OrderBy>;
};

export type ImageTypes = {
  __typename?: 'ImageTypes';
  definition: Scalars['String']['output'];
  id: Scalars['String']['output'];
  images?: Maybe<Array<Images>>;
  imagesAggregate: ImagesAggExp;
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
};


export type ImageTypesImagesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ImagesOrderByExp>>;
  where?: InputMaybe<ImagesBoolExp>;
};


export type ImageTypesImagesAggregateArgs = {
  filter_input?: InputMaybe<ImagesFilterInput>;
};

export type ImageTypesAggExp = {
  __typename?: 'ImageTypesAggExp';
  _count: Scalars['Int']['output'];
  definition: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
  slug: StringAggExp;
};

export type ImageTypesBoolExp = {
  _and?: InputMaybe<Array<ImageTypesBoolExp>>;
  _not?: InputMaybe<ImageTypesBoolExp>;
  _or?: InputMaybe<Array<ImageTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  images?: InputMaybe<ImagesBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  slug?: InputMaybe<StringBoolExp>;
};

export type ImageTypesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ImageTypesOrderByExp>>;
  where?: InputMaybe<ImageTypesBoolExp>;
};

export type ImageTypesOrderByExp = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
};

export type Images = {
  __typename?: 'Images';
  id: Scalars['String']['output'];
  image: Scalars['String']['output'];
  imageType?: Maybe<ImageTypes>;
  imageTypeId?: Maybe<Scalars['String']['output']>;
  rootId: Scalars['String']['output'];
  rowId: Scalars['String']['output'];
  tableId: Scalars['String']['output'];
};

export type ImagesAggExp = {
  __typename?: 'ImagesAggExp';
  _count: Scalars['Int']['output'];
  id: StringAggExp;
  image: StringAggExp;
  imageTypeId: StringAggExp;
  rootId: StringAggExp;
  rowId: StringAggExp;
  tableId: StringAggExp;
};

export type ImagesBoolExp = {
  _and?: InputMaybe<Array<ImagesBoolExp>>;
  _not?: InputMaybe<ImagesBoolExp>;
  _or?: InputMaybe<Array<ImagesBoolExp>>;
  id?: InputMaybe<StringBoolExp>;
  image?: InputMaybe<StringBoolExp>;
  imageType?: InputMaybe<ImageTypesBoolExp>;
  imageTypeId?: InputMaybe<StringBoolExp>;
  rootId?: InputMaybe<StringBoolExp>;
  rowId?: InputMaybe<StringBoolExp>;
  tableId?: InputMaybe<StringBoolExp>;
};

export type ImagesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ImagesOrderByExp>>;
  where?: InputMaybe<ImagesBoolExp>;
};

export type ImagesOrderByExp = {
  id?: InputMaybe<OrderBy>;
  image?: InputMaybe<OrderBy>;
  imageType?: InputMaybe<ImageTypesOrderByExp>;
  imageTypeId?: InputMaybe<OrderBy>;
  rootId?: InputMaybe<OrderBy>;
  rowId?: InputMaybe<OrderBy>;
  tableId?: InputMaybe<OrderBy>;
};

export type Int8AggExp = {
  __typename?: 'Int8AggExp';
  _count: Scalars['Int']['output'];
  _count_distinct: Scalars['Int']['output'];
  avg: Scalars['Float64']['output'];
  max: Scalars['Int8']['output'];
  min: Scalars['Int8']['output'];
  sum: Scalars['Int64']['output'];
};

export type Int8BoolExp = {
  _and?: InputMaybe<Array<Int8BoolExp>>;
  _eq?: InputMaybe<Scalars['Int8']['input']>;
  _gt?: InputMaybe<Scalars['Int8']['input']>;
  _gte?: InputMaybe<Scalars['Int8']['input']>;
  _in?: InputMaybe<Array<Scalars['Int8']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int8']['input']>;
  _lte?: InputMaybe<Scalars['Int8']['input']>;
  _not?: InputMaybe<Int8BoolExp>;
  _or?: InputMaybe<Array<Int8BoolExp>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Send an HTTP request */
  sendHttpRequest?: Maybe<Scalars['Json']['output']>;
};


export type MutationSendHttpRequestArgs = {
  additionalHeaders?: InputMaybe<Scalars['Json']['input']>;
  body?: InputMaybe<Scalars['Json']['input']>;
  headers?: InputMaybe<Scalars['Json']['input']>;
  method?: InputMaybe<Scalars['Enum']['input']>;
  retry?: InputMaybe<RetryPolicyInput>;
  timeout?: InputMaybe<Scalars['Int32']['input']>;
  url: Scalars['String']['input'];
};

export enum OrderBy {
  /** Sorts the data in ascending order */
  Asc = 'Asc',
  /** Sorts the data in descending order */
  Desc = 'Desc'
}

export type ProductAssetRelationships = {
  __typename?: 'ProductAssetRelationships';
  asset?: Maybe<Assets>;
  assetId: Scalars['String']['output'];
  assetSupportType?: Maybe<AssetSupportTypes>;
  assetSupportTypeId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  product?: Maybe<Products>;
  productId: Scalars['String']['output'];
};

export type ProductAssetRelationshipsAggExp = {
  __typename?: 'ProductAssetRelationshipsAggExp';
  _count: Scalars['Int']['output'];
  assetId: StringAggExp;
  assetSupportTypeId: StringAggExp;
  id: StringAggExp;
  productId: StringAggExp;
};

export type ProductAssetRelationshipsBoolExp = {
  _and?: InputMaybe<Array<ProductAssetRelationshipsBoolExp>>;
  _not?: InputMaybe<ProductAssetRelationshipsBoolExp>;
  _or?: InputMaybe<Array<ProductAssetRelationshipsBoolExp>>;
  asset?: InputMaybe<AssetsBoolExp>;
  assetId?: InputMaybe<StringBoolExp>;
  assetSupportType?: InputMaybe<AssetSupportTypesBoolExp>;
  assetSupportTypeId?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  product?: InputMaybe<ProductsBoolExp>;
  productId?: InputMaybe<StringBoolExp>;
};

export type ProductAssetRelationshipsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductAssetRelationshipsOrderByExp>>;
  where?: InputMaybe<ProductAssetRelationshipsBoolExp>;
};

export type ProductAssetRelationshipsOrderByExp = {
  asset?: InputMaybe<AssetsOrderByExp>;
  assetId?: InputMaybe<OrderBy>;
  assetSupportType?: InputMaybe<AssetSupportTypesOrderByExp>;
  assetSupportTypeId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  product?: InputMaybe<ProductsOrderByExp>;
  productId?: InputMaybe<OrderBy>;
};

export type ProductDeployments = {
  __typename?: 'ProductDeployments';
  deploymentId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  product?: Maybe<Products>;
  productId: Scalars['String']['output'];
  smartContractDeployment?: Maybe<SmartContractDeployments>;
};

export type ProductDeploymentsAggExp = {
  __typename?: 'ProductDeploymentsAggExp';
  _count: Scalars['Int']['output'];
  deploymentId: StringAggExp;
  id: StringAggExp;
  productId: StringAggExp;
};

export type ProductDeploymentsBoolExp = {
  _and?: InputMaybe<Array<ProductDeploymentsBoolExp>>;
  _not?: InputMaybe<ProductDeploymentsBoolExp>;
  _or?: InputMaybe<Array<ProductDeploymentsBoolExp>>;
  deploymentId?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  product?: InputMaybe<ProductsBoolExp>;
  productId?: InputMaybe<StringBoolExp>;
  smartContractDeployment?: InputMaybe<SmartContractDeploymentsBoolExp>;
};

export type ProductDeploymentsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductDeploymentsOrderByExp>>;
  where?: InputMaybe<ProductDeploymentsBoolExp>;
};

export type ProductDeploymentsOrderByExp = {
  deploymentId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  product?: InputMaybe<ProductsOrderByExp>;
  productId?: InputMaybe<OrderBy>;
  smartContractDeployment?: InputMaybe<SmartContractDeploymentsOrderByExp>;
};

export type ProductSocials = {
  __typename?: 'ProductSocials';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  rootId: Scalars['String']['output'];
  rowId: Scalars['String']['output'];
  socialStatus?: Maybe<SocialStatuses>;
  socialStatusId: Scalars['String']['output'];
  socialType?: Maybe<SocialTypes>;
  socialTypeId: Scalars['String']['output'];
  tableId: Scalars['String']['output'];
  urls?: Maybe<Array<SocialUrls>>;
};


export type ProductSocialsUrlsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SocialUrlsOrderBy>>;
  where?: InputMaybe<SocialUrlsBoolExp>;
};

export type ProductSocialsBoolExp = {
  _and?: InputMaybe<Array<ProductSocialsBoolExp>>;
  _not?: InputMaybe<ProductSocialsBoolExp>;
  _or?: InputMaybe<Array<ProductSocialsBoolExp>>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  rootId?: InputMaybe<StringBoolExp>;
  rowId?: InputMaybe<StringBoolExp>;
  socialStatus?: InputMaybe<SocialStatusesBoolExp>;
  socialStatusId?: InputMaybe<StringBoolExp>;
  socialType?: InputMaybe<SocialTypesBoolExp>;
  socialTypeId?: InputMaybe<StringBoolExp>;
  tableId?: InputMaybe<StringBoolExp>;
};

export type ProductSocialsOrderBy = {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  rootId?: InputMaybe<OrderBy>;
  rowId?: InputMaybe<OrderBy>;
  socialStatus?: InputMaybe<SocialStatusesOrderByExp>;
  socialStatusId?: InputMaybe<OrderBy>;
  socialType?: InputMaybe<SocialTypesOrderByExp>;
  socialTypeId?: InputMaybe<OrderBy>;
  tableId?: InputMaybe<OrderBy>;
};

export type ProductStatuses = {
  __typename?: 'ProductStatuses';
  definition: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  products?: Maybe<Array<Products>>;
  productsAggregate: ProductsAggExp;
  slug?: Maybe<Scalars['String']['output']>;
};


export type ProductStatusesProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductsOrderByExp>>;
  where?: InputMaybe<ProductsBoolExp>;
};


export type ProductStatusesProductsAggregateArgs = {
  filter_input?: InputMaybe<ProductsFilterInput>;
};

export type ProductStatusesAggExp = {
  __typename?: 'ProductStatusesAggExp';
  _count: Scalars['Int']['output'];
  definition: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
  slug: StringAggExp;
};

export type ProductStatusesBoolExp = {
  _and?: InputMaybe<Array<ProductStatusesBoolExp>>;
  _not?: InputMaybe<ProductStatusesBoolExp>;
  _or?: InputMaybe<Array<ProductStatusesBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  products?: InputMaybe<ProductsBoolExp>;
  slug?: InputMaybe<StringBoolExp>;
};

export type ProductStatusesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductStatusesOrderByExp>>;
  where?: InputMaybe<ProductStatusesBoolExp>;
};

export type ProductStatusesOrderByExp = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
};

export type ProductTypes = {
  __typename?: 'ProductTypes';
  definition: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  products?: Maybe<Array<Products>>;
  productsAggregate: ProductsAggExp;
  slug?: Maybe<Scalars['String']['output']>;
};


export type ProductTypesProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductsOrderByExp>>;
  where?: InputMaybe<ProductsBoolExp>;
};


export type ProductTypesProductsAggregateArgs = {
  filter_input?: InputMaybe<ProductsFilterInput>;
};

export type ProductTypesAggExp = {
  __typename?: 'ProductTypesAggExp';
  _count: Scalars['Int']['output'];
  definition: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
  slug: StringAggExp;
};

export type ProductTypesBoolExp = {
  _and?: InputMaybe<Array<ProductTypesBoolExp>>;
  _not?: InputMaybe<ProductTypesBoolExp>;
  _or?: InputMaybe<Array<ProductTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  products?: InputMaybe<ProductsBoolExp>;
  slug?: InputMaybe<StringBoolExp>;
};

export type ProductTypesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductTypesOrderByExp>>;
  where?: InputMaybe<ProductTypesBoolExp>;
};

export type ProductTypesOrderByExp = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
};

export type ProductUrls = {
  __typename?: 'ProductUrls';
  id: Scalars['String']['output'];
  rowId: Scalars['String']['output'];
  tableId: Scalars['String']['output'];
  url: Scalars['String']['output'];
  urlType?: Maybe<UrlTypes>;
  urlTypeId: Scalars['String']['output'];
};

export type ProductUrlsBoolExp = {
  _and?: InputMaybe<Array<ProductUrlsBoolExp>>;
  _not?: InputMaybe<ProductUrlsBoolExp>;
  _or?: InputMaybe<Array<ProductUrlsBoolExp>>;
  id?: InputMaybe<StringBoolExp>;
  rowId?: InputMaybe<StringBoolExp>;
  tableId?: InputMaybe<StringBoolExp>;
  url?: InputMaybe<StringBoolExp>;
  urlType?: InputMaybe<UrlTypesBoolExp>;
  urlTypeId?: InputMaybe<StringBoolExp>;
};

export type ProductUrlsOrderBy = {
  id?: InputMaybe<OrderBy>;
  rowId?: InputMaybe<OrderBy>;
  tableId?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
  urlType?: InputMaybe<UrlTypesOrderByExp>;
  urlTypeId?: InputMaybe<OrderBy>;
};

export type Products = {
  __typename?: 'Products';
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isMainProduct: Scalars['Int8']['output'];
  launchDate?: Maybe<Scalars['Date']['output']>;
  name: Scalars['String']['output'];
  productAssetRelationships?: Maybe<Array<ProductAssetRelationships>>;
  productAssetRelationshipsAggregate: ProductAssetRelationshipsAggExp;
  productDeployments?: Maybe<Array<ProductDeployments>>;
  productDeploymentsAggregate: ProductDeploymentsAggExp;
  productStatus?: Maybe<ProductStatuses>;
  productStatusId?: Maybe<Scalars['String']['output']>;
  productType?: Maybe<ProductTypes>;
  productTypeId?: Maybe<Scalars['String']['output']>;
  root?: Maybe<Roots>;
  rootId: Scalars['String']['output'];
  socials?: Maybe<Array<ProductSocials>>;
  supportsProducts?: Maybe<Array<SupportsProducts>>;
  supportsProductsAggregate: SupportsProductsAggExp;
  supportsProductsBySupportsProductId?: Maybe<Array<SupportsProducts>>;
  supportsProductsBySupportsProductIdAggregate: SupportsProductsAggExp;
  urls?: Maybe<Array<ProductUrls>>;
};


export type ProductsProductAssetRelationshipsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductAssetRelationshipsOrderByExp>>;
  where?: InputMaybe<ProductAssetRelationshipsBoolExp>;
};


export type ProductsProductAssetRelationshipsAggregateArgs = {
  filter_input?: InputMaybe<ProductAssetRelationshipsFilterInput>;
};


export type ProductsProductDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductDeploymentsOrderByExp>>;
  where?: InputMaybe<ProductDeploymentsBoolExp>;
};


export type ProductsProductDeploymentsAggregateArgs = {
  filter_input?: InputMaybe<ProductDeploymentsFilterInput>;
};


export type ProductsSocialsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductSocialsOrderBy>>;
  where?: InputMaybe<ProductSocialsBoolExp>;
};


export type ProductsSupportsProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SupportsProductsOrderByExp>>;
  where?: InputMaybe<SupportsProductsBoolExp>;
};


export type ProductsSupportsProductsAggregateArgs = {
  filter_input?: InputMaybe<SupportsProductsFilterInput>;
};


export type ProductsSupportsProductsBySupportsProductIdArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SupportsProductsOrderByExp>>;
  where?: InputMaybe<SupportsProductsBoolExp>;
};


export type ProductsSupportsProductsBySupportsProductIdAggregateArgs = {
  filter_input?: InputMaybe<SupportsProductsFilterInput>;
};


export type ProductsUrlsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductUrlsOrderBy>>;
  where?: InputMaybe<ProductUrlsBoolExp>;
};

export type ProductsAggExp = {
  __typename?: 'ProductsAggExp';
  _count: Scalars['Int']['output'];
  description: StringAggExp;
  id: StringAggExp;
  isMainProduct: Int8AggExp;
  launchDate: DateAggExp;
  name: StringAggExp;
  productStatusId: StringAggExp;
  productTypeId: StringAggExp;
  rootId: StringAggExp;
};

export type ProductsBoolExp = {
  _and?: InputMaybe<Array<ProductsBoolExp>>;
  _not?: InputMaybe<ProductsBoolExp>;
  _or?: InputMaybe<Array<ProductsBoolExp>>;
  description?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  isMainProduct?: InputMaybe<Int8BoolExp>;
  launchDate?: InputMaybe<DateBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  productAssetRelationships?: InputMaybe<ProductAssetRelationshipsBoolExp>;
  productDeployments?: InputMaybe<ProductDeploymentsBoolExp>;
  productStatus?: InputMaybe<ProductStatusesBoolExp>;
  productStatusId?: InputMaybe<StringBoolExp>;
  productType?: InputMaybe<ProductTypesBoolExp>;
  productTypeId?: InputMaybe<StringBoolExp>;
  root?: InputMaybe<RootsBoolExp>;
  rootId?: InputMaybe<StringBoolExp>;
  socials?: InputMaybe<ProductSocialsBoolExp>;
  supportsProducts?: InputMaybe<SupportsProductsBoolExp>;
  supportsProductsBySupportsProductId?: InputMaybe<SupportsProductsBoolExp>;
  urls?: InputMaybe<ProductUrlsBoolExp>;
};

export type ProductsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductsOrderByExp>>;
  where?: InputMaybe<ProductsBoolExp>;
};

export type ProductsOrderByExp = {
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isMainProduct?: InputMaybe<OrderBy>;
  launchDate?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  productStatus?: InputMaybe<ProductStatusesOrderByExp>;
  productStatusId?: InputMaybe<OrderBy>;
  productType?: InputMaybe<ProductTypesOrderByExp>;
  productTypeId?: InputMaybe<OrderBy>;
  root?: InputMaybe<RootsOrderByExp>;
  rootId?: InputMaybe<OrderBy>;
};

export type ProfileInfoSocials = {
  __typename?: 'ProfileInfoSocials';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  rootId: Scalars['String']['output'];
  rowId: Scalars['String']['output'];
  socialStatus?: Maybe<SocialStatuses>;
  socialStatusId: Scalars['String']['output'];
  socialType?: Maybe<SocialTypes>;
  socialTypeId: Scalars['String']['output'];
  tableId: Scalars['String']['output'];
  urls?: Maybe<Array<SocialUrls>>;
};


export type ProfileInfoSocialsUrlsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SocialUrlsOrderBy>>;
  where?: InputMaybe<SocialUrlsBoolExp>;
};

export type ProfileInfoSocialsBoolExp = {
  _and?: InputMaybe<Array<ProfileInfoSocialsBoolExp>>;
  _not?: InputMaybe<ProfileInfoSocialsBoolExp>;
  _or?: InputMaybe<Array<ProfileInfoSocialsBoolExp>>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  rootId?: InputMaybe<StringBoolExp>;
  rowId?: InputMaybe<StringBoolExp>;
  socialStatus?: InputMaybe<SocialStatusesBoolExp>;
  socialStatusId?: InputMaybe<StringBoolExp>;
  socialType?: InputMaybe<SocialTypesBoolExp>;
  socialTypeId?: InputMaybe<StringBoolExp>;
  tableId?: InputMaybe<StringBoolExp>;
};

export type ProfileInfoSocialsOrderBy = {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  rootId?: InputMaybe<OrderBy>;
  rowId?: InputMaybe<OrderBy>;
  socialStatus?: InputMaybe<SocialStatusesOrderByExp>;
  socialStatusId?: InputMaybe<OrderBy>;
  socialType?: InputMaybe<SocialTypesOrderByExp>;
  socialTypeId?: InputMaybe<OrderBy>;
  tableId?: InputMaybe<OrderBy>;
};

export type ProfileInfoUrls = {
  __typename?: 'ProfileInfoUrls';
  id: Scalars['String']['output'];
  rowId: Scalars['String']['output'];
  tableId: Scalars['String']['output'];
  url: Scalars['String']['output'];
  urlType?: Maybe<UrlTypes>;
  urlTypeId: Scalars['String']['output'];
};

export type ProfileInfoUrlsBoolExp = {
  _and?: InputMaybe<Array<ProfileInfoUrlsBoolExp>>;
  _not?: InputMaybe<ProfileInfoUrlsBoolExp>;
  _or?: InputMaybe<Array<ProfileInfoUrlsBoolExp>>;
  id?: InputMaybe<StringBoolExp>;
  rowId?: InputMaybe<StringBoolExp>;
  tableId?: InputMaybe<StringBoolExp>;
  url?: InputMaybe<StringBoolExp>;
  urlType?: InputMaybe<UrlTypesBoolExp>;
  urlTypeId?: InputMaybe<StringBoolExp>;
};

export type ProfileInfoUrlsOrderBy = {
  id?: InputMaybe<OrderBy>;
  rowId?: InputMaybe<OrderBy>;
  tableId?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
  urlType?: InputMaybe<UrlTypesOrderByExp>;
  urlTypeId?: InputMaybe<OrderBy>;
};

export type ProfileInfos = {
  __typename?: 'ProfileInfos';
  descriptionLong: Scalars['String']['output'];
  descriptionMarketing: Scalars['String']['output'];
  descriptionShort: Scalars['String']['output'];
  foundingDate?: Maybe<Scalars['Date']['output']>;
  icon: Scalars['String']['output'];
  id: Scalars['String']['output'];
  logo: Scalars['String']['output'];
  name: Scalars['String']['output'];
  profileSector?: Maybe<ProfileSectors>;
  profileSectorId?: Maybe<Scalars['String']['output']>;
  profileStatus?: Maybe<ProfileStatuses>;
  profileStatusId?: Maybe<Scalars['String']['output']>;
  profileType?: Maybe<ProfileTypes>;
  profileTypeId?: Maybe<Scalars['String']['output']>;
  root?: Maybe<Roots>;
  rootId: Scalars['String']['output'];
  socials?: Maybe<Array<ProfileInfoSocials>>;
  /** Self promotion field */
  tagLine: Scalars['String']['output'];
  urls?: Maybe<Array<ProfileInfoUrls>>;
};


export type ProfileInfosSocialsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileInfoSocialsOrderBy>>;
  where?: InputMaybe<ProfileInfoSocialsBoolExp>;
};


export type ProfileInfosUrlsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileInfoUrlsOrderBy>>;
  where?: InputMaybe<ProfileInfoUrlsBoolExp>;
};

export type ProfileInfosAggExp = {
  __typename?: 'ProfileInfosAggExp';
  _count: Scalars['Int']['output'];
  descriptionLong: StringAggExp;
  descriptionMarketing: StringAggExp;
  descriptionShort: StringAggExp;
  foundingDate: DateAggExp;
  icon: StringAggExp;
  id: StringAggExp;
  logo: StringAggExp;
  name: StringAggExp;
  profileSectorId: StringAggExp;
  profileStatusId: StringAggExp;
  profileTypeId: StringAggExp;
  rootId: StringAggExp;
  tagLine: StringAggExp;
};

export type ProfileInfosBoolExp = {
  _and?: InputMaybe<Array<ProfileInfosBoolExp>>;
  _not?: InputMaybe<ProfileInfosBoolExp>;
  _or?: InputMaybe<Array<ProfileInfosBoolExp>>;
  descriptionLong?: InputMaybe<StringBoolExp>;
  descriptionMarketing?: InputMaybe<StringBoolExp>;
  descriptionShort?: InputMaybe<StringBoolExp>;
  foundingDate?: InputMaybe<DateBoolExp>;
  icon?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  logo?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  profileSector?: InputMaybe<ProfileSectorsBoolExp>;
  profileSectorId?: InputMaybe<StringBoolExp>;
  profileStatus?: InputMaybe<ProfileStatusesBoolExp>;
  profileStatusId?: InputMaybe<StringBoolExp>;
  profileType?: InputMaybe<ProfileTypesBoolExp>;
  profileTypeId?: InputMaybe<StringBoolExp>;
  root?: InputMaybe<RootsBoolExp>;
  rootId?: InputMaybe<StringBoolExp>;
  tagLine?: InputMaybe<StringBoolExp>;
};

export type ProfileInfosFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileInfosOrderByExp>>;
  where?: InputMaybe<ProfileInfosBoolExp>;
};

export type ProfileInfosOrderByExp = {
  descriptionLong?: InputMaybe<OrderBy>;
  descriptionMarketing?: InputMaybe<OrderBy>;
  descriptionShort?: InputMaybe<OrderBy>;
  foundingDate?: InputMaybe<OrderBy>;
  icon?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  logo?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  profileSector?: InputMaybe<ProfileSectorsOrderByExp>;
  profileSectorId?: InputMaybe<OrderBy>;
  profileStatus?: InputMaybe<ProfileStatusesOrderByExp>;
  profileStatusId?: InputMaybe<OrderBy>;
  profileType?: InputMaybe<ProfileTypesOrderByExp>;
  profileTypeId?: InputMaybe<OrderBy>;
  root?: InputMaybe<RootsOrderByExp>;
  rootId?: InputMaybe<OrderBy>;
  tagLine?: InputMaybe<OrderBy>;
};

export type ProfileSectors = {
  __typename?: 'ProfileSectors';
  definition: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  profileInfos?: Maybe<Array<ProfileInfos>>;
  profileInfosAggregate: ProfileInfosAggExp;
  slug?: Maybe<Scalars['String']['output']>;
};


export type ProfileSectorsProfileInfosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileInfosOrderByExp>>;
  where?: InputMaybe<ProfileInfosBoolExp>;
};


export type ProfileSectorsProfileInfosAggregateArgs = {
  filter_input?: InputMaybe<ProfileInfosFilterInput>;
};

export type ProfileSectorsAggExp = {
  __typename?: 'ProfileSectorsAggExp';
  _count: Scalars['Int']['output'];
  definition: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
  slug: StringAggExp;
};

export type ProfileSectorsBoolExp = {
  _and?: InputMaybe<Array<ProfileSectorsBoolExp>>;
  _not?: InputMaybe<ProfileSectorsBoolExp>;
  _or?: InputMaybe<Array<ProfileSectorsBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  profileInfos?: InputMaybe<ProfileInfosBoolExp>;
  slug?: InputMaybe<StringBoolExp>;
};

export type ProfileSectorsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileSectorsOrderByExp>>;
  where?: InputMaybe<ProfileSectorsBoolExp>;
};

export type ProfileSectorsOrderByExp = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
};

export type ProfileStatuses = {
  __typename?: 'ProfileStatuses';
  definition: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  profileInfos?: Maybe<Array<ProfileInfos>>;
  profileInfosAggregate: ProfileInfosAggExp;
  slug?: Maybe<Scalars['String']['output']>;
};


export type ProfileStatusesProfileInfosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileInfosOrderByExp>>;
  where?: InputMaybe<ProfileInfosBoolExp>;
};


export type ProfileStatusesProfileInfosAggregateArgs = {
  filter_input?: InputMaybe<ProfileInfosFilterInput>;
};

export type ProfileStatusesAggExp = {
  __typename?: 'ProfileStatusesAggExp';
  _count: Scalars['Int']['output'];
  definition: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
  slug: StringAggExp;
};

export type ProfileStatusesBoolExp = {
  _and?: InputMaybe<Array<ProfileStatusesBoolExp>>;
  _not?: InputMaybe<ProfileStatusesBoolExp>;
  _or?: InputMaybe<Array<ProfileStatusesBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  profileInfos?: InputMaybe<ProfileInfosBoolExp>;
  slug?: InputMaybe<StringBoolExp>;
};

export type ProfileStatusesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileStatusesOrderByExp>>;
  where?: InputMaybe<ProfileStatusesBoolExp>;
};

export type ProfileStatusesOrderByExp = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
};

/**   */
export type ProfileTags = {
  __typename?: 'ProfileTags';
  id: Scalars['String']['output'];
  root?: Maybe<Roots>;
  rootId: Scalars['String']['output'];
  tag?: Maybe<Tags>;
  tagId: Scalars['String']['output'];
};

export type ProfileTagsAggExp = {
  __typename?: 'ProfileTagsAggExp';
  _count: Scalars['Int']['output'];
  id: StringAggExp;
  rootId: StringAggExp;
  tagId: StringAggExp;
};

export type ProfileTagsBoolExp = {
  _and?: InputMaybe<Array<ProfileTagsBoolExp>>;
  _not?: InputMaybe<ProfileTagsBoolExp>;
  _or?: InputMaybe<Array<ProfileTagsBoolExp>>;
  id?: InputMaybe<StringBoolExp>;
  root?: InputMaybe<RootsBoolExp>;
  rootId?: InputMaybe<StringBoolExp>;
  tag?: InputMaybe<TagsBoolExp>;
  tagId?: InputMaybe<StringBoolExp>;
};

export type ProfileTagsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileTagsOrderByExp>>;
  where?: InputMaybe<ProfileTagsBoolExp>;
};

export type ProfileTagsOrderByExp = {
  id?: InputMaybe<OrderBy>;
  root?: InputMaybe<RootsOrderByExp>;
  rootId?: InputMaybe<OrderBy>;
  tag?: InputMaybe<TagsOrderByExp>;
  tagId?: InputMaybe<OrderBy>;
};

export type ProfileTypes = {
  __typename?: 'ProfileTypes';
  definition: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  profileInfos?: Maybe<Array<ProfileInfos>>;
  profileInfosAggregate: ProfileInfosAggExp;
  slug?: Maybe<Scalars['String']['output']>;
};


export type ProfileTypesProfileInfosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileInfosOrderByExp>>;
  where?: InputMaybe<ProfileInfosBoolExp>;
};


export type ProfileTypesProfileInfosAggregateArgs = {
  filter_input?: InputMaybe<ProfileInfosFilterInput>;
};

export type ProfileTypesAggExp = {
  __typename?: 'ProfileTypesAggExp';
  _count: Scalars['Int']['output'];
  definition: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
  slug: StringAggExp;
};

export type ProfileTypesBoolExp = {
  _and?: InputMaybe<Array<ProfileTypesBoolExp>>;
  _not?: InputMaybe<ProfileTypesBoolExp>;
  _or?: InputMaybe<Array<ProfileTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  profileInfos?: InputMaybe<ProfileInfosBoolExp>;
  slug?: InputMaybe<StringBoolExp>;
};

export type ProfileTypesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileTypesOrderByExp>>;
  where?: InputMaybe<ProfileTypesBoolExp>;
};

export type ProfileTypesOrderByExp = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
};

export type ProgramRanking = {
  __typename?: 'ProgramRanking';
  /** Solana program ID (address) */
  programId: Scalars['String']['output'];
  /** Human-readable name of the program */
  programName: Scalars['String']['output'];
  /** Numerical rank of the program */
  programRank: Scalars['Int32']['output'];
  /** Ranking score between 0 and 1 */
  score: Scalars['Float64']['output'];
  smartContract?: Maybe<SmartContracts>;
};

export type ProgramRankingResponse = {
  __typename?: 'ProgramRankingResponse';
  data: Array<ProgramRanking>;
  /** Unix timestamp of when the rankings were generated */
  date: Scalars['Int32']['output'];
  /** Time interval used for ranking */
  interval: Scalars['String']['output'];
  /** Maximum number of programs returned */
  limit: Scalars['Int32']['output'];
};

export type Query = {
  __typename?: 'Query';
  allowedUrlTypes?: Maybe<Array<AllowedUrlTypes>>;
  allowedUrlTypesAggregate?: Maybe<AllowedUrlTypesAggExp>;
  allowedUrlTypesById?: Maybe<AllowedUrlTypes>;
  /** Get ranked Solana programs */
  alphaVybeRanking: ProgramRankingResponse;
  assetDeployments?: Maybe<Array<AssetDeployments>>;
  assetDeploymentsAggregate?: Maybe<AssetDeploymentsAggExp>;
  assetDeploymentsById?: Maybe<AssetDeployments>;
  assetStandards?: Maybe<Array<AssetStandards>>;
  assetStandardsAggregate?: Maybe<AssetStandardsAggExp>;
  assetStandardsById?: Maybe<AssetStandards>;
  assetStatuses?: Maybe<Array<AssetStatuses>>;
  assetStatusesAggregate?: Maybe<AssetStatusesAggExp>;
  assetStatusesById?: Maybe<AssetStatuses>;
  assetSupportTypes?: Maybe<Array<AssetSupportTypes>>;
  assetSupportTypesAggregate?: Maybe<AssetSupportTypesAggExp>;
  assetSupportTypesById?: Maybe<AssetSupportTypes>;
  assetTypes?: Maybe<Array<AssetTypes>>;
  assetTypesAggregate?: Maybe<AssetTypesAggExp>;
  assetTypesById?: Maybe<AssetTypes>;
  assets?: Maybe<Array<Assets>>;
  assetsAggregate?: Maybe<AssetsAggExp>;
  assetsById?: Maybe<Assets>;
  coreTableNames?: Maybe<Array<CoreTableNames>>;
  coreTableNamesAggregate?: Maybe<CoreTableNamesAggExp>;
  coreTableNamesById?: Maybe<CoreTableNames>;
  countries?: Maybe<Array<Countries>>;
  countriesAggregate?: Maybe<CountriesAggExp>;
  countriesById?: Maybe<Countries>;
  deploymentTypes?: Maybe<Array<DeploymentTypes>>;
  deploymentTypesAggregate?: Maybe<DeploymentTypesAggExp>;
  deploymentTypesById?: Maybe<DeploymentTypes>;
  derivativeAssets?: Maybe<Array<DerivativeAssets>>;
  derivativeAssetsAggregate?: Maybe<DerivativeAssetsAggExp>;
  derivativeAssetsById?: Maybe<DerivativeAssets>;
  entities?: Maybe<Array<Entities>>;
  entitiesAggregate?: Maybe<EntitiesAggExp>;
  entitiesById?: Maybe<Entities>;
  entityTypes?: Maybe<Array<EntityTypes>>;
  entityTypesAggregate?: Maybe<EntityTypesAggExp>;
  entityTypesById?: Maybe<EntityTypes>;
  imageTypes?: Maybe<Array<ImageTypes>>;
  imageTypesAggregate?: Maybe<ImageTypesAggExp>;
  imageTypesById?: Maybe<ImageTypes>;
  images?: Maybe<Array<Images>>;
  imagesAggregate?: Maybe<ImagesAggExp>;
  imagesById?: Maybe<Images>;
  productAssetRelationships?: Maybe<Array<ProductAssetRelationships>>;
  productAssetRelationshipsAggregate?: Maybe<ProductAssetRelationshipsAggExp>;
  productAssetRelationshipsById?: Maybe<ProductAssetRelationships>;
  productDeployments?: Maybe<Array<ProductDeployments>>;
  productDeploymentsAggregate?: Maybe<ProductDeploymentsAggExp>;
  productDeploymentsById?: Maybe<ProductDeployments>;
  productStatuses?: Maybe<Array<ProductStatuses>>;
  productStatusesAggregate?: Maybe<ProductStatusesAggExp>;
  productStatusesById?: Maybe<ProductStatuses>;
  productTypes?: Maybe<Array<ProductTypes>>;
  productTypesAggregate?: Maybe<ProductTypesAggExp>;
  productTypesById?: Maybe<ProductTypes>;
  products?: Maybe<Array<Products>>;
  productsAggregate?: Maybe<ProductsAggExp>;
  productsById?: Maybe<Products>;
  profileInfos?: Maybe<Array<ProfileInfos>>;
  profileInfosAggregate?: Maybe<ProfileInfosAggExp>;
  profileInfosById?: Maybe<ProfileInfos>;
  profileSectors?: Maybe<Array<ProfileSectors>>;
  profileSectorsAggregate?: Maybe<ProfileSectorsAggExp>;
  profileSectorsById?: Maybe<ProfileSectors>;
  profileStatuses?: Maybe<Array<ProfileStatuses>>;
  profileStatusesAggregate?: Maybe<ProfileStatusesAggExp>;
  profileStatusesById?: Maybe<ProfileStatuses>;
  /** Selects multiple objects from the model. Model description:   */
  profileTags?: Maybe<Array<ProfileTags>>;
  profileTagsAggregate?: Maybe<ProfileTagsAggExp>;
  /** Selects a single object from the model. Model description:   */
  profileTagsById?: Maybe<ProfileTags>;
  profileTypes?: Maybe<Array<ProfileTypes>>;
  profileTypesAggregate?: Maybe<ProfileTypesAggExp>;
  profileTypesById?: Maybe<ProfileTypes>;
  rootRelationshipTypes?: Maybe<Array<RootRelationshipTypes>>;
  rootRelationshipTypesAggregate?: Maybe<RootRelationshipTypesAggExp>;
  rootRelationshipTypesById?: Maybe<RootRelationshipTypes>;
  rootRelationships?: Maybe<Array<RootRelationships>>;
  rootRelationshipsAggregate?: Maybe<RootRelationshipsAggExp>;
  rootRelationshipsById?: Maybe<RootRelationships>;
  roots?: Maybe<Array<Roots>>;
  rootsAggregate?: Maybe<RootsAggExp>;
  rootsById?: Maybe<Roots>;
  smartContractDeployments?: Maybe<Array<SmartContractDeployments>>;
  smartContractDeploymentsAggregate?: Maybe<SmartContractDeploymentsAggExp>;
  smartContractDeploymentsById?: Maybe<SmartContractDeployments>;
  smartContracts?: Maybe<Array<SmartContracts>>;
  smartContractsAggregate?: Maybe<SmartContractsAggExp>;
  smartContractsById?: Maybe<SmartContracts>;
  socialStatuses?: Maybe<Array<SocialStatuses>>;
  socialStatusesAggregate?: Maybe<SocialStatusesAggExp>;
  socialStatusesById?: Maybe<SocialStatuses>;
  socialTypes?: Maybe<Array<SocialTypes>>;
  socialTypesAggregate?: Maybe<SocialTypesAggExp>;
  socialTypesById?: Maybe<SocialTypes>;
  socials?: Maybe<Array<Socials>>;
  socialsAggregate?: Maybe<SocialsAggExp>;
  socialsById?: Maybe<Socials>;
  /** Selects multiple objects from the model. Model description: Table mapping product support relationships */
  supportsProducts?: Maybe<Array<SupportsProducts>>;
  supportsProductsAggregate?: Maybe<SupportsProductsAggExp>;
  /** Selects a single object from the model. Model description: Table mapping product support relationships */
  supportsProductsById?: Maybe<SupportsProducts>;
  tagTypes?: Maybe<Array<TagTypes>>;
  tagTypesAggregate?: Maybe<TagTypesAggExp>;
  tagTypesById?: Maybe<TagTypes>;
  tags?: Maybe<Array<Tags>>;
  tagsAggregate?: Maybe<TagsAggExp>;
  tagsById?: Maybe<Tags>;
  theGridRankings?: Maybe<Array<TheGridRanking>>;
  urlTypes?: Maybe<Array<UrlTypes>>;
  urlTypesAggregate?: Maybe<UrlTypesAggExp>;
  urlTypesById?: Maybe<UrlTypes>;
  urls?: Maybe<Array<Urls>>;
  urlsAggregate?: Maybe<UrlsAggExp>;
  urlsById?: Maybe<Urls>;
};


export type QueryAllowedUrlTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AllowedUrlTypesOrderByExp>>;
  where?: InputMaybe<AllowedUrlTypesBoolExp>;
};


export type QueryAllowedUrlTypesAggregateArgs = {
  filter_input?: InputMaybe<AllowedUrlTypesFilterInput>;
};


export type QueryAllowedUrlTypesByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryAlphaVybeRankingArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  interval?: InputMaybe<Scalars['Enum']['input']>;
  limit?: InputMaybe<Scalars['Int32']['input']>;
  xApiKey: Scalars['String']['input'];
};


export type QueryAssetDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetDeploymentsOrderByExp>>;
  where?: InputMaybe<AssetDeploymentsBoolExp>;
};


export type QueryAssetDeploymentsAggregateArgs = {
  filter_input?: InputMaybe<AssetDeploymentsFilterInput>;
};


export type QueryAssetDeploymentsByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryAssetStandardsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetStandardsOrderByExp>>;
  where?: InputMaybe<AssetStandardsBoolExp>;
};


export type QueryAssetStandardsAggregateArgs = {
  filter_input?: InputMaybe<AssetStandardsFilterInput>;
};


export type QueryAssetStandardsByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryAssetStatusesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetStatusesOrderByExp>>;
  where?: InputMaybe<AssetStatusesBoolExp>;
};


export type QueryAssetStatusesAggregateArgs = {
  filter_input?: InputMaybe<AssetStatusesFilterInput>;
};


export type QueryAssetStatusesByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryAssetSupportTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetSupportTypesOrderByExp>>;
  where?: InputMaybe<AssetSupportTypesBoolExp>;
};


export type QueryAssetSupportTypesAggregateArgs = {
  filter_input?: InputMaybe<AssetSupportTypesFilterInput>;
};


export type QueryAssetSupportTypesByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryAssetTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetTypesOrderByExp>>;
  where?: InputMaybe<AssetTypesBoolExp>;
};


export type QueryAssetTypesAggregateArgs = {
  filter_input?: InputMaybe<AssetTypesFilterInput>;
};


export type QueryAssetTypesByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetsOrderByExp>>;
  where?: InputMaybe<AssetsBoolExp>;
};


export type QueryAssetsAggregateArgs = {
  filter_input?: InputMaybe<AssetsFilterInput>;
};


export type QueryAssetsByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryCoreTableNamesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CoreTableNamesOrderByExp>>;
  where?: InputMaybe<CoreTableNamesBoolExp>;
};


export type QueryCoreTableNamesAggregateArgs = {
  filter_input?: InputMaybe<CoreTableNamesFilterInput>;
};


export type QueryCoreTableNamesByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryCountriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CountriesOrderByExp>>;
  where?: InputMaybe<CountriesBoolExp>;
};


export type QueryCountriesAggregateArgs = {
  filter_input?: InputMaybe<CountriesFilterInput>;
};


export type QueryCountriesByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryDeploymentTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeploymentTypesOrderByExp>>;
  where?: InputMaybe<DeploymentTypesBoolExp>;
};


export type QueryDeploymentTypesAggregateArgs = {
  filter_input?: InputMaybe<DeploymentTypesFilterInput>;
};


export type QueryDeploymentTypesByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryDerivativeAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DerivativeAssetsOrderByExp>>;
  where?: InputMaybe<DerivativeAssetsBoolExp>;
};


export type QueryDerivativeAssetsAggregateArgs = {
  filter_input?: InputMaybe<DerivativeAssetsFilterInput>;
};


export type QueryDerivativeAssetsByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryEntitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<EntitiesOrderByExp>>;
  where?: InputMaybe<EntitiesBoolExp>;
};


export type QueryEntitiesAggregateArgs = {
  filter_input?: InputMaybe<EntitiesFilterInput>;
};


export type QueryEntitiesByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryEntityTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<EntityTypesOrderByExp>>;
  where?: InputMaybe<EntityTypesBoolExp>;
};


export type QueryEntityTypesAggregateArgs = {
  filter_input?: InputMaybe<EntityTypesFilterInput>;
};


export type QueryEntityTypesByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryImageTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ImageTypesOrderByExp>>;
  where?: InputMaybe<ImageTypesBoolExp>;
};


export type QueryImageTypesAggregateArgs = {
  filter_input?: InputMaybe<ImageTypesFilterInput>;
};


export type QueryImageTypesByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryImagesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ImagesOrderByExp>>;
  where?: InputMaybe<ImagesBoolExp>;
};


export type QueryImagesAggregateArgs = {
  filter_input?: InputMaybe<ImagesFilterInput>;
};


export type QueryImagesByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryProductAssetRelationshipsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductAssetRelationshipsOrderByExp>>;
  where?: InputMaybe<ProductAssetRelationshipsBoolExp>;
};


export type QueryProductAssetRelationshipsAggregateArgs = {
  filter_input?: InputMaybe<ProductAssetRelationshipsFilterInput>;
};


export type QueryProductAssetRelationshipsByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryProductDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductDeploymentsOrderByExp>>;
  where?: InputMaybe<ProductDeploymentsBoolExp>;
};


export type QueryProductDeploymentsAggregateArgs = {
  filter_input?: InputMaybe<ProductDeploymentsFilterInput>;
};


export type QueryProductDeploymentsByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryProductStatusesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductStatusesOrderByExp>>;
  where?: InputMaybe<ProductStatusesBoolExp>;
};


export type QueryProductStatusesAggregateArgs = {
  filter_input?: InputMaybe<ProductStatusesFilterInput>;
};


export type QueryProductStatusesByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryProductTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductTypesOrderByExp>>;
  where?: InputMaybe<ProductTypesBoolExp>;
};


export type QueryProductTypesAggregateArgs = {
  filter_input?: InputMaybe<ProductTypesFilterInput>;
};


export type QueryProductTypesByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductsOrderByExp>>;
  where?: InputMaybe<ProductsBoolExp>;
};


export type QueryProductsAggregateArgs = {
  filter_input?: InputMaybe<ProductsFilterInput>;
};


export type QueryProductsByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryProfileInfosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileInfosOrderByExp>>;
  where?: InputMaybe<ProfileInfosBoolExp>;
};


export type QueryProfileInfosAggregateArgs = {
  filter_input?: InputMaybe<ProfileInfosFilterInput>;
};


export type QueryProfileInfosByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryProfileSectorsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileSectorsOrderByExp>>;
  where?: InputMaybe<ProfileSectorsBoolExp>;
};


export type QueryProfileSectorsAggregateArgs = {
  filter_input?: InputMaybe<ProfileSectorsFilterInput>;
};


export type QueryProfileSectorsByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryProfileStatusesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileStatusesOrderByExp>>;
  where?: InputMaybe<ProfileStatusesBoolExp>;
};


export type QueryProfileStatusesAggregateArgs = {
  filter_input?: InputMaybe<ProfileStatusesFilterInput>;
};


export type QueryProfileStatusesByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryProfileTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileTagsOrderByExp>>;
  where?: InputMaybe<ProfileTagsBoolExp>;
};


export type QueryProfileTagsAggregateArgs = {
  filter_input?: InputMaybe<ProfileTagsFilterInput>;
};


export type QueryProfileTagsByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryProfileTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileTypesOrderByExp>>;
  where?: InputMaybe<ProfileTypesBoolExp>;
};


export type QueryProfileTypesAggregateArgs = {
  filter_input?: InputMaybe<ProfileTypesFilterInput>;
};


export type QueryProfileTypesByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryRootRelationshipTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<RootRelationshipTypesOrderByExp>>;
  where?: InputMaybe<RootRelationshipTypesBoolExp>;
};


export type QueryRootRelationshipTypesAggregateArgs = {
  filter_input?: InputMaybe<RootRelationshipTypesFilterInput>;
};


export type QueryRootRelationshipTypesByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryRootRelationshipsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<RootRelationshipsOrderByExp>>;
  where?: InputMaybe<RootRelationshipsBoolExp>;
};


export type QueryRootRelationshipsAggregateArgs = {
  filter_input?: InputMaybe<RootRelationshipsFilterInput>;
};


export type QueryRootRelationshipsByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryRootsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<RootsOrderByExp>>;
  where?: InputMaybe<RootsBoolExp>;
};


export type QueryRootsAggregateArgs = {
  filter_input?: InputMaybe<RootsFilterInput>;
};


export type QueryRootsByIdArgs = {
  id: Scalars['String']['input'];
};


export type QuerySmartContractDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SmartContractDeploymentsOrderByExp>>;
  where?: InputMaybe<SmartContractDeploymentsBoolExp>;
};


export type QuerySmartContractDeploymentsAggregateArgs = {
  filter_input?: InputMaybe<SmartContractDeploymentsFilterInput>;
};


export type QuerySmartContractDeploymentsByIdArgs = {
  id: Scalars['String']['input'];
};


export type QuerySmartContractsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SmartContractsOrderByExp>>;
  where?: InputMaybe<SmartContractsBoolExp>;
};


export type QuerySmartContractsAggregateArgs = {
  filter_input?: InputMaybe<SmartContractsFilterInput>;
};


export type QuerySmartContractsByIdArgs = {
  id: Scalars['String']['input'];
};


export type QuerySocialStatusesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SocialStatusesOrderByExp>>;
  where?: InputMaybe<SocialStatusesBoolExp>;
};


export type QuerySocialStatusesAggregateArgs = {
  filter_input?: InputMaybe<SocialStatusesFilterInput>;
};


export type QuerySocialStatusesByIdArgs = {
  id: Scalars['String']['input'];
};


export type QuerySocialTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SocialTypesOrderByExp>>;
  where?: InputMaybe<SocialTypesBoolExp>;
};


export type QuerySocialTypesAggregateArgs = {
  filter_input?: InputMaybe<SocialTypesFilterInput>;
};


export type QuerySocialTypesByIdArgs = {
  id: Scalars['String']['input'];
};


export type QuerySocialsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SocialsOrderByExp>>;
  where?: InputMaybe<SocialsBoolExp>;
};


export type QuerySocialsAggregateArgs = {
  filter_input?: InputMaybe<SocialsFilterInput>;
};


export type QuerySocialsByIdArgs = {
  id: Scalars['String']['input'];
};


export type QuerySupportsProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SupportsProductsOrderByExp>>;
  where?: InputMaybe<SupportsProductsBoolExp>;
};


export type QuerySupportsProductsAggregateArgs = {
  filter_input?: InputMaybe<SupportsProductsFilterInput>;
};


export type QuerySupportsProductsByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryTagTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TagTypesOrderByExp>>;
  where?: InputMaybe<TagTypesBoolExp>;
};


export type QueryTagTypesAggregateArgs = {
  filter_input?: InputMaybe<TagTypesFilterInput>;
};


export type QueryTagTypesByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TagsOrderByExp>>;
  where?: InputMaybe<TagsBoolExp>;
};


export type QueryTagsAggregateArgs = {
  filter_input?: InputMaybe<TagsFilterInput>;
};


export type QueryTagsByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryTheGridRankingsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TheGridRankingOrderBy>>;
  where?: InputMaybe<TheGridRankingBoolExp>;
};


export type QueryUrlTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UrlTypesOrderByExp>>;
  where?: InputMaybe<UrlTypesBoolExp>;
};


export type QueryUrlTypesAggregateArgs = {
  filter_input?: InputMaybe<UrlTypesFilterInput>;
};


export type QueryUrlTypesByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryUrlsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UrlsOrderByExp>>;
  where?: InputMaybe<UrlsBoolExp>;
};


export type QueryUrlsAggregateArgs = {
  filter_input?: InputMaybe<UrlsFilterInput>;
};


export type QueryUrlsByIdArgs = {
  id: Scalars['String']['input'];
};

/** Retry policy of request */
export type RetryPolicyInput = {
  /** The initial wait time in milliseconds before a retry is attempted. */
  delay?: InputMaybe<Scalars['Int32']['input']>;
  /** List of HTTP status the connector will retry on */
  httpStatus?: InputMaybe<Array<Scalars['Int32']['input']>>;
  /** How much does the reconnection time vary relative to the base value. Must be in range (0, 1) */
  jitter?: InputMaybe<Scalars['Float64']['input']>;
  /** How much can the wait time grow. Defaults to 60 seconds */
  maxIntervalSeconds?: InputMaybe<Scalars['Float64']['input']>;
  /** How much should the reconnection time grow on subsequent attempts. Must be >=1; 1 = constant interval */
  multiplier?: InputMaybe<Scalars['Float64']['input']>;
  /** Number of retry times */
  times: Scalars['Int32']['input'];
};

export type RootRelationshipTypes = {
  __typename?: 'RootRelationshipTypes';
  definition: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  rootRelationships?: Maybe<Array<RootRelationships>>;
  rootRelationshipsAggregate: RootRelationshipsAggExp;
  slug?: Maybe<Scalars['String']['output']>;
};


export type RootRelationshipTypesRootRelationshipsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<RootRelationshipsOrderByExp>>;
  where?: InputMaybe<RootRelationshipsBoolExp>;
};


export type RootRelationshipTypesRootRelationshipsAggregateArgs = {
  filter_input?: InputMaybe<RootRelationshipsFilterInput>;
};

export type RootRelationshipTypesAggExp = {
  __typename?: 'RootRelationshipTypesAggExp';
  _count: Scalars['Int']['output'];
  definition: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
  slug: StringAggExp;
};

export type RootRelationshipTypesBoolExp = {
  _and?: InputMaybe<Array<RootRelationshipTypesBoolExp>>;
  _not?: InputMaybe<RootRelationshipTypesBoolExp>;
  _or?: InputMaybe<Array<RootRelationshipTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  rootRelationships?: InputMaybe<RootRelationshipsBoolExp>;
  slug?: InputMaybe<StringBoolExp>;
};

export type RootRelationshipTypesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<RootRelationshipTypesOrderByExp>>;
  where?: InputMaybe<RootRelationshipTypesBoolExp>;
};

export type RootRelationshipTypesOrderByExp = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
};

export type RootRelationships = {
  __typename?: 'RootRelationships';
  childRoot?: Maybe<Roots>;
  childRootId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  parentRoot?: Maybe<Roots>;
  parentRootId: Scalars['String']['output'];
  relationshipTypeId?: Maybe<Scalars['String']['output']>;
  rootRelationshipType?: Maybe<RootRelationshipTypes>;
};

export type RootRelationshipsAggExp = {
  __typename?: 'RootRelationshipsAggExp';
  _count: Scalars['Int']['output'];
  childRootId: StringAggExp;
  id: StringAggExp;
  parentRootId: StringAggExp;
  relationshipTypeId: StringAggExp;
};

export type RootRelationshipsBoolExp = {
  _and?: InputMaybe<Array<RootRelationshipsBoolExp>>;
  _not?: InputMaybe<RootRelationshipsBoolExp>;
  _or?: InputMaybe<Array<RootRelationshipsBoolExp>>;
  childRootId?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  parentRootId?: InputMaybe<StringBoolExp>;
  relationshipTypeId?: InputMaybe<StringBoolExp>;
  rootRelationshipType?: InputMaybe<RootRelationshipTypesBoolExp>;
};

export type RootRelationshipsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<RootRelationshipsOrderByExp>>;
  where?: InputMaybe<RootRelationshipsBoolExp>;
};

export type RootRelationshipsOrderByExp = {
  childRoot?: InputMaybe<RootsOrderByExp>;
  childRootId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  parentRoot?: InputMaybe<RootsOrderByExp>;
  parentRootId?: InputMaybe<OrderBy>;
  relationshipTypeId?: InputMaybe<OrderBy>;
  rootRelationshipType?: InputMaybe<RootRelationshipTypesOrderByExp>;
};

export type Roots = {
  __typename?: 'Roots';
  assets?: Maybe<Array<Assets>>;
  assetsAggregate: AssetsAggExp;
  childRootRelationships?: Maybe<Array<RootRelationships>>;
  childRootRelationshipsAggregate: RootRelationshipsAggExp;
  connectionScoresAggregate: TheGridRankingAggExp;
  entities?: Maybe<Array<Entities>>;
  entitiesAggregate: EntitiesAggExp;
  id: Scalars['String']['output'];
  parentRootRelationships?: Maybe<Array<RootRelationships>>;
  parentRootRelationshipsAggregate: RootRelationshipsAggExp;
  products?: Maybe<Array<Products>>;
  productsAggregate: ProductsAggExp;
  profileInfos?: Maybe<Array<ProfileInfos>>;
  profileInfosAggregate: ProfileInfosAggExp;
  profileTags?: Maybe<Array<ProfileTags>>;
  profileTagsAggregate: ProfileTagsAggExp;
  slug: Scalars['String']['output'];
  socials?: Maybe<Array<Socials>>;
  socialsAggregate: SocialsAggExp;
  theGridRanking?: Maybe<Array<TheGridRanking>>;
  urlMain: Scalars['String']['output'];
};


export type RootsAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetsOrderByExp>>;
  where?: InputMaybe<AssetsBoolExp>;
};


export type RootsAssetsAggregateArgs = {
  filter_input?: InputMaybe<AssetsFilterInput>;
};


export type RootsChildRootRelationshipsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<RootRelationshipsOrderByExp>>;
  where?: InputMaybe<RootRelationshipsBoolExp>;
};


export type RootsChildRootRelationshipsAggregateArgs = {
  filter_input?: InputMaybe<RootRelationshipsFilterInput>;
};


export type RootsConnectionScoresAggregateArgs = {
  filter_input?: InputMaybe<TheGridRankingFilterInput>;
};


export type RootsEntitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<EntitiesOrderByExp>>;
  where?: InputMaybe<EntitiesBoolExp>;
};


export type RootsEntitiesAggregateArgs = {
  filter_input?: InputMaybe<EntitiesFilterInput>;
};


export type RootsParentRootRelationshipsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<RootRelationshipsOrderByExp>>;
  where?: InputMaybe<RootRelationshipsBoolExp>;
};


export type RootsParentRootRelationshipsAggregateArgs = {
  filter_input?: InputMaybe<RootRelationshipsFilterInput>;
};


export type RootsProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductsOrderByExp>>;
  where?: InputMaybe<ProductsBoolExp>;
};


export type RootsProductsAggregateArgs = {
  filter_input?: InputMaybe<ProductsFilterInput>;
};


export type RootsProfileInfosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileInfosOrderByExp>>;
  where?: InputMaybe<ProfileInfosBoolExp>;
};


export type RootsProfileInfosAggregateArgs = {
  filter_input?: InputMaybe<ProfileInfosFilterInput>;
};


export type RootsProfileTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileTagsOrderByExp>>;
  where?: InputMaybe<ProfileTagsBoolExp>;
};


export type RootsProfileTagsAggregateArgs = {
  filter_input?: InputMaybe<ProfileTagsFilterInput>;
};


export type RootsSocialsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SocialsOrderByExp>>;
  where?: InputMaybe<SocialsBoolExp>;
};


export type RootsSocialsAggregateArgs = {
  filter_input?: InputMaybe<SocialsFilterInput>;
};


export type RootsTheGridRankingArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TheGridRankingOrderBy>>;
  where?: InputMaybe<TheGridRankingBoolExp>;
};

export type RootsAggExp = {
  __typename?: 'RootsAggExp';
  _count: Scalars['Int']['output'];
  id: StringAggExp;
  slug: StringAggExp;
  urlMain: StringAggExp;
};

export type RootsBoolExp = {
  _and?: InputMaybe<Array<RootsBoolExp>>;
  _not?: InputMaybe<RootsBoolExp>;
  _or?: InputMaybe<Array<RootsBoolExp>>;
  assets?: InputMaybe<AssetsBoolExp>;
  childRootRelationships?: InputMaybe<RootRelationshipsBoolExp>;
  entities?: InputMaybe<EntitiesBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  parentRootRelationships?: InputMaybe<RootRelationshipsBoolExp>;
  products?: InputMaybe<ProductsBoolExp>;
  profileInfos?: InputMaybe<ProfileInfosBoolExp>;
  profileTags?: InputMaybe<ProfileTagsBoolExp>;
  slug?: InputMaybe<StringBoolExp>;
  socials?: InputMaybe<SocialsBoolExp>;
  theGridRanking?: InputMaybe<TheGridRankingBoolExp>;
  urlMain?: InputMaybe<StringBoolExp>;
};

export type RootsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<RootsOrderByExp>>;
  where?: InputMaybe<RootsBoolExp>;
};

export type RootsOrderByExp = {
  id?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
  urlMain?: InputMaybe<OrderBy>;
};

export type SmartContractDeploymentUrls = {
  __typename?: 'SmartContractDeploymentUrls';
  id: Scalars['String']['output'];
  rowId: Scalars['String']['output'];
  tableId: Scalars['String']['output'];
  url: Scalars['String']['output'];
  urlType?: Maybe<UrlTypes>;
  urlTypeId: Scalars['String']['output'];
};

export type SmartContractDeploymentUrlsBoolExp = {
  _and?: InputMaybe<Array<SmartContractDeploymentUrlsBoolExp>>;
  _not?: InputMaybe<SmartContractDeploymentUrlsBoolExp>;
  _or?: InputMaybe<Array<SmartContractDeploymentUrlsBoolExp>>;
  id?: InputMaybe<StringBoolExp>;
  rowId?: InputMaybe<StringBoolExp>;
  tableId?: InputMaybe<StringBoolExp>;
  url?: InputMaybe<StringBoolExp>;
  urlType?: InputMaybe<UrlTypesBoolExp>;
  urlTypeId?: InputMaybe<StringBoolExp>;
};

export type SmartContractDeploymentUrlsOrderBy = {
  id?: InputMaybe<OrderBy>;
  rowId?: InputMaybe<OrderBy>;
  tableId?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
  urlType?: InputMaybe<UrlTypesOrderByExp>;
  urlTypeId?: InputMaybe<OrderBy>;
};

export type SmartContractDeployments = {
  __typename?: 'SmartContractDeployments';
  assetDeployments?: Maybe<Array<AssetDeployments>>;
  assetDeploymentsAggregate: AssetDeploymentsAggExp;
  assetStandard?: Maybe<AssetStandards>;
  assetStandardId?: Maybe<Scalars['String']['output']>;
  deployedOnId?: Maybe<Scalars['String']['output']>;
  deployedOnProduct?: Maybe<Products>;
  deploymentType?: Maybe<DeploymentTypes>;
  deploymentTypeId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  productDeployments?: Maybe<Array<ProductDeployments>>;
  productDeploymentsAggregate: ProductDeploymentsAggExp;
  smartContracts?: Maybe<Array<SmartContracts>>;
  smartContractsAggregate: SmartContractsAggExp;
  urls?: Maybe<Array<SmartContractDeploymentUrls>>;
};


export type SmartContractDeploymentsAssetDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetDeploymentsOrderByExp>>;
  where?: InputMaybe<AssetDeploymentsBoolExp>;
};


export type SmartContractDeploymentsAssetDeploymentsAggregateArgs = {
  filter_input?: InputMaybe<AssetDeploymentsFilterInput>;
};


export type SmartContractDeploymentsProductDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductDeploymentsOrderByExp>>;
  where?: InputMaybe<ProductDeploymentsBoolExp>;
};


export type SmartContractDeploymentsProductDeploymentsAggregateArgs = {
  filter_input?: InputMaybe<ProductDeploymentsFilterInput>;
};


export type SmartContractDeploymentsSmartContractsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SmartContractsOrderByExp>>;
  where?: InputMaybe<SmartContractsBoolExp>;
};


export type SmartContractDeploymentsSmartContractsAggregateArgs = {
  filter_input?: InputMaybe<SmartContractsFilterInput>;
};


export type SmartContractDeploymentsUrlsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SmartContractDeploymentUrlsOrderBy>>;
  where?: InputMaybe<SmartContractDeploymentUrlsBoolExp>;
};

export type SmartContractDeploymentsAggExp = {
  __typename?: 'SmartContractDeploymentsAggExp';
  _count: Scalars['Int']['output'];
  assetStandardId: StringAggExp;
  deployedOnId: StringAggExp;
  deploymentTypeId: StringAggExp;
  id: StringAggExp;
};

export type SmartContractDeploymentsBoolExp = {
  _and?: InputMaybe<Array<SmartContractDeploymentsBoolExp>>;
  _not?: InputMaybe<SmartContractDeploymentsBoolExp>;
  _or?: InputMaybe<Array<SmartContractDeploymentsBoolExp>>;
  assetDeployments?: InputMaybe<AssetDeploymentsBoolExp>;
  assetStandard?: InputMaybe<AssetStandardsBoolExp>;
  assetStandardId?: InputMaybe<StringBoolExp>;
  deployedOnId?: InputMaybe<StringBoolExp>;
  deployedOnProduct?: InputMaybe<ProductsBoolExp>;
  deploymentType?: InputMaybe<DeploymentTypesBoolExp>;
  deploymentTypeId?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  productDeployments?: InputMaybe<ProductDeploymentsBoolExp>;
  smartContracts?: InputMaybe<SmartContractsBoolExp>;
};

export type SmartContractDeploymentsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SmartContractDeploymentsOrderByExp>>;
  where?: InputMaybe<SmartContractDeploymentsBoolExp>;
};

export type SmartContractDeploymentsOrderByExp = {
  assetStandard?: InputMaybe<AssetStandardsOrderByExp>;
  assetStandardId?: InputMaybe<OrderBy>;
  deployedOnId?: InputMaybe<OrderBy>;
  deployedOnProduct?: InputMaybe<ProductsOrderByExp>;
  deploymentType?: InputMaybe<DeploymentTypesOrderByExp>;
  deploymentTypeId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

export type SmartContracts = {
  __typename?: 'SmartContracts';
  address: Scalars['String']['output'];
  deploymentDate?: Maybe<Scalars['Date']['output']>;
  deploymentId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  smartContractDeployment?: Maybe<SmartContractDeployments>;
};

export type SmartContractsAggExp = {
  __typename?: 'SmartContractsAggExp';
  _count: Scalars['Int']['output'];
  address: StringAggExp;
  deploymentDate: DateAggExp;
  deploymentId: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
};

export type SmartContractsBoolExp = {
  _and?: InputMaybe<Array<SmartContractsBoolExp>>;
  _not?: InputMaybe<SmartContractsBoolExp>;
  _or?: InputMaybe<Array<SmartContractsBoolExp>>;
  address?: InputMaybe<StringBoolExp>;
  deploymentDate?: InputMaybe<DateBoolExp>;
  deploymentId?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  smartContractDeployment?: InputMaybe<SmartContractDeploymentsBoolExp>;
};

export type SmartContractsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SmartContractsOrderByExp>>;
  where?: InputMaybe<SmartContractsBoolExp>;
};

export type SmartContractsOrderByExp = {
  address?: InputMaybe<OrderBy>;
  deploymentDate?: InputMaybe<OrderBy>;
  deploymentId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  smartContractDeployment?: InputMaybe<SmartContractDeploymentsOrderByExp>;
};

export type SocialStatuses = {
  __typename?: 'SocialStatuses';
  definition: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  socials?: Maybe<Array<Socials>>;
  socialsAggregate: SocialsAggExp;
};


export type SocialStatusesSocialsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SocialsOrderByExp>>;
  where?: InputMaybe<SocialsBoolExp>;
};


export type SocialStatusesSocialsAggregateArgs = {
  filter_input?: InputMaybe<SocialsFilterInput>;
};

export type SocialStatusesAggExp = {
  __typename?: 'SocialStatusesAggExp';
  _count: Scalars['Int']['output'];
  definition: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
  slug: StringAggExp;
};

export type SocialStatusesBoolExp = {
  _and?: InputMaybe<Array<SocialStatusesBoolExp>>;
  _not?: InputMaybe<SocialStatusesBoolExp>;
  _or?: InputMaybe<Array<SocialStatusesBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  slug?: InputMaybe<StringBoolExp>;
  socials?: InputMaybe<SocialsBoolExp>;
};

export type SocialStatusesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SocialStatusesOrderByExp>>;
  where?: InputMaybe<SocialStatusesBoolExp>;
};

export type SocialStatusesOrderByExp = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
};

export type SocialTypes = {
  __typename?: 'SocialTypes';
  definition: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  socials?: Maybe<Array<Socials>>;
  socialsAggregate: SocialsAggExp;
};


export type SocialTypesSocialsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SocialsOrderByExp>>;
  where?: InputMaybe<SocialsBoolExp>;
};


export type SocialTypesSocialsAggregateArgs = {
  filter_input?: InputMaybe<SocialsFilterInput>;
};

export type SocialTypesAggExp = {
  __typename?: 'SocialTypesAggExp';
  _count: Scalars['Int']['output'];
  definition: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
  slug: StringAggExp;
};

export type SocialTypesBoolExp = {
  _and?: InputMaybe<Array<SocialTypesBoolExp>>;
  _not?: InputMaybe<SocialTypesBoolExp>;
  _or?: InputMaybe<Array<SocialTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  slug?: InputMaybe<StringBoolExp>;
  socials?: InputMaybe<SocialsBoolExp>;
};

export type SocialTypesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SocialTypesOrderByExp>>;
  where?: InputMaybe<SocialTypesBoolExp>;
};

export type SocialTypesOrderByExp = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
};

export type SocialUrls = {
  __typename?: 'SocialUrls';
  id: Scalars['String']['output'];
  rowId: Scalars['String']['output'];
  tableId: Scalars['String']['output'];
  url: Scalars['String']['output'];
  urlType?: Maybe<UrlTypes>;
  urlTypeId: Scalars['String']['output'];
};

export type SocialUrlsBoolExp = {
  _and?: InputMaybe<Array<SocialUrlsBoolExp>>;
  _not?: InputMaybe<SocialUrlsBoolExp>;
  _or?: InputMaybe<Array<SocialUrlsBoolExp>>;
  id?: InputMaybe<StringBoolExp>;
  rowId?: InputMaybe<StringBoolExp>;
  tableId?: InputMaybe<StringBoolExp>;
  url?: InputMaybe<StringBoolExp>;
  urlType?: InputMaybe<UrlTypesBoolExp>;
  urlTypeId?: InputMaybe<StringBoolExp>;
};

export type SocialUrlsOrderBy = {
  id?: InputMaybe<OrderBy>;
  rowId?: InputMaybe<OrderBy>;
  tableId?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
  urlType?: InputMaybe<UrlTypesOrderByExp>;
  urlTypeId?: InputMaybe<OrderBy>;
};

export type Socials = {
  __typename?: 'Socials';
  coreTableName?: Maybe<CoreTableNames>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  root?: Maybe<Roots>;
  rootId: Scalars['String']['output'];
  rowId?: Maybe<Scalars['String']['output']>;
  socialStatus?: Maybe<SocialStatuses>;
  socialStatusId?: Maybe<Scalars['String']['output']>;
  socialType?: Maybe<SocialTypes>;
  socialTypeId?: Maybe<Scalars['String']['output']>;
  tableId?: Maybe<Scalars['String']['output']>;
  urls?: Maybe<Array<SocialUrls>>;
};


export type SocialsUrlsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SocialUrlsOrderBy>>;
  where?: InputMaybe<SocialUrlsBoolExp>;
};

export type SocialsAggExp = {
  __typename?: 'SocialsAggExp';
  _count: Scalars['Int']['output'];
  id: StringAggExp;
  name: StringAggExp;
  rootId: StringAggExp;
  rowId: StringAggExp;
  socialStatusId: StringAggExp;
  socialTypeId: StringAggExp;
  tableId: StringAggExp;
};

export type SocialsBoolExp = {
  _and?: InputMaybe<Array<SocialsBoolExp>>;
  _not?: InputMaybe<SocialsBoolExp>;
  _or?: InputMaybe<Array<SocialsBoolExp>>;
  coreTableName?: InputMaybe<CoreTableNamesBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  root?: InputMaybe<RootsBoolExp>;
  rootId?: InputMaybe<StringBoolExp>;
  rowId?: InputMaybe<StringBoolExp>;
  socialStatus?: InputMaybe<SocialStatusesBoolExp>;
  socialStatusId?: InputMaybe<StringBoolExp>;
  socialType?: InputMaybe<SocialTypesBoolExp>;
  socialTypeId?: InputMaybe<StringBoolExp>;
  tableId?: InputMaybe<StringBoolExp>;
};

export type SocialsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SocialsOrderByExp>>;
  where?: InputMaybe<SocialsBoolExp>;
};

export type SocialsOrderByExp = {
  coreTableName?: InputMaybe<CoreTableNamesOrderByExp>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  root?: InputMaybe<RootsOrderByExp>;
  rootId?: InputMaybe<OrderBy>;
  rowId?: InputMaybe<OrderBy>;
  socialStatus?: InputMaybe<SocialStatusesOrderByExp>;
  socialStatusId?: InputMaybe<OrderBy>;
  socialType?: InputMaybe<SocialTypesOrderByExp>;
  socialTypeId?: InputMaybe<OrderBy>;
  tableId?: InputMaybe<OrderBy>;
};

export type StringAggExp = {
  __typename?: 'StringAggExp';
  _count: Scalars['Int']['output'];
  _count_distinct: Scalars['Int']['output'];
  max: Scalars['String']['output'];
  min: Scalars['String']['output'];
};

export type StringBoolExp = {
  _and?: InputMaybe<Array<StringBoolExp>>;
  _contains?: InputMaybe<Scalars['String']['input']>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _like?: InputMaybe<Scalars['String']['input']>;
  _not?: InputMaybe<StringBoolExp>;
  _or?: InputMaybe<Array<StringBoolExp>>;
};

export type Subscription = {
  __typename?: 'Subscription';
  allowedUrlTypes?: Maybe<Array<AllowedUrlTypes>>;
  allowedUrlTypesAggregate?: Maybe<AllowedUrlTypesAggExp>;
  allowedUrlTypesById?: Maybe<AllowedUrlTypes>;
  assetDeployments?: Maybe<Array<AssetDeployments>>;
  assetDeploymentsAggregate?: Maybe<AssetDeploymentsAggExp>;
  assetDeploymentsById?: Maybe<AssetDeployments>;
  assetStandards?: Maybe<Array<AssetStandards>>;
  assetStandardsAggregate?: Maybe<AssetStandardsAggExp>;
  assetStandardsById?: Maybe<AssetStandards>;
  assetStatuses?: Maybe<Array<AssetStatuses>>;
  assetStatusesAggregate?: Maybe<AssetStatusesAggExp>;
  assetStatusesById?: Maybe<AssetStatuses>;
  assetSupportTypes?: Maybe<Array<AssetSupportTypes>>;
  assetSupportTypesAggregate?: Maybe<AssetSupportTypesAggExp>;
  assetSupportTypesById?: Maybe<AssetSupportTypes>;
  assetTypes?: Maybe<Array<AssetTypes>>;
  assetTypesAggregate?: Maybe<AssetTypesAggExp>;
  assetTypesById?: Maybe<AssetTypes>;
  assets?: Maybe<Array<Assets>>;
  assetsAggregate?: Maybe<AssetsAggExp>;
  assetsById?: Maybe<Assets>;
  coreTableNames?: Maybe<Array<CoreTableNames>>;
  coreTableNamesAggregate?: Maybe<CoreTableNamesAggExp>;
  coreTableNamesById?: Maybe<CoreTableNames>;
  countries?: Maybe<Array<Countries>>;
  countriesAggregate?: Maybe<CountriesAggExp>;
  countriesById?: Maybe<Countries>;
  deploymentTypes?: Maybe<Array<DeploymentTypes>>;
  deploymentTypesAggregate?: Maybe<DeploymentTypesAggExp>;
  deploymentTypesById?: Maybe<DeploymentTypes>;
  derivativeAssets?: Maybe<Array<DerivativeAssets>>;
  derivativeAssetsAggregate?: Maybe<DerivativeAssetsAggExp>;
  derivativeAssetsById?: Maybe<DerivativeAssets>;
  entities?: Maybe<Array<Entities>>;
  entitiesAggregate?: Maybe<EntitiesAggExp>;
  entitiesById?: Maybe<Entities>;
  entityTypes?: Maybe<Array<EntityTypes>>;
  entityTypesAggregate?: Maybe<EntityTypesAggExp>;
  entityTypesById?: Maybe<EntityTypes>;
  imageTypes?: Maybe<Array<ImageTypes>>;
  imageTypesAggregate?: Maybe<ImageTypesAggExp>;
  imageTypesById?: Maybe<ImageTypes>;
  images?: Maybe<Array<Images>>;
  imagesAggregate?: Maybe<ImagesAggExp>;
  imagesById?: Maybe<Images>;
  productAssetRelationships?: Maybe<Array<ProductAssetRelationships>>;
  productAssetRelationshipsAggregate?: Maybe<ProductAssetRelationshipsAggExp>;
  productAssetRelationshipsById?: Maybe<ProductAssetRelationships>;
  productDeployments?: Maybe<Array<ProductDeployments>>;
  productDeploymentsAggregate?: Maybe<ProductDeploymentsAggExp>;
  productDeploymentsById?: Maybe<ProductDeployments>;
  productStatuses?: Maybe<Array<ProductStatuses>>;
  productStatusesAggregate?: Maybe<ProductStatusesAggExp>;
  productStatusesById?: Maybe<ProductStatuses>;
  productTypes?: Maybe<Array<ProductTypes>>;
  productTypesAggregate?: Maybe<ProductTypesAggExp>;
  productTypesById?: Maybe<ProductTypes>;
  products?: Maybe<Array<Products>>;
  productsAggregate?: Maybe<ProductsAggExp>;
  productsById?: Maybe<Products>;
  profileInfos?: Maybe<Array<ProfileInfos>>;
  profileInfosAggregate?: Maybe<ProfileInfosAggExp>;
  profileInfosById?: Maybe<ProfileInfos>;
  profileSectors?: Maybe<Array<ProfileSectors>>;
  profileSectorsAggregate?: Maybe<ProfileSectorsAggExp>;
  profileSectorsById?: Maybe<ProfileSectors>;
  profileStatuses?: Maybe<Array<ProfileStatuses>>;
  profileStatusesAggregate?: Maybe<ProfileStatusesAggExp>;
  profileStatusesById?: Maybe<ProfileStatuses>;
  profileTags?: Maybe<Array<ProfileTags>>;
  profileTagsAggregate?: Maybe<ProfileTagsAggExp>;
  profileTagsById?: Maybe<ProfileTags>;
  profileTypes?: Maybe<Array<ProfileTypes>>;
  profileTypesAggregate?: Maybe<ProfileTypesAggExp>;
  profileTypesById?: Maybe<ProfileTypes>;
  rootRelationshipTypes?: Maybe<Array<RootRelationshipTypes>>;
  rootRelationshipTypesAggregate?: Maybe<RootRelationshipTypesAggExp>;
  rootRelationshipTypesById?: Maybe<RootRelationshipTypes>;
  rootRelationships?: Maybe<Array<RootRelationships>>;
  rootRelationshipsAggregate?: Maybe<RootRelationshipsAggExp>;
  rootRelationshipsById?: Maybe<RootRelationships>;
  roots?: Maybe<Array<Roots>>;
  rootsAggregate?: Maybe<RootsAggExp>;
  rootsById?: Maybe<Roots>;
  smartContractDeployments?: Maybe<Array<SmartContractDeployments>>;
  smartContractDeploymentsAggregate?: Maybe<SmartContractDeploymentsAggExp>;
  smartContractDeploymentsById?: Maybe<SmartContractDeployments>;
  smartContracts?: Maybe<Array<SmartContracts>>;
  smartContractsAggregate?: Maybe<SmartContractsAggExp>;
  smartContractsById?: Maybe<SmartContracts>;
  socialStatuses?: Maybe<Array<SocialStatuses>>;
  socialStatusesAggregate?: Maybe<SocialStatusesAggExp>;
  socialStatusesById?: Maybe<SocialStatuses>;
  socialTypes?: Maybe<Array<SocialTypes>>;
  socialTypesAggregate?: Maybe<SocialTypesAggExp>;
  socialTypesById?: Maybe<SocialTypes>;
  socials?: Maybe<Array<Socials>>;
  socialsAggregate?: Maybe<SocialsAggExp>;
  socialsById?: Maybe<Socials>;
  supportsProducts?: Maybe<Array<SupportsProducts>>;
  supportsProductsAggregate?: Maybe<SupportsProductsAggExp>;
  supportsProductsById?: Maybe<SupportsProducts>;
  tagTypes?: Maybe<Array<TagTypes>>;
  tagTypesAggregate?: Maybe<TagTypesAggExp>;
  tagTypesById?: Maybe<TagTypes>;
  tags?: Maybe<Array<Tags>>;
  tagsAggregate?: Maybe<TagsAggExp>;
  tagsById?: Maybe<Tags>;
  urlTypes?: Maybe<Array<UrlTypes>>;
  urlTypesAggregate?: Maybe<UrlTypesAggExp>;
  urlTypesById?: Maybe<UrlTypes>;
  urls?: Maybe<Array<Urls>>;
  urlsAggregate?: Maybe<UrlsAggExp>;
  urlsById?: Maybe<Urls>;
};


export type SubscriptionAllowedUrlTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AllowedUrlTypesOrderByExp>>;
  where?: InputMaybe<AllowedUrlTypesBoolExp>;
};


export type SubscriptionAllowedUrlTypesAggregateArgs = {
  filter_input?: InputMaybe<AllowedUrlTypesFilterInput>;
};


export type SubscriptionAllowedUrlTypesByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionAssetDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetDeploymentsOrderByExp>>;
  where?: InputMaybe<AssetDeploymentsBoolExp>;
};


export type SubscriptionAssetDeploymentsAggregateArgs = {
  filter_input?: InputMaybe<AssetDeploymentsFilterInput>;
};


export type SubscriptionAssetDeploymentsByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionAssetStandardsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetStandardsOrderByExp>>;
  where?: InputMaybe<AssetStandardsBoolExp>;
};


export type SubscriptionAssetStandardsAggregateArgs = {
  filter_input?: InputMaybe<AssetStandardsFilterInput>;
};


export type SubscriptionAssetStandardsByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionAssetStatusesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetStatusesOrderByExp>>;
  where?: InputMaybe<AssetStatusesBoolExp>;
};


export type SubscriptionAssetStatusesAggregateArgs = {
  filter_input?: InputMaybe<AssetStatusesFilterInput>;
};


export type SubscriptionAssetStatusesByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionAssetSupportTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetSupportTypesOrderByExp>>;
  where?: InputMaybe<AssetSupportTypesBoolExp>;
};


export type SubscriptionAssetSupportTypesAggregateArgs = {
  filter_input?: InputMaybe<AssetSupportTypesFilterInput>;
};


export type SubscriptionAssetSupportTypesByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionAssetTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetTypesOrderByExp>>;
  where?: InputMaybe<AssetTypesBoolExp>;
};


export type SubscriptionAssetTypesAggregateArgs = {
  filter_input?: InputMaybe<AssetTypesFilterInput>;
};


export type SubscriptionAssetTypesByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetsOrderByExp>>;
  where?: InputMaybe<AssetsBoolExp>;
};


export type SubscriptionAssetsAggregateArgs = {
  filter_input?: InputMaybe<AssetsFilterInput>;
};


export type SubscriptionAssetsByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionCoreTableNamesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CoreTableNamesOrderByExp>>;
  where?: InputMaybe<CoreTableNamesBoolExp>;
};


export type SubscriptionCoreTableNamesAggregateArgs = {
  filter_input?: InputMaybe<CoreTableNamesFilterInput>;
};


export type SubscriptionCoreTableNamesByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionCountriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CountriesOrderByExp>>;
  where?: InputMaybe<CountriesBoolExp>;
};


export type SubscriptionCountriesAggregateArgs = {
  filter_input?: InputMaybe<CountriesFilterInput>;
};


export type SubscriptionCountriesByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionDeploymentTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeploymentTypesOrderByExp>>;
  where?: InputMaybe<DeploymentTypesBoolExp>;
};


export type SubscriptionDeploymentTypesAggregateArgs = {
  filter_input?: InputMaybe<DeploymentTypesFilterInput>;
};


export type SubscriptionDeploymentTypesByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionDerivativeAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DerivativeAssetsOrderByExp>>;
  where?: InputMaybe<DerivativeAssetsBoolExp>;
};


export type SubscriptionDerivativeAssetsAggregateArgs = {
  filter_input?: InputMaybe<DerivativeAssetsFilterInput>;
};


export type SubscriptionDerivativeAssetsByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionEntitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<EntitiesOrderByExp>>;
  where?: InputMaybe<EntitiesBoolExp>;
};


export type SubscriptionEntitiesAggregateArgs = {
  filter_input?: InputMaybe<EntitiesFilterInput>;
};


export type SubscriptionEntitiesByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionEntityTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<EntityTypesOrderByExp>>;
  where?: InputMaybe<EntityTypesBoolExp>;
};


export type SubscriptionEntityTypesAggregateArgs = {
  filter_input?: InputMaybe<EntityTypesFilterInput>;
};


export type SubscriptionEntityTypesByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionImageTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ImageTypesOrderByExp>>;
  where?: InputMaybe<ImageTypesBoolExp>;
};


export type SubscriptionImageTypesAggregateArgs = {
  filter_input?: InputMaybe<ImageTypesFilterInput>;
};


export type SubscriptionImageTypesByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionImagesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ImagesOrderByExp>>;
  where?: InputMaybe<ImagesBoolExp>;
};


export type SubscriptionImagesAggregateArgs = {
  filter_input?: InputMaybe<ImagesFilterInput>;
};


export type SubscriptionImagesByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionProductAssetRelationshipsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductAssetRelationshipsOrderByExp>>;
  where?: InputMaybe<ProductAssetRelationshipsBoolExp>;
};


export type SubscriptionProductAssetRelationshipsAggregateArgs = {
  filter_input?: InputMaybe<ProductAssetRelationshipsFilterInput>;
};


export type SubscriptionProductAssetRelationshipsByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionProductDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductDeploymentsOrderByExp>>;
  where?: InputMaybe<ProductDeploymentsBoolExp>;
};


export type SubscriptionProductDeploymentsAggregateArgs = {
  filter_input?: InputMaybe<ProductDeploymentsFilterInput>;
};


export type SubscriptionProductDeploymentsByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionProductStatusesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductStatusesOrderByExp>>;
  where?: InputMaybe<ProductStatusesBoolExp>;
};


export type SubscriptionProductStatusesAggregateArgs = {
  filter_input?: InputMaybe<ProductStatusesFilterInput>;
};


export type SubscriptionProductStatusesByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionProductTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductTypesOrderByExp>>;
  where?: InputMaybe<ProductTypesBoolExp>;
};


export type SubscriptionProductTypesAggregateArgs = {
  filter_input?: InputMaybe<ProductTypesFilterInput>;
};


export type SubscriptionProductTypesByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductsOrderByExp>>;
  where?: InputMaybe<ProductsBoolExp>;
};


export type SubscriptionProductsAggregateArgs = {
  filter_input?: InputMaybe<ProductsFilterInput>;
};


export type SubscriptionProductsByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionProfileInfosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileInfosOrderByExp>>;
  where?: InputMaybe<ProfileInfosBoolExp>;
};


export type SubscriptionProfileInfosAggregateArgs = {
  filter_input?: InputMaybe<ProfileInfosFilterInput>;
};


export type SubscriptionProfileInfosByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionProfileSectorsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileSectorsOrderByExp>>;
  where?: InputMaybe<ProfileSectorsBoolExp>;
};


export type SubscriptionProfileSectorsAggregateArgs = {
  filter_input?: InputMaybe<ProfileSectorsFilterInput>;
};


export type SubscriptionProfileSectorsByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionProfileStatusesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileStatusesOrderByExp>>;
  where?: InputMaybe<ProfileStatusesBoolExp>;
};


export type SubscriptionProfileStatusesAggregateArgs = {
  filter_input?: InputMaybe<ProfileStatusesFilterInput>;
};


export type SubscriptionProfileStatusesByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionProfileTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileTagsOrderByExp>>;
  where?: InputMaybe<ProfileTagsBoolExp>;
};


export type SubscriptionProfileTagsAggregateArgs = {
  filter_input?: InputMaybe<ProfileTagsFilterInput>;
};


export type SubscriptionProfileTagsByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionProfileTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileTypesOrderByExp>>;
  where?: InputMaybe<ProfileTypesBoolExp>;
};


export type SubscriptionProfileTypesAggregateArgs = {
  filter_input?: InputMaybe<ProfileTypesFilterInput>;
};


export type SubscriptionProfileTypesByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionRootRelationshipTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<RootRelationshipTypesOrderByExp>>;
  where?: InputMaybe<RootRelationshipTypesBoolExp>;
};


export type SubscriptionRootRelationshipTypesAggregateArgs = {
  filter_input?: InputMaybe<RootRelationshipTypesFilterInput>;
};


export type SubscriptionRootRelationshipTypesByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionRootRelationshipsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<RootRelationshipsOrderByExp>>;
  where?: InputMaybe<RootRelationshipsBoolExp>;
};


export type SubscriptionRootRelationshipsAggregateArgs = {
  filter_input?: InputMaybe<RootRelationshipsFilterInput>;
};


export type SubscriptionRootRelationshipsByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionRootsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<RootsOrderByExp>>;
  where?: InputMaybe<RootsBoolExp>;
};


export type SubscriptionRootsAggregateArgs = {
  filter_input?: InputMaybe<RootsFilterInput>;
};


export type SubscriptionRootsByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionSmartContractDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SmartContractDeploymentsOrderByExp>>;
  where?: InputMaybe<SmartContractDeploymentsBoolExp>;
};


export type SubscriptionSmartContractDeploymentsAggregateArgs = {
  filter_input?: InputMaybe<SmartContractDeploymentsFilterInput>;
};


export type SubscriptionSmartContractDeploymentsByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionSmartContractsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SmartContractsOrderByExp>>;
  where?: InputMaybe<SmartContractsBoolExp>;
};


export type SubscriptionSmartContractsAggregateArgs = {
  filter_input?: InputMaybe<SmartContractsFilterInput>;
};


export type SubscriptionSmartContractsByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionSocialStatusesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SocialStatusesOrderByExp>>;
  where?: InputMaybe<SocialStatusesBoolExp>;
};


export type SubscriptionSocialStatusesAggregateArgs = {
  filter_input?: InputMaybe<SocialStatusesFilterInput>;
};


export type SubscriptionSocialStatusesByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionSocialTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SocialTypesOrderByExp>>;
  where?: InputMaybe<SocialTypesBoolExp>;
};


export type SubscriptionSocialTypesAggregateArgs = {
  filter_input?: InputMaybe<SocialTypesFilterInput>;
};


export type SubscriptionSocialTypesByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionSocialsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SocialsOrderByExp>>;
  where?: InputMaybe<SocialsBoolExp>;
};


export type SubscriptionSocialsAggregateArgs = {
  filter_input?: InputMaybe<SocialsFilterInput>;
};


export type SubscriptionSocialsByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionSupportsProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SupportsProductsOrderByExp>>;
  where?: InputMaybe<SupportsProductsBoolExp>;
};


export type SubscriptionSupportsProductsAggregateArgs = {
  filter_input?: InputMaybe<SupportsProductsFilterInput>;
};


export type SubscriptionSupportsProductsByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionTagTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TagTypesOrderByExp>>;
  where?: InputMaybe<TagTypesBoolExp>;
};


export type SubscriptionTagTypesAggregateArgs = {
  filter_input?: InputMaybe<TagTypesFilterInput>;
};


export type SubscriptionTagTypesByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TagsOrderByExp>>;
  where?: InputMaybe<TagsBoolExp>;
};


export type SubscriptionTagsAggregateArgs = {
  filter_input?: InputMaybe<TagsFilterInput>;
};


export type SubscriptionTagsByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionUrlTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UrlTypesOrderByExp>>;
  where?: InputMaybe<UrlTypesBoolExp>;
};


export type SubscriptionUrlTypesAggregateArgs = {
  filter_input?: InputMaybe<UrlTypesFilterInput>;
};


export type SubscriptionUrlTypesByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionUrlsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UrlsOrderByExp>>;
  where?: InputMaybe<UrlsBoolExp>;
};


export type SubscriptionUrlsAggregateArgs = {
  filter_input?: InputMaybe<UrlsFilterInput>;
};


export type SubscriptionUrlsByIdArgs = {
  id: Scalars['String']['input'];
};

/** Table mapping product support relationships */
export type SupportsProducts = {
  __typename?: 'SupportsProducts';
  id: Scalars['String']['output'];
  product?: Maybe<Products>;
  productId: Scalars['String']['output'];
  supportsProduct?: Maybe<Products>;
  supportsProductId: Scalars['String']['output'];
};

export type SupportsProductsAggExp = {
  __typename?: 'SupportsProductsAggExp';
  _count: Scalars['Int']['output'];
  id: StringAggExp;
  productId: StringAggExp;
  supportsProductId: StringAggExp;
};

export type SupportsProductsBoolExp = {
  _and?: InputMaybe<Array<SupportsProductsBoolExp>>;
  _not?: InputMaybe<SupportsProductsBoolExp>;
  _or?: InputMaybe<Array<SupportsProductsBoolExp>>;
  id?: InputMaybe<StringBoolExp>;
  product?: InputMaybe<ProductsBoolExp>;
  productId?: InputMaybe<StringBoolExp>;
  supportsProduct?: InputMaybe<ProductsBoolExp>;
  supportsProductId?: InputMaybe<StringBoolExp>;
};

export type SupportsProductsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SupportsProductsOrderByExp>>;
  where?: InputMaybe<SupportsProductsBoolExp>;
};

export type SupportsProductsOrderByExp = {
  id?: InputMaybe<OrderBy>;
  product?: InputMaybe<ProductsOrderByExp>;
  productId?: InputMaybe<OrderBy>;
  supportsProduct?: InputMaybe<ProductsOrderByExp>;
  supportsProductId?: InputMaybe<OrderBy>;
};

export type TagTypes = {
  __typename?: 'TagTypes';
  definition: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tags>>;
  tagsAggregate: TagsAggExp;
};


export type TagTypesTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TagsOrderByExp>>;
  where?: InputMaybe<TagsBoolExp>;
};


export type TagTypesTagsAggregateArgs = {
  filter_input?: InputMaybe<TagsFilterInput>;
};

export type TagTypesAggExp = {
  __typename?: 'TagTypesAggExp';
  _count: Scalars['Int']['output'];
  definition: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
  slug: StringAggExp;
};

export type TagTypesBoolExp = {
  _and?: InputMaybe<Array<TagTypesBoolExp>>;
  _not?: InputMaybe<TagTypesBoolExp>;
  _or?: InputMaybe<Array<TagTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  slug?: InputMaybe<StringBoolExp>;
  tags?: InputMaybe<TagsBoolExp>;
};

export type TagTypesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TagTypesOrderByExp>>;
  where?: InputMaybe<TagTypesBoolExp>;
};

export type TagTypesOrderByExp = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
};

export type Tags = {
  __typename?: 'Tags';
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isArchived?: Maybe<Scalars['Int8']['output']>;
  name: Scalars['String']['output'];
  profileTags?: Maybe<Array<ProfileTags>>;
  profileTagsAggregate: ProfileTagsAggExp;
  slug?: Maybe<Scalars['String']['output']>;
  tagType?: Maybe<TagTypes>;
  tagTypeId?: Maybe<Scalars['String']['output']>;
};


export type TagsProfileTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileTagsOrderByExp>>;
  where?: InputMaybe<ProfileTagsBoolExp>;
};


export type TagsProfileTagsAggregateArgs = {
  filter_input?: InputMaybe<ProfileTagsFilterInput>;
};

export type TagsAggExp = {
  __typename?: 'TagsAggExp';
  _count: Scalars['Int']['output'];
  description: StringAggExp;
  id: StringAggExp;
  isArchived: Int8AggExp;
  name: StringAggExp;
  slug: StringAggExp;
  tagTypeId: StringAggExp;
};

export type TagsBoolExp = {
  _and?: InputMaybe<Array<TagsBoolExp>>;
  _not?: InputMaybe<TagsBoolExp>;
  _or?: InputMaybe<Array<TagsBoolExp>>;
  description?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  isArchived?: InputMaybe<Int8BoolExp>;
  name?: InputMaybe<StringBoolExp>;
  profileTags?: InputMaybe<ProfileTagsBoolExp>;
  slug?: InputMaybe<StringBoolExp>;
  tagType?: InputMaybe<TagTypesBoolExp>;
  tagTypeId?: InputMaybe<StringBoolExp>;
};

export type TagsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TagsOrderByExp>>;
  where?: InputMaybe<TagsBoolExp>;
};

export type TagsOrderByExp = {
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isArchived?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
  tagType?: InputMaybe<TagTypesOrderByExp>;
  tagTypeId?: InputMaybe<OrderBy>;
};

export type TheGridRanking = {
  __typename?: 'TheGridRanking';
  /** The Connection score (0-100) of the profile, supporting decimal values for more precision */
  connectionScore: Scalars['String']['output'];
  /** The root ID of the profile */
  rootId: Scalars['String']['output'];
  roots?: Maybe<Array<Roots>>;
  theGridRankingsAggregate: RootsAggExp;
};


export type TheGridRankingRootsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<RootsOrderByExp>>;
  where?: InputMaybe<RootsBoolExp>;
};


export type TheGridRankingTheGridRankingsAggregateArgs = {
  filter_input?: InputMaybe<RootsFilterInput>;
};

export type TheGridRankingAggExp = {
  __typename?: 'TheGridRankingAggExp';
  _count: Scalars['Int']['output'];
  connectionScore: StringAggExp;
  rootId: StringAggExp;
};

export type TheGridRankingBoolExp = {
  _and?: InputMaybe<Array<TheGridRankingBoolExp>>;
  _not?: InputMaybe<TheGridRankingBoolExp>;
  _or?: InputMaybe<Array<TheGridRankingBoolExp>>;
  connectionScore?: InputMaybe<StringBoolExp>;
  rootId?: InputMaybe<StringBoolExp>;
  roots?: InputMaybe<RootsBoolExp>;
};

export type TheGridRankingFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TheGridRankingOrderBy>>;
  where?: InputMaybe<TheGridRankingBoolExp>;
};

export type TheGridRankingOrderBy = {
  connectionScore?: InputMaybe<OrderBy>;
  rootId?: InputMaybe<OrderBy>;
};

export type UrlTypes = {
  __typename?: 'UrlTypes';
  allowedUrlTypes?: Maybe<Array<AllowedUrlTypes>>;
  allowedUrlTypesAggregate: AllowedUrlTypesAggExp;
  definition: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  urls?: Maybe<Array<Urls>>;
  urlsAggregate: UrlsAggExp;
};


export type UrlTypesAllowedUrlTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AllowedUrlTypesOrderByExp>>;
  where?: InputMaybe<AllowedUrlTypesBoolExp>;
};


export type UrlTypesAllowedUrlTypesAggregateArgs = {
  filter_input?: InputMaybe<AllowedUrlTypesFilterInput>;
};


export type UrlTypesUrlsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UrlsOrderByExp>>;
  where?: InputMaybe<UrlsBoolExp>;
};


export type UrlTypesUrlsAggregateArgs = {
  filter_input?: InputMaybe<UrlsFilterInput>;
};

export type UrlTypesAggExp = {
  __typename?: 'UrlTypesAggExp';
  _count: Scalars['Int']['output'];
  definition: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
  slug: StringAggExp;
};

export type UrlTypesBoolExp = {
  _and?: InputMaybe<Array<UrlTypesBoolExp>>;
  _not?: InputMaybe<UrlTypesBoolExp>;
  _or?: InputMaybe<Array<UrlTypesBoolExp>>;
  allowedUrlTypes?: InputMaybe<AllowedUrlTypesBoolExp>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  slug?: InputMaybe<StringBoolExp>;
  urls?: InputMaybe<UrlsBoolExp>;
};

export type UrlTypesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UrlTypesOrderByExp>>;
  where?: InputMaybe<UrlTypesBoolExp>;
};

export type UrlTypesOrderByExp = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
};

export type Urls = {
  __typename?: 'Urls';
  coreTableName?: Maybe<CoreTableNames>;
  id: Scalars['String']['output'];
  rowId: Scalars['String']['output'];
  tableId: Scalars['String']['output'];
  url: Scalars['String']['output'];
  urlType?: Maybe<UrlTypes>;
  urlTypeId?: Maybe<Scalars['String']['output']>;
};

export type UrlsAggExp = {
  __typename?: 'UrlsAggExp';
  _count: Scalars['Int']['output'];
  id: StringAggExp;
  rowId: StringAggExp;
  tableId: StringAggExp;
  url: StringAggExp;
  urlTypeId: StringAggExp;
};

export type UrlsBoolExp = {
  _and?: InputMaybe<Array<UrlsBoolExp>>;
  _not?: InputMaybe<UrlsBoolExp>;
  _or?: InputMaybe<Array<UrlsBoolExp>>;
  coreTableName?: InputMaybe<CoreTableNamesBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  rowId?: InputMaybe<StringBoolExp>;
  tableId?: InputMaybe<StringBoolExp>;
  url?: InputMaybe<StringBoolExp>;
  urlType?: InputMaybe<UrlTypesBoolExp>;
  urlTypeId?: InputMaybe<StringBoolExp>;
};

export type UrlsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UrlsOrderByExp>>;
  where?: InputMaybe<UrlsBoolExp>;
};

export type UrlsOrderByExp = {
  coreTableName?: InputMaybe<CoreTableNamesOrderByExp>;
  id?: InputMaybe<OrderBy>;
  rowId?: InputMaybe<OrderBy>;
  tableId?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
  urlType?: InputMaybe<UrlTypesOrderByExp>;
  urlTypeId?: InputMaybe<OrderBy>;
};

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __Type = {
  __typename?: '__Type';
  kind: __TypeKind;
  name?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  specifiedByURL?: Maybe<Scalars['String']['output']>;
  fields?: Maybe<Array<__Field>>;
  interfaces?: Maybe<Array<__Type>>;
  possibleTypes?: Maybe<Array<__Type>>;
  enumValues?: Maybe<Array<__EnumValue>>;
  inputFields?: Maybe<Array<__InputValue>>;
  ofType?: Maybe<__Type>;
  isOneOf?: Maybe<Scalars['Boolean']['output']>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeFieldsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']['input']>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeEnumValuesArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']['input']>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeInputFieldsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']['input']>;
};

/** An enum describing what kind of type a given `__Type` is. */
export enum __TypeKind {
  /** Indicates this type is a scalar. */
  Scalar = 'SCALAR',
  /** Indicates this type is an object. `fields` and `interfaces` are valid fields. */
  Object = 'OBJECT',
  /** Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields. */
  Interface = 'INTERFACE',
  /** Indicates this type is a union. `possibleTypes` is a valid field. */
  Union = 'UNION',
  /** Indicates this type is an enum. `enumValues` is a valid field. */
  Enum = 'ENUM',
  /** Indicates this type is an input object. `inputFields` is a valid field. */
  InputObject = 'INPUT_OBJECT',
  /** Indicates this type is a list. `ofType` is a valid field. */
  List = 'LIST',
  /** Indicates this type is a non-null. `ofType` is a valid field. */
  NonNull = 'NON_NULL'
}

/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export type __Field = {
  __typename?: '__Field';
  name: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  args: Array<__InputValue>;
  type: __Type;
  isDeprecated: Scalars['Boolean']['output'];
  deprecationReason?: Maybe<Scalars['String']['output']>;
};


/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export type __FieldArgsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value. */
export type __InputValue = {
  __typename?: '__InputValue';
  name: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  type: __Type;
  /** A GraphQL-formatted string representing the default value for this input value. */
  defaultValue?: Maybe<Scalars['String']['output']>;
  isDeprecated: Scalars['Boolean']['output'];
  deprecationReason?: Maybe<Scalars['String']['output']>;
};

/** One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string. */
export type __EnumValue = {
  __typename?: '__EnumValue';
  name: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  isDeprecated: Scalars['Boolean']['output'];
  deprecationReason?: Maybe<Scalars['String']['output']>;
};

export type GetProfileNameQueryVariables = Exact<{
  where?: InputMaybe<ProfileInfosBoolExp>;
}>;


export type GetProfileNameQuery = { __typename?: 'Query', profileInfos?: Array<{ __typename?: 'ProfileInfos', name: string, descriptionShort: string }> | null };

export type AssetFieldsFragmentFragment = { __typename?: 'Assets', ticker: string, rootId: string, name: string, id: string, icon: string, description: string, assetTypeId?: string | null, assetStatusId?: string | null, assetType?: { __typename?: 'AssetTypes', definition: string, id: string, name: string } | null, assetStatus?: { __typename?: 'AssetStatuses', name: string, id: string, definition: string } | null, assetDeployments?: Array<{ __typename?: 'AssetDeployments', id: string, deploymentId: string, assetId: string, smartContractDeployment?: { __typename?: 'SmartContractDeployments', id: string, deployedOnProduct?: { __typename?: 'Products', id: string, name: string, root?: { __typename?: 'Roots', slug: string } | null } | null, assetStandard?: { __typename?: 'AssetStandards', id: string } | null, smartContracts?: Array<{ __typename?: 'SmartContracts', name: string, id: string, deploymentId?: string | null, deploymentDate?: string | null, address: string }> | null, deploymentType?: { __typename?: 'DeploymentTypes', name: string, id: string, definition: string } | null } | null }> | null, urls?: Array<{ __typename?: 'AssetUrls', url: string, urlType?: { __typename?: 'UrlTypes', name: string, id: string, definition: string } | null }> | null } & { ' $fragmentName'?: 'AssetFieldsFragmentFragment' };

export type EntityFieldsFragmentFragment = { __typename?: 'Entities', name: string, tradeName: string, taxIdentificationNumber: string, localRegistrationNumber: string, leiNumber: string, id: string, dateOfIncorporation?: string | null, address: string, entityType?: { __typename?: 'EntityTypes', name: string, id: string, definition: string } | null, country?: { __typename?: 'Countries', name: string, id: string, code: string } | null, urls?: Array<{ __typename?: 'EntityUrls', url: string, urlType?: { __typename?: 'UrlTypes', name: string, id: string, definition: string } | null }> | null } & { ' $fragmentName'?: 'EntityFieldsFragmentFragment' };

export type ProfileFragmentFragment = { __typename?: 'ProfileInfos', profileSector?: { __typename?: 'ProfileSectors', name: string } | null, profileType?: { __typename?: 'ProfileTypes', name: string } | null, root?: { __typename?: 'Roots', assets?: Array<{ __typename?: 'Assets', ticker: string }> | null, profileTags?: Array<{ __typename?: 'ProfileTags', tag?: { __typename?: 'Tags', name: string, id: string } | null }> | null } | null, profileStatus?: { __typename?: 'ProfileStatuses', name: string, id: string } | null, mainProduct?: { __typename?: 'Roots', products?: Array<{ __typename?: 'Products', productType?: { __typename?: 'ProductTypes', name: string } | null }> | null } | null } & { ' $fragmentName'?: 'ProfileFragmentFragment' };

export type ProductFieldsFragmentFragment = { __typename?: 'Products', rootId: string, productTypeId?: string | null, productStatusId?: string | null, name: string, launchDate?: string | null, isMainProduct: number, id: string, description: string, productType?: { __typename?: 'ProductTypes', name: string, id: string, definition: string } | null, productStatus?: { __typename?: 'ProductStatuses', name: string, id: string, definition: string } | null, productDeployments?: Array<{ __typename?: 'ProductDeployments', smartContractDeployment?: { __typename?: 'SmartContractDeployments', assetStandardId?: string | null, id: string, deployedOnProduct?: { __typename?: 'Products', id: string, name: string, root?: { __typename?: 'Roots', slug: string } | null } | null, assetStandard?: { __typename?: 'AssetStandards', id: string } | null, deploymentType?: { __typename?: 'DeploymentTypes', name: string } | null, smartContracts?: Array<{ __typename?: 'SmartContracts', name: string, id: string, deploymentDate?: string | null, address: string, deploymentId?: string | null }> | null } | null }> | null, supportsProducts?: Array<{ __typename?: 'SupportsProducts', supportsProduct?: { __typename?: 'Products', name: string, id: string, root?: { __typename?: 'Roots', slug: string } | null } | null }> | null, supportedBy?: Array<{ __typename?: 'SupportsProducts', product?: { __typename?: 'Products', name: string, id: string, root?: { __typename?: 'Roots', slug: string } | null } | null }> | null, urls?: Array<{ __typename?: 'ProductUrls', url: string, urlType?: { __typename?: 'UrlTypes', name: string, id: string, definition: string } | null }> | null, productAssetRelationships?: Array<{ __typename?: 'ProductAssetRelationships', assetId: string, asset?: { __typename?: 'Assets', name: string, id: string, assetType?: { __typename?: 'AssetTypes', name: string } | null, root?: { __typename?: 'Roots', slug: string } | null } | null, assetSupportType?: { __typename?: 'AssetSupportTypes', name: string } | null, product?: { __typename?: 'Products', name: string, id: string, description: string } | null }> | null } & { ' $fragmentName'?: 'ProductFieldsFragmentFragment' };

export type ProfileHeadingFragmentFragment = { __typename?: 'ProfileInfos', logo: string, name: string, urls?: Array<{ __typename?: 'ProfileInfoUrls', url: string, urlType?: { __typename?: 'UrlTypes', name: string } | null }> | null, root?: { __typename?: 'Roots', socials?: Array<{ __typename?: 'Socials', name: string, socialType?: { __typename?: 'SocialTypes', name: string } | null, urls?: Array<{ __typename?: 'SocialUrls', url: string }> | null }> | null } | null } & { ' $fragmentName'?: 'ProfileHeadingFragmentFragment' };

export type GetProfileDataQueryVariables = Exact<{
  where?: InputMaybe<ProfileInfosBoolExp>;
}>;


export type GetProfileDataQuery = { __typename?: 'Query', profileInfos?: Array<(
    { __typename?: 'ProfileInfos', tagLine: string, descriptionShort: string, descriptionLong: string, root?: { __typename?: 'Roots', products?: Array<(
        { __typename?: 'Products', id: string }
        & { ' $fragmentRefs'?: { 'ProductFieldsFragmentFragment': ProductFieldsFragmentFragment } }
      )> | null, assets?: Array<(
        { __typename?: 'Assets', id: string }
        & { ' $fragmentRefs'?: { 'AssetFieldsFragmentFragment': AssetFieldsFragmentFragment } }
      )> | null, entities?: Array<(
        { __typename?: 'Entities', id: string }
        & { ' $fragmentRefs'?: { 'EntityFieldsFragmentFragment': EntityFieldsFragmentFragment } }
      )> | null } | null }
    & { ' $fragmentRefs'?: { 'ProfileFragmentFragment': ProfileFragmentFragment;'ProfileHeadingFragmentFragment': ProfileHeadingFragmentFragment } }
  )> | null };

export type ProfileCardFragmentFragment = { __typename?: 'ProfileInfos', name: string, logo: string, id: string, tagLine: string, descriptionShort: string, profileTypeId?: string | null, profileStatusId?: string | null, profileSectorId?: string | null, foundingDate?: string | null, profileSector?: { __typename?: 'ProfileSectors', name: string, id: string, definition: string } | null, profileStatus?: { __typename?: 'ProfileStatuses', name: string, id: string, definition: string } | null, profileType?: { __typename?: 'ProfileTypes', name: string, id: string, definition: string } | null, urls?: Array<{ __typename?: 'ProfileInfoUrls', url: string, urlType?: { __typename?: 'UrlTypes', name: string, id: string, definition: string } | null }> | null, mainProduct?: { __typename?: 'Roots', products?: Array<{ __typename?: 'Products', name: string, productType?: { __typename?: 'ProductTypes', name: string } | null }> | null } | null, root?: { __typename?: 'Roots', urlMain: string, slug: string, theGridRanking?: Array<{ __typename?: 'TheGridRanking', connectionScore: string, rootId: string }> | null, assets?: Array<(
      { __typename?: 'Assets', ticker: string, name: string, id: string }
      & { ' $fragmentRefs'?: { 'AssetFieldsFragmentFragment': AssetFieldsFragmentFragment } }
    )> | null, socials?: Array<{ __typename?: 'Socials', name: string, socialType?: { __typename?: 'SocialTypes', name: string } | null, urls?: Array<{ __typename?: 'SocialUrls', url: string }> | null }> | null, profileTags?: Array<{ __typename?: 'ProfileTags', tag?: { __typename?: 'Tags', name: string, id: string } | null }> | null, products?: Array<(
      { __typename?: 'Products', id: string, name: string }
      & { ' $fragmentRefs'?: { 'ProductFieldsFragmentFragment': ProductFieldsFragmentFragment } }
    )> | null } | null } & { ' $fragmentName'?: 'ProfileCardFragmentFragment' };

export type SearchProfilesQueryVariables = Exact<{
  order_by?: InputMaybe<Array<ProfileInfosOrderByExp> | ProfileInfosOrderByExp>;
  where?: InputMaybe<ProfileInfosBoolExp>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type SearchProfilesQuery = { __typename?: 'Query', profileInfos?: Array<(
    { __typename?: 'ProfileInfos' }
    & { ' $fragmentRefs'?: { 'ProfileCardFragmentFragment': ProfileCardFragmentFragment } }
  )> | null };

export type SearchProfilesByRankingQueryVariables = Exact<{
  order_by?: InputMaybe<Array<TheGridRankingOrderBy> | TheGridRankingOrderBy>;
  where?: InputMaybe<TheGridRankingBoolExp>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type SearchProfilesByRankingQuery = { __typename?: 'Query', theGridRankings?: Array<{ __typename?: 'TheGridRanking', connectionScore: string, rootId: string, roots?: Array<{ __typename?: 'Roots', profileInfos?: Array<(
        { __typename?: 'ProfileInfos' }
        & { ' $fragmentRefs'?: { 'ProfileCardFragmentFragment': ProfileCardFragmentFragment } }
      )> | null }> | null }> | null };

export type GetOrderByFieldsQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type GetOrderByFieldsQuery = { __typename?: 'Query', __type?: { __typename?: '__Type', inputFields?: Array<{ __typename?: '__InputValue', name: string, type: { __typename?: '__Type', name?: string | null, kind: __TypeKind, inputFields?: Array<{ __typename?: '__InputValue', name: string }> | null, ofType?: { __typename?: '__Type', name?: string | null, kind: __TypeKind } | null } }> | null } | null };

export type GetAssetDeployedOnProductsOptionsQueryVariables = Exact<{
  where?: InputMaybe<ProductsBoolExp>;
}>;


export type GetAssetDeployedOnProductsOptionsQuery = { __typename?: 'Query', products?: Array<{ __typename?: 'Products', name: string, id: string, description: string }> | null };

export type GetAssetStandardOptionsQueryVariables = Exact<{
  where?: InputMaybe<AssetStandardsBoolExp>;
}>;


export type GetAssetStandardOptionsQuery = { __typename?: 'Query', assetStandards?: Array<{ __typename?: 'AssetStandards', label: string, value: string, description: string }> | null };

export type GetAssetTickerOptionsQueryVariables = Exact<{
  where?: InputMaybe<AssetsBoolExp>;
}>;


export type GetAssetTickerOptionsQuery = { __typename?: 'Query', assets?: Array<{ __typename?: 'Assets', ticker: string }> | null };

export type GetAssetTypeOptionsQueryVariables = Exact<{
  where?: InputMaybe<AssetTypesBoolExp>;
}>;


export type GetAssetTypeOptionsQuery = { __typename?: 'Query', assetTypes?: Array<{ __typename?: 'AssetTypes', label: string, value: string, description: string }> | null };

export type GetEntityCountryOptionsQueryVariables = Exact<{
  where?: InputMaybe<CountriesBoolExp>;
}>;


export type GetEntityCountryOptionsQuery = { __typename?: 'Query', countries?: Array<{ __typename?: 'Countries', label: string, value: string }> | null };

export type GetEntityNameOptionsQueryVariables = Exact<{
  where?: InputMaybe<EntitiesBoolExp>;
}>;


export type GetEntityNameOptionsQuery = { __typename?: 'Query', entities?: Array<{ __typename?: 'Entities', label: string, value: string }> | null };

export type GetEntityTypeOptionsQueryVariables = Exact<{
  where?: InputMaybe<EntityTypesBoolExp>;
}>;


export type GetEntityTypeOptionsQuery = { __typename?: 'Query', entityTypes?: Array<{ __typename?: 'EntityTypes', label: string, value: string, description: string }> | null };

export type GetProductAssetRelationshipsOptionsQueryVariables = Exact<{
  where?: InputMaybe<AssetsBoolExp>;
}>;


export type GetProductAssetRelationshipsOptionsQuery = { __typename?: 'Query', assets?: Array<{ __typename?: 'Assets', ticker: string }> | null };

export type GetProductDeployedOnProductsOptionsQueryVariables = Exact<{
  where?: InputMaybe<ProductsBoolExp>;
}>;


export type GetProductDeployedOnProductsOptionsQuery = { __typename?: 'Query', products?: Array<{ __typename?: 'Products', name: string, id: string, description: string }> | null };

export type GetProductStatusesOptionsQueryVariables = Exact<{
  where?: InputMaybe<ProductStatusesBoolExp>;
}>;


export type GetProductStatusesOptionsQuery = { __typename?: 'Query', productStatuses?: Array<{ __typename?: 'ProductStatuses', label: string, value: string, description: string }> | null };

export type GetProductTypeOptionsQueryVariables = Exact<{
  where?: InputMaybe<ProductTypesBoolExp>;
  aggregateInput?: InputMaybe<ProductsFilterInput>;
}>;


export type GetProductTypeOptionsQuery = { __typename?: 'Query', productTypes?: Array<{ __typename?: 'ProductTypes', label: string, value: string, description: string, productsAggregate: { __typename?: 'ProductsAggExp', _count: number } }> | null };

export type GetProfileSectorsOptionsQueryVariables = Exact<{
  where?: InputMaybe<ProfileSectorsBoolExp>;
  aggregateInput?: InputMaybe<ProfileInfosFilterInput>;
}>;


export type GetProfileSectorsOptionsQuery = { __typename?: 'Query', profileSectors?: Array<{ __typename?: 'ProfileSectors', label: string, value: string, description: string, profileInfosAggregate: { __typename?: 'ProfileInfosAggExp', _count: number } }> | null };

export type GetProfileStatusesOptionsQueryVariables = Exact<{
  where?: InputMaybe<ProfileStatusesBoolExp>;
}>;


export type GetProfileStatusesOptionsQuery = { __typename?: 'Query', profileStatuses?: Array<{ __typename?: 'ProfileStatuses', label: string, value: string, description: string }> | null };

export type GetProfileTypeOptionsQueryVariables = Exact<{
  where?: InputMaybe<ProfileTypesBoolExp>;
}>;


export type GetProfileTypeOptionsQuery = { __typename?: 'Query', profileTypes?: Array<{ __typename?: 'ProfileTypes', label: string, value: string, description: string }> | null };

export type GetSupportsProductsOptionsQueryVariables = Exact<{
  where?: InputMaybe<SupportsProductsBoolExp>;
}>;


export type GetSupportsProductsOptionsQuery = { __typename?: 'Query', supportsProducts?: Array<{ __typename?: 'SupportsProducts', supportsProduct?: { __typename?: 'Products', name: string, id: string, description: string } | null }> | null };

export type GetTagsOptionsQueryVariables = Exact<{
  where?: InputMaybe<TagsBoolExp>;
  aggregateInput?: InputMaybe<ProfileTagsFilterInput>;
}>;


export type GetTagsOptionsQuery = { __typename?: 'Query', tags?: Array<{ __typename?: 'Tags', description: string, value: string, label: string, profileTagsAggregate: { __typename?: 'ProfileTagsAggExp', _count: number } }> | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any> | undefined) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const EntityFieldsFragmentFragmentDoc = new TypedDocumentString(`
    fragment EntityFieldsFragment on Entities {
  name
  tradeName
  taxIdentificationNumber
  localRegistrationNumber
  leiNumber
  id
  dateOfIncorporation
  address
  entityType {
    name
    id
    definition
  }
  country {
    name
    id
    code
  }
  urls {
    url
    urlType {
      name
      id
      definition
    }
  }
}
    `, {"fragmentName":"EntityFieldsFragment"}) as unknown as TypedDocumentString<EntityFieldsFragmentFragment, unknown>;
export const ProfileFragmentFragmentDoc = new TypedDocumentString(`
    fragment ProfileFragment on ProfileInfos {
  profileSector {
    name
  }
  profileType {
    name
  }
  root {
    assets {
      ticker
    }
  }
  profileStatus {
    name
    id
  }
  root {
    profileTags {
      tag {
        name
        id
      }
    }
  }
  mainProduct: root {
    products(where: {isMainProduct: {_eq: "1"}}, limit: 1) {
      productType {
        name
      }
    }
  }
}
    `, {"fragmentName":"ProfileFragment"}) as unknown as TypedDocumentString<ProfileFragmentFragment, unknown>;
export const ProfileHeadingFragmentFragmentDoc = new TypedDocumentString(`
    fragment ProfileHeadingFragment on ProfileInfos {
  logo
  name
  urls(order_by: {urlTypeId: Asc}) {
    url
    urlType {
      name
    }
  }
  root {
    socials {
      name
      socialType {
        name
      }
      urls(order_by: {urlTypeId: Asc}) {
        url
      }
    }
  }
}
    `, {"fragmentName":"ProfileHeadingFragment"}) as unknown as TypedDocumentString<ProfileHeadingFragmentFragment, unknown>;
export const ProductFieldsFragmentFragmentDoc = new TypedDocumentString(`
    fragment ProductFieldsFragment on Products {
  rootId
  productTypeId
  productStatusId
  name
  launchDate
  isMainProduct
  id
  description
  productType {
    name
    id
    definition
  }
  productStatus {
    name
    id
    definition
  }
  productDeployments {
    smartContractDeployment {
      deployedOnProduct {
        id
        name
        root {
          slug
        }
      }
      assetStandard {
        id
      }
      deploymentType {
        name
      }
      smartContracts {
        name
        id
        deploymentDate
        address
        deploymentId
      }
      assetStandardId
      id
    }
  }
  supportsProducts {
    supportsProduct {
      name
      id
      root {
        slug
      }
    }
  }
  supportedBy: supportsProductsBySupportsProductId {
    product {
      name
      id
      root {
        slug
      }
    }
  }
  urls(order_by: {urlTypeId: Asc}) {
    url
    urlType {
      name
      id
      definition
    }
  }
  productAssetRelationships {
    assetId
    asset {
      name
      id
      assetType {
        name
      }
      root {
        slug
      }
    }
    assetSupportType {
      name
    }
    product {
      name
      id
      description
    }
  }
}
    `, {"fragmentName":"ProductFieldsFragment"}) as unknown as TypedDocumentString<ProductFieldsFragmentFragment, unknown>;
export const AssetFieldsFragmentFragmentDoc = new TypedDocumentString(`
    fragment AssetFieldsFragment on Assets {
  ticker
  rootId
  name
  id
  icon
  description
  assetTypeId
  assetStatusId
  assetType {
    definition
    id
    name
  }
  assetStatus {
    name
    id
    definition
  }
  assetDeployments {
    id
    deploymentId
    assetId
    smartContractDeployment {
      id
      deployedOnProduct {
        id
        name
        root {
          slug
        }
      }
      assetStandard {
        id
      }
      smartContracts {
        name
        id
        deploymentId
        deploymentDate
        address
      }
      deploymentType {
        name
        id
        definition
      }
    }
  }
  urls(order_by: {urlTypeId: Asc}) {
    url
    urlType {
      name
      id
      definition
    }
  }
}
    `, {"fragmentName":"AssetFieldsFragment"}) as unknown as TypedDocumentString<AssetFieldsFragmentFragment, unknown>;
export const ProfileCardFragmentFragmentDoc = new TypedDocumentString(`
    fragment ProfileCardFragment on ProfileInfos {
  name
  logo
  id
  tagLine
  descriptionShort
  profileTypeId
  profileStatusId
  profileSectorId
  foundingDate
  profileSector {
    name
    id
    definition
  }
  profileStatus {
    name
    id
    definition
  }
  profileType {
    name
    id
    definition
  }
  urls(order_by: {urlTypeId: Asc}) {
    url
    urlType {
      name
      id
      definition
    }
  }
  mainProduct: root {
    products(where: {isMainProduct: {_eq: "1"}}, limit: 1) {
      name
      productType {
        name
      }
    }
  }
  root {
    urlMain
    slug
    theGridRanking {
      connectionScore
      rootId
    }
    assets {
      ticker
      name
      id
    }
    socials {
      name
      socialType {
        name
      }
      urls(order_by: {urlTypeId: Asc}) {
        url
      }
    }
    profileTags {
      tag {
        name
        id
      }
    }
    products {
      id
      name
      ...ProductFieldsFragment
    }
    assets {
      ...AssetFieldsFragment
    }
  }
}
    fragment AssetFieldsFragment on Assets {
  ticker
  rootId
  name
  id
  icon
  description
  assetTypeId
  assetStatusId
  assetType {
    definition
    id
    name
  }
  assetStatus {
    name
    id
    definition
  }
  assetDeployments {
    id
    deploymentId
    assetId
    smartContractDeployment {
      id
      deployedOnProduct {
        id
        name
        root {
          slug
        }
      }
      assetStandard {
        id
      }
      smartContracts {
        name
        id
        deploymentId
        deploymentDate
        address
      }
      deploymentType {
        name
        id
        definition
      }
    }
  }
  urls(order_by: {urlTypeId: Asc}) {
    url
    urlType {
      name
      id
      definition
    }
  }
}
fragment ProductFieldsFragment on Products {
  rootId
  productTypeId
  productStatusId
  name
  launchDate
  isMainProduct
  id
  description
  productType {
    name
    id
    definition
  }
  productStatus {
    name
    id
    definition
  }
  productDeployments {
    smartContractDeployment {
      deployedOnProduct {
        id
        name
        root {
          slug
        }
      }
      assetStandard {
        id
      }
      deploymentType {
        name
      }
      smartContracts {
        name
        id
        deploymentDate
        address
        deploymentId
      }
      assetStandardId
      id
    }
  }
  supportsProducts {
    supportsProduct {
      name
      id
      root {
        slug
      }
    }
  }
  supportedBy: supportsProductsBySupportsProductId {
    product {
      name
      id
      root {
        slug
      }
    }
  }
  urls(order_by: {urlTypeId: Asc}) {
    url
    urlType {
      name
      id
      definition
    }
  }
  productAssetRelationships {
    assetId
    asset {
      name
      id
      assetType {
        name
      }
      root {
        slug
      }
    }
    assetSupportType {
      name
    }
    product {
      name
      id
      description
    }
  }
}`, {"fragmentName":"ProfileCardFragment"}) as unknown as TypedDocumentString<ProfileCardFragmentFragment, unknown>;
export const GetProfileNameDocument = new TypedDocumentString(`
    query getProfileName($where: ProfileInfosBoolExp) {
  profileInfos(limit: 1, offset: 0, where: $where) {
    name
    descriptionShort
  }
}
    `) as unknown as TypedDocumentString<GetProfileNameQuery, GetProfileNameQueryVariables>;
export const GetProfileDataDocument = new TypedDocumentString(`
    query getProfileData($where: ProfileInfosBoolExp) {
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
    fragment AssetFieldsFragment on Assets {
  ticker
  rootId
  name
  id
  icon
  description
  assetTypeId
  assetStatusId
  assetType {
    definition
    id
    name
  }
  assetStatus {
    name
    id
    definition
  }
  assetDeployments {
    id
    deploymentId
    assetId
    smartContractDeployment {
      id
      deployedOnProduct {
        id
        name
        root {
          slug
        }
      }
      assetStandard {
        id
      }
      smartContracts {
        name
        id
        deploymentId
        deploymentDate
        address
      }
      deploymentType {
        name
        id
        definition
      }
    }
  }
  urls(order_by: {urlTypeId: Asc}) {
    url
    urlType {
      name
      id
      definition
    }
  }
}
fragment EntityFieldsFragment on Entities {
  name
  tradeName
  taxIdentificationNumber
  localRegistrationNumber
  leiNumber
  id
  dateOfIncorporation
  address
  entityType {
    name
    id
    definition
  }
  country {
    name
    id
    code
  }
  urls {
    url
    urlType {
      name
      id
      definition
    }
  }
}
fragment ProfileFragment on ProfileInfos {
  profileSector {
    name
  }
  profileType {
    name
  }
  root {
    assets {
      ticker
    }
  }
  profileStatus {
    name
    id
  }
  root {
    profileTags {
      tag {
        name
        id
      }
    }
  }
  mainProduct: root {
    products(where: {isMainProduct: {_eq: "1"}}, limit: 1) {
      productType {
        name
      }
    }
  }
}
fragment ProductFieldsFragment on Products {
  rootId
  productTypeId
  productStatusId
  name
  launchDate
  isMainProduct
  id
  description
  productType {
    name
    id
    definition
  }
  productStatus {
    name
    id
    definition
  }
  productDeployments {
    smartContractDeployment {
      deployedOnProduct {
        id
        name
        root {
          slug
        }
      }
      assetStandard {
        id
      }
      deploymentType {
        name
      }
      smartContracts {
        name
        id
        deploymentDate
        address
        deploymentId
      }
      assetStandardId
      id
    }
  }
  supportsProducts {
    supportsProduct {
      name
      id
      root {
        slug
      }
    }
  }
  supportedBy: supportsProductsBySupportsProductId {
    product {
      name
      id
      root {
        slug
      }
    }
  }
  urls(order_by: {urlTypeId: Asc}) {
    url
    urlType {
      name
      id
      definition
    }
  }
  productAssetRelationships {
    assetId
    asset {
      name
      id
      assetType {
        name
      }
      root {
        slug
      }
    }
    assetSupportType {
      name
    }
    product {
      name
      id
      description
    }
  }
}
fragment ProfileHeadingFragment on ProfileInfos {
  logo
  name
  urls(order_by: {urlTypeId: Asc}) {
    url
    urlType {
      name
    }
  }
  root {
    socials {
      name
      socialType {
        name
      }
      urls(order_by: {urlTypeId: Asc}) {
        url
      }
    }
  }
}`) as unknown as TypedDocumentString<GetProfileDataQuery, GetProfileDataQueryVariables>;
export const SearchProfilesDocument = new TypedDocumentString(`
    query SearchProfiles($order_by: [ProfileInfosOrderByExp!], $where: ProfileInfosBoolExp, $limit: Int, $offset: Int) {
  profileInfos(limit: $limit, offset: $offset, where: $where, order_by: $order_by) {
    ...ProfileCardFragment
  }
}
    fragment AssetFieldsFragment on Assets {
  ticker
  rootId
  name
  id
  icon
  description
  assetTypeId
  assetStatusId
  assetType {
    definition
    id
    name
  }
  assetStatus {
    name
    id
    definition
  }
  assetDeployments {
    id
    deploymentId
    assetId
    smartContractDeployment {
      id
      deployedOnProduct {
        id
        name
        root {
          slug
        }
      }
      assetStandard {
        id
      }
      smartContracts {
        name
        id
        deploymentId
        deploymentDate
        address
      }
      deploymentType {
        name
        id
        definition
      }
    }
  }
  urls(order_by: {urlTypeId: Asc}) {
    url
    urlType {
      name
      id
      definition
    }
  }
}
fragment ProductFieldsFragment on Products {
  rootId
  productTypeId
  productStatusId
  name
  launchDate
  isMainProduct
  id
  description
  productType {
    name
    id
    definition
  }
  productStatus {
    name
    id
    definition
  }
  productDeployments {
    smartContractDeployment {
      deployedOnProduct {
        id
        name
        root {
          slug
        }
      }
      assetStandard {
        id
      }
      deploymentType {
        name
      }
      smartContracts {
        name
        id
        deploymentDate
        address
        deploymentId
      }
      assetStandardId
      id
    }
  }
  supportsProducts {
    supportsProduct {
      name
      id
      root {
        slug
      }
    }
  }
  supportedBy: supportsProductsBySupportsProductId {
    product {
      name
      id
      root {
        slug
      }
    }
  }
  urls(order_by: {urlTypeId: Asc}) {
    url
    urlType {
      name
      id
      definition
    }
  }
  productAssetRelationships {
    assetId
    asset {
      name
      id
      assetType {
        name
      }
      root {
        slug
      }
    }
    assetSupportType {
      name
    }
    product {
      name
      id
      description
    }
  }
}
fragment ProfileCardFragment on ProfileInfos {
  name
  logo
  id
  tagLine
  descriptionShort
  profileTypeId
  profileStatusId
  profileSectorId
  foundingDate
  profileSector {
    name
    id
    definition
  }
  profileStatus {
    name
    id
    definition
  }
  profileType {
    name
    id
    definition
  }
  urls(order_by: {urlTypeId: Asc}) {
    url
    urlType {
      name
      id
      definition
    }
  }
  mainProduct: root {
    products(where: {isMainProduct: {_eq: "1"}}, limit: 1) {
      name
      productType {
        name
      }
    }
  }
  root {
    urlMain
    slug
    theGridRanking {
      connectionScore
      rootId
    }
    assets {
      ticker
      name
      id
    }
    socials {
      name
      socialType {
        name
      }
      urls(order_by: {urlTypeId: Asc}) {
        url
      }
    }
    profileTags {
      tag {
        name
        id
      }
    }
    products {
      id
      name
      ...ProductFieldsFragment
    }
    assets {
      ...AssetFieldsFragment
    }
  }
}`) as unknown as TypedDocumentString<SearchProfilesQuery, SearchProfilesQueryVariables>;
export const SearchProfilesByRankingDocument = new TypedDocumentString(`
    query SearchProfilesByRanking($order_by: [TheGridRankingOrderBy!], $where: TheGridRankingBoolExp, $limit: Int, $offset: Int) {
  theGridRankings(
    limit: $limit
    offset: $offset
    where: $where
    order_by: $order_by
  ) {
    connectionScore
    rootId
    roots {
      profileInfos {
        ...ProfileCardFragment
      }
    }
  }
}
    fragment AssetFieldsFragment on Assets {
  ticker
  rootId
  name
  id
  icon
  description
  assetTypeId
  assetStatusId
  assetType {
    definition
    id
    name
  }
  assetStatus {
    name
    id
    definition
  }
  assetDeployments {
    id
    deploymentId
    assetId
    smartContractDeployment {
      id
      deployedOnProduct {
        id
        name
        root {
          slug
        }
      }
      assetStandard {
        id
      }
      smartContracts {
        name
        id
        deploymentId
        deploymentDate
        address
      }
      deploymentType {
        name
        id
        definition
      }
    }
  }
  urls(order_by: {urlTypeId: Asc}) {
    url
    urlType {
      name
      id
      definition
    }
  }
}
fragment ProductFieldsFragment on Products {
  rootId
  productTypeId
  productStatusId
  name
  launchDate
  isMainProduct
  id
  description
  productType {
    name
    id
    definition
  }
  productStatus {
    name
    id
    definition
  }
  productDeployments {
    smartContractDeployment {
      deployedOnProduct {
        id
        name
        root {
          slug
        }
      }
      assetStandard {
        id
      }
      deploymentType {
        name
      }
      smartContracts {
        name
        id
        deploymentDate
        address
        deploymentId
      }
      assetStandardId
      id
    }
  }
  supportsProducts {
    supportsProduct {
      name
      id
      root {
        slug
      }
    }
  }
  supportedBy: supportsProductsBySupportsProductId {
    product {
      name
      id
      root {
        slug
      }
    }
  }
  urls(order_by: {urlTypeId: Asc}) {
    url
    urlType {
      name
      id
      definition
    }
  }
  productAssetRelationships {
    assetId
    asset {
      name
      id
      assetType {
        name
      }
      root {
        slug
      }
    }
    assetSupportType {
      name
    }
    product {
      name
      id
      description
    }
  }
}
fragment ProfileCardFragment on ProfileInfos {
  name
  logo
  id
  tagLine
  descriptionShort
  profileTypeId
  profileStatusId
  profileSectorId
  foundingDate
  profileSector {
    name
    id
    definition
  }
  profileStatus {
    name
    id
    definition
  }
  profileType {
    name
    id
    definition
  }
  urls(order_by: {urlTypeId: Asc}) {
    url
    urlType {
      name
      id
      definition
    }
  }
  mainProduct: root {
    products(where: {isMainProduct: {_eq: "1"}}, limit: 1) {
      name
      productType {
        name
      }
    }
  }
  root {
    urlMain
    slug
    theGridRanking {
      connectionScore
      rootId
    }
    assets {
      ticker
      name
      id
    }
    socials {
      name
      socialType {
        name
      }
      urls(order_by: {urlTypeId: Asc}) {
        url
      }
    }
    profileTags {
      tag {
        name
        id
      }
    }
    products {
      id
      name
      ...ProductFieldsFragment
    }
    assets {
      ...AssetFieldsFragment
    }
  }
}`) as unknown as TypedDocumentString<SearchProfilesByRankingQuery, SearchProfilesByRankingQueryVariables>;
export const GetOrderByFieldsDocument = new TypedDocumentString(`
    query GetOrderByFields($name: String!) {
  __type(name: $name) {
    inputFields {
      name
      type {
        inputFields {
          name
        }
        name
        kind
        ofType {
          name
          kind
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetOrderByFieldsQuery, GetOrderByFieldsQueryVariables>;
export const GetAssetDeployedOnProductsOptionsDocument = new TypedDocumentString(`
    query getAssetDeployedOnProductsOptions($where: ProductsBoolExp) {
  products(where: $where) {
    name
    id
    description
  }
}
    `) as unknown as TypedDocumentString<GetAssetDeployedOnProductsOptionsQuery, GetAssetDeployedOnProductsOptionsQueryVariables>;
export const GetAssetStandardOptionsDocument = new TypedDocumentString(`
    query getAssetStandardOptions($where: AssetStandardsBoolExp) {
  assetStandards(where: $where) {
    label: name
    value: id
    description: definition
  }
}
    `) as unknown as TypedDocumentString<GetAssetStandardOptionsQuery, GetAssetStandardOptionsQueryVariables>;
export const GetAssetTickerOptionsDocument = new TypedDocumentString(`
    query getAssetTickerOptions($where: AssetsBoolExp) {
  assets(where: $where) {
    ticker
  }
}
    `) as unknown as TypedDocumentString<GetAssetTickerOptionsQuery, GetAssetTickerOptionsQueryVariables>;
export const GetAssetTypeOptionsDocument = new TypedDocumentString(`
    query getAssetTypeOptions($where: AssetTypesBoolExp) {
  assetTypes(where: $where) {
    label: name
    value: id
    description: definition
  }
}
    `) as unknown as TypedDocumentString<GetAssetTypeOptionsQuery, GetAssetTypeOptionsQueryVariables>;
export const GetEntityCountryOptionsDocument = new TypedDocumentString(`
    query getEntityCountryOptions($where: CountriesBoolExp) {
  countries(where: $where) {
    label: name
    value: id
  }
}
    `) as unknown as TypedDocumentString<GetEntityCountryOptionsQuery, GetEntityCountryOptionsQueryVariables>;
export const GetEntityNameOptionsDocument = new TypedDocumentString(`
    query getEntityNameOptions($where: EntitiesBoolExp) {
  entities(where: $where) {
    label: name
    value: id
  }
}
    `) as unknown as TypedDocumentString<GetEntityNameOptionsQuery, GetEntityNameOptionsQueryVariables>;
export const GetEntityTypeOptionsDocument = new TypedDocumentString(`
    query getEntityTypeOptions($where: EntityTypesBoolExp) {
  entityTypes(where: $where) {
    label: name
    value: id
    description: definition
  }
}
    `) as unknown as TypedDocumentString<GetEntityTypeOptionsQuery, GetEntityTypeOptionsQueryVariables>;
export const GetProductAssetRelationshipsOptionsDocument = new TypedDocumentString(`
    query getProductAssetRelationshipsOptions($where: AssetsBoolExp) {
  assets(where: $where) {
    ticker
  }
}
    `) as unknown as TypedDocumentString<GetProductAssetRelationshipsOptionsQuery, GetProductAssetRelationshipsOptionsQueryVariables>;
export const GetProductDeployedOnProductsOptionsDocument = new TypedDocumentString(`
    query getProductDeployedOnProductsOptions($where: ProductsBoolExp) {
  products(where: $where) {
    name
    id
    description
  }
}
    `) as unknown as TypedDocumentString<GetProductDeployedOnProductsOptionsQuery, GetProductDeployedOnProductsOptionsQueryVariables>;
export const GetProductStatusesOptionsDocument = new TypedDocumentString(`
    query getProductStatusesOptions($where: ProductStatusesBoolExp) {
  productStatuses(where: $where) {
    label: name
    value: id
    description: definition
  }
}
    `) as unknown as TypedDocumentString<GetProductStatusesOptionsQuery, GetProductStatusesOptionsQueryVariables>;
export const GetProductTypeOptionsDocument = new TypedDocumentString(`
    query getProductTypeOptions($where: ProductTypesBoolExp, $aggregateInput: ProductsFilterInput) {
  productTypes(where: $where) {
    label: name
    value: id
    description: definition
    productsAggregate(filter_input: $aggregateInput) {
      _count
    }
  }
}
    `) as unknown as TypedDocumentString<GetProductTypeOptionsQuery, GetProductTypeOptionsQueryVariables>;
export const GetProfileSectorsOptionsDocument = new TypedDocumentString(`
    query getProfileSectorsOptions($where: ProfileSectorsBoolExp, $aggregateInput: ProfileInfosFilterInput) {
  profileSectors(where: $where) {
    label: name
    value: id
    description: definition
    profileInfosAggregate(filter_input: $aggregateInput) {
      _count
    }
  }
}
    `) as unknown as TypedDocumentString<GetProfileSectorsOptionsQuery, GetProfileSectorsOptionsQueryVariables>;
export const GetProfileStatusesOptionsDocument = new TypedDocumentString(`
    query getProfileStatusesOptions($where: ProfileStatusesBoolExp) {
  profileStatuses(where: $where) {
    label: name
    value: id
    description: definition
  }
}
    `) as unknown as TypedDocumentString<GetProfileStatusesOptionsQuery, GetProfileStatusesOptionsQueryVariables>;
export const GetProfileTypeOptionsDocument = new TypedDocumentString(`
    query getProfileTypeOptions($where: ProfileTypesBoolExp) {
  profileTypes(where: $where) {
    label: name
    value: id
    description: definition
  }
}
    `) as unknown as TypedDocumentString<GetProfileTypeOptionsQuery, GetProfileTypeOptionsQueryVariables>;
export const GetSupportsProductsOptionsDocument = new TypedDocumentString(`
    query getSupportsProductsOptions($where: SupportsProductsBoolExp) {
  supportsProducts(where: $where) {
    supportsProduct {
      name
      id
      description
    }
  }
}
    `) as unknown as TypedDocumentString<GetSupportsProductsOptionsQuery, GetSupportsProductsOptionsQueryVariables>;
export const GetTagsOptionsDocument = new TypedDocumentString(`
    query getTagsOptions($where: TagsBoolExp, $aggregateInput: ProfileTagsFilterInput) {
  tags(where: $where) {
    value: id
    label: name
    description
    profileTagsAggregate(filter_input: $aggregateInput) {
      _count
    }
  }
}
    `) as unknown as TypedDocumentString<GetTagsOptionsQuery, GetTagsOptionsQueryVariables>;