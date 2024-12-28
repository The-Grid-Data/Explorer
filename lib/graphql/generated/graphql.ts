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
  Date1: { input: string; output: string; }
  Float2: { input: number; output: number; }
  Int2: { input: number; output: number; }
  String2: { input: string; output: string; }
};

export type AssetUrls = {
  __typename?: 'AssetUrls';
  id: Scalars['Int2']['output'];
  rowId: Scalars['Int2']['output'];
  tableId: Scalars['Int2']['output'];
  url: Scalars['String2']['output'];
  urlType?: Maybe<CUrlTypes>;
  urlTypeId: Scalars['Int2']['output'];
};

export type AssetUrlsBoolExp = {
  _and?: InputMaybe<Array<AssetUrlsBoolExp>>;
  _not?: InputMaybe<AssetUrlsBoolExp>;
  _or?: InputMaybe<Array<AssetUrlsBoolExp>>;
  id?: InputMaybe<IntBoolExp1>;
  rowId?: InputMaybe<IntBoolExp1>;
  tableId?: InputMaybe<IntBoolExp1>;
  url?: InputMaybe<StringBoolExp1>;
  urlType?: InputMaybe<CUrlTypesBoolExp>;
  urlTypeId?: InputMaybe<IntBoolExp1>;
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
  assetId: Scalars['Int2']['output'];
  deploymentId: Scalars['Int2']['output'];
  id: Scalars['Int2']['output'];
  smartContractDeployment?: Maybe<CSmartContractDeployments>;
};

export type CAssetDeploymentsAggExp = {
  __typename?: 'CAssetDeploymentsAggExp';
  _count: Scalars['Int']['output'];
  assetId: IntAggExp1;
  deploymentId: IntAggExp1;
  id: IntAggExp1;
};

export type CAssetDeploymentsBoolExp = {
  _and?: InputMaybe<Array<CAssetDeploymentsBoolExp>>;
  _not?: InputMaybe<CAssetDeploymentsBoolExp>;
  _or?: InputMaybe<Array<CAssetDeploymentsBoolExp>>;
  asset?: InputMaybe<CAssetsBoolExp>;
  assetId?: InputMaybe<IntBoolExp1>;
  deploymentId?: InputMaybe<IntBoolExp1>;
  id?: InputMaybe<IntBoolExp1>;
  smartContractDeployment?: InputMaybe<CSmartContractDeploymentsBoolExp>;
};

export type CAssetDeploymentsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CAssetDeploymentsOrderBy>>;
  where?: InputMaybe<CAssetDeploymentsBoolExp>;
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
  definition: Scalars['String2']['output'];
  /** - TBD renamed to assetStandards */
  id: Scalars['Int2']['output'];
  name: Scalars['String2']['output'];
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
  definition: StringAggExp1;
  id: IntAggExp1;
  name: StringAggExp1;
};

export type CAssetStandardsBoolExp = {
  _and?: InputMaybe<Array<CAssetStandardsBoolExp>>;
  _not?: InputMaybe<CAssetStandardsBoolExp>;
  _or?: InputMaybe<Array<CAssetStandardsBoolExp>>;
  definition?: InputMaybe<StringBoolExp1>;
  id?: InputMaybe<IntBoolExp1>;
  name?: InputMaybe<StringBoolExp1>;
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
  definition: Scalars['String2']['output'];
  id: Scalars['Int2']['output'];
  name: Scalars['String2']['output'];
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
  definition: StringAggExp1;
  id: IntAggExp1;
  name: StringAggExp1;
};

export type CAssetStatusesBoolExp = {
  _and?: InputMaybe<Array<CAssetStatusesBoolExp>>;
  _not?: InputMaybe<CAssetStatusesBoolExp>;
  _or?: InputMaybe<Array<CAssetStatusesBoolExp>>;
  assets?: InputMaybe<CAssetsBoolExp>;
  definition?: InputMaybe<StringBoolExp1>;
  id?: InputMaybe<IntBoolExp1>;
  name?: InputMaybe<StringBoolExp1>;
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
  definition: Scalars['String2']['output'];
  id: Scalars['Int2']['output'];
  name: Scalars['String2']['output'];
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
  definition: StringAggExp1;
  id: IntAggExp1;
  name: StringAggExp1;
};

export type CAssetSupportTypesBoolExp = {
  _and?: InputMaybe<Array<CAssetSupportTypesBoolExp>>;
  _not?: InputMaybe<CAssetSupportTypesBoolExp>;
  _or?: InputMaybe<Array<CAssetSupportTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp1>;
  id?: InputMaybe<IntBoolExp1>;
  name?: InputMaybe<StringBoolExp1>;
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
  definition: Scalars['String2']['output'];
  /** Rename to assetTypes */
  id: Scalars['Int2']['output'];
  name: Scalars['String2']['output'];
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
  definition: StringAggExp1;
  id: IntAggExp1;
  name: StringAggExp1;
};

export type CAssetTypesBoolExp = {
  _and?: InputMaybe<Array<CAssetTypesBoolExp>>;
  _not?: InputMaybe<CAssetTypesBoolExp>;
  _or?: InputMaybe<Array<CAssetTypesBoolExp>>;
  assets?: InputMaybe<CAssetsBoolExp>;
  definition?: InputMaybe<StringBoolExp1>;
  id?: InputMaybe<IntBoolExp1>;
  name?: InputMaybe<StringBoolExp1>;
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
  assetStatusId: Scalars['Int2']['output'];
  assetType?: Maybe<CAssetTypes>;
  assetTypeId: Scalars['Int2']['output'];
  derivativeAssets?: Maybe<Array<CDerivativeAssets>>;
  derivativeAssetsAggregate: CDerivativeAssetsAggExp;
  derivativeAssetsByBaseAssetId?: Maybe<Array<CDerivativeAssets>>;
  derivativeAssetsByBaseAssetIdAggregate: CDerivativeAssetsAggExp;
  description: Scalars['String2']['output'];
  icon: Scalars['String2']['output'];
  id: Scalars['Int2']['output'];
  name: Scalars['String2']['output'];
  productAssetRelationships?: Maybe<Array<CProductAssetRelationships>>;
  productAssetRelationshipsAggregate: CProductAssetRelationshipsAggExp;
  root?: Maybe<CRoots>;
  rootId: Scalars['Int2']['output'];
  ticker: Scalars['String2']['output'];
  urls?: Maybe<Array<AssetUrls>>;
};


export type CAssetsAssetDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CAssetDeploymentsOrderBy>>;
  where?: InputMaybe<CAssetDeploymentsBoolExp>;
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
  assetStatusId: IntAggExp1;
  assetTypeId: IntAggExp1;
  description: StringAggExp1;
  icon: StringAggExp1;
  id: IntAggExp1;
  name: StringAggExp1;
  rootId: IntAggExp1;
  ticker: StringAggExp1;
};

export type CAssetsBoolExp = {
  _and?: InputMaybe<Array<CAssetsBoolExp>>;
  _not?: InputMaybe<CAssetsBoolExp>;
  _or?: InputMaybe<Array<CAssetsBoolExp>>;
  assetDeployments?: InputMaybe<CAssetDeploymentsBoolExp>;
  assetStatus?: InputMaybe<CAssetStatusesBoolExp>;
  assetStatusId?: InputMaybe<IntBoolExp1>;
  assetType?: InputMaybe<CAssetTypesBoolExp>;
  assetTypeId?: InputMaybe<IntBoolExp1>;
  derivativeAssets?: InputMaybe<CDerivativeAssetsBoolExp>;
  derivativeAssetsByBaseAssetId?: InputMaybe<CDerivativeAssetsBoolExp>;
  description?: InputMaybe<StringBoolExp1>;
  icon?: InputMaybe<StringBoolExp1>;
  id?: InputMaybe<IntBoolExp1>;
  name?: InputMaybe<StringBoolExp1>;
  productAssetRelationships?: InputMaybe<CProductAssetRelationshipsBoolExp>;
  root?: InputMaybe<CRootsBoolExp>;
  rootId?: InputMaybe<IntBoolExp1>;
  ticker?: InputMaybe<StringBoolExp1>;
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
  UrlsAggregate: CUrlsAggExp;
  id: Scalars['Int2']['output'];
  tableName: Scalars['String2']['output'];
  urls?: Maybe<Array<CUrls>>;
};


export type CCoreTableNamesUrlsAggregateArgs = {
  filter_input?: InputMaybe<CUrlsFilterInput>;
};


export type CCoreTableNamesUrlsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CUrlsOrderBy>>;
  where?: InputMaybe<CUrlsBoolExp>;
};

export type CCoreTableNamesAggExp = {
  __typename?: 'CCoreTableNamesAggExp';
  _count: Scalars['Int']['output'];
  id: IntAggExp1;
  tableName: StringAggExp1;
};

export type CCoreTableNamesBoolExp = {
  _and?: InputMaybe<Array<CCoreTableNamesBoolExp>>;
  _not?: InputMaybe<CCoreTableNamesBoolExp>;
  _or?: InputMaybe<Array<CCoreTableNamesBoolExp>>;
  id?: InputMaybe<IntBoolExp1>;
  tableName?: InputMaybe<StringBoolExp1>;
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
  EntitiesAggregate: CEntitiesAggExp;
  code: Scalars['String2']['output'];
  entities?: Maybe<Array<CEntities>>;
  id: Scalars['Int2']['output'];
  name: Scalars['String2']['output'];
};


export type CCountriesEntitiesAggregateArgs = {
  filter_input?: InputMaybe<CEntitiesFilterInput>;
};


export type CCountriesEntitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CEntitiesOrderBy>>;
  where?: InputMaybe<CEntitiesBoolExp>;
};

export type CCountriesAggExp = {
  __typename?: 'CCountriesAggExp';
  _count: Scalars['Int']['output'];
  code: StringAggExp1;
  id: IntAggExp1;
  name: StringAggExp1;
};

export type CCountriesBoolExp = {
  _and?: InputMaybe<Array<CCountriesBoolExp>>;
  _not?: InputMaybe<CCountriesBoolExp>;
  _or?: InputMaybe<Array<CCountriesBoolExp>>;
  code?: InputMaybe<StringBoolExp1>;
  entities?: InputMaybe<CEntitiesBoolExp>;
  id?: InputMaybe<IntBoolExp1>;
  name?: InputMaybe<StringBoolExp1>;
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
  definition: Scalars['String2']['output'];
  id: Scalars['Int2']['output'];
  name: Scalars['String2']['output'];
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
  definition: StringAggExp1;
  id: IntAggExp1;
  name: StringAggExp1;
};

export type CDeploymentTypesBoolExp = {
  _and?: InputMaybe<Array<CDeploymentTypesBoolExp>>;
  _not?: InputMaybe<CDeploymentTypesBoolExp>;
  _or?: InputMaybe<Array<CDeploymentTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp1>;
  id?: InputMaybe<IntBoolExp1>;
  name?: InputMaybe<StringBoolExp1>;
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
  baseAssetId: Scalars['Int2']['output'];
  derivativeAssetId: Scalars['Int2']['output'];
  id: Scalars['Int2']['output'];
};

export type CDerivativeAssetsAggExp = {
  __typename?: 'CDerivativeAssetsAggExp';
  _count: Scalars['Int']['output'];
  baseAssetId: IntAggExp1;
  derivativeAssetId: IntAggExp1;
  id: IntAggExp1;
};

export type CDerivativeAssetsBoolExp = {
  _and?: InputMaybe<Array<CDerivativeAssetsBoolExp>>;
  _not?: InputMaybe<CDerivativeAssetsBoolExp>;
  _or?: InputMaybe<Array<CDerivativeAssetsBoolExp>>;
  asset?: InputMaybe<CAssetsBoolExp>;
  assetByBaseAssetId?: InputMaybe<CAssetsBoolExp>;
  baseAssetId?: InputMaybe<IntBoolExp1>;
  derivativeAssetId?: InputMaybe<IntBoolExp1>;
  id?: InputMaybe<IntBoolExp1>;
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
  address: Scalars['String2']['output'];
  country?: Maybe<CCountries>;
  countryId: Scalars['Int2']['output'];
  dateOfIncorporation?: Maybe<Scalars['Date1']['output']>;
  entityType?: Maybe<CEntityTypes>;
  entityTypeId: Scalars['Int2']['output'];
  id: Scalars['Int2']['output'];
  leiNumber: Scalars['String2']['output'];
  localRegistrationNumber: Scalars['String2']['output'];
  name: Scalars['String2']['output'];
  root?: Maybe<CRoots>;
  rootId: Scalars['Int2']['output'];
  taxIdentificationNumber: Scalars['String2']['output'];
  tradeName: Scalars['String2']['output'];
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
  address: StringAggExp1;
  countryId: IntAggExp1;
  dateOfIncorporation: DateAggExp1;
  entityTypeId: IntAggExp1;
  id: IntAggExp1;
  leiNumber: StringAggExp1;
  localRegistrationNumber: StringAggExp1;
  name: StringAggExp1;
  rootId: IntAggExp1;
  taxIdentificationNumber: StringAggExp1;
  tradeName: StringAggExp1;
};

export type CEntitiesBoolExp = {
  _and?: InputMaybe<Array<CEntitiesBoolExp>>;
  _not?: InputMaybe<CEntitiesBoolExp>;
  _or?: InputMaybe<Array<CEntitiesBoolExp>>;
  address?: InputMaybe<StringBoolExp1>;
  country?: InputMaybe<CCountriesBoolExp>;
  countryId?: InputMaybe<IntBoolExp1>;
  dateOfIncorporation?: InputMaybe<DateBoolExp1>;
  entityType?: InputMaybe<CEntityTypesBoolExp>;
  entityTypeId?: InputMaybe<IntBoolExp1>;
  id?: InputMaybe<IntBoolExp1>;
  leiNumber?: InputMaybe<StringBoolExp1>;
  localRegistrationNumber?: InputMaybe<StringBoolExp1>;
  name?: InputMaybe<StringBoolExp1>;
  root?: InputMaybe<CRootsBoolExp>;
  rootId?: InputMaybe<IntBoolExp1>;
  taxIdentificationNumber?: InputMaybe<StringBoolExp1>;
  tradeName?: InputMaybe<StringBoolExp1>;
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
  definition: Scalars['String2']['output'];
  entities?: Maybe<Array<CEntities>>;
  entitiesAggregate: CEntitiesAggExp;
  id: Scalars['Int2']['output'];
  name: Scalars['String2']['output'];
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
  definition: StringAggExp1;
  id: IntAggExp1;
  name: StringAggExp1;
};

export type CEntityTypesBoolExp = {
  _and?: InputMaybe<Array<CEntityTypesBoolExp>>;
  _not?: InputMaybe<CEntityTypesBoolExp>;
  _or?: InputMaybe<Array<CEntityTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp1>;
  entities?: InputMaybe<CEntitiesBoolExp>;
  id?: InputMaybe<IntBoolExp1>;
  name?: InputMaybe<StringBoolExp1>;
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
  assetId: Scalars['Int2']['output'];
  assetSupportType?: Maybe<CAssetSupportTypes>;
  id: Scalars['Int2']['output'];
  product?: Maybe<CProducts>;
  productId: Scalars['Int2']['output'];
  typeOfSupportId: Scalars['Int2']['output'];
};

export type CProductAssetRelationshipsAggExp = {
  __typename?: 'CProductAssetRelationshipsAggExp';
  _count: Scalars['Int']['output'];
  assetId: IntAggExp1;
  id: IntAggExp1;
  productId: IntAggExp1;
  typeOfSupportId: IntAggExp1;
};

export type CProductAssetRelationshipsBoolExp = {
  _and?: InputMaybe<Array<CProductAssetRelationshipsBoolExp>>;
  _not?: InputMaybe<CProductAssetRelationshipsBoolExp>;
  _or?: InputMaybe<Array<CProductAssetRelationshipsBoolExp>>;
  asset?: InputMaybe<CAssetsBoolExp>;
  assetId?: InputMaybe<IntBoolExp1>;
  assetSupportType?: InputMaybe<CAssetSupportTypesBoolExp>;
  id?: InputMaybe<IntBoolExp1>;
  product?: InputMaybe<CProductsBoolExp>;
  productId?: InputMaybe<IntBoolExp1>;
  typeOfSupportId?: InputMaybe<IntBoolExp1>;
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
  deploymentId: Scalars['Int2']['output'];
  id: Scalars['Int2']['output'];
  product?: Maybe<CProducts>;
  productId: Scalars['Int2']['output'];
  smartContractDeployment?: Maybe<CSmartContractDeployments>;
};

export type CProductDeploymentsAggExp = {
  __typename?: 'CProductDeploymentsAggExp';
  _count: Scalars['Int']['output'];
  deploymentId: IntAggExp1;
  id: IntAggExp1;
  productId: IntAggExp1;
};

export type CProductDeploymentsBoolExp = {
  _and?: InputMaybe<Array<CProductDeploymentsBoolExp>>;
  _not?: InputMaybe<CProductDeploymentsBoolExp>;
  _or?: InputMaybe<Array<CProductDeploymentsBoolExp>>;
  deploymentId?: InputMaybe<IntBoolExp1>;
  id?: InputMaybe<IntBoolExp1>;
  product?: InputMaybe<CProductsBoolExp>;
  productId?: InputMaybe<IntBoolExp1>;
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
  definition: Scalars['String2']['output'];
  id: Scalars['Int2']['output'];
  name: Scalars['String2']['output'];
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
  definition: StringAggExp1;
  id: IntAggExp1;
  name: StringAggExp1;
};

export type CProductStatusesBoolExp = {
  _and?: InputMaybe<Array<CProductStatusesBoolExp>>;
  _not?: InputMaybe<CProductStatusesBoolExp>;
  _or?: InputMaybe<Array<CProductStatusesBoolExp>>;
  definition?: InputMaybe<StringBoolExp1>;
  id?: InputMaybe<IntBoolExp1>;
  name?: InputMaybe<StringBoolExp1>;
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
  definition: Scalars['String2']['output'];
  id: Scalars['Int2']['output'];
  name: Scalars['String2']['output'];
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
  definition: StringAggExp1;
  id: IntAggExp1;
  name: StringAggExp1;
};

export type CProductTypesBoolExp = {
  _and?: InputMaybe<Array<CProductTypesBoolExp>>;
  _not?: InputMaybe<CProductTypesBoolExp>;
  _or?: InputMaybe<Array<CProductTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp1>;
  id?: InputMaybe<IntBoolExp1>;
  name?: InputMaybe<StringBoolExp1>;
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
  description: Scalars['String2']['output'];
  id: Scalars['Int2']['output'];
  isMainProduct?: Maybe<Scalars['Int2']['output']>;
  launchDate?: Maybe<Scalars['Date1']['output']>;
  name: Scalars['String2']['output'];
  productAssetRelationships?: Maybe<Array<CProductAssetRelationships>>;
  productAssetRelationshipsAggregate: CProductAssetRelationshipsAggExp;
  productDeployments?: Maybe<Array<CProductDeployments>>;
  productDeploymentsAggregate: CProductDeploymentsAggExp;
  productStatus?: Maybe<CProductStatuses>;
  productStatusId: Scalars['Int2']['output'];
  productType?: Maybe<CProductTypes>;
  productTypeId: Scalars['Int2']['output'];
  root?: Maybe<CRoots>;
  rootId: Scalars['Int2']['output'];
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
  description: StringAggExp1;
  id: IntAggExp1;
  isMainProduct: IntAggExp1;
  launchDate: DateAggExp1;
  name: StringAggExp1;
  productStatusId: IntAggExp1;
  productTypeId: IntAggExp1;
  rootId: IntAggExp1;
};

export type CProductsBoolExp = {
  _and?: InputMaybe<Array<CProductsBoolExp>>;
  _not?: InputMaybe<CProductsBoolExp>;
  _or?: InputMaybe<Array<CProductsBoolExp>>;
  description?: InputMaybe<StringBoolExp1>;
  id?: InputMaybe<IntBoolExp1>;
  isMainProduct?: InputMaybe<IntBoolExp1>;
  launchDate?: InputMaybe<DateBoolExp1>;
  name?: InputMaybe<StringBoolExp1>;
  productAssetRelationships?: InputMaybe<CProductAssetRelationshipsBoolExp>;
  productDeployments?: InputMaybe<CProductDeploymentsBoolExp>;
  productStatus?: InputMaybe<CProductStatusesBoolExp>;
  productStatusId?: InputMaybe<IntBoolExp1>;
  productType?: InputMaybe<CProductTypesBoolExp>;
  productTypeId?: InputMaybe<IntBoolExp1>;
  root?: InputMaybe<CRootsBoolExp>;
  rootId?: InputMaybe<IntBoolExp1>;
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
  descriptionLong: Scalars['String2']['output'];
  descriptionShort: Scalars['String2']['output'];
  foundingDate?: Maybe<Scalars['Date1']['output']>;
  id: Scalars['Int2']['output'];
  logo: Scalars['String2']['output'];
  name: Scalars['String2']['output'];
  profileSector?: Maybe<CProfileSectors>;
  profileSectorId: Scalars['Int2']['output'];
  profileStatus?: Maybe<CProfileStatuses>;
  profileStatusId: Scalars['Int2']['output'];
  profileType?: Maybe<CProfileTypes>;
  profileTypeId: Scalars['Int2']['output'];
  root?: Maybe<CRoots>;
  rootId: Scalars['Int2']['output'];
  /** Self promotion field */
  tagLine: Scalars['String2']['output'];
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
  descriptionLong: StringAggExp1;
  descriptionShort: StringAggExp1;
  foundingDate: DateAggExp1;
  id: IntAggExp1;
  logo: StringAggExp1;
  name: StringAggExp1;
  profileSectorId: IntAggExp1;
  profileStatusId: IntAggExp1;
  profileTypeId: IntAggExp1;
  rootId: IntAggExp1;
  tagLine: StringAggExp1;
};

export type CProfileInfosBoolExp = {
  _and?: InputMaybe<Array<CProfileInfosBoolExp>>;
  _not?: InputMaybe<CProfileInfosBoolExp>;
  _or?: InputMaybe<Array<CProfileInfosBoolExp>>;
  descriptionLong?: InputMaybe<StringBoolExp1>;
  descriptionShort?: InputMaybe<StringBoolExp1>;
  foundingDate?: InputMaybe<DateBoolExp1>;
  id?: InputMaybe<IntBoolExp1>;
  logo?: InputMaybe<StringBoolExp1>;
  name?: InputMaybe<StringBoolExp1>;
  profileSector?: InputMaybe<CProfileSectorsBoolExp>;
  profileSectorId?: InputMaybe<IntBoolExp1>;
  profileStatus?: InputMaybe<CProfileStatusesBoolExp>;
  profileStatusId?: InputMaybe<IntBoolExp1>;
  profileType?: InputMaybe<CProfileTypesBoolExp>;
  profileTypeId?: InputMaybe<IntBoolExp1>;
  root?: InputMaybe<CRootsBoolExp>;
  rootId?: InputMaybe<IntBoolExp1>;
  tagLine?: InputMaybe<StringBoolExp1>;
  urls?: InputMaybe<ProfileInfoUrlsBoolExp>;
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
  ProfileInfosAggregate: CProfileInfosAggExp;
  definition: Scalars['String2']['output'];
  id: Scalars['Int2']['output'];
  name: Scalars['String2']['output'];
  profileInfos?: Maybe<Array<CProfileInfos>>;
};


export type CProfileSectorsProfileInfosAggregateArgs = {
  filter_input?: InputMaybe<CProfileInfosFilterInput>;
};


export type CProfileSectorsProfileInfosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CProfileInfosOrderBy>>;
  where?: InputMaybe<CProfileInfosBoolExp>;
};

export type CProfileSectorsAggExp = {
  __typename?: 'CProfileSectorsAggExp';
  _count: Scalars['Int']['output'];
  definition: StringAggExp1;
  id: IntAggExp1;
  name: StringAggExp1;
};

export type CProfileSectorsBoolExp = {
  _and?: InputMaybe<Array<CProfileSectorsBoolExp>>;
  _not?: InputMaybe<CProfileSectorsBoolExp>;
  _or?: InputMaybe<Array<CProfileSectorsBoolExp>>;
  definition?: InputMaybe<StringBoolExp1>;
  id?: InputMaybe<IntBoolExp1>;
  name?: InputMaybe<StringBoolExp1>;
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
  definition: Scalars['String2']['output'];
  id: Scalars['Int2']['output'];
  name: Scalars['String2']['output'];
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
  definition: StringAggExp1;
  id: IntAggExp1;
  name: StringAggExp1;
};

export type CProfileStatusesBoolExp = {
  _and?: InputMaybe<Array<CProfileStatusesBoolExp>>;
  _not?: InputMaybe<CProfileStatusesBoolExp>;
  _or?: InputMaybe<Array<CProfileStatusesBoolExp>>;
  definition?: InputMaybe<StringBoolExp1>;
  id?: InputMaybe<IntBoolExp1>;
  name?: InputMaybe<StringBoolExp1>;
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
  /**   */
  id: Scalars['Int2']['output'];
  root?: Maybe<CRoots>;
  /**   */
  rootId: Scalars['Int2']['output'];
  tag?: Maybe<CTags>;
  /**   */
  tagId: Scalars['Int2']['output'];
};

export type CProfileTagsAggExp = {
  __typename?: 'CProfileTagsAggExp';
  _count: Scalars['Int']['output'];
  id: IntAggExp1;
  rootId: IntAggExp1;
  tagId: IntAggExp1;
};

export type CProfileTagsBoolExp = {
  _and?: InputMaybe<Array<CProfileTagsBoolExp>>;
  _not?: InputMaybe<CProfileTagsBoolExp>;
  _or?: InputMaybe<Array<CProfileTagsBoolExp>>;
  id?: InputMaybe<IntBoolExp1>;
  root?: InputMaybe<CRootsBoolExp>;
  rootId?: InputMaybe<IntBoolExp1>;
  tag?: InputMaybe<CTagsBoolExp>;
  tagId?: InputMaybe<IntBoolExp1>;
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
  definition: Scalars['String2']['output'];
  id: Scalars['Int2']['output'];
  name: Scalars['String2']['output'];
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
  definition: StringAggExp1;
  id: IntAggExp1;
  name: StringAggExp1;
};

export type CProfileTypesBoolExp = {
  _and?: InputMaybe<Array<CProfileTypesBoolExp>>;
  _not?: InputMaybe<CProfileTypesBoolExp>;
  _or?: InputMaybe<Array<CProfileTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp1>;
  id?: InputMaybe<IntBoolExp1>;
  name?: InputMaybe<StringBoolExp1>;
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
  id: Scalars['Int2']['output'];
  products?: Maybe<Array<CProducts>>;
  productsAggregate: CProductsAggExp;
  profileInfos?: Maybe<Array<CProfileInfos>>;
  profileInfosAggregate: CProfileInfosAggExp;
  profileTags?: Maybe<Array<CProfileTags>>;
  profileTagsAggregate: CProfileTagsAggExp;
  slug: Scalars['String2']['output'];
  socials?: Maybe<Array<CSocials>>;
  socialsAggregate: CSocialsAggExp;
  urlMain: Scalars['String2']['output'];
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
  id: IntAggExp1;
  slug: StringAggExp1;
  urlMain: StringAggExp1;
};

export type CRootsBoolExp = {
  _and?: InputMaybe<Array<CRootsBoolExp>>;
  _not?: InputMaybe<CRootsBoolExp>;
  _or?: InputMaybe<Array<CRootsBoolExp>>;
  assets?: InputMaybe<CAssetsBoolExp>;
  entities?: InputMaybe<CEntitiesBoolExp>;
  id?: InputMaybe<IntBoolExp1>;
  products?: InputMaybe<CProductsBoolExp>;
  profileInfos?: InputMaybe<CProfileInfosBoolExp>;
  profileTags?: InputMaybe<CProfileTagsBoolExp>;
  slug?: InputMaybe<StringBoolExp1>;
  socials?: InputMaybe<CSocialsBoolExp>;
  urlMain?: InputMaybe<StringBoolExp1>;
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
  deployedOnId?: Maybe<Scalars['Int2']['output']>;
  deployedOnProduct?: Maybe<CProducts>;
  deploymentType?: Maybe<CDeploymentTypes>;
  deploymentTypeId: Scalars['Int2']['output'];
  id: Scalars['Int2']['output'];
  isOfStandardId?: Maybe<Scalars['Int2']['output']>;
  productDeployments?: Maybe<Array<CProductDeployments>>;
  productDeploymentsAggregate: CProductDeploymentsAggExp;
  smartContracts?: Maybe<Array<CSmartContracts>>;
  smartContractsAggregate: CSmartContractsAggExp;
};


export type CSmartContractDeploymentsAssetDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CAssetDeploymentsOrderBy>>;
  where?: InputMaybe<CAssetDeploymentsBoolExp>;
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
  deployedOnId: IntAggExp1;
  deploymentTypeId: IntAggExp1;
  id: IntAggExp1;
  isOfStandardId: IntAggExp1;
};

export type CSmartContractDeploymentsBoolExp = {
  _and?: InputMaybe<Array<CSmartContractDeploymentsBoolExp>>;
  _not?: InputMaybe<CSmartContractDeploymentsBoolExp>;
  _or?: InputMaybe<Array<CSmartContractDeploymentsBoolExp>>;
  assetDeployments?: InputMaybe<CAssetDeploymentsBoolExp>;
  assetStandard?: InputMaybe<CAssetStandardsBoolExp>;
  deployedOnId?: InputMaybe<IntBoolExp1>;
  deployedOnProduct?: InputMaybe<CProductsBoolExp>;
  deploymentType?: InputMaybe<CDeploymentTypesBoolExp>;
  deploymentTypeId?: InputMaybe<IntBoolExp1>;
  id?: InputMaybe<IntBoolExp1>;
  isOfStandardId?: InputMaybe<IntBoolExp1>;
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
  address: Scalars['String2']['output'];
  deploymentDate?: Maybe<Scalars['Date1']['output']>;
  deploymentId?: Maybe<Scalars['Int2']['output']>;
  id: Scalars['Int2']['output'];
  name: Scalars['String2']['output'];
  smartContractDeployment?: Maybe<CSmartContractDeployments>;
};

export type CSmartContractsAggExp = {
  __typename?: 'CSmartContractsAggExp';
  _count: Scalars['Int']['output'];
  address: StringAggExp1;
  deploymentDate: DateAggExp1;
  deploymentId: IntAggExp1;
  id: IntAggExp1;
  name: StringAggExp1;
};

export type CSmartContractsBoolExp = {
  _and?: InputMaybe<Array<CSmartContractsBoolExp>>;
  _not?: InputMaybe<CSmartContractsBoolExp>;
  _or?: InputMaybe<Array<CSmartContractsBoolExp>>;
  address?: InputMaybe<StringBoolExp1>;
  deploymentDate?: InputMaybe<DateBoolExp1>;
  deploymentId?: InputMaybe<IntBoolExp1>;
  id?: InputMaybe<IntBoolExp1>;
  name?: InputMaybe<StringBoolExp1>;
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
  definition: Scalars['String2']['output'];
  id: Scalars['Int2']['output'];
  name: Scalars['String2']['output'];
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
  definition: StringAggExp1;
  id: IntAggExp1;
  name: StringAggExp1;
};

export type CSocialTypesBoolExp = {
  _and?: InputMaybe<Array<CSocialTypesBoolExp>>;
  _not?: InputMaybe<CSocialTypesBoolExp>;
  _or?: InputMaybe<Array<CSocialTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp1>;
  id?: InputMaybe<IntBoolExp1>;
  name?: InputMaybe<StringBoolExp1>;
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
  id: Scalars['Int2']['output'];
  name: Scalars['String2']['output'];
  root?: Maybe<CRoots>;
  rootId: Scalars['Int2']['output'];
  socialType?: Maybe<CSocialTypes>;
  socialTypeId: Scalars['Int2']['output'];
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
  id: IntAggExp1;
  name: StringAggExp1;
  rootId: IntAggExp1;
  socialTypeId: IntAggExp1;
};

export type CSocialsBoolExp = {
  _and?: InputMaybe<Array<CSocialsBoolExp>>;
  _not?: InputMaybe<CSocialsBoolExp>;
  _or?: InputMaybe<Array<CSocialsBoolExp>>;
  id?: InputMaybe<IntBoolExp1>;
  name?: InputMaybe<StringBoolExp1>;
  root?: InputMaybe<CRootsBoolExp>;
  rootId?: InputMaybe<IntBoolExp1>;
  socialType?: InputMaybe<CSocialTypesBoolExp>;
  socialTypeId?: InputMaybe<IntBoolExp1>;
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
  /** Unique identifier for each support relationship */
  id: Scalars['Int2']['output'];
  product?: Maybe<CProducts>;
  /** Identifier of the product providing support */
  productId: Scalars['Int2']['output'];
  supportsProduct?: Maybe<CProducts>;
  /** Identifier of the product being supported */
  supportsProductId: Scalars['Int2']['output'];
};

export type CSupportsProductsAggExp = {
  __typename?: 'CSupportsProductsAggExp';
  _count: Scalars['Int']['output'];
  id: IntAggExp1;
  productId: IntAggExp1;
  supportsProductId: IntAggExp1;
};

export type CSupportsProductsBoolExp = {
  _and?: InputMaybe<Array<CSupportsProductsBoolExp>>;
  _not?: InputMaybe<CSupportsProductsBoolExp>;
  _or?: InputMaybe<Array<CSupportsProductsBoolExp>>;
  id?: InputMaybe<IntBoolExp1>;
  product?: InputMaybe<CProductsBoolExp>;
  productId?: InputMaybe<IntBoolExp1>;
  supportsProduct?: InputMaybe<CProductsBoolExp>;
  supportsProductId?: InputMaybe<IntBoolExp1>;
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
  definition: Scalars['String2']['output'];
  id: Scalars['Int2']['output'];
  name: Scalars['String2']['output'];
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
  definition: StringAggExp1;
  id: IntAggExp1;
  name: StringAggExp1;
};

export type CTagTypesBoolExp = {
  _and?: InputMaybe<Array<CTagTypesBoolExp>>;
  _not?: InputMaybe<CTagTypesBoolExp>;
  _or?: InputMaybe<Array<CTagTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp1>;
  id?: InputMaybe<IntBoolExp1>;
  name?: InputMaybe<StringBoolExp1>;
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
  description: Scalars['String2']['output'];
  id: Scalars['Int2']['output'];
  name: Scalars['String2']['output'];
  profileTags?: Maybe<Array<CProfileTags>>;
  profileTagsAggregate: CProfileTagsAggExp;
  tagType?: Maybe<CTagTypes>;
  tagTypeId: Scalars['Int2']['output'];
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
  description: StringAggExp1;
  id: IntAggExp1;
  name: StringAggExp1;
  tagTypeId: IntAggExp1;
};

export type CTagsBoolExp = {
  _and?: InputMaybe<Array<CTagsBoolExp>>;
  _not?: InputMaybe<CTagsBoolExp>;
  _or?: InputMaybe<Array<CTagsBoolExp>>;
  description?: InputMaybe<StringBoolExp1>;
  id?: InputMaybe<IntBoolExp1>;
  name?: InputMaybe<StringBoolExp1>;
  profileTags?: InputMaybe<CProfileTagsBoolExp>;
  tagType?: InputMaybe<CTagTypesBoolExp>;
  tagTypeId?: InputMaybe<IntBoolExp1>;
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
  definition: Scalars['String2']['output'];
  id: Scalars['Int2']['output'];
  name: Scalars['String2']['output'];
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
  definition: StringAggExp1;
  id: IntAggExp1;
  name: StringAggExp1;
};

export type CUrlTypesBoolExp = {
  _and?: InputMaybe<Array<CUrlTypesBoolExp>>;
  _not?: InputMaybe<CUrlTypesBoolExp>;
  _or?: InputMaybe<Array<CUrlTypesBoolExp>>;
  definition?: InputMaybe<StringBoolExp1>;
  id?: InputMaybe<IntBoolExp1>;
  name?: InputMaybe<StringBoolExp1>;
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
  id: Scalars['Int2']['output'];
  rowId: Scalars['Int2']['output'];
  tableId: Scalars['Int2']['output'];
  url: Scalars['String2']['output'];
  urlType?: Maybe<CUrlTypes>;
  urlTypeId: Scalars['Int2']['output'];
};

export type CUrlsAggExp = {
  __typename?: 'CUrlsAggExp';
  _count: Scalars['Int']['output'];
  id: IntAggExp1;
  rowId: IntAggExp1;
  tableId: IntAggExp1;
  url: StringAggExp1;
  urlTypeId: IntAggExp1;
};

export type CUrlsBoolExp = {
  _and?: InputMaybe<Array<CUrlsBoolExp>>;
  _not?: InputMaybe<CUrlsBoolExp>;
  _or?: InputMaybe<Array<CUrlsBoolExp>>;
  coreTableName?: InputMaybe<CCoreTableNamesBoolExp>;
  id?: InputMaybe<IntBoolExp1>;
  rowId?: InputMaybe<IntBoolExp1>;
  tableId?: InputMaybe<IntBoolExp1>;
  url?: InputMaybe<StringBoolExp1>;
  urlType?: InputMaybe<CUrlTypesBoolExp>;
  urlTypeId?: InputMaybe<IntBoolExp1>;
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

export type DateAggExp1 = {
  __typename?: 'DateAggExp1';
  _count: Scalars['Int']['output'];
  _count_distinct: Scalars['Int']['output'];
};

export type DateBoolExp1 = {
  _eq?: InputMaybe<Scalars['Date1']['input']>;
  _gt?: InputMaybe<Scalars['Date1']['input']>;
  _gte?: InputMaybe<Scalars['Date1']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Date1']['input']>;
  _lte?: InputMaybe<Scalars['Date1']['input']>;
};

export type EntityUrls = {
  __typename?: 'EntityUrls';
  id: Scalars['Int2']['output'];
  rowId: Scalars['Int2']['output'];
  tableId: Scalars['Int2']['output'];
  url: Scalars['String2']['output'];
  urlType?: Maybe<CUrlTypes>;
  urlTypeId: Scalars['Int2']['output'];
};

export type EntityUrlsBoolExp = {
  _and?: InputMaybe<Array<EntityUrlsBoolExp>>;
  _not?: InputMaybe<EntityUrlsBoolExp>;
  _or?: InputMaybe<Array<EntityUrlsBoolExp>>;
  id?: InputMaybe<IntBoolExp1>;
  rowId?: InputMaybe<IntBoolExp1>;
  tableId?: InputMaybe<IntBoolExp1>;
  url?: InputMaybe<StringBoolExp1>;
  urlType?: InputMaybe<CUrlTypesBoolExp>;
  urlTypeId?: InputMaybe<IntBoolExp1>;
};

export type EntityUrlsOrderBy = {
  id?: InputMaybe<OrderBy>;
  rowId?: InputMaybe<OrderBy>;
  tableId?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
  urlType?: InputMaybe<CUrlTypesOrderBy>;
  urlTypeId?: InputMaybe<OrderBy>;
};

export type IntAggExp1 = {
  __typename?: 'IntAggExp1';
  _count: Scalars['Int']['output'];
  _count_distinct: Scalars['Int']['output'];
  avg: Scalars['Float2']['output'];
  count: Scalars['Int2']['output'];
  max: Scalars['Int2']['output'];
  min: Scalars['Int2']['output'];
  stddev_pop: Scalars['Float2']['output'];
  stddev_samp: Scalars['Float2']['output'];
  sum: Scalars['Int2']['output'];
  var_pop: Scalars['Float2']['output'];
  var_samp: Scalars['Float2']['output'];
};

export type IntBoolExp1 = {
  _eq?: InputMaybe<Scalars['Int2']['input']>;
  _gt?: InputMaybe<Scalars['Int2']['input']>;
  _gte?: InputMaybe<Scalars['Int2']['input']>;
  _in?: InputMaybe<Array<Scalars['Int2']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int2']['input']>;
  _lte?: InputMaybe<Scalars['Int2']['input']>;
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
  id: Scalars['Int2']['output'];
  rowId: Scalars['Int2']['output'];
  tableId: Scalars['Int2']['output'];
  url: Scalars['String2']['output'];
  urlType?: Maybe<CUrlTypes>;
  urlTypeId: Scalars['Int2']['output'];
};

export type ProductUrlsBoolExp = {
  _and?: InputMaybe<Array<ProductUrlsBoolExp>>;
  _not?: InputMaybe<ProductUrlsBoolExp>;
  _or?: InputMaybe<Array<ProductUrlsBoolExp>>;
  id?: InputMaybe<IntBoolExp1>;
  rowId?: InputMaybe<IntBoolExp1>;
  tableId?: InputMaybe<IntBoolExp1>;
  url?: InputMaybe<StringBoolExp1>;
  urlType?: InputMaybe<CUrlTypesBoolExp>;
  urlTypeId?: InputMaybe<IntBoolExp1>;
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
  id: Scalars['Int2']['output'];
  rowId: Scalars['Int2']['output'];
  tableId: Scalars['Int2']['output'];
  url: Scalars['String2']['output'];
  urlType?: Maybe<CUrlTypes>;
  urlTypeId: Scalars['Int2']['output'];
};

export type ProfileInfoUrlsBoolExp = {
  _and?: InputMaybe<Array<ProfileInfoUrlsBoolExp>>;
  _not?: InputMaybe<ProfileInfoUrlsBoolExp>;
  _or?: InputMaybe<Array<ProfileInfoUrlsBoolExp>>;
  id?: InputMaybe<IntBoolExp1>;
  rowId?: InputMaybe<IntBoolExp1>;
  tableId?: InputMaybe<IntBoolExp1>;
  url?: InputMaybe<StringBoolExp1>;
  urlType?: InputMaybe<CUrlTypesBoolExp>;
  urlTypeId?: InputMaybe<IntBoolExp1>;
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
  urls?: Maybe<Array<CUrls>>;
  urlsAggregate?: Maybe<CUrlsAggExp>;
};


export type QueryAssetDeploymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CAssetDeploymentsOrderBy>>;
  where?: InputMaybe<CAssetDeploymentsBoolExp>;
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


export type QueryUrlsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CUrlsOrderBy>>;
  where?: InputMaybe<CUrlsBoolExp>;
};


export type QueryUrlsAggregateArgs = {
  filter_input?: InputMaybe<CUrlsFilterInput>;
};

export type SocialUrls = {
  __typename?: 'SocialUrls';
  id: Scalars['Int2']['output'];
  rowId: Scalars['Int2']['output'];
  tableId: Scalars['Int2']['output'];
  url: Scalars['String2']['output'];
  urlType?: Maybe<CUrlTypes>;
  urlTypeId: Scalars['Int2']['output'];
};

export type SocialUrlsBoolExp = {
  _and?: InputMaybe<Array<SocialUrlsBoolExp>>;
  _not?: InputMaybe<SocialUrlsBoolExp>;
  _or?: InputMaybe<Array<SocialUrlsBoolExp>>;
  id?: InputMaybe<IntBoolExp1>;
  rowId?: InputMaybe<IntBoolExp1>;
  tableId?: InputMaybe<IntBoolExp1>;
  url?: InputMaybe<StringBoolExp1>;
  urlType?: InputMaybe<CUrlTypesBoolExp>;
  urlTypeId?: InputMaybe<IntBoolExp1>;
};

export type SocialUrlsOrderBy = {
  id?: InputMaybe<OrderBy>;
  rowId?: InputMaybe<OrderBy>;
  tableId?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
  urlType?: InputMaybe<CUrlTypesOrderBy>;
  urlTypeId?: InputMaybe<OrderBy>;
};

export type StringAggExp1 = {
  __typename?: 'StringAggExp1';
  _count: Scalars['Int']['output'];
  _count_distinct: Scalars['Int']['output'];
  max: Scalars['String2']['output'];
  min: Scalars['String2']['output'];
};

export type StringBoolExp1 = {
  _contains?: InputMaybe<Scalars['String2']['input']>;
  _eq?: InputMaybe<Scalars['String2']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _like?: InputMaybe<Scalars['String2']['input']>;
};

export type ProfileFragmentFragment = { __typename?: 'CProfileInfos', profileSector?: { __typename?: 'CProfileSectors', name: string } | null, profileType?: { __typename?: 'CProfileTypes', name: string } | null, root?: { __typename?: 'CRoots', assets?: Array<{ __typename?: 'CAssets', ticker: string }> | null, profileTags?: Array<{ __typename?: 'CProfileTags', tag?: { __typename?: 'CTags', name: string, id: number } | null }> | null } | null, profileStatus?: { __typename?: 'CProfileStatuses', name: string, id: number } | null, mainProduct?: { __typename?: 'CRoots', products?: Array<{ __typename?: 'CProducts', productType?: { __typename?: 'CProductTypes', name: string } | null }> | null } | null } & { ' $fragmentName'?: 'ProfileFragmentFragment' };

export type ProfileHeadingFragmentFragment = { __typename?: 'CProfileInfos', logo: string, name: string, urls?: Array<{ __typename?: 'ProfileInfoUrls', url: string, urlType?: { __typename?: 'CUrlTypes', name: string } | null }> | null, root?: { __typename?: 'CRoots', socials?: Array<{ __typename?: 'CSocials', name: string, socialType?: { __typename?: 'CSocialTypes', name: string } | null, urls?: Array<{ __typename?: 'SocialUrls', url: string }> | null }> | null } | null } & { ' $fragmentName'?: 'ProfileHeadingFragmentFragment' };

export type GetProfileDataQueryVariables = Exact<{
  where?: InputMaybe<CProfileInfosBoolExp>;
}>;


export type GetProfileDataQuery = { __typename?: 'Query', profileInfos?: Array<(
    { __typename?: 'CProfileInfos', tagLine: string, descriptionShort: string, descriptionLong: string }
    & { ' $fragmentRefs'?: { 'ProfileFragmentFragment': ProfileFragmentFragment;'ProfileHeadingFragmentFragment': ProfileHeadingFragmentFragment } }
  )> | null };

export type AssetFieldsFragmentFragment = { __typename?: 'CRoots', assets?: Array<{ __typename?: 'CAssets', ticker: string, rootId: number, name: string, id: number, icon: string, description: string, assetTypeId: number, assetStatusId: number, assetType?: { __typename?: 'CAssetTypes', definition: string, id: number, name: string } | null, assetStatus?: { __typename?: 'CAssetStatuses', name: string, id: number, definition: string } | null, assetDeployments?: Array<{ __typename?: 'CAssetDeployments', id: number, deploymentId: number, assetId: number, smartContractDeployment?: { __typename?: 'CSmartContractDeployments', id: number, deployedOnProduct?: { __typename?: 'CProducts', id: number, name: string, root?: { __typename?: 'CRoots', slug: string } | null } | null, assetStandard?: { __typename?: 'CAssetStandards', id: number } | null, smartContracts?: Array<{ __typename?: 'CSmartContracts', name: string, id: number, deploymentId?: number | null, deploymentDate?: string | null, address: string }> | null, deploymentType?: { __typename?: 'CDeploymentTypes', name: string, id: number, definition: string } | null } | null }> | null, urls?: Array<{ __typename?: 'AssetUrls', url: string, urlType?: { __typename?: 'CUrlTypes', name: string, id: number, definition: string } | null }> | null }> | null } & { ' $fragmentName'?: 'AssetFieldsFragmentFragment' };

export type EntityFieldsFragmentFragment = { __typename?: 'CRoots', entities?: Array<{ __typename?: 'CEntities', name: string, tradeName: string, taxIdentificationNumber: string, localRegistrationNumber: string, leiNumber: string, id: number, dateOfIncorporation?: string | null, address: string, entityType?: { __typename?: 'CEntityTypes', name: string, id: number, definition: string } | null, country?: { __typename?: 'CCountries', name: string, id: number, code: string } | null, urls?: Array<{ __typename?: 'EntityUrls', url: string, urlType?: { __typename?: 'CUrlTypes', name: string, id: number, definition: string } | null }> | null }> | null } & { ' $fragmentName'?: 'EntityFieldsFragmentFragment' };

export type ProductFieldsFragmentFragment = { __typename?: 'CRoots', products?: Array<{ __typename?: 'CProducts', rootId: number, productTypeId: number, productStatusId: number, name: string, launchDate?: string | null, isMainProduct?: number | null, id: number, description: string, productType?: { __typename?: 'CProductTypes', name: string, id: number, definition: string } | null, productStatus?: { __typename?: 'CProductStatuses', name: string, id: number, definition: string } | null, productDeployments?: Array<{ __typename?: 'CProductDeployments', smartContractDeployment?: { __typename?: 'CSmartContractDeployments', isOfStandardId?: number | null, id: number, deployedOnProduct?: { __typename?: 'CProducts', id: number, name: string, root?: { __typename?: 'CRoots', slug: string } | null } | null, assetStandard?: { __typename?: 'CAssetStandards', id: number } | null, deploymentType?: { __typename?: 'CDeploymentTypes', name: string } | null, smartContracts?: Array<{ __typename?: 'CSmartContracts', name: string, id: number, deploymentDate?: string | null, address: string, deploymentId?: number | null }> | null } | null }> | null, supportsProducts?: Array<{ __typename?: 'CSupportsProducts', supportsProduct?: { __typename?: 'CProducts', name: string, id: number, root?: { __typename?: 'CRoots', slug: string } | null } | null }> | null, urls?: Array<{ __typename?: 'ProductUrls', url: string, urlType?: { __typename?: 'CUrlTypes', name: string, id: number, definition: string } | null }> | null }> | null } & { ' $fragmentName'?: 'ProductFieldsFragmentFragment' };

export type GetProfileQueryVariables = Exact<{
  where?: InputMaybe<CProfileInfosBoolExp>;
}>;


export type GetProfileQuery = { __typename?: 'Query', profileInfos?: Array<{ __typename?: 'CProfileInfos', tagLine: string, rootId: number, profileTypeId: number, profileStatusId: number, profileSectorId: number, name: string, logo: string, id: number, foundingDate?: string | null, descriptionShort: string, descriptionLong: string, profileSector?: { __typename?: 'CProfileSectors', name: string, id: number, definition: string } | null, profileStatus?: { __typename?: 'CProfileStatuses', name: string, id: number, definition: string } | null, profileType?: { __typename?: 'CProfileTypes', name: string, id: number, definition: string } | null, urls?: Array<{ __typename?: 'ProfileInfoUrls', url: string, urlType?: { __typename?: 'CUrlTypes', name: string, id: number, definition: string } | null }> | null, root?: (
      { __typename?: 'CRoots', urlMain: string, slug: string, socials?: Array<{ __typename?: 'CSocials', name: string, socialType?: { __typename?: 'CSocialTypes', name: string } | null, urls?: Array<{ __typename?: 'SocialUrls', url: string }> | null }> | null, profileTags?: Array<{ __typename?: 'CProfileTags', tag?: { __typename?: 'CTags', name: string, id: number } | null }> | null }
      & { ' $fragmentRefs'?: { 'AssetFieldsFragmentFragment': AssetFieldsFragmentFragment;'ProductFieldsFragmentFragment': ProductFieldsFragmentFragment;'EntityFieldsFragmentFragment': EntityFieldsFragmentFragment } }
    ) | null, mainProduct?: { __typename?: 'CRoots', products?: Array<{ __typename?: 'CProducts', name: string, productType?: { __typename?: 'CProductTypes', name: string } | null }> | null } | null }> | null };

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
export const AssetFieldsFragmentFragmentDoc = new TypedDocumentString(`
    fragment AssetFieldsFragment on CRoots {
  assets {
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
}
    `, {"fragmentName":"AssetFieldsFragment"}) as unknown as TypedDocumentString<AssetFieldsFragmentFragment, unknown>;
export const EntityFieldsFragmentFragmentDoc = new TypedDocumentString(`
    fragment EntityFieldsFragment on CRoots {
  entities {
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
}
    `, {"fragmentName":"EntityFieldsFragment"}) as unknown as TypedDocumentString<EntityFieldsFragmentFragment, unknown>;
export const ProductFieldsFragmentFragmentDoc = new TypedDocumentString(`
    fragment ProductFieldsFragment on CRoots {
  products {
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
  }
}
    `, {"fragmentName":"ProductFieldsFragment"}) as unknown as TypedDocumentString<ProductFieldsFragmentFragment, unknown>;
export const GetProfileDataDocument = new TypedDocumentString(`
    query getProfileData($where: CProfileInfosBoolExp) {
  profileInfos(limit: 1, offset: 0, where: $where) {
    tagLine
    descriptionShort
    descriptionLong
    ...ProfileFragment
    ...ProfileHeadingFragment
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
export const GetProfileDocument = new TypedDocumentString(`
    query getProfile($where: CProfileInfosBoolExp) {
  profileInfos(limit: 1, offset: 0, where: $where) {
    tagLine
    rootId
    profileTypeId
    profileStatusId
    profileSectorId
    name
    logo
    id
    foundingDate
    descriptionShort
    descriptionLong
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
    root {
      urlMain
      slug
      socials {
        name
        socialType {
          name
        }
        urls(order_by: {urlTypeId: Asc}) {
          url
        }
      }
      ...AssetFieldsFragment
      ...ProductFieldsFragment
      ...EntityFieldsFragment
      profileTags {
        tag {
          name
          id
        }
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
  }
}
    fragment AssetFieldsFragment on CRoots {
  assets {
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
}
fragment EntityFieldsFragment on CRoots {
  entities {
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
}
fragment ProductFieldsFragment on CRoots {
  products {
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
  }
}`) as unknown as TypedDocumentString<GetProfileQuery, GetProfileQueryVariables>;