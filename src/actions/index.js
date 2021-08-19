import axios from 'axios';

export const FETCH_WEATHER = "FETCH_WEATHER";

const ROOT_URL = 'https://api.openweathermap.org/data/2.5/forecast?q=';

export function fetchWeather(searchTerm) {
  const request = axios.get(`${ROOT_URL}${searchTerm}&units=imperial&appid=` + process.env.REACT_APP_API_KEY)
  

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}