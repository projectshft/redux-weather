import axios from "axios";

export const FETCH_FORECAST = "FETCH_FORECAST"
export const ADD_FORECAST = "ADD_FORECAST"

const ROOT_URL = "https://api.openweathermap.org/data/2.5/forecast?q="
const API_KEY = "&units=imperial&appid=67dd541f698260dd8fa2d7b872c650a3";

// 5-day weather api + key:
// "https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&appid=67dd541f698260dd8fa2d7b872c650a3",

export function fetchForecast() {
  const request = axios.get(`${ROOT_URL} + Durham + ${API_KEY}`);

  return {
    type: FETCH_FORECAST,
    payload: request,
  }
}

// takes in city from input (createPost ==> addForecast)
export function addForecast(inputCity) {
const newForecast = Object.assign({}, inputCity);

  return {
    type: ADD_FORECAST,
    payload: newForecast,
  }
}