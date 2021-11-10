import axios from "axios";
export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(query) {
  const request = axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=imperial&appid=5e5a03c24f89b112d6b16ccfccf14576`);

  return {
    type: 'FETCH_WEATHER',
    payload: request
  }
}
