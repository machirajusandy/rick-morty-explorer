import { gql } from "@/__generated__/gql";

// Character queries
export const GET_CHARACTERS = gql(`
  query GetCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        image
        location {
          id
          name
        }
      }
    }
  }
`);

export const GET_CHARACTER_BY_ID = gql(`
  query GetCharacterById($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
      location {
        id
        name
        type
        dimension
      }
      origin {
        id
        name
        type
        dimension
      }
      episode {
        id
        name
        air_date
        episode
        created,
         characters {
          id
          name
        }
      }
      created
    }
  }
`);

// Location queries
export const GET_LOCATIONS = gql(`
  query GetLocations($page: Int, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        type
        dimension
        created
      }
    }
  }
`);

export const GET_LOCATION_BY_ID = gql(`
  query GetLocationById($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      created
      residents {
        id
        name
        image
        species
        status
      }
    }
  }
`);

// Episode queries
export const GET_EPISODES = gql(`
  query GetEpisodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        air_date
        episode
        created
      }
    }
  }
`);

export const GET_EPISODE_BY_ID = gql(`
  query GetEpisodeById($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      created
      characters {
        id
        name
        image
        species
        status
      }
    }
  }
`);

export const GET_ALL_CHARACTER_IDS = gql(`
  query GetAllCharacterIds($page: Int) {
    characters(page: $page) {
      info {
        next
        pages # Total number of pages
      }
      results {
        id
      }
    }
  }
`);
