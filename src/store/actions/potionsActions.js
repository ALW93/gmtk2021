import { incrementCount } from "../reducers/activeReducer";
import { addResults } from "../reducers/resultReducer";
import { saveRecipe, saveNpc } from "../reducers/saveReducer";

export const updateSaveLog = ({potion, npc}) => async (dispatch) => {
  const isNewRecipe = await saveRecipe(potion);

  saveNpc(npc);

  // return dispatch(addResults(potion));
};

export const updateSaveLogPotion = ({potion}) => async (dispatch) => {
  console.log("updating potion log")
  const isNewRecipe = await saveRecipe(potion);
  if (isNewRecipe) dispatch(incrementCount('potionsDiscovered'));
  // return dispatch(addResults(potion));
}

export const updateSaveLogNpc = ({npc}) => async (dispatch) => {
  saveNpc(npc)
}