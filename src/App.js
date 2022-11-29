import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
// import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

import { fetchWeather } from './components/fetch-weather';

// TO DO: move the page formatting to a new file or multiple files to keep App.js clean
function App() {
  const [city, setCity] = useState('');
  // const [weather, setWeather] = useState([]);

  return (
    <div className="container text-center">
      <h1>React-Redux Weather App</h1>

      <br></br>

      <div className="row justify-content-center">
        <div className="col-8">

          <form className="search-form" onSubmit={(e) => fetchWeather(e, city)}>
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
              <tr>
                <th scope="row">Some City</th>
                <td>50 &#176;F</td>
                <td>100</td>
                <td>55%</td>
              </tr>
            </tbody>
              {/* <Sparklines data={sampleData}>
                <SparklinesLine />
                <SparklinesReferenceLine type="avg" />
              </Sparklines> */}
          </table>

        </div>
      </div>

    </div>
  );
};

export default App;
