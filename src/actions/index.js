import axios from 'axios';

export const FETCH_FORECAST = 'FETCH_FORECAST';
export const FETCH_FORECAST_ERROR = 'FETCH_FORECAST_ERROR';
const API_KEY = '9de0841aea702821eece6900aab8d8f1';
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=imperial`;

export async function fetchForecast(city) {
  const request = await axios.get(`${API_URL}&q=${city}`);
  const error = 'This city was not found';

  if (request.data.cod === '404') {
    return {
      type: FETCH_FORECAST_ERROR,
      payload:{error}
    };
  } else {
    return {
      type: FETCH_FORECAST,
      payload: request
  }}; 
}
