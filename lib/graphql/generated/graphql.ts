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
  Float64: { input: number; output: number; }
  Int8: { input: number; output: number; }
  Int64: { input: number; output: number; }
  String1: { input: string; output: string; }
};

export type AssetDeployments = {
  __typename?: 'AssetDeployments';
  asset?: Maybe<Assets>;
  assetId: Scalars['String1']['output'];
  deploymentId: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  smartContractDeployment?: Maybe<SmartContractDeployments>;
};

export type AssetDeploymentsAggExp = {
  __typename?: 'AssetDeploymentsAggExp';
  _count: Scalars['Int']['output'];
  assetId: StringAggExp;
  deploymentId: StringAggExp;
  id: StringAggExp;
};

export type AssetDeploymentsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetDeploymentsOrderBy>>;
  where?: InputMaybe<AssetDeploymentsBoolExp>;
};

export type AssetDeploymentsOrderBy = {
  asset?: InputMaybe<AssetsOrderBy>;
  assetId?: InputMaybe<OrderBy>;
  deploymentId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  smartContractDeployment?: InputMaybe<SmartContractDeploymentsOrderBy>;
};

export type AssetStandards = {
  __typename?: 'AssetStandards';
  definition: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  smartContractDeployments?: Maybe<Array<SmartContractDeployments>>;
  smartContractDeploymentsAggregate: SmartContractDeploymentsAggExp;
};


export type AssetStandardsSmartContractDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SmartContractDeploymentsOrderBy>>;
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
};

export type AssetStandardsBoolExp = {
  _and?: InputMaybe<Array<AssetStandardsBoolExp>>;
  _not?: InputMaybe<AssetStandardsBoolExp>;
  _or?: InputMaybe<Array<AssetStandardsBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  smartContractDeployments?: InputMaybe<SmartContractDeploymentsBoolExp>;
};

export type AssetStandardsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetStandardsOrderBy>>;
  where?: InputMaybe<AssetStandardsBoolExp>;
};

export type AssetStandardsOrderBy = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

export type AssetStatuses = {
  __typename?: 'AssetStatuses';
  assets?: Maybe<Array<Assets>>;
  assetsAggregate: AssetsAggExp;
  definition: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
};


export type AssetStatusesAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetsOrderBy>>;
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
};

export type AssetStatusesBoolExp = {
  _and?: InputMaybe<Array<AssetStatusesBoolExp>>;
  _not?: InputMaybe<AssetStatusesBoolExp>;
  _or?: InputMaybe<Array<AssetStatusesBoolExp>>;
  assets?: InputMaybe<AssetsBoolExp>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
};

export type AssetStatusesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetStatusesOrderBy>>;
  where?: InputMaybe<AssetStatusesBoolExp>;
};

export type AssetStatusesOrderBy = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

export type AssetSupportTypes = {
  __typename?: 'AssetSupportTypes';
  definition: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  productAssetRelationships?: Maybe<Array<ProductAssetRelationships>>;
  productAssetRelationshipsAggregate: ProductAssetRelationshipsAggExp;
};


export type AssetSupportTypesProductAssetRelationshipsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductAssetRelationshipsOrderBy>>;
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
};

export type AssetSupportTypesBoolExp = {
  _and?: InputMaybe<Array<AssetSupportTypesBoolExp>>;
  _not?: InputMaybe<AssetSupportTypesBoolExp>;
  _or?: InputMaybe<Array<AssetSupportTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  productAssetRelationships?: InputMaybe<ProductAssetRelationshipsBoolExp>;
};

export type AssetSupportTypesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetSupportTypesOrderBy>>;
  where?: InputMaybe<AssetSupportTypesBoolExp>;
};

export type AssetSupportTypesOrderBy = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

export type AssetTypes = {
  __typename?: 'AssetTypes';
  assets?: Maybe<Array<Assets>>;
  assetsAggregate: AssetsAggExp;
  definition: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
};


export type AssetTypesAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetsOrderBy>>;
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
};

export type AssetTypesBoolExp = {
  _and?: InputMaybe<Array<AssetTypesBoolExp>>;
  _not?: InputMaybe<AssetTypesBoolExp>;
  _or?: InputMaybe<Array<AssetTypesBoolExp>>;
  assets?: InputMaybe<AssetsBoolExp>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
};

export type AssetTypesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetTypesOrderBy>>;
  where?: InputMaybe<AssetTypesBoolExp>;
};

export type AssetTypesOrderBy = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

export type AssetUrls = {
  __typename?: 'AssetUrls';
  id?: Maybe<Scalars['String1']['output']>;
  rowId?: Maybe<Scalars['String1']['output']>;
  tableId?: Maybe<Scalars['String1']['output']>;
  url?: Maybe<Scalars['String1']['output']>;
  urlType?: Maybe<UrlTypes>;
  urlTypeId?: Maybe<Scalars['String1']['output']>;
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
  urlType?: InputMaybe<UrlTypesOrderBy>;
  urlTypeId?: InputMaybe<OrderBy>;
};

export type Assets = {
  __typename?: 'Assets';
  assetDeployments?: Maybe<Array<AssetDeployments>>;
  assetDeploymentsAggregate: AssetDeploymentsAggExp;
  assetStatus?: Maybe<AssetStatuses>;
  assetStatusId?: Maybe<Scalars['String1']['output']>;
  assetType?: Maybe<AssetTypes>;
  assetTypeId?: Maybe<Scalars['String1']['output']>;
  derivativeAssets?: Maybe<Array<DerivativeAssets>>;
  derivativeAssetsAggregate: DerivativeAssetsAggExp;
  derivativeAssetsByBaseAssetId?: Maybe<Array<DerivativeAssets>>;
  derivativeAssetsByBaseAssetIdAggregate: DerivativeAssetsAggExp;
  description: Scalars['String1']['output'];
  icon: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  productAssetRelationships?: Maybe<Array<ProductAssetRelationships>>;
  productAssetRelationshipsAggregate: ProductAssetRelationshipsAggExp;
  root?: Maybe<Roots>;
  rootId: Scalars['String1']['output'];
  ticker: Scalars['String1']['output'];
  urls?: Maybe<Array<AssetUrls>>;
};


export type AssetsAssetDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetDeploymentsOrderBy>>;
  where?: InputMaybe<AssetDeploymentsBoolExp>;
};


export type AssetsAssetDeploymentsAggregateArgs = {
  filter_input?: InputMaybe<AssetDeploymentsFilterInput>;
};


export type AssetsDerivativeAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DerivativeAssetsOrderBy>>;
  where?: InputMaybe<DerivativeAssetsBoolExp>;
};


export type AssetsDerivativeAssetsAggregateArgs = {
  filter_input?: InputMaybe<DerivativeAssetsFilterInput>;
};


export type AssetsDerivativeAssetsByBaseAssetIdArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DerivativeAssetsOrderBy>>;
  where?: InputMaybe<DerivativeAssetsBoolExp>;
};


export type AssetsDerivativeAssetsByBaseAssetIdAggregateArgs = {
  filter_input?: InputMaybe<DerivativeAssetsFilterInput>;
};


export type AssetsProductAssetRelationshipsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductAssetRelationshipsOrderBy>>;
  where?: InputMaybe<ProductAssetRelationshipsBoolExp>;
};


export type AssetsProductAssetRelationshipsAggregateArgs = {
  filter_input?: InputMaybe<ProductAssetRelationshipsFilterInput>;
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
  ticker?: InputMaybe<StringBoolExp>;
};

export type AssetsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetsOrderBy>>;
  where?: InputMaybe<AssetsBoolExp>;
};

export type AssetsOrderBy = {
  assetStatus?: InputMaybe<AssetStatusesOrderBy>;
  assetStatusId?: InputMaybe<OrderBy>;
  assetType?: InputMaybe<AssetTypesOrderBy>;
  assetTypeId?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  icon?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  root?: InputMaybe<RootsOrderBy>;
  rootId?: InputMaybe<OrderBy>;
  ticker?: InputMaybe<OrderBy>;
};

export type CoreTableNames = {
  __typename?: 'CoreTableNames';
  id: Scalars['String1']['output'];
  tableName: Scalars['String1']['output'];
  urls?: Maybe<Array<Urls>>;
  urlsAggregate: UrlsAggExp;
};


export type CoreTableNamesUrlsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UrlsOrderBy>>;
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
  id?: InputMaybe<StringBoolExp>;
  tableName?: InputMaybe<StringBoolExp>;
  urls?: InputMaybe<UrlsBoolExp>;
};

export type CoreTableNamesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CoreTableNamesOrderBy>>;
  where?: InputMaybe<CoreTableNamesBoolExp>;
};

export type CoreTableNamesOrderBy = {
  id?: InputMaybe<OrderBy>;
  tableName?: InputMaybe<OrderBy>;
};

export type Countries = {
  __typename?: 'Countries';
  code: Scalars['String1']['output'];
  entities?: Maybe<Array<Entities>>;
  entitiesAggregate: EntitiesAggExp;
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
};


export type CountriesEntitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<EntitiesOrderBy>>;
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
  order_by?: InputMaybe<Array<CountriesOrderBy>>;
  where?: InputMaybe<CountriesBoolExp>;
};

export type CountriesOrderBy = {
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
  _eq?: InputMaybe<Scalars['Date']['input']>;
  _gt?: InputMaybe<Scalars['Date']['input']>;
  _gte?: InputMaybe<Scalars['Date']['input']>;
  _in?: InputMaybe<Array<Scalars['Date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Date']['input']>;
  _lte?: InputMaybe<Scalars['Date']['input']>;
};

export type DeploymentTypes = {
  __typename?: 'DeploymentTypes';
  definition: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  smartContractDeployments?: Maybe<Array<SmartContractDeployments>>;
  smartContractDeploymentsAggregate: SmartContractDeploymentsAggExp;
};


export type DeploymentTypesSmartContractDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SmartContractDeploymentsOrderBy>>;
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
};

export type DeploymentTypesBoolExp = {
  _and?: InputMaybe<Array<DeploymentTypesBoolExp>>;
  _not?: InputMaybe<DeploymentTypesBoolExp>;
  _or?: InputMaybe<Array<DeploymentTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  smartContractDeployments?: InputMaybe<SmartContractDeploymentsBoolExp>;
};

export type DeploymentTypesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeploymentTypesOrderBy>>;
  where?: InputMaybe<DeploymentTypesBoolExp>;
};

export type DeploymentTypesOrderBy = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

export type DerivativeAssets = {
  __typename?: 'DerivativeAssets';
  asset?: Maybe<Assets>;
  assetByBaseAssetId?: Maybe<Assets>;
  baseAssetId: Scalars['String1']['output'];
  derivativeAssetId: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
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
  assetByBaseAssetId?: InputMaybe<AssetsBoolExp>;
  baseAssetId?: InputMaybe<StringBoolExp>;
  derivativeAssetId?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
};

export type DerivativeAssetsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DerivativeAssetsOrderBy>>;
  where?: InputMaybe<DerivativeAssetsBoolExp>;
};

export type DerivativeAssetsOrderBy = {
  asset?: InputMaybe<AssetsOrderBy>;
  assetByBaseAssetId?: InputMaybe<AssetsOrderBy>;
  baseAssetId?: InputMaybe<OrderBy>;
  derivativeAssetId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

export type Entities = {
  __typename?: 'Entities';
  address: Scalars['String1']['output'];
  country?: Maybe<Countries>;
  countryId?: Maybe<Scalars['String1']['output']>;
  dateOfIncorporation?: Maybe<Scalars['Date']['output']>;
  entityType?: Maybe<EntityTypes>;
  entityTypeId?: Maybe<Scalars['String1']['output']>;
  id: Scalars['String1']['output'];
  leiNumber: Scalars['String1']['output'];
  localRegistrationNumber: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  root?: Maybe<Roots>;
  rootId: Scalars['String1']['output'];
  taxIdentificationNumber: Scalars['String1']['output'];
  tradeName: Scalars['String1']['output'];
  urls?: Maybe<Array<EntityUrls>>;
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
  taxIdentificationNumber?: InputMaybe<StringBoolExp>;
  tradeName?: InputMaybe<StringBoolExp>;
};

export type EntitiesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<EntitiesOrderBy>>;
  where?: InputMaybe<EntitiesBoolExp>;
};

export type EntitiesOrderBy = {
  address?: InputMaybe<OrderBy>;
  country?: InputMaybe<CountriesOrderBy>;
  countryId?: InputMaybe<OrderBy>;
  dateOfIncorporation?: InputMaybe<OrderBy>;
  entityType?: InputMaybe<EntityTypesOrderBy>;
  entityTypeId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  leiNumber?: InputMaybe<OrderBy>;
  localRegistrationNumber?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  root?: InputMaybe<RootsOrderBy>;
  rootId?: InputMaybe<OrderBy>;
  taxIdentificationNumber?: InputMaybe<OrderBy>;
  tradeName?: InputMaybe<OrderBy>;
};

export type EntityTypes = {
  __typename?: 'EntityTypes';
  definition: Scalars['String1']['output'];
  entities?: Maybe<Array<Entities>>;
  entitiesAggregate: EntitiesAggExp;
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
};


export type EntityTypesEntitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<EntitiesOrderBy>>;
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
};

export type EntityTypesBoolExp = {
  _and?: InputMaybe<Array<EntityTypesBoolExp>>;
  _not?: InputMaybe<EntityTypesBoolExp>;
  _or?: InputMaybe<Array<EntityTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  entities?: InputMaybe<EntitiesBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
};

export type EntityTypesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<EntityTypesOrderBy>>;
  where?: InputMaybe<EntityTypesBoolExp>;
};

export type EntityTypesOrderBy = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

export type EntityUrls = {
  __typename?: 'EntityUrls';
  id?: Maybe<Scalars['String1']['output']>;
  rowId?: Maybe<Scalars['String1']['output']>;
  tableId?: Maybe<Scalars['String1']['output']>;
  url?: Maybe<Scalars['String1']['output']>;
  urlType?: Maybe<UrlTypes>;
  urlTypeId?: Maybe<Scalars['String1']['output']>;
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
  urlType?: InputMaybe<UrlTypesOrderBy>;
  urlTypeId?: InputMaybe<OrderBy>;
};

export type Int8AggExp = {
  __typename?: 'Int8AggExp';
  _count: Scalars['Int']['output'];
  _count_distinct: Scalars['Int']['output'];
  avg: Scalars['Float64']['output'];
  count: Scalars['Int64']['output'];
  max: Scalars['Int8']['output'];
  min: Scalars['Int8']['output'];
  sum: Scalars['Int64']['output'];
};

export type Int8BoolExp = {
  _eq?: InputMaybe<Scalars['Int8']['input']>;
  _gt?: InputMaybe<Scalars['Int8']['input']>;
  _gte?: InputMaybe<Scalars['Int8']['input']>;
  _in?: InputMaybe<Array<Scalars['Int8']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int8']['input']>;
  _lte?: InputMaybe<Scalars['Int8']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _no_fields_accessible?: Maybe<Scalars['String']['output']>;
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
  assetId: Scalars['String1']['output'];
  assetSupportType?: Maybe<AssetSupportTypes>;
  id: Scalars['String1']['output'];
  product?: Maybe<Products>;
  productId: Scalars['String1']['output'];
  typeOfSupportId?: Maybe<Scalars['String1']['output']>;
};

export type ProductAssetRelationshipsAggExp = {
  __typename?: 'ProductAssetRelationshipsAggExp';
  _count: Scalars['Int']['output'];
  assetId: StringAggExp;
  id: StringAggExp;
  productId: StringAggExp;
  typeOfSupportId: StringAggExp;
};

export type ProductAssetRelationshipsBoolExp = {
  _and?: InputMaybe<Array<ProductAssetRelationshipsBoolExp>>;
  _not?: InputMaybe<ProductAssetRelationshipsBoolExp>;
  _or?: InputMaybe<Array<ProductAssetRelationshipsBoolExp>>;
  asset?: InputMaybe<AssetsBoolExp>;
  assetId?: InputMaybe<StringBoolExp>;
  assetSupportType?: InputMaybe<AssetSupportTypesBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  product?: InputMaybe<ProductsBoolExp>;
  productId?: InputMaybe<StringBoolExp>;
  typeOfSupportId?: InputMaybe<StringBoolExp>;
};

export type ProductAssetRelationshipsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductAssetRelationshipsOrderBy>>;
  where?: InputMaybe<ProductAssetRelationshipsBoolExp>;
};

export type ProductAssetRelationshipsOrderBy = {
  asset?: InputMaybe<AssetsOrderBy>;
  assetId?: InputMaybe<OrderBy>;
  assetSupportType?: InputMaybe<AssetSupportTypesOrderBy>;
  id?: InputMaybe<OrderBy>;
  product?: InputMaybe<ProductsOrderBy>;
  productId?: InputMaybe<OrderBy>;
  typeOfSupportId?: InputMaybe<OrderBy>;
};

export type ProductDeployments = {
  __typename?: 'ProductDeployments';
  deploymentId: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  product?: Maybe<Products>;
  productId: Scalars['String1']['output'];
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
  order_by?: InputMaybe<Array<ProductDeploymentsOrderBy>>;
  where?: InputMaybe<ProductDeploymentsBoolExp>;
};

export type ProductDeploymentsOrderBy = {
  deploymentId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  product?: InputMaybe<ProductsOrderBy>;
  productId?: InputMaybe<OrderBy>;
  smartContractDeployment?: InputMaybe<SmartContractDeploymentsOrderBy>;
};

export type ProductStatuses = {
  __typename?: 'ProductStatuses';
  definition: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  products?: Maybe<Array<Products>>;
  productsAggregate: ProductsAggExp;
};


export type ProductStatusesProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductsOrderBy>>;
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
};

export type ProductStatusesBoolExp = {
  _and?: InputMaybe<Array<ProductStatusesBoolExp>>;
  _not?: InputMaybe<ProductStatusesBoolExp>;
  _or?: InputMaybe<Array<ProductStatusesBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  products?: InputMaybe<ProductsBoolExp>;
};

export type ProductStatusesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductStatusesOrderBy>>;
  where?: InputMaybe<ProductStatusesBoolExp>;
};

export type ProductStatusesOrderBy = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

export type ProductTypes = {
  __typename?: 'ProductTypes';
  definition: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  products?: Maybe<Array<Products>>;
  productsAggregate: ProductsAggExp;
};


export type ProductTypesProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductsOrderBy>>;
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
};

export type ProductTypesBoolExp = {
  _and?: InputMaybe<Array<ProductTypesBoolExp>>;
  _not?: InputMaybe<ProductTypesBoolExp>;
  _or?: InputMaybe<Array<ProductTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  products?: InputMaybe<ProductsBoolExp>;
};

export type ProductTypesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductTypesOrderBy>>;
  where?: InputMaybe<ProductTypesBoolExp>;
};

export type ProductTypesOrderBy = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

export type ProductUrls = {
  __typename?: 'ProductUrls';
  id?: Maybe<Scalars['String1']['output']>;
  rowId?: Maybe<Scalars['String1']['output']>;
  tableId?: Maybe<Scalars['String1']['output']>;
  url?: Maybe<Scalars['String1']['output']>;
  urlType?: Maybe<UrlTypes>;
  urlTypeId?: Maybe<Scalars['String1']['output']>;
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
  urlType?: InputMaybe<UrlTypesOrderBy>;
  urlTypeId?: InputMaybe<OrderBy>;
};

export type Products = {
  __typename?: 'Products';
  description: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  isMainProduct: Scalars['Int8']['output'];
  launchDate?: Maybe<Scalars['Date']['output']>;
  name: Scalars['String1']['output'];
  productAssetRelationships?: Maybe<Array<ProductAssetRelationships>>;
  productAssetRelationshipsAggregate: ProductAssetRelationshipsAggExp;
  productDeployments?: Maybe<Array<ProductDeployments>>;
  productDeploymentsAggregate: ProductDeploymentsAggExp;
  productStatus?: Maybe<ProductStatuses>;
  productStatusId?: Maybe<Scalars['String1']['output']>;
  productType?: Maybe<ProductTypes>;
  productTypeId?: Maybe<Scalars['String1']['output']>;
  root?: Maybe<Roots>;
  rootId: Scalars['String1']['output'];
  supportsProducts?: Maybe<Array<SupportsProducts>>;
  supportsProductsAggregate: SupportsProductsAggExp;
  supportsProductsBySupportsProductId?: Maybe<Array<SupportsProducts>>;
  supportsProductsBySupportsProductIdAggregate: SupportsProductsAggExp;
  urls?: Maybe<Array<ProductUrls>>;
};


export type ProductsProductAssetRelationshipsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductAssetRelationshipsOrderBy>>;
  where?: InputMaybe<ProductAssetRelationshipsBoolExp>;
};


export type ProductsProductAssetRelationshipsAggregateArgs = {
  filter_input?: InputMaybe<ProductAssetRelationshipsFilterInput>;
};


export type ProductsProductDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductDeploymentsOrderBy>>;
  where?: InputMaybe<ProductDeploymentsBoolExp>;
};


export type ProductsProductDeploymentsAggregateArgs = {
  filter_input?: InputMaybe<ProductDeploymentsFilterInput>;
};


export type ProductsSupportsProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SupportsProductsOrderBy>>;
  where?: InputMaybe<SupportsProductsBoolExp>;
};


export type ProductsSupportsProductsAggregateArgs = {
  filter_input?: InputMaybe<SupportsProductsFilterInput>;
};


export type ProductsSupportsProductsBySupportsProductIdArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SupportsProductsOrderBy>>;
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
  supportsProducts?: InputMaybe<SupportsProductsBoolExp>;
  supportsProductsBySupportsProductId?: InputMaybe<SupportsProductsBoolExp>;
};

export type ProductsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductsOrderBy>>;
  where?: InputMaybe<ProductsBoolExp>;
};

export type ProductsOrderBy = {
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isMainProduct?: InputMaybe<OrderBy>;
  launchDate?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  productStatus?: InputMaybe<ProductStatusesOrderBy>;
  productStatusId?: InputMaybe<OrderBy>;
  productType?: InputMaybe<ProductTypesOrderBy>;
  productTypeId?: InputMaybe<OrderBy>;
  root?: InputMaybe<RootsOrderBy>;
  rootId?: InputMaybe<OrderBy>;
};

export type ProfileInfoUrls = {
  __typename?: 'ProfileInfoUrls';
  id?: Maybe<Scalars['String1']['output']>;
  rowId?: Maybe<Scalars['String1']['output']>;
  tableId?: Maybe<Scalars['String1']['output']>;
  url?: Maybe<Scalars['String1']['output']>;
  urlType?: Maybe<UrlTypes>;
  urlTypeId?: Maybe<Scalars['String1']['output']>;
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
  urlType?: InputMaybe<UrlTypesOrderBy>;
  urlTypeId?: InputMaybe<OrderBy>;
};

export type ProfileInfos = {
  __typename?: 'ProfileInfos';
  descriptionLong: Scalars['String1']['output'];
  descriptionShort: Scalars['String1']['output'];
  foundingDate?: Maybe<Scalars['Date']['output']>;
  icon: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  logo: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  profileSector?: Maybe<ProfileSectors>;
  profileSectorId?: Maybe<Scalars['String1']['output']>;
  profileStatus?: Maybe<ProfileStatuses>;
  profileStatusId?: Maybe<Scalars['String1']['output']>;
  profileType?: Maybe<ProfileTypes>;
  profileTypeId?: Maybe<Scalars['String1']['output']>;
  root?: Maybe<Roots>;
  rootId: Scalars['String1']['output'];
  /** Self promotion field */
  tagLine: Scalars['String1']['output'];
  urls?: Maybe<Array<ProfileInfoUrls>>;
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
  order_by?: InputMaybe<Array<ProfileInfosOrderBy>>;
  where?: InputMaybe<ProfileInfosBoolExp>;
};

export type ProfileInfosOrderBy = {
  descriptionLong?: InputMaybe<OrderBy>;
  descriptionShort?: InputMaybe<OrderBy>;
  foundingDate?: InputMaybe<OrderBy>;
  icon?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  logo?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  profileSector?: InputMaybe<ProfileSectorsOrderBy>;
  profileSectorId?: InputMaybe<OrderBy>;
  profileStatus?: InputMaybe<ProfileStatusesOrderBy>;
  profileStatusId?: InputMaybe<OrderBy>;
  profileType?: InputMaybe<ProfileTypesOrderBy>;
  profileTypeId?: InputMaybe<OrderBy>;
  root?: InputMaybe<RootsOrderBy>;
  rootId?: InputMaybe<OrderBy>;
  tagLine?: InputMaybe<OrderBy>;
};

export type ProfileSectors = {
  __typename?: 'ProfileSectors';
  definition: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  profileInfos?: Maybe<Array<ProfileInfos>>;
  profileInfosAggregate: ProfileInfosAggExp;
};


export type ProfileSectorsProfileInfosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileInfosOrderBy>>;
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
};

export type ProfileSectorsBoolExp = {
  _and?: InputMaybe<Array<ProfileSectorsBoolExp>>;
  _not?: InputMaybe<ProfileSectorsBoolExp>;
  _or?: InputMaybe<Array<ProfileSectorsBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  profileInfos?: InputMaybe<ProfileInfosBoolExp>;
};

export type ProfileSectorsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileSectorsOrderBy>>;
  where?: InputMaybe<ProfileSectorsBoolExp>;
};

export type ProfileSectorsOrderBy = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

export type ProfileStatuses = {
  __typename?: 'ProfileStatuses';
  definition: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  profileInfos?: Maybe<Array<ProfileInfos>>;
  profileInfosAggregate: ProfileInfosAggExp;
};


export type ProfileStatusesProfileInfosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileInfosOrderBy>>;
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
};

export type ProfileStatusesBoolExp = {
  _and?: InputMaybe<Array<ProfileStatusesBoolExp>>;
  _not?: InputMaybe<ProfileStatusesBoolExp>;
  _or?: InputMaybe<Array<ProfileStatusesBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  profileInfos?: InputMaybe<ProfileInfosBoolExp>;
};

export type ProfileStatusesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileStatusesOrderBy>>;
  where?: InputMaybe<ProfileStatusesBoolExp>;
};

export type ProfileStatusesOrderBy = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/**   */
export type ProfileTags = {
  __typename?: 'ProfileTags';
  id: Scalars['String1']['output'];
  root?: Maybe<Roots>;
  rootId: Scalars['String1']['output'];
  tag?: Maybe<Tags>;
  tagId: Scalars['String1']['output'];
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
  order_by?: InputMaybe<Array<ProfileTagsOrderBy>>;
  where?: InputMaybe<ProfileTagsBoolExp>;
};

export type ProfileTagsOrderBy = {
  id?: InputMaybe<OrderBy>;
  root?: InputMaybe<RootsOrderBy>;
  rootId?: InputMaybe<OrderBy>;
  tag?: InputMaybe<TagsOrderBy>;
  tagId?: InputMaybe<OrderBy>;
};

export type ProfileTypes = {
  __typename?: 'ProfileTypes';
  definition: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  profileInfos?: Maybe<Array<ProfileInfos>>;
  profileInfosAggregate: ProfileInfosAggExp;
};


export type ProfileTypesProfileInfosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileInfosOrderBy>>;
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
};

export type ProfileTypesBoolExp = {
  _and?: InputMaybe<Array<ProfileTypesBoolExp>>;
  _not?: InputMaybe<ProfileTypesBoolExp>;
  _or?: InputMaybe<Array<ProfileTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  profileInfos?: InputMaybe<ProfileInfosBoolExp>;
};

export type ProfileTypesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileTypesOrderBy>>;
  where?: InputMaybe<ProfileTypesBoolExp>;
};

export type ProfileTypesOrderBy = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

export type Query = {
  __typename?: 'Query';
  assetDeployments?: Maybe<Array<AssetDeployments>>;
  assetDeploymentsAggregate?: Maybe<AssetDeploymentsAggExp>;
  assetStandards?: Maybe<Array<AssetStandards>>;
  assetStandardsAggregate?: Maybe<AssetStandardsAggExp>;
  assetStatuses?: Maybe<Array<AssetStatuses>>;
  assetStatusesAggregate?: Maybe<AssetStatusesAggExp>;
  assetSupportTypes?: Maybe<Array<AssetSupportTypes>>;
  assetSupportTypesAggregate?: Maybe<AssetSupportTypesAggExp>;
  assetTypes?: Maybe<Array<AssetTypes>>;
  assetTypesAggregate?: Maybe<AssetTypesAggExp>;
  assets?: Maybe<Array<Assets>>;
  assetsAggregate?: Maybe<AssetsAggExp>;
  coreTableNames?: Maybe<Array<CoreTableNames>>;
  coreTableNamesAggregate?: Maybe<CoreTableNamesAggExp>;
  countries?: Maybe<Array<Countries>>;
  countriesAggregate?: Maybe<CountriesAggExp>;
  deploymentTypes?: Maybe<Array<DeploymentTypes>>;
  deploymentTypesAggregate?: Maybe<DeploymentTypesAggExp>;
  derivativeAssets?: Maybe<Array<DerivativeAssets>>;
  derivativeAssetsAggregate?: Maybe<DerivativeAssetsAggExp>;
  entities?: Maybe<Array<Entities>>;
  entitiesAggregate?: Maybe<EntitiesAggExp>;
  entityTypes?: Maybe<Array<EntityTypes>>;
  entityTypesAggregate?: Maybe<EntityTypesAggExp>;
  productAssetRelationships?: Maybe<Array<ProductAssetRelationships>>;
  productAssetRelationshipsAggregate?: Maybe<ProductAssetRelationshipsAggExp>;
  productDeployments?: Maybe<Array<ProductDeployments>>;
  productDeploymentsAggregate?: Maybe<ProductDeploymentsAggExp>;
  productStatuses?: Maybe<Array<ProductStatuses>>;
  productStatusesAggregate?: Maybe<ProductStatusesAggExp>;
  productTypes?: Maybe<Array<ProductTypes>>;
  productTypesAggregate?: Maybe<ProductTypesAggExp>;
  products?: Maybe<Array<Products>>;
  productsAggregate?: Maybe<ProductsAggExp>;
  profileInfos?: Maybe<Array<ProfileInfos>>;
  profileInfosAggregate?: Maybe<ProfileInfosAggExp>;
  profileInfosById?: Maybe<ProfileInfos>;
  profileSectors?: Maybe<Array<ProfileSectors>>;
  profileSectorsAggregate?: Maybe<ProfileSectorsAggExp>;
  profileStatuses?: Maybe<Array<ProfileStatuses>>;
  profileStatusesAggregate?: Maybe<ProfileStatusesAggExp>;
  /** Selects multiple objects from the model. Model description:   */
  profileTags?: Maybe<Array<ProfileTags>>;
  profileTagsAggregate?: Maybe<ProfileTagsAggExp>;
  profileTypes?: Maybe<Array<ProfileTypes>>;
  profileTypesAggregate?: Maybe<ProfileTypesAggExp>;
  roots?: Maybe<Array<Roots>>;
  rootsAggregate?: Maybe<RootsAggExp>;
  smartContractDeployments?: Maybe<Array<SmartContractDeployments>>;
  smartContractDeploymentsAggregate?: Maybe<SmartContractDeploymentsAggExp>;
  smartContracts?: Maybe<Array<SmartContracts>>;
  smartContractsAggregate?: Maybe<SmartContractsAggExp>;
  socialTypes?: Maybe<Array<SocialTypes>>;
  socialTypesAggregate?: Maybe<SocialTypesAggExp>;
  socials?: Maybe<Array<Socials>>;
  socialsAggregate?: Maybe<SocialsAggExp>;
  /** Selects multiple objects from the model. Model description: Table mapping product support relationships */
  supportsProducts?: Maybe<Array<SupportsProducts>>;
  supportsProductsAggregate?: Maybe<SupportsProductsAggExp>;
  tagTypes?: Maybe<Array<TagTypes>>;
  tagTypesAggregate?: Maybe<TagTypesAggExp>;
  tags?: Maybe<Array<Tags>>;
  tagsAggregate?: Maybe<TagsAggExp>;
  urlTypes?: Maybe<Array<UrlTypes>>;
  urlTypesAggregate?: Maybe<UrlTypesAggExp>;
  urlTypesById?: Maybe<UrlTypes>;
  urls?: Maybe<Array<Urls>>;
  urlsAggregate?: Maybe<UrlsAggExp>;
  urlsById?: Maybe<Urls>;
};


export type QueryAssetDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetDeploymentsOrderBy>>;
  where?: InputMaybe<AssetDeploymentsBoolExp>;
};


export type QueryAssetDeploymentsAggregateArgs = {
  filter_input?: InputMaybe<AssetDeploymentsFilterInput>;
};


export type QueryAssetStandardsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetStandardsOrderBy>>;
  where?: InputMaybe<AssetStandardsBoolExp>;
};


export type QueryAssetStandardsAggregateArgs = {
  filter_input?: InputMaybe<AssetStandardsFilterInput>;
};


export type QueryAssetStatusesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetStatusesOrderBy>>;
  where?: InputMaybe<AssetStatusesBoolExp>;
};


export type QueryAssetStatusesAggregateArgs = {
  filter_input?: InputMaybe<AssetStatusesFilterInput>;
};


export type QueryAssetSupportTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetSupportTypesOrderBy>>;
  where?: InputMaybe<AssetSupportTypesBoolExp>;
};


export type QueryAssetSupportTypesAggregateArgs = {
  filter_input?: InputMaybe<AssetSupportTypesFilterInput>;
};


export type QueryAssetTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetTypesOrderBy>>;
  where?: InputMaybe<AssetTypesBoolExp>;
};


export type QueryAssetTypesAggregateArgs = {
  filter_input?: InputMaybe<AssetTypesFilterInput>;
};


export type QueryAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetsOrderBy>>;
  where?: InputMaybe<AssetsBoolExp>;
};


export type QueryAssetsAggregateArgs = {
  filter_input?: InputMaybe<AssetsFilterInput>;
};


export type QueryCoreTableNamesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CoreTableNamesOrderBy>>;
  where?: InputMaybe<CoreTableNamesBoolExp>;
};


export type QueryCoreTableNamesAggregateArgs = {
  filter_input?: InputMaybe<CoreTableNamesFilterInput>;
};


export type QueryCountriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CountriesOrderBy>>;
  where?: InputMaybe<CountriesBoolExp>;
};


export type QueryCountriesAggregateArgs = {
  filter_input?: InputMaybe<CountriesFilterInput>;
};


export type QueryDeploymentTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeploymentTypesOrderBy>>;
  where?: InputMaybe<DeploymentTypesBoolExp>;
};


export type QueryDeploymentTypesAggregateArgs = {
  filter_input?: InputMaybe<DeploymentTypesFilterInput>;
};


export type QueryDerivativeAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DerivativeAssetsOrderBy>>;
  where?: InputMaybe<DerivativeAssetsBoolExp>;
};


export type QueryDerivativeAssetsAggregateArgs = {
  filter_input?: InputMaybe<DerivativeAssetsFilterInput>;
};


export type QueryEntitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<EntitiesOrderBy>>;
  where?: InputMaybe<EntitiesBoolExp>;
};


export type QueryEntitiesAggregateArgs = {
  filter_input?: InputMaybe<EntitiesFilterInput>;
};


export type QueryEntityTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<EntityTypesOrderBy>>;
  where?: InputMaybe<EntityTypesBoolExp>;
};


export type QueryEntityTypesAggregateArgs = {
  filter_input?: InputMaybe<EntityTypesFilterInput>;
};


export type QueryProductAssetRelationshipsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductAssetRelationshipsOrderBy>>;
  where?: InputMaybe<ProductAssetRelationshipsBoolExp>;
};


export type QueryProductAssetRelationshipsAggregateArgs = {
  filter_input?: InputMaybe<ProductAssetRelationshipsFilterInput>;
};


export type QueryProductDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductDeploymentsOrderBy>>;
  where?: InputMaybe<ProductDeploymentsBoolExp>;
};


export type QueryProductDeploymentsAggregateArgs = {
  filter_input?: InputMaybe<ProductDeploymentsFilterInput>;
};


export type QueryProductStatusesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductStatusesOrderBy>>;
  where?: InputMaybe<ProductStatusesBoolExp>;
};


export type QueryProductStatusesAggregateArgs = {
  filter_input?: InputMaybe<ProductStatusesFilterInput>;
};


export type QueryProductTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductTypesOrderBy>>;
  where?: InputMaybe<ProductTypesBoolExp>;
};


export type QueryProductTypesAggregateArgs = {
  filter_input?: InputMaybe<ProductTypesFilterInput>;
};


export type QueryProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductsOrderBy>>;
  where?: InputMaybe<ProductsBoolExp>;
};


export type QueryProductsAggregateArgs = {
  filter_input?: InputMaybe<ProductsFilterInput>;
};


export type QueryProfileInfosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileInfosOrderBy>>;
  where?: InputMaybe<ProfileInfosBoolExp>;
};


export type QueryProfileInfosAggregateArgs = {
  filter_input?: InputMaybe<ProfileInfosFilterInput>;
};


export type QueryProfileInfosByIdArgs = {
  id: Scalars['String1']['input'];
};


export type QueryProfileSectorsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileSectorsOrderBy>>;
  where?: InputMaybe<ProfileSectorsBoolExp>;
};


export type QueryProfileSectorsAggregateArgs = {
  filter_input?: InputMaybe<ProfileSectorsFilterInput>;
};


export type QueryProfileStatusesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileStatusesOrderBy>>;
  where?: InputMaybe<ProfileStatusesBoolExp>;
};


export type QueryProfileStatusesAggregateArgs = {
  filter_input?: InputMaybe<ProfileStatusesFilterInput>;
};


export type QueryProfileTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileTagsOrderBy>>;
  where?: InputMaybe<ProfileTagsBoolExp>;
};


export type QueryProfileTagsAggregateArgs = {
  filter_input?: InputMaybe<ProfileTagsFilterInput>;
};


export type QueryProfileTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileTypesOrderBy>>;
  where?: InputMaybe<ProfileTypesBoolExp>;
};


export type QueryProfileTypesAggregateArgs = {
  filter_input?: InputMaybe<ProfileTypesFilterInput>;
};


export type QueryRootsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<RootsOrderBy>>;
  where?: InputMaybe<RootsBoolExp>;
};


export type QueryRootsAggregateArgs = {
  filter_input?: InputMaybe<RootsFilterInput>;
};


export type QuerySmartContractDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SmartContractDeploymentsOrderBy>>;
  where?: InputMaybe<SmartContractDeploymentsBoolExp>;
};


export type QuerySmartContractDeploymentsAggregateArgs = {
  filter_input?: InputMaybe<SmartContractDeploymentsFilterInput>;
};


export type QuerySmartContractsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SmartContractsOrderBy>>;
  where?: InputMaybe<SmartContractsBoolExp>;
};


export type QuerySmartContractsAggregateArgs = {
  filter_input?: InputMaybe<SmartContractsFilterInput>;
};


export type QuerySocialTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SocialTypesOrderBy>>;
  where?: InputMaybe<SocialTypesBoolExp>;
};


export type QuerySocialTypesAggregateArgs = {
  filter_input?: InputMaybe<SocialTypesFilterInput>;
};


export type QuerySocialsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SocialsOrderBy>>;
  where?: InputMaybe<SocialsBoolExp>;
};


export type QuerySocialsAggregateArgs = {
  filter_input?: InputMaybe<SocialsFilterInput>;
};


export type QuerySupportsProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SupportsProductsOrderBy>>;
  where?: InputMaybe<SupportsProductsBoolExp>;
};


export type QuerySupportsProductsAggregateArgs = {
  filter_input?: InputMaybe<SupportsProductsFilterInput>;
};


export type QueryTagTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TagTypesOrderBy>>;
  where?: InputMaybe<TagTypesBoolExp>;
};


export type QueryTagTypesAggregateArgs = {
  filter_input?: InputMaybe<TagTypesFilterInput>;
};


export type QueryTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TagsOrderBy>>;
  where?: InputMaybe<TagsBoolExp>;
};


export type QueryTagsAggregateArgs = {
  filter_input?: InputMaybe<TagsFilterInput>;
};


export type QueryUrlTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UrlTypesOrderBy>>;
  where?: InputMaybe<UrlTypesBoolExp>;
};


export type QueryUrlTypesAggregateArgs = {
  filter_input?: InputMaybe<UrlTypesFilterInput>;
};


export type QueryUrlTypesByIdArgs = {
  id: Scalars['String1']['input'];
};


export type QueryUrlsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UrlsOrderBy>>;
  where?: InputMaybe<UrlsBoolExp>;
};


export type QueryUrlsAggregateArgs = {
  filter_input?: InputMaybe<UrlsFilterInput>;
};


export type QueryUrlsByIdArgs = {
  id: Scalars['String1']['input'];
};

export type Roots = {
  __typename?: 'Roots';
  assets?: Maybe<Array<Assets>>;
  assetsAggregate: AssetsAggExp;
  entities?: Maybe<Array<Entities>>;
  entitiesAggregate: EntitiesAggExp;
  id: Scalars['String1']['output'];
  products?: Maybe<Array<Products>>;
  productsAggregate: ProductsAggExp;
  profileInfos?: Maybe<Array<ProfileInfos>>;
  profileInfosAggregate: ProfileInfosAggExp;
  profileTags?: Maybe<Array<ProfileTags>>;
  profileTagsAggregate: ProfileTagsAggExp;
  slug: Scalars['String1']['output'];
  socials?: Maybe<Array<Socials>>;
  socialsAggregate: SocialsAggExp;
  urlMain: Scalars['String1']['output'];
};


export type RootsAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetsOrderBy>>;
  where?: InputMaybe<AssetsBoolExp>;
};


export type RootsAssetsAggregateArgs = {
  filter_input?: InputMaybe<AssetsFilterInput>;
};


export type RootsEntitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<EntitiesOrderBy>>;
  where?: InputMaybe<EntitiesBoolExp>;
};


export type RootsEntitiesAggregateArgs = {
  filter_input?: InputMaybe<EntitiesFilterInput>;
};


export type RootsProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductsOrderBy>>;
  where?: InputMaybe<ProductsBoolExp>;
};


export type RootsProductsAggregateArgs = {
  filter_input?: InputMaybe<ProductsFilterInput>;
};


export type RootsProfileInfosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileInfosOrderBy>>;
  where?: InputMaybe<ProfileInfosBoolExp>;
};


export type RootsProfileInfosAggregateArgs = {
  filter_input?: InputMaybe<ProfileInfosFilterInput>;
};


export type RootsProfileTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileTagsOrderBy>>;
  where?: InputMaybe<ProfileTagsBoolExp>;
};


export type RootsProfileTagsAggregateArgs = {
  filter_input?: InputMaybe<ProfileTagsFilterInput>;
};


export type RootsSocialsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SocialsOrderBy>>;
  where?: InputMaybe<SocialsBoolExp>;
};


export type RootsSocialsAggregateArgs = {
  filter_input?: InputMaybe<SocialsFilterInput>;
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
  entities?: InputMaybe<EntitiesBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  products?: InputMaybe<ProductsBoolExp>;
  profileInfos?: InputMaybe<ProfileInfosBoolExp>;
  profileTags?: InputMaybe<ProfileTagsBoolExp>;
  slug?: InputMaybe<StringBoolExp>;
  socials?: InputMaybe<SocialsBoolExp>;
  urlMain?: InputMaybe<StringBoolExp>;
};

export type RootsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<RootsOrderBy>>;
  where?: InputMaybe<RootsBoolExp>;
};

export type RootsOrderBy = {
  id?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
  urlMain?: InputMaybe<OrderBy>;
};

export type SmartContractDeployments = {
  __typename?: 'SmartContractDeployments';
  assetDeployments?: Maybe<Array<AssetDeployments>>;
  assetDeploymentsAggregate: AssetDeploymentsAggExp;
  assetStandard?: Maybe<AssetStandards>;
  deployedOnId?: Maybe<Scalars['String1']['output']>;
  deployedOnProduct?: Maybe<Products>;
  deploymentType?: Maybe<DeploymentTypes>;
  deploymentTypeId?: Maybe<Scalars['String1']['output']>;
  id: Scalars['String1']['output'];
  isOfStandardId?: Maybe<Scalars['String1']['output']>;
  productDeployments?: Maybe<Array<ProductDeployments>>;
  productDeploymentsAggregate: ProductDeploymentsAggExp;
  smartContracts?: Maybe<Array<SmartContracts>>;
  smartContractsAggregate: SmartContractsAggExp;
};


export type SmartContractDeploymentsAssetDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetDeploymentsOrderBy>>;
  where?: InputMaybe<AssetDeploymentsBoolExp>;
};


export type SmartContractDeploymentsAssetDeploymentsAggregateArgs = {
  filter_input?: InputMaybe<AssetDeploymentsFilterInput>;
};


export type SmartContractDeploymentsProductDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductDeploymentsOrderBy>>;
  where?: InputMaybe<ProductDeploymentsBoolExp>;
};


export type SmartContractDeploymentsProductDeploymentsAggregateArgs = {
  filter_input?: InputMaybe<ProductDeploymentsFilterInput>;
};


export type SmartContractDeploymentsSmartContractsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SmartContractsOrderBy>>;
  where?: InputMaybe<SmartContractsBoolExp>;
};


export type SmartContractDeploymentsSmartContractsAggregateArgs = {
  filter_input?: InputMaybe<SmartContractsFilterInput>;
};

export type SmartContractDeploymentsAggExp = {
  __typename?: 'SmartContractDeploymentsAggExp';
  _count: Scalars['Int']['output'];
  deployedOnId: StringAggExp;
  deploymentTypeId: StringAggExp;
  id: StringAggExp;
  isOfStandardId: StringAggExp;
};

export type SmartContractDeploymentsBoolExp = {
  _and?: InputMaybe<Array<SmartContractDeploymentsBoolExp>>;
  _not?: InputMaybe<SmartContractDeploymentsBoolExp>;
  _or?: InputMaybe<Array<SmartContractDeploymentsBoolExp>>;
  assetDeployments?: InputMaybe<AssetDeploymentsBoolExp>;
  assetStandard?: InputMaybe<AssetStandardsBoolExp>;
  deployedOnId?: InputMaybe<StringBoolExp>;
  deployedOnProduct?: InputMaybe<ProductsBoolExp>;
  deploymentType?: InputMaybe<DeploymentTypesBoolExp>;
  deploymentTypeId?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  isOfStandardId?: InputMaybe<StringBoolExp>;
  productDeployments?: InputMaybe<ProductDeploymentsBoolExp>;
  smartContracts?: InputMaybe<SmartContractsBoolExp>;
};

export type SmartContractDeploymentsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SmartContractDeploymentsOrderBy>>;
  where?: InputMaybe<SmartContractDeploymentsBoolExp>;
};

export type SmartContractDeploymentsOrderBy = {
  assetStandard?: InputMaybe<AssetStandardsOrderBy>;
  deployedOnId?: InputMaybe<OrderBy>;
  deployedOnProduct?: InputMaybe<ProductsOrderBy>;
  deploymentType?: InputMaybe<DeploymentTypesOrderBy>;
  deploymentTypeId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isOfStandardId?: InputMaybe<OrderBy>;
};

export type SmartContracts = {
  __typename?: 'SmartContracts';
  address: Scalars['String1']['output'];
  deploymentDate?: Maybe<Scalars['Date']['output']>;
  deploymentId?: Maybe<Scalars['String1']['output']>;
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
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
  order_by?: InputMaybe<Array<SmartContractsOrderBy>>;
  where?: InputMaybe<SmartContractsBoolExp>;
};

export type SmartContractsOrderBy = {
  address?: InputMaybe<OrderBy>;
  deploymentDate?: InputMaybe<OrderBy>;
  deploymentId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  smartContractDeployment?: InputMaybe<SmartContractDeploymentsOrderBy>;
};

export type SocialTypes = {
  __typename?: 'SocialTypes';
  definition: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  socials?: Maybe<Array<Socials>>;
  socialsAggregate: SocialsAggExp;
};


export type SocialTypesSocialsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SocialsOrderBy>>;
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
};

export type SocialTypesBoolExp = {
  _and?: InputMaybe<Array<SocialTypesBoolExp>>;
  _not?: InputMaybe<SocialTypesBoolExp>;
  _or?: InputMaybe<Array<SocialTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  socials?: InputMaybe<SocialsBoolExp>;
};

export type SocialTypesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SocialTypesOrderBy>>;
  where?: InputMaybe<SocialTypesBoolExp>;
};

export type SocialTypesOrderBy = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

export type SocialUrls = {
  __typename?: 'SocialUrls';
  id?: Maybe<Scalars['String1']['output']>;
  rowId?: Maybe<Scalars['String1']['output']>;
  tableId?: Maybe<Scalars['String1']['output']>;
  url?: Maybe<Scalars['String1']['output']>;
  urlType?: Maybe<UrlTypes>;
  urlTypeId?: Maybe<Scalars['String1']['output']>;
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
  urlType?: InputMaybe<UrlTypesOrderBy>;
  urlTypeId?: InputMaybe<OrderBy>;
};

export type Socials = {
  __typename?: 'Socials';
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  root?: Maybe<Roots>;
  rootId: Scalars['String1']['output'];
  socialType?: Maybe<SocialTypes>;
  socialTypeId?: Maybe<Scalars['String1']['output']>;
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
  socialTypeId: StringAggExp;
};

export type SocialsBoolExp = {
  _and?: InputMaybe<Array<SocialsBoolExp>>;
  _not?: InputMaybe<SocialsBoolExp>;
  _or?: InputMaybe<Array<SocialsBoolExp>>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  root?: InputMaybe<RootsBoolExp>;
  rootId?: InputMaybe<StringBoolExp>;
  socialType?: InputMaybe<SocialTypesBoolExp>;
  socialTypeId?: InputMaybe<StringBoolExp>;
};

export type SocialsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SocialsOrderBy>>;
  where?: InputMaybe<SocialsBoolExp>;
};

export type SocialsOrderBy = {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  root?: InputMaybe<RootsOrderBy>;
  rootId?: InputMaybe<OrderBy>;
  socialType?: InputMaybe<SocialTypesOrderBy>;
  socialTypeId?: InputMaybe<OrderBy>;
};

export type StringAggExp = {
  __typename?: 'StringAggExp';
  _count: Scalars['Int']['output'];
  _count_distinct: Scalars['Int']['output'];
  max: Scalars['String1']['output'];
  min: Scalars['String1']['output'];
};

export type StringBoolExp = {
  _contains?: InputMaybe<Scalars['String1']['input']>;
  _eq?: InputMaybe<Scalars['String1']['input']>;
  _in?: InputMaybe<Array<Scalars['String1']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _like?: InputMaybe<Scalars['String1']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  _no_fields_accessible?: Maybe<Scalars['String']['output']>;
};

/** Table mapping product support relationships */
export type SupportsProducts = {
  __typename?: 'SupportsProducts';
  id: Scalars['String1']['output'];
  product?: Maybe<Products>;
  productId: Scalars['String1']['output'];
  supportsProduct?: Maybe<Products>;
  supportsProductId: Scalars['String1']['output'];
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
  order_by?: InputMaybe<Array<SupportsProductsOrderBy>>;
  where?: InputMaybe<SupportsProductsBoolExp>;
};

export type SupportsProductsOrderBy = {
  id?: InputMaybe<OrderBy>;
  product?: InputMaybe<ProductsOrderBy>;
  productId?: InputMaybe<OrderBy>;
  supportsProduct?: InputMaybe<ProductsOrderBy>;
  supportsProductId?: InputMaybe<OrderBy>;
};

export type TagTypes = {
  __typename?: 'TagTypes';
  definition: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  tags?: Maybe<Array<Tags>>;
  tagsAggregate: TagsAggExp;
};


export type TagTypesTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TagsOrderBy>>;
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
};

export type TagTypesBoolExp = {
  _and?: InputMaybe<Array<TagTypesBoolExp>>;
  _not?: InputMaybe<TagTypesBoolExp>;
  _or?: InputMaybe<Array<TagTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  tags?: InputMaybe<TagsBoolExp>;
};

export type TagTypesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TagTypesOrderBy>>;
  where?: InputMaybe<TagTypesBoolExp>;
};

export type TagTypesOrderBy = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

export type Tags = {
  __typename?: 'Tags';
  description: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  profileTags?: Maybe<Array<ProfileTags>>;
  profileTagsAggregate: ProfileTagsAggExp;
  tagType?: Maybe<TagTypes>;
  tagTypeId?: Maybe<Scalars['String1']['output']>;
};


export type TagsProfileTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileTagsOrderBy>>;
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
  name: StringAggExp;
  tagTypeId: StringAggExp;
};

export type TagsBoolExp = {
  _and?: InputMaybe<Array<TagsBoolExp>>;
  _not?: InputMaybe<TagsBoolExp>;
  _or?: InputMaybe<Array<TagsBoolExp>>;
  description?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  profileTags?: InputMaybe<ProfileTagsBoolExp>;
  tagType?: InputMaybe<TagTypesBoolExp>;
  tagTypeId?: InputMaybe<StringBoolExp>;
};

export type TagsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TagsOrderBy>>;
  where?: InputMaybe<TagsBoolExp>;
};

export type TagsOrderBy = {
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  tagType?: InputMaybe<TagTypesOrderBy>;
  tagTypeId?: InputMaybe<OrderBy>;
};

export type UrlTypes = {
  __typename?: 'UrlTypes';
  definition: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  urls?: Maybe<Array<Urls>>;
  urlsAggregate: UrlsAggExp;
};


export type UrlTypesUrlsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UrlsOrderBy>>;
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
};

export type UrlTypesBoolExp = {
  _and?: InputMaybe<Array<UrlTypesBoolExp>>;
  _not?: InputMaybe<UrlTypesBoolExp>;
  _or?: InputMaybe<Array<UrlTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  urls?: InputMaybe<UrlsBoolExp>;
};

export type UrlTypesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UrlTypesOrderBy>>;
  where?: InputMaybe<UrlTypesBoolExp>;
};

export type UrlTypesOrderBy = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

export type Urls = {
  __typename?: 'Urls';
  coreTableName?: Maybe<CoreTableNames>;
  id: Scalars['String1']['output'];
  rowId: Scalars['String1']['output'];
  tableId: Scalars['String1']['output'];
  url: Scalars['String1']['output'];
  urlType?: Maybe<UrlTypes>;
  urlTypeId?: Maybe<Scalars['String1']['output']>;
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
  order_by?: InputMaybe<Array<UrlsOrderBy>>;
  where?: InputMaybe<UrlsBoolExp>;
};

export type UrlsOrderBy = {
  coreTableName?: InputMaybe<CoreTableNamesOrderBy>;
  id?: InputMaybe<OrderBy>;
  rowId?: InputMaybe<OrderBy>;
  tableId?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
  urlType?: InputMaybe<UrlTypesOrderBy>;
  urlTypeId?: InputMaybe<OrderBy>;
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

export type AssetFieldsFragmentFragment = { __typename?: 'Assets', ticker: string, rootId: string, name: string, id: string, icon: string, description: string, assetTypeId?: string | null, assetStatusId?: string | null, assetType?: { __typename?: 'AssetTypes', definition: string, id: string, name: string } | null, assetStatus?: { __typename?: 'AssetStatuses', name: string, id: string, definition: string } | null, assetDeployments?: Array<{ __typename?: 'AssetDeployments', id: string, deploymentId: string, assetId: string, smartContractDeployment?: { __typename?: 'SmartContractDeployments', id: string, deployedOnProduct?: { __typename?: 'Products', id: string, name: string, root?: { __typename?: 'Roots', slug: string } | null } | null, assetStandard?: { __typename?: 'AssetStandards', id: string } | null, smartContracts?: Array<{ __typename?: 'SmartContracts', name: string, id: string, deploymentId?: string | null, deploymentDate?: string | null, address: string }> | null, deploymentType?: { __typename?: 'DeploymentTypes', name: string, id: string, definition: string } | null } | null }> | null, urls?: Array<{ __typename?: 'AssetUrls', url?: string | null, urlType?: { __typename?: 'UrlTypes', name: string, id: string, definition: string } | null }> | null } & { ' $fragmentName'?: 'AssetFieldsFragmentFragment' };

export type EntityFieldsFragmentFragment = { __typename?: 'Entities', name: string, tradeName: string, taxIdentificationNumber: string, localRegistrationNumber: string, leiNumber: string, id: string, dateOfIncorporation?: string | null, address: string, entityType?: { __typename?: 'EntityTypes', name: string, id: string, definition: string } | null, country?: { __typename?: 'Countries', name: string, id: string, code: string } | null, urls?: Array<{ __typename?: 'EntityUrls', url?: string | null, urlType?: { __typename?: 'UrlTypes', name: string, id: string, definition: string } | null }> | null } & { ' $fragmentName'?: 'EntityFieldsFragmentFragment' };

export type ProfileFragmentFragment = { __typename?: 'ProfileInfos', profileSector?: { __typename?: 'ProfileSectors', name: string } | null, profileType?: { __typename?: 'ProfileTypes', name: string } | null, root?: { __typename?: 'Roots', assets?: Array<{ __typename?: 'Assets', ticker: string }> | null, profileTags?: Array<{ __typename?: 'ProfileTags', tag?: { __typename?: 'Tags', name: string, id: string } | null }> | null } | null, profileStatus?: { __typename?: 'ProfileStatuses', name: string, id: string } | null, mainProduct?: { __typename?: 'Roots', products?: Array<{ __typename?: 'Products', productType?: { __typename?: 'ProductTypes', name: string } | null }> | null } | null } & { ' $fragmentName'?: 'ProfileFragmentFragment' };

export type ProductFieldsFragmentFragment = { __typename?: 'Products', rootId: string, productTypeId?: string | null, productStatusId?: string | null, name: string, launchDate?: string | null, isMainProduct: number, id: string, description: string, productType?: { __typename?: 'ProductTypes', name: string, id: string, definition: string } | null, productStatus?: { __typename?: 'ProductStatuses', name: string, id: string, definition: string } | null, productDeployments?: Array<{ __typename?: 'ProductDeployments', smartContractDeployment?: { __typename?: 'SmartContractDeployments', isOfStandardId?: string | null, id: string, deployedOnProduct?: { __typename?: 'Products', id: string, name: string, root?: { __typename?: 'Roots', slug: string } | null } | null, assetStandard?: { __typename?: 'AssetStandards', id: string } | null, deploymentType?: { __typename?: 'DeploymentTypes', name: string } | null, smartContracts?: Array<{ __typename?: 'SmartContracts', name: string, id: string, deploymentDate?: string | null, address: string, deploymentId?: string | null }> | null } | null }> | null, supportsProducts?: Array<{ __typename?: 'SupportsProducts', supportsProduct?: { __typename?: 'Products', name: string, id: string, root?: { __typename?: 'Roots', slug: string } | null } | null }> | null, supportedBy?: Array<{ __typename?: 'SupportsProducts', product?: { __typename?: 'Products', name: string, id: string, root?: { __typename?: 'Roots', slug: string } | null } | null }> | null, urls?: Array<{ __typename?: 'ProductUrls', url?: string | null, urlType?: { __typename?: 'UrlTypes', name: string, id: string, definition: string } | null }> | null, productAssetRelationships?: Array<{ __typename?: 'ProductAssetRelationships', assetId: string, asset?: { __typename?: 'Assets', name: string, id: string, assetType?: { __typename?: 'AssetTypes', name: string } | null, root?: { __typename?: 'Roots', slug: string } | null } | null, assetSupportType?: { __typename?: 'AssetSupportTypes', name: string } | null, product?: { __typename?: 'Products', name: string, id: string, description: string } | null }> | null } & { ' $fragmentName'?: 'ProductFieldsFragmentFragment' };

export type ProfileHeadingFragmentFragment = { __typename?: 'ProfileInfos', logo: string, name: string, urls?: Array<{ __typename?: 'ProfileInfoUrls', url?: string | null, urlType?: { __typename?: 'UrlTypes', name: string } | null }> | null, root?: { __typename?: 'Roots', socials?: Array<{ __typename?: 'Socials', name: string, socialType?: { __typename?: 'SocialTypes', name: string } | null, urls?: Array<{ __typename?: 'SocialUrls', url?: string | null }> | null }> | null } | null } & { ' $fragmentName'?: 'ProfileHeadingFragmentFragment' };

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

export type ProfileCardFragmentFragment = { __typename?: 'ProfileInfos', name: string, logo: string, id: string, tagLine: string, descriptionShort: string, profileTypeId?: string | null, profileStatusId?: string | null, profileSectorId?: string | null, foundingDate?: string | null, profileSector?: { __typename?: 'ProfileSectors', name: string, id: string, definition: string } | null, profileStatus?: { __typename?: 'ProfileStatuses', name: string, id: string, definition: string } | null, profileType?: { __typename?: 'ProfileTypes', name: string, id: string, definition: string } | null, urls?: Array<{ __typename?: 'ProfileInfoUrls', url?: string | null, urlType?: { __typename?: 'UrlTypes', name: string, id: string, definition: string } | null }> | null, mainProduct?: { __typename?: 'Roots', products?: Array<{ __typename?: 'Products', name: string, productType?: { __typename?: 'ProductTypes', name: string } | null }> | null } | null, root?: { __typename?: 'Roots', urlMain: string, slug: string, assets?: Array<(
      { __typename?: 'Assets', ticker: string, name: string, id: string }
      & { ' $fragmentRefs'?: { 'AssetFieldsFragmentFragment': AssetFieldsFragmentFragment } }
    )> | null, socials?: Array<{ __typename?: 'Socials', name: string, socialType?: { __typename?: 'SocialTypes', name: string } | null, urls?: Array<{ __typename?: 'SocialUrls', url?: string | null }> | null }> | null, profileTags?: Array<{ __typename?: 'ProfileTags', tag?: { __typename?: 'Tags', name: string, id: string } | null }> | null, products?: Array<(
      { __typename?: 'Products', id: string, name: string }
      & { ' $fragmentRefs'?: { 'ProductFieldsFragmentFragment': ProductFieldsFragmentFragment } }
    )> | null } | null } & { ' $fragmentName'?: 'ProfileCardFragmentFragment' };

export type SearchProfilesQueryVariables = Exact<{
  order_by?: InputMaybe<Array<ProfileInfosOrderBy> | ProfileInfosOrderBy>;
  where?: InputMaybe<ProfileInfosBoolExp>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type SearchProfilesQuery = { __typename?: 'Query', profileInfos?: Array<(
    { __typename?: 'ProfileInfos' }
    & { ' $fragmentRefs'?: { 'ProfileCardFragmentFragment': ProfileCardFragmentFragment } }
  )> | null };

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
      isOfStandardId
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
      isOfStandardId
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
      isOfStandardId
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
    query SearchProfiles($order_by: [ProfileInfosOrderBy!], $where: ProfileInfosBoolExp, $limit: Int, $offset: Int) {
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
      isOfStandardId
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