import { FETCH_CITY } from "../actions";

const cityReducer = function(state = [], action) {
  switch (action.type) {
    case FETCH_CITY:
      const forecast = action.payload.data;
      return forecast.list.map(function (p) {
        return {
          temperature: p.main.temp,
          pressure: p.main.pressure,
          humidity: p.main.humidity
        };
      });
    default: return state;
  }
};

export default cityReducer;