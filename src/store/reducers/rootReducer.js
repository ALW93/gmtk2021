import { combineReducers } from "redux";
import npc from "../reducers/npcReducer";
import result from "../reducers/resultReducer";
import ailment from "../reducers/ailmentReducer";

const appReducer = combineReducers({
  npc,
  ailment,
  result,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
