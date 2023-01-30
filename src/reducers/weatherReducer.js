import {FETCH_WEATHER_DATA_SUCCESS, FETCH_WEATHER_DATA_FAILURE} from '../actions/types';

const initialState = {
  weatherData: {},
  error: null
}

const weatherReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_WEATHER_DATA_SUCCESS:
      return {
        ...state,
        weatherData: action.payload
      }
    case FETCH_WEATHER_DATA_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}

export default weatherReducer;
