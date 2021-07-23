import React from "react";
import axios from "axios";

const GameSingle = (props) => {
  const deleteGame = (event) => {
    axios
      .delete(`https://free-time-options.herokuapp.com/games/${props.game._id}`)
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
              src="Games.jpeg"
              alt="Retro arcade store"
              height="400px"
              width="500px"
            />
            <span className="card-title">
              <h2>{props.game.title}</h2>
            </span>
          </div>
          <div className="card-content row mar-0">
            <div className="col s12">
              <span className="flow-text">Title: {props.game.title}</span>
            </div>
            <div className="col s12">
              <span className="flow-text">Genre: {props.game.genre}</span>
            </div>
            <div className="col s12">
              <span className="flow-text">Platform: {props.game.platform}</span>
            </div>
            <div className="col s12">
              <a href="#/games">
                <button
                  className="waves-effect waves-light btn deletebtn"
                  onClick={() => {
                    deleteGame();
                    props.loadGamesList();
                    props.updateCurrentGame({});
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

export default GameSingle;
