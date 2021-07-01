import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchForecast } from "../actions";

const Forecast = () => {
  const forecastTemps = useSelector((state) => {
    
    console.log(state.posts[0])

    // const a = state.posts[0].forEach((i) => state.posts[0][i].main.temp);

    // console.log(a);
    // return state.posts;
  });

  // const post = useSelector(({ posts }) => {
  //   return posts.find((post) => {
  //     return post.id === parseInt(props.match.params.id);
  //   });
  // });

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchForecast());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchForecast]);

  // console.log(forecast[0]);
  // // want array tempsArr of the 40 temps
  // // these are forecast[i].main.temp
  // const makeArr = (element) => {
  //   tempArr = forecast.map((x) =>
  //   )
  // }
  // want array pressArr of the 40 pressures
  // these are forecast[i].main.pressure

  // want array humidArr of the 40 humidities
  // these are forecast[i].main.humidity

  return (
    <div>

    </div>
  );
};

export default Forecast;