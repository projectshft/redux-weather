import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';

const FiveDayIndex = () => {
  const fiveDayData = useSelector((state) => state.posts.data);
  const city = fiveDayData[0]?.city?.name || '';

  const renderData = () => {
    const temperature = [];
    const pressure = [];
    const humidity = [];

    fiveDayData.forEach((data) => {
      temperature.push(_.round(data.main.temp * (9 / 5) - 459.67)); // convert from Kelvin to Fahrenheit
      pressure.push(data.main.pressure);
      humidity.push(data.main.humidity);
    });

    return (
      <tr key={city} className="container">
        <th id={city} itemScope="row" className="col-1">
          {city}
        </th>
        <td className="col-3">
          <Sparklines data={temperature} preserveAspectRatio="xMinYMin">
            <SparklinesLine />
            <SparklinesReferenceLine type="mean" />
          </Sparklines>
          {temperature[0]} °F
        </td>
        <td className="col-3">
          <Sparklines data={pressure} preserveAspectRatio="xMinYMin">
            <SparklinesLine />
            <SparklinesReferenceLine type="mean" />
          </Sparklines>
          {pressure[0]} hPa
        </td>
        <td className="col-3">
          <Sparklines data={humidity} preserveAspectRatio="xMinYMin">
            <SparklinesLine />
            <SparklinesReferenceLine type="mean" />
          </Sparklines>
          {humidity[0]}%
        </td>
      </tr>
    );
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th itemScope="col">City</th>
          <th itemScope="col">Temperature</th>
          <th itemScope="col">Pressure</th>
          <th itemScope="col">Humidity</th>
        </tr>
      </thead>
      <tbody>{renderData()}</tbody>
    </table>
  );
};

export default FiveDayIndex;
