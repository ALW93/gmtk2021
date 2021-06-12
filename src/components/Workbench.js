import React, { useState } from "react";
import Ingredients from "./Ingredients";
import Combiner from "./Combiner";
import "./Workbench.scss";

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
    //
  };

  return (
    <div className="WorkbenchContainer">
      <Ingredients addSelection={handleSelect} />
      <Combiner ingredients={selection} removeSelection={removeSelect} />
    </div>
  );
};

export default Workbench;
