import React from "react";
import axios from "axios";

class PeopleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      role: "",
    };

    this.setFirstName = this.setFirstName.bind(this);
    this.setLasttName = this.setLastName.bind(this);
    this.setRole = this.setRole.bind(this);
  }

  submitPeople(event) {
    event.preventDefault();

    axios
      .post(`https://free-time-options.herokuapp.com/peoples`, {
        firstName: this.refs.firstName.value,
        lastName: this.refs.lastName.value,
        role: this.refs.role.value,
      })
      .then((response) => {
        console.log(response);
        this.props.loadPeoplesList();
        this.setFirstName("");
        this.setLastName("");
        this.setRole("");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setFirstName(name) {
    this.setState({
      firstName: name,
    });
  }
  setLastName(name) {
    this.setState({
      lastName: name,
    });
  }
  setRole(rol) {
    this.setState({
      role: rol,
    });
  }

  render() {
    return (
      <div className="row">
        <h1 className="center">Add a new person</h1>
        <form className="col s12" onSubmit={this.submitPeople.bind(this)}>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="firstName"
                ref="firstName"
                type="text"
                value={this.state.firstName}
                onChange={(event) => this.setFirstName(event.target.value)}
              />
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field col s6">
              <input
                id="lastName"
                ref="lastName"
                type="text"
                value={this.state.lastName}
                onChange={(event) => this.setLastName(event.target.value)}
              />
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="role"
                ref="role"
                type="text"
                value={this.state.role}
                onChange={(event) => this.setRole(event.target.value)}
              />
              <label htmlFor="role">Role</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Add person
          </button>
        </form>
      </div>
    );
  }
}

export default PeopleForm;
