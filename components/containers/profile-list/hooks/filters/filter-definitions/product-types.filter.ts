import { execute } from '@/lib/graphql/execute';
import { useFilter, MultiSelectFilterProps } from '../../use-filter';
import { validateAndFormatOptions, parseAsId, mergeConditions } from '../utils';
import { FiltersStore } from '../../use-profile-filters';
import { useQueryState, parseAsArrayOf } from 'nuqs';
import { graphql } from '@/lib/graphql/generated';
import { isNotEmpty } from '@/lib/utils/is-not-empty';
import {
  CProductsBoolExp,
  CProductTypesBoolExp
} from '@/lib/graphql/generated/graphql';

const filterId = 'productTypes';

export const useProductTypesFilter = (filterStore: FiltersStore) => {
  const [value, setValue] = useQueryState(
    filterId,
    parseAsArrayOf(parseAsId).withDefault([])
  );

  return useFilter<string, string>({
    id: filterId,
    type: 'multiselect',
    optionsQueryDeps: [filterStore],
    initialValue: value,
    onChange: newValue => setValue(newValue),
    getOptions: async () => {
      const data = await execute(
        graphql(`
          query getProductTypeOptions(
            $where: CProductTypesBoolExp
            $aggregateInput: CProductsFilterInput
          ) {
            productTypes(where: $where) {
              label: name
              value: id
              description: definition
              productsAggregate(filter_input: $aggregateInput) {
                _count
              }
            }
          }
        `),
        {
          where: buildProfileSectorsWhere(filterStore),
          aggregateInput: { where: buildAggregateInput(filterStore) }
        }
      );

      return validateAndFormatOptions(
        data?.productTypes
          ?.map(item => ({
            label: item.label,
            value: item.value,
            description: item.description,
            count: item?.productsAggregate?._count
          }))
          .sort((a, b) => (b.count ?? 0) - (a.count ?? 0))
      );
    },
    getQueryConditions: value => ({
      root: {
        products: {
          productTypeId: { _in: value }
        }
      }
    })
  });
};

function buildProfileSectorsWhere(
  filterStore: FiltersStore
): CProductTypesBoolExp {
  const conditions: CProductTypesBoolExp[] = [];

  if (isNotEmpty(filterStore.tagsFilter)) {
    conditions.push({
      products: {
        root: {
          profileInfos: {
            root: {
              profileTags: {
                tagId: { _in: filterStore.tagsFilter }
              }
            }
          }
        }
      }
    });
  }

  if (isNotEmpty(filterStore.profileSectorsFilter)) {
    conditions.push({
      products: {
        root: {
          profileInfos: {
            profileSectorId: {
              _in: filterStore.profileSectorsFilter
            }
          }
        }
      }
    });
  }

  return mergeConditions(conditions);
}

function buildAggregateInput(filterStore: FiltersStore): CProductsBoolExp {
  const conditions: Array<CProductsBoolExp> = [];

  if (isNotEmpty(filterStore.tagsFilter)) {
    conditions.push({
      root: {
        profileTags: { tagId: { _in: filterStore.tagsFilter } }
      }
    });
  }

  if (isNotEmpty(filterStore.profileSectorsFilter)) {
    conditions.push({
      root: {
        products: {
          root: {
            profileInfos: {
              profileSectorId: {
                _in: filterStore.profileSectorsFilter
              }
            }
          }
        }
      }
    });
  }

  return mergeConditions(conditions);
}
