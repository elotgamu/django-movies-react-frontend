import { gql } from "apollo-boost";

const GET_ACTOR_DETAILS = gql`
  query getActor($id: Int) {
    actor(id: $id) {
      id
      name
    }
  }
`;

export default GET_ACTOR_DETAILS;
