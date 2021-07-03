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

  console.log(forecast);
  // undefined - waiting on call
  
  const city = 'Durham'

  const tempsArr = forecast[i]?.temps ? forecast.temps : [];

  const pressArr = [7, 5, 3, 8, 2]
  const humidArr = [100, 55, 75, 82, 12]

  const averageFunc = (array) => array.reduce((a, b) => ( a + b) / array.length, []);

  const tempsAvg = (averageFunc(tempsArr)).toString() + " F";
  const pressAvg = (averageFunc(pressArr)).toString() + " hPa";
  const humidAvg = (averageFunc(humidArr)).toString() + " %";


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