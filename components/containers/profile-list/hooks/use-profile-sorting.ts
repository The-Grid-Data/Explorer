import { Mysql8_Order_By } from '@/lib/graphql/generated-graphql';
import { useState } from 'react';

export type Sorting = ReturnType<typeof useProfileSorting>;

export const useProfileSorting = () => {
  const [sortBy, setSortBy] = useState<string>('name');
  const [sortOrder, setSortOrder] = useState<Mysql8_Order_By>(
    Mysql8_Order_By.Asc
  );

  const toQuerySortByFields = () => generateOrderByQuery(sortBy, sortOrder);

  const sorting = {
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder
  };

  return {
    toQuerySortByFields,
    sorting
  };
};

const generateOrderByQuery = (sortBy: string, sortOrder: Mysql8_Order_By) => {
  if (!sortBy) return [];

  const parts = sortBy.split('.');
  let orderBy: any = {};
  let current = orderBy;

  parts.forEach((part, index) => {
    if (index === parts.length - 1) {
      current[part] = sortOrder;
    } else {
      current[part] = {};
      current = current[part];
    }
  });

  return orderBy;
};
