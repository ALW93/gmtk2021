import React from "react";
import { ingredients } from "../data/data";
import images from '../images/images'

const Ingredients = ({ addSelection }) => {
  console.log('ingredient', ingredients)
  console.log('images', images)
  return (
    <div className="ingredientsContainer">
      {ingredients.map((ingredient) => (
        <div className="ingredientContainer">
          <div
            onClick={addSelection}
            key={ingredient.id}
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
