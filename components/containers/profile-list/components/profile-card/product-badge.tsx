import { ProductFragment } from '@/components/containers/profile-detail/components/product-card';
import {
  extractUrls,
  UrlTypeIconLinks
} from '@/components/containers/url-type-icon/url-type-icon-list';
import { Badge } from '@/components/ui/badge';
import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from '@/components/ui/popover';
import { FragmentType, useFragment } from '@/lib/graphql/generated';
import { Package } from 'lucide-react';
import { useState } from 'react';

type ProductBadgeProps = {
  product: FragmentType<typeof ProductFragment>;
};

export const ProductBadge = ({ product: productData }: ProductBadgeProps) => {
  const product = useFragment(ProductFragment, productData);
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Badge
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          variant="secondary"
          className="flex w-fit items-center gap-2 hover:cursor-pointer"
        >
          <Package size={16} /> {product.name}
        </Badge>
      </PopoverTrigger>
      <PopoverContent
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="p-2">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <UrlTypeIconLinks noTooltip urls={[extractUrls(product.urls)]} />
          </div>

          <p className="mb-4 text-sm text-gray-600">{product.description}</p>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Product Status</span>
              <Badge
                variant={
                  product.productStatus?.name === 'Live' ? 'default' : 'outline'
                }
                className="bg-black text-white"
              >
                {product.productStatus?.name ?? '-'}
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Launch Date</span>
              <span className="text-sm">{product.launchDate ?? '-'}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Is Main Product</span>
              <span className="text-sm">
                {product.isMainProduct ? 'Yes' : 'No'}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Product type</span>
              <span className="text-sm">{product.productType?.name}</span>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
