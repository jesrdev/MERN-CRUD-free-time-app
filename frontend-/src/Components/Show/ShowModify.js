import React from "react";
import axios from "axios";

class ShowModify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitShow(event) {
    event.preventDefault();

    let updatedName, updatedGenre, updatedCreator;

    if (this.refs.name.value === "") {
      updatedName = this.props.show.name;
    } else {
      updatedName = this.refs.name.value;
    }

    if (this.refs.genre.value === "") {
      updatedGenre = this.props.show.genre;
    } else {
      updatedGenre = this.refs.genre.value;
    }

    if (this.refs.creator.value === "") {
      updatedCreator = this.props.show.creator;
    } else {
      updatedCreator = this.refs.creator.value;
    }

    axios
      .put(
        `https://free-time-options.herokuapp.com/shows/${this.props.show._id}`,
        {
          name: updatedName,
          genre: updatedGenre,
          creator: updatedCreator,
        }
      )
      .then((response) => {
        this.props.loadShowsList();
        this.props.updateCurrentShow(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const name = this.props.show.name;
    const genre = this.props.show.genre;
    const creator = this.props.show.creator;

    return (
      <div className="row">
        <h1 className="center">Show Modify</h1>
        <form className="col s12" onSubmit={this.submitShow.bind(this)}>
          <div className="row">
            <div className="input-field col s6">
              <input id="name" ref="name" type="text" />
              <label htmlFor="name">{name}</label>
            </div>
            <div className="input-field col s6">
              <input id="genre" ref="genre" type="text" />
              <label htmlFor="genre">{genre}</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="creator" ref="creator" type="text" />
              <label htmlFor="creator">{creator}</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Modify show
          </button>
        </form>
      </div>
    );
  }
}

export default ShowModify;
