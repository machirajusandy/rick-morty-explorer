/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query GetCharacters($page: Int, $filter: FilterCharacter) {\n    characters(page: $page, filter: $filter) {\n      info {\n        count\n        pages\n        next\n        prev\n      }\n      results {\n        id\n        name\n        status\n        species\n        type\n        gender\n        image\n        location {\n          id\n          name\n        }\n      }\n    }\n  }\n": typeof types.GetCharactersDocument,
    "\n  query GetCharacterById($id: ID!) {\n    character(id: $id) {\n      id\n      name\n      status\n      species\n      type\n      gender\n      image\n      location {\n        id\n        name\n        type\n        dimension\n      }\n      origin {\n        id\n        name\n        type\n        dimension\n      }\n      episode {\n        id\n        name\n        air_date\n        episode\n        created,\n         characters {\n          id\n          name\n        }\n      }\n      created\n    }\n  }\n": typeof types.GetCharacterByIdDocument,
    "\n  query GetLocations($page: Int, $filter: FilterLocation) {\n    locations(page: $page, filter: $filter) {\n      info {\n        count\n        pages\n        next\n        prev\n      }\n      results {\n        id\n        name\n        type\n        dimension\n        created\n      }\n    }\n  }\n": typeof types.GetLocationsDocument,
    "\n  query GetLocationById($id: ID!) {\n    location(id: $id) {\n      id\n      name\n      type\n      dimension\n      created\n      residents {\n        id\n        name\n        image\n        species\n        status\n      }\n    }\n  }\n": typeof types.GetLocationByIdDocument,
    "\n  query GetEpisodes($page: Int, $filter: FilterEpisode) {\n    episodes(page: $page, filter: $filter) {\n      info {\n        count\n        pages\n        next\n        prev\n      }\n      results {\n        id\n        name\n        air_date\n        episode\n        created\n      }\n    }\n  }\n": typeof types.GetEpisodesDocument,
    "\n  query GetEpisodeById($id: ID!) {\n    episode(id: $id) {\n      id\n      name\n      air_date\n      episode\n      created\n      characters {\n        id\n        name\n        image\n        species\n        status\n      }\n    }\n  }\n": typeof types.GetEpisodeByIdDocument,
    "\n  query GetAllCharacterIds($page: Int) {\n    characters(page: $page) {\n      info {\n        next\n        pages # Total number of pages\n      }\n      results {\n        id\n      }\n    }\n  }\n": typeof types.GetAllCharacterIdsDocument,
};
const documents: Documents = {
    "\n  query GetCharacters($page: Int, $filter: FilterCharacter) {\n    characters(page: $page, filter: $filter) {\n      info {\n        count\n        pages\n        next\n        prev\n      }\n      results {\n        id\n        name\n        status\n        species\n        type\n        gender\n        image\n        location {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.GetCharactersDocument,
    "\n  query GetCharacterById($id: ID!) {\n    character(id: $id) {\n      id\n      name\n      status\n      species\n      type\n      gender\n      image\n      location {\n        id\n        name\n        type\n        dimension\n      }\n      origin {\n        id\n        name\n        type\n        dimension\n      }\n      episode {\n        id\n        name\n        air_date\n        episode\n        created,\n         characters {\n          id\n          name\n        }\n      }\n      created\n    }\n  }\n": types.GetCharacterByIdDocument,
    "\n  query GetLocations($page: Int, $filter: FilterLocation) {\n    locations(page: $page, filter: $filter) {\n      info {\n        count\n        pages\n        next\n        prev\n      }\n      results {\n        id\n        name\n        type\n        dimension\n        created\n      }\n    }\n  }\n": types.GetLocationsDocument,
    "\n  query GetLocationById($id: ID!) {\n    location(id: $id) {\n      id\n      name\n      type\n      dimension\n      created\n      residents {\n        id\n        name\n        image\n        species\n        status\n      }\n    }\n  }\n": types.GetLocationByIdDocument,
    "\n  query GetEpisodes($page: Int, $filter: FilterEpisode) {\n    episodes(page: $page, filter: $filter) {\n      info {\n        count\n        pages\n        next\n        prev\n      }\n      results {\n        id\n        name\n        air_date\n        episode\n        created\n      }\n    }\n  }\n": types.GetEpisodesDocument,
    "\n  query GetEpisodeById($id: ID!) {\n    episode(id: $id) {\n      id\n      name\n      air_date\n      episode\n      created\n      characters {\n        id\n        name\n        image\n        species\n        status\n      }\n    }\n  }\n": types.GetEpisodeByIdDocument,
    "\n  query GetAllCharacterIds($page: Int) {\n    characters(page: $page) {\n      info {\n        next\n        pages # Total number of pages\n      }\n      results {\n        id\n      }\n    }\n  }\n": types.GetAllCharacterIdsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCharacters($page: Int, $filter: FilterCharacter) {\n    characters(page: $page, filter: $filter) {\n      info {\n        count\n        pages\n        next\n        prev\n      }\n      results {\n        id\n        name\n        status\n        species\n        type\n        gender\n        image\n        location {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCharacters($page: Int, $filter: FilterCharacter) {\n    characters(page: $page, filter: $filter) {\n      info {\n        count\n        pages\n        next\n        prev\n      }\n      results {\n        id\n        name\n        status\n        species\n        type\n        gender\n        image\n        location {\n          id\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCharacterById($id: ID!) {\n    character(id: $id) {\n      id\n      name\n      status\n      species\n      type\n      gender\n      image\n      location {\n        id\n        name\n        type\n        dimension\n      }\n      origin {\n        id\n        name\n        type\n        dimension\n      }\n      episode {\n        id\n        name\n        air_date\n        episode\n        created,\n         characters {\n          id\n          name\n        }\n      }\n      created\n    }\n  }\n"): (typeof documents)["\n  query GetCharacterById($id: ID!) {\n    character(id: $id) {\n      id\n      name\n      status\n      species\n      type\n      gender\n      image\n      location {\n        id\n        name\n        type\n        dimension\n      }\n      origin {\n        id\n        name\n        type\n        dimension\n      }\n      episode {\n        id\n        name\n        air_date\n        episode\n        created,\n         characters {\n          id\n          name\n        }\n      }\n      created\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetLocations($page: Int, $filter: FilterLocation) {\n    locations(page: $page, filter: $filter) {\n      info {\n        count\n        pages\n        next\n        prev\n      }\n      results {\n        id\n        name\n        type\n        dimension\n        created\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetLocations($page: Int, $filter: FilterLocation) {\n    locations(page: $page, filter: $filter) {\n      info {\n        count\n        pages\n        next\n        prev\n      }\n      results {\n        id\n        name\n        type\n        dimension\n        created\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetLocationById($id: ID!) {\n    location(id: $id) {\n      id\n      name\n      type\n      dimension\n      created\n      residents {\n        id\n        name\n        image\n        species\n        status\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetLocationById($id: ID!) {\n    location(id: $id) {\n      id\n      name\n      type\n      dimension\n      created\n      residents {\n        id\n        name\n        image\n        species\n        status\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetEpisodes($page: Int, $filter: FilterEpisode) {\n    episodes(page: $page, filter: $filter) {\n      info {\n        count\n        pages\n        next\n        prev\n      }\n      results {\n        id\n        name\n        air_date\n        episode\n        created\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetEpisodes($page: Int, $filter: FilterEpisode) {\n    episodes(page: $page, filter: $filter) {\n      info {\n        count\n        pages\n        next\n        prev\n      }\n      results {\n        id\n        name\n        air_date\n        episode\n        created\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetEpisodeById($id: ID!) {\n    episode(id: $id) {\n      id\n      name\n      air_date\n      episode\n      created\n      characters {\n        id\n        name\n        image\n        species\n        status\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetEpisodeById($id: ID!) {\n    episode(id: $id) {\n      id\n      name\n      air_date\n      episode\n      created\n      characters {\n        id\n        name\n        image\n        species\n        status\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAllCharacterIds($page: Int) {\n    characters(page: $page) {\n      info {\n        next\n        pages # Total number of pages\n      }\n      results {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAllCharacterIds($page: Int) {\n    characters(page: $page) {\n      info {\n        next\n        pages # Total number of pages\n      }\n      results {\n        id\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;