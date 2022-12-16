import React from 'react';
import { useSelector } from 'react-redux';


const WeatherTable = () => {
  // const weather = useSelector((state) => state.weather);
  const weather = useSelector((state) => state.weatherReducer);
  const { data } = weather;
  const { name, main } = data;
  const { temp, humidity, pressure } = main;




    return (
    <div>
        <table className="table table-striped table-margin w-75 container-fluid">
  <thead>
    <tr>
      <th scope="col">City</th>
      <th scope="col">Temp (°F)</th>
      <th scope="col">Pressure (Pa)</th>
      <th scope="col">Humidity (%)</th>
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
      {/* <td>{data.name}</td>
      <td>{data.main.temp} °F</td>
      <td>{data.main.humidity}</td>
      <td>{data.main.pressure}</td> */}
    </tr>
    <tr>
      <td>{ name }</td>
      <td>{ temp }</td>
      <td>{ humidity }</td>
      <td>{ pressure }</td>
    </tr>
  </tbody>
</table>
    </div>
    )
}

export default WeatherTable;