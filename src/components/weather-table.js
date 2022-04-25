import _ from 'lodash';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  Sparklines, SparklinesLine, SparklinesReferenceLine
} from "react-sparklines";
import { fetchCities } from '../actions';

const Weather = () => {
  const cities = useSelector((state) => state.cities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCities());
  });

  const renderCities = () => {
    if (!_.isEmpty(cities.order)){
      return cities.order.map((cityName) => {
        const tempData = cities.entries[cityName].temp;
        const pressureData = cities.entries[cityName].pressure;
        const humidityData = cities.entries[cityName].humidity;
        const average = (array) => array.reduce((a,b) => a + b, 0) / array.length;

        return (
          <tr key={cityName}>
            <th className="align-middle" scope="row">{cityName}</th>
            <td className="align-middle">
              <Sparklines data={tempData}>
                <SparklinesLine color="yellow" />
                <SparklinesReferenceLine type="mean" />
              </Sparklines>
              <h3>{Math.floor(average(tempData))}°</h3>
            </td>
            <td className="align-middle">
              <Sparklines data={pressureData}>
                <SparklinesLine color="green" />
                <SparklinesReferenceLine type="mean" />
              </Sparklines>
              <h3>{Math.floor(average(pressureData))} hPa</h3>
            </td>
            <td className="align-middle">
              <Sparklines data={humidityData}>
                <SparklinesLine color="blue" />
                <SparklinesReferenceLine type="mean" />
              </Sparklines>
              <h3>{Math.floor(average(humidityData))}%</h3>
            </td>
          </tr>
        );
      });
    }
  }

  if (_.isEmpty(cities.order)) {
    return (
      <h3 className="text-center text-muted start-message">Type in a city name to get started</h3>
    )
  };

  return (
    <div className="container text-center">
      <hr/>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">City</th>
            <th scope="col">Temperature (F)</th>
            <th scope="col">Pressure (hPa)</th>
            <th scope="col">Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {renderCities()}
        </tbody>
      </table>
    </div>
  );
};

export default Weather;
