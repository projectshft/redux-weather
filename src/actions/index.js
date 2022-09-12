import axios from "axios";

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const request = axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=66ec2e16b641899c740be1ca99a85a8a&units=imperial`
  );
  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
