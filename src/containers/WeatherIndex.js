import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import _ from 'lodash';
import { fetchForecast } from '../actions';
import WeatherRow from '../components/WeatherRow';

function checkIfNums(data) {
  if (typeof data.lat === 'number' && typeof data.lon === 'number') {
    return true;
  }
  alert('The city name entered was not valid. Please check your spelling.');
  return false;
}

export default function WeatherIndex() {
  const geoData = useSelector(({ location }) => location);
  const forecastData = useSelector(({ forecasts }) => forecasts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!_.isEmpty(geoData) && checkIfNums(geoData)) {
      dispatch(fetchForecast(geoData));
    }
  }, [dispatch, geoData]);

  function renderData() {
    const temperatureData = forecastData.order.map((id) =>
      forecastData.entries[id].list.map((timestamp) => timestamp.main.temp)
    );
    const pressureData = forecastData.order.map((id) =>
      forecastData.entries[id].list.map((timestamp) => timestamp.main.pressure)
    );
    const humidityData = forecastData.order.map((id) =>
      forecastData.entries[id].list.map((timestamp) => timestamp.main.humidity)
    );

    const graphs = forecastData.order
      .map((id, index) => (
        <WeatherRow
          id={id}
          city={forecastData.entries[id].city.name}
          temperatureData={temperatureData[index]}
          pressureData={pressureData[index]}
          humidityData={humidityData[index]}
        />
      ))
      .reverse();

    return graphs;
  }

  return _.isEmpty(forecastData.entries) ? (
    <div>Search a city to get the forecast!</div>
  ) : (
    renderData()
  );
}
