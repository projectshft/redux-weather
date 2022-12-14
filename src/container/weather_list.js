import { useSelector } from "react-redux";
import { Sparklines,SparklinesLine,SparklinesReferenceLine } from 'react-sparklines';

//component which returns list of weather that contains 5 day charts for temp, pressure, and humidity
const WeatherList = () =>{
  const weatherPosts = useSelector(state => state.weatherPosts)

  const renderChart = (dataValues) => {
    return(
      <td >
        <Sparklines limit={5} svgWidth={250} svgHeight={75} margin={5} data={dataValues}>
          <SparklinesLine />
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
      </td>
    )
  }

  const RenderRow = () => { 
    if(weatherPosts.length>0){
      return weatherPosts.map((currentWeatherPost, index)=>{
        return(
          <tr key={index}>
            <th>{currentWeatherPost.city}</th>
            {renderChart(currentWeatherPost.temp)}
            {renderChart(currentWeatherPost.pressure)}
            {renderChart(currentWeatherPost.humidity)}
          </tr>
        )
      })
    } 
    else {
      return (<tr><th>No Weather to Show</th></tr>)
    }
  }
  
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">City</th>
          <th scope="col">Temperature (&#8457;)</th>
          <th scope="col">Pressure</th>
          <th scope="col">Humidity</th>
        </tr>
      </thead>
      <tbody>
      <RenderRow />
      </tbody>
    </table>
  )
}

export default WeatherList;
