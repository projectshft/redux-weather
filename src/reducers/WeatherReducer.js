import { FETCH_WEATHER } from '../actions';

const initialState = {
  weather: [],
};

const WeatherReducer = function (state = initialState, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        weather: [...state.weather, action.payload],
      };
    default:
      return state;
  }
};

export default WeatherReducer;
