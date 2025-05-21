import { HttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client-integration-nextjs";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            characters: {
              keyArgs: ["filter"],
              merge(existing = { results: [] }, incoming) {
                return {
                  ...incoming,
                  results: [...existing.results, ...incoming.results],
                };
              },
            },
            episodes: {
              keyArgs: ["filter"],
              merge(existing = { results: [] }, incoming) {
                return {
                  ...incoming,
                  results: [...existing.results, ...incoming.results],
                };
              },
            },
            locations: {
              keyArgs: ["filter"],
              merge(existing = { results: [] }, incoming) {
                return {
                  ...incoming,
                  results: [...existing.results, ...incoming.results],
                };
              },
            },
          },
        },
      },
    }),
    link: new HttpLink({
      uri: "https://rickandmortyapi.com/graphql",
    }),
  });
});
