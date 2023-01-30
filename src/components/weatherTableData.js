import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";
import _ from 'lodash';


const WeatherTableData = () => {
  const cityInfo = useSelector((state) => state.forecasts)

  const [ cityData, setCityData ] = useState([]);

  useEffect(()=> {
    if (!_.isEmpty(cityInfo)) {
      if (cityData.find(city => city.city === cityInfo.city) === undefined) {
        setCityData([cityInfo, ...cityData]);
      }
    }}, [cityInfo]);
  
  const renderCityForecastData = () => {
    const average = array => array.reduce((a, b) => a + b) / array.length;
    
    if (!_.isEmpty(cityData)) {
      return cityData.map((cityForecast) => (
        <tr className="text-center" key={cityForecast.city}>
          <td className="align-middle">{cityForecast.city}</td>
          <td className="align-middle">
            <Sparklines data={cityForecast.temperature}>
              <SparklinesLine color="orange" />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <p>{Math.round(average(cityForecast.temperature))} F</p>
          </td>
          <td className="align-middle">
          <Sparklines data={cityForecast.pressure}>
              <SparklinesLine color="blue" />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <p>{Math.round(average(cityForecast.pressure))} hPa</p>
          </td>
          <td className="align-middle">
          <Sparklines data={cityForecast.humidity}>
              <SparklinesLine color="green" />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <p>{Math.round(average(cityForecast.humidity))} %</p>
          </td>
        </tr>
      ))
    }
  }
  
  


  return (
  <>
      <tbody>
        {renderCityForecastData()}
      </tbody>
  </>
  )
}

export default WeatherTableData