import { fetchWeather } from '../actions'

export const weatherReducer = ( state = {}, action) => {
  if(action.type === 'GET_WEATHER') {
    state = {...state, weatherData: action.payload}
  }
  return state;
};

