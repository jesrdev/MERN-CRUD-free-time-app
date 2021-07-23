import React from "react";
import axios from "axios";

class GameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      platform: "",
      genre: "",
    };

    this.setTitle = this.setTitle.bind(this);
    this.setPlatform = this.setPlatform.bind(this);
    this.setGenre = this.setGenre.bind(this);
  }

  submitGame(event) {
    event.preventDefault();

    axios
      .post(`https://free-time-options.herokuapp.com/games`, {
        title: this.refs.title.value,
        platform: this.refs.platform.value,
        genre: this.refs.genre.value,
      })
      .then((response) => {
        console.log(response);
        this.props.loadGamesList();
        this.setTitle("");
        this.setPlatform("");
        this.setGenre("");
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
  setPlatform(plat) {
    this.setState({
      platform: plat,
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
        <h1 className="center">Add a new game</h1>
        <form className="col s12" onSubmit={this.submitGame.bind(this)}>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="title"
                ref="title"
                type="text"
                value={this.state.title}
                onChange={(event) => this.setTitle(event.target.value)}
              />
              <label htmlFor="title">Title</label>
            </div>
            <div className="input-field col s6">
              <input
                id="platform"
                ref="platform"
                type="text"
                value={this.state.platform}
                onChange={(event) => this.setPlatform(event.target.value)}
              />
              <label htmlFor="platform">Platform</label>
            </div>
          </div>
          <div className="row">
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
            Add game
          </button>
        </form>
      </div>
    );
  }
}

export default GameForm;
