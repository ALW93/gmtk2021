import React from "react";
import { ingredients } from "../data/data";
import Item from "../components/shared/Item";

const Ingredients = ({ addSelection }) => {

  return (
    <div className="ingredientsContainer">
      {ingredients.map((ingredient) => (
        <div className="ingredientContainer" key={ingredient.id}>
          <Item
            id={ingredient.id}
            onClick={addSelection}
            type="ingredient"
            name={ingredient.name}
          />
        </div>
      ))}
    </div>
  );
};

export default Ingredients;
