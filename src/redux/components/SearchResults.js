import Table from 'react-bootstrap/Table';
import WeatherDetails from './WeatherDetails'

function SearchResults() {
  return (
    <div>
      <div className="container">
        <div className="row text-center">
          <Table hover>
            <thead>
              <tr>
                <th>City</th>
                <th>Temperature (F)</th>
                <th>Pressure (hPa)</th>
                <th>Humidity (%)</th>
              </tr>
            </thead>
            <WeatherDetails />
          </Table>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
