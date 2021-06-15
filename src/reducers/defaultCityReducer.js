import { MAKE_DEFAULT } from "../actions/makeDefaultAction";
import { FETCH_DEFAULT } from "../actions/makeDefaultAction";

const initialState = {
  defaultCity: "",
  defaultCityTemp: [],
  defaultCityPressure: [],
  defaultCityHumidity: [],
};

const defaultCityReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_DEFAULT:
      return {
        ...state,
        defaultCity: action.payload,
      };
    case FETCH_DEFAULT:
      return {
        ...state,
        defaultCityTemp: action.payload.data.list.map((city) => {
          return city.main.temp;
        }),
        defaultCityPressure: action.payload.data.list.map((city) => {
          return city.main.pressure;
        }),
        defaultCityHumidity: action.payload.data.list.map((city) => {
          return city.main.humidity;
        }),
      };
    default:
      return state;
  }
};

export default defaultCityReducer;
