import axios from "axios";

export const FETCH_CITY = "FETCH_CITY";

const ROOT_URL = "https://api.openweathermap.org/data/2.5/forecast?&appid=fde555c101a70d39eb7ec797d3514bce&units=imperial&q=";

export function fetchCities(name) {
  const request = axios.get(`${ROOT_URL}${name}`);
  // update the root url to the format of the search

  return {
    type: FETCH_CITY,
    payload: request,
  }
}