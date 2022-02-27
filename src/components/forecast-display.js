import _ from 'lodash';
import { useSelector } from 'react-redux';
import Forecast from './forecast.js';

const ForecastDisplay = () => {
  const forecasts = useSelector((state) => state.forecasts);

  const renderForecasts = () =>
    forecasts.order.map((cityName) => {
      const forecastData = forecasts.entries[cityName];
      return <Forecast data={forecastData} />;
    });

  return <div className="forecasts-container">{renderForecasts()}</div>;
};

export default ForecastDisplay;
