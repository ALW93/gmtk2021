import React, { useState, useEffect } from "react";
import { ingredients } from "../data/data";
import Item from "../components/shared/Item";
import { useSelector } from "react-redux";

const Ingredients = ({ addSelection }) => {
  const selections = useSelector(state => state.active.ingredients)
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    console.log('selections', selections, disabled)
    if (selections.length === 3) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [selections])

  return (
    <div className="ingredientsContainer">
      {ingredients.map((ingredient) => (
        <div className="ingredientContainer" key={ingredient.id}>
          <Item
            id={ingredient.id}
            onClick={addSelection}
            type="ingredient"
            name={ingredient.name}
            disabled={disabled}
          />
        </div>
      ))}
    </div>
  );
};

export default Ingredients;
