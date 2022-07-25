export const FETCH_WEATHER = 'FETCH_WEATHER';
export const API_ERROR = 'API_ERROR';

export const fetchWeather = (value, dispatch) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=24ffb93bb212888072d4ae0e9d44b8c5&units=metric`
  )
    .then((response) => response.json())
    .then((weather) => dispatch({ type: FETCH_WEATHER, payload: weather }))
    .catch((error) => dispatch({ type: API_ERROR, error }));
};

//  .catch((error) => dispatch({type: API_ERROR, payload: })
