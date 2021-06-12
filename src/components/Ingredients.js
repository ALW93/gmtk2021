import React from "react";
import { ingredients } from "../data/data";
import images from "../images/images";

const Ingredients = ({ addSelection }) => {
console.log('raw ingredients', ingredients)
  return (
    <div className="ingredientsContainer">
      {ingredients.map((ingredient) => (
        <div className="ingredientContainer" key={ingredient.id}>
          <div
            onClick={addSelection}
            className="ingredient"
          >
            <img 
              data-id={ingredient.id} 
              data-name={ingredient.name} 
              src={images[ingredient.id]} 
              alt={ingredient.name} 
              className="absoluteCenter"
            />
          </div>
          <p>{ingredient.name}</p>
        </div>
      ))}
    </div>
  );
};


export default Ingredients;
