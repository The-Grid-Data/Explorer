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

export type AssetUrls = {
  __typename?: 'AssetUrls';
  id?: Maybe<Scalars['String1']['output']>;
  rowId?: Maybe<Scalars['String1']['output']>;
  tableId?: Maybe<Scalars['String1']['output']>;
  url?: Maybe<Scalars['String1']['output']>;
  urlType?: Maybe<CUrlTypes>;
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
  urlType?: InputMaybe<CUrlTypesBoolExp>;
  urlTypeId?: InputMaybe<StringBoolExp>;
};

export type AssetUrlsOrderBy = {
  id?: InputMaybe<OrderBy>;
  rowId?: InputMaybe<OrderBy>;
  tableId?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
  urlType?: InputMaybe<CUrlTypesOrderBy>;
  urlTypeId?: InputMaybe<OrderBy>;
};

export type CAssetDeployments = {
  __typename?: 'CAssetDeployments';
  asset?: Maybe<CAssets>;
  assetId: Scalars['String1']['output'];
  deploymentId: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  smartContractDeployment?: Maybe<CSmartContractDeployments>;
};

export type CAssetDeploymentsAggExp = {
  __typename?: 'CAssetDeploymentsAggExp';
  _count: Scalars['Int']['output'];
  assetId: StringAggExp;
  deploymentId: StringAggExp;
  id: StringAggExp;
};

export type CAssetDeploymentsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CAssetDeploymentsOrderBy>>;
  where?: InputMaybe<AssetDeploymentsBoolExp>;
};

export type CAssetDeploymentsOrderBy = {
  asset?: InputMaybe<CAssetsOrderBy>;
  assetId?: InputMaybe<OrderBy>;
  deploymentId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  smartContractDeployment?: InputMaybe<CSmartContractDeploymentsOrderBy>;
};

export type CAssetStandards = {
  __typename?: 'CAssetStandards';
  definition: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  smartContractDeployments?: Maybe<Array<CSmartContractDeployments>>;
  smartContractDeploymentsAggregate: CSmartContractDeploymentsAggExp;
};


export type CAssetStandardsSmartContractDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CSmartContractDeploymentsOrderBy>>;
  where?: InputMaybe<CSmartContractDeploymentsBoolExp>;
};


export type CAssetStandardsSmartContractDeploymentsAggregateArgs = {
  filter_input?: InputMaybe<CSmartContractDeploymentsFilterInput>;
};

export type CAssetStandardsAggExp = {
  __typename?: 'CAssetStandardsAggExp';
  _count: Scalars['Int']['output'];
  definition: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
};

export type CAssetStandardsBoolExp = {
  _and?: InputMaybe<Array<CAssetStandardsBoolExp>>;
  _not?: InputMaybe<CAssetStandardsBoolExp>;
  _or?: InputMaybe<Array<CAssetStandardsBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  smartContractDeployments?: InputMaybe<CSmartContractDeploymentsBoolExp>;
};

export type CAssetStandardsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CAssetStandardsOrderBy>>;
  where?: InputMaybe<CAssetStandardsBoolExp>;
};

export type CAssetStandardsOrderBy = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

export type CAssetStatuses = {
  __typename?: 'CAssetStatuses';
  assets?: Maybe<Array<CAssets>>;
  assetsAggregate: CAssetsAggExp;
  definition: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
};


export type CAssetStatusesAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CAssetsOrderBy>>;
  where?: InputMaybe<CAssetsBoolExp>;
};


export type CAssetStatusesAssetsAggregateArgs = {
  filter_input?: InputMaybe<CAssetsFilterInput>;
};

export type CAssetStatusesAggExp = {
  __typename?: 'CAssetStatusesAggExp';
  _count: Scalars['Int']['output'];
  definition: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
};

export type CAssetStatusesBoolExp = {
  _and?: InputMaybe<Array<CAssetStatusesBoolExp>>;
  _not?: InputMaybe<CAssetStatusesBoolExp>;
  _or?: InputMaybe<Array<CAssetStatusesBoolExp>>;
  assets?: InputMaybe<CAssetsBoolExp>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
};

export type CAssetStatusesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CAssetStatusesOrderBy>>;
  where?: InputMaybe<CAssetStatusesBoolExp>;
};

export type CAssetStatusesOrderBy = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

export type CAssetSupportTypes = {
  __typename?: 'CAssetSupportTypes';
  definition: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  productAssetRelationships?: Maybe<Array<CProductAssetRelationships>>;
  productAssetRelationshipsAggregate: CProductAssetRelationshipsAggExp;
};


export type CAssetSupportTypesProductAssetRelationshipsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProductAssetRelationshipsOrderBy>>;
  where?: InputMaybe<CProductAssetRelationshipsBoolExp>;
};


export type CAssetSupportTypesProductAssetRelationshipsAggregateArgs = {
  filter_input?: InputMaybe<CProductAssetRelationshipsFilterInput>;
};

export type CAssetSupportTypesAggExp = {
  __typename?: 'CAssetSupportTypesAggExp';
  _count: Scalars['Int']['output'];
  definition: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
};

export type CAssetSupportTypesBoolExp = {
  _and?: InputMaybe<Array<CAssetSupportTypesBoolExp>>;
  _not?: InputMaybe<CAssetSupportTypesBoolExp>;
  _or?: InputMaybe<Array<CAssetSupportTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  productAssetRelationships?: InputMaybe<CProductAssetRelationshipsBoolExp>;
};

export type CAssetSupportTypesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CAssetSupportTypesOrderBy>>;
  where?: InputMaybe<CAssetSupportTypesBoolExp>;
};

export type CAssetSupportTypesOrderBy = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

export type CAssetTypes = {
  __typename?: 'CAssetTypes';
  assets?: Maybe<Array<CAssets>>;
  assetsAggregate: CAssetsAggExp;
  definition: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
};


export type CAssetTypesAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CAssetsOrderBy>>;
  where?: InputMaybe<CAssetsBoolExp>;
};


export type CAssetTypesAssetsAggregateArgs = {
  filter_input?: InputMaybe<CAssetsFilterInput>;
};

export type CAssetTypesAggExp = {
  __typename?: 'CAssetTypesAggExp';
  _count: Scalars['Int']['output'];
  definition: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
};

export type CAssetTypesBoolExp = {
  _and?: InputMaybe<Array<CAssetTypesBoolExp>>;
  _not?: InputMaybe<CAssetTypesBoolExp>;
  _or?: InputMaybe<Array<CAssetTypesBoolExp>>;
  assets?: InputMaybe<CAssetsBoolExp>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
};

export type CAssetTypesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CAssetTypesOrderBy>>;
  where?: InputMaybe<CAssetTypesBoolExp>;
};

export type CAssetTypesOrderBy = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

export type CAssets = {
  __typename?: 'CAssets';
  assetDeployments?: Maybe<Array<CAssetDeployments>>;
  assetDeploymentsAggregate: CAssetDeploymentsAggExp;
  assetStatus?: Maybe<CAssetStatuses>;
  assetStatusId?: Maybe<Scalars['String1']['output']>;
  assetType?: Maybe<CAssetTypes>;
  assetTypeId?: Maybe<Scalars['String1']['output']>;
  derivativeAssets?: Maybe<Array<CDerivativeAssets>>;
  derivativeAssetsAggregate: CDerivativeAssetsAggExp;
  derivativeAssetsByBaseAssetId?: Maybe<Array<CDerivativeAssets>>;
  derivativeAssetsByBaseAssetIdAggregate: CDerivativeAssetsAggExp;
  description: Scalars['String1']['output'];
  icon: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  productAssetRelationships?: Maybe<Array<CProductAssetRelationships>>;
  productAssetRelationshipsAggregate: CProductAssetRelationshipsAggExp;
  root?: Maybe<CRoots>;
  rootId: Scalars['String1']['output'];
  ticker: Scalars['String1']['output'];
  urls?: Maybe<Array<AssetUrls>>;
};


export type CAssetsAssetDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CAssetDeploymentsOrderBy>>;
  where?: InputMaybe<AssetDeploymentsBoolExp>;
};


export type CAssetsAssetDeploymentsAggregateArgs = {
  filter_input?: InputMaybe<CAssetDeploymentsFilterInput>;
};


export type CAssetsDerivativeAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CDerivativeAssetsOrderBy>>;
  where?: InputMaybe<CDerivativeAssetsBoolExp>;
};


export type CAssetsDerivativeAssetsAggregateArgs = {
  filter_input?: InputMaybe<CDerivativeAssetsFilterInput>;
};


export type CAssetsDerivativeAssetsByBaseAssetIdArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CDerivativeAssetsOrderBy>>;
  where?: InputMaybe<CDerivativeAssetsBoolExp>;
};


export type CAssetsDerivativeAssetsByBaseAssetIdAggregateArgs = {
  filter_input?: InputMaybe<CDerivativeAssetsFilterInput>;
};


export type CAssetsProductAssetRelationshipsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProductAssetRelationshipsOrderBy>>;
  where?: InputMaybe<CProductAssetRelationshipsBoolExp>;
};


export type CAssetsProductAssetRelationshipsAggregateArgs = {
  filter_input?: InputMaybe<CProductAssetRelationshipsFilterInput>;
};


export type CAssetsUrlsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetUrlsOrderBy>>;
  where?: InputMaybe<AssetUrlsBoolExp>;
};

export type CAssetsAggExp = {
  __typename?: 'CAssetsAggExp';
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

export type CAssetsBoolExp = {
  _and?: InputMaybe<Array<CAssetsBoolExp>>;
  _not?: InputMaybe<CAssetsBoolExp>;
  _or?: InputMaybe<Array<CAssetsBoolExp>>;
  assetDeployments?: InputMaybe<AssetDeploymentsBoolExp>;
  assetStatus?: InputMaybe<CAssetStatusesBoolExp>;
  assetStatusId?: InputMaybe<StringBoolExp>;
  assetType?: InputMaybe<CAssetTypesBoolExp>;
  assetTypeId?: InputMaybe<StringBoolExp>;
  derivativeAssets?: InputMaybe<CDerivativeAssetsBoolExp>;
  derivativeAssetsByBaseAssetId?: InputMaybe<CDerivativeAssetsBoolExp>;
  description?: InputMaybe<StringBoolExp>;
  icon?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  productAssetRelationships?: InputMaybe<CProductAssetRelationshipsBoolExp>;
  root?: InputMaybe<CRootsBoolExp>;
  rootId?: InputMaybe<StringBoolExp>;
  ticker?: InputMaybe<StringBoolExp>;
};

export type CAssetsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CAssetsOrderBy>>;
  where?: InputMaybe<CAssetsBoolExp>;
};

export type CAssetsOrderBy = {
  assetStatus?: InputMaybe<CAssetStatusesOrderBy>;
  assetStatusId?: InputMaybe<OrderBy>;
  assetType?: InputMaybe<CAssetTypesOrderBy>;
  assetTypeId?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  icon?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  root?: InputMaybe<CRootsOrderBy>;
  rootId?: InputMaybe<OrderBy>;
  ticker?: InputMaybe<OrderBy>;
};

export type CCoreTableNames = {
  __typename?: 'CCoreTableNames';
  id: Scalars['String1']['output'];
  tableName: Scalars['String1']['output'];
  urls?: Maybe<Array<CUrls>>;
  urlsAggregate: CUrlsAggExp;
};


export type CCoreTableNamesUrlsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CUrlsOrderBy>>;
  where?: InputMaybe<CUrlsBoolExp>;
};


export type CCoreTableNamesUrlsAggregateArgs = {
  filter_input?: InputMaybe<CUrlsFilterInput>;
};

export type CCoreTableNamesAggExp = {
  __typename?: 'CCoreTableNamesAggExp';
  _count: Scalars['Int']['output'];
  id: StringAggExp;
  tableName: StringAggExp;
};

export type CCoreTableNamesBoolExp = {
  _and?: InputMaybe<Array<CCoreTableNamesBoolExp>>;
  _not?: InputMaybe<CCoreTableNamesBoolExp>;
  _or?: InputMaybe<Array<CCoreTableNamesBoolExp>>;
  id?: InputMaybe<StringBoolExp>;
  tableName?: InputMaybe<StringBoolExp>;
  urls?: InputMaybe<CUrlsBoolExp>;
};

export type CCoreTableNamesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CCoreTableNamesOrderBy>>;
  where?: InputMaybe<CCoreTableNamesBoolExp>;
};

export type CCoreTableNamesOrderBy = {
  id?: InputMaybe<OrderBy>;
  tableName?: InputMaybe<OrderBy>;
};

export type CCountries = {
  __typename?: 'CCountries';
  code: Scalars['String1']['output'];
  entities?: Maybe<Array<CEntities>>;
  entitiesAggregate: CEntitiesAggExp;
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
};


export type CCountriesEntitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CEntitiesOrderBy>>;
  where?: InputMaybe<CEntitiesBoolExp>;
};


export type CCountriesEntitiesAggregateArgs = {
  filter_input?: InputMaybe<CEntitiesFilterInput>;
};

export type CCountriesAggExp = {
  __typename?: 'CCountriesAggExp';
  _count: Scalars['Int']['output'];
  code: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
};

export type CCountriesBoolExp = {
  _and?: InputMaybe<Array<CCountriesBoolExp>>;
  _not?: InputMaybe<CCountriesBoolExp>;
  _or?: InputMaybe<Array<CCountriesBoolExp>>;
  code?: InputMaybe<StringBoolExp>;
  entities?: InputMaybe<CEntitiesBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
};

export type CCountriesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CCountriesOrderBy>>;
  where?: InputMaybe<CCountriesBoolExp>;
};

export type CCountriesOrderBy = {
  code?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

export type CDeploymentTypes = {
  __typename?: 'CDeploymentTypes';
  definition: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  smartContractDeployments?: Maybe<Array<CSmartContractDeployments>>;
  smartContractDeploymentsAggregate: CSmartContractDeploymentsAggExp;
};


export type CDeploymentTypesSmartContractDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CSmartContractDeploymentsOrderBy>>;
  where?: InputMaybe<CSmartContractDeploymentsBoolExp>;
};


export type CDeploymentTypesSmartContractDeploymentsAggregateArgs = {
  filter_input?: InputMaybe<CSmartContractDeploymentsFilterInput>;
};

export type CDeploymentTypesAggExp = {
  __typename?: 'CDeploymentTypesAggExp';
  _count: Scalars['Int']['output'];
  definition: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
};

export type CDeploymentTypesBoolExp = {
  _and?: InputMaybe<Array<CDeploymentTypesBoolExp>>;
  _not?: InputMaybe<CDeploymentTypesBoolExp>;
  _or?: InputMaybe<Array<CDeploymentTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  smartContractDeployments?: InputMaybe<CSmartContractDeploymentsBoolExp>;
};

export type CDeploymentTypesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CDeploymentTypesOrderBy>>;
  where?: InputMaybe<CDeploymentTypesBoolExp>;
};

export type CDeploymentTypesOrderBy = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

export type CDerivativeAssets = {
  __typename?: 'CDerivativeAssets';
  asset?: Maybe<CAssets>;
  assetByBaseAssetId?: Maybe<CAssets>;
  baseAssetId: Scalars['String1']['output'];
  derivativeAssetId: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
};

export type CDerivativeAssetsAggExp = {
  __typename?: 'CDerivativeAssetsAggExp';
  _count: Scalars['Int']['output'];
  baseAssetId: StringAggExp;
  derivativeAssetId: StringAggExp;
  id: StringAggExp;
};

export type CDerivativeAssetsBoolExp = {
  _and?: InputMaybe<Array<CDerivativeAssetsBoolExp>>;
  _not?: InputMaybe<CDerivativeAssetsBoolExp>;
  _or?: InputMaybe<Array<CDerivativeAssetsBoolExp>>;
  asset?: InputMaybe<CAssetsBoolExp>;
  assetByBaseAssetId?: InputMaybe<CAssetsBoolExp>;
  baseAssetId?: InputMaybe<StringBoolExp>;
  derivativeAssetId?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
};

export type CDerivativeAssetsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CDerivativeAssetsOrderBy>>;
  where?: InputMaybe<CDerivativeAssetsBoolExp>;
};

export type CDerivativeAssetsOrderBy = {
  asset?: InputMaybe<CAssetsOrderBy>;
  assetByBaseAssetId?: InputMaybe<CAssetsOrderBy>;
  baseAssetId?: InputMaybe<OrderBy>;
  derivativeAssetId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

export type CEntities = {
  __typename?: 'CEntities';
  address: Scalars['String1']['output'];
  country?: Maybe<CCountries>;
  countryId?: Maybe<Scalars['String1']['output']>;
  dateOfIncorporation?: Maybe<Scalars['Date']['output']>;
  entityType?: Maybe<CEntityTypes>;
  entityTypeId?: Maybe<Scalars['String1']['output']>;
  id: Scalars['String1']['output'];
  leiNumber: Scalars['String1']['output'];
  localRegistrationNumber: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  root?: Maybe<CRoots>;
  rootId: Scalars['String1']['output'];
  taxIdentificationNumber: Scalars['String1']['output'];
  tradeName: Scalars['String1']['output'];
  urls?: Maybe<Array<EntityUrls>>;
};


export type CEntitiesUrlsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<EntityUrlsOrderBy>>;
  where?: InputMaybe<EntityUrlsBoolExp>;
};

export type CEntitiesAggExp = {
  __typename?: 'CEntitiesAggExp';
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

export type CEntitiesBoolExp = {
  _and?: InputMaybe<Array<CEntitiesBoolExp>>;
  _not?: InputMaybe<CEntitiesBoolExp>;
  _or?: InputMaybe<Array<CEntitiesBoolExp>>;
  address?: InputMaybe<StringBoolExp>;
  country?: InputMaybe<CCountriesBoolExp>;
  countryId?: InputMaybe<StringBoolExp>;
  dateOfIncorporation?: InputMaybe<DateBoolExp>;
  entityType?: InputMaybe<CEntityTypesBoolExp>;
  entityTypeId?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  leiNumber?: InputMaybe<StringBoolExp>;
  localRegistrationNumber?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  root?: InputMaybe<CRootsBoolExp>;
  rootId?: InputMaybe<StringBoolExp>;
  taxIdentificationNumber?: InputMaybe<StringBoolExp>;
  tradeName?: InputMaybe<StringBoolExp>;
};

export type CEntitiesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CEntitiesOrderBy>>;
  where?: InputMaybe<CEntitiesBoolExp>;
};

export type CEntitiesOrderBy = {
  address?: InputMaybe<OrderBy>;
  country?: InputMaybe<CCountriesOrderBy>;
  countryId?: InputMaybe<OrderBy>;
  dateOfIncorporation?: InputMaybe<OrderBy>;
  entityType?: InputMaybe<CEntityTypesOrderBy>;
  entityTypeId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  leiNumber?: InputMaybe<OrderBy>;
  localRegistrationNumber?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  root?: InputMaybe<CRootsOrderBy>;
  rootId?: InputMaybe<OrderBy>;
  taxIdentificationNumber?: InputMaybe<OrderBy>;
  tradeName?: InputMaybe<OrderBy>;
};

export type CEntityTypes = {
  __typename?: 'CEntityTypes';
  definition: Scalars['String1']['output'];
  entities?: Maybe<Array<CEntities>>;
  entitiesAggregate: CEntitiesAggExp;
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
};


export type CEntityTypesEntitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CEntitiesOrderBy>>;
  where?: InputMaybe<CEntitiesBoolExp>;
};


export type CEntityTypesEntitiesAggregateArgs = {
  filter_input?: InputMaybe<CEntitiesFilterInput>;
};

export type CEntityTypesAggExp = {
  __typename?: 'CEntityTypesAggExp';
  _count: Scalars['Int']['output'];
  definition: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
};

export type CEntityTypesBoolExp = {
  _and?: InputMaybe<Array<CEntityTypesBoolExp>>;
  _not?: InputMaybe<CEntityTypesBoolExp>;
  _or?: InputMaybe<Array<CEntityTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  entities?: InputMaybe<CEntitiesBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
};

export type CEntityTypesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CEntityTypesOrderBy>>;
  where?: InputMaybe<CEntityTypesBoolExp>;
};

export type CEntityTypesOrderBy = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

export type CProductAssetRelationships = {
  __typename?: 'CProductAssetRelationships';
  asset?: Maybe<CAssets>;
  assetId: Scalars['String1']['output'];
  assetSupportType?: Maybe<CAssetSupportTypes>;
  id: Scalars['String1']['output'];
  product?: Maybe<CProducts>;
  productId: Scalars['String1']['output'];
  typeOfSupportId?: Maybe<Scalars['String1']['output']>;
};

export type CProductAssetRelationshipsAggExp = {
  __typename?: 'CProductAssetRelationshipsAggExp';
  _count: Scalars['Int']['output'];
  assetId: StringAggExp;
  id: StringAggExp;
  productId: StringAggExp;
  typeOfSupportId: StringAggExp;
};

export type CProductAssetRelationshipsBoolExp = {
  _and?: InputMaybe<Array<CProductAssetRelationshipsBoolExp>>;
  _not?: InputMaybe<CProductAssetRelationshipsBoolExp>;
  _or?: InputMaybe<Array<CProductAssetRelationshipsBoolExp>>;
  asset?: InputMaybe<CAssetsBoolExp>;
  assetId?: InputMaybe<StringBoolExp>;
  assetSupportType?: InputMaybe<CAssetSupportTypesBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  product?: InputMaybe<CProductsBoolExp>;
  productId?: InputMaybe<StringBoolExp>;
  typeOfSupportId?: InputMaybe<StringBoolExp>;
};

export type CProductAssetRelationshipsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProductAssetRelationshipsOrderBy>>;
  where?: InputMaybe<CProductAssetRelationshipsBoolExp>;
};

export type CProductAssetRelationshipsOrderBy = {
  asset?: InputMaybe<CAssetsOrderBy>;
  assetId?: InputMaybe<OrderBy>;
  assetSupportType?: InputMaybe<CAssetSupportTypesOrderBy>;
  id?: InputMaybe<OrderBy>;
  product?: InputMaybe<CProductsOrderBy>;
  productId?: InputMaybe<OrderBy>;
  typeOfSupportId?: InputMaybe<OrderBy>;
};

export type CProductDeployments = {
  __typename?: 'CProductDeployments';
  deploymentId: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  product?: Maybe<CProducts>;
  productId: Scalars['String1']['output'];
  smartContractDeployment?: Maybe<CSmartContractDeployments>;
};

export type CProductDeploymentsAggExp = {
  __typename?: 'CProductDeploymentsAggExp';
  _count: Scalars['Int']['output'];
  deploymentId: StringAggExp;
  id: StringAggExp;
  productId: StringAggExp;
};

export type CProductDeploymentsBoolExp = {
  _and?: InputMaybe<Array<CProductDeploymentsBoolExp>>;
  _not?: InputMaybe<CProductDeploymentsBoolExp>;
  _or?: InputMaybe<Array<CProductDeploymentsBoolExp>>;
  deploymentId?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  product?: InputMaybe<CProductsBoolExp>;
  productId?: InputMaybe<StringBoolExp>;
  smartContractDeployment?: InputMaybe<CSmartContractDeploymentsBoolExp>;
};

export type CProductDeploymentsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProductDeploymentsOrderBy>>;
  where?: InputMaybe<CProductDeploymentsBoolExp>;
};

export type CProductDeploymentsOrderBy = {
  deploymentId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  product?: InputMaybe<CProductsOrderBy>;
  productId?: InputMaybe<OrderBy>;
  smartContractDeployment?: InputMaybe<CSmartContractDeploymentsOrderBy>;
};

export type CProductStatuses = {
  __typename?: 'CProductStatuses';
  definition: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  products?: Maybe<Array<CProducts>>;
  productsAggregate: CProductsAggExp;
};


export type CProductStatusesProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProductsOrderBy>>;
  where?: InputMaybe<CProductsBoolExp>;
};


export type CProductStatusesProductsAggregateArgs = {
  filter_input?: InputMaybe<CProductsFilterInput>;
};

export type CProductStatusesAggExp = {
  __typename?: 'CProductStatusesAggExp';
  _count: Scalars['Int']['output'];
  definition: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
};

export type CProductStatusesBoolExp = {
  _and?: InputMaybe<Array<CProductStatusesBoolExp>>;
  _not?: InputMaybe<CProductStatusesBoolExp>;
  _or?: InputMaybe<Array<CProductStatusesBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  products?: InputMaybe<CProductsBoolExp>;
};

export type CProductStatusesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProductStatusesOrderBy>>;
  where?: InputMaybe<CProductStatusesBoolExp>;
};

export type CProductStatusesOrderBy = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

export type CProductTypes = {
  __typename?: 'CProductTypes';
  definition: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  products?: Maybe<Array<CProducts>>;
  productsAggregate: CProductsAggExp;
};


export type CProductTypesProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProductsOrderBy>>;
  where?: InputMaybe<CProductsBoolExp>;
};


export type CProductTypesProductsAggregateArgs = {
  filter_input?: InputMaybe<CProductsFilterInput>;
};

export type CProductTypesAggExp = {
  __typename?: 'CProductTypesAggExp';
  _count: Scalars['Int']['output'];
  definition: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
};

export type CProductTypesBoolExp = {
  _and?: InputMaybe<Array<CProductTypesBoolExp>>;
  _not?: InputMaybe<CProductTypesBoolExp>;
  _or?: InputMaybe<Array<CProductTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  products?: InputMaybe<CProductsBoolExp>;
};

export type CProductTypesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProductTypesOrderBy>>;
  where?: InputMaybe<CProductTypesBoolExp>;
};

export type CProductTypesOrderBy = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

export type CProducts = {
  __typename?: 'CProducts';
  description: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  isMainProduct: Scalars['Int8']['output'];
  launchDate?: Maybe<Scalars['Date']['output']>;
  name: Scalars['String1']['output'];
  productAssetRelationships?: Maybe<Array<CProductAssetRelationships>>;
  productAssetRelationshipsAggregate: CProductAssetRelationshipsAggExp;
  productDeployments?: Maybe<Array<CProductDeployments>>;
  productDeploymentsAggregate: CProductDeploymentsAggExp;
  productStatus?: Maybe<CProductStatuses>;
  productStatusId?: Maybe<Scalars['String1']['output']>;
  productType?: Maybe<CProductTypes>;
  productTypeId?: Maybe<Scalars['String1']['output']>;
  root?: Maybe<CRoots>;
  rootId: Scalars['String1']['output'];
  smartContractDeployments?: Maybe<Array<CSmartContractDeployments>>;
  smartContractDeploymentsAggregate: CSmartContractDeploymentsAggExp;
  supportsProducts?: Maybe<Array<CSupportsProducts>>;
  supportsProductsAggregate: CSupportsProductsAggExp;
  supportsProductsBySupportsProductId?: Maybe<Array<CSupportsProducts>>;
  supportsProductsBySupportsProductIdAggregate: CSupportsProductsAggExp;
  urls?: Maybe<Array<ProductUrls>>;
};


export type CProductsProductAssetRelationshipsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProductAssetRelationshipsOrderBy>>;
  where?: InputMaybe<CProductAssetRelationshipsBoolExp>;
};


export type CProductsProductAssetRelationshipsAggregateArgs = {
  filter_input?: InputMaybe<CProductAssetRelationshipsFilterInput>;
};


export type CProductsProductDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProductDeploymentsOrderBy>>;
  where?: InputMaybe<CProductDeploymentsBoolExp>;
};


export type CProductsProductDeploymentsAggregateArgs = {
  filter_input?: InputMaybe<CProductDeploymentsFilterInput>;
};


export type CProductsSmartContractDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CSmartContractDeploymentsOrderBy>>;
  where?: InputMaybe<CSmartContractDeploymentsBoolExp>;
};


export type CProductsSmartContractDeploymentsAggregateArgs = {
  filter_input?: InputMaybe<CSmartContractDeploymentsFilterInput>;
};


export type CProductsSupportsProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CSupportsProductsOrderBy>>;
  where?: InputMaybe<CSupportsProductsBoolExp>;
};


export type CProductsSupportsProductsAggregateArgs = {
  filter_input?: InputMaybe<CSupportsProductsFilterInput>;
};


export type CProductsSupportsProductsBySupportsProductIdArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CSupportsProductsOrderBy>>;
  where?: InputMaybe<CSupportsProductsBoolExp>;
};


export type CProductsSupportsProductsBySupportsProductIdAggregateArgs = {
  filter_input?: InputMaybe<CSupportsProductsFilterInput>;
};


export type CProductsUrlsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductUrlsOrderBy>>;
  where?: InputMaybe<ProductUrlsBoolExp>;
};

export type CProductsAggExp = {
  __typename?: 'CProductsAggExp';
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

export type CProductsBoolExp = {
  _and?: InputMaybe<Array<CProductsBoolExp>>;
  _not?: InputMaybe<CProductsBoolExp>;
  _or?: InputMaybe<Array<CProductsBoolExp>>;
  description?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  isMainProduct?: InputMaybe<Int8BoolExp>;
  launchDate?: InputMaybe<DateBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  productAssetRelationships?: InputMaybe<CProductAssetRelationshipsBoolExp>;
  productDeployments?: InputMaybe<CProductDeploymentsBoolExp>;
  productStatus?: InputMaybe<CProductStatusesBoolExp>;
  productStatusId?: InputMaybe<StringBoolExp>;
  productType?: InputMaybe<CProductTypesBoolExp>;
  productTypeId?: InputMaybe<StringBoolExp>;
  root?: InputMaybe<CRootsBoolExp>;
  rootId?: InputMaybe<StringBoolExp>;
  smartContractDeployments?: InputMaybe<CSmartContractDeploymentsBoolExp>;
  supportsProducts?: InputMaybe<CSupportsProductsBoolExp>;
  supportsProductsBySupportsProductId?: InputMaybe<CSupportsProductsBoolExp>;
};

export type CProductsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProductsOrderBy>>;
  where?: InputMaybe<CProductsBoolExp>;
};

export type CProductsOrderBy = {
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isMainProduct?: InputMaybe<OrderBy>;
  launchDate?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  productStatus?: InputMaybe<CProductStatusesOrderBy>;
  productStatusId?: InputMaybe<OrderBy>;
  productType?: InputMaybe<CProductTypesOrderBy>;
  productTypeId?: InputMaybe<OrderBy>;
  root?: InputMaybe<CRootsOrderBy>;
  rootId?: InputMaybe<OrderBy>;
};

export type CProfileInfos = {
  __typename?: 'CProfileInfos';
  descriptionLong: Scalars['String1']['output'];
  descriptionShort: Scalars['String1']['output'];
  foundingDate?: Maybe<Scalars['Date']['output']>;
  id: Scalars['String1']['output'];
  logo: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  profileSector?: Maybe<CProfileSectors>;
  profileSectorId?: Maybe<Scalars['String1']['output']>;
  profileStatus?: Maybe<CProfileStatuses>;
  profileStatusId?: Maybe<Scalars['String1']['output']>;
  profileType?: Maybe<CProfileTypes>;
  profileTypeId?: Maybe<Scalars['String1']['output']>;
  root?: Maybe<CRoots>;
  rootId: Scalars['String1']['output'];
  /** Self promotion field */
  tagLine: Scalars['String1']['output'];
  urls?: Maybe<Array<ProfileInfoUrls>>;
};


export type CProfileInfosUrlsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileInfoUrlsOrderBy>>;
  where?: InputMaybe<ProfileInfoUrlsBoolExp>;
};

export type CProfileInfosAggExp = {
  __typename?: 'CProfileInfosAggExp';
  _count: Scalars['Int']['output'];
  descriptionLong: StringAggExp;
  descriptionShort: StringAggExp;
  foundingDate: DateAggExp;
  id: StringAggExp;
  logo: StringAggExp;
  name: StringAggExp;
  profileSectorId: StringAggExp;
  profileStatusId: StringAggExp;
  profileTypeId: StringAggExp;
  rootId: StringAggExp;
  tagLine: StringAggExp;
};

export type CProfileInfosBoolExp = {
  _and?: InputMaybe<Array<CProfileInfosBoolExp>>;
  _not?: InputMaybe<CProfileInfosBoolExp>;
  _or?: InputMaybe<Array<CProfileInfosBoolExp>>;
  descriptionLong?: InputMaybe<StringBoolExp>;
  descriptionShort?: InputMaybe<StringBoolExp>;
  foundingDate?: InputMaybe<DateBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  logo?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  profileSector?: InputMaybe<CProfileSectorsBoolExp>;
  profileSectorId?: InputMaybe<StringBoolExp>;
  profileStatus?: InputMaybe<CProfileStatusesBoolExp>;
  profileStatusId?: InputMaybe<StringBoolExp>;
  profileType?: InputMaybe<CProfileTypesBoolExp>;
  profileTypeId?: InputMaybe<StringBoolExp>;
  root?: InputMaybe<CRootsBoolExp>;
  rootId?: InputMaybe<StringBoolExp>;
  tagLine?: InputMaybe<StringBoolExp>;
};

export type CProfileInfosFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProfileInfosOrderBy>>;
  where?: InputMaybe<CProfileInfosBoolExp>;
};

export type CProfileInfosOrderBy = {
  descriptionLong?: InputMaybe<OrderBy>;
  descriptionShort?: InputMaybe<OrderBy>;
  foundingDate?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  logo?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  profileSector?: InputMaybe<CProfileSectorsOrderBy>;
  profileSectorId?: InputMaybe<OrderBy>;
  profileStatus?: InputMaybe<CProfileStatusesOrderBy>;
  profileStatusId?: InputMaybe<OrderBy>;
  profileType?: InputMaybe<CProfileTypesOrderBy>;
  profileTypeId?: InputMaybe<OrderBy>;
  root?: InputMaybe<CRootsOrderBy>;
  rootId?: InputMaybe<OrderBy>;
  tagLine?: InputMaybe<OrderBy>;
};

export type CProfileSectors = {
  __typename?: 'CProfileSectors';
  definition: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  profileInfos?: Maybe<Array<CProfileInfos>>;
  profileInfosAggregate: CProfileInfosAggExp;
};


export type CProfileSectorsProfileInfosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProfileInfosOrderBy>>;
  where?: InputMaybe<CProfileInfosBoolExp>;
};


export type CProfileSectorsProfileInfosAggregateArgs = {
  filter_input?: InputMaybe<CProfileInfosFilterInput>;
};

export type CProfileSectorsAggExp = {
  __typename?: 'CProfileSectorsAggExp';
  _count: Scalars['Int']['output'];
  definition: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
};

export type CProfileSectorsBoolExp = {
  _and?: InputMaybe<Array<CProfileSectorsBoolExp>>;
  _not?: InputMaybe<CProfileSectorsBoolExp>;
  _or?: InputMaybe<Array<CProfileSectorsBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  profileInfos?: InputMaybe<CProfileInfosBoolExp>;
};

export type CProfileSectorsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProfileSectorsOrderBy>>;
  where?: InputMaybe<CProfileSectorsBoolExp>;
};

export type CProfileSectorsOrderBy = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

export type CProfileStatuses = {
  __typename?: 'CProfileStatuses';
  definition: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  profileInfos?: Maybe<Array<CProfileInfos>>;
  profileInfosAggregate: CProfileInfosAggExp;
};


export type CProfileStatusesProfileInfosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProfileInfosOrderBy>>;
  where?: InputMaybe<CProfileInfosBoolExp>;
};


export type CProfileStatusesProfileInfosAggregateArgs = {
  filter_input?: InputMaybe<CProfileInfosFilterInput>;
};

export type CProfileStatusesAggExp = {
  __typename?: 'CProfileStatusesAggExp';
  _count: Scalars['Int']['output'];
  definition: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
};

export type CProfileStatusesBoolExp = {
  _and?: InputMaybe<Array<CProfileStatusesBoolExp>>;
  _not?: InputMaybe<CProfileStatusesBoolExp>;
  _or?: InputMaybe<Array<CProfileStatusesBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  profileInfos?: InputMaybe<CProfileInfosBoolExp>;
};

export type CProfileStatusesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProfileStatusesOrderBy>>;
  where?: InputMaybe<CProfileStatusesBoolExp>;
};

export type CProfileStatusesOrderBy = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/**   */
export type CProfileTags = {
  __typename?: 'CProfileTags';
  id: Scalars['String1']['output'];
  root?: Maybe<CRoots>;
  rootId: Scalars['String1']['output'];
  tag?: Maybe<CTags>;
  tagId: Scalars['String1']['output'];
};

export type CProfileTagsAggExp = {
  __typename?: 'CProfileTagsAggExp';
  _count: Scalars['Int']['output'];
  id: StringAggExp;
  rootId: StringAggExp;
  tagId: StringAggExp;
};

export type CProfileTagsBoolExp = {
  _and?: InputMaybe<Array<CProfileTagsBoolExp>>;
  _not?: InputMaybe<CProfileTagsBoolExp>;
  _or?: InputMaybe<Array<CProfileTagsBoolExp>>;
  id?: InputMaybe<StringBoolExp>;
  root?: InputMaybe<CRootsBoolExp>;
  rootId?: InputMaybe<StringBoolExp>;
  tag?: InputMaybe<CTagsBoolExp>;
  tagId?: InputMaybe<StringBoolExp>;
};

export type CProfileTagsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProfileTagsOrderBy>>;
  where?: InputMaybe<CProfileTagsBoolExp>;
};

export type CProfileTagsOrderBy = {
  id?: InputMaybe<OrderBy>;
  root?: InputMaybe<CRootsOrderBy>;
  rootId?: InputMaybe<OrderBy>;
  tag?: InputMaybe<CTagsOrderBy>;
  tagId?: InputMaybe<OrderBy>;
};

export type CProfileTypes = {
  __typename?: 'CProfileTypes';
  definition: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  profileInfos?: Maybe<Array<CProfileInfos>>;
  profileInfosAggregate: CProfileInfosAggExp;
};


export type CProfileTypesProfileInfosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProfileInfosOrderBy>>;
  where?: InputMaybe<CProfileInfosBoolExp>;
};


export type CProfileTypesProfileInfosAggregateArgs = {
  filter_input?: InputMaybe<CProfileInfosFilterInput>;
};

export type CProfileTypesAggExp = {
  __typename?: 'CProfileTypesAggExp';
  _count: Scalars['Int']['output'];
  definition: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
};

export type CProfileTypesBoolExp = {
  _and?: InputMaybe<Array<CProfileTypesBoolExp>>;
  _not?: InputMaybe<CProfileTypesBoolExp>;
  _or?: InputMaybe<Array<CProfileTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  profileInfos?: InputMaybe<CProfileInfosBoolExp>;
};

export type CProfileTypesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProfileTypesOrderBy>>;
  where?: InputMaybe<CProfileTypesBoolExp>;
};

export type CProfileTypesOrderBy = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

export type CRoots = {
  __typename?: 'CRoots';
  assets?: Maybe<Array<CAssets>>;
  assetsAggregate: CAssetsAggExp;
  entities?: Maybe<Array<CEntities>>;
  entitiesAggregate: CEntitiesAggExp;
  id: Scalars['String1']['output'];
  products?: Maybe<Array<CProducts>>;
  productsAggregate: CProductsAggExp;
  profileInfos?: Maybe<Array<CProfileInfos>>;
  profileInfosAggregate: CProfileInfosAggExp;
  profileTags?: Maybe<Array<CProfileTags>>;
  profileTagsAggregate: CProfileTagsAggExp;
  slug: Scalars['String1']['output'];
  socials?: Maybe<Array<CSocials>>;
  socialsAggregate: CSocialsAggExp;
  urlMain: Scalars['String1']['output'];
};


export type CRootsAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CAssetsOrderBy>>;
  where?: InputMaybe<CAssetsBoolExp>;
};


export type CRootsAssetsAggregateArgs = {
  filter_input?: InputMaybe<CAssetsFilterInput>;
};


export type CRootsEntitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CEntitiesOrderBy>>;
  where?: InputMaybe<CEntitiesBoolExp>;
};


export type CRootsEntitiesAggregateArgs = {
  filter_input?: InputMaybe<CEntitiesFilterInput>;
};


export type CRootsProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProductsOrderBy>>;
  where?: InputMaybe<CProductsBoolExp>;
};


export type CRootsProductsAggregateArgs = {
  filter_input?: InputMaybe<CProductsFilterInput>;
};


export type CRootsProfileInfosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProfileInfosOrderBy>>;
  where?: InputMaybe<CProfileInfosBoolExp>;
};


export type CRootsProfileInfosAggregateArgs = {
  filter_input?: InputMaybe<CProfileInfosFilterInput>;
};


export type CRootsProfileTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProfileTagsOrderBy>>;
  where?: InputMaybe<CProfileTagsBoolExp>;
};


export type CRootsProfileTagsAggregateArgs = {
  filter_input?: InputMaybe<CProfileTagsFilterInput>;
};


export type CRootsSocialsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CSocialsOrderBy>>;
  where?: InputMaybe<CSocialsBoolExp>;
};


export type CRootsSocialsAggregateArgs = {
  filter_input?: InputMaybe<CSocialsFilterInput>;
};

export type CRootsAggExp = {
  __typename?: 'CRootsAggExp';
  _count: Scalars['Int']['output'];
  id: StringAggExp;
  slug: StringAggExp;
  urlMain: StringAggExp;
};

export type CRootsBoolExp = {
  _and?: InputMaybe<Array<CRootsBoolExp>>;
  _not?: InputMaybe<CRootsBoolExp>;
  _or?: InputMaybe<Array<CRootsBoolExp>>;
  assets?: InputMaybe<CAssetsBoolExp>;
  entities?: InputMaybe<CEntitiesBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  products?: InputMaybe<CProductsBoolExp>;
  profileInfos?: InputMaybe<CProfileInfosBoolExp>;
  profileTags?: InputMaybe<CProfileTagsBoolExp>;
  slug?: InputMaybe<StringBoolExp>;
  socials?: InputMaybe<CSocialsBoolExp>;
  urlMain?: InputMaybe<StringBoolExp>;
};

export type CRootsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CRootsOrderBy>>;
  where?: InputMaybe<CRootsBoolExp>;
};

export type CRootsOrderBy = {
  id?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
  urlMain?: InputMaybe<OrderBy>;
};

export type CSmartContractDeployments = {
  __typename?: 'CSmartContractDeployments';
  assetDeployments?: Maybe<Array<CAssetDeployments>>;
  assetDeploymentsAggregate: CAssetDeploymentsAggExp;
  assetStandard?: Maybe<CAssetStandards>;
  deployedOnId?: Maybe<Scalars['String1']['output']>;
  deployedOnProduct?: Maybe<CProducts>;
  deploymentType?: Maybe<CDeploymentTypes>;
  deploymentTypeId?: Maybe<Scalars['String1']['output']>;
  id: Scalars['String1']['output'];
  isOfStandardId?: Maybe<Scalars['String1']['output']>;
  productDeployments?: Maybe<Array<CProductDeployments>>;
  productDeploymentsAggregate: CProductDeploymentsAggExp;
  smartContracts?: Maybe<Array<CSmartContracts>>;
  smartContractsAggregate: CSmartContractsAggExp;
};


export type CSmartContractDeploymentsAssetDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CAssetDeploymentsOrderBy>>;
  where?: InputMaybe<AssetDeploymentsBoolExp>;
};


export type CSmartContractDeploymentsAssetDeploymentsAggregateArgs = {
  filter_input?: InputMaybe<CAssetDeploymentsFilterInput>;
};


export type CSmartContractDeploymentsProductDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProductDeploymentsOrderBy>>;
  where?: InputMaybe<CProductDeploymentsBoolExp>;
};


export type CSmartContractDeploymentsProductDeploymentsAggregateArgs = {
  filter_input?: InputMaybe<CProductDeploymentsFilterInput>;
};


export type CSmartContractDeploymentsSmartContractsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CSmartContractsOrderBy>>;
  where?: InputMaybe<CSmartContractsBoolExp>;
};


export type CSmartContractDeploymentsSmartContractsAggregateArgs = {
  filter_input?: InputMaybe<CSmartContractsFilterInput>;
};

export type CSmartContractDeploymentsAggExp = {
  __typename?: 'CSmartContractDeploymentsAggExp';
  _count: Scalars['Int']['output'];
  deployedOnId: StringAggExp;
  deploymentTypeId: StringAggExp;
  id: StringAggExp;
  isOfStandardId: StringAggExp;
};

export type CSmartContractDeploymentsBoolExp = {
  _and?: InputMaybe<Array<CSmartContractDeploymentsBoolExp>>;
  _not?: InputMaybe<CSmartContractDeploymentsBoolExp>;
  _or?: InputMaybe<Array<CSmartContractDeploymentsBoolExp>>;
  assetDeployments?: InputMaybe<AssetDeploymentsBoolExp>;
  assetStandard?: InputMaybe<CAssetStandardsBoolExp>;
  deployedOnId?: InputMaybe<StringBoolExp>;
  deployedOnProduct?: InputMaybe<CProductsBoolExp>;
  deploymentType?: InputMaybe<CDeploymentTypesBoolExp>;
  deploymentTypeId?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  isOfStandardId?: InputMaybe<StringBoolExp>;
  productDeployments?: InputMaybe<CProductDeploymentsBoolExp>;
  smartContracts?: InputMaybe<CSmartContractsBoolExp>;
};

export type CSmartContractDeploymentsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CSmartContractDeploymentsOrderBy>>;
  where?: InputMaybe<CSmartContractDeploymentsBoolExp>;
};

export type CSmartContractDeploymentsOrderBy = {
  assetStandard?: InputMaybe<CAssetStandardsOrderBy>;
  deployedOnId?: InputMaybe<OrderBy>;
  deployedOnProduct?: InputMaybe<CProductsOrderBy>;
  deploymentType?: InputMaybe<CDeploymentTypesOrderBy>;
  deploymentTypeId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isOfStandardId?: InputMaybe<OrderBy>;
};

export type CSmartContracts = {
  __typename?: 'CSmartContracts';
  address: Scalars['String1']['output'];
  deploymentDate?: Maybe<Scalars['Date']['output']>;
  deploymentId?: Maybe<Scalars['String1']['output']>;
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  smartContractDeployment?: Maybe<CSmartContractDeployments>;
};

export type CSmartContractsAggExp = {
  __typename?: 'CSmartContractsAggExp';
  _count: Scalars['Int']['output'];
  address: StringAggExp;
  deploymentDate: DateAggExp;
  deploymentId: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
};

export type CSmartContractsBoolExp = {
  _and?: InputMaybe<Array<CSmartContractsBoolExp>>;
  _not?: InputMaybe<CSmartContractsBoolExp>;
  _or?: InputMaybe<Array<CSmartContractsBoolExp>>;
  address?: InputMaybe<StringBoolExp>;
  deploymentDate?: InputMaybe<DateBoolExp>;
  deploymentId?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  smartContractDeployment?: InputMaybe<CSmartContractDeploymentsBoolExp>;
};

export type CSmartContractsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CSmartContractsOrderBy>>;
  where?: InputMaybe<CSmartContractsBoolExp>;
};

export type CSmartContractsOrderBy = {
  address?: InputMaybe<OrderBy>;
  deploymentDate?: InputMaybe<OrderBy>;
  deploymentId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  smartContractDeployment?: InputMaybe<CSmartContractDeploymentsOrderBy>;
};

export type CSocialTypes = {
  __typename?: 'CSocialTypes';
  definition: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  socials?: Maybe<Array<CSocials>>;
  socialsAggregate: CSocialsAggExp;
};


export type CSocialTypesSocialsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CSocialsOrderBy>>;
  where?: InputMaybe<CSocialsBoolExp>;
};


export type CSocialTypesSocialsAggregateArgs = {
  filter_input?: InputMaybe<CSocialsFilterInput>;
};

export type CSocialTypesAggExp = {
  __typename?: 'CSocialTypesAggExp';
  _count: Scalars['Int']['output'];
  definition: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
};

export type CSocialTypesBoolExp = {
  _and?: InputMaybe<Array<CSocialTypesBoolExp>>;
  _not?: InputMaybe<CSocialTypesBoolExp>;
  _or?: InputMaybe<Array<CSocialTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  socials?: InputMaybe<CSocialsBoolExp>;
};

export type CSocialTypesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CSocialTypesOrderBy>>;
  where?: InputMaybe<CSocialTypesBoolExp>;
};

export type CSocialTypesOrderBy = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

export type CSocials = {
  __typename?: 'CSocials';
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  root?: Maybe<CRoots>;
  rootId: Scalars['String1']['output'];
  socialType?: Maybe<CSocialTypes>;
  socialTypeId?: Maybe<Scalars['String1']['output']>;
  urls?: Maybe<Array<SocialUrls>>;
};


export type CSocialsUrlsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SocialUrlsOrderBy>>;
  where?: InputMaybe<SocialUrlsBoolExp>;
};

export type CSocialsAggExp = {
  __typename?: 'CSocialsAggExp';
  _count: Scalars['Int']['output'];
  id: StringAggExp;
  name: StringAggExp;
  rootId: StringAggExp;
  socialTypeId: StringAggExp;
};

export type CSocialsBoolExp = {
  _and?: InputMaybe<Array<CSocialsBoolExp>>;
  _not?: InputMaybe<CSocialsBoolExp>;
  _or?: InputMaybe<Array<CSocialsBoolExp>>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  root?: InputMaybe<CRootsBoolExp>;
  rootId?: InputMaybe<StringBoolExp>;
  socialType?: InputMaybe<CSocialTypesBoolExp>;
  socialTypeId?: InputMaybe<StringBoolExp>;
};

export type CSocialsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CSocialsOrderBy>>;
  where?: InputMaybe<CSocialsBoolExp>;
};

export type CSocialsOrderBy = {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  root?: InputMaybe<CRootsOrderBy>;
  rootId?: InputMaybe<OrderBy>;
  socialType?: InputMaybe<CSocialTypesOrderBy>;
  socialTypeId?: InputMaybe<OrderBy>;
};

/** Table mapping product support relationships */
export type CSupportsProducts = {
  __typename?: 'CSupportsProducts';
  id: Scalars['String1']['output'];
  product?: Maybe<CProducts>;
  productId: Scalars['String1']['output'];
  supportsProduct?: Maybe<CProducts>;
  supportsProductId: Scalars['String1']['output'];
};

export type CSupportsProductsAggExp = {
  __typename?: 'CSupportsProductsAggExp';
  _count: Scalars['Int']['output'];
  id: StringAggExp;
  productId: StringAggExp;
  supportsProductId: StringAggExp;
};

export type CSupportsProductsBoolExp = {
  _and?: InputMaybe<Array<CSupportsProductsBoolExp>>;
  _not?: InputMaybe<CSupportsProductsBoolExp>;
  _or?: InputMaybe<Array<CSupportsProductsBoolExp>>;
  id?: InputMaybe<StringBoolExp>;
  product?: InputMaybe<CProductsBoolExp>;
  productId?: InputMaybe<StringBoolExp>;
  supportsProduct?: InputMaybe<CProductsBoolExp>;
  supportsProductId?: InputMaybe<StringBoolExp>;
};

export type CSupportsProductsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CSupportsProductsOrderBy>>;
  where?: InputMaybe<CSupportsProductsBoolExp>;
};

export type CSupportsProductsOrderBy = {
  id?: InputMaybe<OrderBy>;
  product?: InputMaybe<CProductsOrderBy>;
  productId?: InputMaybe<OrderBy>;
  supportsProduct?: InputMaybe<CProductsOrderBy>;
  supportsProductId?: InputMaybe<OrderBy>;
};

export type CTagTypes = {
  __typename?: 'CTagTypes';
  definition: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  tags?: Maybe<Array<CTags>>;
  tagsAggregate: CTagsAggExp;
};


export type CTagTypesTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CTagsOrderBy>>;
  where?: InputMaybe<CTagsBoolExp>;
};


export type CTagTypesTagsAggregateArgs = {
  filter_input?: InputMaybe<CTagsFilterInput>;
};

export type CTagTypesAggExp = {
  __typename?: 'CTagTypesAggExp';
  _count: Scalars['Int']['output'];
  definition: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
};

export type CTagTypesBoolExp = {
  _and?: InputMaybe<Array<CTagTypesBoolExp>>;
  _not?: InputMaybe<CTagTypesBoolExp>;
  _or?: InputMaybe<Array<CTagTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  tags?: InputMaybe<CTagsBoolExp>;
};

export type CTagTypesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CTagTypesOrderBy>>;
  where?: InputMaybe<CTagTypesBoolExp>;
};

export type CTagTypesOrderBy = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

export type CTags = {
  __typename?: 'CTags';
  description: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  profileTags?: Maybe<Array<CProfileTags>>;
  profileTagsAggregate: CProfileTagsAggExp;
  tagType?: Maybe<CTagTypes>;
  tagTypeId?: Maybe<Scalars['String1']['output']>;
};


export type CTagsProfileTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProfileTagsOrderBy>>;
  where?: InputMaybe<CProfileTagsBoolExp>;
};


export type CTagsProfileTagsAggregateArgs = {
  filter_input?: InputMaybe<CProfileTagsFilterInput>;
};

export type CTagsAggExp = {
  __typename?: 'CTagsAggExp';
  _count: Scalars['Int']['output'];
  description: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
  tagTypeId: StringAggExp;
};

export type CTagsBoolExp = {
  _and?: InputMaybe<Array<CTagsBoolExp>>;
  _not?: InputMaybe<CTagsBoolExp>;
  _or?: InputMaybe<Array<CTagsBoolExp>>;
  description?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  profileTags?: InputMaybe<CProfileTagsBoolExp>;
  tagType?: InputMaybe<CTagTypesBoolExp>;
  tagTypeId?: InputMaybe<StringBoolExp>;
};

export type CTagsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CTagsOrderBy>>;
  where?: InputMaybe<CTagsBoolExp>;
};

export type CTagsOrderBy = {
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  tagType?: InputMaybe<CTagTypesOrderBy>;
  tagTypeId?: InputMaybe<OrderBy>;
};

export type CUrlTypes = {
  __typename?: 'CUrlTypes';
  definition: Scalars['String1']['output'];
  id: Scalars['String1']['output'];
  name: Scalars['String1']['output'];
  urls?: Maybe<Array<CUrls>>;
  urlsAggregate: CUrlsAggExp;
};


export type CUrlTypesUrlsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CUrlsOrderBy>>;
  where?: InputMaybe<CUrlsBoolExp>;
};


export type CUrlTypesUrlsAggregateArgs = {
  filter_input?: InputMaybe<CUrlsFilterInput>;
};

export type CUrlTypesAggExp = {
  __typename?: 'CUrlTypesAggExp';
  _count: Scalars['Int']['output'];
  definition: StringAggExp;
  id: StringAggExp;
  name: StringAggExp;
};

export type CUrlTypesBoolExp = {
  _and?: InputMaybe<Array<CUrlTypesBoolExp>>;
  _not?: InputMaybe<CUrlTypesBoolExp>;
  _or?: InputMaybe<Array<CUrlTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  name?: InputMaybe<StringBoolExp>;
  urls?: InputMaybe<CUrlsBoolExp>;
};

export type CUrlTypesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CUrlTypesOrderBy>>;
  where?: InputMaybe<CUrlTypesBoolExp>;
};

export type CUrlTypesOrderBy = {
  definition?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

export type CUrls = {
  __typename?: 'CUrls';
  coreTableName?: Maybe<CCoreTableNames>;
  id: Scalars['String1']['output'];
  rowId: Scalars['String1']['output'];
  tableId: Scalars['String1']['output'];
  url: Scalars['String1']['output'];
  urlType?: Maybe<CUrlTypes>;
  urlTypeId?: Maybe<Scalars['String1']['output']>;
};

export type CUrlsAggExp = {
  __typename?: 'CUrlsAggExp';
  _count: Scalars['Int']['output'];
  id: StringAggExp;
  rowId: StringAggExp;
  tableId: StringAggExp;
  url: StringAggExp;
  urlTypeId: StringAggExp;
};

export type CUrlsBoolExp = {
  _and?: InputMaybe<Array<CUrlsBoolExp>>;
  _not?: InputMaybe<CUrlsBoolExp>;
  _or?: InputMaybe<Array<CUrlsBoolExp>>;
  coreTableName?: InputMaybe<CCoreTableNamesBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  rowId?: InputMaybe<StringBoolExp>;
  tableId?: InputMaybe<StringBoolExp>;
  url?: InputMaybe<StringBoolExp>;
  urlType?: InputMaybe<CUrlTypesBoolExp>;
  urlTypeId?: InputMaybe<StringBoolExp>;
};

export type CUrlsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CUrlsOrderBy>>;
  where?: InputMaybe<CUrlsBoolExp>;
};

export type CUrlsOrderBy = {
  coreTableName?: InputMaybe<CCoreTableNamesOrderBy>;
  id?: InputMaybe<OrderBy>;
  rowId?: InputMaybe<OrderBy>;
  tableId?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
  urlType?: InputMaybe<CUrlTypesOrderBy>;
  urlTypeId?: InputMaybe<OrderBy>;
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

export type EntityUrls = {
  __typename?: 'EntityUrls';
  id?: Maybe<Scalars['String1']['output']>;
  rowId?: Maybe<Scalars['String1']['output']>;
  tableId?: Maybe<Scalars['String1']['output']>;
  url?: Maybe<Scalars['String1']['output']>;
  urlType?: Maybe<CUrlTypes>;
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
  urlType?: InputMaybe<CUrlTypesBoolExp>;
  urlTypeId?: InputMaybe<StringBoolExp>;
};

export type EntityUrlsOrderBy = {
  id?: InputMaybe<OrderBy>;
  rowId?: InputMaybe<OrderBy>;
  tableId?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
  urlType?: InputMaybe<CUrlTypesOrderBy>;
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

export type ProductUrls = {
  __typename?: 'ProductUrls';
  id?: Maybe<Scalars['String1']['output']>;
  rowId?: Maybe<Scalars['String1']['output']>;
  tableId?: Maybe<Scalars['String1']['output']>;
  url?: Maybe<Scalars['String1']['output']>;
  urlType?: Maybe<CUrlTypes>;
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
  urlType?: InputMaybe<CUrlTypesBoolExp>;
  urlTypeId?: InputMaybe<StringBoolExp>;
};

export type ProductUrlsOrderBy = {
  id?: InputMaybe<OrderBy>;
  rowId?: InputMaybe<OrderBy>;
  tableId?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
  urlType?: InputMaybe<CUrlTypesOrderBy>;
  urlTypeId?: InputMaybe<OrderBy>;
};

export type ProfileInfoUrls = {
  __typename?: 'ProfileInfoUrls';
  id?: Maybe<Scalars['String1']['output']>;
  rowId?: Maybe<Scalars['String1']['output']>;
  tableId?: Maybe<Scalars['String1']['output']>;
  url?: Maybe<Scalars['String1']['output']>;
  urlType?: Maybe<CUrlTypes>;
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
  urlType?: InputMaybe<CUrlTypesBoolExp>;
  urlTypeId?: InputMaybe<StringBoolExp>;
};

export type ProfileInfoUrlsOrderBy = {
  id?: InputMaybe<OrderBy>;
  rowId?: InputMaybe<OrderBy>;
  tableId?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
  urlType?: InputMaybe<CUrlTypesOrderBy>;
  urlTypeId?: InputMaybe<OrderBy>;
};

export type Query = {
  __typename?: 'Query';
  assetDeployments?: Maybe<Array<CAssetDeployments>>;
  assetDeploymentsAggregate?: Maybe<CAssetDeploymentsAggExp>;
  assetStandards?: Maybe<Array<CAssetStandards>>;
  assetStandardsAggregate?: Maybe<CAssetStandardsAggExp>;
  assetStatuses?: Maybe<Array<CAssetStatuses>>;
  assetStatusesAggregate?: Maybe<CAssetStatusesAggExp>;
  assetSupportTypes?: Maybe<Array<CAssetSupportTypes>>;
  assetSupportTypesAggregate?: Maybe<CAssetSupportTypesAggExp>;
  assetTypes?: Maybe<Array<CAssetTypes>>;
  assetTypesAggregate?: Maybe<CAssetTypesAggExp>;
  assets?: Maybe<Array<CAssets>>;
  assetsAggregate?: Maybe<CAssetsAggExp>;
  coreTableNames?: Maybe<Array<CCoreTableNames>>;
  coreTableNamesAggregate?: Maybe<CCoreTableNamesAggExp>;
  countries?: Maybe<Array<CCountries>>;
  countriesAggregate?: Maybe<CCountriesAggExp>;
  deploymentTypes?: Maybe<Array<CDeploymentTypes>>;
  deploymentTypesAggregate?: Maybe<CDeploymentTypesAggExp>;
  derivativeAssets?: Maybe<Array<CDerivativeAssets>>;
  derivativeAssetsAggregate?: Maybe<CDerivativeAssetsAggExp>;
  entities?: Maybe<Array<CEntities>>;
  entitiesAggregate?: Maybe<CEntitiesAggExp>;
  entityTypes?: Maybe<Array<CEntityTypes>>;
  entityTypesAggregate?: Maybe<CEntityTypesAggExp>;
  productAssetRelationships?: Maybe<Array<CProductAssetRelationships>>;
  productAssetRelationshipsAggregate?: Maybe<CProductAssetRelationshipsAggExp>;
  productDeployments?: Maybe<Array<CProductDeployments>>;
  productDeploymentsAggregate?: Maybe<CProductDeploymentsAggExp>;
  productStatuses?: Maybe<Array<CProductStatuses>>;
  productStatusesAggregate?: Maybe<CProductStatusesAggExp>;
  productTypes?: Maybe<Array<CProductTypes>>;
  productTypesAggregate?: Maybe<CProductTypesAggExp>;
  products?: Maybe<Array<CProducts>>;
  productsAggregate?: Maybe<CProductsAggExp>;
  profileInfos?: Maybe<Array<CProfileInfos>>;
  profileInfosAggregate?: Maybe<CProfileInfosAggExp>;
  profileInfosById?: Maybe<CProfileInfos>;
  profileSectors?: Maybe<Array<CProfileSectors>>;
  profileSectorsAggregate?: Maybe<CProfileSectorsAggExp>;
  profileStatuses?: Maybe<Array<CProfileStatuses>>;
  profileStatusesAggregate?: Maybe<CProfileStatusesAggExp>;
  /** Selects multiple objects from the model. Model description:   */
  profileTags?: Maybe<Array<CProfileTags>>;
  profileTagsAggregate?: Maybe<CProfileTagsAggExp>;
  profileTypes?: Maybe<Array<CProfileTypes>>;
  profileTypesAggregate?: Maybe<CProfileTypesAggExp>;
  roots?: Maybe<Array<CRoots>>;
  rootsAggregate?: Maybe<CRootsAggExp>;
  smartContractDeployments?: Maybe<Array<CSmartContractDeployments>>;
  smartContractDeploymentsAggregate?: Maybe<CSmartContractDeploymentsAggExp>;
  smartContracts?: Maybe<Array<CSmartContracts>>;
  smartContractsAggregate?: Maybe<CSmartContractsAggExp>;
  socialTypes?: Maybe<Array<CSocialTypes>>;
  socialTypesAggregate?: Maybe<CSocialTypesAggExp>;
  socials?: Maybe<Array<CSocials>>;
  socialsAggregate?: Maybe<CSocialsAggExp>;
  /** Selects multiple objects from the model. Model description: Table mapping product support relationships */
  supportsProducts?: Maybe<Array<CSupportsProducts>>;
  supportsProductsAggregate?: Maybe<CSupportsProductsAggExp>;
  tagTypes?: Maybe<Array<CTagTypes>>;
  tagTypesAggregate?: Maybe<CTagTypesAggExp>;
  tags?: Maybe<Array<CTags>>;
  tagsAggregate?: Maybe<CTagsAggExp>;
  urlTypes?: Maybe<Array<CUrlTypes>>;
  urlTypesAggregate?: Maybe<CUrlTypesAggExp>;
  urlTypesById?: Maybe<CUrlTypes>;
  urls?: Maybe<Array<CUrls>>;
  urlsAggregate?: Maybe<CUrlsAggExp>;
  urlsById?: Maybe<CUrls>;
};


export type QueryAssetDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CAssetDeploymentsOrderBy>>;
  where?: InputMaybe<AssetDeploymentsBoolExp>;
};


export type QueryAssetDeploymentsAggregateArgs = {
  filter_input?: InputMaybe<CAssetDeploymentsFilterInput>;
};


export type QueryAssetStandardsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CAssetStandardsOrderBy>>;
  where?: InputMaybe<CAssetStandardsBoolExp>;
};


export type QueryAssetStandardsAggregateArgs = {
  filter_input?: InputMaybe<CAssetStandardsFilterInput>;
};


export type QueryAssetStatusesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CAssetStatusesOrderBy>>;
  where?: InputMaybe<CAssetStatusesBoolExp>;
};


export type QueryAssetStatusesAggregateArgs = {
  filter_input?: InputMaybe<CAssetStatusesFilterInput>;
};


export type QueryAssetSupportTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CAssetSupportTypesOrderBy>>;
  where?: InputMaybe<CAssetSupportTypesBoolExp>;
};


export type QueryAssetSupportTypesAggregateArgs = {
  filter_input?: InputMaybe<CAssetSupportTypesFilterInput>;
};


export type QueryAssetTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CAssetTypesOrderBy>>;
  where?: InputMaybe<CAssetTypesBoolExp>;
};


export type QueryAssetTypesAggregateArgs = {
  filter_input?: InputMaybe<CAssetTypesFilterInput>;
};


export type QueryAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CAssetsOrderBy>>;
  where?: InputMaybe<CAssetsBoolExp>;
};


export type QueryAssetsAggregateArgs = {
  filter_input?: InputMaybe<CAssetsFilterInput>;
};


export type QueryCoreTableNamesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CCoreTableNamesOrderBy>>;
  where?: InputMaybe<CCoreTableNamesBoolExp>;
};


export type QueryCoreTableNamesAggregateArgs = {
  filter_input?: InputMaybe<CCoreTableNamesFilterInput>;
};


export type QueryCountriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CCountriesOrderBy>>;
  where?: InputMaybe<CCountriesBoolExp>;
};


export type QueryCountriesAggregateArgs = {
  filter_input?: InputMaybe<CCountriesFilterInput>;
};


export type QueryDeploymentTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CDeploymentTypesOrderBy>>;
  where?: InputMaybe<CDeploymentTypesBoolExp>;
};


export type QueryDeploymentTypesAggregateArgs = {
  filter_input?: InputMaybe<CDeploymentTypesFilterInput>;
};


export type QueryDerivativeAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CDerivativeAssetsOrderBy>>;
  where?: InputMaybe<CDerivativeAssetsBoolExp>;
};


export type QueryDerivativeAssetsAggregateArgs = {
  filter_input?: InputMaybe<CDerivativeAssetsFilterInput>;
};


export type QueryEntitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CEntitiesOrderBy>>;
  where?: InputMaybe<CEntitiesBoolExp>;
};


export type QueryEntitiesAggregateArgs = {
  filter_input?: InputMaybe<CEntitiesFilterInput>;
};


export type QueryEntityTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CEntityTypesOrderBy>>;
  where?: InputMaybe<CEntityTypesBoolExp>;
};


export type QueryEntityTypesAggregateArgs = {
  filter_input?: InputMaybe<CEntityTypesFilterInput>;
};


export type QueryProductAssetRelationshipsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProductAssetRelationshipsOrderBy>>;
  where?: InputMaybe<CProductAssetRelationshipsBoolExp>;
};


export type QueryProductAssetRelationshipsAggregateArgs = {
  filter_input?: InputMaybe<CProductAssetRelationshipsFilterInput>;
};


export type QueryProductDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProductDeploymentsOrderBy>>;
  where?: InputMaybe<CProductDeploymentsBoolExp>;
};


export type QueryProductDeploymentsAggregateArgs = {
  filter_input?: InputMaybe<CProductDeploymentsFilterInput>;
};


export type QueryProductStatusesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProductStatusesOrderBy>>;
  where?: InputMaybe<CProductStatusesBoolExp>;
};


export type QueryProductStatusesAggregateArgs = {
  filter_input?: InputMaybe<CProductStatusesFilterInput>;
};


export type QueryProductTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProductTypesOrderBy>>;
  where?: InputMaybe<CProductTypesBoolExp>;
};


export type QueryProductTypesAggregateArgs = {
  filter_input?: InputMaybe<CProductTypesFilterInput>;
};


export type QueryProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProductsOrderBy>>;
  where?: InputMaybe<CProductsBoolExp>;
};


export type QueryProductsAggregateArgs = {
  filter_input?: InputMaybe<CProductsFilterInput>;
};


export type QueryProfileInfosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProfileInfosOrderBy>>;
  where?: InputMaybe<CProfileInfosBoolExp>;
};


export type QueryProfileInfosAggregateArgs = {
  filter_input?: InputMaybe<CProfileInfosFilterInput>;
};


export type QueryProfileInfosByIdArgs = {
  id: Scalars['String1']['input'];
};


export type QueryProfileSectorsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProfileSectorsOrderBy>>;
  where?: InputMaybe<CProfileSectorsBoolExp>;
};


export type QueryProfileSectorsAggregateArgs = {
  filter_input?: InputMaybe<CProfileSectorsFilterInput>;
};


export type QueryProfileStatusesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProfileStatusesOrderBy>>;
  where?: InputMaybe<CProfileStatusesBoolExp>;
};


export type QueryProfileStatusesAggregateArgs = {
  filter_input?: InputMaybe<CProfileStatusesFilterInput>;
};


export type QueryProfileTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProfileTagsOrderBy>>;
  where?: InputMaybe<CProfileTagsBoolExp>;
};


export type QueryProfileTagsAggregateArgs = {
  filter_input?: InputMaybe<CProfileTagsFilterInput>;
};


export type QueryProfileTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProfileTypesOrderBy>>;
  where?: InputMaybe<CProfileTypesBoolExp>;
};


export type QueryProfileTypesAggregateArgs = {
  filter_input?: InputMaybe<CProfileTypesFilterInput>;
};


export type QueryRootsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CRootsOrderBy>>;
  where?: InputMaybe<CRootsBoolExp>;
};


export type QueryRootsAggregateArgs = {
  filter_input?: InputMaybe<CRootsFilterInput>;
};


export type QuerySmartContractDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CSmartContractDeploymentsOrderBy>>;
  where?: InputMaybe<CSmartContractDeploymentsBoolExp>;
};


export type QuerySmartContractDeploymentsAggregateArgs = {
  filter_input?: InputMaybe<CSmartContractDeploymentsFilterInput>;
};


export type QuerySmartContractsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CSmartContractsOrderBy>>;
  where?: InputMaybe<CSmartContractsBoolExp>;
};


export type QuerySmartContractsAggregateArgs = {
  filter_input?: InputMaybe<CSmartContractsFilterInput>;
};


export type QuerySocialTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CSocialTypesOrderBy>>;
  where?: InputMaybe<CSocialTypesBoolExp>;
};


export type QuerySocialTypesAggregateArgs = {
  filter_input?: InputMaybe<CSocialTypesFilterInput>;
};


export type QuerySocialsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CSocialsOrderBy>>;
  where?: InputMaybe<CSocialsBoolExp>;
};


export type QuerySocialsAggregateArgs = {
  filter_input?: InputMaybe<CSocialsFilterInput>;
};


export type QuerySupportsProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CSupportsProductsOrderBy>>;
  where?: InputMaybe<CSupportsProductsBoolExp>;
};


export type QuerySupportsProductsAggregateArgs = {
  filter_input?: InputMaybe<CSupportsProductsFilterInput>;
};


export type QueryTagTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CTagTypesOrderBy>>;
  where?: InputMaybe<CTagTypesBoolExp>;
};


export type QueryTagTypesAggregateArgs = {
  filter_input?: InputMaybe<CTagTypesFilterInput>;
};


export type QueryTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CTagsOrderBy>>;
  where?: InputMaybe<CTagsBoolExp>;
};


export type QueryTagsAggregateArgs = {
  filter_input?: InputMaybe<CTagsFilterInput>;
};


export type QueryUrlTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CUrlTypesOrderBy>>;
  where?: InputMaybe<CUrlTypesBoolExp>;
};


export type QueryUrlTypesAggregateArgs = {
  filter_input?: InputMaybe<CUrlTypesFilterInput>;
};


export type QueryUrlTypesByIdArgs = {
  id: Scalars['String1']['input'];
};


export type QueryUrlsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CUrlsOrderBy>>;
  where?: InputMaybe<CUrlsBoolExp>;
};


export type QueryUrlsAggregateArgs = {
  filter_input?: InputMaybe<CUrlsFilterInput>;
};


export type QueryUrlsByIdArgs = {
  id: Scalars['String1']['input'];
};

export type SocialUrls = {
  __typename?: 'SocialUrls';
  id?: Maybe<Scalars['String1']['output']>;
  rowId?: Maybe<Scalars['String1']['output']>;
  tableId?: Maybe<Scalars['String1']['output']>;
  url?: Maybe<Scalars['String1']['output']>;
  urlType?: Maybe<CUrlTypes>;
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
  urlType?: InputMaybe<CUrlTypesBoolExp>;
  urlTypeId?: InputMaybe<StringBoolExp>;
};

export type SocialUrlsOrderBy = {
  id?: InputMaybe<OrderBy>;
  rowId?: InputMaybe<OrderBy>;
  tableId?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
  urlType?: InputMaybe<CUrlTypesOrderBy>;
  urlTypeId?: InputMaybe<OrderBy>;
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

export type AssetDeploymentsBoolExp = {
  _and?: InputMaybe<Array<AssetDeploymentsBoolExp>>;
  _not?: InputMaybe<AssetDeploymentsBoolExp>;
  _or?: InputMaybe<Array<AssetDeploymentsBoolExp>>;
  asset?: InputMaybe<CAssetsBoolExp>;
  assetId?: InputMaybe<StringBoolExp>;
  deploymentId?: InputMaybe<StringBoolExp>;
  id?: InputMaybe<StringBoolExp>;
  smartContractDeployment?: InputMaybe<CSmartContractDeploymentsBoolExp>;
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

export type AssetFieldsFragmentFragment = { __typename?: 'CAssets', ticker: string, rootId: string, name: string, id: string, icon: string, description: string, assetTypeId?: string | null, assetStatusId?: string | null, assetType?: { __typename?: 'CAssetTypes', definition: string, id: string, name: string } | null, assetStatus?: { __typename?: 'CAssetStatuses', name: string, id: string, definition: string } | null, assetDeployments?: Array<{ __typename?: 'CAssetDeployments', id: string, deploymentId: string, assetId: string, smartContractDeployment?: { __typename?: 'CSmartContractDeployments', id: string, deployedOnProduct?: { __typename?: 'CProducts', id: string, name: string, root?: { __typename?: 'CRoots', slug: string } | null } | null, assetStandard?: { __typename?: 'CAssetStandards', id: string } | null, smartContracts?: Array<{ __typename?: 'CSmartContracts', name: string, id: string, deploymentId?: string | null, deploymentDate?: string | null, address: string }> | null, deploymentType?: { __typename?: 'CDeploymentTypes', name: string, id: string, definition: string } | null } | null }> | null, urls?: Array<{ __typename?: 'AssetUrls', url?: string | null, urlType?: { __typename?: 'CUrlTypes', name: string, id: string, definition: string } | null }> | null } & { ' $fragmentName'?: 'AssetFieldsFragmentFragment' };

export type EntityFieldsFragmentFragment = { __typename?: 'CEntities', name: string, tradeName: string, taxIdentificationNumber: string, localRegistrationNumber: string, leiNumber: string, id: string, dateOfIncorporation?: string | null, address: string, entityType?: { __typename?: 'CEntityTypes', name: string, id: string, definition: string } | null, country?: { __typename?: 'CCountries', name: string, id: string, code: string } | null, urls?: Array<{ __typename?: 'EntityUrls', url?: string | null, urlType?: { __typename?: 'CUrlTypes', name: string, id: string, definition: string } | null }> | null } & { ' $fragmentName'?: 'EntityFieldsFragmentFragment' };

export type ProfileFragmentFragment = { __typename?: 'CProfileInfos', profileSector?: { __typename?: 'CProfileSectors', name: string } | null, profileType?: { __typename?: 'CProfileTypes', name: string } | null, root?: { __typename?: 'CRoots', assets?: Array<{ __typename?: 'CAssets', ticker: string }> | null, profileTags?: Array<{ __typename?: 'CProfileTags', tag?: { __typename?: 'CTags', name: string, id: string } | null }> | null } | null, profileStatus?: { __typename?: 'CProfileStatuses', name: string, id: string } | null, mainProduct?: { __typename?: 'CRoots', products?: Array<{ __typename?: 'CProducts', productType?: { __typename?: 'CProductTypes', name: string } | null }> | null } | null } & { ' $fragmentName'?: 'ProfileFragmentFragment' };

export type ProductFieldsFragmentFragment = { __typename?: 'CProducts', rootId: string, productTypeId?: string | null, productStatusId?: string | null, name: string, launchDate?: string | null, isMainProduct: number, id: string, description: string, productType?: { __typename?: 'CProductTypes', name: string, id: string, definition: string } | null, productStatus?: { __typename?: 'CProductStatuses', name: string, id: string, definition: string } | null, productDeployments?: Array<{ __typename?: 'CProductDeployments', smartContractDeployment?: { __typename?: 'CSmartContractDeployments', isOfStandardId?: string | null, id: string, deployedOnProduct?: { __typename?: 'CProducts', id: string, name: string, root?: { __typename?: 'CRoots', slug: string } | null } | null, assetStandard?: { __typename?: 'CAssetStandards', id: string } | null, deploymentType?: { __typename?: 'CDeploymentTypes', name: string } | null, smartContracts?: Array<{ __typename?: 'CSmartContracts', name: string, id: string, deploymentDate?: string | null, address: string, deploymentId?: string | null }> | null } | null }> | null, supportsProducts?: Array<{ __typename?: 'CSupportsProducts', supportsProduct?: { __typename?: 'CProducts', name: string, id: string, root?: { __typename?: 'CRoots', slug: string } | null } | null }> | null, urls?: Array<{ __typename?: 'ProductUrls', url?: string | null, urlType?: { __typename?: 'CUrlTypes', name: string, id: string, definition: string } | null }> | null, productAssetRelationships?: Array<{ __typename?: 'CProductAssetRelationships', assetId: string, asset?: { __typename?: 'CAssets', name: string, id: string, assetType?: { __typename?: 'CAssetTypes', name: string } | null, root?: { __typename?: 'CRoots', slug: string } | null } | null, assetSupportType?: { __typename?: 'CAssetSupportTypes', name: string } | null, product?: { __typename?: 'CProducts', name: string, id: string, description: string } | null }> | null } & { ' $fragmentName'?: 'ProductFieldsFragmentFragment' };

export type ProfileHeadingFragmentFragment = { __typename?: 'CProfileInfos', logo: string, name: string, urls?: Array<{ __typename?: 'ProfileInfoUrls', url?: string | null, urlType?: { __typename?: 'CUrlTypes', name: string } | null }> | null, root?: { __typename?: 'CRoots', socials?: Array<{ __typename?: 'CSocials', name: string, socialType?: { __typename?: 'CSocialTypes', name: string } | null, urls?: Array<{ __typename?: 'SocialUrls', url?: string | null }> | null }> | null } | null } & { ' $fragmentName'?: 'ProfileHeadingFragmentFragment' };

export type GetProfileDataQueryVariables = Exact<{
  where?: InputMaybe<CProfileInfosBoolExp>;
}>;


export type GetProfileDataQuery = { __typename?: 'Query', profileInfos?: Array<(
    { __typename?: 'CProfileInfos', tagLine: string, descriptionShort: string, descriptionLong: string, root?: { __typename?: 'CRoots', products?: Array<(
        { __typename?: 'CProducts', id: string }
        & { ' $fragmentRefs'?: { 'ProductFieldsFragmentFragment': ProductFieldsFragmentFragment } }
      )> | null, assets?: Array<(
        { __typename?: 'CAssets', id: string }
        & { ' $fragmentRefs'?: { 'AssetFieldsFragmentFragment': AssetFieldsFragmentFragment } }
      )> | null, entities?: Array<(
        { __typename?: 'CEntities', id: string }
        & { ' $fragmentRefs'?: { 'EntityFieldsFragmentFragment': EntityFieldsFragmentFragment } }
      )> | null } | null }
    & { ' $fragmentRefs'?: { 'ProfileFragmentFragment': ProfileFragmentFragment;'ProfileHeadingFragmentFragment': ProfileHeadingFragmentFragment } }
  )> | null };

export type ProfileCardFragmentFragment = { __typename?: 'CProfileInfos', name: string, logo: string, id: string, tagLine: string, descriptionShort: string, profileTypeId?: string | null, profileStatusId?: string | null, profileSectorId?: string | null, foundingDate?: string | null, profileSector?: { __typename?: 'CProfileSectors', name: string, id: string, definition: string } | null, profileStatus?: { __typename?: 'CProfileStatuses', name: string, id: string, definition: string } | null, profileType?: { __typename?: 'CProfileTypes', name: string, id: string, definition: string } | null, urls?: Array<{ __typename?: 'ProfileInfoUrls', url?: string | null, urlType?: { __typename?: 'CUrlTypes', name: string, id: string, definition: string } | null }> | null, mainProduct?: { __typename?: 'CRoots', products?: Array<{ __typename?: 'CProducts', name: string, productType?: { __typename?: 'CProductTypes', name: string } | null }> | null } | null, root?: { __typename?: 'CRoots', urlMain: string, slug: string, assets?: Array<(
      { __typename?: 'CAssets', ticker: string, name: string, id: string }
      & { ' $fragmentRefs'?: { 'AssetFieldsFragmentFragment': AssetFieldsFragmentFragment } }
    )> | null, socials?: Array<{ __typename?: 'CSocials', name: string, socialType?: { __typename?: 'CSocialTypes', name: string } | null, urls?: Array<{ __typename?: 'SocialUrls', url?: string | null }> | null }> | null, profileTags?: Array<{ __typename?: 'CProfileTags', tag?: { __typename?: 'CTags', name: string, id: string } | null }> | null, products?: Array<(
      { __typename?: 'CProducts', id: string, name: string }
      & { ' $fragmentRefs'?: { 'ProductFieldsFragmentFragment': ProductFieldsFragmentFragment } }
    )> | null } | null } & { ' $fragmentName'?: 'ProfileCardFragmentFragment' };

export type SearchProfilesQueryVariables = Exact<{
  order_by?: InputMaybe<Array<CProfileInfosOrderBy> | CProfileInfosOrderBy>;
  where?: InputMaybe<CProfileInfosBoolExp>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type SearchProfilesQuery = { __typename?: 'Query', profileInfos?: Array<(
    { __typename?: 'CProfileInfos' }
    & { ' $fragmentRefs'?: { 'ProfileCardFragmentFragment': ProfileCardFragmentFragment } }
  )> | null };

export type GetOrderByFieldsQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type GetOrderByFieldsQuery = { __typename?: 'Query', __type?: { __typename?: '__Type', inputFields?: Array<{ __typename?: '__InputValue', name: string, type: { __typename?: '__Type', name?: string | null, kind: __TypeKind, inputFields?: Array<{ __typename?: '__InputValue', name: string }> | null, ofType?: { __typename?: '__Type', name?: string | null, kind: __TypeKind } | null } }> | null } | null };

export type GetDeployedOnProductsOptionsQueryVariables = Exact<{
  deployedOnProductsWhere?: InputMaybe<CProductsBoolExp>;
  where?: InputMaybe<CProductsBoolExp>;
}>;


export type GetDeployedOnProductsOptionsQuery = { __typename?: 'Query', deployedOnProducts?: Array<{ __typename?: 'CProducts', description: string, label: string, value: string }> | null, products?: Array<{ __typename?: 'CProducts', id: string }> | null };

export type GetAssetStandardOptionsQueryVariables = Exact<{
  where?: InputMaybe<CAssetStandardsBoolExp>;
}>;


export type GetAssetStandardOptionsQuery = { __typename?: 'Query', assetStandards?: Array<{ __typename?: 'CAssetStandards', label: string, value: string, description: string }> | null };

export type GetAssetTickerOptionsQueryVariables = Exact<{
  where?: InputMaybe<CAssetsBoolExp>;
}>;


export type GetAssetTickerOptionsQuery = { __typename?: 'Query', assets?: Array<{ __typename?: 'CAssets', ticker: string }> | null };

export type GetAssetTypeOptionsQueryVariables = Exact<{
  where?: InputMaybe<CAssetTypesBoolExp>;
}>;


export type GetAssetTypeOptionsQuery = { __typename?: 'Query', assetTypes?: Array<{ __typename?: 'CAssetTypes', label: string, value: string, description: string }> | null };

export type GetEntityCountryOptionsQueryVariables = Exact<{
  where?: InputMaybe<CCountriesBoolExp>;
}>;


export type GetEntityCountryOptionsQuery = { __typename?: 'Query', countries?: Array<{ __typename?: 'CCountries', label: string, value: string }> | null };

export type GetEntityNameOptionsQueryVariables = Exact<{
  where?: InputMaybe<CEntitiesBoolExp>;
}>;


export type GetEntityNameOptionsQuery = { __typename?: 'Query', entities?: Array<{ __typename?: 'CEntities', label: string, value: string }> | null };

export type GetEntityTypeOptionsQueryVariables = Exact<{
  where?: InputMaybe<CEntityTypesBoolExp>;
}>;


export type GetEntityTypeOptionsQuery = { __typename?: 'Query', entityTypes?: Array<{ __typename?: 'CEntityTypes', label: string, value: string, description: string }> | null };

export type GetProductAssetRelationshipsOptionsQueryVariables = Exact<{
  where?: InputMaybe<CAssetsBoolExp>;
}>;


export type GetProductAssetRelationshipsOptionsQuery = { __typename?: 'Query', assets?: Array<{ __typename?: 'CAssets', ticker: string }> | null };

export type GetProductStatusesOptionsQueryVariables = Exact<{
  where?: InputMaybe<CProductStatusesBoolExp>;
}>;


export type GetProductStatusesOptionsQuery = { __typename?: 'Query', productStatuses?: Array<{ __typename?: 'CProductStatuses', label: string, value: string, description: string }> | null };

export type GetProductTypeOptionsQueryVariables = Exact<{
  where?: InputMaybe<CProductTypesBoolExp>;
  aggregateInput?: InputMaybe<CProductsFilterInput>;
}>;


export type GetProductTypeOptionsQuery = { __typename?: 'Query', productTypes?: Array<{ __typename?: 'CProductTypes', label: string, value: string, description: string, productsAggregate: { __typename?: 'CProductsAggExp', _count: number } }> | null };

export type GetProfileSectorsOptionsQueryVariables = Exact<{
  where?: InputMaybe<CProfileSectorsBoolExp>;
  aggregateInput?: InputMaybe<CProfileInfosFilterInput>;
}>;


export type GetProfileSectorsOptionsQuery = { __typename?: 'Query', profileSectors?: Array<{ __typename?: 'CProfileSectors', label: string, value: string, description: string, profileInfosAggregate: { __typename?: 'CProfileInfosAggExp', _count: number } }> | null };

export type GetProfileStatusesOptionsQueryVariables = Exact<{
  where?: InputMaybe<CProfileStatusesBoolExp>;
}>;


export type GetProfileStatusesOptionsQuery = { __typename?: 'Query', profileStatuses?: Array<{ __typename?: 'CProfileStatuses', label: string, value: string, description: string }> | null };

export type GetProfileTypeOptionsQueryVariables = Exact<{
  where?: InputMaybe<CProfileTypesBoolExp>;
}>;


export type GetProfileTypeOptionsQuery = { __typename?: 'Query', profileTypes?: Array<{ __typename?: 'CProfileTypes', label: string, value: string, description: string }> | null };

export type GetSupportsProductsOptionsQueryVariables = Exact<{
  supportsProductsWhere?: InputMaybe<CSupportsProductsBoolExp>;
  where?: InputMaybe<CProductsBoolExp>;
}>;


export type GetSupportsProductsOptionsQuery = { __typename?: 'Query', supportsProducts?: Array<{ __typename?: 'CSupportsProducts', supportsProduct?: { __typename?: 'CProducts', name: string, id: string, description: string } | null }> | null, products?: Array<{ __typename?: 'CProducts', id: string }> | null };

export type GetTagsOptionsQueryVariables = Exact<{
  where?: InputMaybe<CTagsBoolExp>;
  aggregateInput?: InputMaybe<CProfileTagsFilterInput>;
}>;


export type GetTagsOptionsQuery = { __typename?: 'Query', tags?: Array<{ __typename?: 'CTags', description: string, value: string, label: string, profileTagsAggregate: { __typename?: 'CProfileTagsAggExp', _count: number } }> | null };

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
    fragment EntityFieldsFragment on CEntities {
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
    fragment ProfileFragment on CProfileInfos {
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
    fragment ProfileHeadingFragment on CProfileInfos {
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
    fragment ProductFieldsFragment on CProducts {
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
    fragment AssetFieldsFragment on CAssets {
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
    fragment ProfileCardFragment on CProfileInfos {
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
    fragment AssetFieldsFragment on CAssets {
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
fragment ProductFieldsFragment on CProducts {
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
    fragment AssetFieldsFragment on CAssets {
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
fragment EntityFieldsFragment on CEntities {
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
fragment ProfileFragment on CProfileInfos {
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
fragment ProductFieldsFragment on CProducts {
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
fragment ProfileHeadingFragment on CProfileInfos {
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
    query SearchProfiles($order_by: [CProfileInfosOrderBy!], $where: CProfileInfosBoolExp, $limit: Int, $offset: Int) {
  profileInfos(limit: $limit, offset: $offset, where: $where, order_by: $order_by) {
    ...ProfileCardFragment
  }
}
    fragment AssetFieldsFragment on CAssets {
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
fragment ProductFieldsFragment on CProducts {
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
fragment ProfileCardFragment on CProfileInfos {
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
export const GetDeployedOnProductsOptionsDocument = new TypedDocumentString(`
    query getDeployedOnProductsOptions($deployedOnProductsWhere: CProductsBoolExp, $where: CProductsBoolExp) {
  deployedOnProducts: products(where: $deployedOnProductsWhere) {
    label: name
    value: id
    description
  }
  products(where: $where) {
    id
  }
}
    `) as unknown as TypedDocumentString<GetDeployedOnProductsOptionsQuery, GetDeployedOnProductsOptionsQueryVariables>;
export const GetAssetStandardOptionsDocument = new TypedDocumentString(`
    query getAssetStandardOptions($where: CAssetStandardsBoolExp) {
  assetStandards(where: $where) {
    label: name
    value: id
    description: definition
  }
}
    `) as unknown as TypedDocumentString<GetAssetStandardOptionsQuery, GetAssetStandardOptionsQueryVariables>;
export const GetAssetTickerOptionsDocument = new TypedDocumentString(`
    query getAssetTickerOptions($where: CAssetsBoolExp) {
  assets(where: $where) {
    ticker
  }
}
    `) as unknown as TypedDocumentString<GetAssetTickerOptionsQuery, GetAssetTickerOptionsQueryVariables>;
export const GetAssetTypeOptionsDocument = new TypedDocumentString(`
    query getAssetTypeOptions($where: CAssetTypesBoolExp) {
  assetTypes(where: $where) {
    label: name
    value: id
    description: definition
  }
}
    `) as unknown as TypedDocumentString<GetAssetTypeOptionsQuery, GetAssetTypeOptionsQueryVariables>;
export const GetEntityCountryOptionsDocument = new TypedDocumentString(`
    query getEntityCountryOptions($where: CCountriesBoolExp) {
  countries(where: $where) {
    label: name
    value: id
  }
}
    `) as unknown as TypedDocumentString<GetEntityCountryOptionsQuery, GetEntityCountryOptionsQueryVariables>;
export const GetEntityNameOptionsDocument = new TypedDocumentString(`
    query getEntityNameOptions($where: CEntitiesBoolExp) {
  entities(where: $where) {
    label: name
    value: id
  }
}
    `) as unknown as TypedDocumentString<GetEntityNameOptionsQuery, GetEntityNameOptionsQueryVariables>;
export const GetEntityTypeOptionsDocument = new TypedDocumentString(`
    query getEntityTypeOptions($where: CEntityTypesBoolExp) {
  entityTypes(where: $where) {
    label: name
    value: id
    description: definition
  }
}
    `) as unknown as TypedDocumentString<GetEntityTypeOptionsQuery, GetEntityTypeOptionsQueryVariables>;
export const GetProductAssetRelationshipsOptionsDocument = new TypedDocumentString(`
    query getProductAssetRelationshipsOptions($where: CAssetsBoolExp) {
  assets(where: $where) {
    ticker
  }
}
    `) as unknown as TypedDocumentString<GetProductAssetRelationshipsOptionsQuery, GetProductAssetRelationshipsOptionsQueryVariables>;
export const GetProductStatusesOptionsDocument = new TypedDocumentString(`
    query getProductStatusesOptions($where: CProductStatusesBoolExp) {
  productStatuses(where: $where) {
    label: name
    value: id
    description: definition
  }
}
    `) as unknown as TypedDocumentString<GetProductStatusesOptionsQuery, GetProductStatusesOptionsQueryVariables>;
export const GetProductTypeOptionsDocument = new TypedDocumentString(`
    query getProductTypeOptions($where: CProductTypesBoolExp, $aggregateInput: CProductsFilterInput) {
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
    query getProfileSectorsOptions($where: CProfileSectorsBoolExp, $aggregateInput: CProfileInfosFilterInput) {
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
    query getProfileStatusesOptions($where: CProfileStatusesBoolExp) {
  profileStatuses(where: $where) {
    label: name
    value: id
    description: definition
  }
}
    `) as unknown as TypedDocumentString<GetProfileStatusesOptionsQuery, GetProfileStatusesOptionsQueryVariables>;
export const GetProfileTypeOptionsDocument = new TypedDocumentString(`
    query getProfileTypeOptions($where: CProfileTypesBoolExp) {
  profileTypes(where: $where) {
    label: name
    value: id
    description: definition
  }
}
    `) as unknown as TypedDocumentString<GetProfileTypeOptionsQuery, GetProfileTypeOptionsQueryVariables>;
export const GetSupportsProductsOptionsDocument = new TypedDocumentString(`
    query getSupportsProductsOptions($supportsProductsWhere: CSupportsProductsBoolExp, $where: CProductsBoolExp) {
  supportsProducts(where: $supportsProductsWhere) {
    supportsProduct {
      name
      id
      description
    }
  }
  products(where: $where) {
    id
  }
}
    `) as unknown as TypedDocumentString<GetSupportsProductsOptionsQuery, GetSupportsProductsOptionsQueryVariables>;
export const GetTagsOptionsDocument = new TypedDocumentString(`
    query getTagsOptions($where: CTagsBoolExp, $aggregateInput: CProfileTagsFilterInput) {
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