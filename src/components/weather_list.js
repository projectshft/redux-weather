import React from 'react';
import { connect, useSelector } from "react-redux";
import Chart from './chart';

const WeatherList = () => {
  // eslint-disable-next-line no-unused-vars
  const weatherInfo = useSelector((state) => state.weather);
  const renderTable = (weatherInfo) => {
    return (
      <div>
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (F)</th>
                    <th>Pressure (hPa)</th>              
                    <th>Humidity (%)</th>          
                </tr>
            </thead>
            <tbody>
            {
              weatherInfo.map((piece) => {
                return (
                  <tr key={piece.name + piece.temp}>
                    <td>{piece.name}</td>
                    
                    <td>
                    <Chart height={120} width={170} data={piece.chartTemperature} color='yellow' units='Farenheit' />
                </td>
                <td>
                    <Chart height={120} width={170} data={piece.chartHumidity} color='green' units='%' />
                </td>
                <td>
                    <Chart height={120} width={170} data={piece.chartPressure} color='black' units='hPa' />
                </td>
                    
                  
                    {/* <td>{piece.temp}</td>
                    <td>{piece.pressure}</td>
                    <td>{piece.humidity}</td> */}
                  </tr>
                )
              })
            }
            </tbody>
        </table>
      </div>
    );
  }
  return renderTable(weatherInfo);
}

const mapStateToProps = ({ weather }) => {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);