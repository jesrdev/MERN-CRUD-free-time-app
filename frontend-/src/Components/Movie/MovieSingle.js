import React from "react";
import axios from "axios";

const MovieSingle = (props) => {
  const deleteMovie = (event) => {
    axios
      .delete(
        `https://free-time-options.herokuapp.com/movies/${props.movie._id}`
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
              src="Movies.jpeg"
              alt="Movie film with cinema background"
              height="400px"
              width="500px"
            />
            <span className="card-title">
              <h2>{props.movie.title}</h2>
            </span>
          </div>
          <div className="card-content row mar-0">
            <div className="col s12">
              <span className="flow-text">Title: {props.movie.title}</span>
            </div>
            <div className="col s12">
              <span className="flow-text">
                Duration: {props.movie.duration} (min)
              </span>
            </div>
            <div className="col s12">
              <span className="flow-text">Genre: {props.movie.genre}</span>
            </div>
            <div className="col s12">
              <span className="flow-text">
                Director: {props.movie.director}
              </span>
            </div>
            <div className="col s12">
              <a href="#/movies">
                <button
                  className="waves-effect waves-light btn deletebtn"
                  onClick={() => {
                    deleteMovie();
                    props.loadMoviesList();
                    props.updateCurrentMovie({});
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

export default MovieSingle;
