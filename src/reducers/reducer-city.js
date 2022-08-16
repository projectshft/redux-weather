import { FETCH_CITY } from "../actions";

const cityReducer = function(state = [], action) {

  switch (action.type) {
    case FETCH_CITY:
      const forecast = action.payload.data;
      const cityForecast = {
        city: forecast.city.name,
        forecast: forecast.list,
        temperature: forecast.list.map(function (p) {
          return p.main.temp
        }),
        pressure: forecast.list.map(function (p) {
          return p.main.pressure
        }),
        humidity: forecast.list.map(function (p) {
          return p.main.humidity
        })
      }
      return [cityForecast, ...state];

    default: return state;
  }
};

export default cityReducer;