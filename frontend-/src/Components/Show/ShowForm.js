import React from "react";
import axios from "axios";

class ShowForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      genre: "",
      creator: "",
    };

    this.setName = this.setName.bind(this);
    this.setGenre = this.setGenre.bind(this);
    this.setCreator = this.setCreator.bind(this);
  }

  submitShow(event) {
    event.preventDefault();

    axios
      .post(`https://free-time-options.herokuapp.com/shows`, {
        name: this.refs.name.value,
        genre: this.refs.genre.value,
        creator: this.refs.creator.value,
      })
      .then((response) => {
        console.log(response);
        this.props.loadShowsList();
        this.setName("");
        this.setGenre("");
        this.setCreator("");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setName(nam) {
    this.setState({
      name: nam,
    });
  }
  setGenre(gen) {
    this.setState({
      genre: gen,
    });
  }
  setCreator(creat) {
    this.setState({
      creator: creat,
    });
  }

  render() {
    return (
      <div className="row">
        <h1 className="center">Add a new show</h1>
        <form className="col s12" onSubmit={this.submitShow.bind(this)}>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="name"
                ref="name"
                type="text"
                value={this.state.name}
                onChange={(event) => this.setName(event.target.value)}
              />
              <label htmlFor="name">Title</label>
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
          <div className="row">
            <div className="input-field col s6">
              <input
                id="creator"
                ref="creator"
                type="text"
                value={this.state.creator}
                onChange={(event) => this.setCreator(event.target.value)}
              />
              <label htmlFor="creator">Creator</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Add show
          </button>
        </form>
      </div>
    );
  }
}

export default ShowForm;
