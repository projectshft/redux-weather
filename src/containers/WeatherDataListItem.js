import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import _ from 'lodash';

import CurrentWeather from './CurrentWeather';
import TempChart from './charts/TempChart';
import PressureChart from './charts/PressureChart';
import HumidityChart from './charts/HumidityChart';

const WeatherDataListItem = ({ weather }) => {
  if (!weather.location || !weather.forecast) {
    return <div>An error occurred, please try your serach again.</div>;
  }

  // eslint-disable-next-line prettier/prettier
  const tempData = weather.forecast.map(
      (dataPoint) => dataPoint.main.temp
    );
  const pressureData = weather.forecast.map(
    (dataPoint) => dataPoint.main.pressure
  );
  const humidityData = weather.forecast.map(
    (dataPoint) => dataPoint.main.humidity
  );

  return (
    <Row>
      {/* <CurrentWeather data={weather.current} /> */}
      <TempChart tempData={tempData} />
      <PressureChart pressureData={pressureData} />
      {/* <HumidityChart data={humidityData}/> */}
    </Row>
  );
};

WeatherDataListItem.propTypes = {
  weather: PropTypes.shape({
    current: PropTypes.object,
    forecast: PropTypes.object,
    location: PropTypes.object,
  }),
};

export default WeatherDataListItem;
