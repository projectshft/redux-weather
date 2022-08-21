import "../App.css";
import { useSelector } from "react-redux";
import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from "react-sparklines";

const WeatherDisplay = () => {
  const citiesWeather = useSelector((state) => state.weather);
  const renderWeather = () => {
    if (citiesWeather.length > 0) {
      return citiesWeather.map((c, index) => {
        return (
          <tr key={index}>
            <td className="align-middle">{c.city}</td>
            <td className="align-middle">
              <Sparklines data={c.temp} width={80} height={50} margin={5}>
                <SparklinesLine style={{ stroke: "#3aff1c", strokeWidth: "0.5", fill: "#73ff55", fillOpacity: "0.5" }}/>
                <SparklinesReferenceLine type="avg" />
              </Sparklines>
              {Math.round(c.temp.reduce((acc, cur) => acc + cur, 0)/c.temp.length)} F
            </td>
            <td className="align-middle">
              <Sparklines data={c.pressure} width={80} height={50} margin={5}>
                <SparklinesLine style={{ stroke: "#33ebff", strokeWidth: "0.5", fill: "#81eee2", fillOpacity: "0.5" }}/>
                <SparklinesReferenceLine type="avg" />
              </Sparklines>
              {Math.round(c.pressure.reduce((acc, cur) => acc + cur, 0)/c.temp.length)} hPa
            </td>
            <td className="align-middle">
              <Sparklines data={c.humidity} width={80} height={50} margin={5}>
                <SparklinesLine style={{ stroke: "#939da7", strokeWidth: "0.5", fill: "#a7b1bb", fillOpacity: "0.5" }}/>
                <SparklinesReferenceLine type="avg" />
              </Sparklines>
              {Math.round(c.humidity.reduce((acc, cur) => acc + cur, 0)/c.temp.length)} %
            </td>
          </tr>
        );
      });
    } else {
      return (
        <tr>
          <td>Data not found</td>
        </tr>
      );
    }
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>City</th>
            <th>Tempreture(F)</th>
            <th>Pressure(hPa)</th>
            <th>Humidity(%)</th>
          </tr>
        </thead>
        <tbody>{renderWeather()}</tbody>
      </table>
    </div>
  );
};

export default WeatherDisplay;
