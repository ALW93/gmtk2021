import React from "react";
import { ingredients } from "../data/data";

const Ingredients = ({ addSelection }) => {
  console.log('ingredient', ingredients)
  return (
    <div className="ingredientContainer">
      {ingredients.map((ingredient) => (
        <div
          onClick={addSelection}
          key={ingredient.id}
          data-value={ingredient.name}
          className="ingredient"
        >
          <img src={require("../" + ingredient.imgUrl)} alt={ingredient.name} />
          {ingredient.name}
        </div>
      ))}
    </div>
  );
};

export default Ingredients;
