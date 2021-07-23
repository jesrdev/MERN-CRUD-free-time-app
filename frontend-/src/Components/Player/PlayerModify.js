import React from "react";
import axios from "axios";

class PlayerModify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitPlayer(event) {
    event.preventDefault();

    let updatedFirstName, updatedLastName, updatedPhone, updatedEmail;

    if (this.refs.firstName.value === "") {
      updatedFirstName = this.props.player.firstName;
    } else {
      updatedFirstName = this.refs.firstName.value;
    }

    if (this.refs.lastName.value === "") {
      updatedLastName = this.props.player.lastName;
    } else {
      updatedLastName = this.refs.lastName.value;
    }

    if (this.refs.phone.value === "") {
      updatedPhone = this.props.player.phone;
    } else {
      updatedPhone = this.refs.phone.value;
    }

    if (this.refs.email.value === "") {
      updatedEmail = this.props.player.email;
    } else {
      updatedEmail = this.refs.email.value;
    }

    axios
      .put(
        `https://free-time-options.herokuapp.com/players/${this.props.player._id}`,
        {
          firstName: updatedFirstName,
          lastName: updatedLastName,
          phone: updatedPhone,
          email: updatedEmail,
        }
      )
      .then((response) => {
        this.props.loadPlayersList();
        this.props.updateCurrentPlayer(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const firstName = this.props.player.firstName;
    const lastName = this.props.player.lastName;
    const phone = this.props.player.phone;
    const email = this.props.player.email;

    return (
      <div className="row">
        <h1 className="center">Player Modify</h1>
        <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
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
              <input id="phone" ref="phone" type="text" />
              <label htmlFor="phone">{phone}</label>
            </div>
            <div className="input-field col s6">
              <input id="email" ref="email" type="text" />
              <label htmlFor="email">{email}</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Modify player
          </button>
        </form>
      </div>
    );
  }
}

export default PlayerModify;
