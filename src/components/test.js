import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../Redux/actions/apiSlice";
import { useEffect } from "react";
// import { weatherSlice } from "../Redux/actions/apiSlice";
import { selectTemperature } from "../Redux/actions/apiSlice";

const Test = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeather("marmora"))
  }, [dispatch])

  const temp = useSelector(selectTemperature)

  // useSelector(state => weatherSlice(state, temperature) )
  return (
    <h1>{temp}</h1>
    );
}
 
export default Test;