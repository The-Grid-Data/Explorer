'use client';

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  extractUrls,
  UrlTypeIconLinks
} from '@/components/containers/url-type-icon/url-type-icon-list';
import { ContractAddressesBadge } from './contract-address-badge';
import { FragmentType, useFragment } from '@/lib/graphql/generated';
import { AssetFragment, type AssetCardAttribute } from './asset-card';
import { findMedia } from '@/lib/utils/media-utils';
import { paths } from '@/lib/routes/paths';
import { ChevronDown, Package } from 'lucide-react';
import { DeepLinkBadge } from '@/components/ui/deep-link-badge';
import { AttributeHoverCard } from './attribute-hover-card';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

type AssetTableDetailProps = {
  assets:
    | readonly FragmentType<typeof AssetFragment>[]
    | null
    | undefined;
  attributesByRowId: Map<string, AssetCardAttribute[]>;
};

export const AssetTableDetail = ({
  assets,
  attributesByRowId
}: AssetTableDetailProps) => {
  if (!assets?.length) {
    return <p className="text-sm text-muted-foreground">No assets found</p>;
  }

  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b bg-muted/50">
            <th className="w-8 px-3 py-2" />
            <th className="px-3 py-2 text-left text-xs font-medium text-muted-foreground">
              Asset
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-muted-foreground">
              Ticker
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-muted-foreground">
              Type
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-muted-foreground">
              Status
            </th>
            <th className="hidden px-3 py-2 text-left text-xs font-medium text-muted-foreground md:table-cell">
              Deployments
            </th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {assets.map((asset, index) => (
            <AssetRow
              key={index}
              asset={asset}
              attributes={attributesByRowId}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const AssetRow = ({
  asset: assetData,
  attributes: attributesByRowId
}: {
  asset: FragmentType<typeof AssetFragment>;
  attributes: Map<string, AssetCardAttribute[]>;
}) => {
  const asset = useFragment(AssetFragment, assetData);
  const [expanded, setExpanded] = useState(false);
  const validIconUrl = asset.media?.find(findMedia.icon)?.url;
  const attributes = attributesByRowId.get(asset.id);
  const deploymentCount = asset.assetDeployments?.length ?? 0;
  const hasExpandableContent =
    deploymentCount > 0 ||
    (asset.productAssetRelationships?.length ?? 0) > 0 ||
    (attributes?.length ?? 0) > 0;

  return (
    <>
      <tr
        className={cn(
          'transition-colors',
          hasExpandableContent && 'cursor-pointer hover:bg-muted/30',
          expanded && 'bg-muted/20'
        )}
        onClick={() => hasExpandableContent && setExpanded(!expanded)}
      >
        <td className="px-3 py-2.5">
          {hasExpandableContent && (
            <ChevronDown
              className={cn(
                'h-4 w-4 text-muted-foreground transition-transform',
                expanded && 'rotate-180'
              )}
            />
          )}
        </td>
        <td className="px-3 py-2.5">
          <div className="flex items-center gap-2">
            <Avatar className="h-5 w-5 shrink-0 rounded-full">
              {validIconUrl && (
                <AvatarImage
                  src={validIconUrl}
                  alt={asset.name}
                  className="object-scale-down"
                />
              )}
              <AvatarFallback className="text-[10px] font-bold">
                {asset.name?.at(0)?.toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span className="font-medium">{asset.name}</span>
            {asset.urls && (
              <div className="hidden lg:flex" onClick={e => e.stopPropagation()}>
                <UrlTypeIconLinks urls={[extractUrls(asset.urls)]} />
              </div>
            )}
          </div>
        </td>
        <td className="px-3 py-2.5">
          <span className="font-mono text-xs">{asset.ticker || '-'}</span>
        </td>
        <td className="px-3 py-2.5">
          <Badge variant="secondary" className="text-xs font-normal">
            {asset.assetType?.name || '-'}
          </Badge>
        </td>
        <td className="px-3 py-2.5">
          <span className="text-muted-foreground">
            {asset.assetStatus?.name || '-'}
          </span>
        </td>
        <td className="hidden px-3 py-2.5 md:table-cell">
          <span className="text-xs text-muted-foreground">
            {deploymentCount > 0 ? `${deploymentCount} deployment${deploymentCount > 1 ? 's' : ''}` : '-'}
          </span>
        </td>
      </tr>
      <AnimatePresence>
        {expanded && (
          <tr>
            <td colSpan={6} className="border-t-0 p-0">
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="space-y-4 bg-muted/10 px-6 py-4">
                  {asset.description && (
                    <div>
                      <p className="mb-1 text-xs font-medium text-muted-foreground">
                        Description
                      </p>
                      <p className="text-sm">{asset.description}</p>
                    </div>
                  )}

                  {attributes && attributes.length > 0 && (
                    <div>
                      <p className="mb-2 text-xs font-medium text-muted-foreground">
                        Attributes
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {attributes.map(attr => (
                          <div
                            key={attr.id}
                            className="flex items-center gap-1.5 rounded-md border bg-card px-2.5 py-1"
                          >
                            <span className="text-xs text-muted-foreground">
                              {attr.attributeType?.definition ? (
                                <AttributeHoverCard
                                  name={
                                    attr.attributeType?.name || 'Attribute'
                                  }
                                  definition={attr.attributeType.definition}
                                >
                                  {attr.attributeType?.name || 'Attribute'}
                                </AttributeHoverCard>
                              ) : (
                                attr.attributeType?.name || 'Attribute'
                              )}
                              :
                            </span>
                            <span className="text-xs font-medium">
                              {attr.value || '-'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {(asset.productAssetRelationships?.length ?? 0) > 0 && (
                    <div>
                      <p className="mb-2 text-xs font-medium text-muted-foreground">
                        Used by products
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {asset.productAssetRelationships?.map(
                          (relationship, i) => (
                            <DeepLinkBadge
                              key={i}
                              icon={<Package size={14} />}
                              href="#"
                              value={relationship.product?.name}
                            />
                          )
                        )}
                      </div>
                    </div>
                  )}

                  {deploymentCount > 0 && (
                    <div>
                      <p className="mb-2 text-xs font-medium text-muted-foreground">
                        Deployments
                      </p>
                      <div className="space-y-2">
                        {asset.assetDeployments?.map(deployment => (
                          <div
                            key={deployment.smartContractDeployment?.id}
                            className="rounded-md border bg-card p-3"
                          >
                            <Link
                              className="mb-2 flex items-center gap-2 text-sm hover:underline"
                              href={paths.profile.detail(
                                deployment.smartContractDeployment
                                  ?.deployedOnProduct?.root?.slug ?? '',
                                { section: 'products' }
                              )}
                              onClick={e => e.stopPropagation()}
                            >
                              <Package size={14} />
                              <span className="font-medium">
                                {
                                  deployment.smartContractDeployment
                                    ?.deployedOnProduct?.name
                                }
                              </span>
                            </Link>
                            <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs">
                              {deployment.smartContractDeployment?.deploymentType
                                ?.name && (
                                <div className="flex items-center gap-1">
                                  <span className="text-muted-foreground">
                                    Type:
                                  </span>
                                  <span>
                                    {
                                      deployment.smartContractDeployment
                                        .deploymentType.name
                                    }
                                  </span>
                                </div>
                              )}
                              {deployment.smartContractDeployment?.smartContracts
                                ?.length ? (
                                <div
                                  className="flex items-center gap-1"
                                  onClick={e => e.stopPropagation()}
                                >
                                  <span className="text-muted-foreground">
                                    Addresses:
                                  </span>
                                  <ContractAddressesBadge
                                    smartContracts={
                                      deployment.smartContractDeployment
                                        ?.smartContracts
                                    }
                                  />
                                </div>
                              ) : null}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </td>
          </tr>
        )}
      </AnimatePresence>
    </>
  );
};
