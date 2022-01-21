import axios from "axios";

export const FETCH_CITY = "FETCH_CITY";

export function fetchCity(city) {
  const request = axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=` + city + '&appid=fdd8af8a3e30c285eb8fc233ad4d545d');

  return {
    type: FETCH_CITY,
    payload: request,
  };
}

