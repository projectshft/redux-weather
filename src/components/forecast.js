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

  useEffect(() => {
    dispatch(fetchForecast());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchForecast]);

  // undefined - waiting on call, so do ternary and if not ready, use []  
  const city = forecast?.city ? forecast.city : [];
  const tempsArr = forecast?.temps ? forecast.temps : [];
  const pressArr = forecast?.press ? forecast.press : [];
  const humidArr = forecast?.humid ? forecast.humid : [];

  // const averageFunc = (array) => array.reduce((a, b) => ( a + b) / array.length, []);

  const averageFunc = (array) => {
    const total = array.reduce((acc, x) => acc + x, 0);
    return (Math.round(total / array.length)).toString();
  }

  const tempsAvg = (averageFunc(tempsArr)) + " F";
  const pressAvg = (averageFunc(pressArr)) + " hPa";
  const humidAvg = (averageFunc(humidArr)) + " %";

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm" align="center">
            Durham
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
          <div className="col-sm" align="center">
          </div>
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