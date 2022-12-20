import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../actions/index'

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const onInputChange = (e) => {
    setTerm( e.target.value );
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(term))
    setTerm('');
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

export default SearchBar;