import axios from "axios";

export const FETCH_CITY = "FETCH_CITY";


export function fetchCity(cityName) {
    const CITY_URL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=af4517becabe6b999a8031c609577a9a";    
    const request = axios.get(`${CITY_URL}`);   
                        
                         

    return {
        type: FETCH_CITY,
        payload: request
    };
}













//api key de711069937febcebc42e40505ff223d

// original api key af4517becabe6b999a8031c609577a9a




