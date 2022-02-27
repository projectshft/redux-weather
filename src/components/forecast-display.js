import { useSelector } from 'react-redux';
import Forecast from './forecast.js';

const ForecastDisplay = () => {
  const forecasts = useSelector((state) => state.forecasts);

  console.log(forecasts);

  const renderForecasts = () => {};

  return (
    <div className="forecasts-container">
      <Forecast />
    </div>
  );
};

export default ForecastDisplay;
