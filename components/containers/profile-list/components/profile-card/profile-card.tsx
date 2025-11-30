'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { paths } from '@/lib/routes/paths';
import { Badge } from '@/components/ui/badge';
import { siteConfig } from '@/lib/site-config';
import {
  extractSocialUrls,
  extractUrls,
  UrlTypeIconLinks
} from '@/components/containers/url-type-icon/url-type-icon-list';
import { useProfileFiltersContext } from '@/providers/filters-provider';
import {
  Banknote,
  Package,
  Calendar,
  Building2,
  Activity,
  Box,
  Star,
  Eye,
  Layers,
  Coins,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { format } from 'date-fns';
import { graphql, FragmentType, useFragment } from '@/lib/graphql/generated';
import { ClaimedBadge } from '@/components/claim-badge';
import { findMedia } from '@/lib/utils/media-utils';
import { ProductFragment } from '@/components/containers/profile-detail/components/product-card';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

export const ProfileCardFragment = graphql(`
  fragment ProfileCardFragment on ProfileInfos {
    name
    id
    tagLine
    descriptionShort
    profileTypeId
    profileStatusId
    profileSectorId
    foundingDate
    profileSector {
      name
      id
      definition
    }
    profileStatus {
      name
      id
      definition
    }
    profileType {
      name
      id
      definition
    }
    urls(order_by: { urlTypeId: Asc }) {
      url
      urlType {
        name
        id
        definition
      }
    }
    media {
      id
      url
      mediaType {
        id
        name
      }
    }
    mainProduct: root {
      products(where: { isMainProduct: { _eq: "1" } }, limit: 1) {
        name
        productType {
          name
        }
      }
    }
    root {
      urlMain
      slug
      theGridRanking {
        connectionScore
        rootId
      }
      assets {
        ticker
        name
        id
      }
      socials {
        name
        socialType {
          name
        }
        urls(order_by: { urlTypeId: Asc }) {
          url
        }
      }
      profileTags {
        tag {
          name
          id
        }
      }
      products {
        id
        name
        ...ProductFieldsFragment
      }
      assets {
        ...AssetFieldsFragment
      }
    }
  }
`);

// Helper component to handle product fragment
const ProductFragmentWrapper = ({
  productData
}: {
  productData: FragmentType<typeof ProductFragment>
}) => {
  return useFragment(ProductFragment, productData);
};

export type ProfileCardCardProps = {
  profile: FragmentType<typeof ProfileCardFragment>;
};

export const ProfileCard = ({ profile: profileData }: ProfileCardCardProps) => {
  const profile = useFragment(ProfileCardFragment, profileData);
  const { resolvedTheme } = useTheme();
  const { filters } = useProfileFiltersContext();
  
  const [focusedProductIndex, setFocusedProductIndex] = useState<number | null>(null);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isProductsExpanded, setIsProductsExpanded] = useState(false);

  // Check which logos/icons are available
  const darkLogoUrl = profile.media?.find(findMedia.logoDark)?.url;
  const lightLogoUrl = profile.media?.find(findMedia.logo)?.url;
  const iconUrl = profile.media?.find(findMedia.icon)?.url;
  
  // Use theme-aware logo or icon
  const isDarkMode = resolvedTheme === 'dark';
  const useDarkLogo = isDarkMode && darkLogoUrl;
  const validLogoUrl = useDarkLogo ? darkLogoUrl : lightLogoUrl;
  const validIconUrl = iconUrl;
  const logoBgClass = useDarkLogo ? 'bg-black' : 'bg-white';

  // Get all products - fragment the products using a helper that calls useFragment properly
  const rawProducts = profile.root?.products || [];
  const allProducts = rawProducts.map(p => ProductFragmentWrapper({ productData: p }));
  
  const mainProduct = allProducts.find(p => p.isMainProduct === 1);
  const otherProducts = allProducts.filter(p => p.isMainProduct !== 1);

  // Filter products based on active filters
  const activeProductTypeIds = filters.productTypesFilter.value;
  const hasActiveProductFilters = activeProductTypeIds.length > 0;

  // Determine featured product
  const getFeaturedProduct = () => {
    if (focusedProductIndex !== null) {
      return allProducts[focusedProductIndex];
    }

    if (hasActiveProductFilters) {
      const mainProductMatches = mainProduct?.productTypeId &&
        activeProductTypeIds.includes(mainProduct.productTypeId);

      if (mainProductMatches) return mainProduct;

      const matchingProduct = otherProducts.find(
        p => p.productTypeId && activeProductTypeIds.includes(p.productTypeId)
      );

      if (matchingProduct) return matchingProduct;
    }

    return mainProduct;
  };

  const featuredProduct = getFeaturedProduct();
  const isMainProductFeatured = featuredProduct?.isMainProduct === 1;
  const isFilteredProduct = hasActiveProductFilters &&
    !isMainProductFeatured &&
    featuredProduct?.productTypeId &&
    activeProductTypeIds.includes(featuredProduct.productTypeId);

  const getProductLabel = () => {
    if (isMainProductFeatured) return 'Main Product';
    if (isFilteredProduct) return 'Filtered Product';
    return 'Featured Product';
  };

  const displayedOtherProducts = allProducts.filter(p => p !== featuredProduct);
  const hasOtherProducts = displayedOtherProducts.length > 0;
  const hasAssets = (profile.root?.assets?.length ?? 0) > 0;
  
  // Product and asset counts
  const totalProducts = allProducts.length;
  const totalAssets = profile.root?.assets?.length ?? 0;

  const INITIAL_VISIBLE_PRODUCTS = 3;

  useEffect(() => {
    setFocusedProductIndex(null);
  }, [activeProductTypeIds]);

  const handleProductClick = (index: number) => {
    setFocusedProductIndex(index);
  };

  return (
    <div className="w-full h-full">
      <div className="relative rounded-2xl border border-border bg-card shadow-lg overflow-hidden h-full flex flex-col">
        {/* Header Section */}
        <div className="p-3 sm:p-4">
          <div className="flex gap-3">
            {/* Logo - Square with icon fallback */}
            <Link
              href={paths.profile.detail(profile.root?.slug ?? '')}
              className="flex-shrink-0"
            >
              <div className={cn(
                "relative h-12 w-12 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow",
                logoBgClass
              )}>
                {validIconUrl ? (
                  <Image
                    src={validIconUrl}
                    alt={profile.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                ) : validLogoUrl ? (
                  <Image
                    src={validLogoUrl}
                    alt={profile.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain p-1"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">
                    No logo
                  </div>
                )}
              </div>
            </Link>

            {/* Header Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <Link href={paths.profile.detail(profile.root?.slug ?? '')}>
                  <h3 className="text-lg font-bold hover:underline truncate">
                    {profile.name}
                  </h3>
                </Link>
                {profile.root?.profileTags?.find(
                  tag => tag.tag?.id === siteConfig.verifiedTagId
                ) && <ClaimedBadge />}
              </div>

              {/* Badges Row */}
              <div className="flex flex-wrap gap-1 mb-2">
                <Badge
                  variant="outline"
                  className={cn(
                    "h-5 px-1.5 text-[10px] font-medium capitalize",
                    profile.profileStatus?.name?.toLowerCase() === 'active'
                      ? "text-primary bg-primary/10 border-primary/20"
                      : "text-muted-foreground"
                  )}
                >
                  {profile.profileStatus?.name?.toLowerCase() === 'active' && (
                    <Activity className="w-3 h-3 mr-1" />
                  )}
                  {profile.profileStatus?.name}
                </Badge>
                <Badge variant="secondary" className="h-5 px-1.5 text-[10px] capitalize">
                  <Building2 className="w-3 h-3 mr-1 opacity-70" />
                  {profile.profileType?.name}
                </Badge>
                {profile.foundingDate && (
                  <Badge variant="secondary" className="h-5 px-1.5 text-[10px]">
                    <Calendar className="w-3 h-3 mr-1 opacity-70" />
                    Est. {new Date(profile.foundingDate).getFullYear()}
                  </Badge>
                )}
                <Badge variant="secondary" className="h-5 px-1.5 text-[10px] capitalize">
                  {profile.profileSector?.name}
                </Badge>
              </div>

              {/* Product & Asset Counts */}
              <div className="flex flex-wrap gap-1.5">
                {totalProducts > 0 && (
                  <Badge variant="outline" className="h-5 px-1.5 text-[10px] bg-primary/5 border-primary/20">
                    <Package className="w-3 h-3 mr-1" />
                    {totalProducts} {totalProducts === 1 ? 'Product' : 'Products'}
                  </Badge>
                )}
                {totalAssets > 0 && (
                  <Badge variant="outline" className="h-5 px-1.5 text-[10px] bg-primary/5 border-primary/20">
                    <Coins className="w-3 h-3 mr-1" />
                    {totalAssets} {totalAssets === 1 ? 'Asset' : 'Assets'}
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-2 mt-2">
            <UrlTypeIconLinks
              urls={[
                extractUrls(profile.urls),
                extractSocialUrls(profile.root?.socials)
              ]}
            />
          </div>

          {/* Tagline */}
          {profile.tagLine && (
            <p className="text-xs text-muted-foreground italic mt-2">
              &ldquo;{profile.tagLine}&rdquo;
            </p>
          )}
        </div>

        {/* Main Content */}
        <div className="px-3 sm:px-4 pb-3 sm:pb-4 space-y-3 flex-1 flex flex-col">
          {/* Featured Product */}
          {featuredProduct && (
            <div className="relative">
              <div
                className={cn(
                  "relative border rounded-xl p-3.5 transition-all duration-300",
                  isMainProductFeatured
                    ? "border-yellow-500/20 bg-yellow-500/5"
                    : "border-primary/20 bg-primary/5"
                )}
              >
                <div className="absolute top-0 right-0 p-1">
                  <Box
                    className={cn(
                      "w-12 h-12 -mr-3 -mt-3 opacity-5",
                      isMainProductFeatured ? "text-yellow-500" : "text-primary"
                    )}
                  />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <Box
                        className={cn(
                          "w-3.5 h-3.5",
                          isMainProductFeatured ? "text-yellow-500" : "text-primary"
                        )}
                      />
                      <span
                        className={cn(
                          "text-[10px] font-bold uppercase tracking-wider",
                          isMainProductFeatured ? "text-yellow-500" : "text-primary"
                        )}
                      >
                        {getProductLabel()}
                      </span>
                    </div>
                    {featuredProduct.productType && (
                      <Badge
                        variant="outline"
                        className={cn(
                          "text-[10px] px-2 py-0 h-5",
                          isMainProductFeatured
                            ? "border-yellow-500/20 text-yellow-500/80 bg-yellow-500/5"
                            : "border-primary/20 text-primary/80 bg-primary/5"
                        )}
                      >
                        {featuredProduct.productType.name}
                      </Badge>
                    )}
                  </div>

                  <div className="mb-2">
                    <h4 className="font-bold text-base">{featuredProduct.name}</h4>
                    {featuredProduct.supportedBy && featuredProduct.supportedBy.length > 0 && (
                      <span className="text-[10px] text-muted-foreground">
                        Supported by {featuredProduct.supportedBy.length} {featuredProduct.supportedBy.length === 1 ? 'product' : 'products'}
                      </span>
                    )}
                  </div>

                  <div className="relative">
                    <p
                      className={cn(
                        "text-sm text-muted-foreground leading-relaxed mb-2 border-l-2 pl-2.5",
                        isMainProductFeatured ? "border-yellow-500/20" : "border-primary/20",
                        !isDescriptionExpanded && "line-clamp-3"
                      )}
                    >
                      {featuredProduct.description || profile.descriptionShort}
                    </p>
                    {(featuredProduct.description || profile.descriptionShort || '').length > 150 && (
                      <button
                        onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                        className="text-xs text-primary hover:text-primary/80 font-medium flex items-center gap-1 mb-2"
                      >
                        {isDescriptionExpanded ? (
                          <>See less <ChevronUp className="h-3 w-3" /></>
                        ) : (
                          <>See more <ChevronDown className="h-3 w-3" /></>
                        )}
                      </button>
                    )}
                  </div>

                  {featuredProduct.urls && featuredProduct.urls.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      <UrlTypeIconLinks urls={[extractUrls(featuredProduct.urls)]} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Assets & Other Products Grid */}
          {(hasAssets || hasOtherProducts) && (
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
              {/* Assets */}
              {hasAssets && (
                <div
                  className={cn(
                    "rounded-md border bg-muted/20 p-2.5",
                    hasOtherProducts ? "sm:col-span-5" : "sm:col-span-12"
                  )}
                >
                  <div className="flex items-center gap-1.5 mb-2 text-muted-foreground">
                    <Coins className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      Assets
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      {profile.root?.assets?.map((asset, idx) => (
                        <div
                          key={`${asset.ticker}-${idx}`}
                          className="flex items-center gap-1.5 rounded bg-background/50 border px-2 py-1.5"
                        >
                          <Banknote className="w-3.5 h-3.5 text-primary" />
                          <span className="font-medium text-xs truncate">
                            {asset.ticker}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* Other Products */}
              {hasOtherProducts && (
                <div
                  className={cn(
                    "rounded-md border bg-muted/20 p-2.5",
                    hasAssets ? "sm:col-span-7" : "sm:col-span-12"
                  )}
                >
                  <div className="flex items-center gap-1.5 mb-2 text-muted-foreground">
                    <Layers className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      Other Products
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      {displayedOtherProducts
                        .slice(0, isProductsExpanded ? undefined : INITIAL_VISIBLE_PRODUCTS)
                        .map((product, idx) => {
                          const actualIndex = allProducts.indexOf(product);
                          const isMainProduct = product.isMainProduct === 1;
                          const isHighlighted = product.productTypeId &&
                            activeProductTypeIds.includes(product.productTypeId);
  
                          return (
                            <button
                              key={`${product.name}-${idx}`}
                              onClick={() => handleProductClick(actualIndex)}
                              className={cn(
                                "w-full flex flex-col gap-0.5 rounded border px-2 py-1.5 transition-all text-left group/product",
                                isMainProduct
                                  ? "bg-yellow-500/10 border-yellow-500/30 hover:bg-yellow-500/20"
                                  : isHighlighted
                                    ? "bg-primary/10 border-primary/30 hover:bg-primary/20"
                                    : "bg-background/50 hover:bg-background/80"
                              )}
                            >
                              <div className="flex items-center justify-between gap-1.5">
                                <div className="flex items-center gap-1.5 min-w-0">
                                  {isMainProduct && (
                                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500 flex-shrink-0" />
                                  )}
                                  <span
                                    className={cn(
                                      "font-medium text-xs truncate",
                                      isMainProduct
                                        ? "text-yellow-500"
                                        : isHighlighted
                                          ? "text-primary"
                                          : ""
                                    )}
                                  >
                                    {product.name}
                                  </span>
                                </div>
                                <Eye
                                  className={cn(
                                    "w-3 h-3 opacity-0 group-hover/product:opacity-100 transition-opacity flex-shrink-0",
                                    isMainProduct
                                      ? "text-yellow-500"
                                      : isHighlighted
                                        ? "text-primary"
                                        : "text-muted-foreground"
                                  )}
                                />
                              </div>
                              <div className="flex items-center justify-between gap-2">
                                {product.productType && (
                                  <span
                                    className={cn(
                                      "text-[10px] truncate",
                                      isMainProduct
                                        ? "text-yellow-500/70"
                                        : isHighlighted
                                          ? "text-primary/70"
                                          : "text-muted-foreground"
                                    )}
                                  >
                                    {product.productType.name}
                                  </span>
                                )}
                                {product.supportedBy && product.supportedBy.length > 0 && (
                                  <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                                    Supported by {product.supportedBy.length}
                                  </span>
                                )}
                              </div>
                            </button>
                          );
                        })}
                      {displayedOtherProducts.length > INITIAL_VISIBLE_PRODUCTS && (
                        <button
                          onClick={() => setIsProductsExpanded(!isProductsExpanded)}
                          className="text-[10px] text-muted-foreground hover:text-foreground px-1 mt-1 font-medium transition-colors"
                        >
                          {isProductsExpanded
                            ? 'Show less'
                            : `+${displayedOtherProducts.length - INITIAL_VISIBLE_PRODUCTS} more`}
                        </button>
                      )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Footer - Action Button */}
          <div className="pt-2 border-t mt-auto">
            <Button className="w-full h-8 text-xs" variant="default" asChild>
              <Link href={paths.profile.detail(profile.root?.slug ?? '')}>
                View Full Profile
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
