import Table from 'react-bootstrap/Table';

function SearchResults() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <Table hover>
            <thead>
              <tr>
                <th>City</th>
                <th>Temperature (F)</th>
                <th>Pressure (hPa)</th>
                <th>Humidity (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Los Angeles</td>
                <td>59</td>
                <td>20</td>
                <td>50</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
