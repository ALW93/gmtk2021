import { get } from "lodash";

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

export default function saveReducer(state = {}, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
