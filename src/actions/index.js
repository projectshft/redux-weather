
import axios from 'axios';


export const FETCH_FORECAST = 'FETCH_FORECAST';

const API_KEY = '9de0841aea702821eece6900aab8d8f1';
// todo: add city parameter
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?q=tulsa&appid=${API_KEY}&units=metric`;

 
    
export function fetchForecast() {
  // todo: wire up city from search bar
  console.log('hi');
  const request = axios.get(`${API_URL}`);
  console.log(request);
  return {
    type: FETCH_FORECAST,
    payload: request
  };
}