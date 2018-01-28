import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

export default new ApolloClient({
  link: new HttpLink({
    uri: 'https://wildsmith-instagram.herokuapp.com/graphql',
  }),
  cache: new InMemoryCache(),
});
