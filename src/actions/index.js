//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
//const API_KEY = process.env.REDUX_APP_WEATHER_API_KEY
import axios from "axios";
import _ from "lodash"

export const FETCH_CITYWEATHER = "FETCH_CITYWEATHER";

const ROOT_URL = "https://api.openweathermap.org/data/2.5";

//NOT SURE HOW TO PROCEED FROM ERROR
//function which returns type and payload
export function fetchCityWeather(city) {
  //promise and catch
  const request = axios.get(`${ROOT_URL}/forecast?q=${city}&appid=d2ebbe84afd80c9a2267505ea9c93841&units=imperial`)
  .then(request=> {
    const fiveDayData = (data) => {
      const temp = [];
      const pressure = [];
      const humidity = [];
      data.data.list.forEach(element => {
        temp.push(element.main.temp);
        pressure.push(element.main.pressure);
        humidity.push(element.main.humidity);
      })

      return({
        city: request.data.city.name.toUpperCase(),
        temp: temp,
        pressure: pressure,
        humidity: humidity,
        tempAve: _.round(_.mean(temp)),
        pressureAve: _.round(_.mean(pressure)),
        humidityAve: _.round(_.mean(humidity))
      })
    }
    return fiveDayData(request)
    
  })
  .catch(err=> {
    console.log(`City not found. Input a valid city! ${err}`)
    alert(`City not found. Input a valid city! \n${err}`)
  })

  return {
    type: FETCH_CITYWEATHER,
    payload: request,
  }
}