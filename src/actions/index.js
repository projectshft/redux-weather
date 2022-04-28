import axios from "axios";

export const FETCH_CITY = "FETCH_CITY";

const API_KEY = 'eef46e88eea99fdfcbf3e442af90b863';

export const fetchCity = () => {
    const cityWeather = axios.get(`api.openweathermap.org/data/2.5/forecast?q=tuscon&appid=${API_KEY}`);

    return {
        type: FETCH_CITY,
        payload: cityWeather
    }
}