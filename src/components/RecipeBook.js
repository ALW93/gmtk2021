import React from "react";
import LightBox from "./shared/LightBox";
import { loadSaveData } from "../store/reducers/saveReducer";
import { potions } from "../data/data";
import Item from "../components/shared/Item";

const RecipeBook = ({ title, onClick }) => {
  const unlocked = Object.keys(loadSaveData());

  return (
    <LightBox onClick={onClick}>
      <div className="recipeContainer">
        <div className="recipeContainer--list">
          <h1>{title}</h1>
          {potions.map((potion) => {
            const discovered = unlocked.includes(potion.id);
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
        <div className="recipeContainer--preview">potion preview</div>
      </div>
    </LightBox>
  );
};

export default RecipeBook;
