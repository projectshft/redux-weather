import axios from "axios";

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=9ee788adf1c5adbf88a7e15599e681a2`
    )
    .then((response) => {
      return {
        type: FETCH_WEATHER,
        payload: response,
      };
    })
    .catch((error) => {
      alert("Invalid Input");
    });
}
