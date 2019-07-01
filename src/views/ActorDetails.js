import React from "react";
import { Query } from "react-apollo";

import GET_ACTOR_DETAILS from "../queries/actors/getActorDetails";

class ActorDetails extends React.Component {
  state = { actor: {} };

  setActorDataToState = fetchedActor => {
    let ActorData = this.state.actor;
    this.setState({ actor: { ...ActorData, ...fetchedActor } });
  };

  render() {
    return (
      <div>
        <Query
          query={GET_ACTOR_DETAILS}
          variables={{ id: this.props.match.params.id }}
          fetchPolicy="cache-and-network"
          onCompleted={data => this.setActorDataToState(data.actor)}
        >
          {({ error, loading, data }) => {
            if (error) {
              return (
                <React.Fragment>
                  <h3>Error</h3>
                  <p>{error.message}</p>
                </React.Fragment>
              );
            }

            if (loading) {
              return <h3>Loading...</h3>;
            }

            if (data) {
              const actor = this.state.actor;
              return (
                <React.Fragment>
                  <h3>{actor.name}</h3>
                  <p>
                    <small>Id: {actor.id}</small>
                  </p>
                </React.Fragment>
              );
            }
          }}
        </Query>
      </div>
    );
  }
}

export default ActorDetails;
