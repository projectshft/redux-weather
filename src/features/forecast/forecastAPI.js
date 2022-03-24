import axios from "axios";
const ROOT_URL =  `https://api.openweathermap.org/data/2.5/forecast`;
const API_KEY = "948ee37ea38c7bc204af5017eb8a2c87";

export function getFiveDayForecast(city) {
    return axios.get(`${ROOT_URL}?q=${city}&units=imperial&&appid=${API_KEY}`);
  }
  