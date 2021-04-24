import axios from 'axios';
export const TABLE_ROW = 'TABLE_ROW';
export const ACCESS_LOCATION = 'ACCESS_LOCATION';
export const SET_DEFAULT = 'SET_DEFAULT';

export function fetchNewTableRow (query) {
    const request = axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=0cc115d6b4190cb95525f9c0f6f2b58c`).catch(error => {})
    
    return {
      type: TABLE_ROW,
      payload: request
    }
}

export function accessLocation (latitude, longitude) {
  const request = axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=0cc115d6b4190cb95525f9c0f6f2b58c`)
  
  return {
    type: TABLE_ROW,
    payload: request
  }
}

export function setDefault (name) {
  console.log('reached the actions')
  console.log(name);
  
  return {
    type: SET_DEFAULT,
    payload: name
  }
}