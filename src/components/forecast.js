import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchForecast } from "../actions";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from "react-sparklines";

const Forecast = () => {
  // forecast will be array of all the objects in the state, one for each city
  const forecast = useSelector((state) => state.forecasts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchForecast());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchForecast]);

  // helper function to calculate the average of the temp, humidity, and pressure arrays
  const averageFunc = (array) => {
    let total = array.reduce(function (x, acc) {
      return x + acc;
    }, 0);
    return Math.round(total / array.length);
  };

  function renderForecasts() {
    if (forecast.length > 0) {
      return forecast.map((f) => (
        <div>
          <div className="container">
            <div className="row">
              <div className="col-sm" align="center">
                {f.city}
              </div>
              <div className="col-sm">
                <Sparklines data={f.temps}>
                  <SparklinesLine color="#CE93D8" />
                  <SparklinesReferenceLine
                    type="avg"
                    style={{ stroke: "#546E7A", strokeDasharray: "2, 2" }}
                  />
                </Sparklines>
              </div>
              <div className="col-sm">
                <Sparklines data={f.press}>
                  <SparklinesLine color="#C5CAE9" />
                  <SparklinesReferenceLine
                    type="avg"
                    style={{ stroke: "#546E7A", strokeDasharray: "2, 2" }}
                  />
                </Sparklines>
              </div>
              <div className="col-sm">
                <Sparklines data={f.humid}>
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
                { averageFunc(f.temps)} F
              </div>
              <div className="col-sm" align="center">
                { averageFunc(f.press) } hPa
              </div>
              <div className="col-sm" align="center">
                { averageFunc(f.humid) } %
              </div>
            </div>
            <br />
          </div>
        </div>
      ));
    }

    return <div>Please enter a city</div>
  }

  return (
    <div>
     { renderForecasts() }
    </div>
  );
};

export default Forecast;
