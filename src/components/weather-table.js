import 'bootstrap/dist/css/bootstrap.css';
import { Table } from 'react-bootstrap';
import FiveDayForecast from './five-day-forecast';

const WeatherTable = () => {
  return (
    <Table responsive>
      <thead>
        <tr className="text-center">
          <th>City</th>
          <th>Temperature (K)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
        </tr>
      </thead>
      <tbody>
        <FiveDayForecast />
      </tbody>
    </Table>
  )
};

export default WeatherTable