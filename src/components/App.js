import React, { useState } from 'react';


function App() {

  const [query, setQuery] = useState('');

  const trackQuery = () => {
    setQuery()
  }


  return (
    
    <div className="App">
      <h1>BetterWeather 2</h1>
      <div className="row">
        <div className="col-sm-6 offset-md-3">
          <input placeholder="get a five-day forecast in your favorite cities"></input>
          <button className="btn btn-success btn-sm" onChange={trackQuery}>Submit</button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-10 offset-md-1">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">City</th>
                <th scope="col">Temp (F)</th>
                <th scope="col">Pressure (hPa)</th>
                <th scope="col">Humidity (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>City Name</td>
                <td>TempGraph</td>
                <td>PressureGraph</td>
                <td>HumidityGraph</td>
              </tr>
              <tr>
                <td>City Name</td>
                <td>TempGraph</td>
                <td>PressureGraph</td>
                <td>HumidityGraph</td>
              </tr>
              <tr>
                <td>City Name</td>
                <td>TempGraph</td>
                <td>PressureGraph</td>
                <td>HumidityGraph</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
