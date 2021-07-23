import React from "react";

const PeopleList = (props) => {
  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>Persons</h4>
        </li>
        {props.peoples.map((item, index) => {
          return (
            <>
              <a
                href="#/peoples"
                className="collection-item"
                key={index}
                onClick={props.updateCurrentPeople.bind(this, item)}
              >
                {item.firstName} {item.lastName}
              </a>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default PeopleList;
