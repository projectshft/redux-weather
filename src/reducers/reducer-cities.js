import { FETCH_CITIES } from '../actions';

const defaultState = {
  cities: {
    Chetek: {

    },
    Moscow: {

    }
  }
}

const CitiesReducer = function(state = defaultState, action) {
  switch (action.type) {
    case FETCH_CITIES:
      debugger;
      return state;
    default:
      return state;

  }
}

export default CitiesReducer;