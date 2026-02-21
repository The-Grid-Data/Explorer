# UI Implementation Guide — thegrid-discovery

You are helping build UI for **thegrid-discovery**, a Next.js 15 Web3 project directory. When assisting with any UI task, keep the following design system and architectural patterns as your working reference.

---

## 1. Design System

### Fonts
- **Headings** (`h1`–`h6`): `font-archivo` — loaded via Next.js `localFont` / Google Fonts, applied globally in `app/globals.css`
- **Body / default**: `DM Sans` (`font-sans` in Tailwind)
- Never set font families directly on components — rely on the inherited rules.

### Color tokens
All colours are HSL CSS variables defined in `app/globals.css`. Always use the Tailwind semantic aliases — never raw HSL values or hex.

| Token | Light | Dark | Use |
|-------|-------|------|-----|
| `background` / `foreground` | white / near-black | near-black / near-white | Page base layer |
| `primary` / `primary-foreground` | dark navy / near-white | near-white / dark navy | CTAs, active states |
| `secondary` / `secondary-foreground` | light grey / navy | dark grey / near-white | Secondary surfaces |
| `muted` / `muted-foreground` | light grey / mid-grey | dark grey / light grey | De-emphasised content, captions |
| `accent` / `accent-foreground` | light grey / navy | dark grey / near-white | Hover / highlight layer |
| `border` | light grey | dark grey | All borders and dividers |
| `destructive` / `destructive-foreground` | red / near-white | dark red / near-white | Errors, delete actions |
| `card` / `card-foreground` | same as background | same as background | Card surfaces |

### Border radius
Use the pre-configured aliases — they all derive from `--radius: 0.5rem`:
- `rounded-lg` — default card/panel radius
- `rounded-md` — inputs, smaller surfaces
- `rounded-sm` — badges, tags, tight elements
- `rounded-full` — pills, avatars

### Spacing & layout
- **Container**: `className="container"` — centred, 2rem horizontal padding, max-w 1400px at `2xl`
- Standard vertical section spacing: `space-y-8` inside `container`
- Card padding: `p-4` or `p-6` depending on density
- Grid for card lists: `grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3`

### Animations (Tailwind)
Custom keyframes available via `animate-*` classes:
- `animate-spinner` — loading indicator
- `animate-progress` — progress bar
- `animate-shine` — shimmer effect (requires `--duration` CSS var)
- `animate-gradient-shift` — animated gradient background
- `animate-marquee` / `animate-marquee-vertical` — scrolling ticker
- `animate-accordion-down` / `animate-accordion-up` — Radix Accordion

---

## 2. Component Library

### Base components — shadcn/ui
All base UI lives in `components/ui/`. These are the 40+ shadcn/ui primitives. **Always use these before creating new ones.**

Key components and their import paths:
```tsx
import { Button, buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
```

### Container components
Page-level orchestrators in `components/containers/`. Don't reach past these into their internals — treat them as black boxes with defined props.

| Container | Purpose |
|-----------|---------|
| `ProfileDetail` | Full profile detail view (fetches its own data via `profileId`) |
| `ProfileList` | Full browsable list with search/filter/sort |
| `ProfileListStatic` | Static (no-JS / SEO fallback) list |
| `FilterPageHeader` | Header for discovery filter pages |
| `Header` | Global site header |
| `Footer` | Global site footer |
| `Hero` | Home page hero section |

### Component variant pattern
All variants use CVA. Follow this pattern exactly for new variants:
```tsx
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const myComponentVariants = cva(
  'base-classes-here', // always-applied
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        muted: 'bg-muted text-muted-foreground',
      },
      size: {
        sm: 'text-sm px-2 py-1',
        md: 'text-base px-4 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

interface MyComponentProps extends VariantProps<typeof myComponentVariants> {
  className?: string
}

export function MyComponent({ variant, size, className }: MyComponentProps) {
  return <div className={cn(myComponentVariants({ variant, size }), className)} />
}
```

---

## 3. Page Architecture Patterns

### Server component (default)
Use for data fetching, metadata, and static rendering. No client-side hooks.
```tsx
// app/some-page/page.tsx
import { execute } from '@/lib/graphql/execute'
import { graphql } from '@/lib/graphql/generated'

const MyQuery = graphql(`
  query MyQuery($where: SomeBoolExp) {
    someData(where: $where) {
      id
      name
    }
  }
`)

export default async function MyPage() {
  const data = await execute(MyQuery, { where: { id: { _eq: 'foo' } } })
  return <MyClientComponent data={data.someData} />
}
```

### Client component
Only use `'use client'` when you need event handlers, browser APIs, or React hooks.
```tsx
'use client'
import { useState } from 'react'
```

### ISR pages
Add to any page that should revalidate periodically:
```tsx
export const revalidate = 3600 // 1 hour
```

### Static generation
```tsx
export async function generateStaticParams() {
  return items.map(item => ({ slug: item.slug }))
}
```

---

## 4. Discovery Product Type Pages — Specific Patterns

The discovery filter pages (`/discovery/[filterCategory]/[filterValue]`) follow a **two-tier architecture**:

```
Build time  →  Static JSON (data/static/)  →  First 50 profiles, ultra-fast
Runtime     →  GraphQL infinite scroll     →  Profiles 51+
```

### Adding or modifying a filter page

**Step 1**: Edit `app/discovery/[filterCategory]/[filterValue]/constants.ts`
- Add to `POPULAR_SECTORS`, `POPULAR_TAGS`, or `POPULAR_PRODUCT_TYPES`
- Add metadata to `FILTER_MAPPINGS` (id, name, description, count)

**Step 2**: Regenerate static data
```bash
pnpm generate:static-data
```

**Step 3**: Deploy — the new page is ready.

### Component composition for filter pages
```
FilterPage (server, app/discovery/.../page.tsx)
  ├── FilterPageHeader        — title, description, count badge
  ├── ProfilesSection         — client wrapper for infinite scroll
  │     └── InfiniteProfileList
  │           └── DiscoveryProductCard  — individual card (logo, name, tagline, badges)
  ├── ProfileListStatic       — noscript fallback
  └── SeoContent              — hidden crawlable content
```

### DiscoveryProductCard data shape
```typescript
{
  name: string
  logo?: string        // URL to logo image
  tagLine?: string
  slug: string         // used to build /profiles/[slug] links
  profileType?: { name: string }
  profileSector?: { name: string }
  root?: {
    products?: Array<{ productType?: { name: string } }>
    assets?: Array<{ ticker: string }>
  }
}
```

---

## 5. Profile Detail Patterns

The profile page (`/profiles/[slug]`) delegates all rendering to `<ProfileDetail profileId={slug} />`.

Key sub-components inside `components/containers/profile-detail/components/`:
- `ProfileHeading` — logo, name, tagline, sector badge, URL links
- `ProfileDataSection` — labelled section wrapper with consistent heading style
- `ProfileDataCard` — card within a section
- `ProfileDataPoint` / `InlineDataPoint` — label + value pairs
- `ProductCard` — individual product within a profile
- `AssetCard` — token/asset display with ticker and icon
- `EntityCard` — related entity (parent/child relationship)
- `ProfileTags` — tag badge list

### Loading state pattern
Every data-fetching component has a skeleton fallback:
```tsx
import { Skeleton } from '@/components/ui/skeleton'

function MySkeleton() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-8 w-48" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  )
}
```

---

## 6. SEO & Metadata

Always generate both `generateMetadata()` and Schema.org JSON-LD for new pages:

```tsx
// Metadata
export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    title: `${name} | The Grid`,
    description: descriptionShort,
    alternates: { canonical: `https://thegrid.id/...` },
    openGraph: { ... },
    twitter: { card: 'summary_large_image', ... }
  }
}

// Schema.org — inline in the page JSX
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
/>
```

---

## 7. Accessibility Baseline

- Every page with a main content area: `<main id="main-content">` + skip link
- Skip link pattern:
  ```tsx
  <a
    href="#main-content"
    className="sr-only z-50 rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
  >
    Skip to main content
  </a>
  ```
- Use `aria-labelledby` on `<section>` elements with a heading
- Use `sr-only` for headings that are needed for screen readers but hidden visually
- Always provide `alt` text on images; use `alt=""` for decorative images

---

## 8. Key Files Quick Reference

| Task | File |
|------|------|
| Add/change a filter | `app/discovery/[filterCategory]/[filterValue]/constants.ts` |
| Add a new GraphQL query | Define inline with `graphql()`, run `pnpm generate:graphql` |
| Change site colours | `app/globals.css` CSS variables |
| Add a Tailwind animation | `tailwind.config.ts` → `keyframes` + `animation` |
| Add a shadcn component | `npx shadcn@latest add <component>` → lands in `components/ui/` |
| Change header/footer | `components/containers/header/` or `footer/` |
| Track an analytics event | `lib/analytics.ts` → add to `ANALYTICS_EVENTS`, call `trackEvent()` |
| Sync filter definitions | `pnpm sync:filters` |
| Generate static data | `pnpm generate:static-data` |
| Type-check | `npx tsc --noEmit` |

---

## 9. Things to Avoid

- **Don't** use `any` — use the generated GraphQL types from `lib/graphql/generated/graphql.ts`
- **Don't** write raw `fetch()` — use `execute()` from `lib/graphql/execute.ts`
- **Don't** add `'use client'` to a component unless genuinely required
- **Don't** add hardcoded colours — use the semantic Tailwind tokens
- **Don't** create wrapper/utility files for one-time use — keep logic co-located
- **Don't** skip the `not-found.tsx` for new dynamic routes