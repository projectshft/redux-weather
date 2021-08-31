import axios from "axios";
export const CITY_WEATHER = "CITY_WEATHER";

export function fetchWeather(city) {
  const response = axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=2c4baca6838a60e1041d1d7a0305fbf7`)
  return {
    type: CITY_WEATHER,
    payload: response
  }
}