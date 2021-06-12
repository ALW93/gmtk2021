import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { map } from "lodash";

import { matchRecipes } from "../utility/utility";
import { updatePotion } from "../store/reducers/activeReducer";
import { addIngredient, updateIngredients } from "../store/reducers/activeReducer";

import Ingredients from "./Ingredients";
import Combiner from "./Combiner";
import Button from "./shared/Button";
import LightBox from "./shared/LightBox";
import RecipeBook from "./RecipeBook";

const Workbench = (props) => {
  const dispatch = useDispatch()
  const potions = useSelector(state => state.potions)
  const selections = useSelector(state => state.active.ingredients)
  const [open, setOpen] = useState(false);

  const handleSelect = (e) => {
    if (selections.length === 3) {
      alert("Error: Maximum selection reached");
      return;
    } else {
      dispatch(addIngredient(e.target.dataset.id));
    }
  };

  const removeSelect = (e) => {
    const idx = selections.indexOf(e.target.dataset.id);
    let newValues = [...selections];
    if (idx > -1) {
      newValues.splice(idx, 1);
    }
    dispatch(updateIngredients(newValues));
  };

  const calculateRecipe = async () => {
    const ingredients = map(selections, (item) => item);
    const potionId = matchRecipes(ingredients);
    if (!potionId) {
      alert("Well, I guess you could call this a potion...");
      dispatch(updatePotion(potionId))
    } else {
      alert(`Discovered ${potions[potionId].name}`);
      dispatch(updatePotion(potionId));
    }
  };

  const toggleRecipeBook = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="WorkbenchContainer">
      {open && <RecipeBook onClick={toggleRecipeBook} title="Recipes" />}
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
