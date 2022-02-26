import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchWeather } from "../actions";
import Chart from "./Charts.js";
import "./WeatherTable.css";

function WeatherRow(props) {
  const dispatch = useDispatch();

  //Accounts for either a default load (Paris) or one set in local storage thorugh the set default button;
  useEffect(() => {
    if (!localStorage.getItem("city")) dispatch(fetchWeather("Paris"));
    if (localStorage.getItem("city"))
      dispatch(fetchWeather(localStorage.getItem("city")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Setting city to default in local storage
  const handleDefaultClick = (e) => {
    const city = e.target.id;
    localStorage.setItem("city", city);
    alert("Your default city is set!");
  };

  const weather = useSelector((state) => state.weather.weatherInfo);

  const renderWeather = () => {
    if (weather) {
      return weather.map((obj) => (
        <tr className="chart-row" key={obj?.city?.name}>
          <th className="city-name-cell" scope="col">
            {obj?.city?.name}
          </th>

          <td className="chart-graph">
            <Chart
              data={obj.list?.map((w) => w.main.temp)}
              color="red"
              units="Fahrenheit"
            />
          </td>
          <td className="chart-graph">
            <Chart
              data={obj?.list?.map((w) => w.main.humidity)}
              color="blue"
              units="%"
            />
          </td>
          <td className="chart-graph">
            <Chart
              data={obj?.list?.map((w) => w.main.pressure)}
              color="green"
              units="hPa"
            />
          </td>
          <td>
            <button
              className="btn btn-outline-success default-btn"
              type="submit"
              onClick={handleDefaultClick}
              id={obj?.city?.name}
            >
              Default
            </button>
          </td>
        </tr>
      ));
    }
    return (
      <tr>
        <td>There is no weather to show for that city</td>
      </tr>
    );
  };

  return <tbody>{renderWeather()}</tbody>;
}

export default WeatherRow;
