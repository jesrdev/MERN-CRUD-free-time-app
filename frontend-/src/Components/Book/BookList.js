import React from "react";

const BookList = (props) => {
  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>Books</h4>
        </li>
        {props.books.map((item, index) => {
          return (
            <>
              <a
                href="#/books"
                className="collection-item"
                key={index}
                onClick={props.updateCurrentBook.bind(this, item)}
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

export default BookList;
