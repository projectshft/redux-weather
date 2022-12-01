import React from 'react';

const WeatherHeading = () => {
    return (
    <div>
        <table className="table table-striped table-margin">
  <thead>
    <tr>
      <th scope="col">City</th>
      <th scope="col">Temp</th>
      <th scope="col">Pressure</th>
      <th scope="col">Humidity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        {/* {cityArr.map(city => {
            return (
                <td>{city.name}</td>
                <td><ChartComponent x={city.temp} y={city.something} /></ChartComponent></td>
            )
        })} */}
      <td>City Name</td>
      <td>Chart</td>
      <td>Chart</td>
      <td>Chart</td>
    </tr>
  </tbody>
</table>
    </div>
    )
}

export default WeatherHeading;