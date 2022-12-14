import axios from 'axios';

export const GET_WEATHER = 'GET_WEATHER'
export function getWeather(city){
  const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=75e7ccabdef5725374998f0c3f3798b2`);
  
  return {
    type: GET_WEATHER,
    payload: request
  }
}
