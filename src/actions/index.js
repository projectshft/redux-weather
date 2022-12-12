//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
import axios from "axios";

export const FETCH_CITYWEATHER = "FETCH_CITYWEATHER";

const ROOT_URL = "api.openweathermap.org/data/2.5";
//const API_KEY = process.env.REDUX_APP_WEATHER_API_KEY

export function fetchCityWeather(city) {
  const request = axios.get(`${ROOT_URL}/forecast?q=${city}&appid=d2ebbe84afd80c9a2267505ea9c93841`);
  console.log(`${ROOT_URL}/forecast?q=${city}&appid=d2ebbe84afd80c9a2267505ea9c93841`);
  return {
    type: FETCH_CITYWEATHER,
    payload: request,
    
  }
}