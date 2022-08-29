import axios from 'axios'
const API_KEY = process.env.REACT_APP_API_KEY
export const FETCH_FIVE_DAY = "FETCH_FIVE_DAY"
export const FETCH_FORECASTS = "FETCH_FORECASTS"

export function fetchFiveDay(location) {
  const request = axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=imperial`)


  return {
    type: FETCH_FIVE_DAY,
    payload: request
  }
}
