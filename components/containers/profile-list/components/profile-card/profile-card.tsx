'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
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

  // Check which logos are available
  const darkLogoUrl = profile.media?.find(findMedia.logoDark)?.url;
  const lightLogoUrl = profile.media?.find(findMedia.logo)?.url;
  
  // Use theme-aware logo
  const isDarkMode = resolvedTheme === 'dark';
  const useDarkLogo = isDarkMode && darkLogoUrl;
  const validLogoUrl = useDarkLogo ? darkLogoUrl : lightLogoUrl;
  const logoBgClass = useDarkLogo ? 'bg-black' : 'bg-white';

  // Get all products
  const allProducts = profile.root?.products?.map(p => useFragment(ProductFragment, p)) || [];
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

  const INITIAL_VISIBLE_PRODUCTS = 3;

  useEffect(() => {
    setFocusedProductIndex(null);
  }, [activeProductTypeIds]);

  const handleProductClick = (index: number) => {
    setFocusedProductIndex(index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative rounded-2xl border border-border bg-card shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Logo */}
            <Link
              href={paths.profile.detail(profile.root?.slug ?? '')}
              className="flex-shrink-0"
            >
              <div className={cn(
                "relative h-20 w-20 sm:h-24 sm:w-24 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow",
                logoBgClass
              )}>
                {validLogoUrl ? (
                  <img
                    src={validLogoUrl}
                    alt={profile.name}
                    className="w-full h-full object-contain p-2"
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
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <Link href={paths.profile.detail(profile.root?.slug ?? '')}>
                    <h3 className="text-xl sm:text-2xl font-bold hover:underline truncate">
                      {profile.name}
                    </h3>
                  </Link>
                  {profile.root?.profileTags?.find(
                    tag => tag.tag?.id === siteConfig.verifiedTagId
                  ) && <ClaimedBadge />}
                </div>
              </div>

              {/* Badges Row */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                <Badge
                  variant="outline"
                  className={cn(
                    "h-6 px-2 text-xs font-medium capitalize",
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
                <Badge variant="secondary" className="h-6 px-2 text-xs capitalize">
                  <Building2 className="w-3 h-3 mr-1 opacity-70" />
                  {profile.profileType?.name}
                </Badge>
                {profile.foundingDate && (
                  <Badge variant="secondary" className="h-6 px-2 text-xs">
                    <Calendar className="w-3 h-3 mr-1 opacity-70" />
                    Est. {new Date(profile.foundingDate).getFullYear()}
                  </Badge>
                )}
                <Badge variant="secondary" className="h-6 px-2 text-xs capitalize">
                  {profile.profileSector?.name}
                </Badge>
              </div>

              {/* Tagline */}
              {profile.tagLine && (
                <p className="text-sm text-muted-foreground italic mb-3">
                  "{profile.tagLine}"
                </p>
              )}

              {/* Social Links */}
              <div className="flex items-center gap-2">
                <UrlTypeIconLinks
                  urls={[
                    extractUrls(profile.urls),
                    extractSocialUrls(profile.root?.socials)
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-4">
          {/* Featured Product */}
          {featuredProduct && (
            <div className="relative">
              <div
                className={cn(
                  "relative border rounded-xl p-4 transition-all duration-300",
                  isMainProductFeatured
                    ? "border-yellow-500/20 bg-yellow-500/5"
                    : "border-primary/20 bg-primary/5"
                )}
              >
                <div className="absolute top-0 right-0 p-2">
                  <Box
                    className={cn(
                      "w-16 h-16 -mr-4 -mt-4 opacity-5",
                      isMainProductFeatured ? "text-yellow-500" : "text-primary"
                    )}
                  />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Box
                        className={cn(
                          "w-4 h-4",
                          isMainProductFeatured ? "text-yellow-500" : "text-primary"
                        )}
                      />
                      <span
                        className={cn(
                          "text-xs font-bold uppercase tracking-wider",
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
                          "text-xs px-2 py-0 h-6",
                          isMainProductFeatured
                            ? "border-yellow-500/20 text-yellow-500/80 bg-yellow-500/5"
                            : "border-primary/20 text-primary/80 bg-primary/5"
                        )}
                      >
                        {featuredProduct.productType.name}
                      </Badge>
                    )}
                  </div>

                  <h4 className="font-bold text-lg mb-2">{featuredProduct.name}</h4>

                  <div className="relative">
                    <p
                      className={cn(
                        "text-sm text-muted-foreground leading-relaxed mb-3 border-l-2 pl-3",
                        isMainProductFeatured ? "border-yellow-500/20" : "border-primary/20",
                        !isDescriptionExpanded && "line-clamp-3"
                      )}
                    >
                      {featuredProduct.description || profile.descriptionShort}
                    </p>
                    {(featuredProduct.description || profile.descriptionShort || '').length > 150 && (
                      <button
                        onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                        className="text-xs text-primary hover:text-primary/80 font-medium flex items-center gap-1"
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
                    <div className="flex flex-wrap gap-2">
                      <UrlTypeIconLinks urls={[extractUrls(featuredProduct.urls)]} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Assets & Other Products Grid */}
          {(hasAssets || hasOtherProducts) && (
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              {/* Assets */}
              {hasAssets && (
                <div
                  className={cn(
                    "rounded-lg border bg-muted/20 p-3",
                    hasOtherProducts ? "sm:col-span-5" : "sm:col-span-12"
                  )}
                >
                  <div className="flex items-center gap-2 mb-3 text-muted-foreground">
                    <Coins className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Assets
                    </span>
                  </div>
                  <div className="space-y-2">
                    {profile.root?.assets?.map((asset, idx) => (
                      <div
                        key={`${asset.ticker}-${idx}`}
                        className="flex items-center gap-2 rounded bg-background/50 border px-2 py-1.5"
                      >
                        <Banknote className="w-4 h-4 text-primary" />
                        <span className="font-medium text-sm truncate">
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
                    "rounded-lg border bg-muted/20 p-3",
                    hasAssets ? "sm:col-span-7" : "sm:col-span-12"
                  )}
                >
                  <div className="flex items-center gap-2 mb-3 text-muted-foreground">
                    <Layers className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Other Products
                    </span>
                  </div>
                  <div className="space-y-2">
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
                              "w-full flex items-center justify-between gap-2 rounded border px-2 py-1.5 transition-all text-left group/product",
                              isMainProduct
                                ? "bg-yellow-500/10 border-yellow-500/30 hover:bg-yellow-500/20"
                                : isHighlighted
                                  ? "bg-primary/10 border-primary/30 hover:bg-primary/20"
                                  : "bg-background/50 hover:bg-background/80"
                            )}
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              {isMainProduct && (
                                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500 flex-shrink-0" />
                              )}
                              <span
                                className={cn(
                                  "font-medium text-sm truncate",
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
                          </button>
                        );
                      })}
                    {displayedOtherProducts.length > INITIAL_VISIBLE_PRODUCTS && (
                      <button
                        onClick={() => setIsProductsExpanded(!isProductsExpanded)}
                        className="text-xs text-muted-foreground hover:text-foreground px-2 py-1 font-medium transition-colors"
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

          {/* Footer Action */}
          <div className="pt-3 border-t">
            <Button className="w-full" variant="default" asChild>
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
