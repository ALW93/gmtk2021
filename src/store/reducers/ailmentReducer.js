const LOAD_AILMENTS = "LOAD_AILMENTS";

export const loadAilmentsAction = (data) => ({
  type: LOAD_AILMENTS,
  data,
});

export default function ailmentReducer(state = [], action) {
  switch (action.type) {
    case LOAD_AILMENTS: {
      return action.data;
    }
    default: {
      return state;
    }
  }
}
