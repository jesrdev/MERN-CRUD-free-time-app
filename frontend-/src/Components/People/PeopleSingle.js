import React from "react";
import axios from "axios";

const PeopleSingle = (props) => {
  const deletePeople = (event) => {
    axios
      .delete(
        `https://free-time-options.herokuapp.com/peoples/${props.people._id}`
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
              src="people.jpeg"
              alt="shadow of group of people"
              height="400px"
              width="500px"
            />
            <span className="card-title">
              <h2>
                {props.people.firstName} {props.people.lastName}
              </h2>
            </span>
          </div>
          <div className="card-content row mar-0">
            <div className="col s12">
              <span className="flow-text">Role: {props.people.role}</span>
            </div>
            <div className="col s12">
              <a href="#/peoples">
                <button
                  className="waves-effect waves-light btn deletebtn"
                  onClick={() => {
                    deletePeople();
                    props.loadPeoplesList();
                    props.updateCurrentPeople({});
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

export default PeopleSingle;
