import axios from 'axios';

export const FETCH_LOCATION = "FETCH_LOCATION";

const apiKey = '94b98533e038ecd1e982b96426143136';
const ROOT_URL = 'https://api.openweathermap.org';

export async function fetchLocation(query) {
  const location = await axios.get(`${ROOT_URL}/geo/1.0/direct?q=${query}&appid=${apiKey}`);

  const forecast = await fetchForecast(location.data[0].lat, location.data[0].lon);

  return {
    type: FETCH_LOCATION,
    payload: forecast
  };
};

const fetchForecast = (lat, lon) => axios.get(`${ROOT_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`);