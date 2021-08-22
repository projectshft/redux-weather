import {ADD_SEARCH} from "../actions/actions"

const searchReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_SEARCH:
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default searchReducer;