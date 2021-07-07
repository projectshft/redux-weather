import { FETCH_FORECAST } from "../actions";
import { ADD_FORECAST } from "../actions";

const ForecastReducer = function (state = [], action) {
  switch (action.type) {
    case FETCH_FORECAST:
      return [{
        city: action.payload.data.city.name,
        temps: action.payload.data.list.map(function (x) {
          return x.main.temp;
        }),
        press: action.payload.data.list.map(function (x) {
          return x.main.pressure;
        }),
        humid: action.payload.data.list.map(function (x) {
          return x.main.humidity;
        }),
      }];
    case ADD_FORECAST:
      // says action.payload.data is not iterable, it is an object, not an array
      // may need separate state fore each
      return [
        {
          city: action.payload.data.city.name,
          temps: action.payload.data.list.map(function (x) {
            return x.main.temp;
          }),
          press: action.payload.data.list.map(function (x) {
            return x.main.pressure;
          }),
          humid: action.payload.data.list.map(function (x) {
            return x.main.humidity;
          }),
        }, ...state
      ];
    default:
      return [];
  }
};

export default ForecastReducer;