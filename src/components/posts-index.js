
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, setDefault } from '../actions';
import { useForm } from "react-hook-form";
import _ from 'lodash';
import { useEffect } from 'react';
import { Sparklines, SparklinesReferenceLine, SparklinesLine } from 'react-sparklines';

const WeatherIndex = () => {
  const { register, handleSubmit } = useForm();
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  //checks if default is set and if so fetch default weather
  useEffect(() => {
    if (sessionStorage.getItem('default') !== null) {
      dispatch(fetchWeather(sessionStorage.getItem('default')))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchWeather]);

  //on search click handler, fetches weather
  const onSubmit = (data) => dispatch(fetchWeather(data.cityName));

  //set default click handler
  const handleSetDefault = (data, e) => {
    e.target.className = "btn btn-outline-secondary btn-sm"
    e.target.disabled = true;
    e.target.firstChild.data = 'Default set!'
    dispatch(setDefault(data.city.name));
  };

  //gets average of values returned from weather api where target = temp, humiditiy, or pressure
  const getAverage = (values, target) => {
    const valuesArray = values.map(item => item.main[target]);
    return parseInt(valuesArray.reduce((acc, v) => acc + v) / valuesArray.length);
  };

  //renders sparkline graph
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
    );
  };

  //renders table rows reflecting api return data for each row
  function renderWeatherRows() {
    if (!_.isEmpty(posts.weather)) {
      const renderedRows = posts.weather.map(item => 
        <tr key={item.city.name}>
        <th scope="row">
          {item.city.name}
          <button onClick={(e) => {handleSetDefault(item, e)}} type="button" className="btn btn-secondary btn-sm">Set default</button>
        </th>
        <td>{renderGraph(item.list, 'temp', 'orange', 'F')}</td>
        <td>{renderGraph(item.list, 'pressure', 'green', 'hPa')}</td>
        <td>{renderGraph(item.list, 'humidity', 'grey', '%')}</td>
     </tr>
     );
     return renderedRows;
    };
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
          <tbody>{renderWeatherRows()}</tbody>
        </table>
    </div>
  );
};

export default WeatherIndex;