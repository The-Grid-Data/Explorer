'use client';

import { GetProfileQuery } from '@/lib/graphql/generated-graphql';
import { paths } from '@/lib/routes/paths';
import { ProfileDataCard, ProfileDataCardProps } from './profile-data-card';
import { Package, Link2 } from 'lucide-react';
import { DeepLinkBadge } from '@/components/ui/deep-link-badge';
import { InlineDataPoint } from './inline-data-point';
import Link from 'next/link';
import { CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  extractUrls,
  UrlTypeIconLinks
} from '@/components/containers/url-type-icon/url-type-icon-list';
import { Badge } from '@/components/ui/badge';
import { ContractAddressesBadge } from './contract-address-badge';

export type Profile = NonNullable<GetProfileQuery['profileInfos']>[number];
export type Product = NonNullable<
  NonNullable<Profile['root']>['products']
>[number];
export type ProductCardCardProps = {
  product: Product;
  variant?: ProfileDataCardProps['variant'];
};

export const ProductCard = ({ product, variant }: ProductCardCardProps) => {
  return (
    <ProfileDataCard
      variant={variant}
      title={
        <div className="flex items-center gap-2">
          <CardTitle>{product.name}</CardTitle>
          {product.urls && (
            <>
              <Separator
                className="mx-2 h-[10px] rounded-lg border-[1px]"
                orientation="vertical"
              />
              <UrlTypeIconLinks urls={[extractUrls(product.urls)]} />
            </>
          )}
        </div>
      }
      description={product.description || 'No description available'}
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
        // {
        //   label: 'Main asset',
        //   value: product.mainAsset?.name ?? '-'
        // },
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
          label: 'Supports',
          fullWidth: true,
          children: Boolean(product?.supportsProducts?.length)
            ? product?.supportsProducts?.map(supportsProduct => (
                <div
                  className="flex gap-2"
                  key={supportsProduct.supportsProduct?.name}
                >
                  <DeepLinkBadge
                    icon={<Package size={16} />}
                    href={
                      supportsProduct.supportsProduct?.root?.slug &&
                      paths.profile.detail(
                        supportsProduct.supportsProduct?.root?.slug,
                        {
                          section: 'products'
                        }
                      )
                    }
                    value={supportsProduct.supportsProduct?.name}
                  />
                </div>
              ))
            : '-'
        },
        {
          fullWidth: true,
          label: 'Deployed on',
          separator: false,
          children: Boolean(product.productDeployments?.length) ? (
            <div className="flex w-full flex-col gap-2">
              {product.productDeployments?.map(deployment => (
                <div
                  key={deployment.smartContractDeployment?.id}
                  className="w-full flex-1 rounded-lg border p-3"
                >
                  <Link
                    className="mb-2 flex items-center gap-2 hover:underline"
                    href={paths.profile.detail(
                      deployment.smartContractDeployment?.deployedOnProduct
                        ?.root?.slug ?? '',
                      { section: 'products' }
                    )}
                  >
                    <Package size={16} />
                    <span className="font-medium">
                      {
                        deployment.smartContractDeployment?.deployedOnProduct
                          ?.name
                      }
                    </span>
                  </Link>

                  <div className="space-y-2">
                    <InlineDataPoint fullWidth label="Deployment Type">
                      {deployment.smartContractDeployment?.deploymentType
                        ?.name ? (
                        <span className="text-sm">
                          {
                            deployment.smartContractDeployment.deploymentType
                              .name
                          }
                        </span>
                      ) : (
                        '-'
                      )}
                    </InlineDataPoint>

                    <InlineDataPoint
                      fullWidth
                      separator={false}
                      label="Addresses"
                    >
                      <ContractAddressesBadge
                        smartContracts={
                          deployment?.smartContractDeployment?.smartContracts
                        }
                      />
                    </InlineDataPoint>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            '-'
          )
        }
      ]}
    />
  );
};
