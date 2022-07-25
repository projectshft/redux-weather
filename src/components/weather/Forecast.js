import './forecast.css';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';
import { useSelector } from 'react-redux';

const Forecast = () => {
  const selector = useSelector((state) => state.weather);
  console.log(selector);
  const cityName = selector.city.name;
  const temperature = selector.list.map((data) => data.main.temp);
  const pressure = selector.list.map((data) => data.main.pressure);
  const humidity = selector.list.map((data) => data.main.humidity);

  return (
    <div className="forecast-grid">
      <div className="forecast-grid-item">
        <div className="city-name">{cityName}</div>
        <Sparklines
          className="sparkline-img"
          data={temperature}
          width={100}
          height={50}
          margin={5}
        >
          <SparklinesLine color="blue" />
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
        <Sparklines
          className="sparkline-img"
          data={humidity}
          width={100}
          height={50}
          margin={5}
        >
          <SparklinesLine color="red" />
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
        <Sparklines
          className="sparkline-img"
          data={pressure}
          width={100}
          height={50}
          margin={5}
        >
          <SparklinesLine color="orange" />
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
        <div />
        <div className="grid-item-description">
          {Math.round(
            temperature.reduce((acc, val) => acc + val / temperature.length)
          )}
          °F
        </div>
        <div className="grid-item-description">
          {Math.round(
            pressure.reduce((acc, val) => acc + val / temperature.length)
          )}{' '}
          hPa
        </div>
        <div className="grid-item-description">
          {' '}
          {Math.round(
            humidity.reduce((acc, val) => acc + val / temperature.length)
          )}
          %
        </div>
      </div>
    </div>
  );
};

export default Forecast;
