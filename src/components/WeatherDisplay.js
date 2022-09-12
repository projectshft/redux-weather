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
              <Sparklines data={c.temp} width={100} height={80} margin={10}>
                <SparklinesLine style={{ stroke: "#ed2121", strokeWidth: "0.5", fill: "#f5426f", fillOpacity: "0.5" }}/>
                <SparklinesReferenceLine type="avg" />
              </Sparklines>
              {Math.round(c.temp.reduce((previousValue, currentValue) => previousValue + currentValue, 0)/c.temp.length)}{'\u00b0'} F
            </td>

            <td className="align-middle">
              <Sparklines data={c.humidity} width={100} height={80} margin={10}>
                <SparklinesLine style={{ stroke: "#2151ed", strokeWidth: "0.5", fill: "#21ceed", fillOpacity: "0.5" }}/>
                <SparklinesReferenceLine type="avg" />
              </Sparklines>
              {Math.round(c.humidity.reduce((previousValue, currentValue) => previousValue + currentValue, 0)/c.temp.length)} %
            </td>

            <td className="align-middle">
              <Sparklines data={c.pressure} width={100} height={80} margin={10}>
                <SparklinesLine style={{ stroke: "#21ed65", strokeWidth: "0.5", fill: "#21ed35", fillOpacity: "0.5" }}/>
                <SparklinesReferenceLine type="avg" />
              </Sparklines>
              {Math.round(c.pressure.reduce((previousValue, currentValue) => previousValue + currentValue, 0)/c.temp.length)} hPa
            </td>


          </tr>
        );
      });
    } 
    
    else {
      return (
        <tr>
          <td>Data is Empty. Input a city and press enter for data.</td>
        </tr>
      );
    }
  };

  return (
    <div className='container-fluid'>
      <br />
      <table className="table row align-items-center">
        <thead>
          <tr>
            <th>City</th>
            <th>Tempreture(F)</th>
            <th>Humidity(%)</th>
            <th>Pressure(hPa)</th>
          </tr>
        </thead>
        <tbody>{renderWeather()}</tbody>
      </table>
    </div>
  );
};

export default WeatherDisplay;