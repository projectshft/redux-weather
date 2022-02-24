import { FETCH_WEATHER, SET_ERROR } from "../actions";
// import _ from "lodash";

const initialState = {
  weatherInfo: [],
};

const weatherReducer = function (state = initialState, action) {
  switch (action.type) {
    case FETCH_WEATHER: {
      console.log(action.payload.data);

      return {
        ...state,
        weatherInfo: [{ ...action.payload.data }, ...state.weatherInfo],
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
