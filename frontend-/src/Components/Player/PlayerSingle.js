import React from "react";
import axios from "axios";

const PlayerSingle = (props) => {
  const deletePlayer = (event) => {
    axios
      .delete(
        `https://free-time-options.herokuapp.com/players/${props.player._id}`
      )
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
              src="soccer.jpeg"
              alt="Soccerball being kicked"
              height="400px"
              width="500px"
            />
            <span className="card-title">
              <h2>
                {props.player.firstName} {props.player.lastName}
              </h2>
            </span>
          </div>
          <div className="card-content row mar-0">
            <div className="col s12">
              <span className="flow-text">Phone: {props.player.phone}</span>
            </div>
            <div className="col s12">
              <span className="flow-text">Email: {props.player.email}</span>
            </div>
            <div className="col s12">
              <span className="flow-text">
                Strength: {props.player.strength}
              </span>
            </div>
            <div className="col s12">
              <span className="flow-text">
                Endurance: {props.player.endurance}
              </span>
            </div>
            <div className="col s12">
              <a href="#/players">
                <button
                  className="waves-effect waves-light btn deletebtn"
                  onClick={() => {
                    deletePlayer();
                    props.loadPlayersList();
                    props.updateCurrentPlayer({});
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

export default PlayerSingle;
