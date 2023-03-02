import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../Redux/actions/apiSlice";
import { useEffect } from "react";
import { Sparklines, SparklinesLine  } from 'react-sparklines';

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
    <div>
      <Sparklines data={[temp[0], temp[1], temp[2], temp[3], temp[4]]}>
  <SparklinesLine color="blue" />
</Sparklines>
<Sparklines data={[temp[0], temp[1], temp[2], temp[3], temp[4]]} limit={5} width={100} height={20} margin={5}>
</Sparklines>
    </div>
    );
}
 
export default Test;