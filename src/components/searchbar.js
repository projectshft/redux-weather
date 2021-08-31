import { useDispatch } from 'react-redux';
import { fetchWeather } from '../actions';
import '../index.css'
import './app'
import { useState } from 'react';
import City_Weather from './city-weather';
import "bootstrap/dist/css/bootstrap.css";


const Searchbar = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const handleSearchClick = () => {
    dispatch(fetchWeather(city));
    setCity('');
  }

  return (
  <div>
    <div className="input-group searchbar">
      <div className="row col-md-9 offset-1">
        <input name="city" type="text" className="form-control col-md-6" placeholder="Enter a city" value={city} onChange={(e) => setCity(e.target.value)}></input>
      </div>
          <input className="btn btn-primary col-md-1" type="submit" value="Search" onClick={handleSearchClick}></input>
      </div>
    <hr className="line"></hr>
    <div className="row col-sm-10 offset-1 titles">
      <p className="col-sm-3" align="center"><strong>City</strong></p>
      <p className="col-sm-3" align="center"><strong>Temperature (F)</strong></p>
      <p className="col-sm-3" align="center"><strong>Pressure (hPa)</strong></p>
      <p className="col-sm-3" align="center"><strong>Humidity (%)</strong></p>
    </div>
    <hr className="line"></hr>
    {City_Weather()}
  </div>
  )
};

export default Searchbar;