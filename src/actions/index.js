//5 day weather
//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

export const FETCH_WEATHER = "FETCH_WEATHER";




export function fetchWeather(city) {
  //cityWeather = 
  
  return {
    type: FETCH_WEATHER,
    payload: city
  }
}