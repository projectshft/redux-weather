import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchForecast } from "../actions";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from "react-sparklines";

const Forecast = () => {
  const forecast = useSelector((state) => state.forecasts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchForecast());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchForecast]);

  // DO SOMETHING LIKE:

  // function renderPosts() {
  //   if (posts.length > 0) {
  //     return posts.map((post) => (
  //       <li className="list-group-item" key={post.id}>
  //         <Link to={`/posts/${post.id}`}>{post.title}</Link>
  //       </li>
  //     ));
  //   }
  //   return <div>No posts to show</div>;
  // }

  function rederForecasts() {

    if (forecast.length > 0) {

      return forecast.map((f) => (
        // there is f.temps, f.press, f.humid
        // the averages are what we need
      ))
    }

    return <div>Please enter a city</div>
  }
  console.log(singleForecast);

  let tempsArr = singleForecast?.temps ? singleForecast.temps : [];
  let pressArr = singleForecast?.press ? singleForecast.press : [];
  let humidArr = singleForecast?.humid ? singleForecast.humid : [];

  const averageFunc = (array) => {
    let total = array.reduce(function (x, acc) {
      return x + acc;
    }, 0);
    return Math.round(total / array.length);
  };

  const tempsAvg = averageFunc(tempsArr) + " F";
  const pressAvg = averageFunc(pressArr) + " hPa";
  const humidAvg = averageFunc(humidArr) + " %";
  const cityDisp = singleForecast?.city ? singleForecast.city : '';

  return (
    <div>
       
    </div>
  );
};

export default Forecast;
