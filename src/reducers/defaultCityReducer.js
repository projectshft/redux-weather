import { MAKE_DEFAULT } from "../actions/makeDefaultAction";
import { FETCH_DEFAULT_FORECAST } from "../actions/makeDefaultAction";
import { FETCH_CURRENT_WEATHER } from "../actions/makeDefaultAction";
import { LOADING_DEFAULT } from "../actions/makeDefaultAction";

const initialState = {
  defaultCity: null,
  defaultForecastTemp: [],
  defaultForecastPressure: [],
  defaultForecastHumidity: [],
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
    case FETCH_DEFAULT_FORECAST:
      return {
        ...state,
        defaultForecastTemp: action.payload.data.list.map((city) => {
          return city.main.temp;
        }),
        defaultForecastPressure: action.payload.data.list.map((city) => {
          return city.main.pressure;
        }),
        defaultForecastHumidity: action.payload.data.list.map((city) => {
          return city.main.humidity;
        }),
      };
    case FETCH_CURRENT_WEATHER:
      return {
        ...state,
        currentWeather: action.payload.data.weather[0].icon,
        isLoading: false,
      };
    case LOADING_DEFAULT:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default defaultCityReducer;
