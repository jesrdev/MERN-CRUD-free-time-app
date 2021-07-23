import React from "react";
import axios from "axios";

class RecipeModify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitRecipe(event) {
    event.preventDefault();

    let updatedName, updatedType, updatedLevel;

    if (this.refs.name.value === "") {
      updatedName = this.props.recipe.name;
    } else {
      updatedName = this.refs.name.value;
    }

    if (this.refs.type.value === "") {
      updatedType = this.props.recipe.type;
    } else {
      updatedType = this.refs.type.value;
    }

    if (this.refs.level.value === "") {
      updatedLevel = this.props.recipe.level;
    } else {
      updatedLevel = this.refs.level.value;
    }

    axios
      .put(
        `https://free-time-options.herokuapp.com/recipes/${this.props.recipe._id}`,
        {
          name: updatedName,
          type: updatedType,
          level: updatedLevel,
        }
      )
      .then((response) => {
        this.props.loadRecipesList();
        this.props.updateCurrentRecipe(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const name = this.props.recipe.name;
    const type = this.props.recipe.type;
    const level = this.props.recipe.level;

    return (
      <div className="row">
        <h1 className="center">Recipe Modify</h1>
        <form className="col s12" onSubmit={this.submitRecipe.bind(this)}>
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
              <input id="level" ref="level" type="text" />
              <label htmlFor="level">{level}</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Modify recipe
          </button>
        </form>
      </div>
    );
  }
}

export default RecipeModify;
