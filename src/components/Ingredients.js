import React from "react";
import { ingredients } from "../data/data";

const Ingredients = (props) => {
  return (
    <div>
      {ingredients.map((ingredient) => (
        <span>{ingredient.name}</span>
      ))}
    </div>
  );
};

export default Ingredients;
