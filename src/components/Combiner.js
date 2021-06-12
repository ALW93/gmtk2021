import React from "react";
import "./Combiner.scss";

const Combiner = ({ ingredients = [], removeSelection }) => {
  return (
    <div className="combinerContainer">
      {ingredients.map((ingredient, idx) => (
        <div
          onClick={removeSelection}
          key={`ingredient${idx}`}
          data-value={ingredient}
          className="ingredient"
        >
          {ingredient}
        </div>
      ))}
    </div>
  );
};

export default Combiner;
