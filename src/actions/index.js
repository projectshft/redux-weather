import axios from "axios";

export const FETCH_WEATHER = "FETCH_WEATHER";

const ROOT_URL = "https://api.openweathermap.org/data/2.5/forecast?q=raleigh&appid=bbc14ddfa56edcf6519c2efeb3c1ba71";


export function fetchWeather () {
  const request = axios.get(`${ROOT_URL}`);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}