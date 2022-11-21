import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

const CurrentWeather = ({ data }) => {
  const currentTemp = Math.round(data.main.temp);
  const condition = data.weather[0].main;
  const conditionIcon = data.weather[0].icon;
  const location = `${data.name}, ${data.sys.country}`;

  console.log(currentTemp, condition, conditionIcon, location);
  return (
    <Col md={2}>
      <div>{location}</div>
      <img
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
