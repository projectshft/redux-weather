import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchWeather } from "../actions";
import Chart from "./Charts.js";
import "./WeatherTable.css";

function WeatherRow() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather("Paris"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const weather = useSelector((state) => state.weather.weatherInfo);

  const renderWeather = () => {
    if (weather) {
      return weather.map((obj) => (
        <tr className="chart-row" key={obj.city.name}>
          <th className="city-name-cell" scope="col">
            {obj.city.name}
          </th>

          <td className="chart-graph">
            <Chart
              data={obj.list.map((w) => w.main.temp)}
              color="red"
              units="Fahrenheit"
            />
          </td>
          <td className="chart-graph">
            <Chart
              data={obj.list.map((w) => w.main.humidity)}
              color="blue"
              units="%"
            />
          </td>
          <td className="chart-graph">
            <Chart
              data={obj.list.map((w) => w.main.pressure)}
              color="green"
              units="hPa"
            />
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
