import React from "react";
import { useSelector } from "react-redux";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";

const buildTempSparkline = (tempData) => {
  return (
    <Sparklines data={tempData}>
      <SparklinesLine color="orange" />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
  )
};

const buildPressureSparkline = (pressureData) => {
  return (
    <Sparklines data={pressureData}>
      <SparklinesLine color="green" />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
  )
}

const buildHumiditySparkline = (humidityData) => {
  return (
    <Sparklines data={humidityData}>
      <SparklinesLine color="blue" />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
  )
}

const Forecasts = () => {
  const forecasts = useSelector(state => state.rootReducer.forecasts);

  if (forecasts.length > 0) {

    const forecastDisplays = forecasts.map(forecast => {
      const name = forecast.name;
      const tempData = forecast.temp;
      const tempAvg = Math.round(tempData.reduce((a, b) => a + b, 0)/40);
      const pressureData = forecast.pressure;
      const pressureAvg = Math.round(pressureData.reduce((a, b) => a + b, 0)/40);
      const humidityData = forecast.humidity;
      const humidityAvg = Math.round(humidityData.reduce((a, b) => a + b, 0)/40);
      
      return (
        <div className="row">
          <div className="col-1 align-self-center">
            <p>{name}</p>
          </div>
          <div className="col">
            {buildTempSparkline(tempData)}
            <p>Average temperature: {tempAvg}{"\u00b0"}</p>
          </div>
          <div className="col">
            {buildPressureSparkline(pressureData)}
            <p>Average pressure: {pressureAvg}</p>
          </div>
          <div className="col">
            {buildHumiditySparkline(humidityData)}
            <p>Average humidity: {humidityAvg}%</p>
          </div>
        </div>
      )
    })


    return (
      <div className="container">
        <div className="row">
          <div className="col-1">Name</div>
          <div className="col">Temperature (Fahrenheit)</div>
          <div className="col">Pressure (hPa)</div>
          <div className="col">Humidity</div>
        </div>
        {forecastDisplays}
      </div>
    )
  }
  

  return (
    <div className="container">
      Nothing to show!
    </div>
  )
}

export default Forecasts;
