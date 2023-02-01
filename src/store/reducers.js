import { FETCH_WEATHER } from "../action-creators/actions";

const citiesReducer = function (state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      let temperature = [];
      let pressure = [];
      let humidity = [];
      action.payload.data.list.map((section, index) => {
        temperature.push(section.main.temp)
        pressure.push(section.main.pressure)
        humidity.push(section.main.humidity)
      });
      temperature = temperature.map((day) => Math.round(((day) - 273.15) * (9/5) + 32))
      pressure = pressure.map((day) => Math.round((day)))
      humidity = humidity.map((day) => Math.round((day)))

      return [{
        temperature, pressure, humidity
      }, ...state]


    default:
      return state;
  };

  
};

 export default citiesReducer;



//  let temperature = [];
//  let pressure = [];
//  let humidity = [];
//  action.payload.data.list.map((section, index) => {
//    if(index <= 7){
//      temperature[0] = temperature[0] + section.main.temp
//      pressure[0] = pressure[0] + section.main.pressure
//      humidity[0] = humidity[0] + section.main.humidity
//    } else if (index > 7 && index <= 15) {
//      temperature[1] = temperature[1] + section.main.temp
//      pressure[1] = pressure[1] + section.main.pressure
//      humidity[1] = humidity[1] + section.main.humidity
//    } else if (index > 15 && index <= 23) {
//      temperature[2] = temperature[2] + section.main.temp
//      pressure[2] = pressure[2] + section.main.pressure
//      humidity[2] = humidity[2] + section.main.humidity
//    } else if (index > 23 && index <= 31) {
//      temperature[3] = temperature[3] + section.main.temp
//      pressure[3] = pressure[3] + section.main.pressure
//      humidity[3] = humidity[3] + section.main.humidity
//    } else if (index > 31 && index <= 40) {
//      temperature[4] = temperature[4] + section.main.temp
//      pressure[4] = pressure[4] + section.main.pressure
//      humidity[4] = humidity[4] + section.main.humidity
//    }         
//  });
//  temperature = temperature.map((day) => Math.round(((day/8) - 273.15) * (9/5) + 32))
//  pressure = pressure.map((day) => Math.round((day/8)))
//  humidity = humidity.map((day) => Math.round((day/8)))

//  return [{
//    temperature, pressure, humidity
//  }, ...state]