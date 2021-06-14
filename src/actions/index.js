import axios from "axios";
import { saveState } from "../localStorage";

const ROOT_URL = "https://api.openweathermap.org/data/2.5/forecast?";
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const FETCH_WEATHER = "FETCH_WEATHER";
export const SET_DEFAULT_CITY = "SET_DEFAULT_CITY";
export const GET_LOCATION = "GET_LOCATION";

export function fetchWeather(city) {
  const request = axios.get(
    `${ROOT_URL}q=${city}&units=imperial&appid=${API_KEY}`
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

export function getLocation(latitude, longitude) {
  const request = axios.get(
    `${ROOT_URL}lat=${latitude}&lon=${longitude}&units=imperial&appid=${API_KEY}`
  );

  return {
    type: GET_LOCATION,
    payload: request,
  };
}
