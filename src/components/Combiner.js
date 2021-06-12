import React from "react";
import { useSelector } from "react-redux";
import Item from "./shared/Item";
import { connect } from "react-redux";
import { get } from "lodash";

const Combiner = ({ selections = [], removeSelection }) => {
  const ingredients = useSelector(state => state.ingredients)
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
