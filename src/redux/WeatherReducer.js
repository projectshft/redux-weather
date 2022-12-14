import axios from 'axios';

const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=75e7ccabdef5725374998f0c3f3798b2`


export const FETCH_WEATHER = 'FETCH_WEATHER'


export function getweather(city){
  const url = '';
  const req = axios.get(URL);
  return {
    type: FETCH_WEATHER,
    payload: request
  }

}