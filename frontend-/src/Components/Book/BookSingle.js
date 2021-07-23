import React from "react";
import axios from "axios";

const BookSingle = (props) => {
  const deleteBook = (event) => {
    axios
      .delete(`https://free-time-options.herokuapp.com/books/${props.book._id}`)
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
              src="book.jpeg"
              alt="opened book"
              height="400px"
              width="500px"
            />
            <span className="card-title">
              <h2>{props.book.title}</h2>
            </span>
          </div>
          <div className="card-content row mar-0">
            <div className="col s12">
              <span className="flow-text">Author: {props.book.author}</span>
            </div>
            <div className="col s12">
              <span className="flow-text">Type: {props.book.type}</span>
            </div>
            <div className="col s12">
              <a href="#/books">
                <button
                  className="waves-effect waves-light btn deletebtn"
                  onClick={() => {
                    deleteBook();
                    props.loadBooksList();
                    props.updateCurrentBook({});
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

export default BookSingle;
