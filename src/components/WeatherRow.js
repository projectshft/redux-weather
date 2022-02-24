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

  const weather = useSelector((state) => state.weather);
  console.log(weather);

  //Variables that we'll need for React Sparklines graphs
  const city = weather?.weatherInfo?.city?.name;
  const temp = weather?.weatherInfo?.list?.map((weather) => weather.main.temp);
  const humidity = weather?.weatherInfo?.list?.map(
    (weather) => weather.main.humidity
  );
  const pressure = weather?.weatherInfo?.list?.map(
    (weather) => weather.main.pressure
  );

  if (weather.weatherInfo.list) {
    return (
      <tr className="chart-row" key={city}>
        <th className="city-name-cell" scope="col">
          {city}
        </th>
        <td className="chart-graph">
          <Chart
            // height={100}
            // width={150}
            data={temp}
            color="red"
            units="Fahrenheit"
          />
        </td>
        <td className="chart-graph">
          <Chart
            // height={100}
            // width={150}
            data={humidity}
            color="blue"
            units="%"
          />
        </td>
        <td className="chart-graph">
          <Chart
            // height={100}
            // width={150}
            data={pressure}
            color="green"
            units="hPa"
          />
        </td>
      </tr>
    );
  }
  return (
    <tr>
      <td>There is no weather to show for that city</td>
    </tr>
  );
}

export default WeatherRow;
