import React from "react";
import axios from "axios";

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      duration: "",
      genre: "",
      director: "",
    };

    this.setTitle = this.setTitle.bind(this);
    this.setDuration = this.setDuration.bind(this);
    this.setGenre = this.setGenre.bind(this);
    this.setDirector = this.setDirector.bind(this);
  }

  submitMovie(event) {
    event.preventDefault();

    axios
      .post(`https://free-time-options.herokuapp.com/movies`, {
        title: this.refs.title.value,
        duration: this.refs.duration.value,
        genre: this.refs.genre.value,
        director: this.refs.director.value,
      })
      .then((response) => {
        console.log(response);
        this.props.loadMoviesList();
        this.setTitle("");
        this.setDuration("");
        this.setGenre("");
        this.setDirector("");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setTitle(name) {
    this.setState({
      title: name,
    });
  }
  setDuration(dur) {
    this.setState({
      duration: dur,
    });
  }
  setDirector(dir) {
    this.setState({
      director: dir,
    });
  }

  setGenre(gen) {
    this.setState({
      genre: gen,
    });
  }

  render() {
    return (
      <div className="row">
        <h1 className="center">Add a new movie</h1>
        <form className="col s12" onSubmit={this.submitMovie.bind(this)}>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="title"
                ref="title"
                type="text"
                value={this.state.title}
                onChange={(event) => this.setTitle(event.target.value)}
              />
              <label htmlFor="title">Movie Title</label>
            </div>
            <div className="input-field col s6">
              <input
                id="duration"
                ref="duration"
                type="number"
                value={this.state.duration}
                onChange={(event) => this.setDuration(event.target.value)}
              />
              <label htmlFor="duration">Duration (min)</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="director"
                ref="director"
                type="text"
                value={this.state.director}
                onChange={(event) => this.setDirector(event.target.director)}
              />
              <label htmlFor="director">Director</label>
            </div>
            <div className="input-field col s6">
              <input
                id="genre"
                ref="genre"
                type="text"
                value={this.state.genre}
                onChange={(event) => this.setGenre(event.target.value)}
              />
              <label htmlFor="genre">Genre</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Add movie
          </button>
        </form>
      </div>
    );
  }
}

export default MovieForm;
