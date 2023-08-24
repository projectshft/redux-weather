import axios from 'axios';

export const FETCH_LOCATION = "FETCH_LOCATION";

const apiKey = '94b98533e038ecd1e982b96426143136';
const ROOT_URL = 'https://api.openweathermap.org';

export function fetchLocation(query) {
  const forecast = fetchCoordinates(query)
    .then((response) => fetchForecast(response.data[0].lat, response.data[0].lon))
    .catch((error) => null);

  return {
    type: FETCH_LOCATION,
    payload: forecast
  };
};

const fetchCoordinates = (query) => {
  return axios
  .get(`${ROOT_URL}/geo/1.0/direct?q=${query}&appid=${apiKey}`)
};

const fetchForecast = (lat, lon) => {
  return axios
    .get(`${ROOT_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`)
};