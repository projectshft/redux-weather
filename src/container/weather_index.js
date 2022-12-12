import { /* useDispatch, */ useSelector } from "react-redux";
//import { fetchWeatherPosts } from "../actions"
//import { useEffect } from "react";
import _ from 'lodash';

const WeatherIndex = () =>{
  const weatherPosts = useSelector(state=> state.weatherPosts)
  //const dispatch = useDispatch();
  
  const renderTable = () => {
    if(!_.isEmpty(weatherPosts) > 0){
      return weatherPosts.map(weatherPost) => {
        for (let i = 0; i < weatherPost.list; i+=8){
          return(
            <tr>
              <th scope="row">{weaterPost.city.name}</th>
              <td>{weaterPost.city.list[i].main.temp}</td>
              <td>{weaterPost.city.list[i].main.pressure}</td>
              <td>{weaterPost.city.list[i].main.humidity}</td>
            </tr>
          )
        }
      }
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
        {renderTable}
      </tbody>
    </table>
  )
}

export default WeatherIndex;