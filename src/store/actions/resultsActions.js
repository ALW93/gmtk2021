import { addResults } from "../reducers/resultReducer";

export const sendResult = (results) => {
  return (dispatch) => {
    return dispatch(addResults(results));
  };
};
