//import Reducer from './Reducer'; 
import { getWeather } from './ActionTypes';
import axios from 'axios';

export const fetchWeather = (city) => {
  return (dispatch) => {
      dispatch({ type: getWeather.PENDING });
       axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=d804734ee459510001eab20076e914f2`)
      .then(response => {
        const weatherData = {
          city: response.data.city.name,
          temperature: response.data.list.map(item => item.main.temp),
          humidity: response.data.list.map(item => item.main.humidity),
          pressure: response.data.list.map(item => item.main.pressure), 
        };         
        dispatch({ type: getWeather.SUCCESS, payload: weatherData });
        console.log('at actions', weatherData); 
      })
      .catch(error => {
        dispatch({ type: getWeather.REJECTED, payload: error.message });
      });
    }
  };
