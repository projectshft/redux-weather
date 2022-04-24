import { normalize, schema } from 'normalizr';
import { FETCH_CITIES } from '../actions';

const citiesSchema = new schema.Entity('cities', undefined, {
  idAttribute: (value) => value.cityName
})

const defaultState = {
  entries: {},
  order: []
}

const citiesReducer = function(state = defaultState, action) {
  switch (action.type) {
    case FETCH_CITIES:
      const normalizedCities = normalize(action.payload.data, [citiesSchema]);
      
      return {
        entries: normalizedCities.entities.cities,
        order: normalizedCities.result
      }
    case 'ADD_CITY':
      debugger;
      return [[action.payload.data.list.forEach((timestamp) => {
        return timestamp.main.temp
      })], ...state]
    default:
      return state;
  }
}

export default citiesReducer;