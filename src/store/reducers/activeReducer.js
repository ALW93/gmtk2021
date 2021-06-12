const LOAD_ALL_ACTIVE = "LOAD_ALL_ACTIVE";
const UPDATE_NPC = "UPDATE_NPC"
const CLEAR_ALL_ACTIVE = "CLEAR_ALL_ACTIVE"
const UPDATE_INGREDIENTS = "UPDATE_INGREDIENTS"
const ADD_INGREDIENT = "ADD_INGREDIENT"
const CLEAR_INGREDIENT = "CLEAR_INGREDIENT"
const UPDATE_POTION = "UPDATE_POTION"

export const loadAllActive = (data) => ({ type: LOAD_ALL_ACTIVE, data,});
export const clearAllActive = (data) => ({type: CLEAR_ALL_ACTIVE, data})
export const updateNpc = (data) => ({type: UPDATE_NPC, data})
export const updateIngredients = (data) => ({type: UPDATE_INGREDIENTS, data})
export const addIngredient = (data) => ({type: ADD_INGREDIENT, data})
export const clearIngredient = (data) => ({type: CLEAR_INGREDIENT, data})
export const updatePotion = (data) => ({type: UPDATE_POTION, data})


const initialState = {
  npc: {},
  ailment: {},
  ingredients: [],
  potion: {},
}



export default function activeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ALL_ACTIVE: 
      return action.data;

    case CLEAR_ALL_ACTIVE:
      return initialState;

    case UPDATE_NPC: 
      return {...state, npc: action.data};

    case UPDATE_INGREDIENTS:
      return {...state, ingredients: action.data}

    case ADD_INGREDIENT: 
      return {...state, ingredients: [...state.ingredients, action.data]};

    case CLEAR_INGREDIENT:
      const idx = state.ingredients.indexOf(action.data)
      const newIngredients = [ ...state.ingredients.slice(0,idx), ...state.ingredients.slice(idx+1, state.ingredients-1) ]
      return {...state, ingredients: newIngredients};

    case UPDATE_POTION:
      return {...state, potion: action.data};
      
    default: {
      return state;
    }
  }
}