import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import Item from "./shared/Item";
import { connect } from "react-redux";
import { get } from "lodash";

const Combiner = ({ selections = [], removeSelection }) => {
  const ingredients = useSelector(state => state.ingredients)
  const [cauldronLiquidColor, setCauldronLiquidColor] = useState("rgba(76, 72, 80, 0.5)")

  useEffect(() => {
    console.log("selections colors", cauldronLiquidColor, selections)
    switch (selections.length) {
      case 1:
        setCauldronLiquidColor("rgba(231, 111, 81,0.8)")
        break;
      case 2:
        setCauldronLiquidColor("rgba(233, 196, 106,0.8)")
        break;
      case 3:
        setCauldronLiquidColor("rgba(42, 157, 143,0.8)")
        break;
      default:
        setCauldronLiquidColor("rgba(76, 72, 80, 1)")
        break;
    }
  }, [selections.length])

  return (
    <div className="combinerContainer" style={{color: "red", backgroundColor: cauldronLiquidColor}}>
      {selections.map((selection, idx) => (
          <Item
            key={idx}
            id={selection}
            onClick={removeSelection}
            type="ingredient"
            name={ingredients[selection].name}
          />
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
