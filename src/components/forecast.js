import { PropTypes } from 'prop-types';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';

const Forecast = ({ data }) => (
  <div className="forecast-container">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <h4 className="city-label">{data.city}</h4>
        </div>
        <div className="col-md">
          <Sparklines
            data={data.temperature.dataPoints}
            limit={40}
            width={200}
            height={100}
            margin={5}
          >
            <SparklinesLine color="orange" />
            <SparklinesReferenceLine type="mean" />
          </Sparklines>
          <h6>{`${data.temperature.avg} ${String.fromCharCode(0x00ba)}F`}</h6>
        </div>
        <div className="col-md">
          <Sparklines
            data={data.pressure.dataPoints}
            limit={40}
            width={200}
            height={100}
            margin={5}
          >
            <SparklinesLine color="purple" />
            <SparklinesReferenceLine type="mean" />
          </Sparklines>
          <h6>{`${data.pressure.avg} hPa`}</h6>
        </div>
        <div className="col-md">
          <Sparklines
            data={data.humidity.dataPoints}
            limit={40}
            width={200}
            height={100}
            margin={5}
          >
            <SparklinesLine color="grey" />
            <SparklinesReferenceLine type="mean" />
          </Sparklines>
          <h6>{`${data.humidity.avg} %`}</h6>
        </div>
      </div>
    </div>
  </div>
);

Forecast.propTypes = {
  data: PropTypes.shape({
    city: PropTypes.string,
    temperature: PropTypes.shape({
      avg: PropTypes.number,
      dataPoints: PropTypes.array,
    }),
    pressure: PropTypes.shape({
      avg: PropTypes.number,
      dataPoints: PropTypes.array,
    }),
    humidity: PropTypes.shape({
      avg: PropTypes.number,
      dataPoints: PropTypes.array,
    }),
  }),
};

export default Forecast;
