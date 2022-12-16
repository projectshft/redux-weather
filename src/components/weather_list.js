import React, {useState} from 'react';
import { fetchWeather } from '../actions';
import Chart from './chart';
import { connect } from "react-redux";



const WeatherList = (weatherInfo) => {
  // eslint-disable-next-line no-unused-vars

  // const individualInfo = () => {
  //   weatherInfo.map(item) {
  //   return item
  // }}
  const renderTable = (weatherInfo) => {
    // const [data, setData] = useState('Search data');
    console.log(weatherInfo, 'rendertable');      
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
                      <tr>
                        <td>
                        {weatherInfo.weatherInfo}
                        </td>
                        {/* <td>{weatherData}</td>
                        <td>{weatherData}</td>
                        <td>{weatherData}</td> */}
                        </tr>
                       
                          {/* {weatherInfo.map(row)} */}
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

