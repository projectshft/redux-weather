import { ADD_CITY } from "../actions";

const DEFAULT_STATE = [];

const citiesReducer = function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_CITY:
      return [action.payload.data, ...state];
    default:
      return state;
  }
};

export default citiesReducer;