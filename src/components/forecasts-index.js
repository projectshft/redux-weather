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

/**
 * Forecast DOM component
 * @returns {DOM element}
 */
const ForecastsIndex = () => {
  // store variable declaration and variable to track state of store
  const store = useStore();
  const forecasts = useSelector((state) => state);
  // mutable variables to hold forecast data properties
  let searchedCity = 'City Name';
  let averageTemp = 0;
  let averagePressure = 0;
  let averageHumidity = 0;
  let tempsArray = [];
  let pressureArray = [];
  let humidityArray = [];

  // checks that returned api call data array is not empty then assigns variable values
  if (forecasts.forecasts.forecasts.length !== 0) {
    searchedCity = forecasts.forecasts.forecasts[0].city.name;
    tempsArray = forecasts.forecasts.forecasts[0].temp;
    pressureArray = forecasts.forecasts.forecasts[0].pressure;
    humidityArray = forecasts.forecasts.forecasts[0].humidity;
    averageTemp = calculateAverage(tempsArray);
    averageHumidity = calculateAverage(humidityArray);
    averagePressure = calculateAverage(pressureArray);
  }
  // variable for user input search and input string to component state
  const [searchInput, setSearch] = useState('');
  // variable to check that searchInput variable exists - used to enable/disable submit button for appropriate condition of weather forecast search
  const searchFormValid = Boolean(searchInput);

  /**
   *
   * calculates average value of array
   * @param {array}
   * @returns {average}
   *
   */
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
   * Function to render a Sparklines visual graph of input array plot points
   * with median line for average of array
   * @param {Array} valuesArray
   * @returns {Sparklines element}
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
