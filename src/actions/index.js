import axios from 'axios'

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=75e7ccabdef5725374998f0c3f3798b2`;

  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
