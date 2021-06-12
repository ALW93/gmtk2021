import { addResults } from "../reducers/resultReducer";

export const sendResult = (results) => (dispatch) => {
  return dispatch(addResults(results));
};
