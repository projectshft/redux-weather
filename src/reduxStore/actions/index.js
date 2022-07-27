export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (value, dispatch) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=24ffb93bb212888072d4ae0e9d44b8c5&units=imperial`
  )
    .then((response) => response.json())
    .then((weather) => {
      if (weather.cod === '404') {
        alert(`${weather.message}`);
        console.log(weather.cod);
      } else {
        dispatch({ type: FETCH_WEATHER, payload: weather });
      }
    });
};
