import ApolloClient from 'apollo-boost';

const goronClient = (): ApolloClient<object> => {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/api'
  });

  return client;
};

export default goronClient();
