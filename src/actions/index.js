import axios from 'axios'
const API_KEY = process.env.REACT_APP_API_KEY
export const FETCH_FIVE_DAY = "FETCH_FIVE_DAY"
export const FETCH_FORECASTS = "FETCH_FORECASTS"

export function fetchFiveDay(location = "Raleigh", callback) {
  const request = axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=imperial`)
  request.then(() => callback())

  return {
    type: FETCH_FIVE_DAY,
    payload: request
  }
}

// export function fetchForecasts(){
//   const request = useSelector((state) => state)
//   return{
//     type: FETCH_FORECASTS,
//     payload: request
//   }
// }
