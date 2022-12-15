import {FETCH_CITYWEATHER} from "../actions";
import _ from "lodash"

//list of reducers which return an array of objects that contain the 5 day weather for a city.
const weatherPostsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CITYWEATHER:
      if(action.payload === undefined){
        return state;
      }
      else{
        const weatherData = action.payload.data.list;
  
        const fiveDayData = (data) => {
          const temp = [];
          const pressure = [];
          const humidity = [];

          data.forEach(element => {
            temp.push(element.main.temp);
            pressure.push(element.main.pressure);
            humidity.push(element.main.humidity);
          })
  
          return({
            city: action.payload.data.city.name.toUpperCase(),
            temp: temp,
            pressure: pressure,
            humidity: humidity,
            tempAve: _.round(_.mean(temp)),
            pressureAve: _.round(_.mean(pressure)),
            humidityAve: _.round(_.mean(humidity))
          })
        }; 

        return [fiveDayData(weatherData),...state];
        
      }
      
    
    default:
      return state;
  }
}

export default weatherPostsReducer