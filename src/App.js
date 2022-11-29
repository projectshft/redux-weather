import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

import { fetchWeather } from './components/fetch-weather';

// TO DO: move the page formatting to a new file or multiple files to keep App.js clean
function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState([{
    city: "Some City",
    temp: 50,
    pressure: 1000,
    humidity: 85
  }]);

  const addWeather = (newWeather) => {
    setWeather(prevState => {
      return [...prevState, newWeather];
    })
  };

  const weatherList = () => weather.map((weather, id) => {
    return (
      <tr key={id}>
        <th>{weather.city}</th>
        <td>{weather.temp}</td>
        <td>{weather.pressure}</td>
        <td>{weather.humidity}</td>
      </tr>
    )
  });

  return (
    <div className="container text-center">
      <h1>React-Redux Weather App</h1>

      <br></br>

      <div className="row justify-content-center">
        <div className="col-8">

          <form className="search-form" onSubmit={(e) => fetchWeather(e, city, {addWeather})} >
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Enter City Name Here" id="search-bar" value={city} onChange={e => setCity(e.target.value)} />
              <button className="btn btn-primary search" type="submit" id="button-addon2">Search</button>
            </div>
          </form>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">City</th>
                <th scope="col">Temperature &#40;&#176;F&#41;</th>
                <th scope="col">Pressure &#40;hPa&#41;</th>
                <th scope="col">Humidity &#40;%&#41;</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {weatherList()}
            </tbody>
          </table>

        </div>
      </div>

    </div>
  );
};

export default App;
