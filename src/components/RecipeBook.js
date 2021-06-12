import React from "react";
import LightBox from "./shared/LightBox";
import { loadSaveData } from "../store/reducers/saveReducer";
import { potions } from "../data/data";
import Item from "../components/shared/Item";

const RecipeBook = ({ title, onClick }) => {
  const data = loadSaveData();
  const unlocked = Object.keys(data);

  return (
    <LightBox onClick={onClick}>
      <h1>{title}</h1>
      {potions.map((potion) => (
        <Item key={potion.id} id={potion.id} type="potion" name={potion.name} />
      ))}
      {JSON.stringify(unlocked)}
    </LightBox>
  );
};

export default RecipeBook;
