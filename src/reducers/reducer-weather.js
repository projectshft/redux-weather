import { FETCH_WEATHER } from "../actions"

const DEFAULT_STATE= {
  cities: []
};

const weatherReducer = function (state = DEFAULT_STATE, action) {
  
  switch (action.type) {    
    case FETCH_WEATHER:
      const data = action.payload.data;
    
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

      const newCities = [newCity, ...state.cities];

      return {
        cities: newCities
      }
    default: 
      return state;
  }
}

export default weatherReducer;
