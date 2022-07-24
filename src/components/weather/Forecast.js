import './forecast.css';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';

const Forecast = () => (
  <div className="forecast-grid">
    <div className="forecast-grid-item">
      <div className="city-name">Charleston</div>
      <Sparklines
        className="sparkline-img"
        data={[5, 1, 4, 2, 7]}
        limit={5}
        width={100}
        height={50}
        margin={5}
      >
        <SparklinesLine color="blue" />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
      <Sparklines
        className="sparkline-img"
        data={[5, 1, 4, 2, 7]}
        limit={5}
        width={100}
        height={50}
        margin={5}
      >
        <SparklinesLine color="red" />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
      <Sparklines
        className="sparkline-img"
        data={[5, 1, 4, 2, 7]}
        limit={5}
        width={100}
        height={50}
        margin={5}
      >
        <SparklinesLine color="orange" />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
      <div />
      <div className="grid-item-description">89°F</div>
      <div className="grid-item-description">1012 hPa</div>
      <div className="grid-item-description">63%</div>
    </div>
  </div>
);

export default Forecast;
