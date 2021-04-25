import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';
import { fetchWeather } from '../actions';

const WeatherIndex = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const renderWeather = async () => {
    const { type, payload } = await fetchWeather(city);
    dispatch({ type, payload });
  };

  useEffect(() => {
    renderWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { weather } = useSelector((state) => state.weather);

  return (
    <div className="container">
      <div className="col-md-8 offset-md-2">
        <form>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter City"
              onChange={(event) => setCity(event.target.value)}
              defaultValue={city}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => renderWeather()}
              >
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
              <th scope="col">Pressure(hPa)</th>
              <th scope="col">Humidity(%)</th>
            </tr>
          </thead>
          <tbody>
            {weather.map((w, idx) => {
              const tempDataPoints = w.list.map((item) => item.main.temp);
              const pressureDataPoints = w.list.map(
                (item) => item.main.pressure
              );
              const humidityDataPoints = w.list.map(
                (item) => item.main.humidity
              );
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
                <tr key={idx}>
                  <th>{w.city.name}</th>
                  <td>
                    <Sparklines data={tempDataPoints}>
                      <SparklinesLine color="red" />
                      <SparklinesReferenceLine type="mean" />
                    </Sparklines>{' '}
                    <p>{tempAverage.toFixed(2)} F</p>
                  </td>
                  <td>
                    <Sparklines data={pressureDataPoints}>
                      <SparklinesLine color="blue" />
                      <SparklinesReferenceLine type="mean" />
                    </Sparklines>{' '}
                    <p>{pressureAverage.toFixed(2)} F</p>
                  </td>
                  <td>
                    <Sparklines data={humidityDataPoints}>
                      <SparklinesLine color="green" />
                      <SparklinesReferenceLine type="mean" />
                    </Sparklines>{' '}
                    <p>{humidtyAverage.toFixed(2)}%</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default WeatherIndex;
