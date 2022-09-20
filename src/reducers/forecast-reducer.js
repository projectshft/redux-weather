import { FETCH_FORECAST } from "../actions";
import { FETCH_FORECAST_ERROR } from "../actions";

const ForecastReducer = (state = {}, action) => {
  
  switch (action.type) {
    case FETCH_FORECAST:      
      let fetchedForecast = [...action.payload.data.list.map(function (f) {
        return {
          city: action.payload.data.city.name,
          temperature: f.main.temp, 
          pressure: f.main.pressure, 
          humidity: f.main.humidity 
          };
      }), ...state.data];
      return {error: '', data: fetchedForecast};
    case FETCH_FORECAST_ERROR:
      return {data: [], error: action.payload};
    default:
      const defaultState = { data: [], error: '' };
      return defaultState;
  }
};

export default ForecastReducer; 
