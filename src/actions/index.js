import axios from 'axios';

export function fetchResult(query) {
  const request = axios.get(`https://api.openweathermap.org/data/2.5/forecast'?q=${query}&appid=5eb364706ec575886656a6840c287954`);

  return {
    type: 'FETCH_RESULT',
    payload: request
  }
}