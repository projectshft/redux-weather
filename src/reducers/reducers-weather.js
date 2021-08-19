import { FETCH_WEATHER } from '../actions';

const weatherReducer = function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      const cityName = action.payload.data.city;
      const cityData = function (dataType) {
      action.payload.data.list.map(function (c) {
        return c.main[dataType]
        })
      }
      return  {
        city: cityName.name,
        id: cityName.id,
        lat: cityName.coord.lat,
        lon: cityName.coord.lon,
        temp: action.payload.data.list.map(function (c) {
          return c.main.temp
        }),
        pressure: action.payload.data.list.map(function (c) {
          return c.main.pressure
        }),
        humidity: action.payload.data.list.map(function (c) {
          return c.main.humidity
        }),
      }
    default:
      return state;
  }
}

export default weatherReducer