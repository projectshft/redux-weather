import React from "react";
import { connect } from "react-redux";
import Chart from "../containers/Chart";


const WeatherList = (props) => {

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
        </tr>
      </thead>
      <tbody>
        {props.weather.map(weatherItem => {
            const temp = weatherItem.list.map(weather => (weather.main.temp - 273.15) * 9/5 + 32);
            const pressure = weatherItem.list.map(weather => weather.main.pressure);
            const humidity = weatherItem.list.map(weather => weather.main.humidity);
            
        
            return (
              <tr key={weatherItem.city.id}>
                <td>{weatherItem.city.name}</td>
                <td>
                  <Chart color='yellow' data={temp} units='F'/>
                </td>
                <td>
                  <Chart color='green' data={pressure} units='hPa'/>
                </td>
                <td>
                  <Chart color='blue' data={humidity} units='%'/>
                </td>
              </tr>
        )}
        )}
      </tbody>
    </table>
  )

}
function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList);