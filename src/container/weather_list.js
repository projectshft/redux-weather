import { /* useDispatch, */ useSelector } from "react-redux";
import { Sparklines,SparklinesLine,SparklinesReferenceLine } from 'react-sparklines';
//import { fetchWeatherPosts } from "../actions"
//import { useEffect } from "react";

const WeatherList = () =>{
  const weatherPosts = useSelector(state => state.weatherPosts)
  //const dispatch = useDispatch();

  const RenderRow = () => { 
    if(weatherPosts.length>0){
      return weatherPosts.map((currentWeatherPost, index)=>{
        console.log(currentWeatherPost.city);
        return(
          <tr key={index}>
            <th>{currentWeatherPost.city}</th>
            <td >
              <Sparklines limit={5} svgWidth={250} svgHeight={75} margin={5} data={currentWeatherPost.temp}>
                <SparklinesLine />
                <SparklinesReferenceLine type="mean" />
              </Sparklines>
            </td>
            <td >
              <Sparklines  limit={5} svgWidth={250} svgHeight={75} margin={5} data={currentWeatherPost.pressure}>
                <SparklinesLine />
                <SparklinesReferenceLine type="mean" />
              </Sparklines>
            </td>
            <td >
              <Sparklines limit={5} svgWidth={250} svgHeight={75} margin={5} data={currentWeatherPost.humidity}>
                <SparklinesLine />
                <SparklinesReferenceLine type="mean" />
              </Sparklines>
            </td>
          </tr>
        )
      })
    } 
    else {
      return (<tr><th>No Weather to Show</th></tr>)
    }
  }
 




  // const renderTableHeader = () => {
  //   if(!_.isEmpty(weatherPosts) > 0) {
  //     return (

  //     )
  //   } else {
  //     return (
  //       <h1>Enter a city to display charts</h1>
  //     )
  //   }
  // }
  
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
