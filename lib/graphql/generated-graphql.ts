import {
  useQuery,
  useInfiniteQuery,
  UseQueryOptions,
  UseInfiniteQueryOptions,
  InfiniteData
} from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(
      'https://maximum-grackle-73.hasura.app/v1/graphql',
      {
        method: 'POST',
        body: JSON.stringify({ query, variables })
      }
    );

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  date: { input: any; output: any };
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Mysql8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Mysql8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  contains?: InputMaybe<Scalars['String']['input']>;
};

export type AssetStandardSupport = {
  __typename?: 'assetStandardSupport';
  /** An array relationship */
  assets: Array<Assets>;
  definition: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type AssetStandardSupportAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assets_Order_By>>;
  where?: InputMaybe<Assets_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "assetStandardSupport". All fields are combined with a logical 'AND'. */
export type AssetStandardSupport_Bool_Exp = {
  _and?: InputMaybe<Array<AssetStandardSupport_Bool_Exp>>;
  _not?: InputMaybe<AssetStandardSupport_Bool_Exp>;
  _or?: InputMaybe<Array<AssetStandardSupport_Bool_Exp>>;
  assets?: InputMaybe<Assets_Bool_Exp>;
  definition?: InputMaybe<String_Mysql8_Comparison_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  name?: InputMaybe<String_Mysql8_Comparison_Exp>;
};

/** Ordering options when selecting data from "assetStandardSupport". */
export type AssetStandardSupport_Order_By = {
  assets_aggregate?: InputMaybe<Assets_Aggregate_Order_By>;
  definition?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
};

export type AssetType = {
  __typename?: 'assetType';
  /** An array relationship */
  assetType: Array<Assets>;
  definition: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type AssetTypeAssetTypeArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assets_Order_By>>;
  where?: InputMaybe<Assets_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "assetType". All fields are combined with a logical 'AND'. */
export type AssetType_Bool_Exp = {
  _and?: InputMaybe<Array<AssetType_Bool_Exp>>;
  _not?: InputMaybe<AssetType_Bool_Exp>;
  _or?: InputMaybe<Array<AssetType_Bool_Exp>>;
  assetType?: InputMaybe<Assets_Bool_Exp>;
  definition?: InputMaybe<String_Mysql8_Comparison_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  name?: InputMaybe<String_Mysql8_Comparison_Exp>;
};

/** Ordering options when selecting data from "assetType". */
export type AssetType_Order_By = {
  assetType_aggregate?: InputMaybe<Assets_Aggregate_Order_By>;
  definition?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
};

export type Assets = {
  __typename?: 'assets';
  address: Scalars['String']['output'];
  /** An object relationship */
  assetDeployedOnProductId?: Maybe<Products>;
  assetStandardId?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  assetStandardSupport?: Maybe<AssetStandardSupport>;
  /** An object relationship */
  assetType?: Maybe<AssetType>;
  assetTypeId?: Maybe<Scalars['Int']['output']>;
  deployedOnProductId?: Maybe<Scalars['Int']['output']>;
  icon: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  products: Array<Products>;
  /** An object relationship */
  profile: Profiles;
  profileId: Scalars['Int']['output'];
  shortDescription: Scalars['String']['output'];
  ticker: Scalars['String']['output'];
  urlToAssetDocs: Scalars['String']['output'];
};

export type AssetsProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** order by aggregate values of table "assets" */
export type Assets_Aggregate_Order_By = {
  avg?: InputMaybe<Assets_Avg_Order_By>;
  count?: InputMaybe<Mysql8_Order_By>;
  max?: InputMaybe<Assets_Max_Order_By>;
  min?: InputMaybe<Assets_Min_Order_By>;
  stddev_pop?: InputMaybe<Assets_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Assets_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Assets_Sum_Order_By>;
  var_pop?: InputMaybe<Assets_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Assets_Var_Samp_Order_By>;
};

/** order by avg() on columns of table "assets" */
export type Assets_Avg_Order_By = {
  assetStandardId?: InputMaybe<Mysql8_Order_By>;
  assetTypeId?: InputMaybe<Mysql8_Order_By>;
  deployedOnProductId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
};

/** Boolean expression to filter rows from the table "assets". All fields are combined with a logical 'AND'. */
export type Assets_Bool_Exp = {
  _and?: InputMaybe<Array<Assets_Bool_Exp>>;
  _not?: InputMaybe<Assets_Bool_Exp>;
  _or?: InputMaybe<Array<Assets_Bool_Exp>>;
  address?: InputMaybe<String_Mysql8_Comparison_Exp>;
  assetDeployedOnProductId?: InputMaybe<Products_Bool_Exp>;
  assetStandardId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  assetStandardSupport?: InputMaybe<AssetStandardSupport_Bool_Exp>;
  assetType?: InputMaybe<AssetType_Bool_Exp>;
  assetTypeId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  deployedOnProductId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  icon?: InputMaybe<String_Mysql8_Comparison_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  name?: InputMaybe<String_Mysql8_Comparison_Exp>;
  products?: InputMaybe<Products_Bool_Exp>;
  profile?: InputMaybe<Profiles_Bool_Exp>;
  profileId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  shortDescription?: InputMaybe<String_Mysql8_Comparison_Exp>;
  ticker?: InputMaybe<String_Mysql8_Comparison_Exp>;
  urlToAssetDocs?: InputMaybe<String_Mysql8_Comparison_Exp>;
};

/** order by max() on columns of table "assets" */
export type Assets_Max_Order_By = {
  address?: InputMaybe<Mysql8_Order_By>;
  assetStandardId?: InputMaybe<Mysql8_Order_By>;
  assetTypeId?: InputMaybe<Mysql8_Order_By>;
  deployedOnProductId?: InputMaybe<Mysql8_Order_By>;
  icon?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
  shortDescription?: InputMaybe<Mysql8_Order_By>;
  ticker?: InputMaybe<Mysql8_Order_By>;
  urlToAssetDocs?: InputMaybe<Mysql8_Order_By>;
};

/** order by min() on columns of table "assets" */
export type Assets_Min_Order_By = {
  address?: InputMaybe<Mysql8_Order_By>;
  assetStandardId?: InputMaybe<Mysql8_Order_By>;
  assetTypeId?: InputMaybe<Mysql8_Order_By>;
  deployedOnProductId?: InputMaybe<Mysql8_Order_By>;
  icon?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
  shortDescription?: InputMaybe<Mysql8_Order_By>;
  ticker?: InputMaybe<Mysql8_Order_By>;
  urlToAssetDocs?: InputMaybe<Mysql8_Order_By>;
};

/** Ordering options when selecting data from "assets". */
export type Assets_Order_By = {
  address?: InputMaybe<Mysql8_Order_By>;
  assetDeployedOnProductId?: InputMaybe<Products_Order_By>;
  assetStandardId?: InputMaybe<Mysql8_Order_By>;
  assetStandardSupport?: InputMaybe<AssetStandardSupport_Order_By>;
  assetType?: InputMaybe<AssetType_Order_By>;
  assetTypeId?: InputMaybe<Mysql8_Order_By>;
  deployedOnProductId?: InputMaybe<Mysql8_Order_By>;
  icon?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
  products_aggregate?: InputMaybe<Products_Aggregate_Order_By>;
  profile?: InputMaybe<Profiles_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
  shortDescription?: InputMaybe<Mysql8_Order_By>;
  ticker?: InputMaybe<Mysql8_Order_By>;
  urlToAssetDocs?: InputMaybe<Mysql8_Order_By>;
};

/** order by stddev_pop() on columns of table "assets" */
export type Assets_Stddev_Pop_Order_By = {
  assetStandardId?: InputMaybe<Mysql8_Order_By>;
  assetTypeId?: InputMaybe<Mysql8_Order_By>;
  deployedOnProductId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
};

/** order by stddev_samp() on columns of table "assets" */
export type Assets_Stddev_Samp_Order_By = {
  assetStandardId?: InputMaybe<Mysql8_Order_By>;
  assetTypeId?: InputMaybe<Mysql8_Order_By>;
  deployedOnProductId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
};

/** order by sum() on columns of table "assets" */
export type Assets_Sum_Order_By = {
  assetStandardId?: InputMaybe<Mysql8_Order_By>;
  assetTypeId?: InputMaybe<Mysql8_Order_By>;
  deployedOnProductId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
};

/** order by var_pop() on columns of table "assets" */
export type Assets_Var_Pop_Order_By = {
  assetStandardId?: InputMaybe<Mysql8_Order_By>;
  assetTypeId?: InputMaybe<Mysql8_Order_By>;
  deployedOnProductId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
};

/** order by var_samp() on columns of table "assets" */
export type Assets_Var_Samp_Order_By = {
  assetStandardId?: InputMaybe<Mysql8_Order_By>;
  assetTypeId?: InputMaybe<Mysql8_Order_By>;
  deployedOnProductId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
};

export type Countries = {
  __typename?: 'countries';
  code: Scalars['String']['output'];
  /** An array relationship */
  entities: Array<Entities>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type CountriesEntitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entities_Order_By>>;
  where?: InputMaybe<Entities_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "countries". All fields are combined with a logical 'AND'. */
export type Countries_Bool_Exp = {
  _and?: InputMaybe<Array<Countries_Bool_Exp>>;
  _not?: InputMaybe<Countries_Bool_Exp>;
  _or?: InputMaybe<Array<Countries_Bool_Exp>>;
  code?: InputMaybe<String_Mysql8_Comparison_Exp>;
  entities?: InputMaybe<Entities_Bool_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  name?: InputMaybe<String_Mysql8_Comparison_Exp>;
};

/** Ordering options when selecting data from "countries". */
export type Countries_Order_By = {
  code?: InputMaybe<Mysql8_Order_By>;
  entities_aggregate?: InputMaybe<Entities_Aggregate_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Mysql8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

export type Entities = {
  __typename?: 'entities';
  address: Scalars['String']['output'];
  /** An object relationship */
  country: Countries;
  countryId: Scalars['Int']['output'];
  dateOfIncorporation?: Maybe<Scalars['date']['output']>;
  /** An array relationship */
  entities: Array<Entities>;
  /** An object relationship */
  entity?: Maybe<Entities>;
  /** An object relationship */
  entityType?: Maybe<EntityTypes>;
  entityTypeId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  leiNumber: Scalars['String']['output'];
  localRegistrationNumber: Scalars['String']['output'];
  name: Scalars['String']['output'];
  parentEntityId?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  profile: Profiles;
  profileId: Scalars['Int']['output'];
  taxIdentificationNumber: Scalars['String']['output'];
  tradeName: Scalars['String']['output'];
  urlToEntity: Scalars['String']['output'];
};

export type EntitiesEntitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entities_Order_By>>;
  where?: InputMaybe<Entities_Bool_Exp>;
};

/** order by aggregate values of table "entities" */
export type Entities_Aggregate_Order_By = {
  avg?: InputMaybe<Entities_Avg_Order_By>;
  count?: InputMaybe<Mysql8_Order_By>;
  max?: InputMaybe<Entities_Max_Order_By>;
  min?: InputMaybe<Entities_Min_Order_By>;
  stddev_pop?: InputMaybe<Entities_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Entities_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Entities_Sum_Order_By>;
  var_pop?: InputMaybe<Entities_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Entities_Var_Samp_Order_By>;
};

/** order by avg() on columns of table "entities" */
export type Entities_Avg_Order_By = {
  countryId?: InputMaybe<Mysql8_Order_By>;
  entityTypeId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  parentEntityId?: InputMaybe<Mysql8_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
};

/** Boolean expression to filter rows from the table "entities". All fields are combined with a logical 'AND'. */
export type Entities_Bool_Exp = {
  _and?: InputMaybe<Array<Entities_Bool_Exp>>;
  _not?: InputMaybe<Entities_Bool_Exp>;
  _or?: InputMaybe<Array<Entities_Bool_Exp>>;
  address?: InputMaybe<String_Mysql8_Comparison_Exp>;
  country?: InputMaybe<Countries_Bool_Exp>;
  countryId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  dateOfIncorporation?: InputMaybe<Date_Mysql8_Comparison_Exp>;
  entities?: InputMaybe<Entities_Bool_Exp>;
  entity?: InputMaybe<Entities_Bool_Exp>;
  entityType?: InputMaybe<EntityTypes_Bool_Exp>;
  entityTypeId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  leiNumber?: InputMaybe<String_Mysql8_Comparison_Exp>;
  localRegistrationNumber?: InputMaybe<String_Mysql8_Comparison_Exp>;
  name?: InputMaybe<String_Mysql8_Comparison_Exp>;
  parentEntityId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  profile?: InputMaybe<Profiles_Bool_Exp>;
  profileId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  taxIdentificationNumber?: InputMaybe<String_Mysql8_Comparison_Exp>;
  tradeName?: InputMaybe<String_Mysql8_Comparison_Exp>;
  urlToEntity?: InputMaybe<String_Mysql8_Comparison_Exp>;
};

/** order by max() on columns of table "entities" */
export type Entities_Max_Order_By = {
  address?: InputMaybe<Mysql8_Order_By>;
  countryId?: InputMaybe<Mysql8_Order_By>;
  entityTypeId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  leiNumber?: InputMaybe<Mysql8_Order_By>;
  localRegistrationNumber?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
  parentEntityId?: InputMaybe<Mysql8_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
  taxIdentificationNumber?: InputMaybe<Mysql8_Order_By>;
  tradeName?: InputMaybe<Mysql8_Order_By>;
  urlToEntity?: InputMaybe<Mysql8_Order_By>;
};

/** order by min() on columns of table "entities" */
export type Entities_Min_Order_By = {
  address?: InputMaybe<Mysql8_Order_By>;
  countryId?: InputMaybe<Mysql8_Order_By>;
  entityTypeId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  leiNumber?: InputMaybe<Mysql8_Order_By>;
  localRegistrationNumber?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
  parentEntityId?: InputMaybe<Mysql8_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
  taxIdentificationNumber?: InputMaybe<Mysql8_Order_By>;
  tradeName?: InputMaybe<Mysql8_Order_By>;
  urlToEntity?: InputMaybe<Mysql8_Order_By>;
};

/** Ordering options when selecting data from "entities". */
export type Entities_Order_By = {
  address?: InputMaybe<Mysql8_Order_By>;
  country?: InputMaybe<Countries_Order_By>;
  countryId?: InputMaybe<Mysql8_Order_By>;
  dateOfIncorporation?: InputMaybe<Mysql8_Order_By>;
  entities_aggregate?: InputMaybe<Entities_Aggregate_Order_By>;
  entity?: InputMaybe<Entities_Order_By>;
  entityType?: InputMaybe<EntityTypes_Order_By>;
  entityTypeId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  leiNumber?: InputMaybe<Mysql8_Order_By>;
  localRegistrationNumber?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
  parentEntityId?: InputMaybe<Mysql8_Order_By>;
  profile?: InputMaybe<Profiles_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
  taxIdentificationNumber?: InputMaybe<Mysql8_Order_By>;
  tradeName?: InputMaybe<Mysql8_Order_By>;
  urlToEntity?: InputMaybe<Mysql8_Order_By>;
};

/** order by stddev_pop() on columns of table "entities" */
export type Entities_Stddev_Pop_Order_By = {
  countryId?: InputMaybe<Mysql8_Order_By>;
  entityTypeId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  parentEntityId?: InputMaybe<Mysql8_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
};

/** order by stddev_samp() on columns of table "entities" */
export type Entities_Stddev_Samp_Order_By = {
  countryId?: InputMaybe<Mysql8_Order_By>;
  entityTypeId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  parentEntityId?: InputMaybe<Mysql8_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
};

/** order by sum() on columns of table "entities" */
export type Entities_Sum_Order_By = {
  countryId?: InputMaybe<Mysql8_Order_By>;
  entityTypeId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  parentEntityId?: InputMaybe<Mysql8_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
};

/** order by var_pop() on columns of table "entities" */
export type Entities_Var_Pop_Order_By = {
  countryId?: InputMaybe<Mysql8_Order_By>;
  entityTypeId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  parentEntityId?: InputMaybe<Mysql8_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
};

/** order by var_samp() on columns of table "entities" */
export type Entities_Var_Samp_Order_By = {
  countryId?: InputMaybe<Mysql8_Order_By>;
  entityTypeId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  parentEntityId?: InputMaybe<Mysql8_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
};

export type EntityTypes = {
  __typename?: 'entityTypes';
  definition: Scalars['String']['output'];
  /** An array relationship */
  entities: Array<Entities>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type EntityTypesEntitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entities_Order_By>>;
  where?: InputMaybe<Entities_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "entityTypes". All fields are combined with a logical 'AND'. */
export type EntityTypes_Bool_Exp = {
  _and?: InputMaybe<Array<EntityTypes_Bool_Exp>>;
  _not?: InputMaybe<EntityTypes_Bool_Exp>;
  _or?: InputMaybe<Array<EntityTypes_Bool_Exp>>;
  definition?: InputMaybe<String_Mysql8_Comparison_Exp>;
  entities?: InputMaybe<Entities_Bool_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  name?: InputMaybe<String_Mysql8_Comparison_Exp>;
};

/** Ordering options when selecting data from "entityTypes". */
export type EntityTypes_Order_By = {
  definition?: InputMaybe<Mysql8_Order_By>;
  entities_aggregate?: InputMaybe<Entities_Aggregate_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
};

/** column ordering options */
export enum Mysql8_Order_By {
  /** in ascending order */
  Asc = 'asc',
  /** in descending order */
  Desc = 'desc'
}

export type ProductStatus = {
  __typename?: 'productStatus';
  definition: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  products: Array<Products>;
};

export type ProductStatusProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "productStatus". All fields are combined with a logical 'AND'. */
export type ProductStatus_Bool_Exp = {
  _and?: InputMaybe<Array<ProductStatus_Bool_Exp>>;
  _not?: InputMaybe<ProductStatus_Bool_Exp>;
  _or?: InputMaybe<Array<ProductStatus_Bool_Exp>>;
  definition?: InputMaybe<String_Mysql8_Comparison_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  name?: InputMaybe<String_Mysql8_Comparison_Exp>;
  products?: InputMaybe<Products_Bool_Exp>;
};

/** Ordering options when selecting data from "productStatus". */
export type ProductStatus_Order_By = {
  definition?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
  products_aggregate?: InputMaybe<Products_Aggregate_Order_By>;
};

/** Table mapping product support relationships */
export type ProductSupports = {
  __typename?: 'productSupports';
  /** Unique identifier for each support relationship */
  id: Scalars['Int']['output'];
  /** An object relationship */
  product: Products;
  /** Identifier of the product providing support */
  productId: Scalars['Int']['output'];
  /** An object relationship */
  supports: Products;
  /** Identifier of the product being supported */
  supportsProductId: Scalars['Int']['output'];
};

/** order by aggregate values of table "productSupports" */
export type ProductSupports_Aggregate_Order_By = {
  avg?: InputMaybe<ProductSupports_Avg_Order_By>;
  count?: InputMaybe<Mysql8_Order_By>;
  max?: InputMaybe<ProductSupports_Max_Order_By>;
  min?: InputMaybe<ProductSupports_Min_Order_By>;
  stddev_pop?: InputMaybe<ProductSupports_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<ProductSupports_Stddev_Samp_Order_By>;
  sum?: InputMaybe<ProductSupports_Sum_Order_By>;
  var_pop?: InputMaybe<ProductSupports_Var_Pop_Order_By>;
  var_samp?: InputMaybe<ProductSupports_Var_Samp_Order_By>;
};

/** order by avg() on columns of table "productSupports" */
export type ProductSupports_Avg_Order_By = {
  /** Unique identifier for each support relationship */
  id?: InputMaybe<Mysql8_Order_By>;
  /** Identifier of the product providing support */
  productId?: InputMaybe<Mysql8_Order_By>;
  /** Identifier of the product being supported */
  supportsProductId?: InputMaybe<Mysql8_Order_By>;
};

/** Boolean expression to filter rows from the table "productSupports". All fields are combined with a logical 'AND'. */
export type ProductSupports_Bool_Exp = {
  _and?: InputMaybe<Array<ProductSupports_Bool_Exp>>;
  _not?: InputMaybe<ProductSupports_Bool_Exp>;
  _or?: InputMaybe<Array<ProductSupports_Bool_Exp>>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  product?: InputMaybe<Products_Bool_Exp>;
  productId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  supports?: InputMaybe<Products_Bool_Exp>;
  supportsProductId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
};

/** order by max() on columns of table "productSupports" */
export type ProductSupports_Max_Order_By = {
  /** Unique identifier for each support relationship */
  id?: InputMaybe<Mysql8_Order_By>;
  /** Identifier of the product providing support */
  productId?: InputMaybe<Mysql8_Order_By>;
  /** Identifier of the product being supported */
  supportsProductId?: InputMaybe<Mysql8_Order_By>;
};

/** order by min() on columns of table "productSupports" */
export type ProductSupports_Min_Order_By = {
  /** Unique identifier for each support relationship */
  id?: InputMaybe<Mysql8_Order_By>;
  /** Identifier of the product providing support */
  productId?: InputMaybe<Mysql8_Order_By>;
  /** Identifier of the product being supported */
  supportsProductId?: InputMaybe<Mysql8_Order_By>;
};

/** Ordering options when selecting data from "productSupports". */
export type ProductSupports_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  product?: InputMaybe<Products_Order_By>;
  productId?: InputMaybe<Mysql8_Order_By>;
  supports?: InputMaybe<Products_Order_By>;
  supportsProductId?: InputMaybe<Mysql8_Order_By>;
};

/** order by stddev_pop() on columns of table "productSupports" */
export type ProductSupports_Stddev_Pop_Order_By = {
  /** Unique identifier for each support relationship */
  id?: InputMaybe<Mysql8_Order_By>;
  /** Identifier of the product providing support */
  productId?: InputMaybe<Mysql8_Order_By>;
  /** Identifier of the product being supported */
  supportsProductId?: InputMaybe<Mysql8_Order_By>;
};

/** order by stddev_samp() on columns of table "productSupports" */
export type ProductSupports_Stddev_Samp_Order_By = {
  /** Unique identifier for each support relationship */
  id?: InputMaybe<Mysql8_Order_By>;
  /** Identifier of the product providing support */
  productId?: InputMaybe<Mysql8_Order_By>;
  /** Identifier of the product being supported */
  supportsProductId?: InputMaybe<Mysql8_Order_By>;
};

/** order by sum() on columns of table "productSupports" */
export type ProductSupports_Sum_Order_By = {
  /** Unique identifier for each support relationship */
  id?: InputMaybe<Mysql8_Order_By>;
  /** Identifier of the product providing support */
  productId?: InputMaybe<Mysql8_Order_By>;
  /** Identifier of the product being supported */
  supportsProductId?: InputMaybe<Mysql8_Order_By>;
};

/** order by var_pop() on columns of table "productSupports" */
export type ProductSupports_Var_Pop_Order_By = {
  /** Unique identifier for each support relationship */
  id?: InputMaybe<Mysql8_Order_By>;
  /** Identifier of the product providing support */
  productId?: InputMaybe<Mysql8_Order_By>;
  /** Identifier of the product being supported */
  supportsProductId?: InputMaybe<Mysql8_Order_By>;
};

/** order by var_samp() on columns of table "productSupports" */
export type ProductSupports_Var_Samp_Order_By = {
  /** Unique identifier for each support relationship */
  id?: InputMaybe<Mysql8_Order_By>;
  /** Identifier of the product providing support */
  productId?: InputMaybe<Mysql8_Order_By>;
  /** Identifier of the product being supported */
  supportsProductId?: InputMaybe<Mysql8_Order_By>;
};

export type ProductTypes = {
  __typename?: 'productTypes';
  definition: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  products: Array<Products>;
};

export type ProductTypesProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "productTypes". All fields are combined with a logical 'AND'. */
export type ProductTypes_Bool_Exp = {
  _and?: InputMaybe<Array<ProductTypes_Bool_Exp>>;
  _not?: InputMaybe<ProductTypes_Bool_Exp>;
  _or?: InputMaybe<Array<ProductTypes_Bool_Exp>>;
  definition?: InputMaybe<String_Mysql8_Comparison_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  name?: InputMaybe<String_Mysql8_Comparison_Exp>;
  products?: InputMaybe<Products_Bool_Exp>;
};

/** Ordering options when selecting data from "productTypes". */
export type ProductTypes_Order_By = {
  definition?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
  products_aggregate?: InputMaybe<Products_Aggregate_Order_By>;
};

export type Products = {
  __typename?: 'products';
  /** An object relationship */
  asset?: Maybe<Assets>;
  /** An array relationship */
  assetDeployedOnProduct: Array<Assets>;
  deployedOnProductId?: Maybe<Scalars['Int']['output']>;
  descriptionShort: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isMainProduct: Scalars['Int']['output'];
  launchDate?: Maybe<Scalars['date']['output']>;
  /** An object relationship */
  mainAsset?: Maybe<Assets>;
  mainAssetId?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  /** An object relationship */
  product?: Maybe<Products>;
  productAddress: Scalars['String']['output'];
  /** An object relationship */
  productDeployedOnProduct?: Maybe<Products>;
  /** An object relationship */
  productStatus?: Maybe<ProductStatus>;
  productStatusId?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  productType?: Maybe<ProductTypes>;
  productTypeId?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  products: Array<Products>;
  /** An object relationship */
  profile: Profiles;
  profileId: Scalars['Int']['output'];
  /** An array relationship */
  supportedByProducts: Array<ProductSupports>;
  /** An array relationship */
  supportsProducts: Array<ProductSupports>;
  urlToProduct: Scalars['String']['output'];
};

export type ProductsAssetDeployedOnProductArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assets_Order_By>>;
  where?: InputMaybe<Assets_Bool_Exp>;
};

export type ProductsProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

export type ProductsSupportedByProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductSupports_Order_By>>;
  where?: InputMaybe<ProductSupports_Bool_Exp>;
};

export type ProductsSupportsProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductSupports_Order_By>>;
  where?: InputMaybe<ProductSupports_Bool_Exp>;
};

/** order by aggregate values of table "products" */
export type Products_Aggregate_Order_By = {
  avg?: InputMaybe<Products_Avg_Order_By>;
  count?: InputMaybe<Mysql8_Order_By>;
  max?: InputMaybe<Products_Max_Order_By>;
  min?: InputMaybe<Products_Min_Order_By>;
  stddev_pop?: InputMaybe<Products_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Products_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Products_Sum_Order_By>;
  var_pop?: InputMaybe<Products_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Products_Var_Samp_Order_By>;
};

/** order by avg() on columns of table "products" */
export type Products_Avg_Order_By = {
  deployedOnProductId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  isMainProduct?: InputMaybe<Mysql8_Order_By>;
  mainAssetId?: InputMaybe<Mysql8_Order_By>;
  productStatusId?: InputMaybe<Mysql8_Order_By>;
  productTypeId?: InputMaybe<Mysql8_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: InputMaybe<Array<Products_Bool_Exp>>;
  _not?: InputMaybe<Products_Bool_Exp>;
  _or?: InputMaybe<Array<Products_Bool_Exp>>;
  asset?: InputMaybe<Assets_Bool_Exp>;
  assetDeployedOnProduct?: InputMaybe<Assets_Bool_Exp>;
  deployedOnProductId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  descriptionShort?: InputMaybe<String_Mysql8_Comparison_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  isMainProduct?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  launchDate?: InputMaybe<Date_Mysql8_Comparison_Exp>;
  mainAsset?: InputMaybe<Assets_Bool_Exp>;
  mainAssetId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  name?: InputMaybe<String_Mysql8_Comparison_Exp>;
  product?: InputMaybe<Products_Bool_Exp>;
  productAddress?: InputMaybe<String_Mysql8_Comparison_Exp>;
  productDeployedOnProduct?: InputMaybe<Products_Bool_Exp>;
  productStatus?: InputMaybe<ProductStatus_Bool_Exp>;
  productStatusId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  productType?: InputMaybe<ProductTypes_Bool_Exp>;
  productTypeId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  products?: InputMaybe<Products_Bool_Exp>;
  profile?: InputMaybe<Profiles_Bool_Exp>;
  profileId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  supportedByProducts?: InputMaybe<ProductSupports_Bool_Exp>;
  supportsProducts?: InputMaybe<ProductSupports_Bool_Exp>;
  urlToProduct?: InputMaybe<String_Mysql8_Comparison_Exp>;
};

/** order by max() on columns of table "products" */
export type Products_Max_Order_By = {
  deployedOnProductId?: InputMaybe<Mysql8_Order_By>;
  descriptionShort?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  isMainProduct?: InputMaybe<Mysql8_Order_By>;
  mainAssetId?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
  productAddress?: InputMaybe<Mysql8_Order_By>;
  productStatusId?: InputMaybe<Mysql8_Order_By>;
  productTypeId?: InputMaybe<Mysql8_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
  urlToProduct?: InputMaybe<Mysql8_Order_By>;
};

/** order by min() on columns of table "products" */
export type Products_Min_Order_By = {
  deployedOnProductId?: InputMaybe<Mysql8_Order_By>;
  descriptionShort?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  isMainProduct?: InputMaybe<Mysql8_Order_By>;
  mainAssetId?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
  productAddress?: InputMaybe<Mysql8_Order_By>;
  productStatusId?: InputMaybe<Mysql8_Order_By>;
  productTypeId?: InputMaybe<Mysql8_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
  urlToProduct?: InputMaybe<Mysql8_Order_By>;
};

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  asset?: InputMaybe<Assets_Order_By>;
  assetDeployedOnProduct_aggregate?: InputMaybe<Assets_Aggregate_Order_By>;
  deployedOnProductId?: InputMaybe<Mysql8_Order_By>;
  descriptionShort?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  isMainProduct?: InputMaybe<Mysql8_Order_By>;
  launchDate?: InputMaybe<Mysql8_Order_By>;
  mainAsset?: InputMaybe<Assets_Order_By>;
  mainAssetId?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
  product?: InputMaybe<Products_Order_By>;
  productAddress?: InputMaybe<Mysql8_Order_By>;
  productDeployedOnProduct?: InputMaybe<Products_Order_By>;
  productStatus?: InputMaybe<ProductStatus_Order_By>;
  productStatusId?: InputMaybe<Mysql8_Order_By>;
  productType?: InputMaybe<ProductTypes_Order_By>;
  productTypeId?: InputMaybe<Mysql8_Order_By>;
  products_aggregate?: InputMaybe<Products_Aggregate_Order_By>;
  profile?: InputMaybe<Profiles_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
  supportedByProducts_aggregate?: InputMaybe<ProductSupports_Aggregate_Order_By>;
  supportsProducts_aggregate?: InputMaybe<ProductSupports_Aggregate_Order_By>;
  urlToProduct?: InputMaybe<Mysql8_Order_By>;
};

/** order by stddev_pop() on columns of table "products" */
export type Products_Stddev_Pop_Order_By = {
  deployedOnProductId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  isMainProduct?: InputMaybe<Mysql8_Order_By>;
  mainAssetId?: InputMaybe<Mysql8_Order_By>;
  productStatusId?: InputMaybe<Mysql8_Order_By>;
  productTypeId?: InputMaybe<Mysql8_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
};

/** order by stddev_samp() on columns of table "products" */
export type Products_Stddev_Samp_Order_By = {
  deployedOnProductId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  isMainProduct?: InputMaybe<Mysql8_Order_By>;
  mainAssetId?: InputMaybe<Mysql8_Order_By>;
  productStatusId?: InputMaybe<Mysql8_Order_By>;
  productTypeId?: InputMaybe<Mysql8_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
};

/** order by sum() on columns of table "products" */
export type Products_Sum_Order_By = {
  deployedOnProductId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  isMainProduct?: InputMaybe<Mysql8_Order_By>;
  mainAssetId?: InputMaybe<Mysql8_Order_By>;
  productStatusId?: InputMaybe<Mysql8_Order_By>;
  productTypeId?: InputMaybe<Mysql8_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
};

/** order by var_pop() on columns of table "products" */
export type Products_Var_Pop_Order_By = {
  deployedOnProductId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  isMainProduct?: InputMaybe<Mysql8_Order_By>;
  mainAssetId?: InputMaybe<Mysql8_Order_By>;
  productStatusId?: InputMaybe<Mysql8_Order_By>;
  productTypeId?: InputMaybe<Mysql8_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
};

/** order by var_samp() on columns of table "products" */
export type Products_Var_Samp_Order_By = {
  deployedOnProductId?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  isMainProduct?: InputMaybe<Mysql8_Order_By>;
  mainAssetId?: InputMaybe<Mysql8_Order_By>;
  productStatusId?: InputMaybe<Mysql8_Order_By>;
  productTypeId?: InputMaybe<Mysql8_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
};

export type ProfileSectors = {
  __typename?: 'profileSectors';
  definition: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  profiles: Array<Profiles>;
};

export type ProfileSectorsProfilesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "profileSectors". All fields are combined with a logical 'AND'. */
export type ProfileSectors_Bool_Exp = {
  _and?: InputMaybe<Array<ProfileSectors_Bool_Exp>>;
  _not?: InputMaybe<ProfileSectors_Bool_Exp>;
  _or?: InputMaybe<Array<ProfileSectors_Bool_Exp>>;
  definition?: InputMaybe<String_Mysql8_Comparison_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  name?: InputMaybe<String_Mysql8_Comparison_Exp>;
  profiles?: InputMaybe<Profiles_Bool_Exp>;
};

/** Ordering options when selecting data from "profileSectors". */
export type ProfileSectors_Order_By = {
  definition?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
  profiles_aggregate?: InputMaybe<Profiles_Aggregate_Order_By>;
};

export type ProfileStatuses = {
  __typename?: 'profileStatuses';
  definition: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  profiles: Array<Profiles>;
};

export type ProfileStatusesProfilesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "profileStatuses". All fields are combined with a logical 'AND'. */
export type ProfileStatuses_Bool_Exp = {
  _and?: InputMaybe<Array<ProfileStatuses_Bool_Exp>>;
  _not?: InputMaybe<ProfileStatuses_Bool_Exp>;
  _or?: InputMaybe<Array<ProfileStatuses_Bool_Exp>>;
  definition?: InputMaybe<String_Mysql8_Comparison_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  name?: InputMaybe<String_Mysql8_Comparison_Exp>;
  profiles?: InputMaybe<Profiles_Bool_Exp>;
};

/** Ordering options when selecting data from "profileStatuses". */
export type ProfileStatuses_Order_By = {
  definition?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
  profiles_aggregate?: InputMaybe<Profiles_Aggregate_Order_By>;
};

/**   */
export type ProfileTags = {
  __typename?: 'profileTags';
  /**   */
  id: Scalars['Int']['output'];
  /** An object relationship */
  profile: Profiles;
  /**   */
  profileId: Scalars['Int']['output'];
  /** An object relationship */
  tag: Tags;
  /**   */
  tagId: Scalars['Int']['output'];
};

/** order by aggregate values of table "profileTags" */
export type ProfileTags_Aggregate_Order_By = {
  avg?: InputMaybe<ProfileTags_Avg_Order_By>;
  count?: InputMaybe<Mysql8_Order_By>;
  max?: InputMaybe<ProfileTags_Max_Order_By>;
  min?: InputMaybe<ProfileTags_Min_Order_By>;
  stddev_pop?: InputMaybe<ProfileTags_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<ProfileTags_Stddev_Samp_Order_By>;
  sum?: InputMaybe<ProfileTags_Sum_Order_By>;
  var_pop?: InputMaybe<ProfileTags_Var_Pop_Order_By>;
  var_samp?: InputMaybe<ProfileTags_Var_Samp_Order_By>;
};

/** order by avg() on columns of table "profileTags" */
export type ProfileTags_Avg_Order_By = {
  /**   */
  id?: InputMaybe<Mysql8_Order_By>;
  /**   */
  profileId?: InputMaybe<Mysql8_Order_By>;
  /**   */
  tagId?: InputMaybe<Mysql8_Order_By>;
};

/** Boolean expression to filter rows from the table "profileTags". All fields are combined with a logical 'AND'. */
export type ProfileTags_Bool_Exp = {
  _and?: InputMaybe<Array<ProfileTags_Bool_Exp>>;
  _not?: InputMaybe<ProfileTags_Bool_Exp>;
  _or?: InputMaybe<Array<ProfileTags_Bool_Exp>>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  profile?: InputMaybe<Profiles_Bool_Exp>;
  profileId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  tag?: InputMaybe<Tags_Bool_Exp>;
  tagId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
};

/** order by max() on columns of table "profileTags" */
export type ProfileTags_Max_Order_By = {
  /**   */
  id?: InputMaybe<Mysql8_Order_By>;
  /**   */
  profileId?: InputMaybe<Mysql8_Order_By>;
  /**   */
  tagId?: InputMaybe<Mysql8_Order_By>;
};

/** order by min() on columns of table "profileTags" */
export type ProfileTags_Min_Order_By = {
  /**   */
  id?: InputMaybe<Mysql8_Order_By>;
  /**   */
  profileId?: InputMaybe<Mysql8_Order_By>;
  /**   */
  tagId?: InputMaybe<Mysql8_Order_By>;
};

/** Ordering options when selecting data from "profileTags". */
export type ProfileTags_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  profile?: InputMaybe<Profiles_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
  tag?: InputMaybe<Tags_Order_By>;
  tagId?: InputMaybe<Mysql8_Order_By>;
};

/** order by stddev_pop() on columns of table "profileTags" */
export type ProfileTags_Stddev_Pop_Order_By = {
  /**   */
  id?: InputMaybe<Mysql8_Order_By>;
  /**   */
  profileId?: InputMaybe<Mysql8_Order_By>;
  /**   */
  tagId?: InputMaybe<Mysql8_Order_By>;
};

/** order by stddev_samp() on columns of table "profileTags" */
export type ProfileTags_Stddev_Samp_Order_By = {
  /**   */
  id?: InputMaybe<Mysql8_Order_By>;
  /**   */
  profileId?: InputMaybe<Mysql8_Order_By>;
  /**   */
  tagId?: InputMaybe<Mysql8_Order_By>;
};

/** order by sum() on columns of table "profileTags" */
export type ProfileTags_Sum_Order_By = {
  /**   */
  id?: InputMaybe<Mysql8_Order_By>;
  /**   */
  profileId?: InputMaybe<Mysql8_Order_By>;
  /**   */
  tagId?: InputMaybe<Mysql8_Order_By>;
};

/** order by var_pop() on columns of table "profileTags" */
export type ProfileTags_Var_Pop_Order_By = {
  /**   */
  id?: InputMaybe<Mysql8_Order_By>;
  /**   */
  profileId?: InputMaybe<Mysql8_Order_By>;
  /**   */
  tagId?: InputMaybe<Mysql8_Order_By>;
};

/** order by var_samp() on columns of table "profileTags" */
export type ProfileTags_Var_Samp_Order_By = {
  /**   */
  id?: InputMaybe<Mysql8_Order_By>;
  /**   */
  profileId?: InputMaybe<Mysql8_Order_By>;
  /**   */
  tagId?: InputMaybe<Mysql8_Order_By>;
};

export type ProfileTypes = {
  __typename?: 'profileTypes';
  definition: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  profiles: Array<Profiles>;
};

export type ProfileTypesProfilesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "profileTypes". All fields are combined with a logical 'AND'. */
export type ProfileTypes_Bool_Exp = {
  _and?: InputMaybe<Array<ProfileTypes_Bool_Exp>>;
  _not?: InputMaybe<ProfileTypes_Bool_Exp>;
  _or?: InputMaybe<Array<ProfileTypes_Bool_Exp>>;
  definition?: InputMaybe<String_Mysql8_Comparison_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  name?: InputMaybe<String_Mysql8_Comparison_Exp>;
  profiles?: InputMaybe<Profiles_Bool_Exp>;
};

/** Ordering options when selecting data from "profileTypes". */
export type ProfileTypes_Order_By = {
  definition?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
  profiles_aggregate?: InputMaybe<Profiles_Aggregate_Order_By>;
};

export type Profiles = {
  __typename?: 'profiles';
  /** An array relationship */
  assets: Array<Assets>;
  descriptionLong: Scalars['String']['output'];
  descriptionShort: Scalars['String']['output'];
  /** An array relationship */
  entities: Array<Entities>;
  foundingDate?: Maybe<Scalars['date']['output']>;
  id: Scalars['Int']['output'];
  logo: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  products: Array<Products>;
  /** An object relationship */
  profileSector?: Maybe<ProfileSectors>;
  profileSectorId?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  profileStatus?: Maybe<ProfileStatuses>;
  profileStatusId?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  profileTags: Array<ProfileTags>;
  /** An object relationship */
  profileType?: Maybe<ProfileTypes>;
  profileTypeId?: Maybe<Scalars['Int']['output']>;
  slug: Scalars['String']['output'];
  /** An array relationship */
  socials: Array<Socials>;
  /** Self promotion field */
  tagLine: Scalars['String']['output'];
  urlBlog: Scalars['String']['output'];
  urlDocumentation: Scalars['String']['output'];
  urlMain: Scalars['String']['output'];
  urlWhitepaper: Scalars['String']['output'];
};

export type ProfilesAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assets_Order_By>>;
  where?: InputMaybe<Assets_Bool_Exp>;
};

export type ProfilesEntitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entities_Order_By>>;
  where?: InputMaybe<Entities_Bool_Exp>;
};

export type ProfilesProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

export type ProfilesProfileTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileTags_Order_By>>;
  where?: InputMaybe<ProfileTags_Bool_Exp>;
};

export type ProfilesSocialsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Socials_Order_By>>;
  where?: InputMaybe<Socials_Bool_Exp>;
};

/** order by aggregate values of table "profiles" */
export type Profiles_Aggregate_Order_By = {
  avg?: InputMaybe<Profiles_Avg_Order_By>;
  count?: InputMaybe<Mysql8_Order_By>;
  max?: InputMaybe<Profiles_Max_Order_By>;
  min?: InputMaybe<Profiles_Min_Order_By>;
  stddev_pop?: InputMaybe<Profiles_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Profiles_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Profiles_Sum_Order_By>;
  var_pop?: InputMaybe<Profiles_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Profiles_Var_Samp_Order_By>;
};

/** order by avg() on columns of table "profiles" */
export type Profiles_Avg_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  profileSectorId?: InputMaybe<Mysql8_Order_By>;
  profileStatusId?: InputMaybe<Mysql8_Order_By>;
  profileTypeId?: InputMaybe<Mysql8_Order_By>;
};

/** Boolean expression to filter rows from the table "profiles". All fields are combined with a logical 'AND'. */
export type Profiles_Bool_Exp = {
  _and?: InputMaybe<Array<Profiles_Bool_Exp>>;
  _not?: InputMaybe<Profiles_Bool_Exp>;
  _or?: InputMaybe<Array<Profiles_Bool_Exp>>;
  assets?: InputMaybe<Assets_Bool_Exp>;
  descriptionLong?: InputMaybe<String_Mysql8_Comparison_Exp>;
  descriptionShort?: InputMaybe<String_Mysql8_Comparison_Exp>;
  entities?: InputMaybe<Entities_Bool_Exp>;
  foundingDate?: InputMaybe<Date_Mysql8_Comparison_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  logo?: InputMaybe<String_Mysql8_Comparison_Exp>;
  name?: InputMaybe<String_Mysql8_Comparison_Exp>;
  products?: InputMaybe<Products_Bool_Exp>;
  profileSector?: InputMaybe<ProfileSectors_Bool_Exp>;
  profileSectorId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  profileStatus?: InputMaybe<ProfileStatuses_Bool_Exp>;
  profileStatusId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  profileTags?: InputMaybe<ProfileTags_Bool_Exp>;
  profileType?: InputMaybe<ProfileTypes_Bool_Exp>;
  profileTypeId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  slug?: InputMaybe<String_Mysql8_Comparison_Exp>;
  socials?: InputMaybe<Socials_Bool_Exp>;
  tagLine?: InputMaybe<String_Mysql8_Comparison_Exp>;
  urlBlog?: InputMaybe<String_Mysql8_Comparison_Exp>;
  urlDocumentation?: InputMaybe<String_Mysql8_Comparison_Exp>;
  urlMain?: InputMaybe<String_Mysql8_Comparison_Exp>;
  urlWhitepaper?: InputMaybe<String_Mysql8_Comparison_Exp>;
};

/** order by max() on columns of table "profiles" */
export type Profiles_Max_Order_By = {
  descriptionLong?: InputMaybe<Mysql8_Order_By>;
  descriptionShort?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  logo?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
  profileSectorId?: InputMaybe<Mysql8_Order_By>;
  profileStatusId?: InputMaybe<Mysql8_Order_By>;
  profileTypeId?: InputMaybe<Mysql8_Order_By>;
  slug?: InputMaybe<Mysql8_Order_By>;
  /** Self promotion field */
  tagLine?: InputMaybe<Mysql8_Order_By>;
  urlBlog?: InputMaybe<Mysql8_Order_By>;
  urlDocumentation?: InputMaybe<Mysql8_Order_By>;
  urlMain?: InputMaybe<Mysql8_Order_By>;
  urlWhitepaper?: InputMaybe<Mysql8_Order_By>;
};

/** order by min() on columns of table "profiles" */
export type Profiles_Min_Order_By = {
  descriptionLong?: InputMaybe<Mysql8_Order_By>;
  descriptionShort?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  logo?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
  profileSectorId?: InputMaybe<Mysql8_Order_By>;
  profileStatusId?: InputMaybe<Mysql8_Order_By>;
  profileTypeId?: InputMaybe<Mysql8_Order_By>;
  slug?: InputMaybe<Mysql8_Order_By>;
  /** Self promotion field */
  tagLine?: InputMaybe<Mysql8_Order_By>;
  urlBlog?: InputMaybe<Mysql8_Order_By>;
  urlDocumentation?: InputMaybe<Mysql8_Order_By>;
  urlMain?: InputMaybe<Mysql8_Order_By>;
  urlWhitepaper?: InputMaybe<Mysql8_Order_By>;
};

/** Ordering options when selecting data from "profiles". */
export type Profiles_Order_By = {
  assets_aggregate?: InputMaybe<Assets_Aggregate_Order_By>;
  descriptionLong?: InputMaybe<Mysql8_Order_By>;
  descriptionShort?: InputMaybe<Mysql8_Order_By>;
  entities_aggregate?: InputMaybe<Entities_Aggregate_Order_By>;
  foundingDate?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  logo?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
  products_aggregate?: InputMaybe<Products_Aggregate_Order_By>;
  profileSector?: InputMaybe<ProfileSectors_Order_By>;
  profileSectorId?: InputMaybe<Mysql8_Order_By>;
  profileStatus?: InputMaybe<ProfileStatuses_Order_By>;
  profileStatusId?: InputMaybe<Mysql8_Order_By>;
  profileTags_aggregate?: InputMaybe<ProfileTags_Aggregate_Order_By>;
  profileType?: InputMaybe<ProfileTypes_Order_By>;
  profileTypeId?: InputMaybe<Mysql8_Order_By>;
  slug?: InputMaybe<Mysql8_Order_By>;
  socials_aggregate?: InputMaybe<Socials_Aggregate_Order_By>;
  tagLine?: InputMaybe<Mysql8_Order_By>;
  urlBlog?: InputMaybe<Mysql8_Order_By>;
  urlDocumentation?: InputMaybe<Mysql8_Order_By>;
  urlMain?: InputMaybe<Mysql8_Order_By>;
  urlWhitepaper?: InputMaybe<Mysql8_Order_By>;
};

/** order by stddev_pop() on columns of table "profiles" */
export type Profiles_Stddev_Pop_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  profileSectorId?: InputMaybe<Mysql8_Order_By>;
  profileStatusId?: InputMaybe<Mysql8_Order_By>;
  profileTypeId?: InputMaybe<Mysql8_Order_By>;
};

/** order by stddev_samp() on columns of table "profiles" */
export type Profiles_Stddev_Samp_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  profileSectorId?: InputMaybe<Mysql8_Order_By>;
  profileStatusId?: InputMaybe<Mysql8_Order_By>;
  profileTypeId?: InputMaybe<Mysql8_Order_By>;
};

/** order by sum() on columns of table "profiles" */
export type Profiles_Sum_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  profileSectorId?: InputMaybe<Mysql8_Order_By>;
  profileStatusId?: InputMaybe<Mysql8_Order_By>;
  profileTypeId?: InputMaybe<Mysql8_Order_By>;
};

/** order by var_pop() on columns of table "profiles" */
export type Profiles_Var_Pop_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  profileSectorId?: InputMaybe<Mysql8_Order_By>;
  profileStatusId?: InputMaybe<Mysql8_Order_By>;
  profileTypeId?: InputMaybe<Mysql8_Order_By>;
};

/** order by var_samp() on columns of table "profiles" */
export type Profiles_Var_Samp_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  profileSectorId?: InputMaybe<Mysql8_Order_By>;
  profileStatusId?: InputMaybe<Mysql8_Order_By>;
  profileTypeId?: InputMaybe<Mysql8_Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "assetStandardSupport" */
  assetStandardSupport: Array<AssetStandardSupport>;
  /** fetch data from the table: "assetStandardSupport" using primary key columns */
  assetStandardSupport_by_pk?: Maybe<AssetStandardSupport>;
  /** fetch data from the table: "assetType" */
  assetType: Array<AssetType>;
  /** fetch data from the table: "assetType" using primary key columns */
  assetType_by_pk?: Maybe<AssetType>;
  /** An array relationship */
  assets: Array<Assets>;
  /** fetch data from the table: "assets" using primary key columns */
  assets_by_pk?: Maybe<Assets>;
  /** fetch data from the table: "countries" */
  countries: Array<Countries>;
  /** fetch data from the table: "countries" using primary key columns */
  countries_by_pk?: Maybe<Countries>;
  /** An array relationship */
  entities: Array<Entities>;
  /** fetch data from the table: "entities" using primary key columns */
  entities_by_pk?: Maybe<Entities>;
  /** fetch data from the table: "entityTypes" */
  entityTypes: Array<EntityTypes>;
  /** fetch data from the table: "entityTypes" using primary key columns */
  entityTypes_by_pk?: Maybe<EntityTypes>;
  /** fetch data from the table: "productStatus" */
  productStatus: Array<ProductStatus>;
  /** fetch data from the table: "productStatus" using primary key columns */
  productStatus_by_pk?: Maybe<ProductStatus>;
  /** fetch data from the table: "productSupports" */
  productSupports: Array<ProductSupports>;
  /** fetch data from the table: "productSupports" using primary key columns */
  productSupports_by_pk?: Maybe<ProductSupports>;
  /** fetch data from the table: "productTypes" */
  productTypes: Array<ProductTypes>;
  /** fetch data from the table: "productTypes" using primary key columns */
  productTypes_by_pk?: Maybe<ProductTypes>;
  /** An array relationship */
  products: Array<Products>;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "profileSectors" */
  profileSectors: Array<ProfileSectors>;
  /** fetch data from the table: "profileSectors" using primary key columns */
  profileSectors_by_pk?: Maybe<ProfileSectors>;
  /** fetch data from the table: "profileStatuses" */
  profileStatuses: Array<ProfileStatuses>;
  /** fetch data from the table: "profileStatuses" using primary key columns */
  profileStatuses_by_pk?: Maybe<ProfileStatuses>;
  /** An array relationship */
  profileTags: Array<ProfileTags>;
  /** fetch data from the table: "profileTags" using primary key columns */
  profileTags_by_pk?: Maybe<ProfileTags>;
  /** fetch data from the table: "profileTypes" */
  profileTypes: Array<ProfileTypes>;
  /** fetch data from the table: "profileTypes" using primary key columns */
  profileTypes_by_pk?: Maybe<ProfileTypes>;
  /** An array relationship */
  profiles: Array<Profiles>;
  /** fetch data from the table: "profiles" using primary key columns */
  profiles_by_pk?: Maybe<Profiles>;
  /** fetch data from the table: "socialTypes" */
  socialTypes: Array<SocialTypes>;
  /** fetch data from the table: "socialTypes" using primary key columns */
  socialTypes_by_pk?: Maybe<SocialTypes>;
  /** An array relationship */
  socials: Array<Socials>;
  /** fetch data from the table: "socials" using primary key columns */
  socials_by_pk?: Maybe<Socials>;
  /** fetch data from the table: "tagTypes" */
  tagTypes: Array<TagTypes>;
  /** fetch data from the table: "tagTypes" using primary key columns */
  tagTypes_by_pk?: Maybe<TagTypes>;
  /** fetch data from the table: "tags" */
  tags: Array<Tags>;
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>;
};

export type Query_RootAssetStandardSupportArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetStandardSupport_Order_By>>;
  where?: InputMaybe<AssetStandardSupport_Bool_Exp>;
};

export type Query_RootAssetStandardSupport_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootAssetTypeArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetType_Order_By>>;
  where?: InputMaybe<AssetType_Bool_Exp>;
};

export type Query_RootAssetType_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assets_Order_By>>;
  where?: InputMaybe<Assets_Bool_Exp>;
};

export type Query_RootAssets_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootCountriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Countries_Order_By>>;
  where?: InputMaybe<Countries_Bool_Exp>;
};

export type Query_RootCountries_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootEntitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entities_Order_By>>;
  where?: InputMaybe<Entities_Bool_Exp>;
};

export type Query_RootEntities_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootEntityTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<EntityTypes_Order_By>>;
  where?: InputMaybe<EntityTypes_Bool_Exp>;
};

export type Query_RootEntityTypes_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootProductStatusArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductStatus_Order_By>>;
  where?: InputMaybe<ProductStatus_Bool_Exp>;
};

export type Query_RootProductStatus_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootProductSupportsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductSupports_Order_By>>;
  where?: InputMaybe<ProductSupports_Bool_Exp>;
};

export type Query_RootProductSupports_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootProductTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductTypes_Order_By>>;
  where?: InputMaybe<ProductTypes_Bool_Exp>;
};

export type Query_RootProductTypes_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

export type Query_RootProducts_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootProfileSectorsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileSectors_Order_By>>;
  where?: InputMaybe<ProfileSectors_Bool_Exp>;
};

export type Query_RootProfileSectors_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootProfileStatusesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileStatuses_Order_By>>;
  where?: InputMaybe<ProfileStatuses_Bool_Exp>;
};

export type Query_RootProfileStatuses_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootProfileTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileTags_Order_By>>;
  where?: InputMaybe<ProfileTags_Bool_Exp>;
};

export type Query_RootProfileTags_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootProfileTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileTypes_Order_By>>;
  where?: InputMaybe<ProfileTypes_Bool_Exp>;
};

export type Query_RootProfileTypes_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootProfilesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};

export type Query_RootProfiles_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootSocialTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SocialTypes_Order_By>>;
  where?: InputMaybe<SocialTypes_Bool_Exp>;
};

export type Query_RootSocialTypes_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootSocialsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Socials_Order_By>>;
  where?: InputMaybe<Socials_Bool_Exp>;
};

export type Query_RootSocials_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootTagTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TagTypes_Order_By>>;
  where?: InputMaybe<TagTypes_Bool_Exp>;
};

export type Query_RootTagTypes_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};

export type Query_RootTags_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type SocialTypes = {
  __typename?: 'socialTypes';
  definition: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  socials: Array<Socials>;
};

export type SocialTypesSocialsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Socials_Order_By>>;
  where?: InputMaybe<Socials_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "socialTypes". All fields are combined with a logical 'AND'. */
export type SocialTypes_Bool_Exp = {
  _and?: InputMaybe<Array<SocialTypes_Bool_Exp>>;
  _not?: InputMaybe<SocialTypes_Bool_Exp>;
  _or?: InputMaybe<Array<SocialTypes_Bool_Exp>>;
  definition?: InputMaybe<String_Mysql8_Comparison_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  name?: InputMaybe<String_Mysql8_Comparison_Exp>;
  socials?: InputMaybe<Socials_Bool_Exp>;
};

/** Ordering options when selecting data from "socialTypes". */
export type SocialTypes_Order_By = {
  definition?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
  socials_aggregate?: InputMaybe<Socials_Aggregate_Order_By>;
};

export type Socials = {
  __typename?: 'socials';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** An object relationship */
  profile: Profiles;
  profileId: Scalars['Int']['output'];
  /** An object relationship */
  socialType?: Maybe<SocialTypes>;
  socialTypeId?: Maybe<Scalars['Int']['output']>;
  url: Scalars['String']['output'];
};

/** order by aggregate values of table "socials" */
export type Socials_Aggregate_Order_By = {
  avg?: InputMaybe<Socials_Avg_Order_By>;
  count?: InputMaybe<Mysql8_Order_By>;
  max?: InputMaybe<Socials_Max_Order_By>;
  min?: InputMaybe<Socials_Min_Order_By>;
  stddev_pop?: InputMaybe<Socials_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Socials_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Socials_Sum_Order_By>;
  var_pop?: InputMaybe<Socials_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Socials_Var_Samp_Order_By>;
};

/** order by avg() on columns of table "socials" */
export type Socials_Avg_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
  socialTypeId?: InputMaybe<Mysql8_Order_By>;
};

/** Boolean expression to filter rows from the table "socials". All fields are combined with a logical 'AND'. */
export type Socials_Bool_Exp = {
  _and?: InputMaybe<Array<Socials_Bool_Exp>>;
  _not?: InputMaybe<Socials_Bool_Exp>;
  _or?: InputMaybe<Array<Socials_Bool_Exp>>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  name?: InputMaybe<String_Mysql8_Comparison_Exp>;
  profile?: InputMaybe<Profiles_Bool_Exp>;
  profileId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  socialType?: InputMaybe<SocialTypes_Bool_Exp>;
  socialTypeId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  url?: InputMaybe<String_Mysql8_Comparison_Exp>;
};

/** order by max() on columns of table "socials" */
export type Socials_Max_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
  socialTypeId?: InputMaybe<Mysql8_Order_By>;
  url?: InputMaybe<Mysql8_Order_By>;
};

/** order by min() on columns of table "socials" */
export type Socials_Min_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
  socialTypeId?: InputMaybe<Mysql8_Order_By>;
  url?: InputMaybe<Mysql8_Order_By>;
};

/** Ordering options when selecting data from "socials". */
export type Socials_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
  profile?: InputMaybe<Profiles_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
  socialType?: InputMaybe<SocialTypes_Order_By>;
  socialTypeId?: InputMaybe<Mysql8_Order_By>;
  url?: InputMaybe<Mysql8_Order_By>;
};

/** order by stddev_pop() on columns of table "socials" */
export type Socials_Stddev_Pop_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
  socialTypeId?: InputMaybe<Mysql8_Order_By>;
};

/** order by stddev_samp() on columns of table "socials" */
export type Socials_Stddev_Samp_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
  socialTypeId?: InputMaybe<Mysql8_Order_By>;
};

/** order by sum() on columns of table "socials" */
export type Socials_Sum_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
  socialTypeId?: InputMaybe<Mysql8_Order_By>;
};

/** order by var_pop() on columns of table "socials" */
export type Socials_Var_Pop_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
  socialTypeId?: InputMaybe<Mysql8_Order_By>;
};

/** order by var_samp() on columns of table "socials" */
export type Socials_Var_Samp_Order_By = {
  id?: InputMaybe<Mysql8_Order_By>;
  profileId?: InputMaybe<Mysql8_Order_By>;
  socialTypeId?: InputMaybe<Mysql8_Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "assetStandardSupport" */
  assetStandardSupport: Array<AssetStandardSupport>;
  /** fetch data from the table: "assetStandardSupport" using primary key columns */
  assetStandardSupport_by_pk?: Maybe<AssetStandardSupport>;
  /** fetch data from the table: "assetType" */
  assetType: Array<AssetType>;
  /** fetch data from the table: "assetType" using primary key columns */
  assetType_by_pk?: Maybe<AssetType>;
  /** An array relationship */
  assets: Array<Assets>;
  /** fetch data from the table: "assets" using primary key columns */
  assets_by_pk?: Maybe<Assets>;
  /** fetch data from the table: "countries" */
  countries: Array<Countries>;
  /** fetch data from the table: "countries" using primary key columns */
  countries_by_pk?: Maybe<Countries>;
  /** An array relationship */
  entities: Array<Entities>;
  /** fetch data from the table: "entities" using primary key columns */
  entities_by_pk?: Maybe<Entities>;
  /** fetch data from the table: "entityTypes" */
  entityTypes: Array<EntityTypes>;
  /** fetch data from the table: "entityTypes" using primary key columns */
  entityTypes_by_pk?: Maybe<EntityTypes>;
  /** fetch data from the table: "productStatus" */
  productStatus: Array<ProductStatus>;
  /** fetch data from the table: "productStatus" using primary key columns */
  productStatus_by_pk?: Maybe<ProductStatus>;
  /** fetch data from the table: "productSupports" */
  productSupports: Array<ProductSupports>;
  /** fetch data from the table: "productSupports" using primary key columns */
  productSupports_by_pk?: Maybe<ProductSupports>;
  /** fetch data from the table: "productTypes" */
  productTypes: Array<ProductTypes>;
  /** fetch data from the table: "productTypes" using primary key columns */
  productTypes_by_pk?: Maybe<ProductTypes>;
  /** An array relationship */
  products: Array<Products>;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "profileSectors" */
  profileSectors: Array<ProfileSectors>;
  /** fetch data from the table: "profileSectors" using primary key columns */
  profileSectors_by_pk?: Maybe<ProfileSectors>;
  /** fetch data from the table: "profileStatuses" */
  profileStatuses: Array<ProfileStatuses>;
  /** fetch data from the table: "profileStatuses" using primary key columns */
  profileStatuses_by_pk?: Maybe<ProfileStatuses>;
  /** An array relationship */
  profileTags: Array<ProfileTags>;
  /** fetch data from the table: "profileTags" using primary key columns */
  profileTags_by_pk?: Maybe<ProfileTags>;
  /** fetch data from the table: "profileTypes" */
  profileTypes: Array<ProfileTypes>;
  /** fetch data from the table: "profileTypes" using primary key columns */
  profileTypes_by_pk?: Maybe<ProfileTypes>;
  /** An array relationship */
  profiles: Array<Profiles>;
  /** fetch data from the table: "profiles" using primary key columns */
  profiles_by_pk?: Maybe<Profiles>;
  /** fetch data from the table: "socialTypes" */
  socialTypes: Array<SocialTypes>;
  /** fetch data from the table: "socialTypes" using primary key columns */
  socialTypes_by_pk?: Maybe<SocialTypes>;
  /** An array relationship */
  socials: Array<Socials>;
  /** fetch data from the table: "socials" using primary key columns */
  socials_by_pk?: Maybe<Socials>;
  /** fetch data from the table: "tagTypes" */
  tagTypes: Array<TagTypes>;
  /** fetch data from the table: "tagTypes" using primary key columns */
  tagTypes_by_pk?: Maybe<TagTypes>;
  /** fetch data from the table: "tags" */
  tags: Array<Tags>;
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>;
};

export type Subscription_RootAssetStandardSupportArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetStandardSupport_Order_By>>;
  where?: InputMaybe<AssetStandardSupport_Bool_Exp>;
};

export type Subscription_RootAssetStandardSupport_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootAssetTypeArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetType_Order_By>>;
  where?: InputMaybe<AssetType_Bool_Exp>;
};

export type Subscription_RootAssetType_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assets_Order_By>>;
  where?: InputMaybe<Assets_Bool_Exp>;
};

export type Subscription_RootAssets_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootCountriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Countries_Order_By>>;
  where?: InputMaybe<Countries_Bool_Exp>;
};

export type Subscription_RootCountries_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootEntitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entities_Order_By>>;
  where?: InputMaybe<Entities_Bool_Exp>;
};

export type Subscription_RootEntities_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootEntityTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<EntityTypes_Order_By>>;
  where?: InputMaybe<EntityTypes_Bool_Exp>;
};

export type Subscription_RootEntityTypes_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootProductStatusArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductStatus_Order_By>>;
  where?: InputMaybe<ProductStatus_Bool_Exp>;
};

export type Subscription_RootProductStatus_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootProductSupportsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductSupports_Order_By>>;
  where?: InputMaybe<ProductSupports_Bool_Exp>;
};

export type Subscription_RootProductSupports_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootProductTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProductTypes_Order_By>>;
  where?: InputMaybe<ProductTypes_Bool_Exp>;
};

export type Subscription_RootProductTypes_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

export type Subscription_RootProducts_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootProfileSectorsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileSectors_Order_By>>;
  where?: InputMaybe<ProfileSectors_Bool_Exp>;
};

export type Subscription_RootProfileSectors_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootProfileStatusesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileStatuses_Order_By>>;
  where?: InputMaybe<ProfileStatuses_Bool_Exp>;
};

export type Subscription_RootProfileStatuses_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootProfileTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileTags_Order_By>>;
  where?: InputMaybe<ProfileTags_Bool_Exp>;
};

export type Subscription_RootProfileTags_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootProfileTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileTypes_Order_By>>;
  where?: InputMaybe<ProfileTypes_Bool_Exp>;
};

export type Subscription_RootProfileTypes_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootProfilesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};

export type Subscription_RootProfiles_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootSocialTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SocialTypes_Order_By>>;
  where?: InputMaybe<SocialTypes_Bool_Exp>;
};

export type Subscription_RootSocialTypes_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootSocialsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Socials_Order_By>>;
  where?: InputMaybe<Socials_Bool_Exp>;
};

export type Subscription_RootSocials_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootTagTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TagTypes_Order_By>>;
  where?: InputMaybe<TagTypes_Bool_Exp>;
};

export type Subscription_RootTagTypes_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};

export type Subscription_RootTags_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type TagTypes = {
  __typename?: 'tagTypes';
  definition: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "tagTypes". All fields are combined with a logical 'AND'. */
export type TagTypes_Bool_Exp = {
  _and?: InputMaybe<Array<TagTypes_Bool_Exp>>;
  _not?: InputMaybe<TagTypes_Bool_Exp>;
  _or?: InputMaybe<Array<TagTypes_Bool_Exp>>;
  definition?: InputMaybe<String_Mysql8_Comparison_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  name?: InputMaybe<String_Mysql8_Comparison_Exp>;
};

/** Ordering options when selecting data from "tagTypes". */
export type TagTypes_Order_By = {
  definition?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
};

export type Tags = {
  __typename?: 'tags';
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  profileTags: Array<ProfileTags>;
  tagTypeId: Scalars['Int']['output'];
};

export type TagsProfileTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProfileTags_Order_By>>;
  where?: InputMaybe<ProfileTags_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "tags". All fields are combined with a logical 'AND'. */
export type Tags_Bool_Exp = {
  _and?: InputMaybe<Array<Tags_Bool_Exp>>;
  _not?: InputMaybe<Tags_Bool_Exp>;
  _or?: InputMaybe<Array<Tags_Bool_Exp>>;
  description?: InputMaybe<String_Mysql8_Comparison_Exp>;
  id?: InputMaybe<Int_Mysql8_Comparison_Exp>;
  name?: InputMaybe<String_Mysql8_Comparison_Exp>;
  profileTags?: InputMaybe<ProfileTags_Bool_Exp>;
  tagTypeId?: InputMaybe<Int_Mysql8_Comparison_Exp>;
};

/** Ordering options when selecting data from "tags". */
export type Tags_Order_By = {
  description?: InputMaybe<Mysql8_Order_By>;
  id?: InputMaybe<Mysql8_Order_By>;
  name?: InputMaybe<Mysql8_Order_By>;
  profileTags_aggregate?: InputMaybe<ProfileTags_Aggregate_Order_By>;
  tagTypeId?: InputMaybe<Mysql8_Order_By>;
};

/** One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string. */
export type __EnumValue = {
  __typename?: '__EnumValue';
  name: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  isDeprecated: Scalars['Boolean']['output'];
  deprecationReason?: Maybe<Scalars['String']['output']>;
};

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

export type GetFiltersOptionsQueryVariables = Exact<{
  productSupportsWhere?: InputMaybe<ProductSupports_Bool_Exp>;
  deployedOnProductsWhere?: InputMaybe<Products_Bool_Exp>;
  productTypesWhere?: InputMaybe<ProductTypes_Bool_Exp>;
}>;

export type GetFiltersOptionsQuery = {
  __typename?: 'query_root';
  profileTypes: Array<{
    __typename?: 'profileTypes';
    name: string;
    id: number;
    definition: string;
  }>;
  profileStatuses: Array<{
    __typename?: 'profileStatuses';
    name: string;
    id: number;
    definition: string;
  }>;
  profileSectors: Array<{
    __typename?: 'profileSectors';
    name: string;
    id: number;
    definition: string;
  }>;
  productTypes: Array<{
    __typename?: 'productTypes';
    name: string;
    id: number;
    definition: string;
  }>;
  productStatus: Array<{
    __typename?: 'productStatus';
    definition: string;
    id: number;
    name: string;
  }>;
  productSupports: Array<{
    __typename?: 'productSupports';
    supports: {
      __typename?: 'products';
      descriptionShort: string;
      name: string;
      id: number;
    };
  }>;
  deployedOnProducts: Array<{
    __typename?: 'products';
    name: string;
    id: number;
    descriptionShort: string;
  }>;
  products: Array<{
    __typename?: 'products';
    name: string;
    id: number;
    descriptionShort: string;
  }>;
  assetStandardSupport: Array<{
    __typename?: 'assetStandardSupport';
    definition: string;
    id: number;
    name: string;
  }>;
  assetType: Array<{
    __typename?: 'assetType';
    name: string;
    id: number;
    definition: string;
  }>;
  assets: Array<{ __typename?: 'assets'; ticker: string }>;
  entityTypes: Array<{
    __typename?: 'entityTypes';
    name: string;
    id: number;
    definition: string;
  }>;
  entities: Array<{ __typename?: 'entities'; name: string; id: number }>;
  countries: Array<{ __typename?: 'countries'; name: string; id: number }>;
  tags: Array<{
    __typename?: 'tags';
    name: string;
    id: number;
    description: string;
  }>;
};

export type GetOrderByFieldsQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;

export type GetOrderByFieldsQuery = {
  __typename?: 'query_root';
  __type?: {
    __typename?: '__Type';
    inputFields?: Array<{
      __typename?: '__InputValue';
      name: string;
      type: {
        __typename?: '__Type';
        name?: string | null;
        kind: __TypeKind;
        inputFields?: Array<{
          __typename?: '__InputValue';
          name: string;
          type: {
            __typename?: '__Type';
            name?: string | null;
            kind: __TypeKind;
            inputFields?: Array<{
              __typename?: '__InputValue';
              name: string;
              type: {
                __typename?: '__Type';
                name?: string | null;
                kind: __TypeKind;
                ofType?: {
                  __typename?: '__Type';
                  name?: string | null;
                  kind: __TypeKind;
                } | null;
              };
            }> | null;
            ofType?: {
              __typename?: '__Type';
              name?: string | null;
              kind: __TypeKind;
            } | null;
          };
        }> | null;
        ofType?: {
          __typename?: '__Type';
          name?: string | null;
          kind: __TypeKind;
        } | null;
      };
    }> | null;
  } | null;
};

export type GetProfileQueryVariables = Exact<{
  where?: InputMaybe<Profiles_Bool_Exp>;
}>;

export type GetProfileQuery = {
  __typename?: 'query_root';
  profiles: Array<{
    __typename?: 'profiles';
    name: string;
    logo: string;
    id: number;
    foundingDate?: any | null;
    descriptionShort: string;
    descriptionLong: string;
    profileSectorId?: number | null;
    profileStatusId?: number | null;
    profileTypeId?: number | null;
    tagLine: string;
    urlBlog: string;
    urlDocumentation: string;
    urlMain: string;
    urlWhitepaper: string;
    socials: Array<{
      __typename?: 'socials';
      url: string;
      socialTypeId?: number | null;
      profileId: number;
      name: string;
      id: number;
      socialType?: {
        __typename?: 'socialTypes';
        id: number;
        name: string;
      } | null;
    }>;
    assets: Array<{
      __typename?: 'assets';
      id: number;
      ticker: string;
      shortDescription: string;
      urlToAssetDocs: string;
      name: string;
      icon: string;
      address: string;
      deployedOnProductId?: number | null;
      assetTypeId?: number | null;
      assetType?: { __typename?: 'assetType'; id: number; name: string } | null;
      assetDeployedOnProductId?: {
        __typename?: 'products';
        name: string;
      } | null;
    }>;
    profileType?: {
      __typename?: 'profileTypes';
      name: string;
      id: number;
      definition: string;
    } | null;
    profileStatus?: {
      __typename?: 'profileStatuses';
      name: string;
      id: number;
      definition: string;
    } | null;
    profileSector?: {
      __typename?: 'profileSectors';
      name: string;
      id: number;
      definition: string;
    } | null;
    products: Array<{
      __typename?: 'products';
      urlToProduct: string;
      descriptionShort: string;
      id: number;
      isMainProduct: number;
      launchDate?: any | null;
      name: string;
      productAddress: string;
      productStatusId?: number | null;
      productType?: { __typename?: 'productTypes'; name: string } | null;
      productStatus?: { __typename?: 'productStatus'; name: string } | null;
      supportsProducts: Array<{
        __typename?: 'productSupports';
        supports: { __typename?: 'products'; name: string };
      }>;
      asset?: {
        __typename?: 'assets';
        name: string;
        id: number;
        icon: string;
        deployedOnProductId?: number | null;
        assetTypeId?: number | null;
        assetStandardId?: number | null;
        address: string;
        urlToAssetDocs: string;
        ticker: string;
        profileId: number;
        shortDescription: string;
      } | null;
      mainAsset?: {
        __typename?: 'assets';
        urlToAssetDocs: string;
        ticker: string;
        profileId: number;
        shortDescription: string;
        name: string;
      } | null;
      productDeployedOnProduct?: {
        __typename?: 'products';
        name: string;
        launchDate?: any | null;
        descriptionShort: string;
        deployedOnProductId?: number | null;
        urlToProduct: string;
      } | null;
      supportedByProducts: Array<{
        __typename?: 'productSupports';
        supports: { __typename?: 'products'; name: string; id: number };
        product: { __typename?: 'products'; name: string; id: number };
      }>;
    }>;
    mainProduct: Array<{
      __typename?: 'products';
      name: string;
      productType?: { __typename?: 'productTypes'; name: string } | null;
    }>;
    entities: Array<{
      __typename?: 'entities';
      tradeName: string;
      profileId: number;
      urlToEntity: string;
      name: string;
      localRegistrationNumber: string;
      leiNumber: string;
      dateOfIncorporation?: any | null;
      countryId: number;
      address: string;
      id: number;
      parentEntityId?: number | null;
      taxIdentificationNumber: string;
      country: { __typename?: 'countries'; code: string; name: string };
      entityType?: {
        __typename?: 'entityTypes';
        name: string;
        id: number;
        definition: string;
      } | null;
    }>;
  }>;
};

export type SearchProfilesQueryVariables = Exact<{
  order_by?: InputMaybe<Array<Profiles_Order_By> | Profiles_Order_By>;
  where?: InputMaybe<Profiles_Bool_Exp>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;

export type SearchProfilesQuery = {
  __typename?: 'query_root';
  profiles: Array<{
    __typename?: 'profiles';
    name: string;
    logo: string;
    id: number;
    slug: string;
    descriptionShort: string;
    urlDocumentation: string;
    tagLine: string;
    urlWhitepaper: string;
    urlMain: string;
    urlBlog: string;
    socials: Array<{
      __typename?: 'socials';
      url: string;
      socialType?: { __typename?: 'socialTypes'; name: string } | null;
    }>;
    profileSector?: { __typename?: 'profileSectors'; name: string } | null;
    profileType?: { __typename?: 'profileTypes'; name: string } | null;
    profileStatus?: { __typename?: 'profileStatuses'; name: string } | null;
    assets: Array<{ __typename?: 'assets'; ticker: string }>;
    mainProduct: Array<{
      __typename?: 'products';
      name: string;
      productType?: { __typename?: 'productTypes'; name: string } | null;
    }>;
  }>;
};

export const GetFiltersOptionsDocument = `
    query GetFiltersOptions($productSupportsWhere: productSupports_bool_exp, $deployedOnProductsWhere: products_bool_exp, $productTypesWhere: productTypes_bool_exp) {
  profileTypes {
    name
    id
    definition
  }
  profileStatuses {
    name
    id
    definition
  }
  profileSectors {
    name
    id
    definition
  }
  productTypes(
    where: $productTypesWhere
    order_by: {products_aggregate: {count: desc}}
  ) {
    name
    id
    definition
  }
  productStatus {
    definition
    id
    name
  }
  productSupports(where: $productSupportsWhere) {
    supports {
      descriptionShort
      name
      id
    }
  }
  deployedOnProducts: products(where: $deployedOnProductsWhere) {
    name
    id
    descriptionShort
  }
  products {
    name
    id
    descriptionShort
  }
  assetStandardSupport {
    definition
    id
    name
  }
  assetType {
    name
    id
    definition
  }
  assets {
    ticker
  }
  entityTypes {
    name
    id
    definition
  }
  entities {
    name
    id
  }
  countries {
    name
    id
  }
  tags(order_by: {profileTags_aggregate: {count: desc}}) {
    name
    id
    description
  }
}
    `;

export const useGetFiltersOptionsQuery = <
  TData = GetFiltersOptionsQuery,
  TError = unknown
>(
  variables?: GetFiltersOptionsQueryVariables,
  options?: Omit<
    UseQueryOptions<GetFiltersOptionsQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseQueryOptions<
      GetFiltersOptionsQuery,
      TError,
      TData
    >['queryKey'];
  }
) => {
  return useQuery<GetFiltersOptionsQuery, TError, TData>({
    queryKey:
      variables === undefined
        ? ['GetFiltersOptions']
        : ['GetFiltersOptions', variables],
    queryFn: fetcher<GetFiltersOptionsQuery, GetFiltersOptionsQueryVariables>(
      GetFiltersOptionsDocument,
      variables
    ),
    ...options
  });
};

export const useInfiniteGetFiltersOptionsQuery = <
  TData = InfiniteData<GetFiltersOptionsQuery>,
  TError = unknown
>(
  variables: GetFiltersOptionsQueryVariables,
  options: Omit<
    UseInfiniteQueryOptions<GetFiltersOptionsQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseInfiniteQueryOptions<
      GetFiltersOptionsQuery,
      TError,
      TData
    >['queryKey'];
  }
) => {
  return useInfiniteQuery<GetFiltersOptionsQuery, TError, TData>(
    (() => {
      const { queryKey: optionsQueryKey, ...restOptions } = options;
      return {
        queryKey:
          optionsQueryKey ?? variables === undefined
            ? ['GetFiltersOptions.infinite']
            : ['GetFiltersOptions.infinite', variables],
        queryFn: metaData =>
          fetcher<GetFiltersOptionsQuery, GetFiltersOptionsQueryVariables>(
            GetFiltersOptionsDocument,
            { ...variables, ...(metaData.pageParam ?? {}) }
          )(),
        ...restOptions
      };
    })()
  );
};

export const GetOrderByFieldsDocument = `
    query GetOrderByFields($name: String!) {
  __type(name: $name) {
    inputFields {
      name
      type {
        inputFields {
          name
          type {
            inputFields {
              name
              type {
                name
                kind
                ofType {
                  name
                  kind
                }
              }
            }
            name
            kind
            ofType {
              name
              kind
            }
          }
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
    `;

export const useGetOrderByFieldsQuery = <
  TData = GetOrderByFieldsQuery,
  TError = unknown
>(
  variables: GetOrderByFieldsQueryVariables,
  options?: Omit<
    UseQueryOptions<GetOrderByFieldsQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseQueryOptions<
      GetOrderByFieldsQuery,
      TError,
      TData
    >['queryKey'];
  }
) => {
  return useQuery<GetOrderByFieldsQuery, TError, TData>({
    queryKey: ['GetOrderByFields', variables],
    queryFn: fetcher<GetOrderByFieldsQuery, GetOrderByFieldsQueryVariables>(
      GetOrderByFieldsDocument,
      variables
    ),
    ...options
  });
};

export const useInfiniteGetOrderByFieldsQuery = <
  TData = InfiniteData<GetOrderByFieldsQuery>,
  TError = unknown
>(
  variables: GetOrderByFieldsQueryVariables,
  options: Omit<
    UseInfiniteQueryOptions<GetOrderByFieldsQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseInfiniteQueryOptions<
      GetOrderByFieldsQuery,
      TError,
      TData
    >['queryKey'];
  }
) => {
  return useInfiniteQuery<GetOrderByFieldsQuery, TError, TData>(
    (() => {
      const { queryKey: optionsQueryKey, ...restOptions } = options;
      return {
        queryKey: optionsQueryKey ?? ['GetOrderByFields.infinite', variables],
        queryFn: metaData =>
          fetcher<GetOrderByFieldsQuery, GetOrderByFieldsQueryVariables>(
            GetOrderByFieldsDocument,
            { ...variables, ...(metaData.pageParam ?? {}) }
          )(),
        ...restOptions
      };
    })()
  );
};

export const GetProfileDocument = `
    query GetProfile($where: profiles_bool_exp) {
  profiles(limit: 1, offset: 0, where: $where) {
    name
    logo
    id
    foundingDate
    descriptionShort
    descriptionLong
    profileSectorId
    profileStatusId
    profileTypeId
    tagLine
    urlBlog
    urlDocumentation
    urlMain
    urlWhitepaper
    socials {
      url
      socialTypeId
      profileId
      name
      id
      socialType {
        id
        name
      }
    }
    assets {
      id
      ticker
      shortDescription
      urlToAssetDocs
      name
      icon
      address
      deployedOnProductId
      assetTypeId
      assetType {
        id
        name
      }
      assetDeployedOnProductId {
        name
      }
    }
    profileType {
      name
      id
      definition
    }
    profileStatus {
      name
      id
      definition
    }
    profileSector {
      name
      id
      definition
    }
    products {
      urlToProduct
      descriptionShort
      id
      isMainProduct
      launchDate
      name
      productAddress
      productStatusId
      productType {
        name
      }
      productStatus {
        name
      }
      supportsProducts {
        supports {
          name
        }
      }
      asset {
        name
        id
        icon
        deployedOnProductId
        assetTypeId
        assetStandardId
        address
        urlToAssetDocs
        ticker
        profileId
        shortDescription
      }
      mainAsset {
        urlToAssetDocs
        ticker
        profileId
        shortDescription
        name
      }
      productDeployedOnProduct {
        name
        launchDate
        descriptionShort
        deployedOnProductId
        urlToProduct
      }
      supportedByProducts {
        supports {
          name
          id
        }
        product {
          name
          id
        }
      }
    }
    mainProduct: products(where: {isMainProduct: {_eq: 1}}, limit: 1) {
      name
      productType {
        name
      }
    }
    entities {
      tradeName
      profileId
      urlToEntity
      name
      localRegistrationNumber
      leiNumber
      dateOfIncorporation
      countryId
      address
      country {
        code
        name
      }
      id
      entityType {
        name
        id
        definition
      }
      parentEntityId
      taxIdentificationNumber
    }
  }
}
    `;

export const useGetProfileQuery = <TData = GetProfileQuery, TError = unknown>(
  variables?: GetProfileQueryVariables,
  options?: Omit<
    UseQueryOptions<GetProfileQuery, TError, TData>,
    'queryKey'
  > & { queryKey?: UseQueryOptions<GetProfileQuery, TError, TData>['queryKey'] }
) => {
  return useQuery<GetProfileQuery, TError, TData>({
    queryKey:
      variables === undefined ? ['GetProfile'] : ['GetProfile', variables],
    queryFn: fetcher<GetProfileQuery, GetProfileQueryVariables>(
      GetProfileDocument,
      variables
    ),
    ...options
  });
};

export const useInfiniteGetProfileQuery = <
  TData = InfiniteData<GetProfileQuery>,
  TError = unknown
>(
  variables: GetProfileQueryVariables,
  options: Omit<
    UseInfiniteQueryOptions<GetProfileQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseInfiniteQueryOptions<
      GetProfileQuery,
      TError,
      TData
    >['queryKey'];
  }
) => {
  return useInfiniteQuery<GetProfileQuery, TError, TData>(
    (() => {
      const { queryKey: optionsQueryKey, ...restOptions } = options;
      return {
        queryKey:
          optionsQueryKey ?? variables === undefined
            ? ['GetProfile.infinite']
            : ['GetProfile.infinite', variables],
        queryFn: metaData =>
          fetcher<GetProfileQuery, GetProfileQueryVariables>(
            GetProfileDocument,
            { ...variables, ...(metaData.pageParam ?? {}) }
          )(),
        ...restOptions
      };
    })()
  );
};

export const SearchProfilesDocument = `
    query SearchProfiles($order_by: [profiles_order_by!], $where: profiles_bool_exp, $limit: Int, $offset: Int) {
  profiles(limit: $limit, offset: $offset, where: $where, order_by: $order_by) {
    name
    logo
    id
    slug
    descriptionShort
    urlDocumentation
    tagLine
    urlWhitepaper
    urlMain
    urlDocumentation
    urlBlog
    socials {
      url
      socialType {
        name
      }
    }
    profileSector {
      name
    }
    profileType {
      name
    }
    profileStatus {
      name
    }
    assets {
      ticker
    }
    mainProduct: products(where: {isMainProduct: {_eq: 1}}, limit: 1) {
      name
      productType {
        name
      }
    }
  }
}
    `;

export const useSearchProfilesQuery = <
  TData = SearchProfilesQuery,
  TError = unknown
>(
  variables?: SearchProfilesQueryVariables,
  options?: Omit<
    UseQueryOptions<SearchProfilesQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseQueryOptions<SearchProfilesQuery, TError, TData>['queryKey'];
  }
) => {
  return useQuery<SearchProfilesQuery, TError, TData>({
    queryKey:
      variables === undefined
        ? ['SearchProfiles']
        : ['SearchProfiles', variables],
    queryFn: fetcher<SearchProfilesQuery, SearchProfilesQueryVariables>(
      SearchProfilesDocument,
      variables
    ),
    ...options
  });
};

export const useInfiniteSearchProfilesQuery = <
  TData = InfiniteData<SearchProfilesQuery>,
  TError = unknown
>(
  variables: SearchProfilesQueryVariables,
  options: Omit<
    UseInfiniteQueryOptions<SearchProfilesQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseInfiniteQueryOptions<
      SearchProfilesQuery,
      TError,
      TData
    >['queryKey'];
  }
) => {
  return useInfiniteQuery<SearchProfilesQuery, TError, TData>(
    (() => {
      const { queryKey: optionsQueryKey, ...restOptions } = options;
      return {
        queryKey:
          optionsQueryKey ?? variables === undefined
            ? ['SearchProfiles.infinite']
            : ['SearchProfiles.infinite', variables],
        queryFn: metaData =>
          fetcher<SearchProfilesQuery, SearchProfilesQueryVariables>(
            SearchProfilesDocument,
            { ...variables, ...(metaData.pageParam ?? {}) }
          )(),
        ...restOptions
      };
    })()
  );
};
