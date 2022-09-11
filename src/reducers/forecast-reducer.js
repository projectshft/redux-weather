import { FETCH_FORECAST } from "../actions";

const ForecastReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_FORECAST:
      
    const NewState = action.payload.data.list.map(function (f) {
        return {
          temperature: f.main.temp, 
          pressure: f.main.pressure, 
          humidity: f.main.humidity 
          }
      });
      return NewState;
    default:
      return state;
  }
};

export default ForecastReducer; 