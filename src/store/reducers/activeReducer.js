const LOAD_ALL_ACTIVE = "LOAD_ALL_ACTIVE";
const ACTIVATE_NPC = "ACTIVATE_NPC"
const CLEAR_ALL_ACTIVE = "CLEAR_ALL_ACTIVE"
const ACTIVATE_INGREDIENT = "ACTIVATE_INGREDIENT"
const CLEAR_INGREDIENT = "CLEAR_INGREDIENT"
const ACTIVATE_POTION = "ACTIVATE_POTION"

export const loadAllActive = (data) => ({ type: LOAD_ALL_ACTIVE, data,});
export const clearAllActive = (data) => ({type: CLEAR_ALL_ACTIVE, data})
export const activateNpc = (data) => ({type: ACTIVATE_NPC, data})
export const activateIngredient = (data) => ({type: ACTIVATE_INGREDIENT, data})
export const activatePotion = (data) => ({type: ACTIVATE_POTION, data})


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

    case ACTIVATE_NPC: 
      return {...state, npc: action.data};

    case ACTIVATE_INGREDIENT: 
      return {...state, ingredients: [...state.ingredients, action.data]};

    case CLEAR_INGREDIENT:
      return {...state, ingredients: state.ingredients.filter(ingredient => ingredient === action.data)};

    case ACTIVATE_POTION:
      return {...state, potion: action.data};
      
    default: {
      return state;
    }
  }
}
