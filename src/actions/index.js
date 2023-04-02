import axios from "axios";

export const FETCH_FORECAST = "FETCH_FORECAST";
// const API_KEY="ed82dafb0490d14952ef1d1117c72baf";
// const ROOT_URL = 'https://api.openweathermap.org/data/2.5/forecast?q='

export /*async*/ function fetchForecast(query) {
  const request = axios.get('https://api.openweathermap.org/data/2.5/forecast?q=' + query + '&appid=ed82dafb0490d14952ef1d1117c72baf&units=imperial')
  
  // .then(response => console.log(response))
  // .catch(err => console.log(err))
  // let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + value + '&APPID=dbf00d7a4d89a57ebdfde37bc29c465b&units=metric');
  // console.log(response);
  // const data = await response.json();
  // console.log(data);
  return {
    type: FETCH_FORECAST,
    payload: request
  };
}