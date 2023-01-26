import { FETCH_CITY, FETCH_CITIES } from "../action-creators/actions";

// still only getting a promise but no actual action coming through for our payload

const citiesReducer = function (state = [], action) {
  switch(action.type) {
    case FETCH_CITY:
      return function () {    
        const getFiveDay = action.payload.data.list.reduce((accumulator, time, index) => {
          index <= 7 ? accumulator['one'] = accumulator['one'] + time.main.temp
          : index > 7 && index <= 15 ? accumulator['two'] = accumulator['two'] + time.main.temp
          : index > 15 && index <= 23 ? accumulator['three'] = accumulator['three'] + time.main.temp
          : index > 23 && index <= 31 ? accumulator['four'] = accumulator['four'] + time.main.temp
          : index > 31 && index <= 40 ? accumulator['five'] = accumulator['five'] + time.main.temp
          : console.log('none')

          return accumulator
        }, {})
        console.log(getFiveDay)
      }
    default:
      return state;
  };
};

 export default citiesReducer;





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

