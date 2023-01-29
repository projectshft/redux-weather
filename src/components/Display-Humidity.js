import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from '../action-creators/actions';
import { useState, useEffect } from 'react'

const DisplayHumidity = (props) => {
  const weather = useSelector((state) => state.weather);
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fetchWeather(props.city))   
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDisplay = () => {
    
    console.log(weather)
     
  }


  return(
    <button onClick={handleDisplay}>done</button>
  )
}

export default DisplayHumidity;

// it loops through weather looking for the property humidity. It returns an array with that object and then we use map to display the data.




// if(weather.length === 3) {
//   const humidityData = weather.filter((measurement) => {
//     measurement.hasOwnProperty('humidity') 
//      return measurement.humidity;
//   });

//   if(humidityData) {
//     return humidityData[0].humidity.map((data) => <li>{data}</li>);
//   }
// } else (console.log('wait'))