import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';
import { fetchWeather } from '../actions';

const WeatherIndex = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  const handlleWeatherSearch = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(city));
  };

  const renderWeatherData = () => {
    if (!_.isEmpty(weather)) {
      return weather.map((w) => {
        const tempDataPoints = w.list.map((item) => item.main.temp);
        const pressureDataPoints = w.list.map((item) => item.main.pressure);
        const humidityDataPoints = w.list.map((item) => item.main.humidity);
        const tempAverage = tempDataPoints.reduce(
          (item, c) => item + c / tempDataPoints.length,
          0
        );
        const pressureAverage = pressureDataPoints.reduce(
          (item, c) => item + c / pressureDataPoints.length,
          0
        );
        const humidtyAverage = humidityDataPoints.reduce(
          (item, c) => item + c / humidityDataPoints.length,
          0
        );
        return (
          <tr key={w.city.name}>
            <td>{w.city.name}</td>
            <td>
              <Sparklines data={tempDataPoints}>
                <SparklinesLine color="purple" />
                <SparklinesReferenceLine type="mean" />
              </Sparklines>
              <p>{Math.round(tempAverage)} °F</p>
            </td>
            <td>
              <Sparklines data={pressureDataPoints}>
                <SparklinesLine color="blue" />
                <SparklinesReferenceLine type="mean" />
              </Sparklines>
              <p>{Math.round(pressureAverage)} hPa</p>
            </td>
            <td>
              <Sparklines data={humidityDataPoints}>
                <SparklinesLine color="green" />
                <SparklinesReferenceLine type="mean" />
              </Sparklines>
              <p>{Math.round(humidtyAverage)}%</p>
            </td>
          </tr>
        );
      });
    }
  };

  return (
    <div className="container">
      <form onSubmit={handlleWeatherSearch}>
        <div className="input-group mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Get a five-day forecast in your favorite cities"
            onChange={(e) => setCity(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">City</th>
            <th scope="col">Temperature (F)</th>
            <th scope="col">Pressure (hPa)</th>
            <th scope="col">Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{renderWeatherData()}</tbody>
      </table>
    </div>
  );
};

export default WeatherIndex;
