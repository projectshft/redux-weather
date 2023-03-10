import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FiveDayIndex from './5day-index';
import { fetch5Day } from '../actions';

const Header = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetch5Day(city));
  };

  return (
    <div>
      <div className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Redux Weather</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="container">
        <FiveDayIndex />
      </div>
    </div>
  );
};

export default Header;
