import { useContext, useEffect } from 'react';
import ApolloClient, { ApolloQueryResult } from 'apollo-boost';
import { DocumentNode } from 'graphql';

import ApolloContext from '../context';

export default function useQuery<T = object>(
  query: DocumentNode,
  transform: (result: T) => void
): void {
  const apolloClient: ApolloClient<object> = useContext(ApolloContext);

  useEffect(() => {
    apolloClient.query({ query }).then((result: ApolloQueryResult<T>) => {
      transform(result.data);
    });
  }, []);
}
