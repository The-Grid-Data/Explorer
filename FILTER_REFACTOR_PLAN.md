# Filter System Refactoring Plan

## Executive Summary

This document outlines a comprehensive refactoring plan for the filter system to eliminate ~70% code duplication, fix critical bugs, and establish maintainable patterns for future development.

## Current Problems

### 1. Massive Code Duplication (~70% of filter code)

**Issue**: The `buildAggregateInput()` and `buildWhere()` functions are nearly identical across multiple filters but with slight GraphQL schema navigation differences.

**Examples of Duplication**:
- `tags.filter.ts` lines 82-203: 121 lines of constraint building
- `product-types.filter.ts` lines 71-234: 163 lines of constraint building  
- `profile-sectors.filter.ts` lines 67-198: 131 lines of constraint building

**Total Duplicate Code**: ~415 lines that could be reduced to ~50 lines with shared utilities.

### 2. Missing `productIds` Override Constraints

**Critical Issue**: The complex filters are missing the `overrideFilterValues.productIds` constraint, which is the root cause of tag counts not respecting config.json constraints.

**Required Pattern** (from `default-where-filter.ts:8-56`):
```typescript
if (siteConfig.overrideFilterValues.productIds?.length) {
  conditions.push({
    _or: [
      {
        products: {
          supportsProducts: {
            supportsProductId: { _in: siteConfig.overrideFilterValues.productIds }
          }
        }
      },
      {
        products: {
          productDeployments: {
            smartContractDeployment: {
              deployedOnId: { _in: siteConfig.overrideFilterValues.productIds }
            }
          }
        }
      },
      {
        products: {
          id: { _in: siteConfig.overrideFilterValues.productIds }
        }
      }
    ]
  });
}
```

**Currently Missing From**:
- `tags.filter.ts` buildAggregateInput() and buildTagsWhere()
- `product-types.filter.ts` buildAggregateInput() and buildProfileSectorsWhere() 
- `profile-sectors.filter.ts` buildAggregateInput() and buildProfileSectorsWhere()

### 3. Critical Bug in `product-deployed-on.filter.ts`

**Line 84**: References non-existent `siteConfig.overrideOptionsFilterValues.productTypes`
**Should be**: `siteConfig.overrideFilterValues.productTypes`

### 4. Inconsistent Constraint Application

**Issue**: Some filters apply override values correctly, others don't, leading to inconsistent behavior across the application.

**Example Inconsistencies**:
- `tags.filter.ts` buildAggregateInput() missing `overrideFilterValues.productTypes`
- All complex filters missing `overrideFilterValues.productIds`
- Inconsistent merging of filter values vs override values

## Proposed Solution: Constraint Builder System

### Phase 1: Create Constraint Builder Infrastructure

#### File Structure
```
constraint-builders/
├── types.ts           # TypeScript interfaces
├── core.ts           # Core reusable constraint functions  
├── builders.ts       # High-level constraint builders
└── index.ts          # Export all builders
```

#### Core Constraint Functions (`core.ts`)

```typescript
export function buildProductIdsConstraints<T>(
  constraintWrapper: (constraint: any) => T,
  productIds: string[]
): T[] {
  if (!isNotEmpty(productIds)) return [];
  
  return [constraintWrapper({
    _or: [
      { products: { supportsProducts: { supportsProductId: { _in: productIds } } } },
      { products: { productDeployments: { smartContractDeployment: { deployedOnId: { _in: productIds } } } } },
      { products: { id: { _in: productIds } } }
    ]
  })];
}

export function buildProductTypesConstraints<T>(
  constraintWrapper: (constraint: any) => T,
  filterValues: string[],
  overrideValues: string[]
): T[] {
  const allValues = [...filterValues, ...overrideValues];
  if (!isNotEmpty(allValues)) return [];
  
  return [constraintWrapper({
    products: { productTypeId: { _in: allValues } }
  })];
}

// Similar functions for tags, profileSectors, productAssetRelationships
```

#### High-Level Builders (`builders.ts`)

```typescript
export function buildProfileInfosConstraints(filterStore: FiltersStore): ProfileInfosBoolExp {
  const conditions: ProfileInfosBoolExp[] = [];
  
  // Use core constraint builders
  conditions.push(...buildTagsConstraints(/* ... */));
  conditions.push(...buildProductTypesConstraints(/* ... */));
  conditions.push(...buildProfileSectorsConstraints(/* ... */));
  conditions.push(...buildProductAssetRelationshipsConstraints(/* ... */));
  conditions.push(...buildProductIdsConstraints(/* ... */)); // THE MISSING PIECE!
  
  return mergeConditions(conditions);
}

// Similar builders for each GraphQL type
export function buildProfileTagsConstraints(filterStore: FiltersStore): ProfileTagsBoolExp
export function buildTagsWhereConstraints(filterStore: FiltersStore): TagsBoolExp  
export function buildProductsConstraints(filterStore: FiltersStore): ProductsBoolExp
export function buildProductTypesWhereConstraints(filterStore: FiltersStore): ProductTypesBoolExp
export function buildProfileSectorsWhereConstraints(filterStore: FiltersStore): ProfileSectorsBoolExp
```

### Phase 2: Refactor Filter Definitions

#### Before (tags.filter.ts - 203 lines)
```typescript
function buildTagsWhere(filterStore: FiltersStore): TagsBoolExp {
  const conditions: TagsBoolExp[] = [];
  
  // 60+ lines of duplicate constraint building logic
  if (isNotEmpty(filterStore.profileSectorsFilter)) {
    conditions.push({
      profileTags: {
        root: {
          products: {
            root: {
              profileInfos: {
                profileSectorId: { _in: filterStore.profileSectorsFilter }
              }
            }
          }
        }
      }
    });
  }
  
  // ... 50+ more lines of similar patterns
  // ... MISSING productIds constraint entirely!
  
  return mergeConditions(conditions);
}

function buildAggregateInput(filterStore: FiltersStore): ProfileTagsBoolExp {
  // Another 60+ lines of nearly identical logic
  // ... MISSING productTypes overrides!
  // ... MISSING productIds constraint entirely!
}
```

#### After (tags.filter.ts - ~80 lines)
```typescript
import { 
  buildTagsWhereConstraints,
  buildProfileTagsConstraints
} from '../constraint-builders';

export const useTagsFilter = (filterStore: FiltersStore) => {
  // ... hook logic unchanged ...
  
  const data = await execute(query, {
    where: buildTagsWhereConstraints(filterStore),
    aggregateInput: { where: buildProfileTagsConstraints(filterStore) }
  });
  
  // ... rest unchanged ...
};

// No more buildTagsWhere() or buildAggregateInput() functions!
// All constraint logic moved to shared, tested, reusable builders
```

### Phase 3: Benefits Analysis

#### Code Reduction
- **tags.filter.ts**: 203 lines → ~80 lines (-60%)
- **product-types.filter.ts**: 234 lines → ~70 lines (-70%)
- **profile-sectors.filter.ts**: 198 lines → ~65 lines (-67%)
- **Total Reduction**: ~400 lines → ~50 lines shared utilities (-87%)

#### Bug Fixes
✅ **Fixed**: Missing `productIds` constraints in all complex filters  
✅ **Fixed**: Missing `productTypes` overrides in aggregate functions  
✅ **Fixed**: `overrideOptionsFilterValues` typo in `product-deployed-on.filter.ts`  
✅ **Prevented**: Future inconsistencies through shared constraint builders

#### Maintainability Improvements
- **Single Source of Truth**: All constraint logic centralized
- **Type Safety**: Shared TypeScript interfaces prevent errors
- **Testability**: Constraint builders can be unit tested independently
- **Consistency**: All filters use identical constraint application logic
- **Future Development**: New filters can reuse constraint builders

## Implementation Strategy

### Step 1: Create Infrastructure (No Breaking Changes)
1. Create `constraint-builders/` directory
2. Implement core constraint functions
3. Implement high-level builders  
4. Add TypeScript interfaces

### Step 2: Refactor Existing Filters
1. Update `tags.filter.ts` to use new builders
2. Update `product-types.filter.ts` to use new builders  
3. Update `profile-sectors.filter.ts` to use new builders
4. Fix bug in `product-deployed-on.filter.ts`

### Step 3: Validate & Test
1. Verify tag counts respect config constraints
2. Test all filter combinations work correctly
3. Run existing tests to ensure no regressions

### Step 4: Documentation & Guidelines
1. Document constraint builder usage
2. Create guidelines for new filter development
3. Add examples of common patterns

## Expected Outcomes

### Immediate Benefits
- **Tag count bug fixed**: Filter counts will properly respect `config.json` constraints
- **70% less code**: Massive reduction in duplicate constraint building logic
- **Critical bug fixed**: `product-deployed-on.filter.ts` typo corrected

### Long-term Benefits  
- **Maintainable**: Changes to constraint logic only need to be made in one place
- **Consistent**: All filters use identical, tested constraint patterns
- **Extensible**: New filters can easily reuse constraint building patterns
- **Type-safe**: Shared interfaces prevent constraint building errors

## Risk Assessment

### Low Risk Implementation
- **Non-breaking changes**: New constraint builders don't affect existing functionality
- **Gradual migration**: Filters can be updated one at a time
- **Backwards compatible**: Old functions can remain during transition

### Testing Strategy
- **Unit tests**: Test constraint builders independently
- **Integration tests**: Verify filters work with new builders
- **Regression tests**: Ensure existing functionality unchanged
- **Manual testing**: Verify tag counts respect config constraints

## Conclusion

This refactoring addresses the core issues in the filter system:
1. **Eliminates massive code duplication** through shared constraint builders
2. **Fixes critical missing constraints** that cause tag count bugs
3. **Establishes maintainable patterns** for future development
4. **Provides type safety** to prevent future constraint errors

The implementation is low-risk, gradual, and provides immediate value by fixing the tag count issue while establishing a foundation for long-term maintainability.