import React from "react";
import axios from "axios";

class PlaceModify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitPlace(event) {
    event.preventDefault();

    let updatedName, updatedType, updatedLocation;

    if (this.refs.name.value === "") {
      updatedName = this.props.place.name;
    } else {
      updatedName = this.refs.name.value;
    }

    if (this.refs.type.value === "") {
      updatedType = this.props.place.type;
    } else {
      updatedType = this.refs.type.value;
    }

    if (this.refs.location.value === "") {
      updatedLocation = this.props.place.location;
    } else {
      updatedLocation = this.refs.location.value;
    }

    axios
      .put(
        `https://free-time-options.herokuapp.com/places/${this.props.place._id}`,
        {
          name: updatedName,
          type: updatedType,
          location: updatedLocation,
        }
      )
      .then((response) => {
        this.props.loadPlacesList();
        this.props.updateCurrentPlace(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const name = this.props.place.name;
    const type = this.props.place.type;
    const location = this.props.place.location;

    return (
      <div className="row">
        <h1 className="center">Place Modify</h1>
        <form className="col s12" onSubmit={this.submitPlace.bind(this)}>
          <div className="row">
            <div className="input-field col s6">
              <input id="name" ref="name" type="text" />
              <label htmlFor="name">{name}</label>
            </div>
            <div className="input-field col s6">
              <input id="type" ref="type" type="text" />
              <label htmlFor="type">{type}</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="location" ref="location" type="text" />
              <label htmlFor="location">{location}</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Modify place
          </button>
        </form>
      </div>
    );
  }
}

export default PlaceModify;
