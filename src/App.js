import "./App.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addTemperature } from './actions';
import { Sparklines, SparklinesLine } from 'react-sparklines';


function App() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const temp = useSelector((state) => state.temperature);
  // possible option below to keep track of city names
  // const cityName = useSelector((state) => state[document.getElementById('searchKey').value]);
  console.log(data);
  const submitEventHandler = (event) => {
    const city = document.getElementById('searchKey').value; 
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=783d76bf12b9784e1ed61aceec49558d&units=imperial`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (responseData) {
        // dispatch(addTemperature([Math.round(responseData.main.temp)]));
        console.log(responseData);
        setData([...data, ...responseData.list]);
      });
  };
  return (
  
    <div className="App">
      <Sparklines data={[5, 10, 5, 20]}>
  <SparklinesLine color="blue" />
</Sparklines>
      {/* <Sparklines data={[5, 10, 5, 20, 8, 15]} limit={5} width={100} height={20} margin={5}>
</Sparklines> */}
      <div className="searchBar">
        <input id="searchKey"
          className="searchBar"
          type="text"
          placeholder="Get a five-day forecast in your favorite cities"
        />
        <input type="button" value="Submit" onClick={submitEventHandler} />
      </div>
      <div className="searchResult">
        <table>
          <thead>
          <tr>
            <th> City</th>
            <th> Temperature (F) </th>
            <th> Pressure (hPa) </th>
            <th> Humidity (%) </th>
          </tr>
          </thead>
          <tbody>
        {data.map(item => {
          return (
            <tr key={item.id}>
              {/* below is city name, temp, pressure, humidity */}
              <td>{item.city}</td>
              <td>{item.main.temp}</td>
              <td>{item.main.pressure}</td>
              <td>{item.main.humidity}</td>
              <td><Sparklines data={[0, 5, 10]}>
  <SparklinesLine color="blue" />
</Sparklines></td>
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
