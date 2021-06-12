import { combineReducers } from 'redux';

// Put
const appReducer = combineReducers({
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer;