import React, { useState } from "react";
import Ingredients from "./Ingredients";
import Combiner from "./Combiner";
import "../styles/components/_Workbench.scss";

const Workbench = (props) => {
  const [selection, setSelection] = useState([]);

  const handleSelect = (e) => {
    if (selection.length === 3) {
      alert("Error: Maximum selection reached");
      return;
    } else {
      setSelection([...selection, e.target.dataset.value]);
    }
  };

  const removeSelect = (e) => {
    const idx = selection.indexOf(e.target.dataset.value);
    let newValues = [...selection];
    if (idx > -1) {
      newValues.splice(idx, 1);
    }
    setSelection(newValues);
  };

  return (
    <div className="WorkbenchContainer">
      <Ingredients addSelection={handleSelect} />
      <Combiner ingredients={selection} removeSelection={removeSelect} />
    </div>
  );
};

export default Workbench;
