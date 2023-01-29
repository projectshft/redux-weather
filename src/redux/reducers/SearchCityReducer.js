import { CITY_SEARCH } from "../actions/actions-index";

const DEFAULT_STATE = {
  searches: {
    Orlando: {
      temp: 72,
      pressure: 60,
      humidity: 90
    },
    Newark: {
      temp: 52,
      pressure: 40,
      humidity: 30
    },
  }
};

const searchCityReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case CITY_SEARCH:
      return {
        searches: { ...state.searches, [action.payload.city.name]: {
          temp: action.payload.list[0].main.temp,
          pressure: action.payload.list[0].main.pressure,
          humidity: action.payload.list[0].main.humidity,
        }}
      };
    default:
      return state;
  }
};

export default searchCityReducer;