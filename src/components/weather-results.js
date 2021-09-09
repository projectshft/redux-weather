import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { fetchWeather } from '../actions';
import SingleResult from './single-result';

const WeatherResults = () => {
  // 'results' refers to the redux state
  const results = useSelector(state => state.results);
  const dispatch = useDispatch();

  const renderResults = () => {
    if (!_.isEmpty(results)) {
    return results.map((result) => (
      <div key={result.id}>
        <SingleResult result={result}/>
      </div>
    ))
    }
  }

  useEffect(() => {
    dispatch(fetchWeather());
  }, [fetchWeather])
 

  return (
    <div className='container'>
      <div className='result-template'>
        <div className='row'>
          <div className='col'>
            city
          </div>
          <div className='col'>
            temperature
          </div>
          <div className='col'>
            pressure
          </div>
          <div className='col'>
            humidity
          </div>
        </div>
      </div>

      <hr></hr>

    <div className='results'>
      {renderResults()}
    </div>
  </div>

     
  )
}

export default WeatherResults