import { gql } from "apollo-boost";

const GET_ACTORS = gql`
  {
    actors {
      id
      name
    }
  }
`;

export default GET_ACTORS;
