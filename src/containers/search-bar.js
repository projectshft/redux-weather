import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../actions';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => setQuery(e.target.value);

  const handleClick = () => {
    if (!query) {
      const placeholder =
        'Input is empty, plese, choose a city before clicking a button';
      return placeholder;
    }
    dispatch(fetchWeather(query));
  };
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        aria-describedby="button-addon2"
        aria-label="Search-bar"
        value={query}
        placeholder="put here your city"
        onChange={handleChange}
      />
      <button
        onClick={handleClick}
        type="button"
        className="btn btn-outline-secondary"
        id="button-addon2"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
