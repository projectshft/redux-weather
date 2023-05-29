import axios from "axios";

export const FETCH_FORECAST = "FETCH_FORECAST";

const keyAPI = process.env.REACT_APP_WEATHER_API_KEY

export async function fetchForecast (query) {
  const request = axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + query + '&appid=' + keyAPI + '&units=imperial')

  .then(response => console.log(response))
  .catch(err => console.log(err))
  let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + query + '&appid=' + keyAPI + '&units=imperial');
  console.log(response);
  const data = await response.json();
  console.log(data);

  return {
    type: FETCH_FORECAST,
    payload: request
  };
};