import React from "react";
import axios from "axios";

class SongModify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitSong(event) {
    event.preventDefault();

    let updatedTitle, updatedBand, updatedGuitarrist, updatedLevel;

    if (this.refs.title.value === "") {
      updatedTitle = this.props.song.title;
    } else {
      updatedTitle = this.refs.title.value;
    }

    if (this.refs.band.value === "") {
      updatedBand = this.props.song.band;
    } else {
      updatedBand = this.refs.band.value;
    }

    if (this.refs.guitarrist.value === "") {
      updatedGuitarrist = this.props.song.guitarrist;
    } else {
      updatedGuitarrist = this.refs.guitarrist.value;
    }

    if (this.refs.level.value === "") {
      updatedLevel = this.props.song.level;
    } else {
      updatedLevel = this.refs.level.value;
    }

    axios
      .put(
        `https://free-time-options.herokuapp.com/songs/${this.props.song._id}`,
        {
          title: updatedTitle,
          band: updatedBand,
          guitarrist: updatedGuitarrist,
          level: updatedLevel,
        }
      )
      .then((response) => {
        this.props.loadSongsList();
        this.props.updateCurrentSong(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const title = this.props.song.title;
    const band = this.props.song.band;
    const guitarrist = this.props.song.guitarrist;
    const level = this.props.song.level;

    return (
      <div className="row">
        <h1 className="center">Song Modify</h1>
        <form className="col s12" onSubmit={this.submitSong.bind(this)}>
          <div className="row">
            <div className="input-field col s6">
              <input id="title" ref="title" type="text" />
              <label htmlFor="title">{title}</label>
            </div>
            <div className="input-field col s6">
              <input id="band" ref="band" type="text" />
              <label htmlFor="band">{band}</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="guitarrist" ref="guitarrist" type="text" />
              <label htmlFor="phone">{guitarrist}</label>
            </div>
            <div className="input-field col s6">
              <input id="level" ref="level" type="text" />
              <label htmlFor="level">{level}</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Modify song
          </button>
        </form>
      </div>
    );
  }
}

export default SongModify;
