import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { map } from "lodash";

import { matchRecipes } from "../utility/utility";
import { updatePotion } from "../store/reducers/activeReducer";
import {
  addIngredient,
  updateIngredients,
} from "../store/reducers/activeReducer";

import Ingredients from "./Ingredients";
import Combiner from "./Combiner";
import Button from "./shared/Button";
import RecipeBook from "./RecipeBook";

import useSound from "use-sound";
import waterDrop from "../music/waterdrop.mp3"
import empty from "../music/empty.mp3"

const Workbench = (props) => {
  const dispatch = useDispatch();
  const potions = useSelector((state) => state.potions);
  const selections = useSelector((state) => state.active.ingredients);
  const [open, setOpen] = useState(false);
  const [playWaterDrop] = useSound(waterDrop)
  const [playEmtpy] = useSound(empty)

  const handleSelect = (e) => {
    if (selections.length === 3) {
      alert("Error: Maximum selection reached");
      return;
    } else {
      dispatch(addIngredient(e.target.dataset.id));
      playWaterDrop()
    }
  };

  const removeSelect = (e) => {
    const idx = selections.indexOf(e.target.dataset.id);
    let newValues = [...selections];
    if (idx > -1) {
      newValues.splice(idx, 1);
    }
    playEmtpy()
    dispatch(updateIngredients(newValues));
  };

  const calculateRecipe = () => {
    const ingredients = map(selections, (item) => item);
    const potionId = matchRecipes(ingredients);
    if (!potionId) {
      alert("Well, I guess you could call this a potion...");
      dispatch(updatePotion(potionId));
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
      <div className="WorkbenchContainer--Top">
        <nav className="WorkbenchNav">
          {open && <RecipeBook onClick={toggleRecipeBook} title="Recipes" />}
          <Button text="Recipe Book" onClick={toggleRecipeBook} />
        </nav>
        <Ingredients addSelection={handleSelect} />
      </div>

      <div className="WorkbenchContainer--Bottom">
        <Combiner removeSelection={removeSelect} />
        <Button text="Combine" onClick={calculateRecipe} />
      </div>
    </div>
  );
};

export default Workbench;
