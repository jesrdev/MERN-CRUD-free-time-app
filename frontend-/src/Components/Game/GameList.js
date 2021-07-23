import React from "react";

const GameList = (props) => {
  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>Games</h4>
        </li>
        {props.games.map((item, index) => {
          return (
            <>
              <a
                href="#/games"
                className="collection-item"
                key={index}
                onClick={props.updateCurrentGame.bind(this, item)}
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

export default GameList;
