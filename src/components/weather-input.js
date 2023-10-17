import { useState } from "react"
export default function WeatherInput () {
  const [city, setCity] = useState(null);
  const apiKey = '59193db5e99e491a9098d88600213ffa'
  const getCoordinates = function(city)
  {const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
    fetch(url, 
      {
        method: 'GET',
        dataType: 'json'
    })
  .then(data => data.json())
   .then(data => {
      console.log(data);})}


  const handleWeatherSubmit = (event) => {
    event.preventDefault();
    getCoordinates(city)
    console.log('Click!');
  }

  const handleCityChange = (event) => {
    const value = event.target.value;
    setCity(value);
  }

  return (
  <div className = "text-center">
    <form onSubmit={handleWeatherSubmit}>
      <input onChange = {handleCityChange} name = "weatherInput" type = "text" placeholder = "Enter a city"></input>
    <button className = "ms-3 btn btn-primary">Search Weather</button>
    </form>
    </div>)

}