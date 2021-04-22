import axios from 'axios';
export const TABLE_ROW = 'TABLE_ROW';

export function fetchNewTableRow (query) {
  const request = axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=0cc115d6b4190cb95525f9c0f6f2b58c`)

  return {
    type: TABLE_ROW,
    payload: request
  }
}