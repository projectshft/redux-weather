export const WEATHER_ADD_ALL = 'WEATHER_ADD_ALL';

export const addWeatherData = (forecastCurrentAndLocation, id) => ({
  type: WEATHER_ADD_ALL,
  payload: forecastCurrentAndLocation,
  id,
});
