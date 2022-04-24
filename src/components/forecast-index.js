// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchPosts } from '../actions';
// import _ from 'lodash';

import ReactDOM from 'react-dom';
import React from 'react';

const ForecastIndex = () => {

  const searchBar = () => {
    return ( <div>Search Bar</div>
    )
  } 

  const forecastDisplay = () => {
    return (
      <div>Forecast Table</div>
    )
  }


  return (
    <div>
      <div className='text-xs-right'>
        {searchBar()}
      </div>
      <div className='forecast-list'>
        {forecastDisplay()}
      </div>
    </div>
  )
};

export default ForecastIndex;