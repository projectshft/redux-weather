import _ from 'lodash';
import { FETCH_FORECAST } from '../actions'

const CURRENT_STATE = {
  queryCityEntries: {},
  queryCityIds: [],
}

const forecastReducer = function (state = CURRENT_STATE, action) {
  switch (action.type) {
    case FETCH_FORECAST:
      return {
        queryCityEntries: { ...state.queryCityEntries, [action.payload.data.city.id]: {
          city: action.payload.data.city.name,
          temperature: action.payload.data.list.map(Object => Object.main.temp),
          pressure: action.payload.data.list.map(Object => Object.main.pressure),
          humidity: action.payload.data.list.map(Object => Object.main.humidity),
        }
      },
      
      queryCityIds: _.union([...state.queryCityIds], [action.payload.data.city.id])
    }
      
    default: return state;
  }
}

export default forecastReducer;