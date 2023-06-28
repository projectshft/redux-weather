/* eslint-disable no-param-reassign */
import '../index.css';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';
import { getCityWeather } from '../actions/actions-index';

const SearchCity = () => {
  const [city, setCity] = useState('');
  const weather = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleFormSubmit = () => {
    dispatch(getCityWeather(city));
    setCity('');
  };

  function renderWeather() {
    function renderTemp(temp) {
      temp = temp.map((item) => item.main.temp);
      return (
        <div>
          <Sparklines data={temp}>
            <SparklinesLine color="orange" />
            <SparklinesReferenceLine type="mean" />
          </Sparklines>
          <div>{Math.floor(temp[0])} F</div>
        </div>
      );
    }

    function renderPressure(pressure) {
      console.log(pressure);
      pressure = pressure.map((item) => item.main.pressure);
      return (
        <div>
          <Sparklines data={pressure}>
            <SparklinesLine color="green" />
            <SparklinesReferenceLine type="mean" />
          </Sparklines>
          <div className="col-md-4">{pressure[0]} hPa</div>
        </div>
      );
    }

    function renderHumidity(humidity) {
      humidity = humidity.map((item) => item.main.humidity);
      return (
        <div>
          <Sparklines data={humidity}>
            <SparklinesLine color="">{humidity}</SparklinesLine>
            <SparklinesReferenceLine type="mean" />
          </Sparklines>
          <div>{humidity[0]} %</div>
        </div>
      );
    }
    if (!_.isEmpty(weather)) {
      return weather.map((data) => (
        <tr key={data.city.id}>
          <td>{data.city.name}</td>
          <td>{renderTemp(data.list)}</td>
          <td>{renderPressure(data.list)}</td>
          <td>{renderHumidity(data.list)}</td>
        </tr>
      ));
    }
  }

  return (
    <div className="form-group">
      <form>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Get the Weather for a City"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
          <button
            className="btn btn-outline btn-primary"
            type="button"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </div>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{renderWeather()}</tbody>
      </table>
    </div>
  );
};

export default SearchCity;
