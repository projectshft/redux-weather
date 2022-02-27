import { useState } from 'react';
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import { getForecast } from '../actions';

const SearchBar = () => {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!city.trim()) {
      setError('You must enter a city name.');
    } else {
      dispatch(getForecast(city));
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <input
            id="search"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            className="form-control"
            placeholder="Search for a city"
          />
          <input id="search-submit" type="submit" className="form-control" />
          <p>{error}</p>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
