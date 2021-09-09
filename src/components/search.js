import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../actions';


const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('submit!');
    dispatch(fetchWeather(query))
    setQuery('');
  }


  return(
     <div className='container'>
      <form onSubmit={handleFormSubmit}>
        <div className='form-group'>
          <input
            className='form-control'
            name='city'
            placeholder='Get a five-day forecast in your favorite cities'
            value={query} onChange={(e) => setQuery(e.target.value)}
          ></input>
          <button 
            type='submit'
            className='btn'
          >submit</button>
        </div>
      </form>
    </div>
  )
}

export default Search