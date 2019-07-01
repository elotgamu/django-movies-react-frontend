import React from "react";

class MovieEdit extends React.Component {
  state = { movie: {}, propReceived: false };

  componentDidMount() {
    if (this.props.location.state.movie) {
      let movieData = this.state.movie;
      this.setState({
        movie: { ...movieData, ...this.props.location.state.movie },
        propReceived: true
      });
    }
  }

  render() {
    return (
      <div>
        <h3>Edit a movie</h3>
        <form>
          <div className="form-group">
            <label htmlFor="titleInput">Title: </label>
            <input
              type="text"
              className="form-control"
              id="titleInput"
              name="title"
              value={this.state.movie.title || ""}
              aria-describedby="titleHelp"
              placeholder="Enter a title"
              onChange={evt => {
                let movie = this.state.movie;
                movie.title = evt.target.value;
                this.setState({ movie: { ...movie, ...this.state.movie } });
              }}
            />
            <small id="titleHelp" className="form-text text-muted">
              The title of the movie
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="yearInput">Year: </label>
            <input
              type="text"
              className="form-control"
              name="year"
              id="yearInput"
              value={this.state.movie.year || ""}
              onChange={evt => {
                let movie = this.state.movie;
                movie.year = evt.target.value;
                this.setState({ movie: { ...movie, ...this.state.movie } });
              }}
              placeholder="Year"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default MovieEdit;
