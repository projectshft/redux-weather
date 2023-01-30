import React, { useState, useEffect } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import axios from 'axios';
import './App.css' 


const Weather = (props) => {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const fetchWeatherData = async () => {
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=a2ab37744a978e742121e73a47094279`);
      setWeatherData(response.data);
    }
    fetchWeatherData();
  }, [props.city]);

  return (
    <div className="weather">
      {weatherData.list &&
        <div>
          <h2>Weather for {props.city}</h2>
          <div className="graph-container">
            <h3>Temperature: {((weatherData.list[0].main.temp - 273.15) * 9/5 + 32).toFixed(0)}°F</h3>
            <Sparklines data={weatherData.list.map(data => (data.main.temp - 273.15) * 9/5 + 32)}>
              <SparklinesLine color="red" />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
          </div>
          <div className="graph-container">
            <h3>Pressure: {weatherData.list[0].main.pressure} hPa</h3>
            <Sparklines data={weatherData.list.map(data => data.main.pressure)}>
              <SparklinesLine color="blue" />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
          </div>
          <div className="graph-container">
            <h3>Humidity: {weatherData.list[0].main.humidity}%</h3>
            <Sparklines data={weatherData.list.map(data => data.main.humidity)}>
              <SparklinesLine color="green" />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
          </div>
        </div>
      }
    </div>
  );
}

export default Weather;