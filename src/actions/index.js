/* eslint-disable no-shadow */
import axios from 'axios';

export const WEATHER_ADD_5DAY = 'WEATHER_ADD_5DAY';
export const WEATHER_ADD_CURRENT = 'WEATHER_ADD_CURRENT';
export const WEATHER_ADD_ALL = 'WEATHER_ADD_ALL';

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API;
console.log(API_KEY);

export const addWeatherData = (forecastCurrentAndLocation, id) => ({
  type: WEATHER_ADD_ALL,
  payload: forecastCurrentAndLocation,
  id,
});

export const fetchLatitudeLongitude = (query = null) => {
  const origin = 'https://api.openweathermap.org/geo/1.0/direct?';

  const params = {
    q: query,
    APPID: API_KEY,
  };

  const request = axios
    .get(origin, { params })
    .then((data) => data)
    .catch((error) => console.log(error));

  return request;
};

export const fetchWeatherData = async (query, lat = null, lon = null) => {
  if (!lat || !lon) {
    const latLon = await fetchLatitudeLongitude(query);

    if (latLon.data.length === 0) {
      return null;
    }
    // if (latLon.data.length === 0) {
    //   return new Promise((resolve, reject) => {
    //     reject(
    //       new Error(
    //         'Could not fetch latitude/longitude for the searched location.'
    //       )
    //     );
    //   });
    // }

    const location = latLon.data[0];

    const forecast = await fetch5DayWeather(location.lat, location.lon);

    const current = await fetchCurrentWeather(location.lat, location.lon);

    return new Promise((resolve) => {
      resolve({ location, forecast, current });
    });
  }
  const forecast = await fetch5DayWeather(lat, lon);

  const current = await fetchCurrentWeather(lat, lon);

  const location = { lat, lon };

  return new Promise((resolve) => {
    resolve({ location, forecast, current });
  });
};

const fetchCurrentWeather = async (lat, lon) => {
  const origin = 'https://api.openweathermap.org/data/2.5/weather?';

  const params = {
    lat,
    lon,
    units: 'imperial',
    APPID: API_KEY,
  };

  const request = await axios.get(origin, { params });

  return request;
};

export const fetch5DayWeather = (lat, lon, id) => {
  if (!lat || !lon) {
    console.error('fetch5DayWeather: no latitude and/or longitude provided');
  }

  const origin = 'https://api.openweathermap.org/data/2.5/forecast';
  const params = {
    lat,
    lon,
    units: 'imperial',
    APPID: API_KEY,
  };

  const request = axios.get(origin, { params });

  return request;
};

export const fetch5DayWeatherForLocation = async (lat, lon, id) => {
  if (!lat || !lon) {
    console.error('fetch5DayWeather: no latitude and/or longitude provided');
  }

  const origin = 'https://api.openweathermap.org/data/2.5/forecast';
  const params = {
    lat,
    lon,
    units: 'imperial',
    APPID: API_KEY,
  };

  const request = await axios.get(origin, { params });

  return {
    type: WEATHER_ADD_5DAY,
    payload: request,
    id,
  };
};

export const fetchCurrentWeatherForLocation = async (lat, lon, id) => {
  const origin = 'https://api.openweathermap.org/data/2.5/weather?';

  const params = {
    lat,
    lon,
    units: 'imperial',
    APPID: API_KEY,
  };

  const request = await axios.get(origin, { params });

  return {
    type: WEATHER_ADD_CURRENT,
    payload: request,
    id,
  };
};
