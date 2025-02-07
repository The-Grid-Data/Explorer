import { z } from 'zod';

export const configSchema = z.object({
  metadata: z.object({
    title: z.string(),
    description: z.string()
  }),
  verifiedTagId: z.string(),
  banner: z.object({
    text: z.string()
  }),
  header: z.object({
    logoSrc: z.object({
      dark: z.string(),
      light: z.string()
    }),
    docsButton: z.object({
      label: z.string(),
      href: z.string().url()
    }),
    claimProfileButton: z.object({
      label: z.string(),
      href: z.string().url()
    }),
    githubButton: z.object({
      label: z.string(),
      href: z.string().url()
    })
  }),
  pages: z.object({
    home: z.object({
      hero: z.object({
        badge: z.string(),
        title: z.string(),
        description: z.string()
      })
    })
  }),
  overrideFilterValues: z.object({
    productDeployedOn: z.array(z.string()),
    supportsProducts: z.array(z.string()),
    productTypes: z.array(z.string()),
    productAssetRelationships: z.array(z.string()),
    tags: z.array(z.string()),
    productIds: z.array(z.string())
  }),
  overrideOptionsFilterValues: z.object({
    productTypes: z.array(z.string())
  }),
  featureFlags: z.object({
    displayQueriesButtons: z.boolean().optional(),
    allowHeroFiltersSearch: z.boolean().optional(),
    displayTagsFilter: z.boolean().optional(),
    displayPoweredBy: z.boolean().optional()
  })
});

export type Config = z.infer<typeof configSchema>;
