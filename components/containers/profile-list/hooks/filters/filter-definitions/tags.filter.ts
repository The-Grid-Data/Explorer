import { execute } from '@/lib/graphql/execute';
import { useFilter } from '../../use-filter';
import { validateAndFormatOptions, parseAsId, mergeConditions } from '../utils';
import { FiltersStore } from '../../use-profile-filters';
import { useQueryState, parseAsArrayOf } from 'nuqs';
import { graphql } from '@/lib/graphql/generated';
import { isNotEmpty } from '@/lib/utils/is-not-empty';
import {
  CTagsBoolExp,
  CProfileTagsBoolExp
} from '@/lib/graphql/generated/graphql';

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
            $where: CTagsBoolExp
            $aggregateInput: CProfileTagsFilterInput
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

      return validateAndFormatOptions(
        data?.tags
          ?.map(item => ({
            label: item.label,
            value: item.value,
            description: item.description,
            count: item?.profileTagsAggregate?._count
          }))
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

function buildTagsWhere(filterStore: FiltersStore): CTagsBoolExp {
  const conditions: CTagsBoolExp[] = [];

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

  if (isNotEmpty(filterStore.productTypesFilter)) {
    conditions.push({
      profileTags: {
        root: {
          products: {
            productTypeId: { _in: filterStore.productTypesFilter }
          }
        }
      }
    });
  }

  return mergeConditions(conditions);
}

function buildAggregateInput(filterStore: FiltersStore): CProfileTagsBoolExp {
  const conditions: Array<CProfileTagsBoolExp> = [];

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

  return mergeConditions(conditions);
}
