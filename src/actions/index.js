import axios from "axios";

export const FETCH_FORECAST = "FETCH_FORECAST";
export const ADD_FORECAST = "ADD_FORECAST";

const ROOT_URL = "https://api.openweathermap.org/data/2.5/forecast?q=";
const API_KEY = "&units=imperial&appid=67dd541f698260dd8fa2d7b872c650a3";

export function fetchForecast() {
  const request = axios.get(`${ROOT_URL} + durham + ${API_KEY}`);

  return {
    type: FETCH_FORECAST,
    payload: request,
  };
}

// takes in city from input (createPost ==> addForecast)
export function addForecast(inputCity) {

  const newForecast = Object.assign({}, inputCity);

  const request = axios.get(`${ROOT_URL} + ${newForecast.newCity} + ${API_KEY}`);

  return {
    type: ADD_FORECAST,
    payload: request,
  };
}
