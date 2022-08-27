import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import _ from 'lodash';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';
import { fetchForecast } from '../actions';

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

  if (_.isEmpty(forecastData.entries)) {
    return <div>This is the weather index</div>;
  }

  function renderData() {
    function average(arr) {
      return Math.round(
        arr.reduce((prev, curr) => prev + parseInt(curr), 0) / arr.length
      );
    }
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
        <div className="chart" key={id}>
          <h3 className="chart__city">{forecastData.entries[id].city.name}</h3>
          <section className="chart__temperature">
            <Sparklines data={temperatureData[index]} svgWidth="100%">
              <SparklinesLine
                style={{
                  stroke: '#3aff1c',
                  strokeWidth: '0.5',
                  fill: '#73ff55',
                  fillOpacity: '0.5',
                }}
              />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <span className="chart__average">
              {average(temperatureData[index])}
            </span>
          </section>

          <section className="chart__pressure">
            <Sparklines data={pressureData[index]} svgWidth="100%">
              <SparklinesLine
                style={{
                  stroke: 'red',
                  strokeWidth: '0.5',
                  fill: 'orange',
                  fillOpacity: '0.5',
                }}
              />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <span className="chart__average">
              {average(pressureData[index])}
            </span>
          </section>

          <section className="chart__humidity">
            <Sparklines data={humidityData[index]} svgWidth="100%">
              <SparklinesLine
                style={{
                  stroke: 'black',
                  strokeWidth: '0.5',
                  fill: 'lightblue',
                  fillOpacity: '0.5',
                }}
              />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <span className="chart__average">
              {average(humidityData[index])}
            </span>
          </section>
        </div>
      ))
      .reverse();
    //

    // return forecastData.forEach(forecast => {

    // })
    return graphs;
  }
  return <>{renderData()}</>;
}
