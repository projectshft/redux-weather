import 'bootstrap/dist/css/bootstrap.min.css';

// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch, useSelector } from 'react-redux';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';
import { useState, useEffect } from 'react';
import _ from 'lodash';
import { fetchFiveDayForecast } from '../actions';

const ForecastsIndex = () => {
  const forecasts = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFiveDayForecast(searchInput));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchFiveDayForecast()]);

  console.log(forecasts);
  console.log('forecasts index is being executed');

  // console.log(forecasts.data.list[0].main.temp);
  // console.log(forecasts.data.list[0].main.pressure);
  // console.log(forecasts.data.list[0].main.humidity);

  // placeholder for URL search
  const [searchInput, setSearch] = useState('');

  // array variables for forecast data
  const tempsArray = [];
  const pressureArray = [];
  const humidityArray = [];

  const handleSearchOnClick = () => {
    const fiveDayForecastData = fetchFiveDayForecast(searchInput);
    console.log(fiveDayForecastData);
    console.log(fiveDayForecastData.payload);
    console.log(fiveDayForecastData.type);
  };

  /**
   *
   * @param {Array} valuesArray
   * @returns DOM component
   */
  function renderForecastValues(valuesArray) {
    console.log(valuesArray);
    if (!_.isEmpty(valuesArray)) {
      return (
        <Sparklines data={valuesArray}>
          <SparklinesLine />
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
      );
    }
    return <div>No forecasts to show</div>;
  }

  return (
    <div className="forecasts-index">
      <header className="header">
        <div className="forecast-displays row">
          <div id="temperature" className="col-md-4">
            <h1>Temp</h1>
            <div>{renderForecastValues(tempsArray)}</div>
            <div id="temperature-chart" />
          </div>
          <div id="pressure" className="col-md-4">
            <h1>Pressure</h1>
            <div>{renderForecastValues(pressureArray)}</div>
            <div id="pressure-chart" />
          </div>
          <div id="humidity" className="col-md-4">
            <h1>Humidity</h1>
            <div>{renderForecastValues(humidityArray)}</div>
            <div id="humidity-chart" />
          </div>
        </div>
        <form className="search-form">
          <div className="form-group col-md-4">
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
