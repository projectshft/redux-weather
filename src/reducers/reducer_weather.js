import {FETCH_CITYWEATHER} from "../actions";


//list of reducers which return an array of objects that contain the 5 day weather for a city.
const weatherPostsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CITYWEATHER: 
      const weatherData = action.payload.data;
      const fiveDayData = (data) => {
        const temp = [];
        const pressure = [];
        const humidity = [];
        for (let i = 0; i < action.payload.data.list.length; i+=8) {
          temp.push(action.payload.data.list[i].main.temp);
          pressure.push(action.payload.data.list[i].main.pressure);
          humidity.push(action.payload.data.list[i].main.humidity);
        };
        return({
          city: action.payload.data.city.name.toUpperCase(),
          temp: temp,
          pressure: pressure,
          humidity: humidity,
        })
      }; 
      return [fiveDayData(weatherData),...state];
    default:
      return state;
  }
}

export default weatherPostsReducer