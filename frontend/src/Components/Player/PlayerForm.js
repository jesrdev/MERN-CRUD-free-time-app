import React from "react";
import axios from "axios";

class PlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    };

    this.setFirstName = this.setFirstName.bind(this);
    this.setLasttName = this.setLastName.bind(this);
    this.setPhone = this.setPhone.bind(this);
    this.setEmail = this.setEmail.bind(this);
  }

  submitPlayer(event) {
    event.preventDefault();

    axios
      .post(`https://free-time-options.herokuapp.com/players`, {
        firstName: this.refs.firstName.value,
        lastName: this.refs.lastName.value,
        phone: this.refs.phone.value,
        email: this.refs.email.value,
      })
      .then((response) => {
        console.log(response);
        this.props.loadPlayersList();
        this.setFirstName("");
        this.setLastName("");
        this.setPhone("");
        this.setEmail("");
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
  setPhone(phoneNumber) {
    this.setState({
      phone: phoneNumber,
    });
  }

  setEmail(emailAddress) {
    this.setState({
      email: emailAddress,
    });
  }

  render() {
    return (
      <div className="row">
        <h1 className="center">Add a new player</h1>
        <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
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
                id="phone"
                ref="phone"
                type="text"
                value={this.state.phone}
                onChange={(event) => this.setPhone(event.target.value)}
              />
              <label htmlFor="phone">Phone</label>
            </div>
            <div className="input-field col s6">
              <input
                id="email"
                ref="email"
                type="text"
                value={this.state.email}
                onChange={(event) => this.setEmail(event.target.value)}
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Add player
          </button>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
