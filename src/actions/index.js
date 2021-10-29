import axios from "axios";

export const FETCH_CITY = "FETCH_CITY";

const ROOT_URL = "https://api.openweathermap.org/data/2.5/forecast?q=";

export function fetchCity(cityName) {
    const CITY_URL = ROOT_URL + cityName + "&appid=af4517becabe6b999a8031c609577a9a";
    
    const request = axios.get(`${CITY_URL}`);

    return {
        type: FETCH_CITY,
        payload: request
    };

}









//api key af4517becabe6b999a8031c609577a9a

