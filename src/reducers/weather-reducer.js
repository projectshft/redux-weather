import { FETCH_WEATHER, ADD_CITY } from "../actions";

const weatherReducer = function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return state.concat(action.payload);
    case ADD_CITY:
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default weatherReducer;