import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadAilments } from '../store/reducers/ailmentsReducer';
import { ingredients } from "../data/data";
import images from "../images/images";

const Ingredients = ({ addSelection }) => {
  const dispatch = useDispatch();


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
