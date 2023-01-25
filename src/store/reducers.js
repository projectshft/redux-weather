import { FETCH_CITY, FETCH_CITIES } from "../action-creators/actions";

const citiesReducer = function (state = [], action) {
  switch(action.type) {
    case FETCH_CITY:
      return function () {
        // let dayOne = 0
        // let dayTwo = 0
        // let dayThree = 0
        // let dayFour = 0
        // let dayFive = 0

        // const getFiveDay = action.payload.list.map((section, index) => {
        //   return index <= 7 ? dayOne = dayOne + section.main.temp
        //   : index > 7 && index <= 15 ? dayTwo = dayTwo + section.main.temp 
        //   : index > 15 && index <= 23 ? dayThree = dayThree + section.main.temp
        //   : index > 23 && index <= 31 ? dayFour = dayFour + section.main.temp
        //   : index > 31 && index <= 40 ? dayFive = dayFive + section.main.temp 
        //   : null
        // });

        // let forecast = [dayOne, dayTwo, dayThree, dayFour, dayFive];

        // forecast.map((day) => day/8);
      
      const getFiveDay = action.payload.list.reduce((accumulator, time, index) => {
        
      })

      }
    default:
      return state;
  };
};

 export default citiesReducer

