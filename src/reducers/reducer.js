import { CITY_WEATHER } from "../actions";

const dataReducer = (state = [], action) => {
  switch(action.type) {
    case CITY_WEATHER:
      const city = action.payload.data.city;
      const cityforecast = action.payload.data.list

      return { 
        ...state,
        city: city.name,
        id: city.id,
        lat: city.coord.lat,
        lon: city.coord.lon,
        temp: cityforecast.map(function(t){
          return t.main.temp}),
        pressure: cityforecast.map(function(p){
          return p.main.pressure}),
        humidity: cityforecast.map(function(h){
          return h.main.humidity})
      }
      default:
        return state;
  }
}

export default dataReducer