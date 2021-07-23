import React from "react";

const ShowList = (props) => {
  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>Shows</h4>
        </li>
        {props.shows.map((item, index) => {
          return (
            <>
              <a
                href="#/shows"
                className="collection-item"
                key={item._id}
                onClick={props.updateCurrentShow.bind(this, item)}
              >
                {item.name}
              </a>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default ShowList;
