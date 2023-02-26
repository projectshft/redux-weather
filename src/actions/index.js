import axios from "axios"
const API_KEY = process.env.REACT_APP_API_KEY;
export const FETCH_WEATHER = "FETCH_WEATHER";


export function fetchWeather(query) {
  const request = axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${API_KEY}&units=imperial`)

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}