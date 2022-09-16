import { useSelector } from "react-redux";
import React from "react";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";

const CitiesShow = () => {
  const forecasts = useSelector((state) => state.forecasts);
  const error = useSelector((state) => state.forecasts.error);
  const city = [];
  
  if (error) {
    return <div><h2>{error}</h2></div>;
  } else {
  forecasts.reduce((acc, f) => {
    if (acc.indexOf(f.city) === -1) {
      acc.push(f.city);
    }
    return acc;
  }, city);

  let contents = city.map((c) => {
    //defined 'name' in a way that assures that the city will not render twice if it is searched for twice
    let name = city[city.indexOf(c)];
    let temp = [];
    let pressure = [];
    let humidity = [];
    let filteredForecast = forecasts.filter((f) => {
      let include = f.city === c;
      return include;
    });

    filteredForecast.forEach((f) => {
      temp.push(f.temperature);
      pressure.push(f.pressure);
      humidity.push(f.humidity);
    });

    const findAverage = (array) => {
      return Math.round(
        array.reduce((acc, t) => {
          return acc + t;
        }, 0) / array.length
      );
    };

    let averageTemp = findAverage(temp);
    let averagePressure = findAverage(pressure);
    let averageHumidity = findAverage(humidity);

    return (
      <tr key="{city.name}">
        <td id="name">{name}</td>
        <td>
          <Sparklines data={temp} height={110} width={180}>
            <SparklinesLine color="red" />
            <SparklinesReferenceLine type="avg" />
          </Sparklines><br/>
          <div id="center">{averageTemp} F</div>
        </td>
        <td>
          <Sparklines data={pressure} height={120} width={180}>
            <SparklinesLine color="green" />
            <SparklinesReferenceLine type="avg" />
          </Sparklines><br/>
          <div id="center">{averagePressure} hPa</div>
        </td>
        <td>
          <Sparklines data={humidity} height={128} width={180}>
            <SparklinesLine color="blue" />
            <SparklinesReferenceLine type="avg" />
          </Sparklines><br/>
          <div id="center">{averageHumidity} %</div>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <table className="table table-hover" id="display">
        <thead>
          <tr key={city}>
            <th id="city">City</th>
            <th id="orient">Temperature (F)</th>
            <th id="orient">Pressure (hPa)</th>
            <th id="orient">Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{contents}</tbody>
      </table>
    </div>
  );
}};

export default CitiesShow;
