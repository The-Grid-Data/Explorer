# Connection Score Sorting Implementation

This document outlines the specific changes made to implement connectionScore/Grid Rank as the default sorting method for the landing page GraphQL searches.

## Overview

The implementation switches the default sort from `foundingDate` to `connectionScore` (Grid Rank) and adds support for both ascending and descending order. Since connectionScore is not available in the GraphQL schema for server-side sorting, client-side sorting is used.

## Files Modified

### 1. `components/containers/profile-list/hooks/use-profile-sorting.ts`

**Lines 7-8**: Changed default sorting

```typescript
// OLD
const [sortBy, setSortBy] = useState<string>('foundingDate');
const [sortOrder, setSortOrder] = useState<OrderBy>(OrderBy.Asc);

// NEW
const [sortBy, setSortBy] = useState<string>('connectionScore');
const [sortOrder, setSortOrder] = useState<OrderBy>(OrderBy.Desc);
```

**Lines 25-28**: Added special handling for connectionScore

```typescript
// OLD
const generateOrderByQuery = (sortBy: string, sortOrder: OrderBy) => {
  if (!sortBy) return [];

// NEW
const generateOrderByQuery = (sortBy: string, sortOrder: OrderBy) => {
  if (!sortBy) return [];

  // connectionScore requires client-side sorting, so return empty order_by
  if (sortBy === 'connectionScore') return [];
```

### 2. `components/containers/profile-list/components/profile-list-cards/profile-list-cards.tsx`

**Line 11-13**: Added imports

```typescript
// NEW imports added
import { sortProfilesByGridRank } from '@/lib/shared/profile-utils';
import { useProfileSortingContext } from '@/providers/sorting-provider';
import { OrderBy } from '@/lib/graphql/generated/graphql';
```

**Line 35-36**: Added sorting context

```typescript
// NEW
const sorting = useProfileSortingContext();
```

**Lines 81-85**: Added client-side sorting logic

```typescript
// NEW - Added after existing profiles extraction
// Apply client-side sorting for connectionScore since it's not supported server-side
const sortedProfiles =
  sorting.sorting.sortBy === 'connectionScore'
    ? sortProfilesByGridRank(
        profiles || [],
        sorting.sorting.sortOrder === OrderBy.Asc
      )
    : profiles;
```

**Lines 101-104**: Updated rendering to use sorted profiles

```typescript
// OLD
profiles?.map(
  (profile, index) =>
    profile && <ProfileCard key={index} profile={profile} />
)

// NEW
sortedProfiles?.map(
  (profile, index) =>
    profile && <ProfileCard key={index} profile={profile} />
)
```

### 3. `components/containers/profile-list/components/profile-list-sorting/profile-list-sorting.tsx`

**Lines 195-210**: Modified extractOrderByOptions function

```typescript
// OLD
extractFields(fields);
return options.sort((a, b) => {
  if (a.split('.').length < b.split('.').length) {
    return -1;
  }

  return 0;
});

// NEW
extractFields(fields);

// Add connectionScore as a custom sorting option (client-side only)
options.unshift('connectionScore');

return options.sort((a, b) => {
  // Keep connectionScore at the top
  if (a === 'connectionScore') return -1;
  if (b === 'connectionScore') return 1;

  if (a.split('.').length < b.split('.').length) {
    return -1;
  }

  return 0;
});
```

### 4. `lib/shared/profile-utils.ts`

**Lines 6-25**: Updated sortProfilesByGridRank function signature and implementation

```typescript
// OLD
/**
 * Sort profiles by Grid Rank (connection score) in descending order, then by name
 * This ensures consistent ordering across static data generation and runtime queries
 */
export function sortProfilesByGridRank(profiles: any[]): any[] {
  return profiles.sort((a, b) => {
    const scoreA = (a as any).root?.theGridRanking?.[0]?.connectionScore
      ? parseFloat((a as any).root.theGridRanking[0].connectionScore)
      : 0;
    const scoreB = (b as any).root?.theGridRanking?.[0]?.connectionScore
      ? parseFloat((b as any).root.theGridRanking[0].connectionScore)
      : 0;

    // Sort by score descending, then by name ascending
    if (scoreB !== scoreA) {
      return scoreB - scoreA;
    }
    return ((a as any).name || '').localeCompare((b as any).name || '');
  });
}

// NEW
/**
 * Sort profiles by Grid Rank (connection score), then by name
 * This ensures consistent ordering across static data generation and runtime queries
 */
export function sortProfilesByGridRank(
  profiles: any[],
  ascending: boolean = false
): any[] {
  return profiles.sort((a, b) => {
    const scoreA = (a as any).root?.theGridRanking?.[0]?.connectionScore
      ? parseFloat((a as any).root.theGridRanking[0].connectionScore)
      : 0;
    const scoreB = (b as any).root?.theGridRanking?.[0]?.connectionScore
      ? parseFloat((b as any).root.theGridRanking[0].connectionScore)
      : 0;

    // Sort by score based on ascending parameter, then by name ascending
    if (scoreB !== scoreA) {
      return ascending ? scoreA - scoreB : scoreB - scoreA;
    }
    return ((a as any).name || '').localeCompare((b as any).name || '');
  });
}
```

## Implementation Details

### How It Works

1. **Default Behavior**: The landing page now loads with `connectionScore` as the default sort field in descending order (highest Grid Rank first)

2. **Dropdown Integration**: `connectionScore` appears as the first option in the "Sort by" dropdown menu

3. **Hybrid Sorting**:

   - Server-side sorting for regular GraphQL schema fields (foundingDate, name, etc.)
   - Client-side sorting for connectionScore using existing `theGridRanking.connectionScore` data

4. **Sort Order Support**: Users can toggle between ascending and descending order for connectionScore

### Technical Notes

- The GraphQL schema's `ProfileInfosOrderBy` doesn't include connectionScore, hence the client-side approach
- The existing `theGridRanking.connectionScore` data is already fetched in the ProfileCardFragment
- Empty `order_by` array is returned for connectionScore to prevent server-side sorting conflicts
- Secondary sort by name ensures consistent ordering for profiles with identical scores

## Testing

The implementation has been tested and builds successfully with:

```bash
npm run build
```

All existing functionality remains intact while adding the new default connectionScore sorting behavior.
