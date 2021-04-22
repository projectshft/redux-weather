import { FETCH_FORECAST } from "../actions/index";

const defaultState = [];

const citiesReducer = (state=defaultState, action) => {
  switch (action.type) {
    case FETCH_FORECAST:
      return [...state, action.payload];
  
    default:
      return state;
  }
}

export default citiesReducer;