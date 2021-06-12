import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';
import {ingredients, potions, npcs, ailments} from '../data/data'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

console.log('data npcs', npcs)
const initial = {
    npcs,
    potions,
    ingredients,
    ailments
}

const configureStore = (initialState=initial) => {
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk, logger))
    )
}

export default configureStore;