import { FETCH_FORECAST } from "../actions";

const ForecastReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_FORECAST:
      
    let newCity = [...action.payload.data.list.map(function (f) {
        return {
         
          id: action.payload.data.city.id,
          city: action.payload.data.city.name,
          temperature: f.main.temp, 
          pressure: f.main.pressure, 
          humidity: f.main.humidity 
          };
      }), ...state];

      console.log(newCity);
      debugger;
      
      return newCity;

      
    default:
      return state;
  }
};

export default ForecastReducer; 