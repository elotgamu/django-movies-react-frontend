import React from "react";
import { Query } from "react-apollo";

import GET_ACTORS from "../queries/actors/getActors";

class Actors extends React.Component {
  state = { actors: [] };

  setDataToState = fetchedData => {
    console.log(fetchedData);
    const actors = this.state.actors;
    if (fetchedData.length > 0) {
      this.setState({
        actors: [...actors, ...fetchedData]
      });
    }
  };

  render() {
    return (
      <Query
        query={GET_ACTORS}
        fetchPolicy={"cache-and-network"}
        onCompleted={data => this.setDataToState(data.actors)}
      >
        {({ loading, error, data }) => {
          if (loading) {
            return <p>Loading...</p>;
          }

          if (error) {
            return (
              <React.Fragment>
                <h4>Error</h4>
                <p>{error.message}</p>
              </React.Fragment>
            );
          }

          if (data) {
            const Actors = this.state.actors.map((actor, index) => {
              return <li key={actor.id}>{actor.name}</li>;
            });

            return <ul>{Actors}</ul>;
          }
        }}
      </Query>
    );
  }
}

export default Actors;
