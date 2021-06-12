import React from "react";
import Item from "./shared/Item";

const Combiner = ({ removeSelection, selections = [] }) => {
  return (
    <div className="combinerContainer">
      {selections.map((ingredient, idx) => (
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
