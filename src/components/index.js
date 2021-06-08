import { useSelector } from "react-redux";
import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from "react-sparklines";
import _ from "lodash";

const CityWeatherIndex = () => {
  const cityWeather = useSelector((state) => state.cityWeather);
  console.log(cityWeather);

  function renderWeatherData() {
    if (!_.isEmpty(cityWeather)) {
      return cityWeather.cities.map((city) => (
        <tr>
          <td>{city.city_name}</td>
          <td>
            <Sparklines data={city.temperature}>
              <SparklinesLine />
              <SparklinesReferenceLine type="mean" />
            </Sparklines>
            Avg. {_.round(_.mean(city.temperature), 0)}
          </td>
          <td>
            <Sparklines data={city.pressure}>
              <SparklinesLine />
              <SparklinesReferenceLine type="mean" />
            </Sparklines>
            Avg. {_.round(_.mean(city.pressure), 0)}
          </td>
          <td>
            <Sparklines data={city.humidity}>
              <SparklinesLine />
              <SparklinesReferenceLine type="mean" />
            </Sparklines>
            Avg. {_.round(_.mean(city.humidity), 0)}
          </td>
        </tr>
      ));
    }
    return (
      <tr>
        <td>No city to show</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    );
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">City</th>
            <th scope="col">Temperature (F)</th>
            <th scope="col">Pressure (hPa)</th>
            <th scope="col">Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{renderWeatherData()}</tbody>
      </table>
    </div>
  );
};

export default CityWeatherIndex;
