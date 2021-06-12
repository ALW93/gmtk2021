import { addPotions } from "../reducers/potionsReducer";

export const sendPotion = (potions) => (dispatch) => {
  return dispatch(addPotions(potions));
};
