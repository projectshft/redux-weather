import { useDispatch } from "react-redux";
import { GetData } from "../Actions/Index"

const Geolocation = () => {
  const dispatch = useDispatch();

  function success(position) {
    successFunction(position)
  }
  const options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
  };
  function error(err) {
    console.error(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);
  
  const successFunction = (position) => {
    dispatch(GetData(position))
  }
  return null;
}

export default Geolocation;