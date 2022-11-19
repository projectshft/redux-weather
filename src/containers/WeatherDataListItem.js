import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import _ from 'lodash';

import formatTime from '../helpers/formatTime';

import CurrentWeather from './CurrentWeather';
import LineChart from './LineChart';
import generateChartConfig from './chartsConfig/generateChartConfig';

const WeatherDataListItem = ({ weather }) => {
  if (!weather.location || !weather.forecast) {
    return <div>An error occurred, please try your serach again.</div>;
  }

  const timeData = formatTime(weather.forecast);

  const tempData = weather.forecast.map((dataPoint) => dataPoint.main.temp);
  const tempChartConfig = generateChartConfig(
    tempData,
    timeData,
    {
      y: 'F  °',
      title: 'Temp (Farenheit)',
    },
    {
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    }
  );

  const pressureData = weather.forecast.map(
    (dataPoint) => dataPoint.main.pressure
  );
  const pressureChartConfig = generateChartConfig(
    pressureData,
    timeData,
    {
      y: 'hPa',
      title: 'Pressure(hPa)',
    },
    {
      borderColor: 'rgb(179,27,27)',
      backgroundColor: 'rgb(179,27,27,0.5)',
    }
  );

  const humidityData = weather.forecast.map(
    (dataPoint) => dataPoint.main.humidity
  );
  const humidityChartConfig = generateChartConfig(
    humidityData,
    timeData,
    {
      y: '%',
      title: 'Humidity(%)',
    },
    {
      borderColor: 'rgb(179,27,27)',
      backgroundColor: 'rgb(179,27,27,0.5)',
    }
  );

  return (
    <Row>
      {/* <CurrentWeather data={weather.current} /> */}
      <LineChart config={tempChartConfig} />
      <LineChart config={pressureChartConfig} />
      <LineChart config={humidityChartConfig} />
    </Row>
  );
};

WeatherDataListItem.propTypes = {
  weather: PropTypes.object,
};

export default WeatherDataListItem;
