'use client';

import { type ReactNode, useMemo } from 'react';
import { Banknote, Package, Layers, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import type { Config } from '@/lib/config/config.schema';
import { siteConfig } from '@/lib/site-config';
import { useProfileFiltersContext } from '@/providers/filters-provider';

const filterKeyConfig: Record<
  string,
  { label: string; icon: ReactNode; order: number }
> = {
  assetType: {
    label: 'Asset',
    icon: <Banknote className="h-3.5 w-3.5" />,
    order: 0
  },
  attribute: {
    label: 'Attribute',
    icon: <Award className="h-3.5 w-3.5" />,
    order: 1
  },
  sector: {
    label: 'Sector',
    icon: <Layers className="h-3.5 w-3.5" />,
    order: 2
  },
  productType: {
    label: 'Product',
    icon: <Package className="h-3.5 w-3.5" />,
    order: 3
  }
};

// Group order for rendering
const groupOrder: Config['quickFilters'][number]['filterKey'][] = [
  'assetType',
  'attribute',
  'sector',
  'productType'
];

export const ProfileListQuickFilters = () => {
  const { filters } = useProfileFiltersContext();
  const quickFilters = (siteConfig.quickFilters ?? []) as Config['quickFilters'];

  const filterMap = {
    assetType: filters.assetTypeFilter,
    attribute: filters.hasAttributeFilter,
    productType: filters.productTypesFilter,
    sector: filters.profileSectorsFilter
  } as const;

  const grouped = useMemo(() => {
    const groups = new Map<string, Config['quickFilters']>();
    for (const key of groupOrder) {
      const items = quickFilters.filter(qf => qf.filterKey === key);
      if (items.length) groups.set(key, items);
    }
    return groups;
  }, [quickFilters]);

  if (!quickFilters.length) return null;

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">Quick Filters</h1>
      <div className="flex flex-wrap gap-6">
        {[...grouped.entries()].map(([key, items]) => {
          const config = filterKeyConfig[key];
          if (!config) return null;

          return (
            <div key={key} className="flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
                {config.icon}
                {config.label}
              </span>
              {items.map(({ label, filterKey, valueId, description }) => {
                const filter =
                  filterMap[filterKey as keyof typeof filterMap];

                const resolvedId =
                  valueId ??
                  (filter.options?.data?.find(
                    (o: { label: string }) => o.label === label
                  )?.value as string | undefined);

                if (!resolvedId) return null;

                const isActive = (filter.value as string[]).includes(
                  resolvedId
                );

                return (
                  <TooltipProvider key={label}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant={isActive ? 'outline' : 'secondary'}
                          size="sm"
                          className={cn(
                            'flex items-center justify-center gap-1.5 text-sm font-medium transition-opacity duration-300',
                            isActive
                              ? 'border-2 border-primary text-primary'
                              : 'text-secondary-foreground'
                          )}
                          onClick={() => {
                            const current = filter.value as string[];
                            filter.setValue(
                              isActive
                                ? current.filter(v => v !== resolvedId)
                                : [...current, resolvedId]
                            );
                          }}
                        >
                          {label}
                        </Button>
                      </TooltipTrigger>
                      {description && (
                        <TooltipContent className="max-w-64 text-base">
                          <p>{description}</p>
                        </TooltipContent>
                      )}
                    </Tooltip>
                  </TooltipProvider>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
