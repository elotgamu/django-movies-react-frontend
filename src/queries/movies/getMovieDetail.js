import { gql } from "apollo-boost";

const GET_MOVIE_DETAILS = gql`
  query getMovie($id: Int) {
    movie(id: $id) {
      id
      title
      year
      actors {
        id
        name
      }
    }
  }
`;

export default GET_MOVIE_DETAILS;
