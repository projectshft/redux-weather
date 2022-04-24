// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchPosts } from '../actions';
// import _ from 'lodash';

// import ReactDOM from 'react-dom';
import React from 'react';
import { fetchCity } from '../actions';

const ForecastIndex = () => {
  // const { handleSubmit } = useForm({
  //   resolver: yupResolver(p)
  // })
  // const searchBar = () => {
  //   return ( <div>Search Bar</div>
  //   )
  // } 

  const forecastDisplay = () => {
    return (
      <div>Forecast Table</div>
    )
  }
  const handleFormSubmit = (data) => {
    dispatchEvent(
      fetchCity(data)
    );
  }




  return (
    <div>
      <div className='text-xs-right'>
        <form onSubmit={ handleFormSubmit }>
          <div className='form-group'>
            <label>City</label>
            <input
              className='form-control'
              name='city'></input>          
          </div>
          <button className='btn btn-primary' type='submit'>Search</button>
        </form>
      </div>
      <hr></hr>
      <div className='forecast-list'>
        {forecastDisplay()}
      </div>
    </div>
  )
};

export default ForecastIndex;