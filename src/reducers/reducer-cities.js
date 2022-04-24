import { FETCH_CITIES } from '../actions';
import _ from 'lodash';

const defaultState = {
  entries: {},
  order: []
}

const citiesReducer = function(state = defaultState, action) {
  switch (action.type) {
    case FETCH_CITIES:
      return state;
    case 'ADD_CITY':
      const temp = action.payload.data.list.map((ts) => {
        return ts.main.temp;
      })
      const pressure = action.payload.data.list.map((ts) => {
        return ts.main.pressure;
      })
      const humidity = action.payload.data.list.map((ts) => {
        return ts.main.humidity;
      })
      const name = action.payload.data.city.name;

      if(action.payload === undefined) {
        alert('city not found')
      }

      return {
        entries: { ...state.entries, [name]: { cityName: name, temp: temp, pressure: pressure, humidity: humidity }},
        order: _.union([...state.order], [name])
      }
    default:
      return state;
  }
}

export default citiesReducer;