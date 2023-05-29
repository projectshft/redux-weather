import React from "react";
import { useSelector } from "react-redux";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";
import _ from 'lodash';

const ForecastIndex = () => {
  const forecasts = useSelector((state) => state.forecasts)

  const renderForecast = () => {
    console.log(forecasts.cities)   

    if (!_.isEmpty(forecasts.cities)) {   
      console.log(forecasts.cities)   
      const queryResults = forecasts.cities.map((forecast, i) => {
        console.log(forecast)
        console.log(forecast)
        let temps= forecast.main.temp
        console.log(temps)
        let pressures = forecast.main.pressure
        console.log(forecast)
        let humidities = forecast.main.humidity

        return (
          <tr index={i}>
            <td className="city">
              {forecast.name}
            </td>
            <td className="data">
              <div className="sparkline">
                <Sparklines data={[temps]} svgWidth={150} svgHeight={100}>
                  <SparklinesLine color="#D4AC0D"/>
                  <SparklinesReferenceLine type="avg" />
                </Sparklines>
              </div>
              {[temps]} (F)
            </td>
            <td className="data">
              <div className="sparkline">
                  <Sparklines data={[pressures]} svgWidth={150} svgHeight={100}>
                    <SparklinesLine color="#229954"/>
                    <SparklinesReferenceLine type="avg"/>
                  </Sparklines>
                </div>
              {[pressures]} (hPa)
            </td>
            <td className="data">
              <div className="sparkline">
                <Sparklines data={[humidities]} svgWidth={150} svgHeight={100}>
                  <SparklinesLine color="#717D7E"/>
                  <SparklinesReferenceLine type="avg"/>
                </Sparklines>
              </div>
              {[humidities]} (%)
            </td>
          </tr>
        )
    })

      return (queryResults);
    }
    console.log(forecasts.cities)
    return (
        <tr>
          <td>No Cities Entered</td>
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
          {renderForecast()}
        </tbody>
      </table>
    </div>
  )
};

export default ForecastIndex;