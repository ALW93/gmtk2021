import React from "react";
import Item from "./shared/Item";
import { connect } from "react-redux";
import { get } from "lodash";

const Combiner = ({ removeSelection, selections, ingredients }) => {
  return (
    <div className="combinerContainer">
      {selections.map((selection, idx) => (
        <div key={`ingredient${idx}`}>
          <Item
            id={selection}
            onClick={removeSelection}
            type="ingredient"
            name={ingredients[selection].name}
          />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: get(state, "ingredients", {}),
    selections: get(state, "active.ingredients", []),
  };
};

export default connect(mapStateToProps, {})(Combiner);
