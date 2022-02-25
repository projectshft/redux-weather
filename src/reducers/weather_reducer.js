import _ from "lodash";
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
        weatherInfo: [
          { ...action.payload.data },
          ...state.weatherInfo.filter(
            (entry) => entry.city.id !== action.payload.data.city.id
          ),
        ],
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
