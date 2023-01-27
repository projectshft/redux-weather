import { FETCH_TEMP } from "../action-creators/actions";

// still only getting a promise but no actual action coming through for our payload

const citiesReducer = function (state = [{}], action) {
  // debugger;

  switch(action.type) {
    case FETCH_TEMP:
        let dayOne = 0
        let dayTwo = 0
        let dayThree = 0
        let dayFour = 0
        let dayFive = 0
        let temperature = [];
       action.payload.data.list.forEach((section, index) => {
          if(index <= 7){
            dayOne = dayOne + section.main.temp
          } else if (index > 7 && index <= 15) {
            dayTwo = dayTwo + section.main.temp
          } else if (index > 15 && index <= 23) {
            dayThree = dayThree + section.main.temp
          } else if (index > 23 && index <= 31) {
            dayFour = dayFour + section.main.temp
          } else if (index > 31 && index <= 40) {
            dayFive = dayFive + section.main.temp
          }
        }); 
        temperature.push((dayOne/8), (dayTwo/8), (dayThree/8), (dayFour/8), (dayFive/8));
        return temperature
        
    default:
      return state;
  };
};

 export default citiesReducer;


