import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { add } from '../reducers/index';
import axios from 'axios';
import { Sparklines } from 'react-sparklines'

const Header = function () {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  const APIKey = "e4f6ea6ff60bd89789f84c07b1f17a89";

  const getForecasts = () => {
    const latAndLong = {
      lat: 0,
      long: 0
    };

    const forecastData = [];

    axios.get("http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=" + 1 + "&appid=" + APIKey).then(response => {
      latAndLong.lat = response.data[0].lat;
      latAndLong.long = response.data[0].lon;
    }).then(() => getForecastsData());

    const getForecastsData = () => {
       axios.get("http://api.openweathermap.org/data/2.5/forecast?lat=" + latAndLong.lat + "&lon=" + latAndLong.long + "&appid=" + APIKey).then(response => forecastData.push(response)).then(() => parseForecastData());
    };

    const parseForecastData = () => {
  
      const data = forecastData[0].data;
      
      const forecastObj = {
        city: data.city.name,
        temp: data.list.map(item => item.main.temp),
        pressure: data.list.map(item => item.main.pressure),
        humidity: data.list.map(item => item.main.humidity)
      };

      dispatch(add(forecastObj))
    }
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
      <div></div>
    </div>
  )
}

export default Header