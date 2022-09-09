import FETCH_FORECAST from "../actions";

const forecastReducer = (state = [], action) => {
  console.log('at forecastReducer');
  switch (action.type) {
    case 'FETCH_FORECAST':
      /* todo: parse out and return object of 

      let forecast = {
        city: 'Tulsa',
        temperatures: [1,2,3],
        pressures: [1,2,3],
        humidities: [1,2,3]
      }
      
      ... or some such object

      */
      
      // return forecast;
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};