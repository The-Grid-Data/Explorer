import { execute } from '@/lib/graphql/execute';
import { useFilter } from '../../use-filter';
import { validateAndFormatOptions, parseAsId, mergeConditions } from '../utils';
import { FiltersStore } from '../../use-profile-filters';
import { useQueryState, parseAsArrayOf } from 'nuqs';
import { graphql } from '@/lib/graphql/generated';
import { isNotEmpty } from '@/lib/utils/is-not-empty';
import {
  TagsBoolExp,
  ProfileTagsBoolExp
} from '@/lib/graphql/generated/graphql';
import { siteConfig } from '@/lib/site-config';

const filterId = 'tags';

export const useTagsFilter = (filterStore: FiltersStore) => {
  const [value, setValue] = useQueryState(
    filterId,
    parseAsArrayOf(parseAsId).withDefault([])
  );

  return useFilter<string, string>({
    id: filterId,
    type: 'multiselect',
    initialValue: value,
    optionsQueryDeps: [filterStore],
    onChange: newValue => setValue(newValue),
    getOptions: async () => {
      const data = await execute(
        graphql(`
          query getTagsOptions(
            $where: TagsBoolExp
            $aggregateInput: ProfileTagsFilterInput
          ) {
            tags(where: $where) {
              value: id
              label: name
              description
              profileTagsAggregate(filter_input: $aggregateInput) {
                _count
              }
            }
          }
        `),
        {
          where: buildTagsWhere(filterStore),
          aggregateInput: { where: buildAggregateInput(filterStore) }
        }
      );

      const tagsToExclude = siteConfig.excludeTags as string[];

      return validateAndFormatOptions(
        data?.tags
          ?.map(item => ({
            label: item.label,
            value: item.value,
            description: item.description,
            count: item?.profileTagsAggregate?._count
          }))
          .filter(item => item.count)
          .filter(item => !tagsToExclude?.includes?.(item.value))
          .sort((a, b) => (b.count ?? 0) - (a.count ?? 0))
      );
    },
    getQueryConditions: value => ({
      root: {
        profileTags: { tagId: { _in: value } }
      }
    }),
    getOptionsQueryConditions: value => ({
      products: {
        root: {
          profileInfos: {
            root: { profileTags: { tagId: { _in: value } } }
          }
        }
      }
    })
  });
};

function buildTagsWhere(filterStore: FiltersStore): TagsBoolExp {
  const conditions: TagsBoolExp[] = [];

  if (isNotEmpty(filterStore.profileSectorsFilter)) {
    conditions.push({
      profileTags: {
        root: {
          products: {
            root: {
              profileInfos: {
                profileSectorId: { _in: filterStore.profileSectorsFilter }
              }
            }
          }
        }
      }
    });
  }

  if (
    isNotEmpty(filterStore.productTypesFilter) ||
    isNotEmpty(siteConfig.overrideFilterValues.productTypes)
  ) {
    conditions.push({
      profileTags: {
        root: {
          products: {
            productTypeId: {
              _in: [
                ...filterStore.productTypesFilter,
                ...siteConfig.overrideFilterValues.productTypes
              ]
            }
          }
        }
      }
    });
  }

  if (
    isNotEmpty(filterStore.productAssetRelationshipsFilter) ||
    isNotEmpty(siteConfig.overrideFilterValues.productAssetRelationships)
  ) {
    conditions.push({
      profileTags: {
        root: {
          products: {
            productAssetRelationships: {
              asset: {
                ticker: {
                  _in: siteConfig.overrideFilterValues.productAssetRelationships
                }
              }
            }
          }
        }
      }
    });
  }

  if (isNotEmpty(siteConfig.overrideFilterValues.tags)) {
    conditions.push({
      profileTags: {
        tagId: { _in: siteConfig.overrideFilterValues.tags }
      }
    });
  }

  return mergeConditions(conditions);
}

function buildAggregateInput(filterStore: FiltersStore): ProfileTagsBoolExp {
  const conditions: Array<ProfileTagsBoolExp> = [];

  if (isNotEmpty(filterStore.profileSectorsFilter)) {
    conditions.push({
      root: {
        products: {
          root: {
            profileInfos: {
              profileSectorId: { _in: filterStore.profileSectorsFilter }
            }
          }
        }
      }
    });
  }

  if (isNotEmpty(filterStore.productTypesFilter)) {
    conditions.push({
      root: {
        products: {
          productTypeId: { _in: filterStore.productTypesFilter }
        }
      }
    });
  }

  if (
    isNotEmpty(filterStore.productAssetRelationshipsFilter) ||
    isNotEmpty(siteConfig.overrideFilterValues.productAssetRelationships)
  ) {
    conditions.push({
      root: {
        products: {
          productAssetRelationships: {
            asset: {
              ticker: {
                _in: [
                  ...filterStore.productAssetRelationshipsFilter,
                  ...siteConfig.overrideFilterValues.productAssetRelationships
                ]
              }
            }
          }
        }
      }
    });
  }

  return mergeConditions(conditions);
}
