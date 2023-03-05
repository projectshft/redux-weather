import {  useSelector } from "react-redux";
import {selectCity, selectHumidity, selectPressure, selectTemperature } from "../Redux/slices/apiSlice";
import { Sparklines, SparklinesLine } from "react-sparklines";




const Test = () => {
  
  const temp = useSelector(selectTemperature);
  const pres = useSelector(selectPressure);
  const hum = useSelector(selectHumidity);
  const cityInfo = useSelector(selectCity);
  




  // useSelector(state => weatherSlice(state, temperature) )
  return (
    <div>
      <div class="container text-center">
        <div class="row align-items-start">
          <div class="col">
            <h3>Temperature</h3>
            <Sparklines data={[temp[0], temp[1], temp[2], temp[3], temp[4]]}>
              <SparklinesLine color="blue" />
            </Sparklines>{" "}
          </div>
          <div class="col">
            <h3>Pressure</h3>
            <Sparklines data={[pres[0], pres[1], pres[2], pres[3], pres[4]]}>
              <SparklinesLine color="blue" />
            </Sparklines>{" "}
            <h4>{cityInfo}</h4>
          </div>
          <div class="col">
            <h3>Humidity</h3>
            <Sparklines data={[hum[0], hum[1], hum[2], hum[3], hum[4]]}>
              <SparklinesLine color="blue" />
            </Sparklines>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
