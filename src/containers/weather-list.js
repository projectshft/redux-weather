import { useSelector } from "react-redux";
import RenderChart from "./render-chart";

const WeatherList = () =>  {
  const weatherData = useSelector(state => state.weatherData);

  // function to convert Kelvin to Fahrenheit
  const convertKelvinToFahrenheit = (kelvinTemperature) => {
    return 1.8 * (kelvinTemperature - 273) + 32;
  }
  
  // function to organize returned data from request and render to the page 
  const renderWeatherList = (data) => {
    const cityId = Math.round(Math.random() * 10000000);
    const cityName = data.city.name;
    const cityTemp = data.list.map(weatherItem => convertKelvinToFahrenheit(weatherItem.main.temp));
    const cityPressure = data.list.map(weatherItem => weatherItem.main.pressure);
    const cityHumidity = data.list.map(weatherItem => weatherItem.main.humidity);
    
    return (
      <div className="row d-flex align-items-center text-center" key={cityId}>
        <div className="col">{cityName}</div>
        <div className="col"><RenderChart color="red" units="F" data={cityTemp} /></div>
        <div className="col"><RenderChart color="green" units="hPa" data={cityPressure} /></div>
        <div className="col m-2"><RenderChart color="blue" units="%" data={cityHumidity} /></div>
        <hr/>
      </div>
    );
  }

  return (
    <div>
      {weatherData.map(weatherItem => renderWeatherList(weatherItem))}
    </div>
   
  );
}

export default WeatherList;