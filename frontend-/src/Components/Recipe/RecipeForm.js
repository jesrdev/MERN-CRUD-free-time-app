import React from "react";
import axios from "axios";

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      type: "",
      level: "",
    };

    this.setName = this.setName.bind(this);
    this.setType = this.setType.bind(this);
    this.setLevel = this.setLevel.bind(this);
  }

  submitRecipe(event) {
    event.preventDefault();

    axios
      .post(`https://free-time-options.herokuapp.com/recipes`, {
        name: this.refs.name.value,
        type: this.refs.type.value,
        level: this.refs.level.value,
      })
      .then((response) => {
        console.log(response);
        this.props.loadRecipesList();
        this.setName("");
        this.setType("");
        this.setLevel("");
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
  setLevel(lev) {
    this.setState({
      level: lev,
    });
  }

  render() {
    return (
      <div className="row">
        <h1 className="center">Add a new recipe</h1>
        <form className="col s12" onSubmit={this.submitRecipe.bind(this)}>
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
                id="level"
                ref="level"
                type="text"
                value={this.state.level}
                onChange={(event) => this.setLevel(event.target.value)}
              />
              <label htmlFor="level">Level</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Add Recipe
          </button>
        </form>
      </div>
    );
  }
}

export default RecipeForm;
