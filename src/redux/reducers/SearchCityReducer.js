import { CITY_SEARCH } from "../actions/actions-index";

const DEFAULT_STATE = {
  searches: {
    // Orlando: {
    //   temp: [13,25,37],
    //   pressure: [13,25,37],
    //   humidity: [13,25,37]
    // },
    // Newark: {
    //   temp: [40,60,25],
    //   pressure: [40,60,25],
    //   humidity: [40,60,25]
    // },
  }
};

const searchCityReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case CITY_SEARCH:
      return {
        searches: { ...state.searches, [action.payload.city.name]: {
          temp: action.payload.list.map(({ main: { temp } }) => temp),
          pressure: action.payload.list.map(({ main: { pressure } }) => pressure),
          humidity: action.payload.list.map(({ main: { humidity } }) => humidity),
        }}
      };
    default:
      return state;
  }
};

export default searchCityReducer;