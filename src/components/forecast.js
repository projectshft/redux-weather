import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchForecast } from "../actions";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from "react-sparklines";


const Forecast = () => {
  const forecastTemps = useSelector((state) => {
    
    console.log(state.posts[0])
    
    // the above is array but when I run any kind of array method on it I get "cant find property of undefined"

    // const a = state.posts[0]._____ => state.posts[0][i].main.temp);

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
  const city = 'Durham'
  const tempsArr = [75, 77, 78, 92, 50]
  const pressArr = [7, 5, 3, 8, 2]
  const humidArr = [100, 55, 75, 82, 12]

  return (
    <div>
      <div className="container">

        <div className="row">
          <div className="col-sm" align="center">
            Durham
          </div>
          <div className="col-sm">
            <Sparklines data={tempsArr}>
              <SparklinesLine color="#CE93D8" />
              <SparklinesReferenceLine
                type="avg"
                style={{ stroke: "#546E7A", strokeDasharray: "2, 2" }}
              />
            </Sparklines>
          </div>
          <div className="col-sm">
            <Sparklines data={pressArr}>
              <SparklinesLine color="#C5CAE9" />
              <SparklinesReferenceLine
                type="avg"
                style={{ stroke: "#546E7A", strokeDasharray: "2, 2" }}
              />
            </Sparklines>
          </div>
          <div className="col-sm">
            <Sparklines data={humidArr}>
              <SparklinesLine color="#4FC3F7" />
              <SparklinesReferenceLine
                type="avg"
                style={{ stroke: "#546E7A", strokeDasharray: "2, 2" }}
              />
            </Sparklines>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;