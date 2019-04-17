import ApolloClient, { ApolloQueryResult } from 'apollo-boost';

interface DefaultExport<T> {
  default: T;
}

const apolloClient: ApolloClient<object> = jest.genMockFromModule<
  DefaultExport<ApolloClient<object>>
>('apollo-boost').default;

export const getMockedApolloClient = (data: any): ApolloClient<object> => {
  apolloClient.query = jest.fn(
    (): Promise<ApolloQueryResult<any>> => {
      return Promise.resolve({
        data,
        loading: false,
        networkStatus: 7,
        stale: false
      });
    }
  );

  return apolloClient;
};

export default getMockedApolloClient;
