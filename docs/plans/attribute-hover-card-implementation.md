# Attribute HoverCard Implementation Plan

## Context

The GraphQL query already fetches `attributeType.definition` and `attributeType.slug`, but neither is surfaced in the UI. The goal is to show attribute definitions in a hover card when users hover over attribute labels, using the industry-standard **safe triangle/grace area** pattern via Radix UI's `HoverCard` primitive (already installed as `@radix-ui/react-hover-card@^1.1.2`).

---

## Step 1: Create `components/ui/hover-card.tsx` (shadcn/ui wrapper)

Create the standard shadcn/ui wrapper for `@radix-ui/react-hover-card`, following the exact same pattern as the existing `tooltip.tsx` and `popover.tsx`:
- Export `HoverCard` (Root), `HoverCardTrigger`, `HoverCardContent`
- `HoverCardContent` uses `React.forwardRef`, wraps in a `Portal`, applies the same Tailwind animation classes (`animate-in`, `fade-in-0`, `zoom-in-95`, side-based slide-ins)
- Style it like `PopoverContent` (border, bg-popover, shadow-md) since it contains rich content

**Why HoverCard over Tooltip:** Per the research doc, Radix Tooltip closes on pointer leave and doesn't support interactive content. HoverCard has a built-in grace area polygon, configurable `openDelay`/`closeDelay`, and supports links/buttons inside the card. This satisfies WCAG 1.4.13 (hoverable, dismissible, persistent).

---

## Step 2: Create `AttributeHoverCard` reusable component

Create `components/containers/profile-detail/components/attribute-hover-card.tsx`:
- **Props:** `{ name: string; definition?: string | null; children: ReactNode }`
- **Behavior:** Wraps `children` (the label text) in a `HoverCardTrigger`. If `definition` exists, show it in `HoverCardContent`. If no definition, render children directly without any hover card wrapper.
- **Content:** Show the attribute type name as a heading and the definition as body text. Keep it minimal — no links for now (the research doc's "open question" about slug linking can be a follow-up).
- **Visual cue:** Add a subtle dashed underline or info icon to the label when a definition is available, so users know it's hoverable.

---

## Step 3: Update attribute types to include `definition`

Update both `AssetCardAttribute` (asset-card.tsx:103-109) and `ProductCardAttribute` (product-card.tsx:116-122) to include `definition` in the `attributeType`:

```typescript
attributeType?: {
  name?: string | null;
  definition?: string | null;  // add this
} | null;
```

No GraphQL changes needed — `definition` is already fetched in `ProfileAttributesQuery`. The types just need to accept it.

---

## Step 4: Update `DataPoint` type to support tooltip metadata

Two approaches to consider:

**Option A (Recommended):** Keep `DataPoint` generic — pass the `AttributeHoverCard` as a `ReactNode` for the label. The `DataPoint.label` is already `string`, but `InlineDataPoint` renders it inside a `<p>` tag. We can either:
- Change `label` to `string | ReactNode` in `DataPoint` and `InlineDataPointProps`
- Or add an optional `labelTooltip?: string` field to `DataPoint`

Option A (changing label to accept ReactNode) is cleaner and more composable — it lets any data point have a rich label without coupling the DataPoint abstraction to attribute-specific concerns.

---

## Step 5: Update `InlineDataPoint` to support ReactNode labels

In `inline-data-point.tsx`:
- Change the `label` type from `string` to `string | ReactNode`
- The JSX already renders `{label}` inside a `<p>` tag — ReactNode will work there
- Update the `key` prop usage (currently `key={label}`) — since label might not be a string, the parent (`ProfileDataCard`) should handle keys (it already does via `key={dataPoint.label}`, but this may need adjustment if label becomes ReactNode)

---

## Step 6: Integrate into AssetCard and ProductCard

In both `asset-card.tsx` and `product-card.tsx`, update the attribute mapping:

```typescript
...(attributes?.map(attr => ({
  label: attr.attributeType?.definition ? (
    <AttributeHoverCard
      name={attr.attributeType?.name || 'Attribute'}
      definition={attr.attributeType.definition}
    >
      {attr.attributeType?.name || 'Attribute'}
    </AttributeHoverCard>
  ) : (
    attr.attributeType?.name || 'Attribute'
  ),
  value: attr.value || '-'
})) ?? []),
```

Also remove the `console.log` debug statement in asset-card.tsx:124-126.

---

## Step 7: Verify and test

- Hover over an attribute label that has a definition → hover card appears with definition text
- Move mouse from trigger to hover card → safe triangle keeps it open
- Hover over an attribute without a definition → no hover card, renders normally
- Check that existing tooltips and popovers still work (no provider conflicts)
- Verify the hover card positions correctly within the card layout (no overflow clipping)

---

## Summary of files to create/modify

| File | Action |
|------|--------|
| `components/ui/hover-card.tsx` | **Create** — shadcn/ui wrapper |
| `components/containers/profile-detail/components/attribute-hover-card.tsx` | **Create** — reusable component |
| `components/containers/profile-detail/components/inline-data-point.tsx` | **Modify** — accept `ReactNode` label |
| `components/containers/profile-detail/components/profile-data-card.tsx` | **Modify** — update `DataPoint.label` type |
| `components/containers/profile-detail/components/asset-card.tsx` | **Modify** — update type + integrate hover card |
| `components/containers/profile-detail/components/product-card.tsx` | **Modify** — update type + integrate hover card |
