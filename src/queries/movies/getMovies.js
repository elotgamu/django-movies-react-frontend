import { gql } from "apollo-boost";

const GET_MOVIES = gql`
  {
    movies {
      id
      title
    }
  }
`;

export default GET_MOVIES;
