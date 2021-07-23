import React from "react";
import axios from "axios";

class SongForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      guitarrist: "",
      band: "",
      level: "",
    };

    this.setTitle = this.setTitle.bind(this);
    this.setGuitarrist = this.setGuitarrist.bind(this);
    this.setBand = this.setBand.bind(this);
    this.setLevel = this.setLevel.bind(this);
  }

  submitSong(event) {
    event.preventDefault();

    axios
      .post(`https://free-time-options.herokuapp.com/songs`, {
        title: this.refs.title.value,
        guitarrist: this.refs.guitarrist.value,
        band: this.refs.band.value,
        level: this.refs.level.value,
      })
      .then((response) => {
        console.log(response);
        this.props.loadSongsList();
        this.setTitle("");
        this.setGuitarrist("");
        this.setBand("");
        this.setLevel("");
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
  setGuitarrist(git) {
    this.setState({
      guitarrist: git,
    });
  }
  setBand(ban) {
    this.setState({
      band: ban,
    });
  }

  setLevel(lev) {
    this.setState({
      level: lev,
    });
  }

  render() {
    return (
      <div className="row">
        <h1 className="center">Add a new song</h1>
        <form className="col s12" onSubmit={this.submitSong.bind(this)}>
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
                id="guitarrist"
                ref="guitarrist"
                type="text"
                value={this.state.guitarrist}
                onChange={(event) => this.setGuitarrist(event.target.value)}
              />
              <label htmlFor="guitarrist">Guitarrist</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="band"
                ref="band"
                type="text"
                value={this.state.band}
                onChange={(event) => this.setBand(event.target.value)}
              />
              <label htmlFor="band">Band</label>
            </div>
            <div className="input-field col s6">
              <input
                id="level"
                ref="level"
                type="text"
                value={this.state.level}
                onChange={(event) => this.setLevel(event.target.value)}
              />
              <label htmlFor="email">Level</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Add song
          </button>
        </form>
      </div>
    );
  }
}

export default SongForm;
