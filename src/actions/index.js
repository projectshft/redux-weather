import axios from "axios";
import config from "../config";

export const FETCH_FORECAST = "FETCH_FORECAST";

export function fetchForecast(cityName) {
  const request = axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=${config.weatherApiKey}`
  );

  return {
    type: FETCH_FORECAST,
    payload: request,
  };
}

export function fetchForecastLatandLong(lat, lon) {
  const request = axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${config.weatherApiKey}`
  );

  return {
    type: FETCH_FORECAST,
    payload: request,
  };
}

export const SET_DEFAULT_CITY = "SET_DEFAULT_CITY";

export function setDefaultCity(cityName) {
  return {
    type: SET_DEFAULT_CITY,
    payload: cityName,
  };
}
