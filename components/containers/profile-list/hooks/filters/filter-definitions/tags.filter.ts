import { execute } from '@/lib/graphql/execute';
import { useFilter } from '../../use-filter';
import { validateAndFormatOptions, parseAsId } from '../utils';
import { FiltersStore } from '../../use-profile-filters';
import { useQueryState, parseAsArrayOf } from 'nuqs';
import { graphql } from '@/lib/graphql/generated';
import { isNotEmpty } from '@/lib/utils/is-not-empty';
import deepmerge from 'deepmerge';
import { CTagsBoolExp } from '@/lib/graphql/generated/graphql';

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
      const where = deepmerge.all([
        isNotEmpty(filterStore.profileSectorsFilter)
          ? ({
              profileTags: {
                root: {
                  products: {
                    root: {
                      profileInfos: {
                        profileSector: {
                          id: { _in: filterStore.profileSectorsFilter }
                        }
                      }
                    }
                  }
                }
              }
            } satisfies CTagsBoolExp)
          : {},
        isNotEmpty(filterStore.productTypesFilter)
          ? ({
              profileTags: {
                root: {
                  products: {
                    productTypeId: { _in: filterStore.productTypesFilter }
                  }
                }
              }
            } satisfies CTagsBoolExp)
          : {}
      ]);

      const data = await execute(
        graphql(`
          query getTagsOptions($where: CTagsBoolExp) {
            tags(where: $where) {
              value: id
              label: name
              description
            }
          }
        `),
        { where }
      );
      return validateAndFormatOptions(data?.tags);
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
