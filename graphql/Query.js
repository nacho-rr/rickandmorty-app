import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query characters($page: Int, $filter: FilterCharacter){
    characters(page: $page, filter: $filter){
      info{
        count
        pages
        next
        prev
      }
      results{
        name
        id
        image
        type
        gender
        species
      }
    }
  }
`;

export const GET_LOCATIONS = gql`
  query locations($page: Int, $filter: FilterLocation){
    locations(page: $page, filter: $filter){
      info{
        count
        pages
        next
        prev
      }
      results{
        id
        name
        dimension
        type
        residents{
          id
          name
          image
          type
          gender
          species
        }
      }
    }
  }
`;

export const GET_EPISODES = gql`
  query episodes($page: Int, $filter: FilterEpisode){
    episodes(page: $page, filter: $filter){
      info{
        count
        pages
        next
        prev
      }
      results{
        id
        name
        episode
        air_date
        characters{
          id
          name
          image
          type
          gender
          species
        }
      }
    }
  }
`;