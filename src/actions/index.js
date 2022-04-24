import axios from "axios";

export const FETCH_CITY = "FETCH_CITY";

const ROOT_URL = "https://api.openweathermap.org/data/2.5/forecast?appid=6dfa5fa1e6c3d2353bb1a165e2634ef1&units=imperial";

export function fetchCity(data) {
  const request = axios.get(`${ROOT_URL}&q=${data}`)

  return {
    type: FETCH_CITY,
    payload: request
  };
}