import axios from 'axios';

const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=9b71dd7687d5daeb5225c83041aa3ed4';


export const searchTermClick = (searchTerm) => {
  return {
    type: 'SEARCHTERM_CLICK', 
    payload: searchTerm
  }
}

export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/list`);
  
  return {
    type: 'FETCH_POSTS',
    payload: request
  }
}