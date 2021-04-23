import axios from "axios";

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=1fc1127bc926b88b171314897133dde9`)
  .then(response => {
    return {
      type: FETCH_WEATHER,
      payload: response
    }
  })
  .catch(error => {
    alert('Bad input, try again');
  })}