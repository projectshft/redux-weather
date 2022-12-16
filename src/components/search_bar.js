import React, {useState} from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchWeather } from '../actions/index'
import * as actions from '../actions';

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const onInputChange = (e) => {
    setTerm( e.target.value );
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'FETCH_WEATHER'})
    setTerm('');
    const weatherData = fetchWeather(term);

    console.log(weatherData);
  }

        return (
          <div>
            <form className='input-group' onSubmit={(e)=>onFormSubmit(e)}>
                <input
                    placeholder='Type any city to get a weather forecast'
                    className='form-control'
                    value={term}
                    onChange={(e)=>onInputChange(e)} />
                <span className='input-group-btn'>
                    <button className='btn btn-secondary' type='submit'>Go</button>
                </span>
            </form>
            </div>
        );
    }




// export default SearchBar;
const mapDispatchToProps = (dispatch) => {
  return {
    fetchWeather: ( )=> dispatch(fetchWeather()),
    dispatch
  }
}


    export default connect(null, mapDispatchToProps)(SearchBar);