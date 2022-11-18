export const WEATHER_ADD_LOCATION = 'WEATHER_ADD_LOCATION';
export const ADD_LOCATION = 'ADD_LOCATION';

// eslint-disable-next-line arrow-body-style
export const fetchLatitudeLongitude = (query) => {
  return {
    type: ADD_LOCATION,
    payload: query,
    // eslint-disable-next-line prettier/prettier
  }
};

export const fetch5DayWeatherForLocation = () => ({
  type: WEATHER_ADD_LOCATION,
  payload: '5 day weather',
});
