import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

const CurrentWeather = ({ data }) => {
  const currentTemp = Math.round(data.main.temp);
  const condition = data.weather[0].main;
  const conditionIcon = data.weather[0].icon;
  const location = `${data.name}, ${data.sys.country}`;

  return (
    <Col className="weather-current" md={2}>
      <div className="location-current">{location}</div>
      <div className="conditon-name">{condition}</div>
      <img
        className="condition-icon"
        src={`http://openweathermap.org/img/wn/${conditionIcon}@2x.png`}
        alt="Condition Icon"
      />
      <div>Currently: {currentTemp}F</div>
    </Col>
  );
};

CurrentWeather.propTypes = {
  data: PropTypes.object,
};

export default CurrentWeather;
