import React, { useState } from "react";
import LightBox from "./shared/LightBox";
import { loadSaveData } from "../store/reducers/saveReducer";
import { potions } from "../data/data";
import { connect } from "react-redux";
import { get } from "lodash";
import Item from "../components/shared/Item";

const RecipeBook = ({ title, onClick, potionsById }) => {
  const unlocked = Object.keys(loadSaveData());
  const [preview, setPreview] = useState({});

  const showPreview = (e) => {
    const potionId = e.target.dataset.id;
    setPreview(potionsById[potionId]);
  };

  return (
    <LightBox onExit={onClick}>
      <div className="recipeContainer">
        <div className="recipeContainer--list">
          <h1>{title}</h1>
          {potions.map((potion) => {
            const discovered = unlocked.includes(potion.id);
            return (
              <span>
                <Item
                  key={potion.id}
                  id={potion.id}
                  type="potion"
                  name={potion.name}
                  disabled={!discovered}
                  onClick={showPreview}
                />
                {discovered ? potion.name : "Undiscovered"}
              </span>
            );
          })}
        </div>
        <div className="recipeContainer--preview">
          {preview && (
            <Item
              key={preview.id}
              id={preview.id}
              type="potion"
              name={preview.name}
            />
          )}
        </div>
      </div>
    </LightBox>
  );
};

const mapStateToProps = (state) => {
  return {
    potionsById: get(state, "potions", {}),
  };
};

export default connect(mapStateToProps, {})(RecipeBook);
