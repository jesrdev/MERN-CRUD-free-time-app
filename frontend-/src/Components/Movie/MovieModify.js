import React from "react";
import axios from "axios";

class MovieModify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitMovie(event) {
    event.preventDefault();

    let updatedTitle, updatedDuration, updatedGenre, updatedDirector;

    if (this.refs.title.value === "") {
      updatedTitle = this.props.movie.title;
    } else {
      updatedTitle = this.refs.title.value;
    }

    if (this.refs.duration.value === "") {
      updatedDuration = this.props.movie.duration;
    } else {
      updatedDuration = this.refs.duration.value;
    }

    if (this.refs.genre.value === "") {
      updatedGenre = this.props.movie.genre;
    } else {
      updatedGenre = this.refs.genre.value;
    }

    if (this.refs.director.value === "") {
      updatedDirector = this.props.movie.director;
    } else {
      updatedDirector = this.refs.director.value;
    }

    axios
      .put(
        `https://free-time-options.herokuapp.com/movies/${this.props.movie._id}`,
        {
          title: updatedTitle,
          duration: updatedDuration,
          genre: updatedGenre,
          director: updatedDirector,
        }
      )
      .then((response) => {
        this.props.loadMoviesList();
        this.props.updateCurrentMovie(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const title = this.props.movie.title;
    const duration = this.props.movie.duration;
    const genre = this.props.movie.genre;
    const director = this.props.movie.director;

    return (
      <div className="row">
        <h1 className="center">Movie Modify</h1>
        <form className="col s12" onSubmit={this.submitMovie.bind(this)}>
          <div className="row">
            <div className="input-field col s6">
              <input id="title" ref="title" type="text" />
              <label htmlFor="title">{title}</label>
            </div>
            <div className="input-field col s6">
              <input id="duration" ref="duration" type="text" />
              <label htmlFor="duration">{duration}</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="genre" ref="genre" type="text" />
              <label htmlFor="genre">{genre}</label>
            </div>
            <div className="input-field col s6">
              <input id="director" ref="director" type="text" />
              <label htmlFor="director">{director}</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Modify movie
          </button>
        </form>
      </div>
    );
  }
}

export default MovieModify;
