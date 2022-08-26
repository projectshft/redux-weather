import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchOneDay } from '../actions';
import FiveDayGraph from './FiveDayGraph';

const WeatherRow = () => {
  const weatherObj = useSelector((state) => state.weather)
  const dispatch = useDispatch();
  const longLat = [35.801011001660314, -78.61440264232716]

  useEffect(()=>{
    dispatch(fetchOneDay(longLat))
    console.log(weatherObj)
  })
  return (
    <div>
      <FiveDayGraph />
    </div>
  )
}

export default WeatherRow