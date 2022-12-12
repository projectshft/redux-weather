import axios from "axios";

export const API_KEY = process.env.REACT_APP_API_KEY;
export const FETCH_WEATHER = "FETCH_WEATHER";

// gets data from a weather API and returns the desired data
export async function fetchWeather(search) {
  const fiveDayForecastURL = (`https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=imperial&appid=${API_KEY}`);
  const currentWeatherURL = (`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=${API_KEY}`);

  // gets data from the 5-day weather forecast API
  const forecastRequest = await axios.get(fiveDayForecastURL)
    .then(response => response)
    .catch(error => {
      if (error.response) {
        alert(`${error.response.status} Error: ${error.response.data.message}. Please enter a valid city.`);
      }
    });

  // gets data from the current weather API
  const currentWeatherRequest = await axios.get(currentWeatherURL)
    .then(response => response)
    .catch(error => {
      if (error.response) {
        alert(error.response.status);
      }
    });

  // if data is returned from both API requests, return only desired data in the payload
  if (forecastRequest && currentWeatherRequest) {
    const weatherDetails = forecastRequest.data.list;
    const currentTemp = Math.round(currentWeatherRequest.data.main.temp);
    const currentConditions = currentWeatherRequest.data.weather[0].main;

    const city = forecastRequest.data.city.name;
    const temp = [];
    const pressure = [];
    const humidity = [];
  
    weatherDetails.forEach(data => {
      temp.push(data.main.temp);
      pressure.push(data.main.pressure);
      humidity.push(data.main.humidity);
    });
    
    return {
      type: FETCH_WEATHER,
      payload: { city, currentTemp, currentConditions, temp, pressure, humidity }
    }
  } 
  
};