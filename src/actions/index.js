import axios from "axios";

export const FETCH_CITY = "FETCH_CITY";

const API_KEY = 'eef46e88eea99fdfcbf3e442af90b863';

export const fetchCity = () => {
    // console.log('fetching city');
    const cityWeather = axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=tucson&appid=${API_KEY}`, {baseURL: ''});

    return {
        type: FETCH_CITY,
        payload: cityWeather
    }
}