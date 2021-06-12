import React from "react";
import Item from "./shared/Item";

const Combiner = ({ ingredients = [], removeSelection }) => {
  return (
    <div className="combinerContainer">
      {ingredients.map((ingredient, idx) => (
        <div key={`ingredient${idx}`}>
          <Item
            id={ingredient.id}
            onClick={removeSelection}
            type="ingredient"
            name={ingredient.name}
          />
        </div>
      ))}
    </div>
  );
};

export default Combiner;
