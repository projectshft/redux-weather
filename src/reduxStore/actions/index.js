export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (value) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=24ffb93bb212888072d4ae0e9d44b8c5&units=metric`
  )
    .then((response) => response.json())
    .then((json) => console.log(json));
};
