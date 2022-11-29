import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

import { fetchWeather } from './components/fetch-weather';

// TO DO: Clean up App.js
// TO DO: Clear the search bar after each search
function App() {
  const [search, setSearch] = useState();
  const [weather, setWeather] = useState([]);

  const addWeather = (newWeather) => {
    setWeather(prevState => {
      return [...prevState, newWeather];
    })
  };

  const weatherList = () => weather.map((weather, id) => {
    // TO BE CORRECTED: The first graph looks right, but the next two are smaller and smaller... 
    return (
      <tr key={id}>
        <th>{weather.city}</th>
        <td><Sparklines data={weather.temp} height={120}>
          <SparklinesLine color="#FF7F50" />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>avg temp</td>
        <td><Sparklines data={weather.pressure} height={120}>
          <SparklinesLine color="#228B22" />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>avg pressure</td>
        <td><Sparklines data={weather.humidity} height={120}>
          <SparklinesLine color="#2F4F4F" />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>avg humidity</td>
      </tr>
    )
  });

  return (
    <div className="container text-center">
      <h1>React-Redux Weather App</h1>

      <br></br>

      <div className="row justify-content-center">
        <div className="col-8">

          <form className="search-form" onSubmit={(e) => fetchWeather(e, search, {addWeather})} >
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Enter City Name Here" id="search-bar" value={search} onChange={e => setSearch(e.target.value)} />
              <button className="btn btn-primary search" type="submit" id="button-addon2">Search</button>
            </div>
          </form>

          <table className="table align-middle">
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
