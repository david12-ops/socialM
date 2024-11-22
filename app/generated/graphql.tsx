import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  // eslint-disable-next-line no-use-before-define
  historyUserData: Array<QueryHistoryData>;
};

export type QueryHistoryData = {
  __typename?: 'QueryHistoryData';
  dataForm: Scalars['String'];
  historyId: Scalars['String'];
  suppData: Scalars['String'];
};

export type HistoryDataQueryVariables = Exact<{ [key: string]: never }>;

export type HistoryDataQuery = {
  __typename?: 'Query';
  historyUserData: Array<{
    __typename?: 'QueryHistoryData';
    dataForm: string;
    historyId: string;
    suppData: string;
  }>;
};

export const HistoryDataDocument = gql`
  query HistoryData {
    historyUserData {
      dataForm
      historyId
      suppData
    }
  }
`;

/**
 * __useHistoryDataQuery__
 *
 * To run a query within a React component, call `useHistoryDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useHistoryDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHistoryDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useHistoryDataQuery(
  baseOptions?: Apollo.QueryHookOptions<
    HistoryDataQuery,
    HistoryDataQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<HistoryDataQuery, HistoryDataQueryVariables>(
    HistoryDataDocument,
    options,
  );
}
export function useHistoryDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HistoryDataQuery,
    HistoryDataQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<HistoryDataQuery, HistoryDataQueryVariables>(
    HistoryDataDocument,
    options,
  );
}
export type HistoryDataQueryHookResult = ReturnType<typeof useHistoryDataQuery>;
export type HistoryDataLazyQueryHookResult = ReturnType<
  typeof useHistoryDataLazyQuery
>;
export type HistoryDataQueryResult = Apollo.QueryResult<
  HistoryDataQuery,
  HistoryDataQueryVariables
>;
