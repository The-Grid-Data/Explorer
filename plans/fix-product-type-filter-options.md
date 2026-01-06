# Fix Product Type Filter Options Bug

## Problem Statement

The **Product types** filter in the hero section (top of the page) is showing ALL product types from the database, even when `overrideOptionsFilterValues.productTypes` is configured to limit which options should be displayed to only IDs 15, 16, and 17.

### Current Configuration
In [`config.json`](../lib/config/config.json:94-99):
```json
"overrideOptionsFilterValues": {
  "productTypes": ["15", "16", "17"]
}
```

This configuration is intended to limit the product type filter dropdown in the hero section to only show options with IDs 15, 16, and 17, but it's currently being ignored.

### Where the Filter Appears
The filter is displayed in [`profile-list-hero-filters.tsx`](../components/containers/profile-list/components/profile-list-hero-filters/profile-list-hero-filters.tsx:95-120):
- Lines 95-120: "Product types" section in the hero
- Uses `filters.productTypesFilter` which comes from [`product-types.filter.ts`](../components/containers/profile-list/hooks/filters/filter-definitions/product-types.filter.ts:1)

## Root Cause Analysis

### Two Different Configuration Options

The codebase has two separate configuration mechanisms for product types:

1. **`overrideFilterValues.productTypes`** (lines 41-86 in config.json)
   - **Purpose**: Restricts which profiles are shown in the results
   - **Current Status**: ✅ Working correctly
   - **Used in**: [`default-where-filter.ts`](../lib/utils/default-where-filter.ts:121-131) and [`product-types.filter.ts`](../components/containers/profile-list/hooks/filters/filter-definitions/product-types.filter.ts:79-95)

2. **`overrideOptionsFilterValues.productTypes`** (lines 95-99 in config.json)
   - **Purpose**: Limits which product type options appear in the filter dropdown UI
   - **Current Status**: ❌ NOT implemented in product-types.filter.ts
   - **Should affect**: Only the hero section "Product types" filter options

### The Bug

In [`product-types.filter.ts`](../components/containers/profile-list/hooks/filters/filter-definitions/product-types.filter.ts:28-62), the `getOptions` function:

1. Queries ALL product types from the database (line 35)
2. Filters them based on `overrideFilterValues.productTypes` via `buildProfileSectorsWhere` (lines 79-95)
3. **NEVER checks `overrideOptionsFilterValues.productTypes`** to limit the displayed options

This means even though the data is restricted to profiles with the configured product types, the filter dropdown still shows ALL product types that exist in those profiles, not just the ones specified in `overrideOptionsFilterValues.productTypes`.

## Solution Design

### Approach

Add filtering logic to [`product-types.filter.ts`](../components/containers/profile-list/hooks/filters/filter-definitions/product-types.filter.ts:1) that:

1. Checks if `overrideOptionsFilterValues.productTypes` is configured
2. If configured, adds a WHERE condition to the GraphQL query to only fetch product types with IDs in that list
3. If not configured, behaves as it does now (shows all product types)

### Implementation Details

#### Location
File: [`product-types.filter.ts`](../components/containers/profile-list/hooks/filters/filter-definitions/product-types.filter.ts:73-95)
Function: `buildProfileSectorsWhere`

#### Changes Required

Add a new condition at the beginning of `buildProfileSectorsWhere` function (after line 76):

```typescript
function buildProfileSectorsWhere(
  filterStore: FiltersStore
): ProductTypesBoolExp {
  const conditions: ProductTypesBoolExp[] = [];

  // NEW: Limit product type options to configured IDs
  if (isNotEmpty(siteConfig.overrideOptionsFilterValues.productTypes)) {
    conditions.push({
      id: {
        _in: siteConfig.overrideOptionsFilterValues.productTypes
      }
    });
  }

  // Apply base config restriction for product types
  if (isNotEmpty(siteConfig.overrideFilterValues.productTypes)) {
    // ... existing code ...
  }
  // ... rest of existing conditions ...
}
```

### Why This Works

1. **Direct ID filtering**: By adding `id: { _in: [...] }` to the ProductTypesBoolExp, we filter the product types table directly
2. **Early in the chain**: This condition is applied to the `productTypes` query itself, not nested in relationships
3. **Consistent with naming**: `overrideOptionsFilterValues` controls which options are shown, `overrideFilterValues` controls which data is returned
4. **Non-breaking**: If `overrideOptionsFilterValues.productTypes` is empty/undefined, the condition isn't added and behavior remains unchanged
5. **Isolated change**: Only affects the product types filter in the hero section, no other filters are touched

## Impact Analysis

### What Will Change
- **Hero section "Product types" filter**: Will only show product types with IDs: 15, 16, 17 (as configured)
- Users won't see product type options that aren't in the allowed list

### What Won't Change
- Data filtering still works via `overrideFilterValues.productTypes` (the large list of ~40 IDs)
- **All other filters remain completely unaffected** (we're NOT touching product-deployed-on or any other filter)
- Profile sectors filter - unchanged
- Tags filter - unchanged
- Any sidebar filters - unchanged

### Edge Cases Handled
1. **Empty configuration**: If `overrideOptionsFilterValues.productTypes` is `[]`, no filtering is applied
2. **Undefined configuration**: If the field doesn't exist, no filtering is applied
3. **Both configs set**: Both `overrideFilterValues` and `overrideOptionsFilterValues` work independently and correctly

## Testing Strategy

### Manual Testing
1. ✅ Verify only product types 15, 16, 17 appear in the hero section "Product types" filter
2. ✅ Verify selecting these filters still works correctly
3. ✅ Verify the profile results are still filtered by the full `overrideFilterValues.productTypes` list
4. ✅ Verify other hero filters (Profile Sectors, Tags) still work correctly
5. ✅ Verify sidebar filters (if any) are not affected

### Regression Testing
1. Test with `overrideOptionsFilterValues.productTypes` set to `[]` - should show all product types
2. Test with `overrideOptionsFilterValues.productTypes` undefined - should show all product types
3. Test with only `overrideFilterValues.productTypes` set - should filter data but show all options

## Configuration Documentation

### Config Schema
The [`config.schema.ts`](../lib/config/config.schema.ts:62-66) already defines this field correctly:

```typescript
overrideOptionsFilterValues: z.object({
  productTypes: z
    .array(z.string())
    .default(defaultConfig.overrideOptionsFilterValues.productTypes)
})
```

### Usage Guide

**`overrideFilterValues.productTypes`**: Controls which profiles appear in search results
- Use this to limit the entire dataset to specific product types
- Example: Show only profiles that have stablecoin-related products
- Current config: ~40 product type IDs

**`overrideOptionsFilterValues.productTypes`**: Controls which options appear in the hero filter UI
- Use this to simplify the filter dropdown for users
- Example: Only show "Stablecoin", "Payment", "Exchange" as filter options
- Should typically be a subset of the product types that exist in your filtered data
- Current config: ["15", "16", "17"]

## Implementation Steps

1. ✅ Analyze current implementation and identify root cause
2. ✅ Document the issue and solution
3. Add the filtering condition to `buildProfileSectorsWhere` in [`product-types.filter.ts`](../components/containers/profile-list/hooks/filters/filter-definitions/product-types.filter.ts:73)
4. Test the fix with the current configuration
5. Verify no regression in the hero section filters

## Files to Modify

- [`components/containers/profile-list/hooks/filters/filter-definitions/product-types.filter.ts`](../components/containers/profile-list/hooks/filters/filter-definitions/product-types.filter.ts:1) - Add filtering logic (ONLY file to change)

## Files for Reference (No Changes Needed)

- [`lib/config/config.json`](../lib/config/config.json:1) - Configuration file
- [`lib/config/config.schema.ts`](../lib/config/config.schema.ts:1) - Schema definition
- [`components/containers/profile-list/components/profile-list-hero-filters/profile-list-hero-filters.tsx`](../components/containers/profile-list/components/profile-list-hero-filters/profile-list-hero-filters.tsx:1) - Where the filter is displayed
- [`components/containers/profile-list/hooks/filters/filter-definitions/product-deployed-on.filter.ts`](../components/containers/profile-list/hooks/filters/filter-definitions/product-deployed-on.filter.ts:1) - NOT TOUCHING THIS FILE

## Summary

This is a **surgical fix** that:
- ✅ Only modifies ONE file: [`product-types.filter.ts`](../components/containers/profile-list/hooks/filters/filter-definitions/product-types.filter.ts:1)
- ✅ Only affects the hero section "Product types" filter
- ✅ Does NOT touch any other filters
- ✅ Adds ~8 lines of code
- ✅ Follows existing patterns in the codebase
- ✅ Is backward compatible