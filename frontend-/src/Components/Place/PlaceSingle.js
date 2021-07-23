import React from "react";
import axios from "axios";

const PlaceSingle = (props) => {
  const deletePlace = (event) => {
    axios
      .delete(
        `https://free-time-options.herokuapp.com/places/${props.place._id}`
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
              src="Place.jpeg"
              alt="downtown view"
              height="400px"
              width="500px"
            />
            <span className="card-title">
              <h2>{props.place.name}</h2>
            </span>
          </div>
          <div className="card-content row mar-0">
            <div className="col s12">
              <span className="flow-text">Type: {props.place.type}</span>
            </div>
            <div className="col s12">
              <span className="flow-text">
                Location: {props.place.location}
              </span>
            </div>
            <div className="col s12">
              <a href="#/places">
                <button
                  className="waves-effect waves-light btn deletebtn"
                  onClick={() => {
                    deletePlace();
                    props.loadPlacesList();
                    props.updateCurrentPlace({});
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

export default PlaceSingle;
