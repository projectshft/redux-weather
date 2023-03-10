import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FiveDayIndex from './5day-index';
import { fetch5Day } from '../actions';

const Header = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.posts.cities);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetch5Day(city));
    setCity('');
  };

  return (
    <div>
      <div className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Redux Weather</h1>
          <form className="form-inline" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control mr-2"
                placeholder="Enter a city"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="container">
        <FiveDayIndex cities={cities} />
      </div>
    </div>
  );
};

export default Header;
