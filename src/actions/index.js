import axios from "axios";
import config from "../config";

export const FETCH_FORECAST = "FETCH_FORECAST";

export function fetchForecast(cityName) {
  const request = axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=${config.apiKey}`
  );

  return {
    type: FETCH_FORECAST,
    payload: request,
  };
}
