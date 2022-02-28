import _ from 'lodash';
import { useSelector } from 'react-redux';
import Forecast from './forecast.js';

const ForecastDisplay = () => {
  const forecasts = useSelector((state) => state.forecasts);

  const renderForecasts = () =>
    forecasts.order.map((cityName) => {
      const forecastData = forecasts.entries[cityName];
      return <Forecast key={cityName} data={forecastData} />;
    });

  return (
    <div className="wrapper text-center">
      <div className="container-fluid header">
        <div className="row">
          <div className="col-md-2">
            <span>
              <strong>City</strong>
            </span>
          </div>
          <div className="col-md">
            <span>
              <strong>Temperature (F)</strong>
            </span>
          </div>
          <div className="col-md">
            <span>
              <strong>Pressure (hPa)</strong>
            </span>
          </div>
          <div className="col-md">
            <span>
              <strong>Humidity (%)</strong>
            </span>
          </div>
        </div>
      </div>
      <hr />
      <div className="forecasts-container">{renderForecasts()}</div>
    </div>
  );
};

export default ForecastDisplay;
