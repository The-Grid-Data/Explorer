import { execute } from '@/lib/graphql/execute';
import { useFilter, MultiSelectFilterProps } from '../../use-filter';
import { validateAndFormatOptions, parseAsId } from '../utils';
import { FiltersStore } from '../../use-profile-filters';
import { useQueryState, parseAsArrayOf } from 'nuqs';
import { graphql } from '@/lib/graphql/generated';
import { isNotEmpty } from '@/lib/utils/is-not-empty';
import deepmerge from 'deepmerge';
import { CProductTypesBoolExp } from '@/lib/graphql/generated/graphql';

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
      const where = deepmerge.all([
        isNotEmpty(filterStore.tagsFilter)
          ? ({
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
            } satisfies CProductTypesBoolExp)
          : {},
        isNotEmpty(filterStore.profileSectorsFilter)
          ? ({
              products: {
                root: {
                  profileInfos: {
                    profileSectorId: {
                      _in: filterStore.profileSectorsFilter
                    }
                  }
                }
              }
            } satisfies CProductTypesBoolExp)
          : {}
      ]);

      const data = await execute(
        graphql(`
          query getProductTypeOptions($where: CProductTypesBoolExp) {
            productTypes(where: $where) {
              label: name
              value: id
              description: definition
            }
          }
        `),
        { where }
      );
      return validateAndFormatOptions(data?.productTypes);
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
