import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import WeatherDataListItem from './WeatherDataListItem';

const Weather = () => {
  const weatherData = useSelector((state) => state.weather);

  const renderWeatherDataList = () =>
    _.map(weatherData, (obj, key) => {
      const location = obj;
      return <WeatherDataListItem key={key} weather={location} />;
    });

  return (
    <Row className="justify-content-center ">
      <Col md={10}>{renderWeatherDataList()}</Col>
    </Row>
  );
};

export default Weather;
