import { FETCH_WEATHER, SET_ERROR } from "../actions";
// import _ from "lodash";

const initialState = {
  weatherInfo: [],
};

const weatherReducer = function (state = initialState, action) {
  switch (action.type) {
    case FETCH_WEATHER: {
      return {
        ...state,
        weatherInfo: [...state.weatherInfo, { ...action.payload.data }],
      };
    }

    case SET_ERROR: {
      alert(action.payload.response.message);
      break;
    }

    default:
      return state;
  }
};

export default weatherReducer;
