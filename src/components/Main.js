import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

function Main() {
  const locations = useSelector((state) => state.locations);

  console.log(locations);

  return (
    <Container className="col-8 p-4">
      <Table striped borderless hover>
        <thead>
          <tr className="border-top border-bottom">
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
              {locations.order.map((location) => {
                return (
                  <tr key={location}>
                    <td>
                      {locations.entries[location].city.name}
                    </td>
                  </tr>
                )
              })}  
        </tbody>
      </Table>
    </Container>
  );
}

export default Main;