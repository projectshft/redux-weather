import { FETCH_WEATHER } from "../actions";

const setDefaultState = () => {
  return {
    weather: [],
  };
};

const weatherReducer = function (state = setDefaultState(), action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        weather: [...state.weather, action.payload.data],
      };
    default:
      return state;
  }
};

export default weatherReducer;
