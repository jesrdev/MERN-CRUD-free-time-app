import React from "react";
import axios from "axios";

class PeopleModify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitPeople(event) {
    event.preventDefault();

    let updatedFirstName, updatedLastName, updatedRole;

    if (this.refs.firstName.value === "") {
      updatedFirstName = this.props.people.firstName;
    } else {
      updatedFirstName = this.refs.firstName.value;
    }

    if (this.refs.lastName.value === "") {
      updatedLastName = this.props.people.lastName;
    } else {
      updatedLastName = this.refs.lastName.value;
    }

    if (this.refs.role.value === "") {
      updatedRole = this.props.people.role;
    } else {
      updatedRole = this.refs.role.value;
    }

    axios
      .put(
        `https://free-time-options.herokuapp.com:${process.env.PORT}/peoples/${this.props.people._id}`,
        {
          firstName: updatedFirstName,
          lastName: updatedLastName,
          role: updatedRole,
        }
      )
      .then((response) => {
        this.props.loadPeoplesList();
        this.props.updateCurrentPeople(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const firstName = this.props.people.firstName;
    const lastName = this.props.people.lastName;
    const role = this.props.people.role;

    return (
      <div className="row">
        <h1 className="center">People Modify</h1>
        <form className="col s12" onSubmit={this.submitPeople.bind(this)}>
          <div className="row">
            <div className="input-field col s6">
              <input id="firstName" ref="firstName" type="text" />
              <label htmlFor="firstName">{firstName}</label>
            </div>
            <div className="input-field col s6">
              <input id="lastName" ref="lastName" type="text" />
              <label htmlFor="lastName">{lastName}</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="role" ref="role" type="text" />
              <label htmlFor="role">{role}</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Modify people
          </button>
        </form>
      </div>
    );
  }
}

export default PeopleModify;
