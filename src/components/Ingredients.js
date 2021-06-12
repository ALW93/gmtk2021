import React from "react";
import { ingredients } from "../data/data";
import images from "../images/images";

const Ingredients = ({ addSelection }) => {
  return (
    <div className="ingredientsContainer">
      {ingredients.map((ingredient) => (
        <div className="ingredientContainer" key={ingredient.id}>
          <div
            onClick={addSelection}
            data-id={ingredient.id}
            data-name={ingredient.name}
            className="ingredient"
          >
            <img src={images[ingredient.id]} alt={ingredient.name} />
          </div>
          <p>{ingredient.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Ingredients;
