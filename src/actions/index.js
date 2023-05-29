import axios from "axios";

export const FETCH_FORECAST = "FETCH_FORECAST";

// stored API key in environment variable
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?q='

// action to get forecast data from weather API
export function fetchForecast(query) {
  const request = axios.get(`${urlForecast}${query.city}&appid=${API_KEY}&units=imperial`)

  return {
    type: FETCH_FORECAST,
    payload: request
  }
}

