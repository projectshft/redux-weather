import { FETCH_WEATHER } from "../actions/weatherAction";

const initialState = {
  weatherData: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        ...state,
        weatherData: [action.payload.data, ...state.weatherData],
      };
    default:
      return state;
  }
};

export default weatherReducer;
