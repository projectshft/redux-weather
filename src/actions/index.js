import axios from 'axios';

export const FORECAST_RECEIVED = 'FORECAST_RECEIVED';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

// helper function for getForecast
const weatherDataCleaner = (responseObj) => {
  const forecastTemplate = {
    city: responseObj.city,
    temperature: [],
    pressure: [],
    humidity: [],
  };

  const weatherDataObject = responseObj.forecastResponse.data.list.reduce(
    (forecastInProgress, weatherPoint) => {
      forecastInProgress.temperature.push(weatherPoint.main.temp);
      forecastInProgress.pressure.push(weatherPoint.main.pressure);
      forecastInProgress.humidity.push(weatherPoint.main.humidity);

      return forecastInProgress;
    },
    forecastTemplate
  );

  return weatherDataObject;
};

export const getForecast = (city) => {
  const coordsRequest = axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city.trim()}&limit=5&appid=${API_KEY}`
  );

  const forecastsRequest = coordsRequest
    .then(
      (coordResponse) =>
        new Promise((resolve) => {
          // need to return a new promise that wraps the city name and resolved forecast promise instead of simply returning the forecast API promise
          // because promise middleware doesn't work if the payload is an object with a promise as a value.
          axios
            .get(
              `http://api.openweathermap.org/data/2.5/forecast?lat=${coordResponse.data[0].lat}&lon=${coordResponse.data[0].lon}&units=imperial&appid=${API_KEY}`
            )
            .then((forecastResponse) => {
              resolve({
                city: coordResponse.data[0].local_names.en,
                forecastResponse,
              });
            });
        })
    )
    .then(weatherDataCleaner)
    .catch((error) => Promise.reject(error));

  return {
    type: FORECAST_RECEIVED,
    payload: forecastsRequest,
  };
};
