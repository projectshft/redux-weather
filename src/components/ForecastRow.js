import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from "react-sparklines";

export default function ForecastRow({ cityData }) {
  console.log(cityData);
  const average = (values) => {
    return Math.round(values.reduce((a, b) => a + b) / values.length);
  };

  const temperatureForecast = () => {
    return cityData.forecast.map((time) => {
      return time.main.temp;
    });
  };

  const pressureForecast = () => {
    return cityData.forecast.map((time) => {
      return time.main.pressure;
    });
  };

  const humidityForecast = () => {
    return cityData.forecast.map((time) => {
      return time.main.humidity;
    });
  };
  console.log(temperatureForecast());
  return (
    <>
      <tr>
        <td>{cityData.cityName}</td>
        <td>
          <Sparklines data={temperatureForecast()} height={150}>
            <SparklinesLine color="#FB5431" />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
          {average(temperatureForecast())} F
        </td>
        <td>
          <Sparklines data={pressureForecast()} height={150}>
            <SparklinesLine color="#31B0FB" />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
          {average(pressureForecast())} hPa
        </td>
        <td>
          <Sparklines data={humidityForecast()} height={150}>
            <SparklinesLine color="#555555" />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
          {average(humidityForecast())} %
        </td>
      </tr>
    </>
  );
}
