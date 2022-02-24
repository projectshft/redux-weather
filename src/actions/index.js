import axios from "axios";

export const FETCH_WEATHER = "FETCH_WEATHER";
export const SET_ERROR = "SET_ERROR";

const ROOT_URL = "https://api.openweathermap.org/data/2.5/forecast";

//Fetch 5-day weather data using axios
export function fetchWeather(city) {
  const request = axios.get(
    `${ROOT_URL}/?q=${city}&appid=5de1b63f3ad7c2600e3f33f10036d1ec&units=imperial`
  );

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}

export function setError(errors) {
  return {
    type: SET_ERROR,
    payload: errors,
  };
}
