import { FETCH_WEATHER, SET_ERROR } from "../actions";

const initialState = {
  weatherInfo: {},
};

const weatherReducer = function (state = initialState, action) {
  switch (action.type) {
    case FETCH_WEATHER: {
      return { ...state, weatherInfo: action.payload.data };
    }

    case SET_ERROR: {
      alert(action.payload.response.message);
    }

    default:
      return state;
  }
};

export default weatherReducer;
