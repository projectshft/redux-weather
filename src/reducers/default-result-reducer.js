import { DEFAULT_RESULT_ID, SET_DEFAULT } from "../constants";

const localStorageResultId = localStorage.getItem(DEFAULT_RESULT_ID);

const defaultResultReducer = (state = JSON.parse(localStorageResultId), action) => {
  switch (action.type) {
    case SET_DEFAULT:     
      localStorage.setItem(DEFAULT_RESULT_ID, JSON.stringify(action.payload));
      return action.payload;

    default:
      return state;
  }
}

export default defaultResultReducer;