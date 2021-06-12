import React from "react";
import images from "../images/images";

const Combiner = ({ ingredients = [], removeSelection }) => {
  return (
    <div className="combinerContainer">
      {ingredients.map((ingredient, idx) => (
      <div>
        <div
          onClick={removeSelection}
          key={`ingredient${idx}`}
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

export default Combiner;
