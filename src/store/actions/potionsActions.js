import { addResults } from "../reducers/resultReducer";
import { saveRecipe } from "../reducers/saveReducer";

export const sendResult = (results) => async (dispatch) => {
  await saveRecipe(results);
  return dispatch(addResults(results));
};