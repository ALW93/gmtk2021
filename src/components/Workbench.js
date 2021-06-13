import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { map } from "lodash";

import { matchRecipes } from "../utility/utility";
import {
  updatePotion,
  updateIngredients,
} from "../store/reducers/activeReducer";

import Combiner from "./Combiner";

import { updateSaveLog } from "../store/actions/potionsActions";

import useSound from "use-sound";
import empty from "../music/empty.mp3";
import failedPotion2 from "../music/failedPotion2.mp3";
import discoverPotion from "../music/discoverPotion.mp3";

const Workbench = ({setOpenDiscovery}) => {
  const dispatch = useDispatch();
  const potions = useSelector((state) => state.potions);
  const selections = useSelector((state) => state.active.ingredients);
  const [isBrewDisabled, setIsBrewDisabled] = useState(true)
  const [playEmpty] = useSound(empty);
  const [playFail] = useSound(failedPotion2);
  const [playDiscoverPotion] = useSound(discoverPotion);

  useEffect(() => {
      if (selections.length === 2) {
        setIsBrewDisabled(false)
      }
    }, [selections.length])

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
      // Also play the fail sound if the potion is the defaulted smelly potion
      if (potions[potionId].name === "Smelly Potion(?)") {
        playFail();
      } else {
        playDiscoverPotion();
      }
      dispatch(updatePotion(potionId));
      dispatch(updateSaveLog(potions[potionId]));
      setOpenDiscovery(true);
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
      {/* <Ingredients addSelection={handleSelect} /> */}
      {/* </div> */}

      <div className="WorkbenchContainer--Bottom">
        <button disabled={isBrewDisabled} onClick={calculateRecipe} className="brewButton">Brew!</button>
        <Combiner removeSelection={removeSelect} />
        <button onClick={clearRecipe} className="clearButton">Clear</button>
      </div>
    </div>
  );
};

export default Workbench;
