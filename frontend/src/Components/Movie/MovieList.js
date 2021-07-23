import React from "react";

const MovieList = (props) => {
  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>Movies</h4>
        </li>
        {props.movies.map((item, index) => {
          return (
            <>
              <a
                href="#/movies"
                className="collection-item"
                key={index}
                onClick={props.updateCurrentMovie.bind(this, item)}
              >
                {item.title}
              </a>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
