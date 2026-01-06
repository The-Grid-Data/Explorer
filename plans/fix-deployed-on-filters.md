# Fix Asset Deployed On Filter Consistency

## Problem Statement

The **Asset Deployed On** filter uses `overrideFilterValues.productTypes` instead of `overrideOptionsFilterValues.productTypes`, making it inconsistent with the **Product Deployed On** filter.

## Current State

### Product Deployed On Filter ✅ CORRECT
[`product-deployed-on.filter.ts`](../components/containers/profile-list/hooks/filters/filter-definitions/product-deployed-on.filter.ts:84-97)

**Already uses** `overrideOptionsFilterValues.productTypes`:
```typescript
if (isNotEmpty(siteConfig.overrideOptionsFilterValues.productTypes)) {
  conditions.push({
    _or: [{
      root: {
        products: {
          productTypeId: {
            _in: siteConfig.overrideOptionsFilterValues.productTypes
          }
        }
      }
    }]
  });
}
```

### Asset Deployed On Filter ❌ NEEDS FIX
[`asset-deployed-on.filter.ts`](../components/containers/profile-list/hooks/filters/filter-definitions/asset-deployed-on.filter.ts:82-91)

**Currently uses** `overrideFilterValues.productTypes`:
```typescript
if (isNotEmpty(siteConfig.overrideFilterValues.productTypes)) {
  conditions.push({
    root: {
      products: {
        productTypeId: {
          _in: siteConfig.overrideFilterValues.productTypes
        }
      }
    }
  });
}
```

## Solution

Change line 82 in [`asset-deployed-on.filter.ts`](../components/containers/profile-list/hooks/filters/filter-definitions/asset-deployed-on.filter.ts:82) from:
```typescript
if (isNotEmpty(siteConfig.overrideFilterValues.productTypes)) {
```

To:
```typescript
if (isNotEmpty(siteConfig.overrideOptionsFilterValues.productTypes)) {
```

This makes it consistent with the product-deployed-on filter and ensures both filters respect the `overrideOptionsFilterValues.productTypes` configuration (IDs: 15, 16, 17).

## Impact

- ✅ Asset Deployed On filter will now limit options to products with types 15, 16, 17
- ✅ Consistent behavior across both deployed-on filters
- ✅ Both filters now respect `overrideOptionsFilterValues.productTypes`
- ✅ No breaking changes

## Files to Modify

- [`components/containers/profile-list/hooks/filters/filter-definitions/asset-deployed-on.filter.ts`](../components/containers/profile-list/hooks/filters/filter-definitions/asset-deployed-on.filter.ts:82) - Change one line for consistency