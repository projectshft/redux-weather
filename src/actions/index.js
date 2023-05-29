import axios from "axios";

export const FETCH_FORECAST = "FETCH_FORECAST";

const keyAPI = process.env.REACT_APP_WEATHER_API_KEY

export async function fetchForecast (query) {

  let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + query + '&appid=' + keyAPI + '&units=imperial');
  const data = await response.json();
console.log(data)
  return {
    type: FETCH_FORECAST,
    payload: data
  };
};