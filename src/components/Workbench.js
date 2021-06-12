import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { findIndex, map } from "lodash";
import { matchRecipes } from "../utility/utility";
import Ingredients from "./Ingredients";
import Combiner from "./Combiner";
import Button from "./shared/Button";
import { sendResult } from "../store/actions/resultsActions";
import LightBox from "./shared/LightBox";

const Workbench = (props) => {
  const [selection, setSelection] = useState([]);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSelect = (e) => {
    console.log("target", e.target)
    if (selection.length === 3) {
      alert("Error: Maximum selection reached");
      return;
    } else {
      setSelection([...selection, { ...e.target.dataset }]);
    }
  };

  const removeSelect = (e) => {
    const idx = findIndex(selection, { id: e.target.dataset.id });
    let newValues = [...selection];
    if (idx > -1) {
      newValues.splice(idx, 1);
    }
    setSelection(newValues);
  };

  const calculateRecipe = async () => {
    const ingredients = map(selection, (item) => item.id);
    const result = matchRecipes(ingredients);
    if (!result) {
      alert("No matching recipes found");
    } else {
      alert(`Discovered ${result.name}`);
      dispatch(sendResult(result));
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
        <Combiner ingredients={selection} removeSelection={removeSelect} />
        <Button text="Combine" onClick={calculateRecipe} />
      </div>
    </div>
  );
};

export default Workbench;
