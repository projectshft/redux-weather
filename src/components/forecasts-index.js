import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";
import _ from 'lodash';

const ForecastsIndex = () => {
  const forecasts = useSelector((state) => state.forecasts)
  const dispatch = useDispatch();

  const renderForecasts =  () => {
    //average used to calculate the average of each weather data point in the .map() callback function below
    const average = array => Math.round(array.reduce((a, b)=> a + b)/array.length);
    if (!_.isEmpty(forecasts.cities)) {
      console.log('forecasts pressure ', forecasts.cities[0].list[0].main.pressure)
      console.log('City is: ', forecasts.cities[0].city.name)
      console.log(forecasts);
      
      //Map each query from the Forecast-New form
      const queryResults = forecasts.cities.map((forecast, i) => {
        //grabbing each datapoint from the list array to use in Sparkline and average() function
        let temps = forecast.list.map((data) => (
          data.main.temp
        ))
        let pressures = forecast.list.map((data) => (
          data.main.pressure
        ))
        let humidities = forecast.list.map((data) => (
          data.main.humidity
        )) 
        // console.log('Pressure array: ', pressures);
        // {/* <td>{forecast.list[0].main.temp} (F)</td>
        // <td>{forecast.list[0].main.pressure} (hPa)</td>
        // <td>{forecast.list[0].main.humidity} (%)</td> */}

        return (
          <tr index={i}>
            <td>
              {forecast.city.name}
            </td>
            <td>
              <div className="sparkline">
                <Sparklines data={temps}>
                  <SparklinesLine color="#D4AC0D"/>
                  <SparklinesReferenceLine type="avg" />
                </Sparklines>
              </div>
              {average(temps)} (F)
            </td>
            <td>
              <div className="sparkline">
                  <Sparklines data={pressures}>
                    <SparklinesLine color="#229954"/>
                    <SparklinesReferenceLine type="avg"/>
                  </Sparklines>
                </div>
              {average(pressures)} (hPa)
            </td>
            <td>
              <div className="sparkline">
                <Sparklines data={humidities}>
                  <SparklinesLine color="#717D7E"/>
                  <SparklinesReferenceLine type="avg"/>
                </Sparklines>
              </div>
              {average(humidities)} (%)
            </td>

          </tr>
        )
    })

      return (
        queryResults
          // <tr>
          //   <td>{forecasts.cities[0].city.name}</td>
          //   <td>{forecasts.cities[0].list[0].main.temp} (F)</td>
          //   <td>{forecasts.cities[0].list[0].main.pressure} (hPa)</td>
          //   <td>{forecasts.cities[0].list[0].main.humidity} (%)</td>
          // </tr>
      )
    }
    return (
        <tr>
          <td>No Cities Selected</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>     
    )
  }
  return (
    <div className="table-body">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">City </th>
            <th scope="col">Temperature (F)</th>
            <th scope="col">Pressure (hPa)</th>
            <th scope="col">Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {renderForecasts()}
        </tbody>
      </table>
    </div>
  )
}

export default ForecastsIndex;

// 