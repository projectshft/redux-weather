//  switch(action.type) {
  //   case FETCH_TEMP:
  //       let dayOne = 0
  //       let dayTwo = 0
  //       let dayThree = 0
  //       let dayFour = 0
  //       let dayFive = 0
  //       let temper = [];
  //      action.payload.data.list.forEach((section, index) => {
  //         if(index <= 7){
  //           dayOne = dayOne + section.main.temp
  //         } else if (index > 7 && index <= 15) {
  //           dayTwo = dayTwo + section.main.temp
  //         } else if (index > 15 && index <= 23) {
  //           dayThree = dayThree + section.main.temp
  //         } else if (index > 23 && index <= 31) {
  //           dayFour = dayFour + section.main.temp
  //         } else if (index > 31 && index <= 40) {
  //           dayFive = dayFive + section.main.temp
  //         }
  //       }); 
  //       temper.push((dayOne/8), (dayTwo/8), (dayThree/8), (dayFour/8), (dayFive/8));
  //       const temperature = temper.map((day) => Math.round(((day-273.15)*(9/5)+32)))
  //       return [{temp: temperature, ...state}]
  
  //   case FETCH_PRESSURE:
  //       let dayOneP = 0
  //       let dayTwoP = 0
  //       let dayThreeP = 0
  //       let dayFourP = 0
  //       let dayFiveP = 0
  //       let press = [];   
  //     action.payload.data.list.forEach((section, index) => {
  //       if(index <= 7){
  //         dayOneP = dayOneP + section.main.pressure
  //       } else if (index > 7 && index <= 15) {
  //         dayTwoP = dayTwoP + section.main.pressure
  //       } else if (index > 15 && index <= 23) {
  //         dayThreeP = dayThreeP + section.main.pressure
  //       } else if (index > 23 && index <= 31) {
  //         dayFourP = dayFourP + section.main.pressure
  //       } else if (index > 31 && index <= 40) {
  //         dayFiveP = dayFiveP + section.main.pressure
  //       }
  //     }); 
  //     press.push((dayOneP/8), (dayTwoP/8), (dayThreeP/8), (dayFourP/8), (dayFiveP/8));
  //     const pressure = press.map((day) => Math.round(day));
  //     return [{pressure: pressure, ...state}]
      
  //   case FETCH_HUMIDITY:
  //     let dayOneH = 0
  //     let dayTwoH = 0
  //     let dayThreeH = 0
  //     let dayFourH = 0
  //     let dayFiveH = 0
  //     let hum = [];   
  //   action.payload.data.list.forEach((section, index) => {
  //     if(index <= 7){
  //       dayOneH = dayOneH + section.main.humidity
  //     } else if (index > 7 && index <= 15) {
  //       dayTwoH = dayTwoH + section.main.humidity
  //     } else if (index > 15 && index <= 23) {
  //       dayThreeH = dayThreeH + section.main.humidity
  //     } else if (index > 23 && index <= 31) {
  //       dayFourH = dayFourH + section.main.humidity
  //     } else if (index > 31 && index <= 40) {
  //       dayFiveH = dayFiveH + section.main.humidity
  //     }
  //   }); 
  //     hum.push((dayOneH/8), (dayTwoH/8), (dayThreeH/8), (dayFourH/8), (dayFiveH/8));
  //     const humidity = hum.map((day) => Math.round(day))
  //     return [{humidity: humidity, ...state}]        
        
  //   case FETCH_ALL:
  //     return [{word: action.payload, ...state}]
  //   default:
  //     return state;
  // };