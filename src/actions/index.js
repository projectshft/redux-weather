import axios from "axios";

export const FETCH_WEATHER = "FETCH_WEATHER";
export const CHECK_LOCAL = "CHECK_LOCAL";

export function fetchWeather(cityName) {
  const request = axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=66ec2e16b641899c740be1ca99a85a8a&units=imperial`
  );
  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}

export function checkLocal(lat, lon) {
  const request = axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=66ec2e16b641899c740be1ca99a85a8a&units=imperial`
  );

  return {
    type: CHECK_LOCAL,
    payload: request,
  };
}
