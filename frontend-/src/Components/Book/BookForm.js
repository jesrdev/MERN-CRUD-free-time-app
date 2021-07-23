import React from "react";
import axios from "axios";

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      type: "",
    };

    this.setTitle = this.setTitle.bind(this);
    this.setAuthor = this.setAuthor.bind(this);
    this.setType = this.setType.bind(this);
  }

  submitBook(event) {
    event.preventDefault();

    axios
      .post(`https://free-time-options.herokuapp.com/books`, {
        title: this.refs.title.value,
        author: this.refs.author.value,
        type: this.refs.type.value,
      })
      .then((response) => {
        console.log(response);
        this.props.loadBooksList();
        this.setTitle("");
        this.setAuthor("");
        this.setType("");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setTitle(name) {
    this.setState({
      title: name,
    });
  }
  setAuthor(aut) {
    this.setState({
      author: aut,
    });
  }
  setType(desc) {
    this.setState({
      type: desc,
    });
  }

  render() {
    return (
      <div className="row">
        <h1 className="center">Add a new book</h1>
        <form className="col s12" onSubmit={this.submitBook.bind(this)}>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="title"
                ref="title"
                type="text"
                value={this.state.title}
                onChange={(event) => this.setTitle(event.target.value)}
              />
              <label htmlFor="title">Title</label>
            </div>
            <div className="input-field col s6">
              <input
                id="author"
                ref="author"
                type="text"
                value={this.state.author}
                onChange={(event) => this.setAuthor(event.target.value)}
              />
              <label htmlFor="author">Author</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="type"
                ref="type"
                type="text"
                value={this.state.type}
                onChange={(event) => this.setType(event.target.value)}
              />
              <label htmlFor="type">Type</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Add book
          </button>
        </form>
      </div>
    );
  }
}

export default BookForm;
