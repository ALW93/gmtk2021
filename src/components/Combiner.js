import React from "react";
import { useSelector } from "react-redux";
import images from "../images/images";

const Combiner = ({ selections = [], removeSelection }) => {
  const ingredients = useSelector(state => state.ingredients)
  console.log('ingredients', ingredients, selections)

  return (
    <div className="combinerContainer">
      {selections.map((id, idx) => (
      <div key={`ingredient${idx}`}>
        <div
          onClick={removeSelection}
          
          className="ingredient"
        >
          <img 
            data-id={ingredients[id].id}
            data-name={ingredients[id].name}
            src={images[ingredients[id].id]} 
            alt={ingredients[id].name} 
            className="absoluteCenter"
          />
        </div>
        <p>{ingredients[id].name}</p>
      </div>
      ))}
    </div>
  );
};

export default Combiner;
