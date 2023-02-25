import { FETCH_WEATHER } from "../actions"

const DEFAULT_STATE= {
  cities: []
};

/*
const DEFAULT_STATE= {
  city: {
    name: '',
    temp: [],
    pressure: [],
    humidity: [],
  }
};
*/

const weatherReducer = function (state = DEFAULT_STATE, action) {

  //manipulate data here and return the correct data into state
  console.log(state);
  
  switch (action.type) {    
    case FETCH_WEATHER:
      const data = action.payload.data;
      console.log(data);
    
      const tempArray = [];
      const pressureArray = [];
      const humidityArray = [];

      data.list.forEach(element => {
        tempArray.push(element.main.temp);
        pressureArray.push(element.main.pressure);
        humidityArray.push(element.main.humidity);
      });

      const newCity = {
        name: data.city.name,
        temp: tempArray,
        pressure: pressureArray,
        humidity: humidityArray
      }

      const newCities = [...state.cities, newCity];

      return {
        cities: newCities
      }
    default: 
      return state;
  }
}

export default weatherReducer;

/*
      return {
        city: {
          name: data.city.name,
          temp: tempArray,
          pressure: pressureArray,
          humidity: humidityArray
        }
      }
*/