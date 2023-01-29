import 'bootstrap/dist/css/bootstrap.css';
import { Table } from 'react-bootstrap';
import WeatherTableData from './weatherTableData';

const WeatherTable = () => {

  return (
    <Table responsive>
      <thead>
        <tr className="text-center">
          <th>City</th>
          <th>Temperature (F)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
        </tr>
      </thead>
      <tbody>
        <WeatherTableData />
      </tbody>
    </Table>
  )
};

export default WeatherTable