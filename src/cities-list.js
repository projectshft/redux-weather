import { useSelector } from "react-redux";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";
export const CitiesList = () => {
  const error = useSelector((state) => state.error);
  const cities = useSelector((state) => state.cities);
  const weather = useSelector((state) => state.weather);

  // Check if error message indicates failed API call
  const handleError = () => {
    if(error === "No results found. Please check spelling and try again") {
      return (<td colSpan = "4" className = "text-light bg-danger">{error}</td>);
    }
    else {return (null);}
  }

  // If there is data for the city's weather, return a table row populated with it
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
        return avg;
       }
  return <tr key = {city}>
      <th scope = "row">{city}</th>
      <td>
        <p>5-day Average Temperature: {average(temperatureSparklineData)} °F</p>
      <Sparklines className = "col" data={temperatureSparklineData} width={100} height={20} margin={5}>
      <SparklinesLine style = {{ stroke: "blue", fill: "#A7C7E7", strokeWidth: ".5"}} />
    <SparklinesReferenceLine type="max" />
      </Sparklines>
      </td>

    <td>
      <p>5-day Average Humidity: {average(humiditySparklineData)}%</p>
      <Sparklines className = "col" data={humiditySparklineData}  width={100} height={20} margin={5}>
      <SparklinesLine style = {{ stroke: "green", fill: "#77DD77", strokeWidth: ".5"}} />
    <SparklinesReferenceLine type="max" />
      </Sparklines>
    </td>
    <td>
      <p>5-day Average Pressure: {average(pressureSparklineData)}" Hg</p>
      <Sparklines className = "col" data={pressureSparklineData} width={100} height={20} margin={5}>
      <SparklinesLine style = {{ stroke: "gray", fill: "#CDCDCD", strokeWidth: ".5"}} />
    <SparklinesReferenceLine type="max" />
      </Sparklines>
      </td>
      </tr>
  }
  else {return <tr key = {Math.random()}></tr>};
  }

  const citiesMap = cities.map(city =>  ( 
        getWeather(city.name)
      ));

  return (
  <div className = "container">
    <table className="table">
    <thead>
      <tr>
      <th scope="col">
      City
      </th>
     <th scope="col">
      Temperature
     </th>
     <th scope="col">
      Humidity
     </th>
     <th scope="col">
      Pressure
     </th>
     </tr>
     </thead>
      <tbody>{citiesMap}
      <tr className = "py-2 mt-3 mb-3">{handleError()}</tr>
      </tbody>
    </table>
    </div>
    )
};