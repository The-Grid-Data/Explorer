import { OrderBy } from '@/lib/graphql/generated/graphql';
import { useState } from 'react';

export type Sorting = ReturnType<typeof useProfileSorting>;

export const useProfileSorting = () => {
  const [sortBy, setSortBy] = useState<string>('connectionScore');
  const [sortOrder, setSortOrder] = useState<OrderBy>(OrderBy.Desc);
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

const generateOrderByQuery = (sortBy: string, sortOrder: OrderBy) => {
  if (!sortBy) return [];

  // For connectionScore, return the order_by directly since it's a flat field in theGridRankings
  if (sortBy === 'connectionScore') {
    return [{
      connectionScore: sortOrder
    }];
  }

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

  return [orderBy];
};
