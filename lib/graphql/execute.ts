import type { TypedDocumentString } from './generated/graphql';

type GraphQLResponse<T> =
  | { data?: undefined; errors: { message: string }[] }
  | { data: T; errors?: undefined };

export const execute = async <TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> => {
  if (!process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_URL) {
    throw TypeError('NEXT_PUBLIC_GRAPHQL_ENDPOINT_URL is not defined');
  }
  const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_URL, {
    method: 'POST',
    body: JSON.stringify({
      query,
      variables
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

  if (graphqlResponse.errors) {
    throw TypeError(graphqlResponse.errors[0]?.message);
  }

  return graphqlResponse.data;
};
