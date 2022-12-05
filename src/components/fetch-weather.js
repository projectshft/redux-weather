import axios from "axios";

// TO DO: move the API KEY to an .env file
export const API_KEY = "c60d7d92799f3cf527b48cf6335c9cc5";
export const FETCH_WEATHER = "FETCH_WEATHER";

// TO DO: Prevent duplicate searches of the same city
export async function fetchWeather(e, search, {addWeather}) {
  e.preventDefault();

  const url = (`https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=imperial&appid=${API_KEY}`)

  const request = await axios.get(url)
    .then(response => response)
    .catch(function (error) {
      if (error.response) {
        alert(`${error.response.status} Error: ${error.response.data.message}. Please enter a valid city.`);
      }
    });

  if (request) {
    const weatherDetails = request.data.list;
  
    const city = request.data.city.name;
    const temp = [];
    const pressure = [];
    const humidity = [];
  
    weatherDetails.forEach(data => {
      temp.push(data.main.temp);
      pressure.push(data.main.pressure);
      humidity.push(data.main.humidity);
    });
    
    addWeather({ city, temp, pressure, humidity });
  } 
  
  // resets the search bar
  // TO FIX: ERROR - this clears the search bar, but if you click on Search afterwards it still searches for the last input city
  const inputField = document.getElementById('search-bar');
  inputField.value = '';

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
};