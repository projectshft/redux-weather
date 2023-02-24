import axios from "axios"

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(query) {
  const request = axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=4df43207cfa7a1f67f6f7fbd99044f1c&units=imperial`)


  console.log(request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}