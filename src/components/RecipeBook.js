import React from "react";
import LightBox from "./shared/LightBox";
import { loadSaveData } from "../store/reducers/saveReducer";
import { potions } from "../data/data";
import Item from "../components/shared/Item";

const RecipeBook = ({ title, onClick }) => {
  const unlocked = Object.keys(loadSaveData());
  console.log(unlocked);

  return (
    <LightBox onClick={onClick}>
      <h1>{title}</h1>
      <div className="recipeContainer">
        {potions.map((potion) => {
          const discovered = unlocked.includes(potion.id);
          console.log(discovered);
          return (
            <Item
              key={potion.id}
              id={potion.id}
              type="potion"
              name={potion.name}
              disabled={!discovered}
            />
          );
        })}
      </div>
    </LightBox>
  );
};

export default RecipeBook;
