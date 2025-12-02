import { z } from 'zod';
import defaultConfig from './default-config.json';

export const configSchema = z.object({
  metadata: z.object({
    title: z.string().default(defaultConfig.metadata.title),
    description: z.string().default(defaultConfig.metadata.description),
    icon: z.string().default(defaultConfig.metadata.icon)
  }),
  verifiedTagId: z.string().default(defaultConfig.verifiedTagId),
  banner: z.object({
    text: z.string().default(defaultConfig.banner.text)
  }),
  header: z.object({
    logoSrc: z.object({
      dark: z.string().default(defaultConfig.header.logoSrc.dark),
      light: z.string().default(defaultConfig.header.logoSrc.light)
    }),
    docsButton: z.object({
      label: z.string().default(defaultConfig.header.docsButton.label),
      href: z.string().url().default(defaultConfig.header.docsButton.href)
    }),
    claimProfileButton: z.object({
      label: z.string().default(defaultConfig.header.claimProfileButton.label),
      href: z
        .string()
        .url()
        .default(defaultConfig.header.claimProfileButton.href)
    }),
    githubButton: z.object({
      label: z.string().default(defaultConfig.header.githubButton.label),
      href: z.string().url().default(defaultConfig.header.githubButton.href)
    })
  }),
  pages: z.object({
    home: z.object({
      hero: z.object({
        badge: z.string().default(defaultConfig.pages.home.hero.badge),
        title: z.string().default(defaultConfig.pages.home.hero.title),
        description: z
          .string()
          .default(defaultConfig.pages.home.hero.description)
      })
    })
  }),
  overrideFilterValues: z.object({
    productDeployedOn: z
      .array(z.string())
      .default(defaultConfig.overrideFilterValues.productDeployedOn),
    supportsProducts: z
      .array(z.string())
      .default(defaultConfig.overrideFilterValues.supportsProducts),
    productTypes: z
      .array(z.string())
      .default(defaultConfig.overrideFilterValues.productTypes),
    productAssetRelationships: z
      .array(z.string())
      .default(defaultConfig.overrideFilterValues.productAssetRelationships),
    tags: z.array(z.string()).default(defaultConfig.overrideFilterValues.tags),
    productIds: z.array(z.string()).default(defaultConfig.excludeTags)
  }),
  overrideOptionsFilterValues: z.object({
    productTypes: z
      .array(z.string())
      .default(defaultConfig.overrideOptionsFilterValues.productTypes)
  }),
  excludeTags: z
    .array(z.string())
    .default(defaultConfig.excludeTags)
    .describe('Tag ids to exclude from the filter options (client side)'),
  featureFlags: z.object({
    displayQueriesButtons: z
      .boolean()
      .default(defaultConfig.featureFlags.displayQueriesButtons),
    allowHeroFiltersSearch: z
      .boolean()
      .default(defaultConfig.featureFlags.allowHeroFiltersSearch),
    displayTagsFilter: z
      .boolean()
      .default(defaultConfig.featureFlags.displayTagsFilter),
    displayPoweredBy: z
      .boolean()
      .default(defaultConfig.featureFlags.displayPoweredBy)
  }),
  loadingFacts: z
    .array(z.string())
    .default(defaultConfig.loadingFacts)
    .describe('Fun facts to display during loading screens'),
  productTypeGroups: z
    .array(
      z.object({
        id: z.string(),
        label: z.string(),
        description: z.string(),
        productTypeSlugs: z.array(z.string()),
        icon: z.string().optional(),
        order: z.number().optional()
      })
    )
    .default(defaultConfig.productTypeGroups || [])
});

export type Config = z.infer<typeof configSchema>;
