import React from "react";

const RecipeList = (props) => {
  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>Recipes</h4>
        </li>
        {props.recipes.map((item, index) => {
          return (
            <>
              <a
                href="#/recipes"
                className="collection-item"
                key={index}
                onClick={props.updateCurrentRecipe.bind(this, item)}
              >
                {item.name}
              </a>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default RecipeList;
