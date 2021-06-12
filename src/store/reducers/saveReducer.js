import { get } from "lodash";

const ADD_RECIPE = "ADD_RECIPE";
const LOAD_RECIPES = "LOAD_RECIPES";

export const loadSaveData = () => {
  const savedSession = localStorage.getItem("RecipeBook");
  if (!savedSession) {
    return localStorage.setItem("RecipeBook", JSON.stringify({}));
  }
  const saveData = JSON.parse(savedSession);
  return saveData;
};

export const saveRecipe = (result) => {
  const recipeBook = loadSaveData();
  if (!get(recipeBook, result.id)) {
    recipeBook[result.id] = result;
    return localStorage.setItem("RecipeBook", JSON.stringify(recipeBook));
  }
  console.log("ALREADY DISCOVERED");
};

export default function (state = {}, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
