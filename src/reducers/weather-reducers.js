import { FETCH_WEATHER } from "../actions";

const weatherReducer = function (state = {}, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return action.payload.data.map (function (city) {
        return {
          city: city.dt,
          temperature: city.main.temp,
          pressure: city.main.pressure,
          humidity: city.main.humidity
        };
      });
    default:
      return state
  }
}



export default weatherReducer