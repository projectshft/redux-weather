import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

const CurrentWeather = ({ data }) => {
  console.log(data);
  // const currentTemp
  return (
    <Col md={3}>
      <div>Location</div>
      <div>Icon</div>
      <div>Temp</div>
    </Col>
  );
};

CurrentWeather.propTypes = {
  data: PropTypes.object,
};

export default CurrentWeather;
