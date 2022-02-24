import { FETCH_WEATHER } from "../actions";

const initialState = {
  weatherInfo: {},
};

const weatherReducer = function (state = initialState, action) {
  if (action.type === FETCH_WEATHER) {
    state = { ...state, weatherInfo: action.payload.data };
  }

  return state;
};

export default weatherReducer;
