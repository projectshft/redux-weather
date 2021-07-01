import { FETCH_FORECAST } from "../actions";

const ForecastReducer = function (state = [], action) {

  switch (action.type) {
    case FETCH_FORECAST:

      // need to return an array, not object
      return [action.payload.data.list, ...state];
    default:
      return state;
  }
};

export default ForecastReducer;
