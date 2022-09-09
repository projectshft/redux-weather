import { FETCH_FORECAST } from "../actions";

const ForecastReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_FORECAST:
      return action.payload;
    default:
      return state;
  }
};

export default ForecastReducer;