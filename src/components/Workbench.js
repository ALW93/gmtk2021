import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { findIndex, map } from "lodash";
import { matchRecipes } from "../utility/utility";
import Ingredients from "./Ingredients";
import Combiner from "./Combiner";
import Button from "./shared/Button";
import { sendResult } from "../store/actions/resultsActions";

import "../styles/components/_Workbench.scss";

const Workbench = (props) => {
  const [selection, setSelection] = useState([]);
  const dispatch = useDispatch();

  const handleSelect = (e) => {
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

  const calculateRecipe = () => {
    const ingredients = map(selection, (item) => item.id);
    const result = matchRecipes(ingredients);
    if (!result) {
      alert("No matching recipes found");
    } else {
      alert(`Discovered ${result.name}`);
      dispatch(sendResult(result));
    }
  };

  return (
    <div className="WorkbenchContainer">
      <Ingredients addSelection={handleSelect} />
      <div>
        <Combiner ingredients={selection} removeSelection={removeSelect} />
        <Button text="Combine" onClick={calculateRecipe} />
      </div>
    </div>
  );
};

export default Workbench;
