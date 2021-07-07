import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchForecast } from "../actions";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from "react-sparklines";

const Forecast = () => {
  const forecast = useSelector((state) => state.forecasts);
  const dispatch = useDispatch();

  // not appending
  console.log(forecast);

  useEffect(() => {
    dispatch(fetchForecast());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchForecast]);

  const tempsArr = forecast?.temps ? forecast.temps : [];
  const pressArr = forecast?.press ? forecast.press : [];
  const humidArr = forecast?.humid ? forecast.humid : [];

  const averageFunc = (array) => {
    let total = array.reduce(function (x, acc) {
        return x + acc;
      }, 0);
    return Math.round(total / array.length);
  };

  const tempsAvg = averageFunc(tempsArr) + " F";
  const pressAvg = averageFunc(pressArr) + " hPa";
  const humidAvg = averageFunc(humidArr) + " %";
  const cityDisp = forecast?.city ? forecast.city : '';

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm" align="center">
            {cityDisp}
          </div>
          <div className="col-sm">
            <Sparklines data={tempsArr}>
              <SparklinesLine color="#CE93D8" />
              <SparklinesReferenceLine
                type="avg"
                style={{ stroke: "#546E7A", strokeDasharray: "2, 2" }}
              />
            </Sparklines>
          </div>
          <div className="col-sm">
            <Sparklines data={pressArr}>
              <SparklinesLine color="#C5CAE9" />
              <SparklinesReferenceLine
                type="avg"
                style={{ stroke: "#546E7A", strokeDasharray: "2, 2" }}
              />
            </Sparklines>
          </div>
          <div className="col-sm">
            <Sparklines data={humidArr}>
              <SparklinesLine color="#4FC3F7" />
              <SparklinesReferenceLine
                type="avg"
                style={{ stroke: "#546E7A", strokeDasharray: "2, 2" }}
              />
            </Sparklines>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm" align="center"></div>
          <div className="col-sm" align="center">
            {tempsAvg}
          </div>
          <div className="col-sm" align="center">
            {pressAvg}
          </div>
          <div className="col-sm" align="center">
            {humidAvg}
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Forecast;
