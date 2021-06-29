import { FETCH_FORECAST } from "../actions";

const ForecastReducer = function (state = [], action) {

  switch (action.type) {
    case FETCH_FORECAST:
      console.log(action);
      //console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default ForecastReducer;
