import * as actions from './actionTypes'
import axios from 'axios';



const API_KEY = '2ef3e190072ad426d08c8e29c5e84340';
const ROOT_URL = "https://api.openweathermap.org/data/2.5/forecast?q=";

export const createItem = (city) => {
  const request = axios.get(`${ROOT_URL}${city}&appid=${API_KEY}`);
  

  return {
    type: actions.ADD_ITEM,
    payload: request
  }
  
};

export const deleteItem = (id) => ({
  type: actions.REMOVE_ITEM,
  payload: id
});

export const fetchItems = () => {
  const request = axios.get(`${ROOT_URL}/api/}`)


  return {
    type: actions.FETCH,
    payload: request
  }
}


