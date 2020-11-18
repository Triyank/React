import React from "react";
import Stars from "../Recipes/star";

export default function Recipe(props) {
  return (
    <div>
      {React.createElement("h1", { className: "Heading" }, props.title)}
      {props.recipes.map((recipe, i) => {
        return (
          <div>
            {React.createElement(
              "h3",
              { className: "Recipe-name" },
              recipe.name
            )}
            {React.createElement(
              "ul",
              null,
              recipe.ingredients.map((ingredient, i) =>
                React.createElement("li", { key: i }, ingredient.name)
              )
            )}

            {React.createElement(
              "none",
              { props: "list-style-type:none", key: i },
              recipe.steps.map((element, i) => {
                return React.createElement("p", { key: i }, element);
              })
            )}
            <Stars totalStars={10}/>
          </div>
        );
      })}
    </div>
  );
}
