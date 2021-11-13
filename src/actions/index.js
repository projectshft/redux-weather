import axios from "axios";

export const FETCH_CITY = "FETCH_CITY";
export const FETCH_TEMPS = "FETCH_TEMPS";


export async function fetchCity(cityName) {
    const CITY_URL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=de711069937febcebc42e40505ff223d";    
    const request = await axios.get(`${CITY_URL}`);
       
    return {
        type: FETCH_CITY,
        payload: request
    };
}




















