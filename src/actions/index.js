import axios from "axios";

export const FETCH_FORECAST = "FETCH_FORECAST";

const keyAPI = process.env.REACT_APP_WEATHER_API_KEY

export function fetchForecast (query) {
  const request = axios.get('https://api.openweathermap.org/data/2.5/forecast?q=' + query + '&appid=' + keyAPI + '&units=imperial');

  console.log(request);

  return {
    type: FETCH_FORECAST,
    payload: request
  };
};