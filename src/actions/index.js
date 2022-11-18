import axios from 'axios';

export const WEATHER_ADD_5DAY = 'WEATHER_ADD_5DAY';
export const WEATHER_ADD_CURRENT = 'WEATHER_ADD_CURRENT';
export const ADD_LOCATION = 'ADD_LOCATION';

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API;
console.log(API_KEY);

// eslint-disable-next-line arrow-body-style
export const fetchLatitudeLongitude = (query = null) => {
  // if (!query) {
  //   const success = (pos) => {
  //     console.log('success');
  //     const lat = pos.coords.latitude;
  //     const lon = pos.coords.longitude;
  //     debugger;
  //     return { lat, lon };
  //   };

  //   const error = (err) => {
  //     console.warn(`ERROR(${err.code}): ${err.message}`);
  //   };

  //   navigator.geolocation.getCurrentPosition(success, error);
  // }
  // //  else {
  const origin = 'https://api.openweathermap.org/geo/1.0/direct?';

  const params = {
    q: query,
    APPID: API_KEY,
  };

  const request = axios
    .get(origin, { params })
    .then((data) => data)
    .catch((error) => console.log(error));

  // const request = axios.get(origin, { params });

  return request;
  // }
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
