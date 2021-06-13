import React, { useState, useEffect } from "react";
import { ingredients } from "../data/data";
import Item from "../components/shared/Item";
import { useDispatch, useSelector } from "react-redux";
import { addIngredient } from "../store/reducers/activeReducer";

const Ingredients = () => {
  const dispatch = useDispatch()
  const selections = useSelector(state => state.active.ingredients)
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    if (selections.length === 3) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [selections])

  const handleAddSelection = (e) => {
    if (selections.length !== 3) {
      dispatch(addIngredient(e.target.dataset.id));
      // playWaterDrop();
      if (selections.length === 2) {
        setDisabled(false)
      }
    }
  }

  return (
    <div className="shelfContainer">
      <h2>Pick Three:</h2>
      <div className="ingredientsContainer">
        {ingredients.map((ingredient) => (
            <Item
              id={ingredient.id}
              onClick={handleAddSelection}
              type="ingredient"
              name={ingredient.name}
              disabled={disabled}
            />
        ))}
      </div>
    </div>
  );
};

export default Ingredients;
