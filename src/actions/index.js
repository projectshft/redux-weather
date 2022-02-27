import axios from 'axios';

export const FORECAST_RECEIVED = 'FORECAST_RECEIVED';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const getForecast = (city) => {
  const coordsRequest = axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city.trim()}&limit=5&appid=${API_KEY}`
  );

  const forecastsRequest = coordsRequest
    .then((response) =>
      axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=${API_KEY}`
      )
    )
    .catch((error) => error);

  return {
    type: FORECAST_RECEIVED,
    payload: forecastsRequest,
  };
};
