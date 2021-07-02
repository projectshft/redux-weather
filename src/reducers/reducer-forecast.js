import { FETCH_FORECAST } from "../actions";
import { ADD_FORECAST } from "../actions";

const ForecastReducer = function (state = [], action) {
  debugger;

  switch (action.type) {
    case FETCH_FORECAST:
      // need to return an array, not object
      return [action.payload.data.list];
    case ADD_FORECAST:
      return [action.payload.data.list, ...state];
    default:
  }
};

export default ForecastReducer;
