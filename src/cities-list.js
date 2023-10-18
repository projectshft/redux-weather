import { useSelector } from "react-redux";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";
export const CitiesList = () => {
  const error = useSelector((state) => state.error)
  const cities = useSelector((state) => state.cities)
  const weather = useSelector((state) => state.weather)

  const handleError = () => {
    if(error === "No results found. Please check spelling and try again") {
      return (<div className = "text-light bg-danger">{error}</div>)
    }
    else {return (<div></div>)}
  }
  const getWeather = (city) => {
    const currentCityWeather = weather.find((thisCity) => thisCity.hasOwnProperty(city))
  
  if (currentCityWeather && currentCityWeather[city]) {

     const temperatureSparklineData = (currentCityWeather[city].map (weatherBlock => parseInt(weatherBlock.main.temp)))
      const humiditySparklineData = (currentCityWeather[city].map (weatherBlock => parseInt(weatherBlock.main.humidity)))
      const pressureSparklineData = (currentCityWeather[city].map (weatherBlock => parseInt(weatherBlock.main.pressure)))

     const average = (data) => {
      let total = 0;
      for(let i = 0; i < data.length; i++) {
      total += data[i];
      }
         const avg = Math.floor(total / data.length);
        return avg
       }
  return <div className = "mt-4 container">
      <h3>{city} Weather:</h3>
      <div>5-day Average Temperature: {average(temperatureSparklineData)} °F
      <Sparklines className = "col-md-3" data={temperatureSparklineData} limit={40} width={100} height={20} margin={5}>
      <SparklinesLine />
    <SparklinesReferenceLine type="max" />
      </Sparklines>
      
      </div>

    <div>5-day Average Humidity: {average(humiditySparklineData)}%
      <Sparklines className = "col-md-3" data={humiditySparklineData} limit={40} width={100} height={20} margin={5}>
      <SparklinesLine />
    <SparklinesReferenceLine type="max" />
      </Sparklines>
    </div>

    <div>5-day Average Pressure: {average(pressureSparklineData)}" Hg
      <Sparklines className = "col-md-3" data={pressureSparklineData} limit={40} width={100} height={20} margin={5}>
      <SparklinesLine />
    <SparklinesReferenceLine type="max" />
      </Sparklines>
      </div>
      </div>
  }
  else {return <div></div>}
  }

  const citiesMap = cities.map(city =>  (<div key = {city + Math.random()}> 
      <div>{getWeather(city.name)}</div>
      <hr></hr>
      
       </div>))
  return (<div>
    <div>{citiesMap}</div>
    <div>{handleError()}</div>
    </div>)
}