'use client';

import { GetProfileQuery } from '@/lib/graphql/generated-graphql';
import { paths } from '@/lib/routes/paths';
import { Badge } from '@/components/ui/badge';
import { ProfileDataCard } from './profile-data-card';
import { Package } from 'lucide-react';
import { DeepLinkBadge } from '@/components/ui/deep-link-badge';

export type Profile = GetProfileQuery['profiles'][0];
export type Product = Profile['products'][0];
export type ProductCardCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardCardProps) => {
  return (
    <ProfileDataCard
      title={product.name}
      description={product.descriptionShort || 'No description available'}
      dataPoints={[
        {
          label: 'Product Status',
          value: product.productStatus?.name ? (
            <Badge>{product.productStatus?.name}</Badge>
          ) : (
            '-'
          )
        },
        {
          label: 'Launch Date',
          value: product.launchDate ?? '-'
        },
        {
          label: 'Is Main Product',
          value: product.isMainProduct ? 'Yes' : 'No'
        },
        {
          label: 'Main asset',
          value: product.mainAsset?.name ?? '-'
        },
        {
          label: 'Product type',
          fullWidth: true,
          children: product.productType?.name ? (
            <span className="text-sm">{product.productType.name}</span>
          ) : (
            '-'
          )
        },
        {
          fullWidth: true,
          label: 'Deployed on',
          children: (
            <div className="flex gap-2">
              <DeepLinkBadge
                icon={<Package size={16} />}
                href={
                  product.productDeployedOnProduct?.profile?.slug &&
                  paths.profile.detail(
                    product.productDeployedOnProduct.profile.slug,
                    {
                      section: 'products'
                    }
                  )
                }
                value={product.productDeployedOnProduct?.name}
              />
            </div>
          )
        },
        {
          label: 'Supports',
          fullWidth: true,
          children:
            Boolean(product.supportsProducts.length > 0) &&
            product.supportsProducts.map(supportProduct => (
              <div className="flex gap-2">
                <DeepLinkBadge
                  icon={<Package size={16} />}
                  href={
                    supportProduct.supports?.profile?.slug &&
                    paths.profile.detail(
                      supportProduct.supports?.profile?.slug,
                      {
                        section: 'products'
                      }
                    )
                  }
                  value={supportProduct.supports?.name}
                />
              </div>
            ))
        },
        {
          label: 'Address',
          fullWidth: true,
          children: product.productAddress ? (
            <span className="w-full break-all text-sm">
              {product.productAddress}
            </span>
          ) : (
            '-'
          )
        }
      ]}
    />
  );
};
