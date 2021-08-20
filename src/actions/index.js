import axios from 'axios';

import { FETCH_RESULT, SET_DEFAULT } from '../constants';

export function fetchResult(query) {
  let url = 'https://api.openweathermap.org/data/2.5/forecast'
  
  if (query.type === 'city') 
    url += `?q=${query.values[0]}`
  else
    url += `?lat=${query.values[0]}&lon=${query.values[1]}`

  url += '&units=imperial&appid=5eb364706ec575886656a6840c287954';

  const request = axios.get(url);

  return {
    type: FETCH_RESULT,
    payload: request
  }
}

export function setDefaultResultId(id) {
  return {
    type: SET_DEFAULT,
    payload: id
  }
}