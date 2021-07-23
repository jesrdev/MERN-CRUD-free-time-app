import React from "react";
import axios from "axios";

class BookModify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitBook(event) {
    event.preventDefault();

    let updatedTitle, updatedAuthor, updatedType;

    if (this.refs.title.value === "") {
      updatedTitle = this.props.book.title;
    } else {
      updatedTitle = this.refs.title.value;
    }

    if (this.refs.author.value === "") {
      updatedAuthor = this.props.book.author;
    } else {
      updatedAuthor = this.refs.author.value;
    }

    if (this.refs.type.value === "") {
      updatedType = this.props.book.type;
    } else {
      updatedType = this.refs.type.value;
    }

    axios
      .put(
        `https://free-time-options.herokuapp.com/books/${this.props.book._id}`,
        {
          title: updatedTitle,
          author: updatedAuthor,
          type: updatedType,
        }
      )
      .then((response) => {
        this.props.loadBooksList();
        this.props.updateCurrentBook(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const title = this.props.book.title;
    const author = this.props.book.author;
    const type = this.props.book.type;

    return (
      <div className="row">
        <h1 className="center">Book Modify</h1>
        <form className="col s12" onSubmit={this.submitBook.bind(this)}>
          <div className="row">
            <div className="input-field col s6">
              <input id="title" ref="title" type="text" />
              <label htmlFor="title">{title}</label>
            </div>
            <div className="input-field col s6">
              <input id="author" ref="author" type="text" />
              <label htmlFor="author">{author}</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="type" ref="type" type="text" />
              <label htmlFor="type">{type}</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Modify book
          </button>
        </form>
      </div>
    );
  }
}

export default BookModify;
