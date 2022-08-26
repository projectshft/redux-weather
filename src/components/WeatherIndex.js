import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import _ from 'lodash';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
  SparklinesSpots,
} from 'react-sparklines';
import { render } from '@testing-library/react';
import { fetchForecast } from '../actions';

export default function WeatherIndex() {
  // const isInitialMount = useRef(true);
  const geoData = useSelector(({ location }) => location);
  const forecastData = useSelector(({ forecasts }) => forecasts);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!_.isEmpty(geoData)) {
      dispatch(fetchForecast(geoData));
    }

    // dispatch(fetchForecast());
  }, [dispatch, geoData]);

  if (_.isEmpty(forecastData.entries)) {
    return <div>This is the weather index</div>;
  }

  function renderData() {
    // const tempHumidPressureData = forecastData.order.map((id) =>
    //   forecastData.entries[id].list.map((timestamp) => ({
    //     temperature: timestamp.main.temp,
    //     pressure: timestamp.main.pressure,
    //     humidity: timestamp.main.humidity,
    //   }))
    // );
    const temperatureData = forecastData.order.map((id) =>
      forecastData.entries[id].list.map((timestamp) => timestamp.main.temp)
    );
    const pressureData = forecastData.order.map((id) =>
      forecastData.entries[id].list.map((timestamp) => timestamp.main.pressure)
    );
    const humidityData = forecastData.order.map((id) =>
      forecastData.entries[id].list.map((timestamp) => timestamp.main.humidity)
    );
    return (
      <div>
        <Sparklines data={temperatureData[0]} width={300} height={40}>
          <SparklinesLine color="#56b45d" />
        </Sparklines>
        {/* <Sparklines data={pressureData[0]}>
          <SparklinesLine color="blue" dot={false} />
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
        <Sparklines data={humidityData[0]}>
          <SparklinesLine color="blue" />
          <SparklinesReferenceLine type="mean" />
        </Sparklines> */}
      </div>
    );

    // return forecastData.forEach(forecast => {

    // })
  }
  return <>{renderData()}</>;
}
