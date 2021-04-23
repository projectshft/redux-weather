import axios from "axios";

export const FETCH_CITY = "FETCH_CITY";

const ROOT_URL = "https://api.openweathermap.org/data/2.5/forecast?&appid=fde555c101a70d39eb7ec797d3514bce&units=imperial&q=";

export function fetchCities(value) {
  const request = axios.get(`${ROOT_URL}${value}`);

  return {
    type: FETCH_CITY,
    payload: request

  }
}
