import axios from 'axios';

const API_KEY = 'a4105833f7852b16b55b0723a6b147e5';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}&units=imperial`;
  const request = axios.get(url).then(function(response){

    const weatherInfo = response.data
    //add .list to access 40arrays
      // city: 
      
      // temp: response.data,
      // pressure: response.data,
      // humidity: response.data
    
    // console.log("response", response.data.city.name, response.data.list[0].main.temp, response.data.list[0].main.pressure, response.data.list[0].main.humidity);
    console.log('weatherInfo', weatherInfo);
    
    // const tempData = {temp: response.data.list[0].main.temp}
    // const pressureData = {pressure: response.data.list[0].main.pressure}
    // const humidityData = {humidity: response.data.list[0].main.humidity}
    return weatherInfo;
  });


  return {
    type: FETCH_WEATHER,
    payload: request
  }
}