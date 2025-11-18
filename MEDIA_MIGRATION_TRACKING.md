# Media/Logo Migration Progress Tracking

## Overview
Migration from old `logo` field to new `media` structure with `mediaType` filtering across the codebase.

## Pattern Implementation
**Before (Old)**: Direct `logo` field usage
```graphql
fragment OldPattern on ProfileInfos {
  logo
}
```

**After (New)**: Media array with type filtering
```graphql
fragment NewPattern on ProfileInfos {
  media {
    id
    url
    mediaType {
      id
      name
    }
  }
}
```

**Component Logic**:
```typescript
// Old
const logoUrl = profile.logo;

// New
const validLogoUrl = profileData.media?.find(
  m => m.mediaType?.name === 'Logo Light BG'
)?.url;
```

## Files Requiring Updates

### ✅ COMPLETED
- [x] `components/containers/profile-detail/components/profile-heading.tsx`
  - Updated ProfileHeadingFragment to include media
  - Implemented media filtering logic for 'Logo Light BG'
  - Replaced direct logo usage

### 🔄 IN PROGRESS
- [ ] Current task: [To be updated during implementation]

### ⏳ PENDING

#### PRIMARY TARGETS - Direct Logo Usage
- [ ] `components/containers/profile-list/components/profile-card/profile-card.tsx`
  - **Issue**: Uses `logo` field directly (lines 29, 113, 126)
  - **Actions needed**:
    - Update `ProfileCardFragment` to include media fragment
    - Replace `profile.logo` with media filtering logic
    - Update logo URL validation and display logic
  - **Status**: Not started

- [ ] `components/containers/profile-detail/components/asset-card.tsx`
  - **Issue**: Uses `icon` field directly (lines 24, 94)
  - **Actions needed**:
    - Update `AssetFieldsFragment` to include media/icon structure
    - Replace `asset.icon` usage with appropriate media filtering
  - **Status**: Not started

#### GRAPHQL FRAGMENTS REQUIRING UPDATES
- [ ] ProfileCardFragment
  - **Issue**: Currently includes `logo` field instead of media structure
  - **Actions needed**:
    - Add media fragment to ProfileCardFragment
    - Update all components using this fragment
  - **Files affected**:
    - `profile-card.tsx`
    - `profile-list-cards.tsx`
    - Search/listing components
  - **Status**: Not started

#### QUERIES NEEDING MEDIA FRAGMENT
- [ ] `components/containers/profile-list/components/profile-list-cards/profile-list-cards.tsx`
  - **Issue**: Uses ProfileCardFragment (needs media update)
  - **Actions needed**: Update after ProfileCardFragment is fixed
  - **Status**: Depends on ProfileCardFragment update

#### SECONDARY CONSIDERATIONS
- [ ] `components/containers/profile-detail/profile-detail.tsx`
  - **Issue**: May need media fragment in main query
  - **Actions needed**: Review and update if needed
  - **Status**: Needs investigation

- [ ] Media-related components review
  - `components/containers/profile-detail/components/media-dropdown.tsx` - ✅ Already uses new media structure
  - Other media components - needs review

### 🧪 TESTING REQUIREMENTS
- [ ] Verify logo display works correctly across all updated components
- [ ] Ensure fallbacks work when no logo media exists
- [ ] Test media dropdown functionality remains intact
- [ ] Validate media type filtering logic consistency

### 🔧 POST-UPDATE TASKS
- [ ] Regenerate GraphQL types after fragment updates
- [ ] Update TypeScript type imports as needed
- [ ] Run linting and type checking
- [ ] Verify no broken imports or missing dependencies

## Implementation Notes
- **Logo Type**: Using 'Logo Light BG' as the standard logo type filter
- **Fallback Strategy**: Components should gracefully handle missing media
- **Consistency**: All components should use the same media filtering pattern

## Progress Summary
- **Total Files**: 6+ files identified
- **Completed**: 1/6+ files
- **In Progress**: 0/6+ files  
- **Pending**: 5+ files

---
*Last Updated: [Will be updated during implementation]*