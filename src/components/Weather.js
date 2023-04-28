

import React, { useState } from 'react';
//import Form from 'react-bootstrap/Form';
//import Button from 'react-bootstrap/Button'; 
//import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../redux/Actions';
import { getWeather } from '../redux/ActionTypes';
import { Sparklines, SparklinesLine,SparklinesReferenceLine } from 'react-sparklines';


  
const Weather = () => {
  const [searchInput, setSearchInput] = useState('');
  const weatherData = useSelector(state => state.weather); 
  const dispatch = useDispatch(); 
  //const [weatherArray, setWeatherArray] = useState([]); 

  const HandleSubmit = (e) => {
    e.preventDefault(); 
      if (searchInput !== ''){
        dispatch(fetchWeather(searchInput))
      }
      // .then((weatherData) =>{ 
      // setWeatherArray(() => [...weatherArray, weatherData])
      // }
      // )
      console.log("weather.js", weatherData.data); 
  }
  // setWeatherArray(...weatherArray, weatherData.data)
  // console.log("weather.js 2", weatherData.data); 
  // console.log("weather array", weatherArray); 


  return (
    <div>
      <div className="heading"><h1>Weather</h1> </div>
        <form className="search-form" onSubmit={HandleSubmit}>
          <input 
            type="text" 
            value={searchInput} 
            placeholder='Enter a City'
            onChange={(e) => setSearchInput(e.target.value)} 
          />
          <button type="submit">Get Weather</button>
        </form>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">City</th>
              <th scope="col">Temperture(C)</th>
              <th scope="col">Pressure(hPa)</th>
              <th scope="col">Humidity(%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            {/* {Array.isArray(weatherArray) && weatherArray.map((item) => (
              <tr key={item.city}> */}
               {/* {!weatherData.loading && weatherData.data.temperature && getWeather.SUCCESS ?  ( */}
              { weatherData.data.temperature && getWeather.SUCCESS ?  (
                  <React.Fragment>
                    <td>
                      {weatherData.data.city}
                    </td>
                    <td>
                      <Sparklines data={weatherData.data.temperature}>
                          <SparklinesLine />
                          <SparklinesReferenceLine type="mean" />
                      </Sparklines>
                      {`${weatherData.data.temperature[0]} C°`}
                    </td>
                    <td>
                    <Sparklines data={weatherData.data.pressure}>
                          <SparklinesLine />
                          <SparklinesReferenceLine type="mean" />
                      </Sparklines>
                      {`${weatherData.data.pressure[0]} hPa`}
                    
                    </td>
                    <td>
                    <Sparklines data={weatherData.data.humidity}>
                          <SparklinesLine />
                          <SparklinesReferenceLine type="mean" />
                      </Sparklines>     
                      {`${weatherData.data.humidity[0]} %`}
               
                    </td>
                  </React.Fragment>
                ) : null}
            </tr>
          </tbody>
        </table>
    </div>
  );

  }
  export default Weather; 