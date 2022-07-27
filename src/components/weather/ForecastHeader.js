import React from 'react';
import './forecastHeader.css';

const ForecastHeader = () => (
  <div className="forecast-grid">
    <div className="forecast-grid-header">
      <div>City Name:</div>
      <div>Temperature(F)</div>
      <div>Pressure(hPa)</div>
      <div>Humidity(%)</div>
    </div>
  </div>
);

export default ForecastHeader;
