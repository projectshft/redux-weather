import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import _ from 'lodash';

import WeatherDataListItem from './WeatherDataListItem';

const Weather = () => {
  const weatherData = useSelector((state) => state.weather);

  if (_.isEmpty(weatherData)) {
    return (
      <Row>
        <Col className="offset-4 text-center" md={4}>
          <h2>Search for a city to get started!</h2>
        </Col>
      </Row>
    );
  }

  const renderWeatherDataList = () =>
    _.map(weatherData, (obj, key) => (
      <WeatherDataListItem id={key} key={key} weather={obj} />
    ));

  return (
    <Row>
      <Col md={12}>{renderWeatherDataList()}</Col>
    </Row>
  );
};

export default Weather;
