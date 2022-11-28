import axios from "axios";

// TO DO: move the API KEY to an .env file
export const API_KEY = "c60d7d92799f3cf527b48cf6335c9cc5";

export const ROOT_URL = "https://api.openweathermap.org/data/2.5/forecast?";
export const FETCH_WEATHER = "FETCH_WEATHER";

// e.target.value currently returns undefined
export function fetchWeather(e) {
  e.preventDefault();

  const request = axios.get(`${ROOT_URL}q=${e.target.value}$appid=${API_KEY}`)
    .then(response => console.log(response)
    .catch(err => console.error(err)));

  debugger;
  console.log(request);

  console.log(e)

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
};