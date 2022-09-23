// import axios from "axios";


export function displayWeather(query) {
  // const request = axios.get("http://api.openweathermap.org/geo/1.0/direct?q="+query+"&limit=1&appid=88f3a5b06c7349e901851ad64cc7758c");
  // request.then(() => callback());
  const string = query.toUpperCase()
  

  return {
    type: "DISPLAY_WEATHER",
    payload: string
  };
}



