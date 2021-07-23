import React from "react";
import axios from "axios";

class PlaceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      type: "",
      location: "",
    };

    this.setName = this.setName.bind(this);
    this.setType = this.setType.bind(this);
    this.setLocation = this.setLocation.bind(this);
  }

  submitPlace(event) {
    event.preventDefault();

    axios
      .post(`https://free-time-options.herokuapp.com/places`, {
        name: this.refs.name.value,
        type: this.refs.type.value,
        location: this.refs.location.value,
      })
      .then((response) => {
        console.log(response);
        this.props.loadPlacesList();
        this.setName("");
        this.setType("");
        this.setLocation("");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setName(nam) {
    this.setState({
      name: nam,
    });
  }
  setType(typ) {
    this.setState({
      type: typ,
    });
  }
  setLocation(loc) {
    this.setState({
      location: loc,
    });
  }

  render() {
    return (
      <div className="row">
        <h1 className="center">Add a new location</h1>
        <form className="col s12" onSubmit={this.submitPlace.bind(this)}>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="name"
                ref="name"
                type="text"
                value={this.state.name}
                onChange={(event) => this.setName(event.target.value)}
              />
              <label htmlFor="name">Name</label>
            </div>
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
          <div className="row">
            <div className="input-field col s6">
              <input
                id="location"
                ref="location"
                type="text"
                value={this.state.location}
                onChange={(event) => this.setLocation(event.target.value)}
              />
              <label htmlFor="phone">Location</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Add place
          </button>
        </form>
      </div>
    );
  }
}

export default PlaceForm;
