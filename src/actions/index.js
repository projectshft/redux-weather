import axios from 'axios'
const API_KEY = process.env.REACT_APP_API_KEY
export const FETCH_LOCATION = "FETCH_LOCATION"
export const FETCH_FIVE_DAY = "FETCH_FIVE_DAY"
export const DELETE_FIVE_DAY = "DELETE_FIVE_DAY"

export function fetchLocation() {
  const locationQuery =  ''
  const request = axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${locationQuery}&appid=${API_KEY}`)

  return {
    type: FETCH_LOCATION,
    payload: request
  }
}

export function fetchFiveDay(location) {
  const [lat, lon] = location;
  const request = axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`)

  return {
    type: FETCH_FIVE_DAY,
    payload: request
  }
}
