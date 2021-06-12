import { combineReducers } from "redux";
import npc from "../reducers/npcReducer";
import result from "../reducers/resultReducer";

const appReducer = combineReducers({
  npc,
  result,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
