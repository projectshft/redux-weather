import { FETCH_FORECAST } from "../actions";
import _ from 'lodash';

const DEFAULT_STATE = {
  entries: {},
  cityIds: []
};

// the entries parameter in state will be an object of objects that lists the cities by their id and contains data for city name, temp, pressure, and humidity. cityIds was added as an array so the id's could be mapped through and used to select the correct objects within entries when rendering forecasts in ./components/forecast-list.js
const forecastReducer = function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_FORECAST:
      return {
        entries: { ...state.entries, [action.payload.data.city.id]: {
          city: action.payload.data.city.name,

          // creates an array of all the 5 day forecast data for temp, pressure, and humidity. The array will be used for sparklines
          temps: action.payload.data.list.map(obj => obj.main.temp), 
          pressure: action.payload.data.list.map(obj => obj.main.pressure), 
          humidity: action.payload.data.list.map(obj => obj.main.humidity) 
          }
        },
        cityIds: _.union([...state.cityIds], [action.payload.data.city.id])
      }
    default:
      return state;
  }
}

export default forecastReducer;