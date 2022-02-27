import { FETCH_FORECAST} from "../actions";
// import _ from "lodash";


const forecastReducer = function(state = {forecast_data: {}, error: null}, action) {
  switch (action.type) {
    case FETCH_FORECAST:

      if (action.error) {
        return {forecast_data: {}, error: action.payload}
      } else {
        const forecast_data = action.payload.data.list;
        const temperature_data =  forecast_data.map(datapoint => datapoint.main.temp);
        const pressure_data = forecast_data.map(datapoint => datapoint.main.pressure);
        const humidity_data = forecast_data.map(datapoint => datapoint.main.humidity);

        const search_results = {
          city: action.payload.data.city.name,
          temperature_data: temperature_data,
          pressure_data: pressure_data,
          humidity_data: humidity_data,
          mean_temperature: Math.round(temperature_data.reduce((prev, curr) => prev + curr, 0) / temperature_data.length),
          mean_pressure: Math.round(pressure_data.reduce((prev, curr) => prev + curr, 0) / pressure_data.length),
          mean_humidity: Math.round(humidity_data.reduce((prev, curr) => prev + curr, 0) / humidity_data.length)
        } 
        
        return {forecast_data: search_results, error: null};
      }
      
    default:
      return state;
  }
}

export default forecastReducer 