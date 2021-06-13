import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
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

import useSound from "use-sound";
import waterDrop from "../music/waterdrop.mp3"
import empty from "../music/empty.mp3"
import failedPotion from "../music/failedPotion.mp3"
import discoverPotion from "../music/discoverPotion.mp3"

const Workbench = (props) => {
  const dispatch = useDispatch();
  const potions = useSelector((state) => state.potions);
  const selections = useSelector((state) => state.active.ingredients);
  const [isBrewDisabled, setIsBrewDisabled] = useState(true)
  const [playWaterDrop] = useSound(waterDrop);
  const [playEmpty] = useSound(empty);
  const [playFail] = useSound(failedPotion);
  const [playDiscoverPotion] = useSound(discoverPotion);
console.log("isBrewDisabled", isBrewDisabled)
  const handleSelect = (e) => {
    console.log('selections', selections, isBrewDisabled)
    if (selections.length === 3) {
      return;
    } else {
      dispatch(addIngredient(e.target.dataset.id));
      playWaterDrop();
      console.log("length", selections)
      if (selections.length === 2) {
        console.log("there are three")
        setIsBrewDisabled(false)
        console.log("after", isBrewDisabled)
      }
    }
  };

  const removeSelect = (e) => {
    const idx = selections.indexOf(e.target.dataset.id);
    let newValues = [...selections];
    if (idx > -1) {
      newValues.splice(idx, 1);
    }
    playEmpty();
    dispatch(updateIngredients(newValues));
    setIsBrewDisabled(true)
  };

  const calculateRecipe = () => {
    const ingredients = map(selections, (item) => item);
    const potionId = matchRecipes(ingredients);
    if (!potionId) {
      playFail()
      alert("Well, I guess you could call this a potion...");
      dispatch(updatePotion(potionId));
    } else {
      // Also play the fail sound if the potion is the defaulted smelly potion
      if(potions[potionId].name === 'Smelly Potion(?)'){
        playFail()
      } else {
        playDiscoverPotion()
      }
      alert(`Discovered ${potions[potionId].name}`);
      dispatch(updatePotion(potionId));
    }
  };

  //clear ingredients button
  const clearRecipe = () => {
    dispatch(updateIngredients([]));
  };

  return (
    <div className="WorkbenchContainer">
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
        <Button text="Brew" disabled={isBrewDisabled} onClick={calculateRecipe} />
      </div>
    </div>
  );
};

export default Workbench;
