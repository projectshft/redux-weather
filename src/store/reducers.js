import { FETCH_CITY } from "../action-creators/actions";

// still only getting a promise but no actual action coming through for our payload

const citiesReducer = function (state = [], action) {
  // debugger;

  switch(action.type) {
    case FETCH_CITY:
      return action.payload.data.list
    default:
      return state;
  };
};

 export default citiesReducer;


//  function (type) {
//   let dayOne = 0
//   let dayTwo = 0
//   let dayThree = 0
//   let dayFour = 0
//   let dayFive = 0

//   let temperature = [];
//   let pressure = [];
//   let humidity = [];

//   action.payload.data.list.map((section, index) => {
//     if(index <= 7) {
//       dayOne = dayOne + section.main.type
//     } else if (index > 7 && index <= 15) {
//       dayTwo = dayTwo + section.main.type
//     } else if (index > 15 && index <= 23) {
//       dayThree = dayThree + section.main.type
//     } else if (index > 23 && index <= 31) {
//       dayFour = dayFour + section.main.type
//     } else if (index > 31 && index <= 40) {
//       dayFive = dayFive + section.main.type
//     }

//     if(type === 'temp') {
//       temperature = [...dayOne, ...dayTwo, ...dayThree, ...dayFour, ...dayFive];
//     } else if(type === 'pressure') {
//       pressure = [...dayOne, ...dayTwo, ...dayThree, ...dayFour, ...dayFive];
//     } else if(type === 'humidity') {
//       humidity = [...dayOne, ...dayTwo, ...dayThree, ...dayFour, ...dayFive];
//     }

//     return {
//       temperature: temperature,
//       pressure: pressure,
//       humidity: humidity
//     }

//   });
// }