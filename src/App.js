import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesSpots,
  SparklinesReferenceLine,
} from "react-sparklines";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { updateAPI } from "../src/redux/city.js";

function App() {
  const [cityName, setCityName] = useState("");
  const cityProfile = useSelector((state) => state);

  // We will map through the dynamic list of cities added and populate the data from Redux store.
  const listedCities = cityProfile.citySearchReducer.weatherInfo.map(
    (item, index) => {
      return (
        <tr key={index}>
          <td>
            <b>{item.city}</b>
          </td>
          <td>
            <div className="">
              <Sparklines data={item.fiveDayTemp}>
                <SparklinesLine color="#56b45d" />
                <SparklinesSpots style={{ fill: "#56b45dn" }} />
                <SparklinesReferenceLine type="mean" />
              </Sparklines>
              <b>{item.temp} °F</b>
            </div>
          </td>
          <td>
            <div className="column-style">
              <Sparklines data={item.fiveDayPressure}>
                <SparklinesLine color="#56b45d" />
                <SparklinesSpots style={{ fill: "#56b45d" }} />
                <SparklinesReferenceLine type="mean" />
              </Sparklines>
              <b>{item.pressure} hPa</b>
            </div>
          </td>
          <td>
            <Sparklines data={item.fiveDayHumidity}>
              <SparklinesLine color="#56b45d" />
              <SparklinesSpots style={{ fill: "#56b45d" }} />
              <SparklinesReferenceLine type="mean" />
            </Sparklines>
            <b>{item.humidity} %</b>
          </td>
        </tr>
      );
    }
  );

  // declaring dispatch to have access the action creators we exported in the redux folder.
  const dispatch = useDispatch();
  const getCurrentWeatherInfoAction = (cityName) =>
    dispatch(updateAPI(cityName));

  // This will execute the form search and place search data into the Redux dispatch function as well as clear the input field.
  const getCurrentWeatherInfo = (e) => {
    e.preventDefault();
    if (cityName === "") {
      alert("Please enter a city!");
    } else {
      getCurrentWeatherInfoAction(cityName);
      setCityName("");
    }
  };

  return (
    <div className="App">
      <div>
        <form onSubmit={getCurrentWeatherInfo}>
          <input
            placeholder="Enter City Here"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          ></input>
        </form>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th scope="col">City</th>
              <th scope="col">Temperature(F)</th>
              <th scope="col">Pressure(hPa)</th>
              <th scope="col">Humidity(%)</th>
            </tr>
          </thead>
          <tbody>{listedCities}</tbody>
        </Table>
      </div>
    </div>
  );
}

export default App;
