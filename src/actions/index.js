import axios from "axios";
export const FETCH_WEATHER = 'FETCH_WEATHER'


const APIkey = '9e5a7c20aa8e1b300f90d3961db62af6'


export async function fetchWeather(city) {

  const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}`;
  const request = await axios.get(ROOT_URL)
  
  return{
    type: 'FETCH_WEATHER',
    payload: request
  }
}

       