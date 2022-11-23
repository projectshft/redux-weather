import axios from 'axios'

export const FETCH_COORDINATES = "FETCH_COORDINATES"
export const FETCH_WEATHER = "FETCH_WEATHER"


export function fetchCoordinates (query) {
    const request = axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=edab4a2d7f22f4130c4959004a7fb76c`)
    .then ((response) => {
        const lat = response.data[0].lat
        const lon = response.data[0].lon
        return {lat, lon}
    }) 
    .then (({lat, lon}) =>{
        const weatherRequest = axios.get(`https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=${lat}&lon=${lon}&appid=edab4a2d7f22f4130c4959004a7fb76c`)

    .then((response) => {
       const data = response.data.list[0].weather[0].main
       console.log('data', data)
       return  {
        type: FETCH_COORDINATES,
        payload: data
    }
    })
    })   
}

