import { Col, Row } from 'react-bootstrap';
import WeatherDataListItem from './WeatherDataListItem';

const Weather = () => {
  const renderWeatherDataList = () => [<WeatherDataListItem />];
  return (
    <Row className="justify-content-center ">
      <Col md={8}>{renderWeatherDataList()}</Col>
    </Row>
  );
};

export default Weather;
