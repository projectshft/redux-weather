import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';

const FiveDayShow = ({ city, data }) => {
  const temperature = [];
  const pressure = [];
  const humidity = [];

  data.forEach((dataPoint) => {
    temperature.push(_.round(dataPoint.main.temp * (9 / 5) - 459.67)); // convert from Kelvin to Fahrenheit
    pressure.push(dataPoint.main.pressure);
    humidity.push(dataPoint.main.humidity);
  });

  return (
    <tr key={city} className="container">
      <th itemScope="row" className="col-1">
        {city}
      </th>
      <td className="col-3">
        <Sparklines data={temperature} preserveAspectRatio="xMinYMin">
          <SparklinesLine color="green" />
          <SparklinesReferenceLine type="mean" style={{ fill: 'green' }} />
        </Sparklines>
        {_.round(_.mean(temperature))} °F
      </td>
      <td className="col-3">
        <Sparklines data={pressure} preserveAspectRatio="xMinYMin">
          <SparklinesLine color="red" />
          <SparklinesReferenceLine type="mean" style={{ fill: 'red' }} />
        </Sparklines>
        {_.round(_.mean(pressure))} hPa
      </td>
      <td className="col-3">
        <Sparklines data={humidity} preserveAspectRatio="xMinYMin">
          <SparklinesLine color="orange" />
          <SparklinesReferenceLine type="mean" style={{ fill: 'orange' }} />
        </Sparklines>
        {_.round(_.mean(humidity))}%
      </td>
    </tr>
  );
};

FiveDayShow.propTypes = {
  city: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      main: PropTypes.shape({
        temp: PropTypes.number.isRequired,
        pressure: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
};

export default FiveDayShow;
