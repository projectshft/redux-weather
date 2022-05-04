import axios from "axios";

export const FETCH_CITY = "FETCH_CITY";

const API_KEY = 'eef46e88eea99fdfcbf3e442af90b863';

export const fetchCity = (city) => {
    const cityWeather = axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`, {baseURL: ''}).catch(error => {
        //possibly only return something if no error?
    });

    return {
        type: FETCH_CITY,
        payload: cityWeather
    }
}