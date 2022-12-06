import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
// import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

import { fetchWeather } from './components/fetch-weather';
import WeatherInfo from './containers/weather-info';

function App() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  
  // add weather useSelector & prevent dispatching if that city data already exists
  function onSubmit(e) {
    e.preventDefault();
    dispatch(fetchWeather(search));
    setSearch('');
  }

  return (
    <div className="container text-center">
      <h1>5-Day Weather Forecast</h1>

      <br></br>

      <div className="row justify-content-center">
        <div className="col-10">

          <form className="search-form" onSubmit={onSubmit} >
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Enter City Name Here" id="search-bar" value={search} onChange={e => setSearch(e.target.value)} />
              <button className="btn btn-primary search" type="submit" id="button-addon2">Search</button>
            </div>
          </form>

          <table className="table align-middle">
            <thead>
              <tr>
                <th scope="col" style={{ width: '25%' }}>City</th>
                <th scope="col" style={{ width: '25%' }}>Temperature &#40;&#176;F&#41;</th>
                <th scope="col" style={{ width: '25%' }}>Pressure &#40;hPa&#41;</th>
                <th scope="col" style={{ width: '25%' }}>Humidity &#40;%&#41;</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              <WeatherInfo />
            </tbody>
          </table>

        </div>
      </div>

    </div>
  );
};

export default App;
