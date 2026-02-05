# Attribute Tooltip Research

## Problem Statement

We need a tooltip/popover for attribute descriptions that:
1. Opens on hover
2. Contains interactive content (links/buttons)
3. Allows the user to move their mouse from the trigger onto the tooltip without it disappearing
4. Closes when the mouse moves far enough away

---

## The "Safe Triangle" / "Grace Area" Pattern

This is a well-known, solved UX problem. When a user hovers over a trigger to open a floating element (tooltip, submenu, popover), moving the mouse diagonally toward the content can accidentally cross over other elements, causing the floating content to close prematurely.

The **safe triangle** pattern creates an invisible polygonal "grace area" between the cursor position and the floating content. As long as the pointer stays within this polygon, the content remains open.

### How It Works

1. Track the cursor position on `mousemove`
2. Compute a triangle (or polygon) from the cursor to the edges of the floating content
3. While the pointer is inside that polygon, suppress `mouseleave` / close behavior
4. Once the pointer exits the polygon (or enters a different trigger), close the content

### Notable Implementations

| Project | Approach |
|---------|----------|
| **Amazon** | Mega-menu with safe triangle (the original famous case, analyzed by Ben Kamens in 2013) |
| **macOS** | Native system menus implement safe triangles at the OS level |
| **VS Code** | Delayed mouseover callbacks + CSS hover states |
| **Radix UI** | `HoverCard` and `DropdownMenu` implement internal "pointer grace areas" |
| **Floating UI** | Explicit `safePolygon` middleware for `useHover` |
| **Neo4j** | Integrated into main navigation menus |

---

## Relevant Libraries & Links

### Radix UI HoverCard (Recommended)
- **Docs**: https://www.radix-ui.com/primitives/docs/components/hover-card
- Already installed in our project: `@radix-ui/react-hover-card@^1.1.2`
- Built-in grace area handling + configurable `openDelay` (default 700ms) and `closeDelay` (default 300ms)
- Supports interactive content (links, buttons) inside the card
- Designed for "preview content behind a link" use cases
- Includes optional arrow element for visual connection

### Floating UI safePolygon
- **Docs**: https://floating-ui.com/docs/useHover#safepolygon
- Lower-level solution if you need custom behavior
- Explicit `safePolygon()` handler for the `useHover` interaction
- More control but more setup than Radix HoverCard

### Smashing Magazine Deep Dive
- **Article**: https://www.smashingmagazine.com/2023/08/better-context-menus-safe-triangles/
- Comprehensive explanation of the SVG overlay approach
- Shows how to build it from scratch with `pointer-events` on SVG paths

### Radix UI Tooltip (Current in Project)
- **Docs**: https://www.radix-ui.com/primitives/docs/components/tooltip
- Already used in our project for simple text hints
- Does NOT support interactive content well (closes on pointer leave)
- Better for simple text labels, not for our use case

### WCAG 1.4.13 Considerations
- **GitHub Issue**: https://github.com/radix-ui/primitives/issues/620
- WCAG 2.1 AA Success Criterion 1.4.13 "Content on Hover or Focus" requires:
  - Dismissible: user can dismiss without moving pointer
  - Hoverable: user can move pointer over the tooltip content
  - Persistent: content remains visible until dismissed or no longer valid
- Radix HoverCard satisfies all three criteria

---

## Why HoverCard Over Tooltip

| Feature | Radix Tooltip | Radix HoverCard |
|---------|--------------|-----------------|
| Opens on hover | Yes | Yes |
| Interactive content (links/buttons) | No (closes on pointer leave from trigger) | Yes (grace area keeps it open) |
| Safe triangle / grace area | No | Yes (built-in) |
| Configurable delays | Limited | Yes (`openDelay`, `closeDelay`) |
| WCAG hoverable content | Problematic | Compliant |
| Screen reader behavior | Announced | Intentionally hidden (sighted-only preview) |
| Typical use case | Simple text labels | Rich previews with links |

---

## Our Project's Current State

### Already Available
- `@radix-ui/react-hover-card@^1.1.2` installed in `package.json`
- shadcn/ui setup (new-york style) with Tailwind CSS
- Existing wrapper pattern in `components/ui/tooltip.tsx` and `components/ui/popover.tsx`
- App-wide `TooltipProvider` in `providers/index.tsx`

### Missing
- No `components/ui/hover-card.tsx` shadcn wrapper component
- Card attribute types (`AssetCardAttribute`, `ProductCardAttribute`) don't include `definition` from `attributeType`
- No reusable attribute tooltip component

### Data Model
The GraphQL query already fetches `attributeType.definition`:
```graphql
attributes {
  id
  value
  rowId
  attributeType {
    id
    name
    definition  # <-- this is the description we want in the tooltip
    slug
  }
}
```

But the card-level types only expose `attributeType.name`:
```typescript
export type AssetCardAttribute = {
  id: string;
  value?: string | null;
  attributeType?: {
    name?: string | null;
    // definition is NOT here yet
  } | null;
};
```

---

## Implementation Sketch

### Step 1: Create `components/ui/hover-card.tsx`
Standard shadcn/ui wrapper around `@radix-ui/react-hover-card`, following the same pattern as `tooltip.tsx` and `popover.tsx`.

### Step 2: Create `AttributeHoverCard` component
A reusable component that:
- Wraps any trigger element (e.g., the attribute label or value)
- Shows `attributeType.definition` in the hover card content
- Optionally includes a link (e.g., to an attribute type detail page using `slug`)

### Step 3: Update attribute types on cards
Add `definition` (and optionally `slug`) to `AssetCardAttribute` and `ProductCardAttribute`.

### Step 4: Integrate into AssetCard and ProductCard
Replace the simple label-value rendering with the new `AttributeHoverCard` wrapper.

---

## Open Questions

1. **What should the link in the tooltip point to?** We have `slug` on `attributeType` — is there a detail page for attribute types?
2. **What should the trigger look like?** Should it be the attribute label, the value, or a small info icon?
3. **Should the hover card show anything beyond the definition?** (e.g., attribute type name, category, etc.)
