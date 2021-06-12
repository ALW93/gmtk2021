import React, { useState, useEffect } from "react";
import Ingredients from "./Ingredients";
import Combiner from "./Combiner";
import "./Workbench.scss";

const Workbench = (props) => {
  const [selection, setSelection] = useState(["apple", "banana", "pear"]);

  useEffect(() => {
    if (selection === 3) {
      alert("Error: Maximum selection reached");
    }
  }, [selection, setSelection]);

  return (
    <div className="WorkbenchContainer">
      <Ingredients />
      <Combiner />
    </div>
  );
};

export default Workbench;
