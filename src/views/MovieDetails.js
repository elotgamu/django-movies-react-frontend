import React from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";

import GET_MOVIE_DETAILS from "../queries/movies/getMovieDetail";

class MovieDetails extends React.Component {
  state = { movie: {} };

  setMovieDetailToState = fetchedMovie => {
    let movieData = this.state.movie;
    this.setState({
      movie: { ...movieData, ...fetchedMovie }
    });
  };

  editMovie = evt => {
    evt.preventDefault();
    const movieInfo = this.state.movie;
    delete movieInfo.__typename;
    this.props.history.push({
      pathname: `/movies/${this.props.match.params.id}/edit/`,
      state: { movie: this.state.movie }
    });
  };

  render() {
    return (
      <div>
        <Query
          query={GET_MOVIE_DETAILS}
          variables={{ id: this.props.match.params.id }}
          fetchPolicy={"cache-and-network"}
          onCompleted={data => this.setMovieDetailToState(data.movie)}
        >
          {({ error, loading, data }) => {
            if (loading) {
              return <h3>Loading data...</h3>;
            }

            if (error) {
              return <h3>{error.message}</h3>;
            }

            if (data) {
              let ActorsInMovies = [];
              if (this.state.movie.actors) {
                ActorsInMovies = this.state.movie.actors.map(actor => {
                  return (
                    <li key={actor.id}>
                      <Link to={{ pathname: `/actors/${actor.id}` }}>
                        {actor.name}
                      </Link>
                    </li>
                  );
                });
              }

              return (
                <React.Fragment>
                  <h3>{this.state.movie.title}</h3>
                  <p>
                    <small>ID: {this.state.movie.id}</small>
                  </p>
                  <p>
                    <small>Año: {this.state.movie.year}</small>
                  </p>
                  <p>Actores:</p>
                  <ul>{ActorsInMovies}</ul>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={evt => {
                      this.editMovie(evt);
                    }}
                  >
                    Edit
                  </button>
                </React.Fragment>
              );
            }
          }}
        </Query>
      </div>
    );
  }
}

export default MovieDetails;
