import { execute } from '@/lib/graphql/execute';
import { useFilter, MultiSelectFilterProps } from '../../use-filter';
import { validateAndFormatOptions, parseAsId } from '../utils';
import { FiltersStore } from '../../use-profile-filters';
import { useQueryState, parseAsArrayOf } from 'nuqs';
import { graphql } from '@/lib/graphql/generated';
import { 
  buildProductTypesWhereConstraints,
  buildProductsConstraints
} from '../constraint-builders';

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
            $where: ProductTypesBoolExp
            $aggregateInput: ProductsFilterInput
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
          where: buildProductTypesWhereConstraints(filterStore),
          aggregateInput: { where: buildProductsConstraints(filterStore) }
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
          .filter(item => item.count)
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

