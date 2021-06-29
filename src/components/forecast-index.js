import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchForecast } from "../actions";

const Forecast = () => {
  const forecast = useSelector((state) => state.forecast);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchForecast());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchForecast]);

  return (
    <div>
      {forecast}
    </div>
  );
};

export default Forecast;