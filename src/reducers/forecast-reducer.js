import { FETCH_FORECAST } from "../actions";

const ForecastReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_FORECAST:
      
    let newCity = [...action.payload.data.list.map(function (f) {
        return {
          city: action.payload.data.city.name,
          temperature: f.main.temp, 
          pressure: f.main.pressure, 
          humidity: f.main.humidity 
          };
      }),...state];

      
      return newCity;

      
    default:
      return state;
  }
};

export default ForecastReducer; 