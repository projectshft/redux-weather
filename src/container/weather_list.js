import { useSelector } from "react-redux";
import { Sparklines,SparklinesLine,SparklinesReferenceLine } from 'react-sparklines';

//component which returns list of weather that contains 5 day charts for temp, pressure, and humidity
const WeatherList = () =>{
  //useSelector function allows component to extract data from Redux store state
  const weatherPosts = useSelector(state => state.weatherPosts)

  //function used to return JSX for the charts that takes the 5 day data values
  const renderChart = (dataValues, color) => {
    return(
        <Sparklines limit={5} svgWidth={250} svgHeight={75} margin={5} data={dataValues}>
          <SparklinesLine color={color}/>
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
    )
  }

  //function used return JSX row that contains all the charts and name of the city. Only render if state has objects.
  const RenderRow = () => { 
    if(weatherPosts.length>0){
      return weatherPosts.map((currentWeatherPost, index)=>{
        return(
          <tr key={index}>
            <th>{currentWeatherPost.city}</th>
            <td >
              {renderChart(currentWeatherPost.temp, 'blue')}
              <div className="text-center">{currentWeatherPost.tempAve} &#8457;</div>
            </td>
            <td >
              {renderChart(currentWeatherPost.pressure, 'green')}
              <div className="text-center">{currentWeatherPost.pressureAve} &#13169;</div>
            </td>
            <td >
              {renderChart(currentWeatherPost.humidity, 'red')}
              <div className="text-center">{currentWeatherPost.humidityAve} %</div>
            </td>
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
          <th className="text-center" scope="col">Temperature</th>
          <th className="text-center" scope="col">Pressure</th>
          <th className="text-center" scope="col">Humidity</th>
        </tr>
      </thead>
      <tbody>
      <RenderRow />
      </tbody>
    </table>
  )
}

export default WeatherList;
