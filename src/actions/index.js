import axios from 'axios';

const { REACT_APP_WEATHER_API_KEY } = process.env;

export const FETCH_FORECAST = 'FETCH_FORECAST';
export const FETCH_LOCATION = 'FETCH_LOCATION';

const ROOT_URL = 'https://api.openweathermap.org';

export function fetchForecast({ lat, lon }) {
  const req = axios.get(
    `${ROOT_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${REACT_APP_WEATHER_API_KEY}&units=imperial`
  );
  return {
    type: FETCH_FORECAST,
    payload: req,
  };
}

export function fetchLocation(city) {
  const req = axios.get(
    `${ROOT_URL}/geo/1.0/direct?q=${city}&limit=1&appid=${REACT_APP_WEATHER_API_KEY}`
  );
  req.catch((error) => alert(error));
  return {
    type: FETCH_LOCATION,
    payload: req,
  };
}
