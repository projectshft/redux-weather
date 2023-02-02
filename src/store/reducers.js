import { FETCH_WEATHER } from "../action-creators/actions";

const citiesReducer = function (state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      let temperature = [];
      let pressure = [];
      let humidity = [];
      let name = ''
      action.payload.data.list.map((section, index) => {
        temperature.push(section.main.temp)
        pressure.push(section.main.pressure)
        humidity.push(section.main.humidity)
        name = action.payload.data.city.name
      });
      temperature = temperature.map((day) => Math.round(((day) - 273.15) * (9/5) + 32))
      pressure = pressure.map((day) => Math.round((day)))
      humidity = humidity.map((day) => Math.round((day)))

      return [{
        name, temperature, pressure, humidity
      }, ...state]
    
    default:
      return state;
  };

  
};

 export default citiesReducer;



