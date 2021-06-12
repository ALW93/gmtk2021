import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findIndex, map } from "lodash";
import { matchRecipes } from "../utility/utility";
import Ingredients from "./Ingredients";
import Combiner from "./Combiner";
import Button from "./shared/Button";
import { updatePotion } from "../store/reducers/activeReducer";
import LightBox from "./shared/LightBox";
import { addIngredient, updateIngredients } from "../store/reducers/activeReducer";

const Workbench = (props) => {
  const dispatch = useDispatch()
  const selections = useSelector(state => state.active.ingredients)
  const [open, setOpen] = useState(false);

  const handleSelect = (e) => {
    console.log("target", e.target.dataset)
    if (selections.length === 3) {
      alert("Error: Maximum selection reached");
      return;
    } else {
      console.log('else dataset', e.target.dataset.id)
      dispatch(addIngredient(e.target.dataset.id));
    }
  };

  const removeSelect = (e) => {
    const idx = selections.indexOf(e.target.dataset.id);
    let newValues = [...selections];
    if (idx > -1) {
      newValues.splice(idx, 1);
    }
    console.log('newValues', newValues)
    dispatch(updateIngredients(newValues));
  };

  const calculateRecipe = async () => {
    const ingredients = map(selections, (item) => item);
    const potion = matchRecipes(ingredients);
    if (!potion) {
      alert("No matching recipes found");
    } else {
      alert(`Discovered ${potion.name}`);
      dispatch(updatePotion(potion.id));
    }
  };

  const toggleRecipeBook = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="WorkbenchContainer">
      {open && <LightBox onClick={toggleRecipeBook} />}
      <div>
        <Button text="Recipe Book" onClick={toggleRecipeBook} />
      </div>

      <Ingredients addSelection={handleSelect} />
      <div>
        <Combiner selections={selections} removeSelection={removeSelect} />
        <Button text="Combine" onClick={calculateRecipe} />
      </div>
    </div>
  );
};

export default Workbench;
