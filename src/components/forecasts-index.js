import _ from 'lodash';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const ForecastsIndex = () => {
  const forecasts = useSelector(state => state.forecasts);
  const dispatch = useDispatch();

  function renderForecasts () {
    if (!_.isEmpty(forecasts)) {
      console.log('forecasts', forecasts);
    }
  }
  return (
    <div>
      <h1></h1>
    </div>
  )
}

export default ForecastsIndex;