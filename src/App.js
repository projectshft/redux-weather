import "./App.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addPressure, addTemperature, addHumidity, addCityName } from './actions';
import { Sparklines, SparklinesLine } from 'react-sparklines';

function App() {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const cityNames = useSelector((state) => {
    return state.cityNameReducer;
  });
  const humidity = useSelector((state) => {
    return state.humidityReducer;
  });
  const pressure = useSelector((state) => {
    return state.pressureReducer;
  });
  const temperature = useSelector((state) => {
    return state.temperatureReducer;
  });
  
  const submitEventHandler = (event) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=783d76bf12b9784e1ed61aceec49558d&units=imperial`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (responseData) {
        const city = responseData.city.name;
        const cityForecast = responseData.list; // array of 40 containg temp, humidity, pressure
        cityForecast.forEach(forecast => {
          dispatch(addTemperature(city, forecast.main.temp));
          dispatch(addHumidity(city, forecast.main.humidity));
          dispatch(addPressure(city, forecast.main.pressure));
        });
        dispatch(addCityName(city));
      });
  };
  return (
    <div className="App">
      <div className="searchBar">
        <input id="searchKey"
          className="searchBar"
          type="text"
          placeholder="Get a five-day forecast in your favorite cities"
          onInput={(event) => { setValue(event.target.value) }}
        />
        <input type="button" value="Submit" onClick={submitEventHandler} />
      </div>
      <div className="searchResult">
        <table style={{ width: '100%' }}>
          <thead>
          <tr>
            <th> City</th>
            <th> Temperature (F) </th>
            <th> Pressure (hPa) </th>
            <th> Humidity (%) </th>
          </tr>
          </thead>
          <tbody>
            {cityNames && cityNames.map(city => {
              const { id, name } = city;
              return (
                <tr key={id}>
                  {/* below is city name, temp, pressure, humidity */}
                  <td>{name}</td>
                  <td>
                    <Sparklines data={temperature[name]}>
                      <SparklinesLine />
                    </Sparklines>
                  </td>
                  <td>
                    <Sparklines data={pressure[name]}>
                      <SparklinesLine />
                    </Sparklines>
                  </td>
                  <td>
                    <Sparklines data={humidity[name]}>
                      <SparklinesLine />
                    </Sparklines>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
