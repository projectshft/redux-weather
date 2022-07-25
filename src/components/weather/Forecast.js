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

  const weatherData = () =>
    selector.map((data) => (
      <div className="forecast-grid" key={data.city.id}>
        <div className="forecast-grid-item">
          <div className="city-name">{data.city.name}</div>
          <Sparklines
            className="sparkline-img"
            data={data.list.map((value) => value.main.temp)}
            width={80}
            height={50}
            margin={5}
          >
            <SparklinesLine color="blue" />
            <SparklinesReferenceLine type="mean" />
          </Sparklines>
          <Sparklines
            className="sparkline-img"
            data={data.list.map((value) => value.main.pressure)}
            width={80}
            height={50}
            margin={5}
          >
            <SparklinesLine color="red" />
            <SparklinesReferenceLine type="mean" />
          </Sparklines>
          <Sparklines
            className="sparkline-img"
            data={data.list.map((value) => value.main.humidity)}
            width={80}
            height={50}
            margin={5}
          >
            <SparklinesLine color="orange" />
            <SparklinesReferenceLine type="mean" />
          </Sparklines>
          <div />
          <div className="grid-item-description">
            {Math.round(
              data.list
                .map((value) => value.main.temp)
                .reduce((acc, val) => acc + val) / 40
            )}
            °C
          </div>
          <div className="grid-item-description">
            {Math.round(
              data.list
                .map((value) => value.main.pressure)
                .reduce((acc, val) => acc + val) / 40
            )}{' '}
            hPa
          </div>
          <div className="grid-item-description">
            {' '}
            {Math.round(
              data.list
                .map((value) => value.main.humidity)
                .reduce((acc, val) => acc + val) / 40
            )}
            %
          </div>
        </div>
      </div>
    ));

  return <>{weatherData()}</>;
};

export default Forecast;
