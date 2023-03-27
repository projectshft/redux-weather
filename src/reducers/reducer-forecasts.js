import _ from 'lodash';
import { FETCH_FORECAST } from '../actions';

const DEFAULT_STATE = {
  cities: {},
}

const ForecastsReducer = function(state = DEFAULT_STATE, action) {
  switch(action.type) {
    case FETCH_FORECAST:
      return {
        cities: action.payload.data
      };
    default:
      return state;
  }
}

export default ForecastsReducer;