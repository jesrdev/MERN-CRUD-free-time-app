import React from "react";
import axios from "axios";

class GameModify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitGame(event) {
    event.preventDefault();

    let updatedTitle, updatedPlatform, updatedGenre;

    if (this.refs.title.value === "") {
      updatedTitle = this.props.game.title;
    } else {
      updatedTitle = this.refs.title.value;
    }

    if (this.refs.platform.value === "") {
      updatedPlatform = this.props.game.platform;
    } else {
      updatedPlatform = this.refs.platform.value;
    }

    if (this.refs.genre.value === "") {
      updatedGenre = this.props.game.genre;
    } else {
      updatedGenre = this.refs.genre.value;
    }

    axios
      .put(
        `https://free-time-options.herokuapp.com/games/${this.props.game._id}`,
        {
          title: updatedTitle,
          platform: updatedPlatform,
          genre: updatedGenre,
        }
      )
      .then((response) => {
        this.props.loadGamesList();
        this.props.updateCurrentGame(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const title = this.props.game.title;
    const platform = this.props.game.platform;
    const genre = this.props.game.genre;

    return (
      <div className="row">
        <h1 className="center">Game Modify</h1>
        <form className="col s12" onSubmit={this.submitGame.bind(this)}>
          <div className="row">
            <div className="input-field col s6">
              <input id="title" ref="title" type="text" />
              <label htmlFor="title">{title}</label>
            </div>
            <div className="input-field col s6">
              <input id="platform" ref="platform" type="text" />
              <label htmlFor="platform">{platform}</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="genre" ref="genre" type="text" />
              <label htmlFor="genre">{genre}</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Modify game
          </button>
        </form>
      </div>
    );
  }
}

export default GameModify;
