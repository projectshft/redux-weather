import axios from "axios";
import appKey from "../components/apiKeys";

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(query) {
  const request = axios.get('https://api.openweathermap.org/data/2.5/forecast?', {
    params: {
      q: query,
      appid: appKey
    }
  })

  return  {
    type: FETCH_WEATHER,
    payload: request
  } 
}