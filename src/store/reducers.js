import { FETCH_WEATHER } from "../action-creators/actions";

// still only getting a promise but no actual action coming through for our payload

const citiesReducer = function (state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      let temper = [0, 0, 0, 0, 0];
      let press = [0, 0, 0, 0, 0];
      let humid = [0, 0, 0, 0, 0];
      action.payload.data.list.map((section, index) => {
        if(index <= 7){
          temper[0] = temper[0] + section.main.temp
          press[0] = press[0] + section.main.pressure
          humid[0] = humid[0] + section.main.humidity
        } else if (index > 7 && index <= 15) {
          temper[1] = temper[1] + section.main.temp
          press[1] = press[1] + section.main.pressure
          humid[1] = humid[1] + section.main.humidity
        } else if (index > 15 && index <= 23) {
          temper[2] = temper[2] + section.main.temp
          press[2] = press[2] + section.main.pressure
          humid[2] = humid[2] + section.main.humidity
        } else if (index > 23 && index <= 31) {
          temper[3] = temper[3] + section.main.temp
          press[3] = press[3] + section.main.pressure
          humid[3] = humid[3] + section.main.humidity
        } else if (index > 31 && index <= 40) {
          temper[4] = temper[4] + section.main.temp
          press[4] = press[4] + section.main.pressure
          humid[4] = humid[4] + section.main.humidity
        }         
      });
      temper = temper.map((day) => Math.round(((day/8) - 273.15) * (9/5) + 32))
      press = press.map((day) => Math.round((day/8)))
      humid = humid.map((day) => Math.round((day/8)))

      return [{
        temper, press, humid
      }, ...state]


    default:
      return state;
  };

  
};

 export default citiesReducer;



//  function findTemp () {
//   let dayOne = 0
//   let dayTwo = 0
//   let dayThree = 0
//   let dayFour = 0
//   let dayFive = 0
//   let temper = [];
//   action.payload.data.list.forEach((section, index) => {
//     if(index <= 7){
//       dayOne = dayOne + section.main.temp
//     } else if (index > 7 && index <= 15) {
//       dayTwo = dayTwo + section.main.temp
//     } else if (index > 15 && index <= 23) {
//       dayThree = dayThree + section.main.temp
//     } else if (index > 23 && index <= 31) {
//       dayFour = dayFour + section.main.temp
//     } else if (index > 31 && index <= 40) {
//       dayFive = dayFive + section.main.temp
//     }
//   }); 
//     temper.push((dayOne/8), (dayTwo/8), (dayThree/8), (dayFour/8), (dayFive/8));
//     const temperature = temper.map((day) => Math.round(((day-273.15)*(9/5)+32)))
//     return temperature
// }       
// function findPressure () {
// let dayOneP = 0
// let dayTwoP = 0
// let dayThreeP = 0
// let dayFourP = 0
// let dayFiveP = 0
// let press = [];        
// action.payload.data.list.forEach((section, index) => {
//   if(index <= 7){
//     dayOneP = dayOneP + section.main.pressure
//   } else if (index > 7 && index <= 15) {
//     dayTwoP = dayTwoP + section.main.pressure
//   } else if (index > 15 && index <= 23) {
//     dayThreeP = dayThreeP + section.main.pressure
//   } else if (index > 23 && index <= 31) {
//     dayFourP = dayFourP + section.main.pressure
//   } else if (index > 31 && index <= 40) {
//     dayFiveP = dayFiveP + section.main.pressure
//   }
// }); 
//   press.push((dayOneP/8), (dayTwoP/8), (dayThreeP/8), (dayFourP/8), (dayFiveP/8));
//   const pressure = press.map((day) => Math.round(day));
//   return pressure
// }      
// function findHumidity () {
// let dayOneH = 0
// let dayTwoH = 0
// let dayThreeH = 0
// let dayFourH = 0
// let dayFiveH = 0
// let hum = [];      
// action.payload.data.list.forEach((section, index) => {
//   if(index <= 7){
//     dayOneH = dayOneH + section.main.humidity
//   } else if (index > 7 && index <= 15) {
//     dayTwoH = dayTwoH + section.main.humidity
//   } else if (index > 15 && index <= 23) {
//     dayThreeH = dayThreeH + section.main.humidity
//   } else if (index > 23 && index <= 31) {
//     dayFourH = dayFourH + section.main.humidity
//   } else if (index > 31 && index <= 40) {
//     dayFiveH = dayFiveH + section.main.humidity
//   }
// }); 
//   hum.push((dayOneH/8), (dayTwoH/8), (dayThreeH/8), (dayFourH/8), (dayFiveH/8));
//   const humidity = hum.map((day) => Math.round(day))
//   return humidity
// } 

// return [{
//   temperature: findTemp(),
//   pressure: findPressure(),
//   humidity: findHumidity()}
// , ...state]

