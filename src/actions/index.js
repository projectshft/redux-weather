import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';

const ROOT_URL ="https://api.openweathermap.org/data/2.5/forecast?&appid=cd76c774bc0b264db59af1018ee76da0&units=imperial&q=";

export function fetchWeather(query){
    const request = axios.get(`${ROOT_URL}` + query);

    return {
      type: FETCH_WEATHER,
      payload: request
    };
  }


