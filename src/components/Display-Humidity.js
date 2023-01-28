import { useSelector, useDispatch } from "react-redux";
import { fetchHumidity } from "../action-creators/actions";

const DisplayHumidity = () => {
  const weather = useSelector((state) => state.weather);
  const dispatch = useDispatch()

  console.log(weather)

  const handleDisplay = () => {
    if(weather.length === 3) {
      const humidityData = weather.filter((measurement) => {
        measurement.hasOwnProperty('humidity') 
         return measurement.humidity;
      });

      if(humidityData) {
        return humidityData[0].humidity.map((data) => <li>{data}</li>);
      }
    } else (console.log('wait'))
    
     
  }


  return(
    <ul>{handleDisplay()}</ul>
  )
}

export default DisplayHumidity;