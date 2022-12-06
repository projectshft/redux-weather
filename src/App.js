import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//Redux state access and dispatch
import { useSelector, useDispatch } from "react-redux";
//React Hooks
import { useState } from "react";
// action creators
import { updateAPI } from "../src/redux/city.js";

function App() {
  const [cityName, setCityName] = useState("");
  const cityProfile = useSelector((state) => state);

  const listedCities = cityProfile.citySearchReducer.weatherInfo.map(
    (item, index) => {
      return (
        <tr key={index}>
          <td>
            <b>{item.city}</b>
          </td>
          <td>
            <b>{item.temp} °F</b>
          </td>
          <td>
            <b>{item.pressure} hPa</b>
          </td>
          <td>
            <b>{item.humidity} %</b>
          </td>
        </tr>
      );
    }
  );

  const dispatch = useDispatch();
  const getCurrentWeatherInfoAction = (cityName) =>
    dispatch(updateAPI(cityName));

  const getCurrentWeatherInfo = (e) => {
    e.preventDefault();
    if (cityName === "") {
      alert("Please enter a city!");
    } else {
      getCurrentWeatherInfoAction(cityName);
      setCityName("");
    }
  };

  // api reference is ----> process.env.REACT_APP_API_KEY
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
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">City</th>
              <th scope="col">Temperature</th>
              <th scope="col">Pressure</th>
              <th scope="col">Humidity</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td></td>
              <td></td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr> */}

            {listedCities}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
