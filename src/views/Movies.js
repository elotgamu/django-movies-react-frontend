import React from "react";

import { Query } from "react-apollo";

import GET_MOVIES from "../queries/movies/getMovies";

class Movies extends React.Component {
  state = { movies: [] };

  setMoviesToState = fetchedMovies => {
    const existingMovies = this.state.movies;
    if (fetchedMovies.length > 0) {
      this.setState({
        movies: [...existingMovies, ...fetchedMovies]
      });
    }
  };

  render() {
    return (
      <Query
        query={GET_MOVIES}
        fetchPolicy={"cache-and-network"}
        onCompleted={data => this.setMoviesToState(data.movies)}
      >
        {({ error, loading, data }) => {
          if (loading) {
            return <h3>Loading information...</h3>;
          }

          if (error) {
            return (
              <React.Fragment>
                <h3>Error</h3>
                <p>{error.message}</p>
              </React.Fragment>
            );
          }

          if (data) {
            const moviesToDisplay = this.state.movies.map((movie, index) => {
              return (
                <li className="list-group-item" key={index}>
                  {movie.title}
                </li>
              );
            });

            return (
              <React.Fragment>
                <ul className="list-group">{moviesToDisplay}</ul>
              </React.Fragment>
            );
          }
        }}
      </Query>
    );
  }
}

export default Movies;
