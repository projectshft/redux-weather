import { FETCH_FORECAST } from "../actions";
import _ from 'lodash';

const DEFAULT_STATE = {
  entries: {},
  cityIds: []
};

const forecastReducer = function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_FORECAST:
      return {
        entries: { ...state.entries, [action.payload.data.city.id]: {
          city: action.payload.data.city.name,
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