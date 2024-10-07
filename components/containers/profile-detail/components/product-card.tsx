'use client';

import { GetProfileQuery } from '@/lib/graphql/generated-graphql';
import { ProfileFeature, ProfileFeatureContainer } from './profile-feature';
import {
  ProfileDataPoint,
  ProfileDataPointContainer
} from './profile-data-point';
import { Globe } from 'lucide-react';
import { IconLink } from '@/components/ui/icon-link';

export type Profile = GetProfileQuery['profiles'][0];
export type Product = Profile['products'][0];
export type ProductCardCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardCardProps) => {
  return (
    <div className="relative w-full rounded-xl border-2 border-primary bg-secondary/40 shadow-md lg:w-[480px]">
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap">
          <div className="flex flex-wrap gap-2">
            <h3 className="text-l rounded-br-lg  rounded-tl-lg bg-primary px-4 py-2  text-secondary">
              {product.name}
            </h3>
            {product.urlToProduct && (
              <IconLink url={product.urlToProduct} tooltipLabel="Website">
                <Globe
                  className="text-primary hover:text-primary/60"
                  size={20}
                />
              </IconLink>
            )}
          </div>
          <div className="space-y-2 p-4">
            <p className="text pb-2 text-sm">
              {product.descriptionShort || 'No description avaliable'}
            </p>
            <ProfileFeatureContainer>
              <ProfileFeature
                label="Product type"
                value={product.productType?.name}
              />
              <ProfileFeature
                label="Product status"
                value={product.productStatus?.name}
              />
              <ProfileFeature label="Launch date" value={product.launchDate} />
              <ProfileFeature
                label="Is main product?"
                value={product.isMainProduct ? 'Yes' : 'No'}
              />
              <ProfileFeature
                label="Main asset"
                value={product.mainAsset?.name}
              />
              <ProfileFeature
                label="Deployed on"
                value={product.productDeployedOnProduct?.name}
              />
            </ProfileFeatureContainer>
            <div className="space-y-2">
              <ProfileDataPointContainer>
                <ProfileDataPoint
                  fullWidth
                  label="Address"
                  value={product.productAddress}
                  opts={{ breakAll: true }}
                />
                <ProfileDataPoint
                  fullWidth
                  label="Supports"
                  value={product.supportsProducts
                    .map(product => product.supports.name)
                    .join(', ')}
                />
              </ProfileDataPointContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
