import { isNotEmpty } from '@/lib/utils/is-not-empty';

/**
 * Core constraint builders that handle the most common filter patterns
 * These eliminate the massive duplication across all filter files
 */

/**
 * Build productIds constraints using the complex OR logic
 * This is the most common missing constraint across filters
 */
export function buildProductIdsConstraints<T extends Record<string, any>>(
  constraintWrapper: (constraint: any) => T,
  overrideProductIds: string[]
): T[] {
  if (!isNotEmpty(overrideProductIds)) return [];

  return [
    constraintWrapper({
      _or: [
        {
          products: {
            supportsProducts: {
              supportsProductId: { _in: overrideProductIds }
            }
          }
        },
        {
          products: {
            productDeployments: {
              smartContractDeployment: {
                deployedOnId: { _in: overrideProductIds }
              }
            }
          }
        },
        {
          products: {
            id: { _in: overrideProductIds }
          }
        }
      ]
    })
  ];
}

/**
 * Build productTypes constraints
 */
export function buildProductTypesConstraints<T extends Record<string, any>>(
  constraintWrapper: (constraint: any) => T,
  filterValues: string[],
  overrideValues: string[]
): T[] {
  const allValues = [...filterValues, ...overrideValues];
  if (!isNotEmpty(allValues)) return [];

  return [
    constraintWrapper({
      products: {
        productTypeId: { _in: allValues }
      }
    })
  ];
}

/**
 * Build tags constraints
 */
export function buildTagsConstraints<T extends Record<string, any>>(
  constraintWrapper: (constraint: any) => T,
  filterValues: string[],
  overrideValues: string[]
): T[] {
  const allValues = [...filterValues, ...overrideValues];
  if (!isNotEmpty(allValues)) return [];

  return [
    constraintWrapper({
      profileTags: {
        tagId: { _in: allValues }
      }
    })
  ];
}

/**
 * Build profile sectors constraints
 */
export function buildProfileSectorsConstraints<T extends Record<string, any>>(
  constraintWrapper: (constraint: any) => T,
  filterValues: string[]
): T[] {
  if (!isNotEmpty(filterValues)) return [];

  return [
    constraintWrapper({
      profileInfos: {
        profileSectorId: { _in: filterValues }
      }
    })
  ];
}

/**
 * Build product asset relationships constraints
 */
export function buildProductAssetRelationshipsConstraints<T extends Record<string, any>>(
  constraintWrapper: (constraint: any) => T,
  filterValues: string[],
  overrideValues: string[]
): T[] {
  const allValues = [...filterValues, ...overrideValues];
  if (!isNotEmpty(allValues)) return [];

  return [
    constraintWrapper({
      products: {
        productAssetRelationships: {
          asset: {
            ticker: { _in: allValues }
          }
        }
      }
    })
  ];
}