
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../actions';
import { useForm } from "react-hook-form";
import _ from 'lodash';
import { Sparklines, SparklinesReferenceLine, SparklinesLine } from 'react-sparklines';

const WeatherIndex = () => {
  const { register, handleSubmit } = useForm();
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(fetchWeather(data.cityName))
  };

  const getAverage = (values, target) => {
    const valuesArray = values.map(item => item.main[target]);
    return parseInt(valuesArray.reduce((acc, v) => acc + v) / valuesArray.length);
  };

  const renderGraph = (values, target, color, symbol) => {
    const valuesArray = values.map(item => item.main[target]);
    const avgValue = getAverage(values, target);
    return (
      <div style={{width: '300px'}}>
        <Sparklines data={valuesArray} width={300} height={200} margin={5}>
          <SparklinesLine color={color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <p className="text-center">{avgValue} {symbol}</p>
      </div>
    )
  };

  function renderWeatherRows() {
    if (!_.isEmpty(posts.weather)) {
      const renderedRows = posts.weather.map(item => 
        <tr key={item.city.name}>
        <th scope="row">{item.city.name}</th>
        <td>{renderGraph(item.list, 'temp', 'orange', 'F')}</td>
        <td>{renderGraph(item.list, 'pressure', 'green', 'hPa')}</td>
        <td>{renderGraph(item.list, 'humidity', 'grey', '%')}</td>
     </tr>
      )         
      return (
           renderedRows
      );
    }
    return <tr><td>No weather to show</td></tr>;
  };

  return (
    <div>
       <form onSubmit={handleSubmit(onSubmit)} className="mt-5 mb-4">
        <div className="input-group">
          <input {...register("cityName")} className="form-control" placeholder="Get a five-day forecast in your favorite city"/>
          <div>
          <button className="btn btn-secondary" type="submit">Submit</button>
          </div>   
        </div>
        </form>
   
        <table className="table">
          <thead>
            <tr>
              <th scope="col">City</th>
              <th scope="col">Temperatue (F)</th>
              <th scope="col">Pressure (hPa)</th>
              <th scope="col">Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {renderWeatherRows()}
          </tbody>
        </table>
     <div></div>
    
    </div>
  );
};

export default WeatherIndex;
