import axios from 'axios';



const fetchWeatherData = async (city) => {
  const ROOT_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9b71dd7687d5daeb5225c83041aa3ed4&units=imperial`
  
  const request = await axios.get(`${ROOT_URL}`);
  
  return {
    type: 'FETCH_POSTS',
    payload: request.data
  }
}

export default fetchWeatherData;

