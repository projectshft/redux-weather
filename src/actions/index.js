import axios from 'axios'
export const FETCH_WEATHER = "FETCH_WEATHER"


export async function fetchWeather (city) {
    const requestCoords = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=edab4a2d7f22f4130c4959004a7fb76c`)
    const lat = requestCoords.data.coord.lat
    const lon = requestCoords.data.coord.lon
    const requestWeather = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=${lat}&lon=${lon}&appid=edab4a2d7f22f4130c4959004a7fb76c`)
    return {
        type: FETCH_WEATHER,
        payload: requestWeather.data.list
    }
}

