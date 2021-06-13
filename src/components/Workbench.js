import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { map } from "lodash";

import { matchRecipes } from "../utility/utility";
import {
  updatePotion,
  addIngredient,
  updateIngredients,
} from "../store/reducers/activeReducer";

import Ingredients from "./Ingredients";
import Combiner from "./Combiner";
import Button from "./shared/Button";
import Line from "./svgs/Line";
import { updateSaveLog } from "../store/actions/potionsActions";

import useSound from "use-sound";
import waterDrop from "../music/waterdrop.mp3";
import wetDrop from "../music/wetDrop.mp3"
import empty from "../music/empty.mp3";
import failedPotion2 from "../music/failedPotion2.mp3";
import discoverPotion from "../music/discoverPotion.mp3";

const Workbench = (props) => {
  const dispatch = useDispatch();
  const potions = useSelector((state) => state.potions);
  const selections = useSelector((state) => state.active.ingredients);
  const [playWetDrop] = useSound(wetDrop);
  const [playEmtpy] = useSound(empty);
  const [playFail] = useSound(failedPotion2);
  const [playDiscoverPotion] = useSound(discoverPotion);

  const handleSelect = (e) => {
    if (selections.length === 3) {
      alert("Error: Maximum selection reached");
      return;
    } else {
      dispatch(addIngredient(e.target.dataset.id));
      playWetDrop();
    }
  };

  const removeSelect = (e) => {
    const idx = selections.indexOf(e.target.dataset.id);
    let newValues = [...selections];
    if (idx > -1) {
      newValues.splice(idx, 1);
    }
    playEmtpy();
    dispatch(updateIngredients(newValues));
  };

  const calculateRecipe = () => {
    const ingredients = map(selections, (item) => item);
    const potionId = matchRecipes(ingredients);
    if (!potionId) {
      playFail();
      alert("Well, I guess you could call this a potion...");
      dispatch(updatePotion(potionId));
    } else {
      // Also play the fail sound if the potion is the defaulted smelly potion
      if (potions[potionId].name === "Smelly Potion(?)") {
        playFail();
      } else {
        playDiscoverPotion();
      }
      alert(`Discovered ${potions[potionId].name}`);
      dispatch(updatePotion(potionId));
      dispatch(updateSaveLog(potions[potionId]));
    }
  };

  //clear ingredients button
  const clearRecipe = () => {
    dispatch(updateIngredients([]));
  };

  return (
    <div className="WorkbenchContainer">
      <Line />

      {/* <Ingredients addSelection={handleSelect} />
      <div className="CombinerContainer"> */}
      {/* <div className="WorkbenchContainer--Top"> */}
      {/* <nav className="WorkbenchNav">
          {open && <RecipeBook onClick={toggleRecipeBook} title="Recipes" />}
          <Button text="Recipe Book" onClick={toggleRecipeBook} />
        </nav> */}
      <Ingredients addSelection={handleSelect} />
      {/* </div> */}

      <div className="WorkbenchContainer--Bottom">
        <Combiner removeSelection={removeSelect} />
        <Button text="Clear" onClick={clearRecipe} />
        <Button text="Brew" onClick={calculateRecipe} />
      </div>
    </div>
  );
};

export default Workbench;
