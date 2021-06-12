import React, { useState } from "react";
import { findIndex } from "lodash";
import Ingredients from "./Ingredients";
import Combiner from "./Combiner";
import Button from "./shared/Button";

import "../styles/components/_Workbench.scss";

const Workbench = (props) => {
  const [selection, setSelection] = useState([]);

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

  return (
    <div className="WorkbenchContainer">
      <Ingredients addSelection={handleSelect} />
      <div>
        <Combiner ingredients={selection} removeSelection={removeSelect} />
        <Button text="Combine" />
      </div>
    </div>
  );
};

export default Workbench;
