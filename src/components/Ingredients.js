import React from "react";
import { ingredients } from "../data/data";

const Ingredients = (props) => {
  return <div>{JSON.stringify(ingredients)}</div>;
};

export default Ingredients;
