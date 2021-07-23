import React from "react";

const SongList = (props) => {
  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>Songs</h4>
        </li>
        {props.songs.map((item, index) => {
          return (
            <>
              <a
                href="#/songs"
                className="collection-item"
                key={index}
                onClick={props.updateCurrentSong.bind(this, item)}
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

export default SongList;
