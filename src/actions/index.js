import axios from 'axios';

const ROOT_URL = 'https://api.openweathermap.org/data/2.5/forecast?q='
const API_KEY = '75e7ccabdef5725374998f0c3f3798b2';

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(input) {

  const request = axios.get(`${ROOT_URL}${input}&units=imperial&appid=${API_KEY}`)

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}