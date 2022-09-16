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
      }), ...state];
      //receiving error: state is not iterable. This makes sense since state is an object, not an array. So I tried to use '...state.forecasts', but that didn't work either. Then I tried '...state.forecasts.data', but to no avail. Decided to take out the spread operator and just return the array. This got rid of the error, but then I got new errors in my array helper methods. 
      return {error: '', data: fetchedForecast};
    case FETCH_FORECAST_ERROR:
      return {data: [], error: action.payload};
    default:
      const defaultState = { data: [], error: '' };
      return defaultState;
  }
};

export default ForecastReducer; 