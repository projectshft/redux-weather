import axios from 'axios';


export const FETCH_FORECAST = 'FETCH_FORECAST';

const API_KEY = '9de0841aea702821eece6900aab8d8f1';
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

 
    
export function fetchForecast() {
  let city = $('#search-city').val();
  const request = axios.get(`${API_URL}`);

  return {
    type: FETCH_FORECAST,
    payload: request
  };
}