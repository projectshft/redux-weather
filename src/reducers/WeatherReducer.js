import { FETCH_WEATHER } from '../actions';

const WeatherReducer = function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return action.payload.data;
    default:
      return state;
  }
};

export default WeatherReducer;
