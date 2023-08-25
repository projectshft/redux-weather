import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import Chart from './Chart';

function Main() {
  const locations = useSelector((state) => state.locations);

  return (
    <Container className="col-8 p-4">
      <Table borderless hover>
        <thead>
          <tr className="border-top border-bottom text-center">
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {locations.order.map((location) => (
            <tr
              className="border-bottom align-middle text-center"
              key={location}
            >
              <td>{locations.entries[location].city.name}</td>
              <td>
                <Chart id={location} type="temp" color="blue" />
              </td>
              <td>
                <Chart id={location} type="pressure" color="green" />
              </td>
              <td>
                <Chart id={location} type="humidity" color="orange" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Main;
