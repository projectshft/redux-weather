import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch } from "react-redux";
import { addCity } from '../actions';
import { useState } from 'react';
import { useSelector } from "react-redux";
import { Sparklines, SparklinesReferenceLine, SparklinesLine } from 'react-sparklines';
import axios from 'axios';

const AddCity = () => {
  const [city, setCity] = useState('')
  const [data, setData] = useState({})
  const dispatch = useDispatch();

  const API_KEY = 'e42283aa6fbc3c5588d0923c8e9c71a4';

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=40&appid=${API_KEY}&units=imperial`

  const searchCity = (e) => {
    e.preventDefault();  
      axios.get(url).then((response) => {
        setData(data)
        dispatch(
          addCity(
            response.data
          )
        );

      })
      setCity('')
  }

  const weather = useSelector((state) => state.weather);
  
  function renderWeather() {
    if (weather.length > 0) {
      return weather.map((current, index) => (
        // <li key={city} className="list-group-item">{city}
        // </li>
        
        
        
        <div className='container' key={index}>
          <table className='table table-striped table-bordered'>
            <thead>
            <tr>
              <td>
                {current.city.name}</td>

              <td>
              <Sparklines data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}>
              <SparklinesLine style={{ stroke: "#ed2121", strokeWidth: "0.5", fill: "#f5426f", fillOpacity: "0.5" }}/>
                <SparklinesReferenceLine type="avg" />
              </Sparklines>
                {Math.round(current.list[0].main.temp)}</td>

              <td>
              <Sparklines data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}>
                <SparklinesLine style={{ stroke: "#ed2121", strokeWidth: "0.5", fill: "#f5426f", fillOpacity: "0.5" }}/>
                <SparklinesReferenceLine type="avg" />
              </Sparklines>
                {current.list[0].main.pressure}</td>

              <td>
              <Sparklines data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}>
                <SparklinesLine style={{ stroke: "#ed2121", strokeWidth: "0.5", fill: "#f5426f", fillOpacity: "0.5" }}/>
                <SparklinesReferenceLine type="avg" />
              </Sparklines>
                {current.list[0].main.humidity}</td>
            </tr>
            </thead>
          </table>
          <hr></hr>
        </div>
        
      ));
    } 
    return <div>No weather to show</div>

    
  } 

  return (
    <div className="container">
      <div className="row">
        <div className="page-header">
          <h1>Weather App</h1>
        </div>
      </div>
      <form className="search-form" onSubmit={searchCity}>
        <div className="form-group">
          <input 
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="form-control" placeholder="Enter a city"></input>
          <button type="submit" className="btn btn-primary">Search</button>
        </div>
      </form>

      <hr></hr>

      <div className='container'>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>City</th>
              <th>Temp</th>
              <th>Pressure</th>
              <th>Humidity</th>
            </tr>
          </thead>
        </table>
      </div>

      <hr></hr>

      {/* <div className='container'>
        <div className='city'>
          {data.city && (<div className="city"><p>{data.city.name}</p></div>)}
        </div>
        <div className='temp'>
          {data.list && (<div className="city"><p>{data.list[0].main.temp}</p></div>)}
        </div>
        <div className='pressure'>
          {data.list && (<div className="city"><p>{data.list[0].main.pressure}</p></div>)}
        </div>
        <div className='humidity'>
          {data.list && (<div className="city"><p>{data.list[0].main.humidity}</p></div>)}
        </div>
      </div>

      <hr></hr> */}

      
      <div>{renderWeather()}</div>
      </div>
  )
};
  

export default AddCity