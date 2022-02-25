import { useState } from 'react';

const WeatherIndex = () => {
  const [city, setCity] = useState('');

  return (
    <div className="container">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Get a five-day forecast in your favorite cities"
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button">
            Submit
          </button>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">City</th>
            <th scope="col">Temperature (F)</th>
            <th scope="col">Pressure (hPa)</th>
            <th scope="col">Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeatherIndex;
