'use client';

import { Badge } from '@/components/ui/badge';
import { FragmentType, useFragment } from '@/lib/graphql/generated';
import { ProductFragment } from '@/components/containers/profile-detail/components/product-card';
import { Package } from 'lucide-react';

export type ProductCardLightProps = {
  product: FragmentType<typeof ProductFragment>;
};

/**
 * A compact product card for use in the profile list grid.
 * Shows only essential info: name, type, and status.
 */
export const ProductCardLight = ({
  product: productData
}: ProductCardLightProps) => {
  const product = useFragment(ProductFragment, productData);

  return (
    <div className="rounded border bg-muted/20 px-2 py-1.5">
      <div className="flex items-center gap-1.5">
        <Package size={12} className="shrink-0 text-primary" />
        <span className="truncate text-xs font-medium">{product.name}</span>
      </div>
      <div className="mt-1 flex flex-wrap items-center gap-1">
        {product.productType?.name && (
          <Badge variant="secondary" className="h-4 px-1 text-[10px]">
            {product.productType.name}
          </Badge>
        )}
        {product.productStatus?.name && (
          <Badge
            variant={
              product.productStatus.name === 'Active' ? 'default' : 'outline'
            }
            className="h-4 px-1 text-[10px]"
          >
            {product.productStatus.name}
          </Badge>
        )}
      </div>
    </div>
  );
};