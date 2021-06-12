import React from "react";
import { ingredients } from "../data/data";

const Ingredients = ({ addSelection }) => {
  return (
    <div className="ingredientContainer">
      {ingredients.map((ingredient) => (
        <div
          onClick={addSelection}
          key={ingredient.id}
          data-id={ingredient.id}
          data-name={ingredient.name}
          className="ingredient"
        >
          {ingredient.name}
        </div>
      ))}
    </div>
  );
};

export default Ingredients;
