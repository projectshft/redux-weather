import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import _ from 'lodash';

import formatTime from '../helpers/formatTime';

import CurrentWeather from './CurrentWeather';
import TempChart from './charts/TempChart';
import PressureChart from './charts/PressureChart';
import HumidityChart from './charts/HumidityChart';

const WeatherDataListItem = ({ weather }) => {
  if (!weather.location || !weather.forecast) {
    return <div>An error occurred, please try your serach again.</div>;
  }

  const timeData = formatTime(weather.forecast);
  console.log(timeData);

  // const unixTimes = weather.forecast.map((time) => new Date(time.dt * 1000));
  // const hrs = unixTimes.map((time) => time.getHours());

  // const formattedHrs = hrs.map((hour) => {
  //   if (hour <= 12) {
  //     return `${hour}AM`;
  //   }
  //   return `${hour - 12}PM`;
  // });

  // const days = unixTimes.map((time) => time.getDay());

  // const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

  // const formattedDays = days.map((day) => daysOfWeek[day]);
  // const timeData = { formattedDays, formattedHrs };

  const tempData = weather.forecast.map((dataPoint) => dataPoint.main.temp);
  const pressureData = weather.forecast.map(
    (dataPoint) => dataPoint.main.pressure
  );
  const humidityData = weather.forecast.map(
    (dataPoint) => dataPoint.main.humidity
  );

  return (
    <Row>
      {/* <CurrentWeather data={weather.current} /> */}
      <TempChart tempData={tempData} timeData={timeData} />
      <PressureChart pressureData={pressureData} timeData={timeData} />
      {/* <HumidityChart data={humidityData} timeData={timeData}/> */}
    </Row>
  );
};

WeatherDataListItem.propTypes = {
  weather: PropTypes.object,
};

export default WeatherDataListItem;
