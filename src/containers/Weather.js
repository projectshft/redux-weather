import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import WeatherDataListItem from './WeatherDataListItem';

const Weather = () => {
  const weatherData = useSelector((state) => state.weather);

  if (_.isEmpty(weatherData)) {
    return (
      <Row>
        <Col className="offset-3" md={5}>
          <h2>Search for a city to get started!</h2>
        </Col>
      </Row>
    );
  }

  const renderWeatherDataList = () =>
    _.map(weatherData, (obj, key) => {
      const location = obj;
      return <WeatherDataListItem id={key} key={key} weather={location} />;
    });

  return (
    <Row>
      <Col md={12}>{renderWeatherDataList()}</Col>
    </Row>
  );
};

export default Weather;
