import { FETCH_WEATHER } from "../actions/weatherAction";

const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data.list, ...state];
    default:
      return state;
  }
};

export default weatherReducer;
