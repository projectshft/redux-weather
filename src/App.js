import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//Redux state access and dispatch
import { useSelector, useDispatch } from "react-redux";
//React Hooks
import { useState } from "react";
// action creators
import { updateAPI } from "../src/redux/city.js";

//You must be able to ender a city, click search and see 3 charts show up.
// There will be a chart for "temperature" (in F), Pressure and Humidity.
// ---  openweatherAPI to pull the data for all three.

// Each of the charts will be populated with data from the 5 day forecast as well as a reference line which will show the average (of that particular data point).
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

function App() {
  const [cityName, setCityName] = useState("");
  const cityProfile = useSelector((state) => state);
  // console.log(cityProfile);

  const listedCities = cityProfile.citySearchReducer.weatherInfo.map(
    (item, index) => {
      return (
        <tr key={index}>
          <td>
            <b>{item.city}</b>
          </td>
          <td>{item.temp}</td>
          <td>{item.pressure}</td>
          <td>{item.humidity}</td>
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
