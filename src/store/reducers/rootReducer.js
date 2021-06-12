import { combineReducers } from 'redux';
import npc from '../reducers/npcReducer'

const appReducer = combineReducers({
    npc
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer;