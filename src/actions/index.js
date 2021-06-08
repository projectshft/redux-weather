import axios from "axios";

const ROOT_URL = "https://api.openweathermap.org/data/2.5/forecast?q=";
const API_KEY = "345e1c9864ad7ebda8d87ea4d60c53f1";

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  // need to hide API key
  const request = axios.get(
    `${ROOT_URL}${city}&units=imperial&appid=${API_KEY}`
  );

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
