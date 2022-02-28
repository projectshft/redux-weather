import axios from "axios";
import appKey from "../components/apiKeys";

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather() {
  const request = axios.get('https://api.openweathermap.org/data/2.5/forecast?', {
    params: {
      lat: 35,
      lon: 139,
      appid: appKey
    }
  })

  return  {
    type: FETCH_WEATHER,
    payload: request
  }
}