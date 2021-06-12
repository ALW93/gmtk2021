import React from "react";

const Combiner = ({ ingredients = [], removeSelection }) => {
  return (
    <div className="combinerContainer">
      {ingredients.map((ingredient, idx) => (
        <div
          onClick={removeSelection}
          key={`ingredient${idx}`}
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

export default Combiner;
