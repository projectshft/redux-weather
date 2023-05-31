import axios from "axios";
export const FETCH_WEATHER = "FETCH_WEATHER";
export const FETCH_AVERAGE = "FETCH_AVERAGE";


export function fetchWeather (city) {

  const search = axios.get(`api.openweathermap.org/data/2.5/forecast?q=${city}&appid=40a22fcb01995614a7b68804376359eb`)

  return {
    type:FETCH_WEATHER,
    payload: search
  };
}

export function featherAvg (math) {

  return {
    type:FETCH_AVERAGE,
    payload: { math
    }
  }
};
