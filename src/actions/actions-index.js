import axios from "axios";

const apiKey = "9d09d0ac9e9eed9a59bbdcec2f73ef22"

const ROOT_URL = `https:/api.openweathermap.org/data/2.5/forecast?q=London&appid=${apiKey}&units=imperial`

export const FETCH_CITY = "FETCH_CITY";

export function fetchCity() {
  const request = axios.get(`${ROOT_URL}`).then((call) => console.log(call.data.list))

  return {
    type: FETCH_CITY,
    payload: request
  }
}