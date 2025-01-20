/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  fragment AssetFieldsFragment on CAssets {\n    ticker\n    rootId\n    name\n    id\n    icon\n    description\n    assetTypeId\n    assetStatusId\n    assetType {\n      definition\n      id\n      name\n    }\n    assetStatus {\n      name\n      id\n      definition\n    }\n    assetDeployments {\n      id\n      deploymentId\n      assetId\n      smartContractDeployment {\n        id\n        deployedOnProduct {\n          id\n          name\n          root {\n            slug\n          }\n        }\n        assetStandard {\n          id\n        }\n        smartContracts {\n          name\n          id\n          deploymentId\n          deploymentDate\n          address\n        }\n        deploymentType {\n          name\n          id\n          definition\n        }\n      }\n    }\n    urls(order_by: { urlTypeId: Asc }) {\n      url\n      urlType {\n        name\n        id\n        definition\n      }\n    }\n  }\n": types.AssetFieldsFragmentFragmentDoc,
    "\n  fragment EntityFieldsFragment on CEntities {\n    name\n    tradeName\n    taxIdentificationNumber\n    localRegistrationNumber\n    leiNumber\n    id\n    dateOfIncorporation\n    address\n    entityType {\n      name\n      id\n      definition\n    }\n    country {\n      name\n      id\n      code\n    }\n    urls {\n      url\n      urlType {\n        name\n        id\n        definition\n      }\n    }\n  }\n": types.EntityFieldsFragmentFragmentDoc,
    "\n  fragment ProfileFragment on CProfileInfos {\n    profileSector {\n      name\n    }\n    profileType {\n      name\n    }\n    root {\n      assets {\n        ticker\n      }\n    }\n    profileStatus {\n      name\n      id\n    }\n    root {\n      profileTags {\n        tag {\n          name\n          id\n        }\n      }\n    }\n    mainProduct: root {\n      products(where: { isMainProduct: { _eq: \"1\" } }, limit: 1) {\n        productType {\n          name\n        }\n      }\n    }\n  }\n": types.ProfileFragmentFragmentDoc,
    "\n  fragment ProductFieldsFragment on CProducts {\n    rootId\n    productTypeId\n    productStatusId\n    name\n    launchDate\n    isMainProduct\n    id\n    description\n    productType {\n      name\n      id\n      definition\n    }\n    productStatus {\n      name\n      id\n      definition\n    }\n    productDeployments {\n      smartContractDeployment {\n        deployedOnProduct {\n          id\n          name\n          root {\n            slug\n          }\n        }\n        assetStandard {\n          id\n        }\n        deploymentType {\n          name\n        }\n        smartContracts {\n          name\n          id\n          deploymentDate\n          address\n          deploymentId\n        }\n        isOfStandardId\n        id\n      }\n    }\n    supportsProducts {\n      supportsProduct {\n        name\n        id\n        root {\n          slug\n        }\n      }\n    }\n    urls(order_by: { urlTypeId: Asc }) {\n      url\n      urlType {\n        name\n        id\n        definition\n      }\n    }\n    productAssetRelationships {\n      assetId\n      asset {\n        name\n        id\n        assetType {\n          name\n        }\n        root {\n          slug\n        }\n      }\n      assetSupportType {\n        name\n      }\n      product {\n        name\n        id\n        description\n      }\n    }\n  }\n": types.ProductFieldsFragmentFragmentDoc,
    "\n  fragment ProfileHeadingFragment on CProfileInfos {\n    logo\n    name\n    urls(order_by: { urlTypeId: Asc }) {\n      url\n      urlType {\n        name\n      }\n    }\n    root {\n      socials {\n        name\n        socialType {\n          name\n        }\n        urls(order_by: { urlTypeId: Asc }) {\n          url\n        }\n      }\n    }\n  }\n": types.ProfileHeadingFragmentFragmentDoc,
    "\n  query getProfileData($where: CProfileInfosBoolExp) {\n    profileInfos(limit: 1, offset: 0, where: $where) {\n      tagLine\n      descriptionShort\n      descriptionLong\n      ...ProfileFragment\n      ...ProfileHeadingFragment\n      root {\n        products {\n          id\n          ...ProductFieldsFragment\n        }\n        assets {\n          id\n          ...AssetFieldsFragment\n        }\n        entities {\n          id\n          ...EntityFieldsFragment\n        }\n      }\n    }\n  }\n": types.GetProfileDataDocument,
    "\n  fragment ProfileCardFragment on CProfileInfos {\n    name\n    logo\n    id\n    tagLine\n    descriptionShort\n    profileTypeId\n    profileStatusId\n    profileSectorId\n    foundingDate\n    profileSector {\n      name\n      id\n      definition\n    }\n    profileStatus {\n      name\n      id\n      definition\n    }\n    profileType {\n      name\n      id\n      definition\n    }\n    urls(order_by: { urlTypeId: Asc }) {\n      url\n      urlType {\n        name\n        id\n        definition\n      }\n    }\n    mainProduct: root {\n      products(where: { isMainProduct: { _eq: \"1\" } }, limit: 1) {\n        name\n        productType {\n          name\n        }\n      }\n    }\n    root {\n      urlMain\n      slug\n      assets {\n        ticker\n        name\n        id\n      }\n      socials {\n        name\n        socialType {\n          name\n        }\n        urls(order_by: { urlTypeId: Asc }) {\n          url\n        }\n      }\n      profileTags {\n        tag {\n          name\n          id\n        }\n      }\n      products {\n        id\n        name\n        ...ProductFieldsFragment\n      }\n      assets {\n        ...AssetFieldsFragment\n      }\n    }\n  }\n": types.ProfileCardFragmentFragmentDoc,
    "\n  query SearchProfiles(\n    $order_by: [CProfileInfosOrderBy!]\n    $where: CProfileInfosBoolExp\n    $limit: Int\n    $offset: Int\n  ) {\n    profileInfos(\n      limit: $limit\n      offset: $offset\n      where: $where\n      order_by: $order_by\n    ) {\n      ...ProfileCardFragment\n    }\n  }\n": types.SearchProfilesDocument,
    "\n  query GetOrderByFields($name: String!) {\n    __type(name: $name) {\n      inputFields {\n        name\n        type {\n          inputFields {\n            name\n          }\n          name\n          kind\n          ofType {\n            name\n            kind\n          }\n        }\n      }\n    }\n  }\n": types.GetOrderByFieldsDocument,
    "\n          query getDeployedOnProductsOptions(\n            $deployedOnProductsWhere: CProductsBoolExp\n            $where: CProductsBoolExp\n          ) {\n            deployedOnProducts: products(where: $deployedOnProductsWhere) {\n              label: name\n              value: id\n              description\n            }\n            products(where: $where) {\n              id\n            }\n          }\n        ": types.GetDeployedOnProductsOptionsDocument,
    "\n          query getAssetStandardOptions($where: CAssetStandardsBoolExp) {\n            assetStandards(where: $where) {\n              label: name\n              value: id\n              description: definition\n            }\n          }\n        ": types.GetAssetStandardOptionsDocument,
    "\n          query getAssetTickerOptions($where: CAssetsBoolExp) {\n            assets(where: $where) {\n              ticker\n            }\n          }\n        ": types.GetAssetTickerOptionsDocument,
    "\n          query getAssetTypeOptions($where: CAssetTypesBoolExp) {\n            assetTypes(where: $where) {\n              label: name\n              value: id\n              description: definition\n            }\n          }\n        ": types.GetAssetTypeOptionsDocument,
    "\n          query getEntityCountryOptions($where: CCountriesBoolExp) {\n            countries(where: $where) {\n              label: name\n              value: id\n            }\n          }\n        ": types.GetEntityCountryOptionsDocument,
    "\n          query getEntityNameOptions($where: CEntitiesBoolExp) {\n            entities(where: $where) {\n              label: name\n              value: id\n            }\n          }\n        ": types.GetEntityNameOptionsDocument,
    "\n          query getEntityTypeOptions($where: CEntityTypesBoolExp) {\n            entityTypes(where: $where) {\n              label: name\n              value: id\n              description: definition\n            }\n          }\n        ": types.GetEntityTypeOptionsDocument,
    "\n          query getProductAssetRelationshipsOptions($where: CAssetsBoolExp) {\n            assets(where: $where) {\n              ticker\n            }\n          }\n        ": types.GetProductAssetRelationshipsOptionsDocument,
    "\n          query getProductStatusesOptions($where: CProductStatusesBoolExp) {\n            productStatuses(where: $where) {\n              label: name\n              value: id\n              description: definition\n            }\n          }\n        ": types.GetProductStatusesOptionsDocument,
    "\n          query getProductTypeOptions(\n            $where: CProductTypesBoolExp\n            $aggregateInput: CProductsFilterInput\n          ) {\n            productTypes(where: $where) {\n              label: name\n              value: id\n              description: definition\n              productsAggregate(filter_input: $aggregateInput) {\n                _count\n              }\n            }\n          }\n        ": types.GetProductTypeOptionsDocument,
    "\n          query getProfileSectorsOptions(\n            $where: CProfileSectorsBoolExp\n            $aggregateInput: CProfileInfosFilterInput\n          ) {\n            profileSectors(where: $where) {\n              label: name\n              value: id\n              description: definition\n              profileInfosAggregate(filter_input: $aggregateInput) {\n                _count\n              }\n            }\n          }\n        ": types.GetProfileSectorsOptionsDocument,
    "\n          query getProfileStatusesOptions($where: CProfileStatusesBoolExp) {\n            profileStatuses(where: $where) {\n              label: name\n              value: id\n              description: definition\n            }\n          }\n        ": types.GetProfileStatusesOptionsDocument,
    "\n          query getProfileTypeOptions($where: CProfileTypesBoolExp) {\n            profileTypes(where: $where) {\n              label: name\n              value: id\n              description: definition\n            }\n          }\n        ": types.GetProfileTypeOptionsDocument,
    "\n          query getSupportsProductsOptions(\n            $supportsProductsWhere: CSupportsProductsBoolExp\n            $where: CProductsBoolExp\n          ) {\n            supportsProducts(where: $supportsProductsWhere) {\n              supportsProduct {\n                name\n                id\n                description\n              }\n            }\n            products(where: $where) {\n              id\n            }\n          }\n        ": types.GetSupportsProductsOptionsDocument,
    "\n          query getTagsOptions(\n            $where: CTagsBoolExp\n            $aggregateInput: CProfileTagsFilterInput\n          ) {\n            tags(where: $where) {\n              value: id\n              label: name\n              description\n              profileTagsAggregate(filter_input: $aggregateInput) {\n                _count\n              }\n            }\n          }\n        ": types.GetTagsOptionsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment AssetFieldsFragment on CAssets {\n    ticker\n    rootId\n    name\n    id\n    icon\n    description\n    assetTypeId\n    assetStatusId\n    assetType {\n      definition\n      id\n      name\n    }\n    assetStatus {\n      name\n      id\n      definition\n    }\n    assetDeployments {\n      id\n      deploymentId\n      assetId\n      smartContractDeployment {\n        id\n        deployedOnProduct {\n          id\n          name\n          root {\n            slug\n          }\n        }\n        assetStandard {\n          id\n        }\n        smartContracts {\n          name\n          id\n          deploymentId\n          deploymentDate\n          address\n        }\n        deploymentType {\n          name\n          id\n          definition\n        }\n      }\n    }\n    urls(order_by: { urlTypeId: Asc }) {\n      url\n      urlType {\n        name\n        id\n        definition\n      }\n    }\n  }\n"): typeof import('./graphql').AssetFieldsFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment EntityFieldsFragment on CEntities {\n    name\n    tradeName\n    taxIdentificationNumber\n    localRegistrationNumber\n    leiNumber\n    id\n    dateOfIncorporation\n    address\n    entityType {\n      name\n      id\n      definition\n    }\n    country {\n      name\n      id\n      code\n    }\n    urls {\n      url\n      urlType {\n        name\n        id\n        definition\n      }\n    }\n  }\n"): typeof import('./graphql').EntityFieldsFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ProfileFragment on CProfileInfos {\n    profileSector {\n      name\n    }\n    profileType {\n      name\n    }\n    root {\n      assets {\n        ticker\n      }\n    }\n    profileStatus {\n      name\n      id\n    }\n    root {\n      profileTags {\n        tag {\n          name\n          id\n        }\n      }\n    }\n    mainProduct: root {\n      products(where: { isMainProduct: { _eq: \"1\" } }, limit: 1) {\n        productType {\n          name\n        }\n      }\n    }\n  }\n"): typeof import('./graphql').ProfileFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ProductFieldsFragment on CProducts {\n    rootId\n    productTypeId\n    productStatusId\n    name\n    launchDate\n    isMainProduct\n    id\n    description\n    productType {\n      name\n      id\n      definition\n    }\n    productStatus {\n      name\n      id\n      definition\n    }\n    productDeployments {\n      smartContractDeployment {\n        deployedOnProduct {\n          id\n          name\n          root {\n            slug\n          }\n        }\n        assetStandard {\n          id\n        }\n        deploymentType {\n          name\n        }\n        smartContracts {\n          name\n          id\n          deploymentDate\n          address\n          deploymentId\n        }\n        isOfStandardId\n        id\n      }\n    }\n    supportsProducts {\n      supportsProduct {\n        name\n        id\n        root {\n          slug\n        }\n      }\n    }\n    urls(order_by: { urlTypeId: Asc }) {\n      url\n      urlType {\n        name\n        id\n        definition\n      }\n    }\n    productAssetRelationships {\n      assetId\n      asset {\n        name\n        id\n        assetType {\n          name\n        }\n        root {\n          slug\n        }\n      }\n      assetSupportType {\n        name\n      }\n      product {\n        name\n        id\n        description\n      }\n    }\n  }\n"): typeof import('./graphql').ProductFieldsFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ProfileHeadingFragment on CProfileInfos {\n    logo\n    name\n    urls(order_by: { urlTypeId: Asc }) {\n      url\n      urlType {\n        name\n      }\n    }\n    root {\n      socials {\n        name\n        socialType {\n          name\n        }\n        urls(order_by: { urlTypeId: Asc }) {\n          url\n        }\n      }\n    }\n  }\n"): typeof import('./graphql').ProfileHeadingFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getProfileData($where: CProfileInfosBoolExp) {\n    profileInfos(limit: 1, offset: 0, where: $where) {\n      tagLine\n      descriptionShort\n      descriptionLong\n      ...ProfileFragment\n      ...ProfileHeadingFragment\n      root {\n        products {\n          id\n          ...ProductFieldsFragment\n        }\n        assets {\n          id\n          ...AssetFieldsFragment\n        }\n        entities {\n          id\n          ...EntityFieldsFragment\n        }\n      }\n    }\n  }\n"): typeof import('./graphql').GetProfileDataDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ProfileCardFragment on CProfileInfos {\n    name\n    logo\n    id\n    tagLine\n    descriptionShort\n    profileTypeId\n    profileStatusId\n    profileSectorId\n    foundingDate\n    profileSector {\n      name\n      id\n      definition\n    }\n    profileStatus {\n      name\n      id\n      definition\n    }\n    profileType {\n      name\n      id\n      definition\n    }\n    urls(order_by: { urlTypeId: Asc }) {\n      url\n      urlType {\n        name\n        id\n        definition\n      }\n    }\n    mainProduct: root {\n      products(where: { isMainProduct: { _eq: \"1\" } }, limit: 1) {\n        name\n        productType {\n          name\n        }\n      }\n    }\n    root {\n      urlMain\n      slug\n      assets {\n        ticker\n        name\n        id\n      }\n      socials {\n        name\n        socialType {\n          name\n        }\n        urls(order_by: { urlTypeId: Asc }) {\n          url\n        }\n      }\n      profileTags {\n        tag {\n          name\n          id\n        }\n      }\n      products {\n        id\n        name\n        ...ProductFieldsFragment\n      }\n      assets {\n        ...AssetFieldsFragment\n      }\n    }\n  }\n"): typeof import('./graphql').ProfileCardFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SearchProfiles(\n    $order_by: [CProfileInfosOrderBy!]\n    $where: CProfileInfosBoolExp\n    $limit: Int\n    $offset: Int\n  ) {\n    profileInfos(\n      limit: $limit\n      offset: $offset\n      where: $where\n      order_by: $order_by\n    ) {\n      ...ProfileCardFragment\n    }\n  }\n"): typeof import('./graphql').SearchProfilesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetOrderByFields($name: String!) {\n    __type(name: $name) {\n      inputFields {\n        name\n        type {\n          inputFields {\n            name\n          }\n          name\n          kind\n          ofType {\n            name\n            kind\n          }\n        }\n      }\n    }\n  }\n"): typeof import('./graphql').GetOrderByFieldsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n          query getDeployedOnProductsOptions(\n            $deployedOnProductsWhere: CProductsBoolExp\n            $where: CProductsBoolExp\n          ) {\n            deployedOnProducts: products(where: $deployedOnProductsWhere) {\n              label: name\n              value: id\n              description\n            }\n            products(where: $where) {\n              id\n            }\n          }\n        "): typeof import('./graphql').GetDeployedOnProductsOptionsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n          query getAssetStandardOptions($where: CAssetStandardsBoolExp) {\n            assetStandards(where: $where) {\n              label: name\n              value: id\n              description: definition\n            }\n          }\n        "): typeof import('./graphql').GetAssetStandardOptionsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n          query getAssetTickerOptions($where: CAssetsBoolExp) {\n            assets(where: $where) {\n              ticker\n            }\n          }\n        "): typeof import('./graphql').GetAssetTickerOptionsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n          query getAssetTypeOptions($where: CAssetTypesBoolExp) {\n            assetTypes(where: $where) {\n              label: name\n              value: id\n              description: definition\n            }\n          }\n        "): typeof import('./graphql').GetAssetTypeOptionsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n          query getEntityCountryOptions($where: CCountriesBoolExp) {\n            countries(where: $where) {\n              label: name\n              value: id\n            }\n          }\n        "): typeof import('./graphql').GetEntityCountryOptionsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n          query getEntityNameOptions($where: CEntitiesBoolExp) {\n            entities(where: $where) {\n              label: name\n              value: id\n            }\n          }\n        "): typeof import('./graphql').GetEntityNameOptionsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n          query getEntityTypeOptions($where: CEntityTypesBoolExp) {\n            entityTypes(where: $where) {\n              label: name\n              value: id\n              description: definition\n            }\n          }\n        "): typeof import('./graphql').GetEntityTypeOptionsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n          query getProductAssetRelationshipsOptions($where: CAssetsBoolExp) {\n            assets(where: $where) {\n              ticker\n            }\n          }\n        "): typeof import('./graphql').GetProductAssetRelationshipsOptionsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n          query getProductStatusesOptions($where: CProductStatusesBoolExp) {\n            productStatuses(where: $where) {\n              label: name\n              value: id\n              description: definition\n            }\n          }\n        "): typeof import('./graphql').GetProductStatusesOptionsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n          query getProductTypeOptions(\n            $where: CProductTypesBoolExp\n            $aggregateInput: CProductsFilterInput\n          ) {\n            productTypes(where: $where) {\n              label: name\n              value: id\n              description: definition\n              productsAggregate(filter_input: $aggregateInput) {\n                _count\n              }\n            }\n          }\n        "): typeof import('./graphql').GetProductTypeOptionsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n          query getProfileSectorsOptions(\n            $where: CProfileSectorsBoolExp\n            $aggregateInput: CProfileInfosFilterInput\n          ) {\n            profileSectors(where: $where) {\n              label: name\n              value: id\n              description: definition\n              profileInfosAggregate(filter_input: $aggregateInput) {\n                _count\n              }\n            }\n          }\n        "): typeof import('./graphql').GetProfileSectorsOptionsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n          query getProfileStatusesOptions($where: CProfileStatusesBoolExp) {\n            profileStatuses(where: $where) {\n              label: name\n              value: id\n              description: definition\n            }\n          }\n        "): typeof import('./graphql').GetProfileStatusesOptionsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n          query getProfileTypeOptions($where: CProfileTypesBoolExp) {\n            profileTypes(where: $where) {\n              label: name\n              value: id\n              description: definition\n            }\n          }\n        "): typeof import('./graphql').GetProfileTypeOptionsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n          query getSupportsProductsOptions(\n            $supportsProductsWhere: CSupportsProductsBoolExp\n            $where: CProductsBoolExp\n          ) {\n            supportsProducts(where: $supportsProductsWhere) {\n              supportsProduct {\n                name\n                id\n                description\n              }\n            }\n            products(where: $where) {\n              id\n            }\n          }\n        "): typeof import('./graphql').GetSupportsProductsOptionsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n          query getTagsOptions(\n            $where: CTagsBoolExp\n            $aggregateInput: CProfileTagsFilterInput\n          ) {\n            tags(where: $where) {\n              value: id\n              label: name\n              description\n              profileTagsAggregate(filter_input: $aggregateInput) {\n                _count\n              }\n            }\n          }\n        "): typeof import('./graphql').GetTagsOptionsDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
