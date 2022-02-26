import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { fetchWeather } from '../actions';

const WeatherIndex = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  const handlleWeatherSearch = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(city));
    console.log(city);
  };

  const renderWeatherData = () => {
    if (!_.isEmpty(weather)) {
      return weather.map((w, i) => (
        <tr key={w.city.name}>
          <td>{w.city.name}</td>
          <td>{w.list[i].main.temp}</td>
          <td>{w.list[i].main.pressure}</td>
          <td>{w.list[i].main.humidity}</td>
        </tr>
      ));
    }

    console.log(weather);
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
