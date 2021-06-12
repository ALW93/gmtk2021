import React from "react";
import LightBox from "./shared/LightBox";
import { loadSaveData } from "../store/reducers/saveReducer";

const RecipeBook = ({ title, onClick }) => {
  const recipes = loadSaveData();

  return (
    <LightBox onClick={onClick}>
      <h1>{title}</h1>
      {JSON.stringify(recipes)}
    </LightBox>
  );
};

export default RecipeBook;
