import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";


function WeatherView() {
  const weather = useSelector((state) => state.weather);

  useEffect(() => {
  }, [weather]);

  return (
    <div className="App">
      {weather.locations.map((e) => (
        <div class="container text-center">
        <div class="row align-items-start">
          <div class="col">
            <Sparklines data={[e.temperature[0], e.temperature[1], e.temperature[2], e.temperature[3], e.temperature[4]]}>
              <SparklinesLine color="blue" />
            </Sparklines>{" "}
          </div>
          <div class="col">
            <Sparklines data={[e.pressure[0], e.pressure[1], e.pressure[2], e.pressure[3], e.pressure[4]]}>
              <SparklinesLine color="blue" />
            </Sparklines>{" "}
            <h4>{e.name}</h4>
          </div>
          <div class="col">
            <Sparklines data={[e.humidity[0], e.humidity[1], e.humidity[2], e.humidity[3], e.humidity[4]]}>
              <SparklinesLine color="blue" />
            </Sparklines>{" "}
          </div>
        </div>
      </div>
      ))}
    </div>
  );
}

export default WeatherView;


