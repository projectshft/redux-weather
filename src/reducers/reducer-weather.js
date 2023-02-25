// weather is it's own state
import { FETCH_WEATHER } from "../actions"

// TODO: empty out DEFAULT_STATE when done
const DEFAULT_STATE= {
  city: {
    name: '',
    temp: [],
    pressure: [],
    humidity: [],
  }
};

const weatherReducer = function (state = DEFAULT_STATE, action) {

  //manipulate data here and return the correct data into state
  
  switch (action.type) {    
    case FETCH_WEATHER:
      const data = action.payload.data;
      console.log(data);
    
      const tempArray = [];
      const pressureArray = [];
      const humidityArray = [];

      data.list.forEach(element => {
        tempArray.push(element.main.temp);
      });

      data.list.forEach(element => {
        pressureArray.push(element.main.pressure);
      });

      data.list.forEach(element => {
        humidityArray.push(element.main.humidity);
      });

      return {
        city: {
          name: data.city.name,
          temp: tempArray,
          pressure: pressureArray,
          humidity: humidityArray
        }
      }
    default: 
      return state;
  }
}

export default weatherReducer;