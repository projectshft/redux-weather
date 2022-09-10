import axios from 'axios';


export const FETCH_FORECAST = 'FETCH_FORECAST';

const API_KEY = '9de0841aea702821eece6900aab8d8f1';
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;

    
export async function fetchForecast(city) {

  const request = await axios.get(`${API_URL}&q=${city}`);
  // console.log(request);
  
  return {
    type: FETCH_FORECAST,
    payload: request
  };
}