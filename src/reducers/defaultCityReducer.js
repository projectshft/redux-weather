import { MAKE_DEFAULT } from "../actions/makeDefaultAction";
import { FETCH_DEFAULT } from "../actions/makeDefaultAction";
import { FETCH_CURRENT_WEATHER } from "../actions/makeDefaultAction";
import { LOADING_CURRENT } from "../actions/makeDefaultAction";

const initialState = {
  defaultCity: "",
  defaultCityTemp: [],
  defaultCityPressure: [],
  defaultCityHumidity: [],
  currentWeather: [],
  isLoading: true,
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
    case FETCH_CURRENT_WEATHER:
      return {
        ...state,
        currentWeather: action.payload,
        isLoading: false,
      };
    case LOADING_CURRENT:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default defaultCityReducer;
