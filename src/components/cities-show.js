import { useSelector } from "react-redux";
import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from "react-sparklines";

const CitiesShow = () => {
  const forecasts = useSelector((state) => state.forecasts);

  const city = [];

  forecasts.reduce((acc, f) => {
    if (acc.indexOf(f.city) === -1) {
      acc.push(f.city);
    }
  
    console.log(f.city);
    return acc;
  }, city);

  console.log(city[0]);

  let contents = city.map((c) => {
    //this assures that the city will not render twice if it is searched for twice
    let name = city[city.indexOf(c)];
    let temp = [];
    let pressure = [];
    let humidity = [];

    //filter forecast by the city using 'c'
    let filteredForecast = forecasts.filter((f) => {
      let include = f.city === c;
      // debugger;
      return include;
    });

    filteredForecast.forEach((f) => {
      temp.push(f.temperature);
      pressure.push(f.pressure);
      humidity.push(f.humidity);
    });

    return (
      <tr key="{city.name}">
        <td>{name}</td>
        <td>
          <Sparklines data={temp} height={110} width={180}>
            <SparklinesLine color="red" />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
        </td>
        <td>
          <Sparklines data={pressure} height={120} width={180}>
            <SparklinesLine color="green" />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
        </td>
        <td>
          <Sparklines data={humidity} height={120} width={180}>
            <SparklinesLine color="blue" />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <table className="table table-hover" id="display">
        <thead>
          <tr key={city}>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{contents}</tbody>
      </table>
    </div>
  );
};

export default CitiesShow;
