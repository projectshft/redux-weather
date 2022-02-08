import axios from 'axios';

// const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=9b71dd7687d5daeb5225c83041aa3ed4';



const fetchWeatherData = async (city) => {
  const ROOT_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9b71dd7687d5daeb5225c83041aa3ed4`
  
  const request = await axios.get(`${ROOT_URL}`);
  
  return {
    type: 'FETCH_POSTS',
    payload: request.data
  }
}

export default fetchWeatherData;

