import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';
import { useSelector } from 'react-redux';

export default function DisplayWeather() {
  const weathers = useSelector((state) => state.weather);
  const weathersMap = weathers.map((weather, i) => (
    <tr>
      <th scope="row" key={i}>
        {weather.city}
      </th>
      <td className="spark">
        <Sparklines data={weather.temp.tempArr}>
          <SparklinesLine color="#FFD700" />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        {weather.temp.tempAver}
      </td>
      <td className="spark">
        {' '}
        <Sparklines data={weather.pressure.prArr}>
          <SparklinesLine color="#006400" />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        {weather.pressure.prAver}
      </td>
      <td className="spark">
        {' '}
        <Sparklines data={weather.humidity.humArr}>
          <SparklinesLine color="#191970" />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        {weather.humidity.humAver}
      </td>
    </tr>
  ));
  return (
    <div>
      <table className="table table-hover">
        <thead className="table-light">
          <tr>
            <th scope="col-md-3">City</th>
            <th scope="col-md-3">Temperature (K)</th>
            <th scope="col-md-3">Pressure (hPa)</th>
            <th scope="col">Humidity(%)</th>
          </tr>
        </thead>
        <tbody>{weathersMap}</tbody>
      </table>
    </div>
  );
}
