import React from "react";
import axios from "axios";

const RecipeSingle = (props) => {
  const deleteRecipe = (event) => {
    axios
      .delete(
        `https://free-time-options.herokuapp.com/recipes/${props.recipe._id}`
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-image">
            <img
              src="Recipe.jpeg"
              alt="Pasta dish and ingredients over table"
              height="400px"
              width="500px"
            />
            <span className="card-title">
              <h2>{props.recipe.name}</h2>
            </span>
          </div>
          <div className="card-content row mar-0">
            <div className="col s12">
              <span className="flow-text">Type: {props.recipe.type}</span>
            </div>
            <div className="col s12">
              <span className="flow-text">Level: {props.recipe.level}</span>
            </div>
            <div className="col s12">
              <a href="#/recipes">
                <button
                  className="waves-effect waves-light btn deletebtn"
                  onClick={() => {
                    deleteRecipe();
                    props.loadRecipesList();
                    props.updateCurrentRecipe({});
                  }}
                >
                  <i className="small material-icons">delete</i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeSingle;
