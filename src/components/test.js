import { useDispatch } from "react-redux";
import { fetchWeather } from "../Redux/actions/apiSlice";
import { useEffect } from "react";

const Test = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeather("marmora"))
  }, [dispatch])
  // dispatch(fetchWeather("marmora"))
  return (
    <h1>test...</h1>
    );
}
 
export default Test;