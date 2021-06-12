import React from "react";
import { ingredients } from "../data/data";
import "./Ingredient.scss";

const Ingredients = (props) => {
  return (
    <div className="ingredientContainer">
      {ingredients.map((ingredient) => (
        <div key={ingredient.name} className="ingredient">
          {ingredient.name}
        </div>
      ))}
    </div>
  );
};

export default Ingredients;
