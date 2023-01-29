import axios from "axios";

export const FETCH_WEATHER = "FETCH_WEATHER";

// action creator function
export const fetchWeather = city => {
  const request = axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=35630fe979fd6407e6451e20d0c3f7e4`)
    .catch(error => {
      alert("Please enter a valid city");
      console.log(error.message);
      return;
  });

  return {
    type: FETCH_WEATHER, 
    payload: request
  }
};

