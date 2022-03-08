import axios from "axios";
const ROOT_URL =  `https://api.openweathermap.org/data/2.5/weather`;
const API_KEY = "948ee37ea38c7bc204af5017eb8a2c87";

export function fetchCityWeather(city) {
    return axios.get(`${ROOT_URL}?q=${city}&appid=${API_KEY}`);
  }
  