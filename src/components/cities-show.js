import { useSelector } from "react-redux";
import React from "react";
import  {Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const CitiesShow = () => {

  const forecast = useSelector((state) => state.forecast);

  const city = [];
  const temp = [];
  const pressure = [];
  const humidity = [];

  // city.push(forecast[0].city);

  forecast.forEach((f) => {
    temp.push(f.temperature);
    pressure.push(f.pressure);
    humidity.push(f.humidity);
  });

  return (

    <div>
      <table className="table table-hover" id="display">
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
              <tr>
                <td>{city}</td>
                <td>
                  <Sparklines data={temp} height={110} width={180} >
                    <SparklinesLine color="red" />
                    <SparklinesReferenceLine type="avg" />
                  </Sparklines>
                </td>
                <td>
                  <Sparklines data={pressure} height={120} width={180}>
                    <SparklinesLine color="green" />
                    <SparklinesReferenceLine type="avg" />
                  </Sparklines>
                </td>
                <td>
                  <Sparklines data={humidity} height={120} width={180}>
                    <SparklinesLine color="blue" />
                    <SparklinesReferenceLine type="avg" />
                  </Sparklines>
                </td>
              </tr>
          }
        </tbody> 
      </table>
    </div>
  );
};


export default CitiesShow;
