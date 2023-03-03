import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { temp, pressure, humidity } from "../Redux/slices/testSlice";
import { fetchWeather } from "../Redux/slices/testSlice";
import { getTemp } from "../Redux/helperFunctions";

export default function OtherApp() {
  const dispatch = useDispatch();
  dispatch(fetchWeather("marmora"))
  const tempMe = useSelector((state) => state.weather.temperature)

  const display = dispatch(fetchWeather("Marmora"))

  console.log(display(temp))
  

  // const pressure = useSelector((state) => state.pressure.value);
  // const humid = useSelector((state) => state.humidity.value);

  return (
   <div>
   </div>
  )
}