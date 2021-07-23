import React from "react";
import axios from "axios";

const SongSingle = (props) => {
  const deleteSong = (event) => {
    axios
      .delete(`https://free-time-options.herokuapp.com/songs/${props.song._id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-image">
            <img
              src="Song.jpeg"
              alt="Electric guitar art"
              height="400px"
              width="500px"
            />
            <span className="card-title">
              <h2>{props.song.title}</h2>
            </span>
          </div>
          <div className="card-content row mar-0">
            <div className="col s12">
              <span className="flow-text">
                Guitarrist: {props.song.guitarrist}
              </span>
            </div>
            <div className="col s12">
              <span className="flow-text">Band: {props.song.band}</span>
            </div>
            <div className="col s12">
              <span className="flow-text">Level: {props.song.level}</span>
            </div>
            <div className="col s12">
              <a href="#/songs">
                <button
                  className="waves-effect waves-light btn deletebtn"
                  onClick={() => {
                    deleteSong();
                    props.loadSongsList();
                    props.updateCurrentSong({});
                  }}
                >
                  <i className="small material-icons">delete</i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongSingle;
