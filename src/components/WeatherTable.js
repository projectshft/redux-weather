import React from 'react';
import SearchBar from './SearchBar';

const WeatherTable = (weather) => {
    return (
    <div>
        <table className="table table-striped table-margin w-75 container-fluid">
  <thead>
    <tr>
      <th scope="col">City</th>
      <th scope="col">Temp</th>
      <th scope="col">Pressure</th>
      <th scope="col">Humidity</th>
    </tr>
  </thead>
  <tbody>
  {/* {weather.map((city) => (
        <tr  key={weather.number}>
          <td><img src={contact.profilePic} alt={contact.name + "'s profile pitcure"} /></td>
          <td>{city.name}</td>
          <td>{city.temop}</td>
          <td>{city.humidity}</td>
        </tr> */}

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

export default WeatherTable;