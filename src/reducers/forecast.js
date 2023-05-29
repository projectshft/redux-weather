import { FETCH_FORECAST } from '../actions'

const CURRENT_STATE = {
  cities: [],
}

const forecastReducer = function (state = CURRENT_STATE, action) {
  switch (action.type) {
    case FETCH_FORECAST:
      return {
        cities: [action.payload, ...state.cities]
      }
      
    default: return state;
  }
}

export default forecastReducer;