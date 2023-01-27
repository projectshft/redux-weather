import 'bootstrap/dist/css/bootstrap.css';
import { Table } from 'react-bootstrap';


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
      </tbody>
    </Table>
  )
};

export default WeatherTable