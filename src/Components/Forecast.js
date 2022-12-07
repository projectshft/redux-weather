import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


const Forecast = () => {
  const [location, setLocation] = useState('');
  const [displayed, setDisplayed] = useState([]);
  const dispatch = useDispatch();
  const forecast = useSelector(state => state.forecast);
  const myAPIkey = useSelector(state => state.myAPIkey);
  const [searchLocations, setSearchLocations] = useState([]);

  
  useEffect(() => {
    if (forecast.list) {
      const temp = [];
      const pressure = [];
      const humidity = [];
      for (let i = 0; i < forecast.list.length; i++){
        temp.push(forecast.list[i].main.temp);
        pressure.push(forecast.list[i].main.pressure);
        humidity.push(forecast.list[i].main.humidity);
      }

      const displayedData = [];

      displayedData.push(
        <tr key={forecast.city.name}>
          <th>{forecast.city.name}</th>
          <td>
            <Sparklines data={temp}>
              <SparklinesLine color="blue" />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
          </td>
          <td>
            <Sparklines data={pressure}>
              <SparklinesLine color="red" />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
          </td>
          <td>
            <Sparklines data={humidity}>
              <SparklinesLine color="green" />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
          </td>
        </tr>
      );

      setDisplayed(displayed => [displayedData, ...displayed]);
    }
  }, [forecast]);

  const fetchForecast = async () => {
    console.log(searchLocations);
    if(searchLocations.includes(location)){
      alert("error: Already searched this location")
      return;
    }
    setSearchLocations(searchLocations => [location, ...searchLocations]);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${myAPIkey}&units=imperial`);
    const data = await response.json();
    dispatch({ type: 'FETCH_FORECAST', payload: data });
  }


  return (
    <div className='result'>
      <form>
        <div className="form-group">
          <input type="text" id="search-query" className="form-control" placeholder="Enter a city name here" onChange={e => setLocation(e.target.value)} />
          <button id="search-button" type="button" className="btn btn-primary search" onClick={() => fetchForecast(location)}>Search</button>
        </div>
      </form>
      <hr />
      <table className="table table-dark" id='table'>
        <thead className="thead-dark">
          <tr key="header">
            <th scope="col">City</th>
            <th scope="col">Temperature &deg;F</th>
            <th scope="col">Pressure(hPa)</th>
            <th scope="col">Humidity(%)</th>
          </tr>
        </thead>

        <tbody>   
          {displayed}
        </tbody>
      </table>
    </div>
  );
}

export default Forecast;