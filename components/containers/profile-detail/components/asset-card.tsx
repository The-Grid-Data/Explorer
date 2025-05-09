'use client';

import { paths } from '@/lib/routes/paths';
import { ProfileDataCard, ProfileDataCardProps } from './profile-data-card';
import { Package } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@radix-ui/react-separator';
import { CardTitle } from '@/components/ui/card';
import {
  extractUrls,
  UrlTypeIconLinks
} from '@/components/containers/url-type-icon/url-type-icon-list';
import Link from 'next/link';
import { InlineDataPoint } from './inline-data-point';
import { ContractAddressesBadge } from './contract-address-badge';
import { FragmentType, graphql, useFragment } from '@/lib/graphql/generated';

export const AssetFragment = graphql(`
  fragment AssetFieldsFragment on Assets {
    ticker
    rootId
    name
    id
    icon
    description
    assetTypeId
    assetStatusId
    assetType {
      definition
      id
      name
    }
    assetStatus {
      name
      id
      definition
    }
    assetDeployments {
      id
      deploymentId
      assetId
      smartContractDeployment {
        id
        deployedOnProduct {
          id
          name
          root {
            slug
          }
        }
        assetStandard {
          id
        }
        smartContracts {
          name
          id
          deploymentId
          deploymentDate
          address
        }
        deploymentType {
          name
          id
          definition
        }
      }
    }
    urls(order_by: { urlTypeId: Asc }) {
      url
      urlType {
        name
        id
        definition
      }
    }
  }
`);

export type AssetCardProps = {
  asset: FragmentType<typeof AssetFragment>;
  variant?: ProfileDataCardProps['variant'];
};

export const AssetCard = ({ asset: assetData, variant }: AssetCardProps) => {
  const asset = useFragment(AssetFragment, assetData);

  return (
    <ProfileDataCard
      variant={variant}
      title={
        <div className="flex items-center gap-2">
          <Avatar className="h-[20px] w-[20px] rounded-xl">
            <AvatarImage
              src={asset.icon}
              alt={asset.name}
              className="object-scale-down"
            />
            <AvatarFallback className="font-bold">
              {asset.name?.at(0)?.toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <CardTitle>{asset.name}</CardTitle>
          {asset.urls && (
            <>
              <Separator
                className="mx-2 h-[10px] rounded-lg border-[1px]"
                orientation="vertical"
              />
              <UrlTypeIconLinks urls={[extractUrls(asset.urls)]} />
            </>
          )}
        </div>
      }
      description={asset.description || 'No description available'}
      dataPoints={[
        {
          label: 'Asset Type',
          value: asset.assetType?.name || '-'
        },
        {
          label: 'Asset Ticker',
          value: asset.ticker || '-'
        },
        {
          label: 'Asset Status',
          value: asset.assetStatus?.name || '-'
        },
        {
          fullWidth: true,
          label: 'Deployed on',
          separator: false,
          children: Boolean(asset.assetDeployments?.length) ? (
            <div className="flex w-full flex-col gap-2">
              {asset.assetDeployments?.map(deployment => (
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

                  <div className="space-y-1">
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
                      label="Addresses"
                      separator={false}
                    >
                      {deployment.smartContractDeployment?.smartContracts
                        ?.length ? (
                        <ContractAddressesBadge
                          smartContracts={
                            deployment.smartContractDeployment?.smartContracts
                          }
                        />
                      ) : (
                        ' -'
                      )}
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
