import axios from 'axios';

export const FETCH_LOCATION = 'FETCH_LOCATION';

const API_KEY = process.env.REACT_APP_API_KEY;
const ROOT_URL = 'https://api.openweathermap.org';

export function fetchLocation(query) {
  const forecast = fetchCoordinates(query)
    .then((response) =>
      fetchForecast(response.data[0].lat, response.data[0].lon)
    )
    .catch((error) => null);

  return {
    type: FETCH_LOCATION,
    payload: forecast
  };
}

const fetchCoordinates = (query) =>
  axios.get(`${ROOT_URL}/geo/1.0/direct?q=${query}&appid=${API_KEY}`);

const fetchForecast = (lat, lon) =>
  axios.get(
    `${ROOT_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`
  );
