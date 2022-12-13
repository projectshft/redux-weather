import {FETCH_CITYWEATHER} from "../actions";



const weatherPostsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CITYWEATHER: 
      const temp = [];
      const pressure = [];
      const humidity = [];
      for (let i = 0; i < action.payload.data.list.length; i+=8) {
        temp.push(action.payload.data.list[i].main.temp);
        pressure.push(action.payload.data.list[i].main.pressure);
        humidity.push(action.payload.data.list[i].main.humidity);
      };
      const fiveDayData = {
        city: action.payload.data.city.name,
        temp: temp,
        pressure: pressure,
        humidity: humidity,
      }; 
      return [fiveDayData,...state];
    default:
      return state;
  }
}

export default weatherPostsReducer