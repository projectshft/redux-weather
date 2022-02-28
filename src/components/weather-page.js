import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";
import axios from "axios";
import appKey from "./apiKeys.js";



const sampleData = [5, 10, 5, 20, 8, 15]

function fetchWeather() {
  const request = axios.get('https://api.openweathermap.org/data/2.5/forecast?', {
    params: {
      lat: '35',
      lon: '139',
      appid: appKey
    }
  });
  return request;
}

const WeatherPage = () => {
  console.log(fetchWeather());
  return (
    <div>
      <Sparklines data={sampleData}>
        <SparklinesLine />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
    </div>
  )
}


export default WeatherPage;