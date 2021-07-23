import React from "react";

const PlaceList = (props) => {
  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>Places</h4>
        </li>
        {props.places.map((item, index) => {
          return (
            <>
              <a
                href="#/places"
                className="collection-item"
                key={index}
                onClick={props.updateCurrentPlace.bind(this, item)}
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

export default PlaceList;
