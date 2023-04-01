import _ from 'lodash';
import { FETCH_FORECAST } from '../actions';

const DEFAULT_STATE = {
  cities: [],
}

const forecastsReducer = function(state = DEFAULT_STATE, action) {
  
  switch(action.type) {
    case FETCH_FORECAST:
      // return state;
      // console.log(state)
      return {
        cities : [action.payload.data, ...state.cities]
      }
    
      // return {
      //   cities: { [action.payload.data.city.name]: action.payload.data.list[0], ...state.cities}
      // }
    default:
      return state;
  }
}

export default forecastsReducer;