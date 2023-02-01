import axios from "axios";
export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather (city) {

  const query = axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=651b4326c31add8e66f753623aae609d`)

  return {
    type: FETCH_WEATHER,
    payload: query
  };
}

//fETCH ALL COMING SOON