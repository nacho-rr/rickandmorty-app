import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import AppNavigator from './navigation/AppNavigator';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://rickandmortyapi.com/graphql/'
});


export default function App() {
  return (
    <ApolloProvider client={client} >
      <AppNavigator />
    </ApolloProvider>
  );
};
