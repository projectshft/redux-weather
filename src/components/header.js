import React from 'react';
import { useState } from 'react'
import axios from 'axios'

const Header = function () {
  const [city, setCity] = useState('');

  const data = {
    temp: 67,
    humidity: 29
  }

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  const APIKey = "e4f6ea6ff60bd89789f84c07b1f17a89";

  const getForecasts = () => {
    const geoData = [];
    const latAndLongData = axios.get("http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=" + 1 + "&appid=" + APIKey).then(data => geoData.push(data));

    const lat = geoData[0].lat;
    const long = geoData[0].long;


    
  }
  return (
    <div className="container">
      <form>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Search" onChange={handleChange}></input>
          <div className="input-group-append">
           <button className="btn btn-outline-secondary" type="button" onClick={getForecasts}>Button</button>
         </div>
        </div>
      </form>
    </div>
  )
}

export default Header