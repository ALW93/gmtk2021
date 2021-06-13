import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import Item from "./shared/Item";
import { connect } from "react-redux";
import { get } from "lodash";

const Combiner = ({ selections = [], removeSelection }) => {
  const ingredients = useSelector(state => state.ingredients)
  const [cauldronLiquidColor, setCauldronLiquidColor] = useState("rgba(76, 72, 80, 0.5)")

  useEffect(() => {
    switch (selections.length) {
      case 1:
        setCauldronLiquidColor("rgba(231, 111, 81,1)")
        break;
      case 2:
        setCauldronLiquidColor("rgba(233, 196, 106,1)")
        break;
      case 3:
        setCauldronLiquidColor("rgba(42, 157, 143,1)")
        break;
      default:
        setCauldronLiquidColor("rgba(76, 72, 80, 1)")
        break;
    }
  }, [selections.length])

  return (
    <div 
      className="combinerContainer" 
      style={{
        // background: `radial-gradient(${cauldronLiquidColor} 0%, ${cauldronLiquidColor} 20%, rgb(50,50,70) 100%)`,
        backgroundColor: cauldronLiquidColor,
      }}
    >
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
