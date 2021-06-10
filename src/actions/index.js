import axios from "axios";
import { saveState } from "../localStorage";

const ROOT_URL = "https://api.openweathermap.org/data/2.5/forecast?q=";
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const FETCH_WEATHER = "FETCH_WEATHER";
export const SET_DEFAULT_CITY = "SET_DEFAULT_CITY";

export function fetchWeather(city) {
  const request = axios.get(
    `${ROOT_URL}${city}&units=imperial&appid=${API_KEY}`
  );

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}

export function setDefaultCity(city) {
  saveState(city);
  return {
    type: SET_DEFAULT_CITY,
  };
}
