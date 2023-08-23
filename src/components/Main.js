import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

function Main() {
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
        </tbody>
      </Table>
    </Container>
  );
}

export default Main;