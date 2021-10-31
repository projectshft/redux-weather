import axios from "axios";

export const FETCH_CITY = "FETCH_CITY";
export const FETCH_CITIES = "FETCH_CITIES";

const ROOT_URL = "https://api.openweathermap.org/data/2.5/weather?q=columbia&units=imperial&appid=de711069937febcebc42e40505ff223d";

export function fetchCity(cityName) {
    const CITY_URL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=de711069937febcebc42e40505ff223d";    
    const request = axios.get(`${CITY_URL}`);

    return {
        type: FETCH_CITY,
        payload: request
    };
}

export function fetchCities() {
    const request = axios.get(`${ROOT_URL}`);

    return {
        type: FETCH_CITIES,
        payload: request
    };
}











//api key de711069937febcebc42e40505ff223d




