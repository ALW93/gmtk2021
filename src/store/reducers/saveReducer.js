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
  const recipeToUpdate = get(recipeBook, result.id, undefined);
  if (!recipeToUpdate) {
    recipeBook[result.id] = {
      ...result,
      date: new Date().toISOString().slice(0, 10),
      count: 1,
    };
  } else {
    recipeBook[result.id].count += 1;
  }
  localStorage.setItem("RecipeBook", JSON.stringify(recipeBook));
};

export default function saveReducer(state = {}, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
