import axios from 'axios';

export const FETCH_WEATHER = "FETCH_WEATHER";

const ROOT_URL = "https://api.openweathermap.org/data/2.5/forecast?q=austin&units=imperial&appid=" + process.env.API_KEY;

export function fetchWeather() {
  const request = axios.get(`${ROOT_URL}`)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}