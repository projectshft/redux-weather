//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
//const API_KEY = process.env.REDUX_APP_WEATHER_API_KEY
import axios from "axios";

export const FETCH_CITYWEATHER = "FETCH_CITYWEATHER";

const ROOT_URL = "https://api.openweathermap.org/data/2.5";

//NOT SURE HOW TO DO ERROR, TRY , CATCH
export function fetchCityWeather(city) {
 
  const request = axios.get(`${ROOT_URL}/forecast?q=${city}&appid=d2ebbe84afd80c9a2267505ea9c93841`)
  .catch(err=> {
    console.log(`City not found. Input a valid city! Err code: ${err}`)
  })

  return {
    type: FETCH_CITYWEATHER,
    payload: request,
  }
}