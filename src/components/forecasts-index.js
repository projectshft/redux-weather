import 'bootstrap/dist/css/bootstrap.min.css';

// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector, useStore } from 'react-redux';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';
import { useState } from 'react';
import { fetchFiveDayForecast } from '../reducers/forecastSlice';

const ForecastsIndex = () => {
  const store = useStore();
  const forecasts = useSelector((state) => state);
  let searchedCity = 'City Name';
  let averageTemp = 0;
  let averagePressure = 0;
  let averageHumidity = 0;
  let tempsArray = [];
  let pressureArray = [];
  let humidityArray = [];

  if (forecasts.forecasts.forecasts.length !== 0) {
    searchedCity = forecasts.forecasts.forecasts[0].city.name;
    tempsArray = forecasts.forecasts.forecasts[0].temp;
    pressureArray = forecasts.forecasts.forecasts[0].pressure;
    humidityArray = forecasts.forecasts.forecasts[0].humidity;
    averageTemp = calculateAverage(tempsArray);
    averageHumidity = calculateAverage(humidityArray);
    averagePressure = calculateAverage(pressureArray);
  }
  // placeholder for URL search
  const [searchInput, setSearch] = useState('');

  const searchFormValid = Boolean(searchInput);

  function calculateAverage(array) {
    let average = 0;
    if (array.length !== 0) {
      const sum = array.reduce((acc, value) =>
        Math.floor(Math.round(acc + value))
      );
      average = Math.round(sum / array.length);
    }
    return average;
  }

  const handleSearchOnClick = () => {
    store.dispatch(fetchFiveDayForecast(searchInput));
  };

  /**
   *
   * @param {Array} valuesArray
   * @returns DOM component
   */
  function renderForecastValues(valuesArray) {
    return (
      <Sparklines data={valuesArray}>
        <SparklinesLine />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
    );
  }

  return (
    <div className="forecasts-index">
      <header className="header">
        <div className="cityName">
          <h1>
            <span style={{ fontWeight: 'bold' }}>{searchedCity}</span> -{' '}
            <span style={{ fontStyle: 'italic' }}>Five Day Forecast:</span>
          </h1>
        </div>
        <div className="forecast-displays">
          <div id="temperature" className="col-md-4">
            <h2>Temperatures (Average - {averageTemp}° F):</h2>
            <div>{renderForecastValues(tempsArray)}</div>
            <div id="temperature-chart" />
          </div>
          <div id="pressure" className="col-md-4">
            <h2>Pressure (Average - {averagePressure} hPa):</h2>
            <div>{renderForecastValues(pressureArray)}</div>
            <div id="pressure-chart" />
          </div>
          <div id="humidity" className="col-md-4">
            <h2>Humidity (Average - {averageHumidity}%):</h2>
            <div>{renderForecastValues(humidityArray)}</div>
            <div id="humidity-chart" />
          </div>
        </div>
        <form className="search-form">
          <div className="form-group col-md-4 m-2">
            <input
              type="text"
              id="search-query"
              className="form-control col-md-1"
              placeholder="City"
              onChange={(event) => setSearch(event.target.value)}
            />
            <button
              type="button"
              className="btn btn-primary search"
              onClick={handleSearchOnClick}
              disabled={!searchFormValid}
            >
              Search
            </button>
          </div>
        </form>
      </header>
    </div>
  );
};

export default ForecastsIndex;
