import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';

const Forecast = ({ data }) => (
  <div className="forecast-container">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md" />
        <div className="col-md-3">
          <Sparklines
            data={data.temperature}
            limit={20}
            width={500}
            height={50}
            margin={5}
          >
            <SparklinesLine color="yellow" />
            <SparklinesReferenceLine type="mean" />
          </Sparklines>
        </div>
        <div className="col-md-3">
          <Sparklines
            data={data.pressure}
            limit={20}
            width={500}
            height={50}
            margin={5}
          >
            <SparklinesLine color="purple" />
            <SparklinesReferenceLine type="mean" />
          </Sparklines>
        </div>
        <div className="col-md-3">
          <Sparklines
            data={data.humidity}
            limit={20}
            width={500}
            height={50}
            margin={5}
          >
            <SparklinesLine color="grey" />
            <SparklinesReferenceLine type="mean" />
          </Sparklines>
        </div>
      </div>
    </div>
  </div>
);

export default Forecast;
