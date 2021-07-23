import React from "react";
import axios from "axios";

const ShowSingle = (props) => {
  const deleteShow = (event) => {
    axios
      .delete(`https://free-time-options.herokuapp.com/shows/${props.show._id}`)
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
              src="Shows.jpeg"
              alt="Collage of TV shows"
              height="400px"
              width="500px"
            />
            <span className="card-title">
              <h2>{props.show.name}</h2>
            </span>
          </div>
          <div className="card-content row mar-0">
            <div className="col s12">
              <span className="flow-text">Genre: {props.show.genre}</span>
            </div>
            <div className="col s12">
              <span className="flow-text">Creator: {props.show.creator}</span>
            </div>
            <div className="col s12">
              <a href="#/shows">
                <button
                  className="waves-effect waves-light btn deletebtn"
                  onClick={() => {
                    deleteShow();
                    props.loadShowsList();
                    props.updateCurrentShow({});
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

export default ShowSingle;
