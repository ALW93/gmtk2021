import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dispatchLoadAilments } from "../store/actions/ailmentAction";
import { ingredients } from "../data/data";
import Item from "../components/shared/Item";

const Ingredients = ({ addSelection }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dispatchLoadAilments());
  }, [dispatch]);

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
