# Asset Table Implementation Guide

## Overview

This guide documents the **Asset Table** pattern used in the Grid Explorer profile detail page. The Asset Table displays a list of assets in a compact table format with expandable rows. Each row shows core asset metadata (name, ticker, type, status, deployment count) and can be expanded to reveal descriptions, attributes, product relationships, and smart contract deployment details.

**Key architectural concepts:**
- A **GraphQL fragment** (`AssetFieldsFragment`) defines the shape of asset data fetched from the API.
- A **fragment-masking** codegen pattern (via `@graphql-codegen/client-preset`) provides type-safe fragment usage with `FragmentType<T>` and `useFragment()`.
- An **`attributesByRowId` map** connects generic attributes (fetched in a separate query) to specific asset rows by their ID.
- **Framer Motion** powers the expandable row animation via `AnimatePresence` and `motion.div`.
- The table is wrapped inside a **`ProfileDataSection`** layout component that provides consistent section headings.

---

## Prerequisites

### NPM Packages

These are the direct dependencies referenced by the asset table and its sub-components:

```
@tanstack/react-query ^5.56.2
framer-motion ^11.13.5
lucide-react ^0.378.0
next 15.x
react ^18.3.1
react-dom ^18.3.1
clsx ^2.1.1
tailwind-merge ^2.5.2
class-variance-authority ^0.7.0
@radix-ui/react-avatar ^1.1.0
@radix-ui/react-hover-card ^1.1.2
@radix-ui/react-separator ^1.1.0
@radix-ui/react-tooltip ^1.1.2
```

### Dev Dependencies for GraphQL Codegen

```
@graphql-codegen/cli ^5.0.3
@graphql-codegen/schema-ast ^4.1.0
@graphql-typed-document-node/core ^3.2.0
graphql ^16.10.0
```

### shadcn/ui Components Required

Install these via `pnpx shadcn-ui@latest add -y`:

- `avatar`
- `badge`
- `button`
- `card`
- `hover-card`
- `separator`
- `tooltip`

### Project Utility: `cn` helper

File: `lib/utils/cn.ts`

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

File: `lib/utils/index.ts`

```typescript
export * from './cn';
export * from './is-nil';
export * from './url';
```

### Project Utility: `media-utils.ts`

File: `lib/utils/media-utils.ts`

```typescript
type MediaTypeObject = { mediaType?: { slug?: string | null } | null };

const MEDIA_SLUGS = {
  LogoLightBg: 'logo_light_bg',
  IconDarkBG: 'icon',
  IconLightBG: 'icon',
  LogoDarkBG: 'logo_dark_bg',
  ProfileHeader: 'profile_header'
};

function findMediaByType(type: keyof typeof MEDIA_SLUGS) {
  return (media: MediaTypeObject | null) =>
    !media ? undefined : media.mediaType?.slug === MEDIA_SLUGS[type];
}

export const findMedia = {
  logo: findMediaByType('LogoLightBg'),
  icon: findMediaByType('IconLightBG')
};
```

### Project Utility: `paths.ts`

File: `lib/routes/paths.ts`

```typescript
export const paths = {
  thegrid: {
    base: 'https://thegrid.id',
    terms: 'https://thegrid.id/legal/web-services-terms'
  },
  base: '/',
  profile: {
    base: '/profiles',
    detail: (slug: string, opts?: { section?: string }) => {
      const section = opts?.section;
      return `/profiles/${slug}${section ? `#${section}` : ''}`;
    }
  }
} as const;
```

### GraphQL Codegen Configuration

File: `lib/graphql/codegen.ts`

```typescript
import { CodegenConfig } from '@graphql-codegen/cli';
import { config } from 'dotenv';

config();

const codegenConfig: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_URL,
  ignoreNoDocuments: true,
  documents: [
    'lib/**/*.graphql.ts',
    '{app,components}/**/*.{tsx,ts}',
    '!lib/graphql/generated/**/*'
  ],
  config: {
    skipDocumentsValidation: {
      ignoreRules: ['MaxIntrospectionDepthRule']
    }
  },
  generates: {
    'lib/graphql/generated/': {
      preset: 'client',
      config: {
        documentMode: 'string',
        dedupeFragments: true,
        extractAllFieldsToTypes: true,
        experimentalFragmentVariables: true,
        allowUndefinedQueryVariables: true,
        strictScalars: true,
        scalars: {
          Date: { input: 'string', output: 'string' },
          Float64: { input: 'number', output: 'number' },
          Float32: { input: 'number', output: 'number' },
          Int8: { input: 'number', output: 'number' },
          Int64: { input: 'number', output: 'number' },
          String1: { input: 'string', output: 'string' },
          Float641: { input: 'number', output: 'number' },
          Int32: { input: 'number', output: 'number' },
          Int64_1: { input: 'number', output: 'number' },
          Enum: { input: 'string', output: 'string' },
          Json: { input: 'any', output: 'any' },
          Json_1: { input: 'any', output: 'any' },
          RawHttpMethod: { input: 'string', output: 'string' },
          String2: { input: 'string', output: 'string' },
          Timestamp: { input: 'string', output: 'string' }
        }
      }
    },
    'lib/graphql/generated/schema.graphql': {
      plugins: ['schema-ast'],
      config: { includeDirectives: true }
    }
  }
};

export default codegenConfig;
```

### GraphQL Execute Utility

File: `lib/graphql/execute.ts`

```typescript
import type { TypedDocumentString } from './generated/graphql';

type GraphQLResponse<T> =
  | { data?: undefined; errors: { message: string }[] }
  | { data: T; errors?: undefined };

export const execute = async <TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> => {
  if (!process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_URL) {
    throw TypeError('NEXT_PUBLIC_GRAPHQL_ENDPOINT_URL is not defined');
  }
  const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_URL, {
    method: 'POST',
    body: JSON.stringify({ query, variables }),
    headers: { 'Content-Type': 'application/json' }
  });

  const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

  if (graphqlResponse.errors) {
    throw TypeError(graphqlResponse.errors[0]?.message);
  }

  return graphqlResponse.data;
};
```

---

## Step 1: The GraphQL Fragment

The `AssetFragment` is defined inside the `asset-card.tsx` file and is shared by both the card view and the table view.

File: `components/containers/profile-detail/components/asset-card.tsx` (fragment and types only)

```typescript
import { FragmentType, graphql, useFragment } from '@/lib/graphql/generated';

export const AssetFragment = graphql(`
  fragment AssetFieldsFragment on Assets {
    ticker
    rootId
    name
    id
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
    productAssetRelationships {
      product {
        name
        rootId
        root {
          slug
        }
        media {
          url
          mediaType {
            name
            slug
          }
        }
      }
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
    media {
      id
      url
      mediaType {
        id
        name
        slug
      }
    }
  }
`);

export type AssetCardAttribute = {
  id: string;
  value?: string | null;
  attributeType?: {
    name?: string | null;
    definition?: string | null;
  } | null;
};
```

This fragment is included in the parent profile query via `...AssetFieldsFragment` on `root.assets`.

---

## Step 2: Supporting UI Components

### 2a. `DeepLinkBadge`

File: `components/ui/deep-link-badge.tsx`

```typescript
import Link from 'next/link';
import { ReactNode } from 'react';
import { Badge } from './badge';

export type DeepLinkProps = {
  value?: string | false;
  href?: string;
  icon?: ReactNode;
};

export const DeepLinkBadge = ({ value, href, icon }: DeepLinkProps) => {
  return (
    <div className="flex flex-col items-start overflow-hidden">
      {href && value ? (
        <Link
          href={href}
          scroll={false}
          className="text-sm font-semibold text-primary hover:text-primary/60"
        >
          <Badge variant="secondary" className="flex w-fit items-center gap-2">
            {icon} {value}
          </Badge>
        </Link>
      ) : (
        '-'
      )}
    </div>
  );
};
```

### 2b. `ContractAddressesBadge`

File: `components/containers/profile-detail/components/contract-address-badge.tsx`

```typescript
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { Link2 } from 'lucide-react';
import { CopyButton } from '@/components/ui/copy-button';

type ContractAddressBadgeProps = {
  smartContracts:
    | {
        address: any;
      }[]
    | null
    | undefined;
};

export const ContractAddressesBadge = ({
  smartContracts
}: ContractAddressBadgeProps) => {
  const contracts = smartContracts?.filter(contract =>
    Boolean(contract.address)
  );

  if (!contracts?.length) {
    return '-';
  }

  const formatAddress = (address: string, length: number = 5) => {
    if (!address) return '-';
    return `${address.slice(0, length)}...${address.slice(-length)}`;
  };

  return contracts.map(contract => (
    <div key={contract.address} className="flex w-full gap-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="hover:cursor-text">
            <Badge
              variant="secondary"
              className="flex gap-2 font-mono text-xs hover:cursor-text"
            >
              <Link2 size={16} className="flex-shrink-0" />
              <CopyButton value={contract.address}>
                <span className="truncate">
                  {formatAddress(contract.address, 6)}
                </span>
                <CopyButton className="ml-2" value={contract.address} />
              </CopyButton>
            </Badge>
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-mono text-xs">{contract.address}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  ));
};
```

### 2c. `AttributeHoverCard`

File: `components/containers/profile-detail/components/attribute-hover-card.tsx`

```typescript
import { ReactNode } from 'react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card';
import { LinkifyText } from '@/components/ui/linkify-text';

type AttributeHoverCardProps = {
  name: string;
  definition?: string | null;
  children: ReactNode;
};

export const AttributeHoverCard = ({
  name,
  definition,
  children
}: AttributeHoverCardProps) => {
  if (!definition) {
    return <>{children}</>;
  }

  return (
    <HoverCard openDelay={300} closeDelay={200}>
      <HoverCardTrigger asChild>
        <span className="cursor-help border-b border-dashed border-muted-foreground/50">
          {children}
        </span>
      </HoverCardTrigger>
      <HoverCardContent side="top" align="start">
        <div className="space-y-1">
          <p className="text-sm font-semibold">{name}</p>
          <LinkifyText text={definition} className="text-xs text-muted-foreground" />
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
```

### 2d. `LinkifyText` (dependency of `AttributeHoverCard`)

File: `components/ui/linkify-text.tsx`

```typescript
'use client';

import { useMemo } from 'react';
import { parseTextWithUrls, UrlSegment } from '@/lib/utils/url';
import { useValidateUrl } from '@/hooks/use-validate-url';
import { cn } from '@/lib/utils';

type LinkifyTextProps = {
  text: string;
  className?: string;
  linkClassName?: string;
};

function ValidatedLink({
  segment,
  className
}: {
  segment: UrlSegment;
  className?: string;
}) {
  const domain = new URL(segment.href).hostname;
  const { isValid } = useValidateUrl(domain);

  if (!isValid) {
    return <>{segment.value}</>;
  }

  return (
    <a
      href={segment.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn('underline text-blue-500 hover:text-blue-700', className)}
      onClick={(e) => e.stopPropagation()}
    >
      {segment.value}
    </a>
  );
}

export function LinkifyText({ text, className, linkClassName }: LinkifyTextProps) {
  const segments = useMemo(() => parseTextWithUrls(text), [text]);

  const hasUrls = segments.some((s) => s.type === 'url');
  if (!hasUrls) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {segments.map((segment, i) =>
        segment.type === 'text' ? (
          <span key={i}>{segment.value}</span>
        ) : (
          <ValidatedLink key={i} segment={segment} className={linkClassName} />
        )
      )}
    </span>
  );
}
```

### 2e. URL Parsing Utility (dependency of `LinkifyText`)

File: `lib/utils/url.ts`

```typescript
export type TextSegment = { type: 'text'; value: string };
export type UrlSegment = { type: 'url'; value: string; href: string };
export type ParsedSegment = TextSegment | UrlSegment;

const URL_REGEX =
  /(?<!\w)(?:https?:\/\/[^\s<>"']+|[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}(?:\/[^\s<>"']*)?)/g;

export function parseTextWithUrls(text: string): ParsedSegment[] {
  const segments: ParsedSegment[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(URL_REGEX)) {
    const matchStart = match.index;
    const matchValue = match[0];

    if (matchStart > lastIndex) {
      segments.push({ type: 'text', value: text.slice(lastIndex, matchStart) });
    }

    const hasProtocol = /^https?:\/\//i.test(matchValue);
    segments.push({
      type: 'url',
      value: matchValue,
      href: hasProtocol ? matchValue : `https://${matchValue}`
    });

    lastIndex = matchStart + matchValue.length;
  }

  if (lastIndex < text.length) {
    segments.push({ type: 'text', value: text.slice(lastIndex) });
  }

  return segments;
}
```

### 2f. `useValidateUrl` Hook (dependency of `LinkifyText`)

File: `hooks/use-validate-url.ts`

```typescript
import { useQuery } from '@tanstack/react-query';

async function validateDomain(domain: string): Promise<boolean> {
  const res = await fetch(`/api/validate-url?domain=${encodeURIComponent(domain)}`);
  const data = await res.json();
  return data.valid;
}

export function useValidateUrl(domain: string, enabled = true) {
  const { data: isValid, isLoading } = useQuery({
    queryKey: ['validate-url', domain],
    queryFn: () => validateDomain(domain),
    enabled,
    staleTime: 60 * 60 * 1000,
    retry: false,
    placeholderData: true
  });

  return { isValid: isValid ?? true, isLoading };
}
```

### 2g. `CopyButton` (dependency of `ContractAddressesBadge`)

File: `components/ui/copy-button.tsx`

```typescript
'use client';

import * as React from 'react';
import { CheckIcon, ClipboardIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

interface CopyButtonProps extends ButtonProps {
  value: string;
  src?: string;
  children?: React.ReactNode;
}

export function CopyButton({
  value,
  className,
  src,
  variant = 'outline',
  children,
  ...props
}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setHasCopied(true);
  };

  return (
    <TooltipProvider>
      <Tooltip open={hasCopied}>
        <TooltipTrigger asChild={!children}>
          <>
            {children && <div onClick={handleCopy}>{children}</div>}
            {!children && (
              <Button
                size="icon"
                variant={variant}
                className={cn(
                  'h-full max-h-6 w-fit px-2 py-1 [&_svg]:h-3 [&_svg]:w-3',
                  className
                )}
                onClick={handleCopy}
                {...props}
              >
                <span className="sr-only">Copy</span>
                {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
              </Button>
            )}
          </>
        </TooltipTrigger>
        <TooltipContent>
          <div className="flex items-center gap-2">
            <span className="text-xs">Copied to clipboard</span>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
```

### 2h. `InlineDataPoint` (used by card view, not table view directly)

File: `components/containers/profile-detail/components/inline-data-point.tsx`

```typescript
import { ReactNode } from 'react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

type InlineDataPointProps = {
  label: string | ReactNode;
  value?: string | boolean | ReactNode;
  children?: ReactNode;
  fullWidth?: boolean;
  separator?: boolean;
};

export const InlineDataPoint = ({
  label,
  value,
  children,
  fullWidth,
  separator = true
}: InlineDataPointProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div
        className={cn(
          'flex items-center justify-between',
          fullWidth && 'flex-col items-start gap-2'
        )}
      >
        <p className="text-xs text-muted-foreground">{label}</p>
        {value ? <h3 className="font-semibold">{value}</h3> : children}
      </div>
      {separator && <Separator />}
    </div>
  );
};
```

### 2i. `ProfileDataSection` (layout wrapper)

File: `components/containers/profile-detail/components/profile-data-section.tsx`

```typescript
'use client';

import { PropsWithChildren, ReactNode } from 'react';

export type ProfileDataSectionProps = PropsWithChildren<{
  id?: string;
  title: string;
  icon: ReactNode;
}>;

export const ProfileDataSection = ({
  icon,
  title,
  children,
  id
}: ProfileDataSectionProps) => {
  return (
    <section id={id} className="mb-8 rounded-lg bg-primary/5 p-6">
      <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold">
        {icon}
        {title}
      </h2>
      {children}
    </section>
  );
};
```

### 2j. `UrlTypeIconLinks` and `extractUrls`

File: `components/containers/url-type-icon/url-type-icon-list.tsx`

```typescript
import { IconLink } from '@/components/ui/icon-link';
import { UrlTypeIcon, urlTypeIconMap } from './url-type-icon';
import { Separator } from '@/components/ui/separator';

type UrlType = keyof typeof urlTypeIconMap;

export type SocialUrlType = {
  url?: string | null;
  type?: string | UrlType;
  tooltip?: string | null;
  noTooltip?: boolean;
};

export type UrlTypeIconLinksProps = {
  urls: SocialUrlType[][];
  noTooltip?: boolean;
};

export const UrlTypeIconLinks = ({
  urls,
  noTooltip = false
}: UrlTypeIconLinksProps) => {
  return (
    <div className="flex items-center gap-2">
      {urls.map((urlList, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            {urlList.map(
              (url, subindex) =>
                url.url && (
                  <IconLink
                    key={`${url.url}-${index}-${subindex}`}
                    url={url.url}
                    tooltipLabel={url.tooltip || url.type}
                    noTooltip={url.noTooltip || noTooltip}
                  >
                    <UrlTypeIcon type={url.type as UrlType} />
                  </IconLink>
                )
            )}
          </div>
          {index < urls.length - 1 && (
            <Separator
              className="mx-2 h-[10px] rounded-lg border-[1px]"
              orientation="vertical"
            />
          )}
        </div>
      ))}
    </div>
  );
};

type URL = {
  url?: string | null;
  urlType?: {
    name: string;
  } | null;
};

export const extractUrls = (urls?: URL[] | null): SocialUrlType[] => {
  return (
    urls
      ?.filter(url => url.urlType?.name)
      .map(url => ({
        url: url.url,
        type: url.urlType!.name
      })) ?? []
  );
};
```

> **Note:** You will also need the `IconLink`, `UrlTypeIcon`, and `urlTypeIconMap` components from your project. These map URL type names (e.g., "Website", "Twitter") to icons.

---

## Step 3: The Main Component -- `AssetTableDetail`

File: `components/containers/profile-detail/components/asset-table-detail.tsx`

```typescript
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
                              href={
                                relationship.product?.root?.slug
                                  ? paths.profile.detail(
                                      relationship.product.root.slug,
                                      { section: 'products' }
                                    )
                                  : undefined
                              }
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
```

---

## Step 4: Wiring Into the Profile Detail Page

File: `components/containers/profile-detail/profile-detail.tsx` (relevant excerpts)

### 4a. Imports

```typescript
import { AssetTableDetail } from './components/asset-table-detail';
import { ProfileDataSection } from './components/profile-data-section';
import { Banknote } from 'lucide-react';
import { graphql } from '@/lib/graphql/generated';
import { execute } from '@/lib/graphql/execute';
import { useQuery } from '@tanstack/react-query';
```

### 4b. The Profile Detail Query (includes the asset fragment)

```graphql
query getProfileData($where: ProfileInfosBoolExp) {
  profileInfos(limit: 1, offset: 0, where: $where) {
    # ... other fragments ...
    root {
      assets {
        id
        ...AssetFieldsFragment
      }
    }
  }
}
```

### 4c. The Attributes Query (separate query)

```graphql
query getProfileAttributes($where: ProfileInfosBoolExp) {
  profileInfos(limit: 1, offset: 0, where: $where) {
    root {
      attributes {
        id
        value
        rowId
        attributeType {
          id
          name
          definition
          slug
        }
        coreTableName {
          tableName
        }
      }
    }
  }
}
```

### 4d. Building the `attributesByRowId` Map

```typescript
const { data: attributesData } = useQuery({
  queryKey: ['profile-attributes', profileId],
  queryFn: () => execute(ProfileAttributesQuery, query)
});

const attributes =
  attributesData?.profileInfos?.[0]?.root?.attributes ?? [];

const attributesByRowId = new Map<string, typeof attributes>();
for (const attr of attributes) {
  const key = attr.rowId;
  if (!key) continue;
  const existing = attributesByRowId.get(key) ?? [];
  existing.push(attr);
  attributesByRowId.set(key, existing);
}
```

### 4e. Rendering the Assets Section

```tsx
<ProfileDataSection
  icon={<Banknote className="h-6 w-6" />}
  title="Assets"
>
  <AssetTableDetail
    assets={profile.root?.assets}
    attributesByRowId={attributesByRowId}
  />
</ProfileDataSection>
```

---

## How the Expandable Row Pattern Works

### Row Structure

Each asset renders as a React Fragment (`<>...</>`) containing two `<tr>` elements:

1. **Summary row** -- Always visible. Shows the asset name with avatar, ticker, type badge, status, and deployment count. If the asset has expandable content, the entire row is clickable and shows a chevron.

2. **Detail row** -- Conditionally rendered inside `<AnimatePresence>`. Uses `colSpan={6}` so the expanded content spans the entire table width. Framer Motion's `motion.div` handles the expand/collapse animation.

### Expandability Logic

A row is expandable if **any** of these are true:
- `asset.assetDeployments.length > 0`
- `asset.productAssetRelationships.length > 0`
- `attributesByRowId.get(asset.id)` returns a non-empty array

### Animation Details

```tsx
<motion.div
  initial={{ height: 0, opacity: 0 }}
  animate={{ height: 'auto', opacity: 1 }}
  exit={{ height: 0, opacity: 0 }}
  transition={{ duration: 0.2 }}
  className="overflow-hidden"
>
```

The `overflow-hidden` class on the motion container is critical -- it prevents content from being visible outside the animated height boundary during collapse.

### Click Propagation

Interactive elements inside expanded rows (links, copy buttons, URL icons) use `e.stopPropagation()` to prevent their clicks from toggling the row collapse.

---

## How `attributesByRowId` Mapping Works

### The Problem

Attributes in The Grid's data model are stored in a flat `attributes` table at the root level, not nested within individual assets/products. Each attribute has:
- `rowId` -- The ID of the entity it belongs to (could be an asset ID, product ID, etc.)
- `coreTableName.tableName` -- Which table the entity lives in
- `attributeType` -- Metadata about the attribute (name, definition, slug)
- `value` -- The attribute's value

### The Solution

A single separate query (`ProfileAttributesQuery`) fetches **all** attributes for the profile's root. The profile detail component then builds a `Map<string, Attribute[]>` keyed by `rowId`:

```typescript
const attributesByRowId = new Map<string, typeof attributes>();
for (const attr of attributes) {
  const key = attr.rowId;
  if (!key) continue;
  const existing = attributesByRowId.get(key) ?? [];
  existing.push(attr);
  attributesByRowId.set(key, existing);
}
```

This map is passed down to **both** the `AssetTableDetail` and the `ProductCard` components. Each component looks up its own attributes using its entity ID:

```typescript
// Inside AssetRow:
const attributes = attributesByRowId.get(asset.id);

// Inside the profile detail template for products:
<ProductCard attributes={attributesByRowId.get(product.id)} />
```

This is an efficient pattern because:
1. Only **one** extra GraphQL query is needed for all attributes across all entity types.
2. The Map provides O(1) lookup per entity.
3. The same map can be shared across assets, products, and any future entity type.

---

## File Dependency Tree

```
profile-detail.tsx
  |-- ProfileDataSection (layout wrapper)
  |-- AssetTableDetail
  |     |-- AssetFragment + AssetCardAttribute (from asset-card.tsx)
  |     |-- AssetRow (internal component)
  |     |     |-- useFragment (from @/lib/graphql/generated)
  |     |     |-- findMedia (from @/lib/utils/media-utils)
  |     |     |-- Avatar, AvatarFallback, AvatarImage (shadcn)
  |     |     |-- Badge (shadcn)
  |     |     |-- UrlTypeIconLinks + extractUrls
  |     |     |-- ChevronDown, Package (lucide-react)
  |     |     |-- AnimatePresence, motion (framer-motion)
  |     |     |-- cn (from @/lib/utils)
  |     |     |-- paths (from @/lib/routes/paths)
  |     |     |-- AttributeHoverCard
  |     |     |     |-- HoverCard, HoverCardContent, HoverCardTrigger (shadcn)
  |     |     |     |-- LinkifyText
  |     |     |           |-- parseTextWithUrls (from @/lib/utils/url)
  |     |     |           |-- useValidateUrl (from @/hooks/use-validate-url)
  |     |     |-- DeepLinkBadge
  |     |     |     |-- Badge (shadcn)
  |     |     |     |-- Link (next/link)
  |     |     |-- ContractAddressesBadge
  |     |     |     |-- Tooltip, TooltipContent, TooltipProvider, TooltipTrigger (shadcn)
  |     |     |     |-- Badge (shadcn)
  |     |     |     |-- Link2 (lucide-react)
  |     |     |     |-- CopyButton
  |     |     |           |-- Button (shadcn)
  |     |     |           |-- Tooltip (shadcn)
  |     |     |           |-- CheckIcon, ClipboardIcon (lucide-react)
  |     |     |-- Link (next/link)
```

---

## Quick-Start Checklist

1. Install all npm packages listed in Prerequisites
2. Install shadcn components: `avatar`, `badge`, `button`, `card`, `hover-card`, `separator`, `tooltip`
3. Set up GraphQL codegen with the `client` preset (`lib/graphql/codegen.ts`)
4. Add the `NEXT_PUBLIC_GRAPHQL_ENDPOINT_URL` environment variable
5. Create utility files: `lib/utils/cn.ts`, `lib/utils/media-utils.ts`, `lib/routes/paths.ts`, `lib/utils/url.ts`, `lib/graphql/execute.ts`
6. Create the hook: `hooks/use-validate-url.ts`
7. Create UI components: `deep-link-badge.tsx`, `copy-button.tsx`, `linkify-text.tsx`
8. Create profile components: `contract-address-badge.tsx`, `attribute-hover-card.tsx`, `inline-data-point.tsx`, `profile-data-section.tsx`
9. Create the asset fragment and types in `asset-card.tsx`
10. Create the `asset-table-detail.tsx` component
11. Run `pnpm graphql:compile` to generate types
12. Wire `AssetTableDetail` into your profile detail page inside a `ProfileDataSection`
13. Build the `attributesByRowId` map from the attributes query and pass it as a prop
