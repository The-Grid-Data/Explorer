# Configuration System

> **Note:** This system needs to be reworked in the future to better separate concerns between the generic Explorer and instance-specific configs.

## Overview

The Explorer uses a two-tier config system:

1. **`lib/config/default-config.json`** — Committed to git. The generic fallback config used when Vercel blob storage is not available (e.g. local dev without `LOAD_CONFIG_FROM_VERCEL_STORAGE=true`).
2. **`lib/config/config.json`** — **Generated at build time, gitignored.** Written by the `retrieve-config` script. This is the file actually imported by the app.

## How it works

```
pnpm build
  └── pnpm retrieve-config  (prebuild step)
        ├── LOAD_CONFIG_FROM_VERCEL_STORAGE=true → fetches config.json from Vercel Blob storage
        └── otherwise → copies default-config.json
        └── validates against config.schema.ts (Zod)
        └── writes to lib/config/config.json
```

The app imports `config.json` in `lib/site-config.ts` and exports it as `siteConfig`.

## Key files

| File | Committed? | Purpose |
|------|-----------|---------|
| `lib/config/default-config.json` | Yes | Generic fallback config |
| `lib/config/config.json` | **No** (gitignored) | Generated build artifact |
| `lib/config/config.schema.ts` | Yes | Zod schema + `Config` type |
| `lib/site-config.ts` | Yes | Exports validated config |
| `scripts/retrieve-config.ts` | Yes | Build script that generates config.json |

---

## Config Field Reference

### `metadata`

Site-level metadata used for SEO and browser display.

| Field | Type | Used in | Description |
|-------|------|---------|-------------|
| `metadata.title` | `string` | `app/layout.tsx` | Browser tab title and `<title>` tag |
| `metadata.description` | `string` | `app/layout.tsx` | SEO meta description |
| `metadata.icon` | `string` | `app/layout.tsx` | Favicon path (e.g. `/favicon.ico`) |

### `verifiedTagId`

| Field | Type | Used in | Description |
|-------|------|---------|-------------|
| `verifiedTagId` | `string` | `profile-card.tsx` | The Grid tag ID that marks a profile as verified/claimed. Profiles with this tag get a special "Claimed" badge on their card. |

### `banner`

| Field | Type | Used in | Description |
|-------|------|---------|-------------|
| `banner.text` | `string` (HTML) | `banner.tsx` | HTML content for the top banner bar. Rendered with `dangerouslySetInnerHTML` so it supports links and formatting. |

### `header`

Controls the site header navigation bar.

| Field | Type | Used in | Description |
|-------|------|---------|-------------|
| `header.logoSrc.dark` | `string` (URL) | `logo.tsx` | Logo image URL for dark theme |
| `header.logoSrc.light` | `string` (URL) | `logo.tsx` | Logo image URL for light theme |
| `header.docsButton.label` | `string` | `header.tsx` | Display text for the docs/external link button |
| `header.docsButton.href` | `string` (URL) | `header.tsx` | URL the docs button links to |
| `header.claimProfileButton.label` | `string` | `header.tsx` | Display text for the claim profile button |
| `header.claimProfileButton.href` | `string` (URL) | `header.tsx` | URL the claim profile button links to |
| `header.githubButton.label` | `string` | `header.tsx` | Display text for the GitHub/social button (despite the name, used for any external link) |
| `header.githubButton.href` | `string` (URL) | `header.tsx` | URL the GitHub/social button links to |

### `pages.home.hero`

Content for the hero section on the home page.

| Field | Type | Used in | Description |
|-------|------|---------|-------------|
| `pages.home.hero.badge` | `string` | `hero.tsx` | Small badge text displayed above the title |
| `pages.home.hero.title` | `string` | `hero.tsx` | Main headline |
| `pages.home.hero.description` | `string` (HTML) | `hero.tsx` | Description text below the title (rendered as HTML) |

### `featureFlags`

Boolean toggles that control UI visibility. All default to their `default-config.json` values if not set.

| Flag | Default | Used in | Description |
|------|---------|---------|-------------|
| `displayQueriesButtons` | `true` | `profile-heading.tsx`, `profile-list.tsx` | Show the "View GraphQL Query" button on profile detail and list pages. Useful for developers; typically disabled for end-user instances. |
| `allowHeroFiltersSearch` | `true` | `profile-list-hero-filters.tsx` | Show search boxes inside the hero filter cards (e.g. search within product types, sectors). |
| `displayTagsFilter` | `true` | `profile-list-hero-filters.tsx` | Show the "Tags" filter card in the advanced hero filters section. |
| `displayAssetTypeFilter` | `true` | `profile-list-hero-filters.tsx` | Show the "Asset Types" filter card in the advanced hero filters section. |
| `displayPoweredBy` | `true` | `profile-heading.tsx` | Show "Powered by The Grid" attribution on profile detail pages. |
| `hideTagsOnProfileCards` | `false` | `profile-card.tsx`, `overview-section.tsx`, `profile-card-skeleton.tsx` | When `true`, hides the Tags data point from profile cards on the list page and the overview section on the detail page. |

### `quickFilters`

Array of pre-configured filter buttons displayed as chips above the main filter area. Each entry creates a one-click filter shortcut.

```json
{
  "label": "Stablecoin",
  "filterKey": "assetType",
  "valueId": "optional-id",
  "description": "Optional tooltip text"
}
```

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `label` | `string` | Yes | Button display text |
| `filterKey` | `"assetType" \| "attribute" \| "productType" \| "sector"` | Yes | Which filter category this quick filter activates |
| `valueId` | `string` | No | Specific value ID to filter by. When omitted, the filter activates the category without a specific value (e.g. "any asset type"). |
| `description` | `string` | No | Tooltip description shown on hover |

**Used in:** `profile-list-quick-filters.tsx`

### `overrideFilterValues`

Arrays of IDs that **restrict the default GraphQL query** to only return profiles matching these values. When an array is non-empty, it acts as an allowlist — only profiles related to those IDs are shown. Empty arrays mean "show all" (no restriction).

| Field | Type | Used in | Description |
|-------|------|---------|-------------|
| `overrideFilterValues.productTypes` | `string[]` | `product-types.filter.ts`, `default-where-filter.ts` | Only show profiles that have products of these type IDs. This is the main way to scope an instance to a vertical (e.g. only stablecoin-related product types). |
| `overrideFilterValues.productDeployedOn` | `string[]` | `product-deployed-on.filter.ts`, `default-where-filter.ts` | Only show profiles with products deployed on these chain/platform IDs. |
| `overrideFilterValues.supportsProducts` | `string[]` | `supports-products.filter.ts`, `default-where-filter.ts` | Only show profiles whose products support these product IDs. |
| `overrideFilterValues.productAssetRelationships` | `string[]` | `default-where-filter.ts` | Only show profiles with product-asset relationships matching these values (e.g. ticker names like `"USDt"`, `"USDC"`). |
| `overrideFilterValues.tags` | `string[]` | `tags.filter.ts`, `default-where-filter.ts` | Only show profiles with these tag IDs. |
| `overrideFilterValues.productIds` | `string[]` | `default-where-filter.ts` | Only show profiles with these specific product IDs. |

### `overrideOptionsFilterValues`

Controls which **options appear in filter dropdowns**, separate from the query restriction above.

| Field | Type | Used in | Description |
|-------|------|---------|-------------|
| `overrideOptionsFilterValues.productTypes` | `string[]` | `product-types.filter.ts` | When non-empty, only these product type IDs appear as selectable options in the Product Types filter dropdown. Other types still exist in the data but aren't shown as filter choices. |

### `excludeTags`

| Field | Type | Used in | Description |
|-------|------|---------|-------------|
| `excludeTags` | `string[]` | `tags.filter.ts` | Tag IDs to hide from the Tags filter dropdown (client-side exclusion). The tags still exist in the data but aren't shown as selectable filter options. |

---

## Adding a new config field

1. Add the field to the Zod schema in `lib/config/config.schema.ts`
2. Add a sensible default value in `lib/config/default-config.json`
3. Update the Vercel blob config for each deployment instance
4. Access it in code via `siteConfig.yourNewField` from `@/lib/site-config`

The `Config` type is inferred from the Zod schema: `type Config = z.infer<typeof configSchema>`

## Local development

Without Vercel blob storage credentials, the build uses `default-config.json`. To work with an instance-specific config locally:

1. Set `LOAD_CONFIG_FROM_VERCEL_STORAGE=true` and `BLOB_READ_WRITE_TOKEN` in `.env`
2. Run `pnpm retrieve-config` to pull the config
3. Or manually create/edit `lib/config/config.json` (it's gitignored)

## Known issues

- `config.json` was previously committed to git, causing noisy diffs with instance-specific data (IDs, branding). It is now gitignored.
- The `satisfies Config` type check in `site-config.ts` was changed to `as Config` because TypeScript infers JSON string values as `string` rather than the narrow union types expected by the schema (e.g. `filterKey` in `quickFilters`). The Zod schema validates at build time instead.
- The `default-config.json` serves double duty as both the generic Explorer default AND the source of Zod `.default()` values in the schema. These concerns should be separated.
- The `header.githubButton` name is misleading — it's used for any external link (e.g. Twitter/X), not just GitHub.
